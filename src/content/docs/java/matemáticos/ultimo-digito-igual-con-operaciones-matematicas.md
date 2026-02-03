---
title: "Último dígito igual con operaciones matemáticas"
description: "Uso del operador de módulo para poder calcular si dos números tienen el último dígito igual con operaciones matemáticas."
date: 2015-09-26
updatedDate: 2026-01-11
tags: ["modulo","operadores","math"]
slug: java/matematicos/ultimo-digito-igual-con-operaciones-matematicas
author: victor_cuervo
type: doc
topic: java
id: 6878b891-d173-4ce4-b9f0-2158e982f0d2
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/UltimoDigitoIgualSinString.java
---

Ya habíamos visto [como podemos comprobar si dos números tienen el último dígito igual mediante el uso de la clase String](http://lineadecodigo.com/java/ultimo-digito-igual/). Pero que pasa, si nos ponen a prueba, y no nos dejan utilizar la clase [`String`](https://www.w3api.com/Java/String/). Cómo podemos comprobar si dos números tienen el último dígito igual con operaciones matemáticas en [Java](https://www.manualweb.net/java/), es decir, solo vamos a utilizar números. Pues bien, dados dos números, en este caso enteros:


```java
int in1 = 12348;
int in2 = 138;
```


Podemos obtener el último dígito de los mismos mediante la operación módulo (%) con el número 10. Es decir, **el resto de dividir a un número por 10 siempre dará lugar al último dígito de dicho número.**.


```java
int digito1 = in1%10;
int digito2 = in2%10;
```


Así que ya solo nos quedará comprobar si estos dos números son iguales:


```java
if (digito1 == digito2)			
  System.out.println("Acaban en el mismo dígito");
else
  System.out.println("El último dígito es diferente");
```


Cómo veis, de una forma sencilla se puede comprobar si dos números tienen el último dígito igual con operaciones matemáticas en [Java](https://www.manualweb.net/java/) y usando el operador de módulo.

