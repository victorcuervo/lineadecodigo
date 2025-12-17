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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHB4NKIS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3WKt9JS4rsdW6k9hTGP201VLII7i7R8%2BWYIHjyPxnpAiEAwGE2fSTnSAirLLH9Ey9H6A4Ycj3IDZ2MEinLuwPZNiAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCn4MG0u03v6I2WXXSrcAw55GFlZhS5DYA7oMLulpY5xkuL6DNiX7hjJEBrOf7CX9CKrSX6ZjpMwrihOyqRS1Hfh%2BU%2BViG8hEjTOOaDQLIyJmPEWsITiI%2FRQqD9r7JnEc8U8jSnvb74hIawy0nS7uSz9hHW2EHSke%2BIThBFIcGQRWU%2FLck61iqpmKiSIu5giaZBKreM7JP7MxlvZKQlogf%2BpU4T%2BkgBxB5pKRR%2BhF0sig8MEH0jSY4cXExfIIoByszVB0iddg2heOxidtVty3BY%2B8zfIQdynENEZ1Mog0IGGCAd%2BpNz193jSW47%2BzZQywZlgoUFmD6H1JSZct50RSmE%2FwFqgBm3UtbhHIEEBbSr8sh0eQiTuLlnZX9CLowXq4rbfNVHj72PHZrz%2FkDShhyGZRzIkUN5Hbm%2Bk9hWW47tX6%2F6KbBmrnBb6Yz7jb82E6pRb7jdhilGFwIr4FGcjHETXXLSmkDjCiPXZ3CgkYs9Ii4BVGM8zO83%2BXvDE9GZYHYyWLWnsUHpxdCBhA%2FKJ81yR2g07Vc%2BKlZESpmbj0xAHnDaYsL4YIYmhjQ5TesEKGjrtVyVFvLD0PSlpVEuxpvt71UlH8m6jeWfBKxX%2FIm03fBtR%2FiMvSQV%2FKl5j1atFaZEHRQkNhqwB2YokMISgi8oGOqUByB7QvVwqtfb6imb7Wy1W1DDOpvnh%2Fxin6p4qIDRu%2FWPSrMEj%2FYRfeca1wIpk80Z0hMo2AYu3W7zGtbyq1Lb6gJn55J0uMmj2E61W8%2FW7Q3lDKloq9y5yCf27y235tfvA%2BbXIEGu86MGMPD0x%2BtJogIjgFwd0x2GrzZrJv9WBg4Wb4ke%2Bjvrz%2FSliUedDTOuRpu%2F30AfziTjVAVZuqJrNicVSHL4q&X-Amz-Signature=ccf87ef802b3f96f0543f131fe7330bea2c775c3158694ac9ba4f98999edadae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHB4NKIS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3WKt9JS4rsdW6k9hTGP201VLII7i7R8%2BWYIHjyPxnpAiEAwGE2fSTnSAirLLH9Ey9H6A4Ycj3IDZ2MEinLuwPZNiAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCn4MG0u03v6I2WXXSrcAw55GFlZhS5DYA7oMLulpY5xkuL6DNiX7hjJEBrOf7CX9CKrSX6ZjpMwrihOyqRS1Hfh%2BU%2BViG8hEjTOOaDQLIyJmPEWsITiI%2FRQqD9r7JnEc8U8jSnvb74hIawy0nS7uSz9hHW2EHSke%2BIThBFIcGQRWU%2FLck61iqpmKiSIu5giaZBKreM7JP7MxlvZKQlogf%2BpU4T%2BkgBxB5pKRR%2BhF0sig8MEH0jSY4cXExfIIoByszVB0iddg2heOxidtVty3BY%2B8zfIQdynENEZ1Mog0IGGCAd%2BpNz193jSW47%2BzZQywZlgoUFmD6H1JSZct50RSmE%2FwFqgBm3UtbhHIEEBbSr8sh0eQiTuLlnZX9CLowXq4rbfNVHj72PHZrz%2FkDShhyGZRzIkUN5Hbm%2Bk9hWW47tX6%2F6KbBmrnBb6Yz7jb82E6pRb7jdhilGFwIr4FGcjHETXXLSmkDjCiPXZ3CgkYs9Ii4BVGM8zO83%2BXvDE9GZYHYyWLWnsUHpxdCBhA%2FKJ81yR2g07Vc%2BKlZESpmbj0xAHnDaYsL4YIYmhjQ5TesEKGjrtVyVFvLD0PSlpVEuxpvt71UlH8m6jeWfBKxX%2FIm03fBtR%2FiMvSQV%2FKl5j1atFaZEHRQkNhqwB2YokMISgi8oGOqUByB7QvVwqtfb6imb7Wy1W1DDOpvnh%2Fxin6p4qIDRu%2FWPSrMEj%2FYRfeca1wIpk80Z0hMo2AYu3W7zGtbyq1Lb6gJn55J0uMmj2E61W8%2FW7Q3lDKloq9y5yCf27y235tfvA%2BbXIEGu86MGMPD0x%2BtJogIjgFwd0x2GrzZrJv9WBg4Wb4ke%2Bjvrz%2FSliUedDTOuRpu%2F30AfziTjVAVZuqJrNicVSHL4q&X-Amz-Signature=05c428e907aa047eb1bfcfff802770d90641b47bb677309082058bee5a0f3e72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
