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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AC5WRP4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T204928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAikiyK1q4PSD%2FB6H13IG1pdG32cuSHu2MZ92QtderbbAiEA7vgOluwCAhILWj2H%2BmYvAuxsQObn9zpZcDMB017%2Fnkoq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPuD6QwGcx2D7H26LircA29BBgChcBXZcP8eSS5rYi29FmuBl16HMR%2FSTDUt1AQc4NssJ6HxztPf5SrOGwS8%2FdR2RiCxE4LYq3NP6uTimd3fb2%2Fmr%2FJhx9UlZ1v%2B06r0aXLtOUvK2Et%2BKQcfsc%2BSq7MKYTopRGtlv1oGeR6hClgZWBEkpasO9jkB56vIy4D%2FUoNzPcAPUfFxsFVSa%2BAulahsdWIeOtzkUv9P2b9rJIlsgVK2T0B59yqzpf%2B03YnIwacwY13%2FbDQpE%2BhYu3j9rLGMCT65R4jqJpFGWpTFCfpSFSZE6cacpV4Viz1OAgol6BSrEwurMK3%2BzmOVzEIbfvfzf3XXGrf%2FSYZKNRZ9SpWDiRo9Bbi4Ulz8Gwv4jXxwhRCZvDz4o9nRDExLRBLT2awXJWUR7iOemBhSTxYlCxU0WSZirb%2Fhzm9ps%2BBUissJfTltW7Aoq2LTtDRXlA1E7CvPmqwpGia3sE6ijjHlmlEFj12ISqL9wxUsAXYYMn2cHt3YPtnpfd4GLuohtr%2FDC24RhaaOG6LdEQ3q6pH1E%2FVBhmehB8s3Osz7O7f1b3Tt29nl1EX4ouGC0W1fh%2BsDdIPo%2BtFdAupH%2FdvBAEbcgSfoBkDAMSnnbYciz8Xa3zFDBuB2lfKTxDKXoXGrMIvK0ckGOqUBY5AtpaNYYJ5YQv%2FuUHD8rE3oenCRyoYXeXXDil5Tx7JYf66NJ5QiqOcM4KqQfMCibSljklGe2HmCEAwvEcajtMBf5aTFUorXwUwEuW%2FF0AnkTGfPZy7%2BZLjqvDNtHWhQ7I%2F%2Bef6P1WoFcD0LRDZUhDCxQeZfVKYWUSPivsS4dvUjdBTo0KlApt%2FXhHZstDkQYDz3qtNooenvZO%2FG96vUhBcBqw6D&X-Amz-Signature=c0cc9d61435f1b09b77a69b78f1a8b0f8a0c00493afc95a7c3f88e3d328e10c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AC5WRP4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T204928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAikiyK1q4PSD%2FB6H13IG1pdG32cuSHu2MZ92QtderbbAiEA7vgOluwCAhILWj2H%2BmYvAuxsQObn9zpZcDMB017%2Fnkoq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPuD6QwGcx2D7H26LircA29BBgChcBXZcP8eSS5rYi29FmuBl16HMR%2FSTDUt1AQc4NssJ6HxztPf5SrOGwS8%2FdR2RiCxE4LYq3NP6uTimd3fb2%2Fmr%2FJhx9UlZ1v%2B06r0aXLtOUvK2Et%2BKQcfsc%2BSq7MKYTopRGtlv1oGeR6hClgZWBEkpasO9jkB56vIy4D%2FUoNzPcAPUfFxsFVSa%2BAulahsdWIeOtzkUv9P2b9rJIlsgVK2T0B59yqzpf%2B03YnIwacwY13%2FbDQpE%2BhYu3j9rLGMCT65R4jqJpFGWpTFCfpSFSZE6cacpV4Viz1OAgol6BSrEwurMK3%2BzmOVzEIbfvfzf3XXGrf%2FSYZKNRZ9SpWDiRo9Bbi4Ulz8Gwv4jXxwhRCZvDz4o9nRDExLRBLT2awXJWUR7iOemBhSTxYlCxU0WSZirb%2Fhzm9ps%2BBUissJfTltW7Aoq2LTtDRXlA1E7CvPmqwpGia3sE6ijjHlmlEFj12ISqL9wxUsAXYYMn2cHt3YPtnpfd4GLuohtr%2FDC24RhaaOG6LdEQ3q6pH1E%2FVBhmehB8s3Osz7O7f1b3Tt29nl1EX4ouGC0W1fh%2BsDdIPo%2BtFdAupH%2FdvBAEbcgSfoBkDAMSnnbYciz8Xa3zFDBuB2lfKTxDKXoXGrMIvK0ckGOqUBY5AtpaNYYJ5YQv%2FuUHD8rE3oenCRyoYXeXXDil5Tx7JYf66NJ5QiqOcM4KqQfMCibSljklGe2HmCEAwvEcajtMBf5aTFUorXwUwEuW%2FF0AnkTGfPZy7%2BZLjqvDNtHWhQ7I%2F%2Bef6P1WoFcD0LRDZUhDCxQeZfVKYWUSPivsS4dvUjdBTo0KlApt%2FXhHZstDkQYDz3qtNooenvZO%2FG96vUhBcBqw6D&X-Amz-Signature=a7c88a28c94556be4bab7d36b63f8acb76d3779481cb46bb5791c1a161e21502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
