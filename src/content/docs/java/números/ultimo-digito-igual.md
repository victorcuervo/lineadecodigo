---
title: "Último dígito igual"
description: "Ejemplo que nos explica cómo podemos comprobar que dos números tienen el último dígito igual."
date: 2015-09-23
updatedDate: 2026-01-09
tags: ["integer","tostring","charat","string","length"]
slug: java/numeros/ultimo-digito-igual
author: victor_cuervo
type: doc
topic: java
id: 51546917-d4bd-45e1-b4ac-76a8463c4b96
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/UltimoDigitoIgual.java
---

Algunos nos habéis preguntado por este sencillo programa en [Java](https://www.manualweb.net/java/), pero que a alguno se le está atragantando. La idea es cómo dados dos números podemos comprobar que tienen el último dígito igual. Veamos como podemos llevarlo a cabo. Lo primero será convertir los dos números en cadenas de texto para poder manipularlos de una forma más sencilla. Para ello, si los números son enteros puedes utilizar el objeto [`Integer`](https://www.w3api.com/Java/Integer/) o `Long` o ... para convertirlos en cadenas de texto [`String`](https://www.w3api.com/Java/String/) mediant el método [`.toString()`](https://www.w3api.com/Java/Integer/.toString()). Por ejemplo si manejamos enteros podríamos hacer lo siguiente:


```java
int in1 = 1543;
int in2 = 13;
		
String n1 = Integer.toString(in1);
String n2 = Integer.toString(in2);
```


Si estás manipulando un cuadro de texto en un elemento visual será más sencillo ya que probablemente los hayas obtenido ya como cadenas de texto. Una vez que los tenemos como cadenas de texto vamos a acceder al último dígito, para comprobar si tienen un último dígito igual. Para acceder a un elemento utilizamos el método [`.charAt()`](https://www.w3api.com/Java/String/.charAt()). A dicho método deberemos de pasarle la posición que queremos evaluar.


```java
n1.charAt(ultima_posicion);
```


Para poder tener la última posición del número vamos a utilizar el método [`.length()`](https://www.w3api.com/Java/String/.length()) que nos dará el tamaño de la cadena y por lo tanto, al restarle uno (recuerda que las cadenas empiezan a numerarse por e 0) tenemos la última posición.


```java
n1.charAt(n1.length()-1);
```


Ya solo nos quedará el comprobar si los dos últimos dígitos son iguales, para poder determinar si tienen el último dígito igual.


```java
if (n1.charAt(n1.length()-1) == n2.charAt(n2.length()-1))			
  System.out.println("Acaban en el mismo dígito");
else
  System.out.println("El último dígito es diferente");
```


Cómo podéis ver no siempre hay que operar los números tal cual, si no que también podemos pasarlos a un tipo [`String`](https://www.w3api.com/Java/String/) para poder manejarlos de otra forma. Por ejemplo para obtener si dos números tienen el último dígito igual con [Java](https://www.manualweb.net/java/).

