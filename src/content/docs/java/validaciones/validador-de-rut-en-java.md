---
title: "Validador de RUT en Java"
description: "Código fuente que nos sirve para poder codificar un validador de RUT en Java."
date: 2010-12-09
updatedDate: 2026-01-09
tags: ["operadores","integer","modulo","valueof","equals","rut"]
slug: java/validaciones/validador-de-rut-en-java
author: Pablo Ruiz
type: doc
topic: java
id: 497f6d78-e7ae-4081-9e07-3e97e3bb4e3a
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/validadores/ValidadorDeRut.java
---

El RUT es el Rol Único Tributario es un número único Chileno que sirve como identificador tributario. El RUT consta de dos partes, el número y el dígito verificador separados por un guión. En el siguiente ejemplo se toma como RUT el número 30.686.957-X, donde 30.686.957 es el número del RUT y X es el dígito verificador que no conocemos o que queremos verificar: Se procede a tomar el número de RUT de derecha a izquierda, multiplicando cada dígito por los números que componen la serie numérica 2,3,4,5,6,7; y sumando el resultado de estos productos, como se muestra a continuación (si se ha aplicado la serie hasta el 7 y quedan dígitos por multiplicar, se comienza la serie nuevamente):


```text
7 × 2 = 14,
5 × 3 = 15,
9 × 4 = 36,
6 × 5 = 30,
8 × 6 = 48,
6 × 7 = 42,
0 × 2 = 0,
3 × 3 = 9
```


Entonces la suma de los productos es


```text
14+15+36+30+48+42+0+9 = 194
```


Para poder hacer con [Java](https://www.manualweb.net/java/) esto tenemos que invertir el número:


```java
public static Object[] invertir(Object[] array) {
  Object[] invertir_int = new Object[array.length];
  int maximo = array.length;

  for (int i = 0; i < array.length; i++) {
    Object j = array[maximo - 1];
    invertir_int[maximo - 1] = array[i];
    maximo--;
    }
  return invertir_int;
}
```


Ahora, vamos multiplicando por la serie de números y acumulando la suma en **rutSumado**.


```java
int a = 2;
for (int i = 0; i < array.length; i++) {
  array[i] = Integer.parseInt((String) array[i]) * a;
  rutSumado += Integer.parseInt(String.valueOf(array[i]));
  if (a == 7) {
    a = 1;
  }
  a++;
}
```


Al número obtenido por la suma del producto de cada dígito por la serie ya mencionada, se le aplica módulo 11, o sea, se divide por 11 y se determina el resto de la división.


```text
194: 11 = 17
Resto: 7
```


Ahora a 11 se le resta el resto:


```text
11 - 7 = 4
```


El código [Java](https://www.manualweb.net/java/) sería


```java
int resto = rutSumado % 11;
String Digito = String.valueOf(11 - resto);
```


Con el valor obtenido: - Si el resultado es 11, el dígito verificador será 0.

- Si el resultado es 10, el dígito verificador será K.
- En otro caso el resultado será el dígito verificador.

Para hacer esto con [Java](https://www.manualweb.net/java/):


```text
if (Digito.equals("11")) {
  Digito = "0";
}

if (Digito.equals("10")) {
  Digito = "K";
}
```


Como en el ejemplo el resultado de la resta es 4, el dígito verificador es 4. Por ende, el RUT del ejemplo es el **30.686.957-4**. Saludos, Espero que les sea de ayuda :D

