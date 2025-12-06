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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTGKH7JB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICb1qT3nJHh84CDkgi3BksmuY0OUTithK2zsq1I39OYlAiBc1BklzMfOF8SAqP0bJ8cyIF31WB8568zNbOXYN8g0uSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMp5jJXhLj9d%2FI4ERxKtwDQm3cIHsC4FlJAknqOgeQxUdG0lgJjUlLvrOhjxLatVC4BRo%2BhHxXk9cqektMlPAroDyZ%2BgWu52U4m0AnxTK9OBbUYYZ72HPiYWVTvpG4N1shtWcxRi9eDkhq6G%2BRb0D6V%2BUFy%2FwAnqH58qgacEqKsZ0NfV9m1SCp83W4E12V8%2Bu%2FMrpkX1ZmC7PF9xBn32%2B%2FP212oObJ8mKO7MZ0aABRIsDg2x16YdnpHoKmecEMLK7U7T7uRkAukId3ZYyB3MfDx1V3z9AVA9fxznlch4oGO9vHdSIUZDCe9lSFr98rYP2k46se9niGPZNQnkSP%2BqoBUbfmKQmzlusySaPg%2BIw5g0Ov3j%2BdQcJI%2FLRnuVF4uBwMceh9gokXMHnGoRpUrLtFDrUcjVZgoS%2B3FPHKJXaaTEdv5Ol7jpS01j5eNtM0uCm2r0SLKFyIQFGDkTvIMQ%2FbRtw8xFYoksFLR872%2FHjS8W0UU%2FQmzVkAzP1DJLbYivKz4gdX1sDPIj7K0LrsU8hpksSF4sOTfb2%2FA19s9qt4SNC%2BKqLjSbqy8%2BlfV%2Fvq3zRBFeCGXPN55cLp%2BQeKh6KExLsaoqkcRHFua3C42POY%2BukW5FtNUEmy1wtF01kjJTlXvm9Ljbd3D2Q3hzsw3YnQyQY6pgH6I1AUQBonaCG8FJ7i0FXxX3yzTSQylNCOYefq%2F9UnB8qd2EueRwVWRl%2F6U7210uim6alwE9pxhh0NucRvRd1XH9cfb0XnvyqopHyat1sz1%2Fng%2BvNLBgNFApBXFwUQOHHfDzBrGrmh7TVe83SlQxh5SuYZ6KRWahnyw95ImoTtUlgy%2B6uUgTiuecwjmCvuvA1gvOSVDz8pgENhsOj4aMTymrcUfL%2F0&X-Amz-Signature=e28db10f346a647fead78a711cd609c4e6785deae3f08b058264d1b3bdf6a982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTGKH7JB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICb1qT3nJHh84CDkgi3BksmuY0OUTithK2zsq1I39OYlAiBc1BklzMfOF8SAqP0bJ8cyIF31WB8568zNbOXYN8g0uSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMp5jJXhLj9d%2FI4ERxKtwDQm3cIHsC4FlJAknqOgeQxUdG0lgJjUlLvrOhjxLatVC4BRo%2BhHxXk9cqektMlPAroDyZ%2BgWu52U4m0AnxTK9OBbUYYZ72HPiYWVTvpG4N1shtWcxRi9eDkhq6G%2BRb0D6V%2BUFy%2FwAnqH58qgacEqKsZ0NfV9m1SCp83W4E12V8%2Bu%2FMrpkX1ZmC7PF9xBn32%2B%2FP212oObJ8mKO7MZ0aABRIsDg2x16YdnpHoKmecEMLK7U7T7uRkAukId3ZYyB3MfDx1V3z9AVA9fxznlch4oGO9vHdSIUZDCe9lSFr98rYP2k46se9niGPZNQnkSP%2BqoBUbfmKQmzlusySaPg%2BIw5g0Ov3j%2BdQcJI%2FLRnuVF4uBwMceh9gokXMHnGoRpUrLtFDrUcjVZgoS%2B3FPHKJXaaTEdv5Ol7jpS01j5eNtM0uCm2r0SLKFyIQFGDkTvIMQ%2FbRtw8xFYoksFLR872%2FHjS8W0UU%2FQmzVkAzP1DJLbYivKz4gdX1sDPIj7K0LrsU8hpksSF4sOTfb2%2FA19s9qt4SNC%2BKqLjSbqy8%2BlfV%2Fvq3zRBFeCGXPN55cLp%2BQeKh6KExLsaoqkcRHFua3C42POY%2BukW5FtNUEmy1wtF01kjJTlXvm9Ljbd3D2Q3hzsw3YnQyQY6pgH6I1AUQBonaCG8FJ7i0FXxX3yzTSQylNCOYefq%2F9UnB8qd2EueRwVWRl%2F6U7210uim6alwE9pxhh0NucRvRd1XH9cfb0XnvyqopHyat1sz1%2Fng%2BvNLBgNFApBXFwUQOHHfDzBrGrmh7TVe83SlQxh5SuYZ6KRWahnyw95ImoTtUlgy%2B6uUgTiuecwjmCvuvA1gvOSVDz8pgENhsOj4aMTymrcUfL%2F0&X-Amz-Signature=b471aaa4d93b15e6da905ed4912cbb170df9767e8c636028081ebc7ab6200257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
