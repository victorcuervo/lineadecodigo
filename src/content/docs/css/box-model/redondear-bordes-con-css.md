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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663XI3RQ2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6irdCgvMX%2BeocSqIuY2CzADIQIwt%2FdoRb5C3mixkizAiBUahGl2qoJIL0D7y0uOTZeJmES3r3qXfjXV9aECFuWZSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM8R1a%2FloQ8TQkhrleKtwDWmndQLqeh3Ftz2zd9r6al6tD6andOX%2FGTb3x0qJXcnsXbXbxPR%2FGtZZzUVvlWJzh7IJR14cwgi7rGYnR01VFAzqx%2BYXTwENlMRG3wux6lLJ2MZqRjigNzhFY2LWG1asLPVcv9PG0sVq%2FM4GIea41GzErNfyUhlnVGF%2FI6n7PD3PQfAv%2BXn7KZeWq1hqQrRRGypMo7yoyyWPFBdBVzBGRxR5C7wJ4BiwwPSC23qYSf0pNEc65iQUMd2mYJ5tBpF8peREwOoHvebyv99auQ1BNmT4wBaywNwPX8M5yXr%2BrCzHOF0c2hOm43A46Qf4nbN6zo476IKgeV06GFdwNYe7PQzI1mQelaeBF1rp5tHtV6Kz1vde%2BAgGHY5LMr7oLBTmcsFoG2uwJicPtW7nSIv7ZCzCNXTTRkhQW%2FC9m8CikF%2BRNBT7DYh2lGC0Ft1EmsE%2F9Lve2HgO1cyCjJ0i8FbRQiWez%2FcdJbezR4YzOLRrNf0BcmigXT3oFoq1o10UioeYBVayG3rShutx8JLf%2B4DIIb6I%2FoKCKBibBtB92E2fKTfY42Xs%2B%2BJVuduVhcRVFpctntev5elFYo%2Fr3raf0XJRQ4iXiZSvBp%2B5NWuHjxcB37mhHG27wS0vQAURR45Ew%2FYKJygY6pgHREhh8U1wpCaxRXo1luivgz9LrHdl68DD2FkRO3DBrq8xCjBM8MwPseyTPN2gi3%2FxM0DcPonGd3QBEVsL6NKjgQbtmjNmUsWOMldVWKUkmAzzzzUV%2FazUah0yANcGKrYdrl97yW%2F0uUm1UtiqKRYbNMNlz8s9bi0%2BOuNP%2BVe6zd213s0YPhVNvuOu8hxq%2B%2FT8EgbjWwkBjORx6O1u00LshVQ9l5N%2Bt&X-Amz-Signature=fdc82e542239c076ece29ab6a102d6d166d160111bd1b2a34c755cfc4d8fd3fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663XI3RQ2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6irdCgvMX%2BeocSqIuY2CzADIQIwt%2FdoRb5C3mixkizAiBUahGl2qoJIL0D7y0uOTZeJmES3r3qXfjXV9aECFuWZSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM8R1a%2FloQ8TQkhrleKtwDWmndQLqeh3Ftz2zd9r6al6tD6andOX%2FGTb3x0qJXcnsXbXbxPR%2FGtZZzUVvlWJzh7IJR14cwgi7rGYnR01VFAzqx%2BYXTwENlMRG3wux6lLJ2MZqRjigNzhFY2LWG1asLPVcv9PG0sVq%2FM4GIea41GzErNfyUhlnVGF%2FI6n7PD3PQfAv%2BXn7KZeWq1hqQrRRGypMo7yoyyWPFBdBVzBGRxR5C7wJ4BiwwPSC23qYSf0pNEc65iQUMd2mYJ5tBpF8peREwOoHvebyv99auQ1BNmT4wBaywNwPX8M5yXr%2BrCzHOF0c2hOm43A46Qf4nbN6zo476IKgeV06GFdwNYe7PQzI1mQelaeBF1rp5tHtV6Kz1vde%2BAgGHY5LMr7oLBTmcsFoG2uwJicPtW7nSIv7ZCzCNXTTRkhQW%2FC9m8CikF%2BRNBT7DYh2lGC0Ft1EmsE%2F9Lve2HgO1cyCjJ0i8FbRQiWez%2FcdJbezR4YzOLRrNf0BcmigXT3oFoq1o10UioeYBVayG3rShutx8JLf%2B4DIIb6I%2FoKCKBibBtB92E2fKTfY42Xs%2B%2BJVuduVhcRVFpctntev5elFYo%2Fr3raf0XJRQ4iXiZSvBp%2B5NWuHjxcB37mhHG27wS0vQAURR45Ew%2FYKJygY6pgHREhh8U1wpCaxRXo1luivgz9LrHdl68DD2FkRO3DBrq8xCjBM8MwPseyTPN2gi3%2FxM0DcPonGd3QBEVsL6NKjgQbtmjNmUsWOMldVWKUkmAzzzzUV%2FazUah0yANcGKrYdrl97yW%2F0uUm1UtiqKRYbNMNlz8s9bi0%2BOuNP%2BVe6zd213s0YPhVNvuOu8hxq%2B%2FT8EgbjWwkBjORx6O1u00LshVQ9l5N%2Bt&X-Amz-Signature=b74575cea740564939f932ebaad6da019a8bf9fc121372a77820a80170efbb83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
