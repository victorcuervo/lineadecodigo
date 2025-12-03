---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTHF24KK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIEQkQ7TwR5zYOEX1OdA0pkR8gT09z7IVI9xIVt37QAcmAiBIWiCb0A1x7MiSzuS4gvln0l24zuORZlCmqUmexU8hZir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM8IdBqHslvbZpTM7BKtwDZL1FsyhL62IPupwS517de3OTJJijjbBbuVka6wJMzGgJh7zaWrJu1P6VXUX4eeiAlyx7Ac0ZNH4L4rP6NTGlnw9yyjPtsKPuteftrRxJNntZzkqq8UwMB3Lc53V9x7SlK87QQc%2FYRfU9W9upxdEZW65xJZTVYf7T8SyzBxN8QepLB3ef6hEc2JhHVxfFNLDuir5LKTSfCsIvaoL5Ahc6fCzamVKuMKgP1wCMZ%2B9Ir2YkfxIJ7qJxcPvljV44XW56XL96XakF%2FH8Fj9SkqsW2N9k8R1z8YcIDxJKZV%2FZyf3rutsoaI%2BvH3x0VoOc7iwNTvvKoIT%2FBSG%2Bq7MSxtlNjRMx%2FR9hem1h0JsXGCFvwnBbrIgZRc3L7%2BdBpDuUnfDdh1sT8zBp7VTW8MVoGdr4YhVNx5adCN%2Fo%2FhmBCnMhZ3rjrZGX9WFRl99ntuciTfBiliwyXDGPcdxHFl3%2Be%2FVz8kGS%2BIAmySWYm4jGQoLZ8J3iDQH5awdwLz3gbwDH8TUMIyz%2BZnOpGz1rROOCp1MUnce3EEy8An0Ww%2BMAsTNVi4Tbmu%2Fo9cG7jwLxpIIJhteATDqJ%2BP2SfQuld8zmG6RSmCLSTNj4OqXlE8266far%2FPjPvJrNyCtaVwe5mrXwwv9zCyQY6pgEdhsNqIuefCZvCksmcHQrzoJAR8qGkEIWTGr6jrwROIi0RrW1xoipAssejIc6OdnxGSpwdUccjWPThe65VFdiRSzzuujVSX6C%2BFuvkI5AOVCz3IF%2BUmgMHyNqKCoOqtGZ6U1jtxLe6D%2FBVnlN3NLcLXv2Q5Fa2t19wwGbmJPD7XAzuausDAlC8Fq%2BQcGaHO%2BmKVtxql8V1MveidS5bouRngw0y%2ByfH&X-Amz-Signature=6c3687dd337d6df360ce59cd8ffebcbef7fbab94e3c052054d275c35d2d2b94e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTHF24KK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIEQkQ7TwR5zYOEX1OdA0pkR8gT09z7IVI9xIVt37QAcmAiBIWiCb0A1x7MiSzuS4gvln0l24zuORZlCmqUmexU8hZir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM8IdBqHslvbZpTM7BKtwDZL1FsyhL62IPupwS517de3OTJJijjbBbuVka6wJMzGgJh7zaWrJu1P6VXUX4eeiAlyx7Ac0ZNH4L4rP6NTGlnw9yyjPtsKPuteftrRxJNntZzkqq8UwMB3Lc53V9x7SlK87QQc%2FYRfU9W9upxdEZW65xJZTVYf7T8SyzBxN8QepLB3ef6hEc2JhHVxfFNLDuir5LKTSfCsIvaoL5Ahc6fCzamVKuMKgP1wCMZ%2B9Ir2YkfxIJ7qJxcPvljV44XW56XL96XakF%2FH8Fj9SkqsW2N9k8R1z8YcIDxJKZV%2FZyf3rutsoaI%2BvH3x0VoOc7iwNTvvKoIT%2FBSG%2Bq7MSxtlNjRMx%2FR9hem1h0JsXGCFvwnBbrIgZRc3L7%2BdBpDuUnfDdh1sT8zBp7VTW8MVoGdr4YhVNx5adCN%2Fo%2FhmBCnMhZ3rjrZGX9WFRl99ntuciTfBiliwyXDGPcdxHFl3%2Be%2FVz8kGS%2BIAmySWYm4jGQoLZ8J3iDQH5awdwLz3gbwDH8TUMIyz%2BZnOpGz1rROOCp1MUnce3EEy8An0Ww%2BMAsTNVi4Tbmu%2Fo9cG7jwLxpIIJhteATDqJ%2BP2SfQuld8zmG6RSmCLSTNj4OqXlE8266far%2FPjPvJrNyCtaVwe5mrXwwv9zCyQY6pgEdhsNqIuefCZvCksmcHQrzoJAR8qGkEIWTGr6jrwROIi0RrW1xoipAssejIc6OdnxGSpwdUccjWPThe65VFdiRSzzuujVSX6C%2BFuvkI5AOVCz3IF%2BUmgMHyNqKCoOqtGZ6U1jtxLe6D%2FBVnlN3NLcLXv2Q5Fa2t19wwGbmJPD7XAzuausDAlC8Fq%2BQcGaHO%2BmKVtxql8V1MveidS5bouRngw0y%2ByfH&X-Amz-Signature=d66cdfcbde8c6ce58337bca5071ac8e1f1495538c5f43b5d2ee911ec51120d46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
