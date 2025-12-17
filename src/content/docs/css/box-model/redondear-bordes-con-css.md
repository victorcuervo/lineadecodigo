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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSZPHVLB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz%2FjLh9tplK2dJYr%2BMt6P9q7q4%2FCTpiEe%2FzZH0bk7imQIhAJxJ1qJlsdE9CbKR6lkp7EMtMryJkQii78IoXue8qQY3Kv8DCHQQABoMNjM3NDIzMTgzODA1IgzNIXaey%2Bb8tr3%2BVr8q3AONfypWSHp4L3EV8CFwb3boT%2FuKbQ2G7DmZcvnvQwjzpXfGW%2BhgEb3aWAK6XnKLETI1LTb1ryscrucxQhSAWXCxCOI%2F880E8BghEQlyKf7RkMEg9zm2bbn%2Bsz10ySBD1Nk9uUvadCoBdpC2BuQv6yr8mF7EsrTYpyvdS7rAdECrUxlJREVfpxYiDQfbN54L1tCGE1VgJ2r9grlNl7ble%2FEI4Ysmkj6EP9E3t6S%2Fn1SyNZpICtXvXi2uo3ZxIbk%2FOStN3O4%2FtlXj9usnjDhuSvJQLt1K5BWz0rP9pGdMx2t1GcygiRBKGtf1JWaH77jgxxgixqyf6WTUNgtz%2B8lZNHxf8tF3T9TDpz9l8FdUIZOxKVW0%2FHTYuPyL1EXKp82CHExJUfSsHiKcwNSJzPD5wCl74Umfp5q%2Bcs2lXjjR%2F7G3duq1TFtMhSxIqr%2FJV29Oe9n8p3fHVlnKThsZnJ5qSYW8WepvXoD%2FS5ISIEX1BlIQbajUut1LBgeeC8kCeAYhvIrdDuBraHiAmsxaS9pIrJlaqTmzk7KdMmv7IsYXkokEWXfuX5pFC5jDsun9fLD0PJYIBBalkwHGgvCsgwDKK%2BFIAfxDCy9LWG6mfAIzUSyvhVemyMukX5XeQk3QsTDfsojKBjqkAUCR2hc0J7LVr%2FGcgMN91ylQpIfGJHIauoT5Zod3MfjHxINX1lVJg5IfaBYQFZRFKuFWof4EsgW6mn6PpCbLhKK88QNJomkunYvYWEQ4g2x1rSOZ6aLC2wYscTBvrAzYoOAUjmpB6qt3gj0llt73c9%2F5gPg2S%2F8sWOunbMga9V2mTRj80KaHalPrpseaQR3OzICIA2t%2FLP6Abr5pICMHBwHmjPwN&X-Amz-Signature=38135e07f4225484e5016478e31f32e47b422770b2d6aaef1545d6c64b6c4019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSZPHVLB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz%2FjLh9tplK2dJYr%2BMt6P9q7q4%2FCTpiEe%2FzZH0bk7imQIhAJxJ1qJlsdE9CbKR6lkp7EMtMryJkQii78IoXue8qQY3Kv8DCHQQABoMNjM3NDIzMTgzODA1IgzNIXaey%2Bb8tr3%2BVr8q3AONfypWSHp4L3EV8CFwb3boT%2FuKbQ2G7DmZcvnvQwjzpXfGW%2BhgEb3aWAK6XnKLETI1LTb1ryscrucxQhSAWXCxCOI%2F880E8BghEQlyKf7RkMEg9zm2bbn%2Bsz10ySBD1Nk9uUvadCoBdpC2BuQv6yr8mF7EsrTYpyvdS7rAdECrUxlJREVfpxYiDQfbN54L1tCGE1VgJ2r9grlNl7ble%2FEI4Ysmkj6EP9E3t6S%2Fn1SyNZpICtXvXi2uo3ZxIbk%2FOStN3O4%2FtlXj9usnjDhuSvJQLt1K5BWz0rP9pGdMx2t1GcygiRBKGtf1JWaH77jgxxgixqyf6WTUNgtz%2B8lZNHxf8tF3T9TDpz9l8FdUIZOxKVW0%2FHTYuPyL1EXKp82CHExJUfSsHiKcwNSJzPD5wCl74Umfp5q%2Bcs2lXjjR%2F7G3duq1TFtMhSxIqr%2FJV29Oe9n8p3fHVlnKThsZnJ5qSYW8WepvXoD%2FS5ISIEX1BlIQbajUut1LBgeeC8kCeAYhvIrdDuBraHiAmsxaS9pIrJlaqTmzk7KdMmv7IsYXkokEWXfuX5pFC5jDsun9fLD0PJYIBBalkwHGgvCsgwDKK%2BFIAfxDCy9LWG6mfAIzUSyvhVemyMukX5XeQk3QsTDfsojKBjqkAUCR2hc0J7LVr%2FGcgMN91ylQpIfGJHIauoT5Zod3MfjHxINX1lVJg5IfaBYQFZRFKuFWof4EsgW6mn6PpCbLhKK88QNJomkunYvYWEQ4g2x1rSOZ6aLC2wYscTBvrAzYoOAUjmpB6qt3gj0llt73c9%2F5gPg2S%2F8sWOunbMga9V2mTRj80KaHalPrpseaQR3OzICIA2t%2FLP6Abr5pICMHBwHmjPwN&X-Amz-Signature=f0f90e8fda94379c73c07418944cac2b8f84cb8ed5dbb520df4bb159d7a63d10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
