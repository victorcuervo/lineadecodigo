---
title: "Calcular el perímetro de un círculo con Java"
description: "Aprende a calcular el perímetro de un círculo con Java usando Math.PI y Scanner. Incluye un programa completo, validación del radio y un ejemplo de resultado."
date: 2010-09-18
updatedDate: 2026-10-24
tags: ["double","pi","circulo","math","scanner"]
slug: java/calcular-el-perimetro-de-un-circulo-con-java
type: doc
topic: java
id: 24ee9f84-0a81-4768-b959-d0917636a35f
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/math/PerimetroCirculo.java
---

El perímetro de un círculo es la longitud de su **circunferencia**, la línea curva que lo delimita. Para calcularlo multiplicamos el radio por dos y por el número pi:


```text
Perímetro = 2 * PI * radio
```


El radio es la distancia desde el centro hasta cualquier punto de la circunferencia. No debe confundirse con el diámetro, que mide el doble del radio. Si conocemos el diámetro, la fórmula equivalente es `Perímetro = PI * diámetro`.


El resultado se expresa en las mismas unidades de longitud que el radio: si el radio está en centímetros, el perímetro también lo estará. No se expresa en unidades cuadradas, que corresponden al área.


Una vez que conocemos la fórmula, vamos a calcular el perímetro de un círculo con Java.


## Pedir el radio al usuario


Lo primero que tenemos que hacer es pedir al usuario el radio. Para ello nos apoyamos en la clase [`Scanner`](http://w3api.com/wiki/Java:Scanner):


```java
double perimetro, radio;

Scanner reader = new Scanner(System.in);
radio = reader.nextDouble();
```


Vemos que el tipo de dato tanto de `radio` como de `perimetro` es `double`. Utilizando el tipo `double` podemos almacenar medidas y resultados con decimales, a diferencia de los tipos enteros. Se trata de una representación aproximada en coma flotante, no de aritmética decimal exacta.


Para utilizar `Scanner` necesitamos importar `java.util.Scanner`. El método `nextDouble()` lee un número y el separador decimal admitido depende de la configuración regional del lector. Si la entrada no representa un número válido, puede producirse una `InputMismatchException`; en el programa completo comprobaremos la entrada con `hasNextDouble()`.


## Aplicar la fórmula del perímetro


El siguiente paso será aplicar la fórmula. La fórmula utiliza [la constante PI](http://lineadecodigo.com/java/numero-pi-en-java/), es por ello que nos basamos en la constante `PI` de la clase [`Math`](http://w3api.com/wiki/Java:Math) para utilizar dicho valor.


```java
perimetro = 2 * Math.PI * radio;
```


`Math.PI` contiene la aproximación a π disponible como `double`. Es preferible a escribir un valor recortado como `3.14`, que introduce más error. No necesitamos importar `Math`, ya que pertenece al paquete `java.lang`, disponible automáticamente.


## Mostrar el resultado


Ya solo nos quedará volcar el contenido de la variable `perimetro` por pantalla:


```java
System.out.println("El perímetro del círculo es: " + perimetro);
```


Unas pocas líneas, pero muy sencillo para nuestros cálculos básicos de las clases de geometría.


## Programa completo con validación del radio


Podemos reunir los fragmentos anteriores en un programa ejecutable. Conservamos la fórmula y las variables del ejemplo, y añadimos comprobaciones para rechazar texto, valores no finitos y radios menores o iguales que cero. En este ejemplo exigimos un radio positivo para representar un círculo no degenerado.


Guarda el código en un archivo llamado `PerimetroCirculo.java`:


```java
import java.util.Scanner;

public class PerimetroCirculo {
  public static void main(String[] args) {
    double perimetro, radio;

    Scanner reader = new Scanner(System.in);
    System.out.println("Introduce el radio del círculo:");

    if (!reader.hasNextDouble()) {
      System.out.println("Debes introducir un número válido.");
      return;
    }

    radio = reader.nextDouble();
    if (Double.isNaN(radio) || Double.isInfinite(radio) || radio <= 0) {
      System.out.println("El radio debe ser un número finito mayor que cero.");
      return;
    }

    perimetro = 2 * Math.PI * radio;
    System.out.println("El perímetro del círculo es: " + perimetro);
  }
}
```


`hasNextDouble()` comprueba el siguiente valor sin consumirlo; `nextDouble()` lo lee después. Las comprobaciones con `Double.isNaN()` y `Double.isInfinite()` evitan utilizar valores especiales que no representan una medida finita. Un radio negativo carece de sentido geométrico; un radio cero daría un perímetro cero, pero queda fuera de los datos admitidos por este programa.


## Ejemplo de ejecución


Si introducimos un radio de `5`, obtenemos este resultado:


```text
Introduce el radio del círculo:
5
El perímetro del círculo es: 31.41592653589793
```


Por tanto, un círculo de radio 5 centímetros tiene un perímetro aproximado de 31,42 centímetros. La cantidad de decimales mostrada no cambia la fórmula: si necesitas presentar un resultado redondeado, puedes aplicar formato a la salida sin redondear previamente `Math.PI` ni el radio.

