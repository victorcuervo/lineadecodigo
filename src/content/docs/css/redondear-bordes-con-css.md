---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ABOBNFF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDp2PJ1WNtJ97W%2BuPZYG9%2BwvaqbZpeGZqwNN7eSksndcAIhAMpDN40M%2FC3PNZreI2uKxVz68wY9NgYe3Mr%2B0EJZCNJYKv8DCDYQABoMNjM3NDIzMTgzODA1IgyHi9br90X1U7KK8i8q3AMpf60GdLCm9R107hMv698iMpVVUUBZxovYPzAp2TPx4kjr08gCnz%2BJ1wOXM1Fhbf51u6F5qFGW47tsoNy%2BBA2w9Z6RrV8LQvOAWOKUc%2FtDWO6rQRZubgG03tbxTjVgww39SoJxjxpjGvzwXVjgloB0MlpOuxCuJx1IwyEKqjRQy9c0Vnpvp2mlcqztPm3tHIY%2FQUUBdo2wwn7csfHDI0I6WhnalMj1oKEEqnrIFOGtHMsoS%2Bt445upRqPu4AVvFLMmKTpu2b5XSUDmmATH6xg37G7hTMo%2F32H5N%2Bg5Qi5xWKOZtn1U6S5y42l32u9Wac2mu0osT5NZbz5%2B5qclfkxat3Lkizb619rbJGTIHpBhdtXD6O0mzHyhkj3%2Fa1WSb2d2rONZYaK1N%2FF56susPhFqcqjWmgaZPi0nYbVbKABR%2F4ilqH3IPtNTlLQjPVyPAxLr%2BLpHOdDgW3ARArpkPGGVw5KE7laikgLFq03UcOA%2BpvUwLEvLTELpYpGO0m7qCez%2FOHEcKWVqx%2BFox4hxrpC1P1WTWsrLzc%2F0cbWNyY5Qgqjs0nwgeNrB6%2FZHX75r0lbmHQgr%2BFCT5QB%2FY5C9hpPIazqngBzxOuwrHaTGBnNsWsH8aIV1DNuVXnOM0DCIvcLJBjqkAYNEKlehjYsBLVyR6gnSd5isQy02%2FjY9ouUrBpyZ68DqGVq07D48hkTgnNv1zY7CphBeiF428R2sQ9yl2KJZD7zWyTskz8UTYqm4n2KRqdL3im%2Frbt85Ll27Av6xuzFfctjl7k%2F0yizujRQfkggeyEYNTL%2Blzxo59z0LRy7RUh1oBccF2RipR35P%2F25otWyECEInC3%2FL7YI%2F%2BC04tzTkQLsj3ZWH&X-Amz-Signature=ffd5e6f470bf116d1acceed6b2e5411c98161bd199ed365a2804230d55cc879b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ABOBNFF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDp2PJ1WNtJ97W%2BuPZYG9%2BwvaqbZpeGZqwNN7eSksndcAIhAMpDN40M%2FC3PNZreI2uKxVz68wY9NgYe3Mr%2B0EJZCNJYKv8DCDYQABoMNjM3NDIzMTgzODA1IgyHi9br90X1U7KK8i8q3AMpf60GdLCm9R107hMv698iMpVVUUBZxovYPzAp2TPx4kjr08gCnz%2BJ1wOXM1Fhbf51u6F5qFGW47tsoNy%2BBA2w9Z6RrV8LQvOAWOKUc%2FtDWO6rQRZubgG03tbxTjVgww39SoJxjxpjGvzwXVjgloB0MlpOuxCuJx1IwyEKqjRQy9c0Vnpvp2mlcqztPm3tHIY%2FQUUBdo2wwn7csfHDI0I6WhnalMj1oKEEqnrIFOGtHMsoS%2Bt445upRqPu4AVvFLMmKTpu2b5XSUDmmATH6xg37G7hTMo%2F32H5N%2Bg5Qi5xWKOZtn1U6S5y42l32u9Wac2mu0osT5NZbz5%2B5qclfkxat3Lkizb619rbJGTIHpBhdtXD6O0mzHyhkj3%2Fa1WSb2d2rONZYaK1N%2FF56susPhFqcqjWmgaZPi0nYbVbKABR%2F4ilqH3IPtNTlLQjPVyPAxLr%2BLpHOdDgW3ARArpkPGGVw5KE7laikgLFq03UcOA%2BpvUwLEvLTELpYpGO0m7qCez%2FOHEcKWVqx%2BFox4hxrpC1P1WTWsrLzc%2F0cbWNyY5Qgqjs0nwgeNrB6%2FZHX75r0lbmHQgr%2BFCT5QB%2FY5C9hpPIazqngBzxOuwrHaTGBnNsWsH8aIV1DNuVXnOM0DCIvcLJBjqkAYNEKlehjYsBLVyR6gnSd5isQy02%2FjY9ouUrBpyZ68DqGVq07D48hkTgnNv1zY7CphBeiF428R2sQ9yl2KJZD7zWyTskz8UTYqm4n2KRqdL3im%2Frbt85Ll27Av6xuzFfctjl7k%2F0yizujRQfkggeyEYNTL%2Blzxo59z0LRy7RUh1oBccF2RipR35P%2F25otWyECEInC3%2FL7YI%2F%2BC04tzTkQLsj3ZWH&X-Amz-Signature=516a319630e97afc48c17409fe8da10e76baf8cc512c09fb1d64fc98d98dc961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```text
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9
