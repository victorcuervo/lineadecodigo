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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2CQPXWO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfBdjNj7pHo8z%2FY3g37NvO2L4W2czqRjuno6CUvEr4SAiEA82neJaoOsSu%2Fm8gUXFB1KxN%2BmWP7eQpQrhF3Pk7rpsEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAge8SemgJRQXtKg7yrcA7jFxuK9Gibfyur4L%2FjVrr%2FB%2BSB2g8P6lXl2zO1A5%2B5djcQf%2BHjXIcNe9tilhkvtOg0NKkO6wZGYmywU2vxR6d56mp3NObyBmDljTSdSKpKHNrHoRvgWA1ZhU6%2F4GTIEFWpP3Wthplj982Sxi0Yb5oT%2Fs%2B1Ofd3Z%2BI8PmqV6GlRwvpPq1tpL%2FlZdHJ3Dn%2Bsqzc2slAeXfXQve14jMaKV1KX3d%2Fx8DmADfBGzD2dwBLANFtMSpvawcNdES%2B5LGA182gRTfbykqE9p7Udkq04Yc%2F%2B3OXdkMAaHxUQ1nKemP6jKmUy23fhzTumlj0byVws%2FTRH60L3ecE7MojwpifAl2ZSIm9W4aXkWECREHtDixdPqYXiSt48I4eVgk7UOe6zaJkNQ5rTPbwfEHUwlD9sLd3Z6dX9IPBdR7cydBb9svibxWxGGV%2B%2BFaYDPAcOsvySE%2B7DXwvLd%2BHkGwL5F7eGtzsafGK8TPaYct31xmmfeYgc5OQjSw0NFRi4XOi2RyEW%2B0hvpf7CzVZrFNlHQ7H83H9gQNyKglW%2FuXjRVYGOpkiDVt%2BMoky%2B%2FRCV8EAwCmrj5j%2FJsZtuPt584g7yztNOMDteAa5cOQSgkvOdn9TbC5rU7QipVCmDrmvBOPY6rMN6gi8oGOqUB471N5Y2r5noB%2FGZyXIZxBjE0bBT%2FI7qxgKqYj61L77oIqNwysQ4hJbNQwq2kT0GXi9KtgWGnrdW0kCHieqsqXguJE1Ln4NbyIR7ZL89UebuDNDJhxLXPn4%2BRKQpVgefrgu%2BeS2Oul3CxuBTLUF2oaO8RxF5uZPZ8fx0LHr8hbN91zK7YthmkCUmcfizBxm7JdjPIt0SyheoHCL7q08sLIbufZqqk&X-Amz-Signature=1f008141e4634bcb7709b81a89d5c7746937145e7790c986fbe73ff26549dcb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2CQPXWO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfBdjNj7pHo8z%2FY3g37NvO2L4W2czqRjuno6CUvEr4SAiEA82neJaoOsSu%2Fm8gUXFB1KxN%2BmWP7eQpQrhF3Pk7rpsEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAge8SemgJRQXtKg7yrcA7jFxuK9Gibfyur4L%2FjVrr%2FB%2BSB2g8P6lXl2zO1A5%2B5djcQf%2BHjXIcNe9tilhkvtOg0NKkO6wZGYmywU2vxR6d56mp3NObyBmDljTSdSKpKHNrHoRvgWA1ZhU6%2F4GTIEFWpP3Wthplj982Sxi0Yb5oT%2Fs%2B1Ofd3Z%2BI8PmqV6GlRwvpPq1tpL%2FlZdHJ3Dn%2Bsqzc2slAeXfXQve14jMaKV1KX3d%2Fx8DmADfBGzD2dwBLANFtMSpvawcNdES%2B5LGA182gRTfbykqE9p7Udkq04Yc%2F%2B3OXdkMAaHxUQ1nKemP6jKmUy23fhzTumlj0byVws%2FTRH60L3ecE7MojwpifAl2ZSIm9W4aXkWECREHtDixdPqYXiSt48I4eVgk7UOe6zaJkNQ5rTPbwfEHUwlD9sLd3Z6dX9IPBdR7cydBb9svibxWxGGV%2B%2BFaYDPAcOsvySE%2B7DXwvLd%2BHkGwL5F7eGtzsafGK8TPaYct31xmmfeYgc5OQjSw0NFRi4XOi2RyEW%2B0hvpf7CzVZrFNlHQ7H83H9gQNyKglW%2FuXjRVYGOpkiDVt%2BMoky%2B%2FRCV8EAwCmrj5j%2FJsZtuPt584g7yztNOMDteAa5cOQSgkvOdn9TbC5rU7QipVCmDrmvBOPY6rMN6gi8oGOqUB471N5Y2r5noB%2FGZyXIZxBjE0bBT%2FI7qxgKqYj61L77oIqNwysQ4hJbNQwq2kT0GXi9KtgWGnrdW0kCHieqsqXguJE1Ln4NbyIR7ZL89UebuDNDJhxLXPn4%2BRKQpVgefrgu%2BeS2Oul3CxuBTLUF2oaO8RxF5uZPZ8fx0LHr8hbN91zK7YthmkCUmcfizBxm7JdjPIt0SyheoHCL7q08sLIbufZqqk&X-Amz-Signature=258b5fde83f32bb85f19c0883db5d9ce9dede9efc35ef41a31aeb96c474af2d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
