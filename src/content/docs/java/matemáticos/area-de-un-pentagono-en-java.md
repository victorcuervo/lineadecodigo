---
title: "Área de un pentágono en Java"
description: "Aprende a calcular el área de un pentágono regular en Java con el lado, el perímetro, el apotema o el radio. Incluye fórmulas y un ejemplo con Math."
date: 2010-10-02
updatedDate: 2026-10-24
tags: ["area","sqrt","scanner","pow"]
slug: java/matematicos/area-de-un-pentagono-en-java
type: doc
topic: java
id: cc537fff-7943-43fa-bcd2-2a8af28d6573
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/math/AreaPentagono.java
---

En este ejemplo vamos a calcular el área de un pentágono regular en Java. Un pentágono regular tiene cinco lados y cinco ángulos iguales. Para que el resultado sea correcto, las medidas introducidas deben corresponder a la misma figura.


Calcular el área de un pentágono ya no es tan sencillo como [calcular el área de un rectángulo](http://lineadecodigo.com/java/area-de-un-rectangulo-con-java/), [de un círculo](http://lineadecodigo.com/java/area-de-un-circulo-en-java/) o [de un triángulo](http://lineadecodigo.com/java/area-de-un-triangulo-con-java/), porque podemos partir de diferentes medidas.


## Datos necesarios del pentágono


Para calcular el área conviene distinguir estas magnitudes:

- **Lado (****`lado`****):** longitud de cualquiera de los cinco lados.
- **Perímetro (****`perimetro`****):** suma de los lados; en un pentágono regular es `5 * lado`.
- **Radio (****`radio`****):** distancia desde el centro hasta uno de los vértices. También se llama radio de la circunferencia circunscrita.
- **Apotema (****`apotema`****):** distancia perpendicular desde el centro hasta uno de los lados. No es lo mismo que el radio.

Con el perímetro y la apotema se aplica directamente la fórmula del área. También se puede calcular el apotema a partir del lado y el radio, o calcular el área usando únicamente el lado.


## Fórmulas para calcular el área


### Con perímetro y apotema


La fórmula general para un polígono regular es:


```text
Área = (perímetro * apotema) / 2
Perímetro = 5 * lado
```


El resultado se expresa en unidades cuadradas. Por ejemplo, si las medidas están en centímetros, el área se obtiene en centímetros cuadrados.


### Calcular el apotema con el radio y el lado


El radio, el apotema y la mitad del lado forman un triángulo rectángulo. Aplicando el teorema de Pitágoras:


```text
apotema = √(radio² - (lado / 2)²)
```


La raíz cuadrada se aplica a toda la resta. El radicando debe ser positivo y el lado y el radio deben ser coherentes con el mismo pentágono regular. Si los datos no lo son, el cálculo no representa su apotema.


### Solo con el lado


Si únicamente conocemos el lado, podemos usar la fórmula exacta del área de un pentágono regular:


```text
Área = (5 * lado²) / (4 * tan(36°))
     ≈ 1,7204774 * lado²
```


El valor `1,72048` es una aproximación redondeada. Para cálculos sencillos se puede utilizar directamente; si se necesita más precisión, conviene conservar más decimales o calcular la expresión trigonométrica.


## Pedir los datos al usuario


En este ejemplo se utilizará `0` para indicar que el usuario no conoce una medida. El lado debe ser positivo y el radio y el apotema no pueden ser negativos.


```java
Scanner reader = new Scanner(System.in);

System.out.println("Dame el lado del pentágono (debe ser mayor que 0)");
lado = reader.nextDouble();

System.out.println("Dame el radio del pentágono. Si no lo conoces, teclea 0");
radio = reader.nextDouble();

System.out.println("Dame el apotema del pentágono. Si no lo conoces, teclea 0");
apotema = reader.nextDouble();
```


La clase [`Scanner`](http://w3api.com/wiki/Java:Scanner) permite leer los valores introducidos por consola. Las variables que almacenan las medidas y el área deben ser de tipo `double` para conservar decimales.


## Calcular el área según los datos disponibles


Antes de calcular, comprueba que `lado` sea mayor que cero y que `radio` y `apotema` sean cero o positivos. Como `0` representa una medida desconocida, puedes validar las entradas con este fragmento después de leerlas:


```java
if (lado <= 0 || radio < 0 || apotema < 0) {
  throw new IllegalArgumentException("El lado debe ser positivo y las otras medidas no negativas.");
}
```


Después, aplica la fórmula que corresponda. Si se proporciona el apotema, se utiliza directamente; si falta, pero se conoce el radio, se calcula con Pitágoras; si faltan ambos, se usa la fórmula basada solo en el lado.


### Solo tenemos el lado


Cuando `radio` y `apotema` valen `0`, el área se calcula con el coeficiente aproximado:


```java
if ((radio == 0) && (apotema == 0)) {
  area = 1.7204774 * Math.pow(lado, 2);
}
```


Para elevar el lado al cuadrado se utiliza [`Math.pow()`](http://w3api.com/wiki/Java:Math.pow()), de la clase [`Math`](http://w3api.com/wiki/Java:Math). En este caso, el segundo argumento indica el exponente.


### Tenemos el radio y el lado


Si no conocemos el apotema, podemos calcularlo con el radio y el lado. Comprueba primero que el radicando sea positivo:


```java
if (apotema == 0 && radio > 0) {
  double radicando = Math.pow(radio, 2) - Math.pow(lado / 2, 2);

  if (radicando <= 0) {
    throw new IllegalArgumentException("La combinación de lado y radio no permite calcular un apotema real.");
  }

  apotema = Math.sqrt(radicando);
  area = ((lado * 5) * apotema) / 2;
}
```


`Math.sqrt()` calcula la raíz cuadrada. Según la [documentación de Java sobre Math](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Math.html), un argumento negativo produce `NaN`, por lo que validar el radicando evita continuar con un área inválida.


### Tenemos el apotema y el lado


Si conocemos el apotema, no hace falta calcularlo a partir del radio:


```java
if (apotema > 0) {
  area = ((lado * 5) * apotema) / 2;
}
```


Si no se proporciona ni radio ni apotema, se aplica la fórmula que utiliza solo el lado. En una aplicación completa, conviene mostrar un mensaje claro cuando el lado no sea positivo o las medidas introducidas sean incompatibles.


**Nota:** Puedes consultar [Disfruta de las matemáticas](http://www.disfrutalasmatematicas.com/geometria/poligonos-regulares.html) para repasar los conceptos de polígonos regulares.

