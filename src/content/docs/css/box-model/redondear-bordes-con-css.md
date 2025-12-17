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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OQ6COO7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD7ZI%2BaQ%2B13zVq2vxKX2t6hUlCQZVCRlvRydT5u%2BchFwIhAOt1OM2u7I1BF77iYXBl%2BkfTcvk84ilLS4KJ2hEqnJeKKv8DCHcQABoMNjM3NDIzMTgzODA1IgxJ8ujyCrDjzB6U02Aq3AOe89HVmvkbXr%2Bp5f4DsWFH412ujyKf5AoK12yUtFhnGyNahMuUpHjUSVOocN2cYQJIEMMPU9rvMIo0w5EYyp9oEOsA3SC%2BeuAEYV5HRwQaU7JwG9RvsvhWmson%2BooGVY4R8ETmh7VbCCKWAXon67jqISZ8Roew05%2Bk7mGKXM7AjGE%2BwhJQ1eDqiIjY7fiT1wnN9qIB4SOtPkcbmIg8iyPtsdFpX5OMZgQiivnHYWclJumz0tK9AIZfGwWHw77pcu2VNDu1N1IitjBc44wQvK1FHRknLKIEEhsmBGEKX3A0x8%2BXRgFYw%2BtN5QYIo4azm1ICiI%2FRqpGJzuxHMiEg19ZNz9D%2BMlxlv7hBV0EsQfTMRk3PZcgvb1yBAiiTu4EDT1Yje0htIFYtP8Is%2BzeoIi%2BOdGsh7lmuqpFh8MBoF6oDG1kmijqOoF%2BsOfMhu9mdM5b2C2k63%2FyHbttrS69zhIVTaSkxBU6UZjqv3lzqw%2Fny206vb4V3aoseLIgTt74zr0uxORygR%2F3giMLMayIcPfQVxEPWzO0WSBYQZUWKoo%2FhTBlH2dhbkZO9YD2iqZTBz2Xseaa6YvgQQN%2FdTt%2FHqmb8HIxzv26TOvTv9pJvzdrEc6d7z5xYCo4rh8Y6YTCTg4nKBjqkAYgQuWOKOnI1pujSR6qRqV6ZoUfnWdItapcgNm1Khd4fMqixX9w%2BJ02ZPRympGyBkTh3R%2FySPF8C7TtITROD2gDplG1WhObKLMk%2B4L5qYgk4S%2Bn1g2P8mpjCRjjcIx1Q4WZrmqt5v1yp9F8Vlvj%2FIbbP20iSQpPPBxX64IC1bLDYAOKpRmrGXL4rl5R8JU1QLPQOI%2B1qpwNMlv%2B%2BzINBwfacM3ck&X-Amz-Signature=a98a0c1446c6851cc3886a6a73dbae062228d73ad0bed159ce20ab24e2ea2cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OQ6COO7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD7ZI%2BaQ%2B13zVq2vxKX2t6hUlCQZVCRlvRydT5u%2BchFwIhAOt1OM2u7I1BF77iYXBl%2BkfTcvk84ilLS4KJ2hEqnJeKKv8DCHcQABoMNjM3NDIzMTgzODA1IgxJ8ujyCrDjzB6U02Aq3AOe89HVmvkbXr%2Bp5f4DsWFH412ujyKf5AoK12yUtFhnGyNahMuUpHjUSVOocN2cYQJIEMMPU9rvMIo0w5EYyp9oEOsA3SC%2BeuAEYV5HRwQaU7JwG9RvsvhWmson%2BooGVY4R8ETmh7VbCCKWAXon67jqISZ8Roew05%2Bk7mGKXM7AjGE%2BwhJQ1eDqiIjY7fiT1wnN9qIB4SOtPkcbmIg8iyPtsdFpX5OMZgQiivnHYWclJumz0tK9AIZfGwWHw77pcu2VNDu1N1IitjBc44wQvK1FHRknLKIEEhsmBGEKX3A0x8%2BXRgFYw%2BtN5QYIo4azm1ICiI%2FRqpGJzuxHMiEg19ZNz9D%2BMlxlv7hBV0EsQfTMRk3PZcgvb1yBAiiTu4EDT1Yje0htIFYtP8Is%2BzeoIi%2BOdGsh7lmuqpFh8MBoF6oDG1kmijqOoF%2BsOfMhu9mdM5b2C2k63%2FyHbttrS69zhIVTaSkxBU6UZjqv3lzqw%2Fny206vb4V3aoseLIgTt74zr0uxORygR%2F3giMLMayIcPfQVxEPWzO0WSBYQZUWKoo%2FhTBlH2dhbkZO9YD2iqZTBz2Xseaa6YvgQQN%2FdTt%2FHqmb8HIxzv26TOvTv9pJvzdrEc6d7z5xYCo4rh8Y6YTCTg4nKBjqkAYgQuWOKOnI1pujSR6qRqV6ZoUfnWdItapcgNm1Khd4fMqixX9w%2BJ02ZPRympGyBkTh3R%2FySPF8C7TtITROD2gDplG1WhObKLMk%2B4L5qYgk4S%2Bn1g2P8mpjCRjjcIx1Q4WZrmqt5v1yp9F8Vlvj%2FIbbP20iSQpPPBxX64IC1bLDYAOKpRmrGXL4rl5R8JU1QLPQOI%2B1qpwNMlv%2B%2BzINBwfacM3ck&X-Amz-Signature=d53c2251cf45a80f8f2ed9227b4a6b552526125cf9ca560d734f9adf81e3f66f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
