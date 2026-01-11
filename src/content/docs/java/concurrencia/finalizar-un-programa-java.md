---
title: "Finalizar un programa Java"
description: "Uso de un hook para poder controlar las acciones a realizar al finalizar un programa Java."
date: 2015-09-22
updatedDate: 2026-01-11
tags: ["hilos","thread","runtime","addshutdownhook","exit"]
slug: java/concurrencia/finalizar-un-programa-java
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/hilos/CierreAplicacion.java
topic: java

---

¿Qué pasa si mi programa Java finaliza de forma inesperada? o ¿Cómo puedo realizar una serie de operaciones al finalizar un programa [Java](https://www.manualweb.net/java/)? Es muy normal que nos hagamos estas preguntas si nos preocupa que el programa [Java](https://www.manualweb.net/java/) se cierre y nos deje las conexiones a la base de datos abiertas o puertos de sockets colgados.


Para poder solucionar esta situación podemos realizar una serie de operaciones y así finalizar un programa [Java](https://www.manualweb.net/java/) de forma correcta. La idea es añadir un **hook** en el cual codificaremos las sentencias que queramos que se ejecuten al finalizar el programa.


> Es importante saber que esto solo controla si se ha ejecutado la última línea de un programa o ante un `System.exit()` o en un cierre controlado de la JVM. No funcionará si el sistema operativo mata el proceso.


## Añadir un Hook con addShutdownHook()


Para poder añadir el hook utilizamos el método [`.addShutdownHook()`](https://www.w3api.com/Java/Runtime-java-lang/addShutdownHook/). Dicho método recibirá un objeto `Thread`. Este será el hilo que se ejecute al finalizar el programa.


```java
Runtime.getRuntime().addShutdownHook(Thread t);
```


Vemos que el método [`.addShutdownHook()`](https://www.w3api.com/Java/Runtime-java-lang/addShutdownHook/) se ejecuta sobre el entorno en el que estemos ejecutando nuestro programa [Java](https://www.manualweb.net/java/). Es por ello que utilizamos el objeto [`Runtime`](https://www.w3api.com/Java/Runtime-java-lang/).


## Codificar el Thread


Lo siguiente será codificado el hilo `Thread`, eso nos llevará a codificar su método `.run()` que será el que tenga el contenido de ejecución del hilo.


```java
Thread t = new Thread() {
  public void run() {
    // Código a ejecutar al finalizar
  }
};
```


## Integrar el Hook en el Programa


Ya solo nos queda añadir este hook dentro de un método de nuestro programa principal.


```java
private void addShutdownHook() {
  Runtime.getRuntime().addShutdownHook(new Thread() {
    public void run() {
      System.out.println("Finalizando la aplicación");
    }
  });
}
```


E invocar al método desde el programa para añadir el hook y que este se ejecute a finalizar un programa [Java](https://www.manualweb.net/java/).


```java
addShutdownHook();
```

