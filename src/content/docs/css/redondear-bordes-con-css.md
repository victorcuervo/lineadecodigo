---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7MQJJXP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T114242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2F85dK%2FXPFDsQfNZEAypdRuYXxwpc7auDkAfC9G8I7%2BAiEAkme%2BVhDZvYn1bfigNvSsGr6tSR6PagYJLFPky%2FPKxEoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FJdDFJzC6TTMluwCrcA3Aftl7CHCiuG%2Bs8ojcsoF%2BLE4boJ0wNYLoxdWEfNY%2FsABw6cY71WgEi9f%2BCF6OFq4KfJfwAZ7BtB1rXyUSqa0YPiDuEAUdJJZalC2P56NrvHO2Vlcg7NmypfWD%2FTk3wFY9vl1qfwmsa433dfKBWY2bNoMjfZFUUwv%2F0I7nMEPR%2FGE3xCCIM1KGYmF3bBU4Dea99RQZWL7BU1rwMByO8tldQ%2BnuZlh6caP%2BFIl%2Fagjr3i%2FGyxUcSjeQFk1UXXKGBSCnM5Hq7c8C2H%2FMZakj%2BMGnrcvSOVSqvDFCKFKAhSyJ2JKFt0%2BUZ22gNm%2BE%2FN4wBV9kzTv7m5wZndBp8J42MUaOOCKs7m%2BApoYCYTUoEuM2xvCFJri3SqIdE3gMJWygTO2cWyc7lw6MPFwjhzUQbFipB1YCY6RbExF3O7jzT5Zv9KGXfhhXQS67xzz%2FiBz533jzxn1V%2BT6z%2FIukc1H4FE%2BFflUP48dsRr7ql6B2997JT8hDfudS2eSkvb8fW8SAdo1st5k2PZW6u9Ra3n1mfOcO%2BS3xQt3BEsP4TRYfKM5ZPOIQt9NasLewq8VEhfUOkLRuB3zt6jgctg6gDLoDXchtNysdaSXKc1GyX4%2B%2Bx%2Bo7DHqnjxIAfWB89qP4vMJ%2Ft2ckGOqUBc%2BrDT4PUwoxydbNGcblEx61eGHRRba0CMK6vX03ndd%2B9fkNdyfO7rLpvx9Qv2tTkIvjOutc3N811PngZGXrFFJa2%2FFypU%2FBTDKY0CbqwMESull8EGLqwcfj0%2B%2BpVYB%2FbXnA7aU5RO4SZa9u2rGKwiip4rPV9T%2B8bcc2IIGuS41bBrDjOG5iHTG2sV8EQS4mZXTcIy276TIkMPWoddBZFIOWNiLr4&X-Amz-Signature=ed740d6665852b98c22ab027624d58a73206ba214c133d93df97e07435561c69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7MQJJXP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T114242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2F85dK%2FXPFDsQfNZEAypdRuYXxwpc7auDkAfC9G8I7%2BAiEAkme%2BVhDZvYn1bfigNvSsGr6tSR6PagYJLFPky%2FPKxEoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FJdDFJzC6TTMluwCrcA3Aftl7CHCiuG%2Bs8ojcsoF%2BLE4boJ0wNYLoxdWEfNY%2FsABw6cY71WgEi9f%2BCF6OFq4KfJfwAZ7BtB1rXyUSqa0YPiDuEAUdJJZalC2P56NrvHO2Vlcg7NmypfWD%2FTk3wFY9vl1qfwmsa433dfKBWY2bNoMjfZFUUwv%2F0I7nMEPR%2FGE3xCCIM1KGYmF3bBU4Dea99RQZWL7BU1rwMByO8tldQ%2BnuZlh6caP%2BFIl%2Fagjr3i%2FGyxUcSjeQFk1UXXKGBSCnM5Hq7c8C2H%2FMZakj%2BMGnrcvSOVSqvDFCKFKAhSyJ2JKFt0%2BUZ22gNm%2BE%2FN4wBV9kzTv7m5wZndBp8J42MUaOOCKs7m%2BApoYCYTUoEuM2xvCFJri3SqIdE3gMJWygTO2cWyc7lw6MPFwjhzUQbFipB1YCY6RbExF3O7jzT5Zv9KGXfhhXQS67xzz%2FiBz533jzxn1V%2BT6z%2FIukc1H4FE%2BFflUP48dsRr7ql6B2997JT8hDfudS2eSkvb8fW8SAdo1st5k2PZW6u9Ra3n1mfOcO%2BS3xQt3BEsP4TRYfKM5ZPOIQt9NasLewq8VEhfUOkLRuB3zt6jgctg6gDLoDXchtNysdaSXKc1GyX4%2B%2Bx%2Bo7DHqnjxIAfWB89qP4vMJ%2Ft2ckGOqUBc%2BrDT4PUwoxydbNGcblEx61eGHRRba0CMK6vX03ndd%2B9fkNdyfO7rLpvx9Qv2tTkIvjOutc3N811PngZGXrFFJa2%2FFypU%2FBTDKY0CbqwMESull8EGLqwcfj0%2B%2BpVYB%2FbXnA7aU5RO4SZa9u2rGKwiip4rPV9T%2B8bcc2IIGuS41bBrDjOG5iHTG2sV8EQS4mZXTcIy276TIkMPWoddBZFIOWNiLr4&X-Amz-Signature=0e71a749dd392ba431effbf3e944695cd71f0509be89f8ff83b7b53b3f13a197&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
