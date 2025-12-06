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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QTLJTWG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T165825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuSwyjmleKbP9fnEBDyOesgc%2B5NSYK522jBh5O0RnV8AiEAnSI9frGZVs8%2BXz0trKKM9%2Bt7zM3QIMuLtDcQbvHwHV0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDlhx9fwsLznjLl%2BqSrcA07aPtSk8XmuzWewFYmwuVUY6JUOJQ4IXPmLNhC%2BtadntyfYSa69XC4GDED51UDNOYGc%2FJxhAopkx6PgOo8%2B5kgR0pqoguLXyfSABS0JOJiZrWa6ZFCI4v5Qm72Nc%2FwySbKazgbDe2pAl4AqZtwpN90kPyfv9wi9CLwFkHbahcvy1usUEbaoJN5hG4uxIjMDQQpTyevKsEnKfDDAl%2B5eHOVnoS1J1%2F5o%2FySTyqhUIBhEVLcOQPP5EaJrFrwXxQ0s9bp3JxXa6vqs3rj431wvQ7vbElh%2FbyVA3b8p4nXQK7WlriBFn8CRrhO%2BCpXbMV%2BEnEBfxWjQgOVwDURBWMvMeFURLb2Oa5iRksdMbuXJceUL8wyrXeQSvV0tR2srcYJ7FNrw0HluCGbSP8YVwuFpyYCZbf3%2BYLWpxB6yzAGU2miR6xOIZ51dvjwACsjJu8SGahEpPjC1jB6Utasbyh6HSOawWxHXeu1sTIKgg5gM1OEMQd7G8rgiEr5mlHMSmaWQodPYf%2BChl8iGWoHQjP7oTi0alR%2F2HQ3tu3sRFYu1RBbZ165YI5oJG%2FnJ9VicLmvrfWgsE%2Bw4sRTNthBuyq%2FElA9UH7xRn1KCzzheGkriU0yu8iMroEyuJ8b4i%2FfGMMOm0MkGOqUB1oteujsKAaTwCzK%2FC03MCD5vaaS3miPY%2F2tRtRpDfIRiwS9OT22Q371IGuIBLtCnOj%2BQMMMUXxcn2B%2Bel2wPa%2BM38elj1vc4a2NJ%2B0NEkJc%2FUsvEsFICN8Pt5bMRU%2BpSuuotfMzNPQnx8rkNH7rrGHXytPta5imty8hmVFuRTOJD%2FKmhKv8jnysEvINfV1ApjZVuGVjJngCV3ixtYZ41Mjrow0NN&X-Amz-Signature=9dfe79bf2ae333bd759a4382cd8a931290b3066075afa7823ecb1bc2d26b5525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QTLJTWG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T165825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuSwyjmleKbP9fnEBDyOesgc%2B5NSYK522jBh5O0RnV8AiEAnSI9frGZVs8%2BXz0trKKM9%2Bt7zM3QIMuLtDcQbvHwHV0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDlhx9fwsLznjLl%2BqSrcA07aPtSk8XmuzWewFYmwuVUY6JUOJQ4IXPmLNhC%2BtadntyfYSa69XC4GDED51UDNOYGc%2FJxhAopkx6PgOo8%2B5kgR0pqoguLXyfSABS0JOJiZrWa6ZFCI4v5Qm72Nc%2FwySbKazgbDe2pAl4AqZtwpN90kPyfv9wi9CLwFkHbahcvy1usUEbaoJN5hG4uxIjMDQQpTyevKsEnKfDDAl%2B5eHOVnoS1J1%2F5o%2FySTyqhUIBhEVLcOQPP5EaJrFrwXxQ0s9bp3JxXa6vqs3rj431wvQ7vbElh%2FbyVA3b8p4nXQK7WlriBFn8CRrhO%2BCpXbMV%2BEnEBfxWjQgOVwDURBWMvMeFURLb2Oa5iRksdMbuXJceUL8wyrXeQSvV0tR2srcYJ7FNrw0HluCGbSP8YVwuFpyYCZbf3%2BYLWpxB6yzAGU2miR6xOIZ51dvjwACsjJu8SGahEpPjC1jB6Utasbyh6HSOawWxHXeu1sTIKgg5gM1OEMQd7G8rgiEr5mlHMSmaWQodPYf%2BChl8iGWoHQjP7oTi0alR%2F2HQ3tu3sRFYu1RBbZ165YI5oJG%2FnJ9VicLmvrfWgsE%2Bw4sRTNthBuyq%2FElA9UH7xRn1KCzzheGkriU0yu8iMroEyuJ8b4i%2FfGMMOm0MkGOqUB1oteujsKAaTwCzK%2FC03MCD5vaaS3miPY%2F2tRtRpDfIRiwS9OT22Q371IGuIBLtCnOj%2BQMMMUXxcn2B%2Bel2wPa%2BM38elj1vc4a2NJ%2B0NEkJc%2FUsvEsFICN8Pt5bMRU%2BpSuuotfMzNPQnx8rkNH7rrGHXytPta5imty8hmVFuRTOJD%2FKmhKv8jnysEvINfV1ApjZVuGVjJngCV3ixtYZ41Mjrow0NN&X-Amz-Signature=07c4144a00ad57eb69d22fbf2683c89383752538b4bab7a11988eb60683cac83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
