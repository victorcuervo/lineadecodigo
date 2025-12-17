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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZHRZQU7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T215056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4bSfwVnni9DqDJFbBexCQA8YIX%2BFHvimWS6IxB6BmSAiEA%2B5jc3lkjdjQYTJ4DwQ8cS9gQvA8gF%2B8hdd7TdhYpnxwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWZImjF%2FrUjwew8DSrcAyatj2xYvpX4oJ8Y92KWD9rq2OPIxb52xDmbUtvsxJc5H4mF7qJvterDv%2FTqHZqDpvTxjMjV94%2BFqgBPJfRFAVapN96XlsOXcK0k%2ByDGE%2FNx4zbpRFDqJqErRIGL9Kwx%2BZ%2Fr8xUYipwC9vzXRJkSU6WJcHiVOc0xTzt3YHvxBGhHLzOt70Z4GtRrsAeGWf6qOyTdf8yiBgoU%2BJVDNjbCp92XuzErjUkDkGO1vhTkRoxE5drV8WX0guAi9HiIahZ37uWuISzqIKITKsJor3i9i%2F0FNsxUebWuMpyQiQ3Q45iDqOjYZV5s4k2GDSZlIMZ%2BHJrjdAWK6s3U7Nx0nsE6bLaiX%2BjWBDUmshn1azkQ6NQYaNeYlRodSc5p1%2BqOYJc692JFNZolxH0FVs5AASh4VKokAyi21WqXOhpurSUbvTApfFHsg%2Fug9HyKxZH1pTZKI1E5zY%2F5UIDk5%2BJQBmcX3DB5sWKX99geJXydQbSFcTdaPM7RuHVsBw3uKOESR4zBbyE8XoxvdM%2F8tk1rIEHlx3a%2BQMYlS3%2B5MTNsl4vu40yer7MBJqajtasKBt0kKrs9SiRFT860RmvUCUH%2BgdivFFp0L56xX%2F%2BLExa2HqHpMX%2BG4bOM1wL6u4%2FmaS%2BHMP%2BtjMoGOqUBhudISnzZx0YORfFRrCF%2BGmyjCVlOPni%2FowcoCW8ef6WUVIplFryW6i4I633P1SeHcSHPVqWeDZpzRHJKSGj192BNo2kyLIZm2URRBMGTPhzokbkVgJykV8lcFqr7diXF94yKbfxTW41DulRlBH9l95K7SvAGQKkj9Rh0RuP0lhWQT3NPcpRZoDifIkCqSjSd01kLTK2wd47sq3WOTiX%2BGrF7C37%2B&X-Amz-Signature=7fc6ac8332e4adac2b65835579beed7e2c8aed96e14e5237ee374f1041d2e805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZHRZQU7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T215056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4bSfwVnni9DqDJFbBexCQA8YIX%2BFHvimWS6IxB6BmSAiEA%2B5jc3lkjdjQYTJ4DwQ8cS9gQvA8gF%2B8hdd7TdhYpnxwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWZImjF%2FrUjwew8DSrcAyatj2xYvpX4oJ8Y92KWD9rq2OPIxb52xDmbUtvsxJc5H4mF7qJvterDv%2FTqHZqDpvTxjMjV94%2BFqgBPJfRFAVapN96XlsOXcK0k%2ByDGE%2FNx4zbpRFDqJqErRIGL9Kwx%2BZ%2Fr8xUYipwC9vzXRJkSU6WJcHiVOc0xTzt3YHvxBGhHLzOt70Z4GtRrsAeGWf6qOyTdf8yiBgoU%2BJVDNjbCp92XuzErjUkDkGO1vhTkRoxE5drV8WX0guAi9HiIahZ37uWuISzqIKITKsJor3i9i%2F0FNsxUebWuMpyQiQ3Q45iDqOjYZV5s4k2GDSZlIMZ%2BHJrjdAWK6s3U7Nx0nsE6bLaiX%2BjWBDUmshn1azkQ6NQYaNeYlRodSc5p1%2BqOYJc692JFNZolxH0FVs5AASh4VKokAyi21WqXOhpurSUbvTApfFHsg%2Fug9HyKxZH1pTZKI1E5zY%2F5UIDk5%2BJQBmcX3DB5sWKX99geJXydQbSFcTdaPM7RuHVsBw3uKOESR4zBbyE8XoxvdM%2F8tk1rIEHlx3a%2BQMYlS3%2B5MTNsl4vu40yer7MBJqajtasKBt0kKrs9SiRFT860RmvUCUH%2BgdivFFp0L56xX%2F%2BLExa2HqHpMX%2BG4bOM1wL6u4%2FmaS%2BHMP%2BtjMoGOqUBhudISnzZx0YORfFRrCF%2BGmyjCVlOPni%2FowcoCW8ef6WUVIplFryW6i4I633P1SeHcSHPVqWeDZpzRHJKSGj192BNo2kyLIZm2URRBMGTPhzokbkVgJykV8lcFqr7diXF94yKbfxTW41DulRlBH9l95K7SvAGQKkj9Rh0RuP0lhWQT3NPcpRZoDifIkCqSjSd01kLTK2wd47sq3WOTiX%2BGrF7C37%2B&X-Amz-Signature=fc1806c15e57412454be622613f514c8570e7f10d5810926720a8ff7703bcb60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
