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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YUKFMK7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIUaqZ16MPJaBu81hV1Xg0sMRECxgaP49kpVwTiRRmKgIhAJtJRZGK%2F66JNtgBuJQwMJQF%2BWDrxFBW7u92R%2FwRTyBMKv8DCHwQABoMNjM3NDIzMTgzODA1IgySR9kAW635p3FckGQq3AMXU77m8C6fd3y5OYr%2B%2FYtkbF4A5aMk4dyJ%2B6xau9ktFJG4warYbJxtxlooeJsE2jYRn%2BF3GXrZhjD7E3orcU7BuCR84nCKhVHnSAT4t9w6KWzfZ1ldTenAEkRM5VIMMR%2FY5%2B0GNd%2B1OUdlF23aHrYnnPN3YTBmWZev%2Fqp8c%2BLIQM5mUkhgFm5hK0nrCQaur6lvtfLGJLcy9UjQDgCqzTBdIa2719NZQ5R67nSABC5Xp%2Fg%2BgHCY9a7uK%2FikVLLbj4RiTii1w8U298cSIQ0lHK6zGwlnv5pYTZ0K5GPf9KH7oEiDC2hqt2M%2Bei%2BTHRRAOOBwALV6qT%2FOaFVEKEWkPHmd8XjENyxqYpuGMh4bTdr7G%2BmtcYHrU%2FDPZFaa7ZavTAYgVXlZgJl5XPfliTVrkK1NFrSGTuV3Nk7drvtNkvU0wxdLuVBAlFoQK7mcIpyxmOu9qgAbooE7merstkGmlctp%2FWOlm%2FGXtcwM0sROUp9oIZBlfr4BEQ7fuazePegYeJBPOTBfOQEsET%2FNsEZtckpUQ6%2BG%2BUeB5S0V9yU7HeaVyWE5REBkfp4TfltpyYj6zrEm5QzXhm4FmUE0%2FyMojsPCtr2tShjzBuqiehfllUA8tMCclXK4QuSJApkAPzDgjorKBjqkAe%2BFR%2F%2FCMQhU9LwppqW%2Faq1zXLcInzhkqnYEbQ1riuzEAZJGtd5wV83u241BH3nAaCWfOi84fqUAP0ZUisESaOvSgzZy5rrqvkD6e75mPpHjMs24E4UR%2B3pYFg24j2ae4%2B9AfyCjltHcf6tMuOaOlOuCflAtLaCnRhZCK0sUwPCSqmDycIH2V%2FLQzhkLyIk%2FOrIIFU6%2BEuxXg712wggm2R3m68fX&X-Amz-Signature=5ac2e375651815f2c7bf7a8022c70fb388ca051a323f727f93637229a4de5cad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YUKFMK7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIUaqZ16MPJaBu81hV1Xg0sMRECxgaP49kpVwTiRRmKgIhAJtJRZGK%2F66JNtgBuJQwMJQF%2BWDrxFBW7u92R%2FwRTyBMKv8DCHwQABoMNjM3NDIzMTgzODA1IgySR9kAW635p3FckGQq3AMXU77m8C6fd3y5OYr%2B%2FYtkbF4A5aMk4dyJ%2B6xau9ktFJG4warYbJxtxlooeJsE2jYRn%2BF3GXrZhjD7E3orcU7BuCR84nCKhVHnSAT4t9w6KWzfZ1ldTenAEkRM5VIMMR%2FY5%2B0GNd%2B1OUdlF23aHrYnnPN3YTBmWZev%2Fqp8c%2BLIQM5mUkhgFm5hK0nrCQaur6lvtfLGJLcy9UjQDgCqzTBdIa2719NZQ5R67nSABC5Xp%2Fg%2BgHCY9a7uK%2FikVLLbj4RiTii1w8U298cSIQ0lHK6zGwlnv5pYTZ0K5GPf9KH7oEiDC2hqt2M%2Bei%2BTHRRAOOBwALV6qT%2FOaFVEKEWkPHmd8XjENyxqYpuGMh4bTdr7G%2BmtcYHrU%2FDPZFaa7ZavTAYgVXlZgJl5XPfliTVrkK1NFrSGTuV3Nk7drvtNkvU0wxdLuVBAlFoQK7mcIpyxmOu9qgAbooE7merstkGmlctp%2FWOlm%2FGXtcwM0sROUp9oIZBlfr4BEQ7fuazePegYeJBPOTBfOQEsET%2FNsEZtckpUQ6%2BG%2BUeB5S0V9yU7HeaVyWE5REBkfp4TfltpyYj6zrEm5QzXhm4FmUE0%2FyMojsPCtr2tShjzBuqiehfllUA8tMCclXK4QuSJApkAPzDgjorKBjqkAe%2BFR%2F%2FCMQhU9LwppqW%2Faq1zXLcInzhkqnYEbQ1riuzEAZJGtd5wV83u241BH3nAaCWfOi84fqUAP0ZUisESaOvSgzZy5rrqvkD6e75mPpHjMs24E4UR%2B3pYFg24j2ae4%2B9AfyCjltHcf6tMuOaOlOuCflAtLaCnRhZCK0sUwPCSqmDycIH2V%2FLQzhkLyIk%2FOrIIFU6%2BEuxXg712wggm2R3m68fX&X-Amz-Signature=479e3e9426cd98eddc8f83d0e809b87d25cb372bc35300723d15686ae2f22580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
