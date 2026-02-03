---
title: "Invertir Array"
description: "Código que consigue invertir array en Java."
date: 2012-03-07
updatedDate: 2026-01-10
tags: ["array"]
slug: java/arrays/invertir-array
author: Pablo Ruiz
type: doc
id: 128f9059-c3e9-4a94-81c3-ca3e5a0e0906
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/arrays/InvertirArray.java
---

Hoy les explicaré un método en [Java](https://www.manualweb.net/java/) que hice para invertir arrays simples. En él haremos lo siguiente


1. Clase llamada InvertirArray
2. Declararemos un array de tipo Object llamado invertir_int
3. Un método llamado invertir(Object[] arg0)
4. Un método que nos devolverá el arreglo invertido llamado getArreglo_invertido()
5. Y el Main para probar


La definición de la clase [Java](https://www.manualweb.net/java/) queda así:


```java
 public class InvertirArray {}
```


Ya sabes que dentro de las llaves haremos todo lo demás. Seguimos con la declaración del array de tipo [Object]( "Clase Object de Java"). Este array nos servirá para invertir el array inicial.


```java
private static Object[] invertir_int;
```


Luego construimos el método que invertirá el array:


```java
public static void invertir(Object[] array) {
    invertir_int = new Object[array.length];
    int maximo = array.length;

    for (int i = 0; i<array.length; i++) {           
        invertir_int[maximo - 1] = array[i];
        maximo--;
    }
}
```



Lo que hacemos es instanciar un array con el tamaño del array que hay que invertir y luego recorreremos dicho array de atrás adelante para ir creando el array invertido.

Luego el método que nos devuelve el arreglo:


```java
public static Object[] getArreglo_invertido() {
    return InvertirArray.invertir_int;
}
```


y finalmente una simple forma de usar este método:


```java
public static void main(String[] args) {
	Object[] arreglo = new Object[5];

  arreglo[0] = 0;
  arreglo[1] = 1;
  arreglo[2] = 2;
  arreglo[3] = 3;
  arreglo[4] = 4;

  for (int i = 0; i<arreglo.length; i++) {
      Object j = arreglo[i];
      System.out.println("Arreglo Normal: " + j);
  }

  try {
      invertir(arreglo);
  } catch (Exception e) {
      System.out.println("Error: "+e.getMessage());
  }

  for (int i = 0; i<invertir_int.length; i++) {
      Object j = invertir_int[i];
      System.out.println("Arreglo invertido: " + j);
  }
}
```

