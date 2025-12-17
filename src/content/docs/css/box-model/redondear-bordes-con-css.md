---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2V6YV6W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYmnr7gswQaiTwwfBr5pR3xKWUa3ClzSzfjsqxBkE71AiBsTX2CGPRhRm3kkH0CahbumARNLlsg9Ij5wsh9uNxyFyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHyLhuZXdL6hpqW%2F%2BKtwDVQHeF4X8hvq1nVv7xXJ30tLZ1yOMCAkoCIslx%2FMRc%2BYQUNAp3VR1Fg7pNauf2tB2Vu4RZMNdZ68bjZZ6NEpaMae127%2BNGCzlF3eI8WR86i6EVuK0jQW1ZZFQJ3Q3M9FPikGhRyaKga3BCKN7tsLCP1ngJ3Q6jAHXsmnqfCTNJOkKSwYa0vJ7kSWf6YVn6GbjQQWpYopt7hGmgcHwtXGQjDpPOPRGl%2BIre6KQZmbThzlyYsC9GZvwcaFADJqJgwQdfiA0J%2FGcuazFEGAKY2x3GvRlPaI1FNValkxvCFrz5cZR%2BlC8ioO7fS3CQSF7Z1Cm9EfLCO6OGhbXjdNcDm6FWCK3GS4JiJoiObIdnULKYJazpWUPpglXK484p5f1ejoYE%2Bl9P%2FZpfOYYHSXVOA3Wn2qdYx6UpNm8PjC8pzCe7AduQ1FwLpzVfN0HsmJd2g8PkIMya0DwMyOr%2FEVYOB5rxn1pH0Jv84jiPKXhNcDGPj77u%2FSfbNSJLyYoFtZn69U91t%2BENoUFplgjKgdHjTJ9rlx6UdFQO6B1rsEGf%2FxvEuo4%2FdEaZybMPr4DO3MV3wbtZlR2zGthvbVVDJNFww1LSlCLTrL%2FzFD1luCo5hJPiyAvBr3ldQ3hDoLVwxMwgICLygY6pgHrcET5jWWTrqTSGujah57QVTgPzY1vbxmyqtlz%2F%2FbhqQTeIFLXwitWS6YE8kHHTTr82rQm2jD67goSDIKU4%2F7zMCeej1kLFciGvXq%2FUXgXhLQz6NwXEsU0HX38caVVHqmHq1NicpYttEEqKOMxODYKnBTQFy6JBVn5vwU6c7QJxysVAVWLQUef%2FPbUISm%2FDqBnc0wXF5unKv%2F01TvWO6%2Ft7My4YlHY&X-Amz-Signature=9f1266e9eb4e992b1c881593098a5a9ec7e53a6b74d67bcc87e909002e20198b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2V6YV6W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYmnr7gswQaiTwwfBr5pR3xKWUa3ClzSzfjsqxBkE71AiBsTX2CGPRhRm3kkH0CahbumARNLlsg9Ij5wsh9uNxyFyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHyLhuZXdL6hpqW%2F%2BKtwDVQHeF4X8hvq1nVv7xXJ30tLZ1yOMCAkoCIslx%2FMRc%2BYQUNAp3VR1Fg7pNauf2tB2Vu4RZMNdZ68bjZZ6NEpaMae127%2BNGCzlF3eI8WR86i6EVuK0jQW1ZZFQJ3Q3M9FPikGhRyaKga3BCKN7tsLCP1ngJ3Q6jAHXsmnqfCTNJOkKSwYa0vJ7kSWf6YVn6GbjQQWpYopt7hGmgcHwtXGQjDpPOPRGl%2BIre6KQZmbThzlyYsC9GZvwcaFADJqJgwQdfiA0J%2FGcuazFEGAKY2x3GvRlPaI1FNValkxvCFrz5cZR%2BlC8ioO7fS3CQSF7Z1Cm9EfLCO6OGhbXjdNcDm6FWCK3GS4JiJoiObIdnULKYJazpWUPpglXK484p5f1ejoYE%2Bl9P%2FZpfOYYHSXVOA3Wn2qdYx6UpNm8PjC8pzCe7AduQ1FwLpzVfN0HsmJd2g8PkIMya0DwMyOr%2FEVYOB5rxn1pH0Jv84jiPKXhNcDGPj77u%2FSfbNSJLyYoFtZn69U91t%2BENoUFplgjKgdHjTJ9rlx6UdFQO6B1rsEGf%2FxvEuo4%2FdEaZybMPr4DO3MV3wbtZlR2zGthvbVVDJNFww1LSlCLTrL%2FzFD1luCo5hJPiyAvBr3ldQ3hDoLVwxMwgICLygY6pgHrcET5jWWTrqTSGujah57QVTgPzY1vbxmyqtlz%2F%2FbhqQTeIFLXwitWS6YE8kHHTTr82rQm2jD67goSDIKU4%2F7zMCeej1kLFciGvXq%2FUXgXhLQz6NwXEsU0HX38caVVHqmHq1NicpYttEEqKOMxODYKnBTQFy6JBVn5vwU6c7QJxysVAVWLQUef%2FPbUISm%2FDqBnc0wXF5unKv%2F01TvWO6%2Ft7My4YlHY&X-Amz-Signature=4331bc1b60615f144cdb2256d306fb31ed7ef004c4e4bb87423f950f130171b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
