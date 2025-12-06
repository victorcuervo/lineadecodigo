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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRUPUUWD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3WAY%2BI7L%2Fb9QkD4p%2B2qn2HNgGH0Az6%2FK7T20ME%2B5VzAiB9T%2Frm4resYiUsQze9RtD2L1Ywo78E1NGj1VW%2FceY%2Bfir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM4QgDE0uTqVOkmltXKtwDBEXezBg7C5j5ZLPbR9pZA4olILhDfYgpPlCXNnbGKjyCGsE4DW1kHzhpEWxh75JYxSTJqG61DO7ZR6ZVk7j8KKbRFcXQ2C%2Fo9mElwWM1oV2EAKb5VSEb0jL1WonYJWVvK0BtS23Fr6I29NYX%2BbFCTpliKgYCon4ZbRGefZIIIJwYPDZaVbgz5tQ47JPkHqsErE1gs8%2FfGBBJDfs6AiJhzRk2N1PizkxYVt960TY6SiGgm38%2FF9I1cfB%2FxaeQqDfJvdAvJ2y5UuAYwlueGnF4YqPD861mvXiG9XRCZTMf14VX4mo3fvpHQmncBqpV27sclhekKT4PAAeEhD%2Bp6Rl2I3rQC6b9kQjLcDjVn1efv225ApRpAZ4sgmWs%2FV4CHzjaFai6XTIYALO%2BFWvy%2FI4pkWBkawKqPU8%2FFhxOj%2FbVki%2BHEZHJviWqM0BGrlSam3Y3BeaWMyuUL%2Fvls5%2F3Iyzs9HF8K5lytczbUdgPkHEmyD%2Bsi9xUcgMjIycHm1PXt3KY1ka1Hg9EalUNFdC8VtfWsBuVyoq3IaAffCeXuA9FHbhWvYqkWX%2FVS9v%2Bx5OhHkpKXjQpkbmLsNUcWD9rO6vAY2XD0f2XdlqsD0zvoed8AEmQEaE7yflG4%2FmaV7Iw78POyQY6pgF6%2FDfbw3eYHzm1SRj5ZOQUq09MDXbkUpwPOvBTWIRzygoz0KdNKWriotywuU5PUdNfiCHNJEapxC8pLpSVzOsDU1Rv6iEbhXWfKzUaCzIEeXsCShVLxQw1DxV%2FTBLp9mHh%2BRB%2FPx6hbpVjFgG4Wze9hdg7rZJr7seaiTmBmWAk8jIsNABfS5qsBpdzvDgREu5ifH7XSY%2BRAf51X1eHBMMaNT2oh41c&X-Amz-Signature=bd92786d8731bf8a3c48d34236a4df57b6ab6eeff7a4a38f44a8bedc28641b5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRUPUUWD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3WAY%2BI7L%2Fb9QkD4p%2B2qn2HNgGH0Az6%2FK7T20ME%2B5VzAiB9T%2Frm4resYiUsQze9RtD2L1Ywo78E1NGj1VW%2FceY%2Bfir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM4QgDE0uTqVOkmltXKtwDBEXezBg7C5j5ZLPbR9pZA4olILhDfYgpPlCXNnbGKjyCGsE4DW1kHzhpEWxh75JYxSTJqG61DO7ZR6ZVk7j8KKbRFcXQ2C%2Fo9mElwWM1oV2EAKb5VSEb0jL1WonYJWVvK0BtS23Fr6I29NYX%2BbFCTpliKgYCon4ZbRGefZIIIJwYPDZaVbgz5tQ47JPkHqsErE1gs8%2FfGBBJDfs6AiJhzRk2N1PizkxYVt960TY6SiGgm38%2FF9I1cfB%2FxaeQqDfJvdAvJ2y5UuAYwlueGnF4YqPD861mvXiG9XRCZTMf14VX4mo3fvpHQmncBqpV27sclhekKT4PAAeEhD%2Bp6Rl2I3rQC6b9kQjLcDjVn1efv225ApRpAZ4sgmWs%2FV4CHzjaFai6XTIYALO%2BFWvy%2FI4pkWBkawKqPU8%2FFhxOj%2FbVki%2BHEZHJviWqM0BGrlSam3Y3BeaWMyuUL%2Fvls5%2F3Iyzs9HF8K5lytczbUdgPkHEmyD%2Bsi9xUcgMjIycHm1PXt3KY1ka1Hg9EalUNFdC8VtfWsBuVyoq3IaAffCeXuA9FHbhWvYqkWX%2FVS9v%2Bx5OhHkpKXjQpkbmLsNUcWD9rO6vAY2XD0f2XdlqsD0zvoed8AEmQEaE7yflG4%2FmaV7Iw78POyQY6pgF6%2FDfbw3eYHzm1SRj5ZOQUq09MDXbkUpwPOvBTWIRzygoz0KdNKWriotywuU5PUdNfiCHNJEapxC8pLpSVzOsDU1Rv6iEbhXWfKzUaCzIEeXsCShVLxQw1DxV%2FTBLp9mHh%2BRB%2FPx6hbpVjFgG4Wze9hdg7rZJr7seaiTmBmWAk8jIsNABfS5qsBpdzvDgREu5ifH7XSY%2BRAf51X1eHBMMaNT2oh41c&X-Amz-Signature=14eb1f4211cb784a38ccd71abd4a10a2c363c1c7b77cd5a56386be8b2e1351e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
