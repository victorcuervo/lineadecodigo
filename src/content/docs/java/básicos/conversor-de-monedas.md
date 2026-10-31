---
title: "Conversor de monedas"
description: "Aprende a crear un conversor de monedas en Java con BufferedReader y Float.parseFloat(), usando una tasa para convertir dólares a pesos chilenos y a la inversa."
date: 2010-09-28
updatedDate: 2026-10-31
tags: ["float","scanner","bufferedreader","java-io"]
slug: java/basicos/conversor-de-monedas
type: doc
topic: java
id: 728be780-55ff-43af-81d5-ce973ab66b03
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/ConversorMonedas.java
---

## Cómo funciona un conversor de monedas


La verdad es que hay mucha gente que me pregunta cómo se puede hacer un conversor de monedas. En concreto, cómo convertir de dólares a pesos chilenos. Aunque este código nos valdría para cualquier conversión (a euros, a reales brasileños, pesos argentinos...), lo más importante es conocer el factor de conversión. Conociendo el factor de conversión solo tendremos que realizar una multiplicación.


## Tasa de conversión


Para obtener una tasa de conversión podemos consultar un servicio o una fuente de tipos de cambio. El artículo original mencionaba, entre otras, estas páginas:

- [XE](http://www.xe.com/ucc/es/)
- [X-Rates](http://www.x-rates.com/)

Las conversiones siguientes forman parte del ejemplo original y sirven para explicar la operación; no deben interpretarse como tasas actuales, porque el valor de una moneda cambia con el tiempo:

- 1 dólar = 485,336 pesos chilenos
- 1 dólar = 0,742 euros
- 1 dólar = 1,708 reales brasileños

Si la tasa indica cuántas unidades de la moneda destino corresponden a una unidad de la moneda origen, la conversión se calcula así:

- De dólares a pesos chilenos: `pesos = dólares * tasa`.
- De pesos chilenos a dólares: `dólares = pesos / tasa`.

## Definir las variables


Vamos con el código. Lo primero será definir las variables. Vamos a tener la moneda origen, la moneda destino y la tasa de conversión.


```java
float tasa = 485.336F; // 1 dólar son 485,336 pesos chilenos
float monedaorigen = 0;
float monedadestino = 0;
```


Las hemos definido como `float` para que puedan contener valores decimales. Este tipo resulta suficiente para un ejemplo introductorio, aunque no es la opción recomendada para importes monetarios en una aplicación real, porque los números de coma flotante pueden introducir pequeños errores de representación.


## Leer el importe con BufferedReader


Vamos con el primer cambio. Este será de dólares a pesos chilenos. Pedimos los dólares a cambiar. Aunque lo más sencillo sería utilizar una clase [`Scanner`](http://w3api.com/wiki/Java:Scanner), en este caso hemos utilizado un [`BufferedReader`](http://w3api.com/wiki/Java:BufferedReader), lo cual nos obligará a convertir el texto leído a `float` mediante `Float.parseFloat()`.


```java
BufferedReader br;
br = new BufferedReader(new InputStreamReader(System.in));

System.out.println("¿Cuántos dólares tienes?");
monedaorigen = Float.parseFloat(br.readLine());
```


`readLine()` devuelve texto, por eso `Float.parseFloat()` es necesario para transformarlo en un número decimal. El fragmento necesita los imports de `BufferedReader` e `InputStreamReader` y debe ejecutarse en un método que gestione `IOException`, como se muestra en el programa completo.


## Convertir dólares a pesos chilenos


Ahora aplicamos la conversión. Al ser de dólares a pesos, solo multiplicamos y mostramos el resultado por pantalla.


```java
monedadestino = monedaorigen * tasa;
System.out.println(monedaorigen + " dólares equivalen a " + monedadestino + " pesos chilenos");
```


Por ejemplo, con una tasa de `485.336`, una entrada de `10` dólares produce aproximadamente `4853.36` pesos chilenos. El resultado exacto que se muestre puede variar en los últimos decimales al utilizar `float`.


## Convertir pesos chilenos a dólares


Ahora vamos con la inversa. Y si lo que tengo son pesos chilenos y quiero saber cuántos dólares son, ¿cómo lo hago? Nos vale la misma tasa de conversión, lo que sucede es que en este caso, al recorrer la conversión en sentido inverso, hay que dividir. Así la conversión sería:


```java
monedadestino = monedaorigen / tasa;
System.out.println(monedaorigen + " pesos chilenos equivalen a " + monedadestino + " dólares");
```


La variable `monedaorigen` representa ahora los pesos chilenos y `monedadestino` representa los dólares. Es importante no intercambiar la tasa: si `tasa` expresa pesos por dólar, se multiplica al convertir a pesos y se divide al volver a dólares.


## Programa completo en Java


Los fragmentos anteriores se pueden reunir en un programa ejecutable. La tasa sigue siendo fija y únicamente sirve para practicar la lógica de la conversión; para una aplicación real habría que obtenerla de una fuente actualizada.


```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class ConversorMonedas {
    public static void main(String[] args) throws IOException {
        final float tasa = 485.336F;
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        System.out.println("¿Cuántos dólares tienes?");
        float monedaOrigen = Float.parseFloat(br.readLine());

        float pesos = monedaOrigen * tasa;
        float dolares = pesos / tasa;

        System.out.println(monedaOrigen + " dólares equivalen a " + pesos + " pesos chilenos");
        System.out.println(pesos + " pesos chilenos equivalen a " + dolares + " dólares");
    }
}
```


El programa pide una cantidad en dólares, calcula su equivalente en pesos y después aplica la operación inversa. Si se introduce `10`, mostrará un valor cercano a `4853.36` pesos y volverá a obtener aproximadamente `10` dólares.


## BigDecimal para más precisión


Para un ejercicio sencillo, `float` permite centrarse en la multiplicación y la división. En software que gestione pagos, saldos o facturas conviene utilizar `BigDecimal` y redondear de forma explícita:


```java
import java.math.BigDecimal;
import java.math.RoundingMode;

BigDecimal tasa = new BigDecimal("485.336");
BigDecimal dolares = new BigDecimal("10");
BigDecimal pesos = dolares.multiply(tasa).setScale(2, RoundingMode.HALF_UP);

System.out.println(pesos + " pesos chilenos");
```


Espero que os haya servido esta explicación para hacer un conversor de monedas en [Java](https://lineadecodigo.com/java/).

