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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7PDWKVZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDugu9q7FqMKYDwKjMXWpSx8OdHtE3rThCSJYnKia6ttgIhAKm2GT6JqNk9Ar1GS8MDhyrfUllvPwxeCmJUYOZlQJLOKv8DCGgQABoMNjM3NDIzMTgzODA1IgwOl8TDjnNWXNLXF5kq3AMIuwMAlQ3upR581EDhQQ4nTzRd1vsKieJat7xEx2e4iidIwRwVt0WeHhZwowBPxjIO%2BGn7GljTLDPs04PNxzUyQj3s3NlMXl3FjjdMhug4jQ0vAR3wEoIOZ8wHCIMpRE%2F6Za5QcZhImL7olaLxKQ9%2FS24mqBBocoxhIPD%2BUKLOffp5UzmkAD1V4%2Bz%2B8JX%2BbORhPx30ijgQRk306VtwHSSb7WTqmp5qYImOcrv2cJtL6j2yhG9PWbouR5q8pTNG%2FH01KI2YhK2QsIVoicSZv6bwAnQAY4ub9pBTd1xb65yqN1%2B4xJprALQqEdU2YBUju7Pmt5QCWF1gAG7yaCEaXDLvZaGyyNM4cokMkEDfma6Oip8XQ7ooy%2BUHVGUFvj10k6foFIZiEMAVbmW4nslzZfMtiCpcymtuCkiskXA5MBrbANu9xzZptQFa9KdMhDrRwxts%2FTNOHnFBeJF57kNy19vcaSYXiJSU2zL2b1mBBjuffq7iyxHcCNmPx1HIoWBYt%2FqjsERMlq4uAEgSGlXS6GL5N2uD92bqM92KN8Y7ZHbkJcy2zN8g4XyEvEz0cotbKYGUa1ScAyg%2F9%2BfBwpCvJV4MXfm00ruC%2BHPcFDmTcCU2aUR%2Fcxdt3kd8LAQxqTCpxs3JBjqkAUFS8fGd9HFk21wpBordBcVAahQ5xSjH6VRvRAf%2FH98E%2BBr4N5NQE2EZ3ysP1xK%2F1u9dr0ppUK2bIe31xOVhQi3rusQon2CtkeiULB2p6XWyojBEVY6jcs8p05%2BaCwXScT%2FOr7xLZWpE4mfV3itLj74JG1brHmHT7VPMWti90l2Ujm4Y8%2FJq9XhkginJXyFkiDpzRu5MhX2g7JQdrK1WhKIjWVoe&X-Amz-Signature=3ba0ccc8bc92db96ef1df4682f69f89400b136e4358c8329dd75563c8b039b18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7PDWKVZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDugu9q7FqMKYDwKjMXWpSx8OdHtE3rThCSJYnKia6ttgIhAKm2GT6JqNk9Ar1GS8MDhyrfUllvPwxeCmJUYOZlQJLOKv8DCGgQABoMNjM3NDIzMTgzODA1IgwOl8TDjnNWXNLXF5kq3AMIuwMAlQ3upR581EDhQQ4nTzRd1vsKieJat7xEx2e4iidIwRwVt0WeHhZwowBPxjIO%2BGn7GljTLDPs04PNxzUyQj3s3NlMXl3FjjdMhug4jQ0vAR3wEoIOZ8wHCIMpRE%2F6Za5QcZhImL7olaLxKQ9%2FS24mqBBocoxhIPD%2BUKLOffp5UzmkAD1V4%2Bz%2B8JX%2BbORhPx30ijgQRk306VtwHSSb7WTqmp5qYImOcrv2cJtL6j2yhG9PWbouR5q8pTNG%2FH01KI2YhK2QsIVoicSZv6bwAnQAY4ub9pBTd1xb65yqN1%2B4xJprALQqEdU2YBUju7Pmt5QCWF1gAG7yaCEaXDLvZaGyyNM4cokMkEDfma6Oip8XQ7ooy%2BUHVGUFvj10k6foFIZiEMAVbmW4nslzZfMtiCpcymtuCkiskXA5MBrbANu9xzZptQFa9KdMhDrRwxts%2FTNOHnFBeJF57kNy19vcaSYXiJSU2zL2b1mBBjuffq7iyxHcCNmPx1HIoWBYt%2FqjsERMlq4uAEgSGlXS6GL5N2uD92bqM92KN8Y7ZHbkJcy2zN8g4XyEvEz0cotbKYGUa1ScAyg%2F9%2BfBwpCvJV4MXfm00ruC%2BHPcFDmTcCU2aUR%2Fcxdt3kd8LAQxqTCpxs3JBjqkAUFS8fGd9HFk21wpBordBcVAahQ5xSjH6VRvRAf%2FH98E%2BBr4N5NQE2EZ3ysP1xK%2F1u9dr0ppUK2bIe31xOVhQi3rusQon2CtkeiULB2p6XWyojBEVY6jcs8p05%2BaCwXScT%2FOr7xLZWpE4mfV3itLj74JG1brHmHT7VPMWti90l2Ujm4Y8%2FJq9XhkginJXyFkiDpzRu5MhX2g7JQdrK1WhKIjWVoe&X-Amz-Signature=8eee8299d4660b57b43ec94b6f1134181260c76b074aac11f31b67d87a5b2f95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
