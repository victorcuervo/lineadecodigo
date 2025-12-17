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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAQQQ2KK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMnsP0AlDdfQWJHfv0c9lakJyqVGtdIRFlpEoUZftxZwIhAJP8ZweWA9hYgQZLXstDWht2%2Fs9lKsdV%2Feey3kmN7uhsKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxozvSGyFoaSGV7NBsq3ANs2NrUD4l9sDSLmPUoRdvdWkflIa2xMGx5wSwBklMAhHzpGfpjOqBv2%2BKYcVpIktFgnAhxSF5L5Ijf4F0Dy0Y42q0P43iZ%2FB21vq9cz4TBd7yqBS7c0HiUataBU7%2BxkH9cdn67NmXLPDUPLosB1wR6u%2FVDGuMoTe56JT0TsBqzxGQOwxRiLlrypHnxlkPZIln850HFf8PHbspDCrW7V8jLFromAdyxmjKDIkOUD03Fy6uH46otUatdLzlJ%2BFnClVxDn7FxtirPSe6dC%2FG7nR5RUAHa6e2H7lXTvQ85PkWyHiLBXUXlC6OPVKSSQvKedTh2Iqz%2FD%2BKAeIvB20iZ5smuuUjz4geZiikGHu%2BPC72BHeuDNgMyL71dyAyO1DEqF%2B0qxNgd3lMVwj2I2A%2B8qshSDhHZ%2F1aAvorLD9Jq4s8Z4b24Pno8GyEwL6N5z6w6XJEIA1er%2FOwH1oxOZQFuK3Ap8P5z82gzds28vS9uzmgeynO8H6QddLyBHYGUEQobiUO1xzi5gfV4g9w17x8eMqGnz1eemMEgsfAibGyIzt5A3RjM0OMvkfiqZnCT3XqBQd9daNJjEfl%2Bj%2F7RVkO%2Bq7IJP9NuYERMZCKZfE%2BmFmYgD3sT%2BxaAGk88mwHGhTCwn4vKBjqkARssfXSK%2F2fKoeMMz%2BbIEb%2FQqxaOnlm3gj6aQxgZSpbqfb3ZXuzGl1hgT%2B1roM3zEwchWpudSjSxF6t%2FpYDMETbg7S6zIWizIlMekrutDvp2YKl5KxnbYahATqMP0l%2FUKKaJChPTagKKogKz5RazVRXLTmHbqvpH0pVSKRIPKCOBCRhaJPNuwU7KArZe831pzeU71KdACkJPfP6ITsy9Ke1S5P7a&X-Amz-Signature=40557542a5d1b6f2d926daa82a28d72cecaaf4daf1dbbd0e52f5093d66b35d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAQQQ2KK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMnsP0AlDdfQWJHfv0c9lakJyqVGtdIRFlpEoUZftxZwIhAJP8ZweWA9hYgQZLXstDWht2%2Fs9lKsdV%2Feey3kmN7uhsKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxozvSGyFoaSGV7NBsq3ANs2NrUD4l9sDSLmPUoRdvdWkflIa2xMGx5wSwBklMAhHzpGfpjOqBv2%2BKYcVpIktFgnAhxSF5L5Ijf4F0Dy0Y42q0P43iZ%2FB21vq9cz4TBd7yqBS7c0HiUataBU7%2BxkH9cdn67NmXLPDUPLosB1wR6u%2FVDGuMoTe56JT0TsBqzxGQOwxRiLlrypHnxlkPZIln850HFf8PHbspDCrW7V8jLFromAdyxmjKDIkOUD03Fy6uH46otUatdLzlJ%2BFnClVxDn7FxtirPSe6dC%2FG7nR5RUAHa6e2H7lXTvQ85PkWyHiLBXUXlC6OPVKSSQvKedTh2Iqz%2FD%2BKAeIvB20iZ5smuuUjz4geZiikGHu%2BPC72BHeuDNgMyL71dyAyO1DEqF%2B0qxNgd3lMVwj2I2A%2B8qshSDhHZ%2F1aAvorLD9Jq4s8Z4b24Pno8GyEwL6N5z6w6XJEIA1er%2FOwH1oxOZQFuK3Ap8P5z82gzds28vS9uzmgeynO8H6QddLyBHYGUEQobiUO1xzi5gfV4g9w17x8eMqGnz1eemMEgsfAibGyIzt5A3RjM0OMvkfiqZnCT3XqBQd9daNJjEfl%2Bj%2F7RVkO%2Bq7IJP9NuYERMZCKZfE%2BmFmYgD3sT%2BxaAGk88mwHGhTCwn4vKBjqkARssfXSK%2F2fKoeMMz%2BbIEb%2FQqxaOnlm3gj6aQxgZSpbqfb3ZXuzGl1hgT%2B1roM3zEwchWpudSjSxF6t%2FpYDMETbg7S6zIWizIlMekrutDvp2YKl5KxnbYahATqMP0l%2FUKKaJChPTagKKogKz5RazVRXLTmHbqvpH0pVSKRIPKCOBCRhaJPNuwU7KArZe831pzeU71KdACkJPfP6ITsy9Ke1S5P7a&X-Amz-Signature=bf32b57ebcd5a51f17e526eadf315589d0f058e6d7d1c7bec23be41a61703222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
