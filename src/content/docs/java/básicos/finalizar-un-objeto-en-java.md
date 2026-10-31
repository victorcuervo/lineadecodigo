---
title: "Finalizar un objeto en Java"
description: "Aprende cómo finaliza un objeto en Java, por qué finalize() y runFinalization() no son fiables y cómo liberar recursos correctamente con AutoCloseable."
date: 2011-03-04
updatedDate: 2026-10-31
tags: ["object","system","garbage-collector","java-io"]
slug: java/basicos/finalizar-un-objeto-en-java
type: doc
topic: java
id: 39859745-89cf-42a2-9a26-fa536e2c74f6
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/FinalizarUnObjeto.java
---

## Qué significa finalizar un objeto en Java


Cuando un objeto deja de ser alcanzable por el programa, el `garbage collector` puede recuperar la memoria que ocupa. En versiones antiguas de [Java](https://lineadecodigo.com/java/), la clase `Object` ofrecía el método `finalize()` como un punto de limpieza que podía ejecutarse antes de reclamar esa memoria. Sin embargo, la máquina virtual no garantiza cuándo se ejecutará ni siquiera que llegue a ejecutarlo.


El método `finalize()` se planteó para realizar acciones sobre el objeto antes de su eliminación. Por ejemplo, se podía intentar cerrar un fichero o una conexión de base de datos. Esta estrategia no es adecuada para gestionar recursos: la ejecución es impredecible, puede retrasarse y el programa no debe depender de que el recolector de basura actúe en un momento concreto.


## Sintaxis tradicional de finalize()


La definición tradicional del método `finalize()` tenía la siguiente estructura:


```java
protected void finalize() throws Throwable {
  System.out.println("Finalizando el Objeto");
  super.finalize();
}
```


Al incluir `finalize()` en una clase se sobrescribía el método que heredaba de `Object`. La llamada a `super.finalize()` ejecutaba la implementación de la clase padre y conservaba la cadena de finalización. El método podía declarar `Throwable`, por lo que la implementación original debía tener en cuenta esa excepción.


Este código conserva el ejemplo clásico, pero debe entenderse como una referencia histórica. Una llamada a `finalize()` no equivale a un destructor determinista y no es un lugar fiable para cerrar ficheros, conexiones, sockets ni otros recursos externos.


## System.runFinalization() y el recolector de basura


El código original también utilizaba `System.runFinalization()` para sugerir a la máquina virtual de Java que ejecutase los métodos de finalización pendientes:


```java
public static void main(String[] args) {
  FinalizarUnObjeto fuo = new FinalizarUnObjeto();
  System.out.println(fuo.toString());
  fuo = null;
  System.runFinalization();
}
```


`fuo = null` elimina esa referencia concreta, pero no demuestra por sí solo que el objeto sea inalcanzable: podría existir otra referencia. Además, `System.runFinalization()` solo expresa una sugerencia a la máquina virtual; no obliga a ejecutar el recolector de basura ni garantiza que se invoque `finalize()`. Por eso no debe utilizarse para liberar recursos.


Tanto `Object.finalize()` como `System.runFinalization()` pertenecen a una API heredada y están obsoletos, marcados para eliminación en las versiones modernas de Java. El código puede servir para comprender aplicaciones antiguas, pero una aplicación nueva debe evitar esta técnica.


## Alternativa recomendada: AutoCloseable y try-with-resources


Los recursos que necesitan una liberación explícita deben implementar `AutoCloseable` y cerrarse mediante `try-with-resources`. De esta forma, Java invoca `close()` al abandonar el bloque, incluso cuando se produce una excepción.


```java
public final class RecursoTemporal implements AutoCloseable {
  private boolean cerrado;

  public void usar() {
    if (cerrado) {
      throw new IllegalStateException("El recurso ya está cerrado");
    }
    System.out.println("Usando el recurso");
  }

  @Override
  public void close() {
    if (!cerrado) {
      System.out.println("Cerrando el recurso");
      cerrado = true;
    }
  }

  public static void main(String[] args) {
    try (RecursoTemporal recurso = new RecursoTemporal()) {
      recurso.usar();
    }
  }
}
```


El resultado esperado es un mensaje de uso seguido de un mensaje de cierre. El cierre se produce al salir del bloque `try`, sin esperar al `garbage collector`. El patrón es aplicable a ficheros, flujos de entrada y salida, conexiones de base de datos y sockets que proporcionen una operación de cierre.

