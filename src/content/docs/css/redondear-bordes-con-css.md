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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KBU73EG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T191055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfuvNmegtUOPH26Mv0rkdtz5fshBoHu7fgPCDP4xZmBAiEAuoaoSEFmvLSXYceLNxvE5ZyaIc%2BkKCAxMmTtmKW%2FNoYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPjjShz8FPAU6W%2BzeircA9R5FJKMETlBuQcZsKLEduyUo1fAxLk3gLHNVV0XH6b0bm3CnDgVYEDFRHYFLmt%2B1TQoVBfh9o2%2BVWMbchga5CZr7%2FKRFGpNcyc4jbIm3dXnkPdJHLLeERzo7aJSbepdlAsIz5sZLnQIvvnxYpMlmrHOSpD2wVcAxq4nZMViXptwe13%2BDeFugI35G5mr5oe68zhp819ypaPoGVdUBD%2B4nkDFWmY3Mf4GN1cDACdICv89AeRKAK6EBgIjAriS01AiCLRqg9xpFNBOmuaptQi42y10HKEGMo3OEu1OeHQ0xgiI2PPLKeaTKXy1Ny9lN8N9mTF4MOh%2B9wwszI6zv1Uh6jGRShFJlIZ5FaCu4GsMfcxenrkgF3XAeJ6WwVQztBmG6tWNyM1%2BsPDQyMsnGxPfpV7l12qMcGWRZc0HG2%2BzFiWAwsLzUyj5g33lwNWqQD7abT%2BA3hcWoRtSp87J%2FmsSYOH3ybO0ZLe7koMqnkq8IlaGVkxTsFxHq4dQrigb5z1xWeXW0YAKC2g2KqwBeIadzUDJw7F8BkQtYivTdIhrd5rViM%2B2kSWPAd%2FRV2nEQlOdJWReotndkPiPBWkyxF0QqC6D%2BWZLKFy1IQ0mvf59WNUCGqlylGGxiNfcMlTvMLnj0MkGOqUBEvudbFTGRpnXvKGeCrr%2FQTTjEI6%2FbNCuQddxNvlkRcKUT1HYJEwOsVvsGg1iF4cqFimrXPzCKf%2FS9Rg4sq3sjHnp7cU3%2FreXiM0vS0kZTuIJKjLNbl8TX%2F2khKy7o8TeHk98oD%2FtdAW2qaxrpS3JbCAtjmOx%2FpL6L269oJb7e%2Bc3Y3crJew2VJG9gRGkKU94WA3WgjEWpi2zCmvCKoTXsISpflrw&X-Amz-Signature=c456f914c90dab144b9d50294114e6739bb07f98a788dad31da6a594726f9c2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KBU73EG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T191055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfuvNmegtUOPH26Mv0rkdtz5fshBoHu7fgPCDP4xZmBAiEAuoaoSEFmvLSXYceLNxvE5ZyaIc%2BkKCAxMmTtmKW%2FNoYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPjjShz8FPAU6W%2BzeircA9R5FJKMETlBuQcZsKLEduyUo1fAxLk3gLHNVV0XH6b0bm3CnDgVYEDFRHYFLmt%2B1TQoVBfh9o2%2BVWMbchga5CZr7%2FKRFGpNcyc4jbIm3dXnkPdJHLLeERzo7aJSbepdlAsIz5sZLnQIvvnxYpMlmrHOSpD2wVcAxq4nZMViXptwe13%2BDeFugI35G5mr5oe68zhp819ypaPoGVdUBD%2B4nkDFWmY3Mf4GN1cDACdICv89AeRKAK6EBgIjAriS01AiCLRqg9xpFNBOmuaptQi42y10HKEGMo3OEu1OeHQ0xgiI2PPLKeaTKXy1Ny9lN8N9mTF4MOh%2B9wwszI6zv1Uh6jGRShFJlIZ5FaCu4GsMfcxenrkgF3XAeJ6WwVQztBmG6tWNyM1%2BsPDQyMsnGxPfpV7l12qMcGWRZc0HG2%2BzFiWAwsLzUyj5g33lwNWqQD7abT%2BA3hcWoRtSp87J%2FmsSYOH3ybO0ZLe7koMqnkq8IlaGVkxTsFxHq4dQrigb5z1xWeXW0YAKC2g2KqwBeIadzUDJw7F8BkQtYivTdIhrd5rViM%2B2kSWPAd%2FRV2nEQlOdJWReotndkPiPBWkyxF0QqC6D%2BWZLKFy1IQ0mvf59WNUCGqlylGGxiNfcMlTvMLnj0MkGOqUBEvudbFTGRpnXvKGeCrr%2FQTTjEI6%2FbNCuQddxNvlkRcKUT1HYJEwOsVvsGg1iF4cqFimrXPzCKf%2FS9Rg4sq3sjHnp7cU3%2FreXiM0vS0kZTuIJKjLNbl8TX%2F2khKy7o8TeHk98oD%2FtdAW2qaxrpS3JbCAtjmOx%2FpL6L269oJb7e%2Bc3Y3crJew2VJG9gRGkKU94WA3WgjEWpi2zCmvCKoTXsISpflrw&X-Amz-Signature=ad51539c1d75475c609a03ad80f86adc29262a9df8badd8e00d1a1aae55f17c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
