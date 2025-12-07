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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LQRXFTI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T012253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMBMjpvdqHxfKmgf1uur9azKeUoWIwjyvbNNTzxW3h1AiEAqqF%2BMcwZDlDGMQwiao2gpRITc3Sq1eBnT%2FcokK00XUYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyDM4JaImZjPXcggircA9wo2My795J3Y%2Bz05nixmZixN%2B8HqCHU4TinDIk9HIadM2kbMqSiNkokgexWY7X3QgiGJZLslB9nnXkVyJueSzjKvwsIliOPdZ3gtiZ5utwiGXwJ03Ny2nISkZuuAfI26kpM0Roi5ZkBtsppiI5C3B66PoRQBhYg2BL1e5ohUN3ZjBtTn2gmDcsEYw9AQzqJHw4J2sFkMb1ZTfRle%2FhK%2B3ucB5T6%2BAalyS7vbfbEA7osiDdPRxc0eWOOy0jrgrjmkZj4%2FDLSi62CbMM6q7HZ2zIGa%2B8QWVcY3srwE%2FY3jrCyFhCIjxnJOgfnS2n0AnwssdtEehiALk0Nqm%2BHmMV1NytB0PRGpk%2B7DMJdm28dLDHCy1m%2FY7kOHqKD%2Fui4PN31vNndrQUP2SDH42ObIm2gwV9J0JkR8Hf8SLOGL2iHcO36G1Qsj2sbMdDsDERzSwBXi51FhLy4Q09ibGegV%2B88IgCvX9UvSJ5e2YIYOTpe6IOPU8dHIXTeyUbAJifwMvtuvC5BcIpEdngoua07I9NS%2FFj%2BIbrCX8A%2B40M78RrqINo3%2FP%2FfZZEeV1SixSTeJpDgys0yypsv1Hh3nlbsZA40vUBbdSf1h%2B9uQCly8Vb4terT4Hhr%2FgD6kseseOv1MJD%2B0skGOqUBTby%2Bvu9HZPAu0xJDezytBe4HbTib4fcGq8iFkUv8Fzy%2B1l3c6zyAGrqdH5BO40HLi8QQGZG7wQOLJKC0F9dotfXt0FPl%2FQPoM6aJBIKyooNsv0SCOCOcApl6WYkkO0tEZzf0N7vxhAolQhnjQsYyxWXYrFYKPbb%2Fn7XzcLp4BbbkjDs3V2dNaQlaQ212ZJYM1lX73o1B%2FlGKcd3rAxf7YDFcPl2A&X-Amz-Signature=4fefe49c02e1a9cf80e54b8ce303486f39a5b7e1fcdbcf90bf953808b036874b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LQRXFTI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T012253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMBMjpvdqHxfKmgf1uur9azKeUoWIwjyvbNNTzxW3h1AiEAqqF%2BMcwZDlDGMQwiao2gpRITc3Sq1eBnT%2FcokK00XUYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyDM4JaImZjPXcggircA9wo2My795J3Y%2Bz05nixmZixN%2B8HqCHU4TinDIk9HIadM2kbMqSiNkokgexWY7X3QgiGJZLslB9nnXkVyJueSzjKvwsIliOPdZ3gtiZ5utwiGXwJ03Ny2nISkZuuAfI26kpM0Roi5ZkBtsppiI5C3B66PoRQBhYg2BL1e5ohUN3ZjBtTn2gmDcsEYw9AQzqJHw4J2sFkMb1ZTfRle%2FhK%2B3ucB5T6%2BAalyS7vbfbEA7osiDdPRxc0eWOOy0jrgrjmkZj4%2FDLSi62CbMM6q7HZ2zIGa%2B8QWVcY3srwE%2FY3jrCyFhCIjxnJOgfnS2n0AnwssdtEehiALk0Nqm%2BHmMV1NytB0PRGpk%2B7DMJdm28dLDHCy1m%2FY7kOHqKD%2Fui4PN31vNndrQUP2SDH42ObIm2gwV9J0JkR8Hf8SLOGL2iHcO36G1Qsj2sbMdDsDERzSwBXi51FhLy4Q09ibGegV%2B88IgCvX9UvSJ5e2YIYOTpe6IOPU8dHIXTeyUbAJifwMvtuvC5BcIpEdngoua07I9NS%2FFj%2BIbrCX8A%2B40M78RrqINo3%2FP%2FfZZEeV1SixSTeJpDgys0yypsv1Hh3nlbsZA40vUBbdSf1h%2B9uQCly8Vb4terT4Hhr%2FgD6kseseOv1MJD%2B0skGOqUBTby%2Bvu9HZPAu0xJDezytBe4HbTib4fcGq8iFkUv8Fzy%2B1l3c6zyAGrqdH5BO40HLi8QQGZG7wQOLJKC0F9dotfXt0FPl%2FQPoM6aJBIKyooNsv0SCOCOcApl6WYkkO0tEZzf0N7vxhAolQhnjQsYyxWXYrFYKPbb%2Fn7XzcLp4BbbkjDs3V2dNaQlaQ212ZJYM1lX73o1B%2FlGKcd3rAxf7YDFcPl2A&X-Amz-Signature=6a8cb8ebb9cd4fb15639f8838b789d4c18a5a1d79df4f87c851908d579c6a09e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
