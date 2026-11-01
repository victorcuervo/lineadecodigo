---
title: "Vocales abiertas y cerradas con Java"
description: "Aprende a contar vocales abiertas y cerradas en una frase con Java usando Scanner, String y un bucle for, con ejemplos y buenas prácticas."
date: 2021-02-05
updatedDate: 2026-11-01
tags: ["array","scanner","string","for"]
slug: java/basicos/vocales-abiertas-y-cerradas-con-java
type: doc
topic: java
id: fba2a4cd-20f5-4df9-a7f9-151581336792
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/VocalesAbiertasCerradas.java
---

Un ejemplo sencillo [que nos habéis pedido](http://lineadecodigo.com/java/contar-las-vocales-de-una-palabra-con-java/#comment-113882) es el de cómo podemos saber **cuántas vocales abiertas y cerradas** hay en una frase escrita con [Java](http://www.manualweb.net/java). Es otro claro ejemplo de [cómo recorrer una cadena](http://lineadecodigo.com/java/listar-caracteres-de-una-cadena-con-java/) e ir acumulando valores, como ya vimos en el ejemplo de [contar vocales con Java](http://lineadecodigo.com/java/metodo-contador-de-vocales/).


En español, las vocales abiertas son `a`, `e` y `o`, mientras que las vocales cerradas son `i` y `u`. El programa recorrerá todos los caracteres de la frase y mantendrá un contador independiente para cada grupo.


## Leer la frase con Scanner


Lo primero, lógicamente, será crear la frase. Para ello la vamos a pedir por consola y nos vamos a valer de la clase [`Scanner`](http://w3api.com/wiki/Java:Scanner) para leer la frase.


```java
System.out.println("Introduce una frase y pulsa intro.");
Scanner reader = new Scanner(System.in);
String frase = reader.nextLine();
```


Vemos que aplicamos la clase [`Scanner`](http://w3api.com/wiki/Java:Scanner) sobre el objeto [`System.in`](http://w3api.com/wiki/Java:System.in), que representa la entrada estándar, normalmente el teclado. Si quieres saber más sobre cómo utilizar la clase `Scanner`, puedes echarle un ojo a [Lectura de datos en Java con Scanner](http://lineadecodigo.com/java/lectura-de-datos-en-java-con-scanner/).


Además, nos apoyamos en el método [`.nextLine()`](http://w3api.com/wiki/Java:Scanner.nextLine()), que lee la frase que hayamos tecleado hasta pulsar Intro. Una vez que tenemos la frase, vamos a recorrerla mediante un bucle `for`, desde el carácter inicial, cuya posición es cero, hasta la longitud de la cadena. La longitud se obtiene con el método [`.length()`](http://w3api.com/wiki/Java:String.length()).


## Recorrer la cadena y clasificar las vocales


Para acceder a cada carácter vamos a utilizar el método [`.charAt()`](http://w3api.com/wiki/Java:String.charAt()), que recibe la posición dentro de la cadena y devuelve el carácter almacenado en ella.


```java
for (int x = 0; x < frase.length(); x++) {
  if ((frase.charAt(x) == 'a') || (frase.charAt(x) == 'e') || (frase.charAt(x) == 'o'))
    // Vocal abierta
  else if ((frase.charAt(x) == 'i') || (frase.charAt(x) == 'u'))
    // Vocal cerrada
}
```


En cada iteración comprobamos si el carácter es una vocal abierta, es decir, `a`, `e` u `o`, o si es una vocal cerrada, `i` o `u`. Los espacios, las consonantes y los signos de puntuación no entran en ninguno de los contadores.


Ahora hay que incrementar el contador en el que tenemos las vocales abiertas y el contador en el que tenemos las vocales cerradas. En este caso lo vamos a hacer de una forma diferente: crearemos un array en el que la primera posición será el contador de las vocales abiertas y la segunda posición, el de las vocales cerradas.


```java
int[] abiertaCerrada = {0, 0};

for (int x = 0; x < frase.length(); x++) {
  if ((frase.charAt(x) == 'a') || (frase.charAt(x) == 'e') || (frase.charAt(x) == 'o'))
    abiertaCerrada[0] = abiertaCerrada[0] + 1;
  else if ((frase.charAt(x) == 'i') || (frase.charAt(x) == 'u'))
    abiertaCerrada[1] = abiertaCerrada[1] + 1;
}
```


`abiertaCerrada[0]` contiene el número de vocales abiertas y `abiertaCerrada[1]`, el número de vocales cerradas. El array tiene un tamaño fijo y no almacena la frase completa de nuevo, por lo que el recorrido necesita tiempo proporcional a la longitud de la cadena y espacio auxiliar constante.


## Convertir la frase a minúsculas


Solo nos quedará controlar una cosa: el usuario puede haber introducido caracteres en minúscula y caracteres en mayúscula. En este caso podríamos controlar ambos tipos, pero, para tener un código más sencillo, lo que vamos a hacer es convertir la frase a minúsculas con el método [`.toLowerCase()`](http://w3api.com/wiki/Java:String.toLowerCase()).


El siguiente fragmento conserva la idea del ejemplo original y declara `s` antes de utilizarla:


```java
int[] abiertaCerrada = {0, 0};
String s = frase.toLowerCase();

for (int x = 0; x < s.length(); x++) {
  if ((s.charAt(x) == 'a') || (s.charAt(x) == 'e') || (s.charAt(x) == 'o'))
    abiertaCerrada[0] = abiertaCerrada[0] + 1;
  else if ((s.charAt(x) == 'i') || (s.charAt(x) == 'u'))
    abiertaCerrada[1] = abiertaCerrada[1] + 1;
}
```


La conversión con `toLowerCase()` permite que el mismo conjunto de comparaciones funcione con letras mayúsculas. Este ejemplo cuenta las vocales sin tilde; si también deben contarse `á`, `é`, `í`, `ó` y `ú`, hay que añadir esos caracteres a las condiciones o normalizar previamente la cadena según el comportamiento que necesite la aplicación.


## Ejemplo completo en Java


Este es el programa completo, con la lectura por consola, el recorrido de la frase y la impresión de los resultados:


```java
import java.util.Locale;
import java.util.Scanner;

public class VocalesAbiertasCerradas {

  public static void main(String[] args) {
    System.out.println("Introduce una frase y pulsa intro.");

    try (Scanner reader = new Scanner(System.in)) {
      String frase = reader.nextLine().toLowerCase(Locale.ROOT);
      int[] abiertaCerrada = {0, 0};

      for (int x = 0; x < frase.length(); x++) {
        char caracter = frase.charAt(x);

        if (caracter == 'a' || caracter == 'e' || caracter == 'o') {
          abiertaCerrada[0]++;
        } else if (caracter == 'i' || caracter == 'u') {
          abiertaCerrada[1]++;
        }
      }

      System.out.println("Vocales abiertas: " + abiertaCerrada[0]);
      System.out.println("Vocales cerradas: " + abiertaCerrada[1]);
    }
  }
}
```


La constante `Locale.ROOT` hace que la conversión a minúsculas no dependa de la configuración regional del equipo. Por ejemplo, para la frase `Hola mundo`, el programa mostraría `Vocales abiertas: 3` y `Vocales cerradas: 1`.


Espero que os resulte sencillo el código que nos permite identificar las vocales abiertas y cerradas con [Java](http://www.manualweb.net/java) dentro de una frase.

