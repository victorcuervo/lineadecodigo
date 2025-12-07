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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667USFSUQB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5TMLI%2FTB1jqel6ZdkrrpNQYkklJB3f4AZbxbKNBSegAIgDGd%2BT3kmQWO97%2BYolS179wDcLAle7FXar1Hs8vVvtE0qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9XO%2F7XA0mIN3SqmSrcA3EBP8nkQs62T4IjJLNSt6dHlOgnqjGsUKkDJxiGbeCdAqiLN1DLVD6qH7%2FvLwRPdSZbxmBAjkiTi6eJFsm9wlT6WRkDwm5B%2F53zmZAjDjBsxvwHC%2BZns2A8dRfHGrRWL0FjsKdx6VEfU7nDAcfnx3qRL2iDDa%2BNyEutIPXZog6guGgvyKk0bgLccgBrYXfRSIzlSN4WTpSiOk90W1sIRpryK7J2ljl86U0vYmXapnDSS5PxOgQ61hR332vgm4a10pq7GDQ1aiOziGurwUzR%2BrxlW34dD9thUoZM6%2BM%2Ft7PqUdofNj6OB5FEnjPx2KMSNv6Nk4KmFWnzJRChZexGtCIdwba3UDsEF4de4wl2ioUUMzSu%2FXX5JywxUIHwkMBLHSF15y5XN35dn8iQH1O%2FkWXWOfDADfOPahc7iBSZCaaqfYSLszyfoZtH%2FY%2Fpb873AiFKwWkeFeNQ7PgTlx%2FOz6ODe8sSn9gz%2B47ex6MNl2I3GrRLsgDjhBn3HI5aUy7zisY7UGu59L037cYxMdV2Y1MYjiw5r36eH%2FzrWlTjyajvB5E62N3EKhAzPf1KHnJdnS4yCLolVhinR9accO2trvAiwbNTtKfZNKDMHhzWQcctQWmEKHuSzl77bsajMPqh2MkGOqUB%2FJBxKkbJnX7pEU7PNF%2BOPObFJLEa9cW5HMEYrU6RwSNi5hBZf2wnXIUWOB4LIv%2FJf%2B%2F0l%2Bh%2F38iOhW33VGHv2r496ylcRuiqVA2m%2BY2D1FspjQy8sMBgkah1qPizouOYt94fuh%2BGoQ8Qnb7B3UQDXq1lDdjOXeEcLw9%2FCFmcRE6bC74J6vYG9jBqanzWFz%2FThWLX46ew9PDMTmSYX9p1A3H%2Ft6K8&X-Amz-Signature=8739966a517b9c895ff8a204ac375a4fe89fbb6bf6f602d0402d535960a7f360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667USFSUQB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5TMLI%2FTB1jqel6ZdkrrpNQYkklJB3f4AZbxbKNBSegAIgDGd%2BT3kmQWO97%2BYolS179wDcLAle7FXar1Hs8vVvtE0qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9XO%2F7XA0mIN3SqmSrcA3EBP8nkQs62T4IjJLNSt6dHlOgnqjGsUKkDJxiGbeCdAqiLN1DLVD6qH7%2FvLwRPdSZbxmBAjkiTi6eJFsm9wlT6WRkDwm5B%2F53zmZAjDjBsxvwHC%2BZns2A8dRfHGrRWL0FjsKdx6VEfU7nDAcfnx3qRL2iDDa%2BNyEutIPXZog6guGgvyKk0bgLccgBrYXfRSIzlSN4WTpSiOk90W1sIRpryK7J2ljl86U0vYmXapnDSS5PxOgQ61hR332vgm4a10pq7GDQ1aiOziGurwUzR%2BrxlW34dD9thUoZM6%2BM%2Ft7PqUdofNj6OB5FEnjPx2KMSNv6Nk4KmFWnzJRChZexGtCIdwba3UDsEF4de4wl2ioUUMzSu%2FXX5JywxUIHwkMBLHSF15y5XN35dn8iQH1O%2FkWXWOfDADfOPahc7iBSZCaaqfYSLszyfoZtH%2FY%2Fpb873AiFKwWkeFeNQ7PgTlx%2FOz6ODe8sSn9gz%2B47ex6MNl2I3GrRLsgDjhBn3HI5aUy7zisY7UGu59L037cYxMdV2Y1MYjiw5r36eH%2FzrWlTjyajvB5E62N3EKhAzPf1KHnJdnS4yCLolVhinR9accO2trvAiwbNTtKfZNKDMHhzWQcctQWmEKHuSzl77bsajMPqh2MkGOqUB%2FJBxKkbJnX7pEU7PNF%2BOPObFJLEa9cW5HMEYrU6RwSNi5hBZf2wnXIUWOB4LIv%2FJf%2B%2F0l%2Bh%2F38iOhW33VGHv2r496ylcRuiqVA2m%2BY2D1FspjQy8sMBgkah1qPizouOYt94fuh%2BGoQ8Qnb7B3UQDXq1lDdjOXeEcLw9%2FCFmcRE6bC74J6vYG9jBqanzWFz%2FThWLX46ew9PDMTmSYX9p1A3H%2Ft6K8&X-Amz-Signature=bdf3bed6b88f2fa66cfde98a3be5eb9a352c781dc783d16dfc937c61d2523710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
