---
title: "Días del mes en Java"
description: "Ejemplo de uso de sentencias case agrupadas dentro de un switch para poder calcular los días del mes en Java."
lastUpdated: 2025-12-20
slug: java/dias-del-mes-en-java
author: victor_cuervo
---

Este ejemplo está enfocado al aprendizaje básico con [Java](https://www.manualweb.net/java/) y al uso, menos común, de las sentencias case dentro de la sentencia switch que consiste en agrupar varias sentencias case. Para ello vamos a utilizar el ejemplo que nos calcula los días de la semana en [Java](https://www.manualweb.net/java/). Lo primero que haremos será definir una variable `int` con el número del mes del cual queremos conocer los días que tiene.


```java
int iMes = 8;
```


Ademas definiremos una variable de tipo [`String`](https://www.w3api.com/Java/String/) en la que indicaremos los días que tiene el mes:


```java
String sMes;
```


Ahora hay que mostrar los días que tiene ese mes. Las alternativas que tenemos son dos. Por un lado podemos tener un conjunto de sentencias `if-then-elseif` anidadas.


```java
if (iMes == 1)
  sMes = "31 días";
else if (iMes == 2)
  sMes = "28 días o 29 días (en año bisiesto)";
else if (iMes == 3)
  sMes = "31 días"
...
```


Pero como bien sabemos las estructuras selectivas en rama se resuelven mejor con una sentencia `switch`. En este caso podemos caer en la tentación de simular mucho la estructura `if-then-else` y acabar escribiendo lo siguiente:


```java
switch (iMes) {
  case 1: 
    sDias = "El mes tiene 31 días";
    break;
  case 2:			
    sDias = "El mes tiene 28 días (o 29 días si es año bisiesto)";
    break;			
  case 3:			
    sDias = "El mes tiene 31 días";
    break;
  case 4:			
    sDias = "El mes tiene 30 días";
    break;
  ...
  default:
    sDias = "Mes incorrecto";
}
```


Esto no acortaría nuestra codificación y acabaríamos teniendo algo muy parecido al `if-then-elseif`. Por lo cual no optimizaríamos mucho nuestro código. Lo que deberemos de hacer es apoyarnos en las capacidades que tiene la sentencias `switch` de poder agrupar sentencias `case` que devuelvan el mismo bloque de sentencias como respuesta. Una estructura que sería algo parecida a:


```java
switch (expresion) {
  case valor1: case valor2: case valor3:
	bloque1;
	break;
  case valor4: case valor5: case valor6:
	bloque2;
	break;
  …
  default:
	bloque_por_defecto;
}
```


De esta forma podríamos codificar nuestro programa para calcular los días del mes en [Java](https://www.manualweb.net/java/) de la siguiente forma más óptima:


```java
switch (iMes) {
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    sDias = "El mes tiene 31 días";
    break;
  case 4: case 6: case 9: case 11:
    sDias = "El mes tiene 30 días";
    break;
  case 2:			
    sDias = "El mes tiene 28 días (o 29 días si es año bisiesto)";
    break;			
  default:
    sDias = "Mes incorrecto";
}
```


Así que recuerda que si tienes estructuras `switch` donde varios valores devuelven el mismo bloque puedes utilizar las sentencias `case` agrupadas, al igual que hemos hecho aquí para calcular los días del mes en [Java](https://www.manualweb.net/java/).

