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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCXUKG2W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWpdz8EOt9t8Ala2aKqtM%2FPLQIhdeJWPWvR1Aa8c363AIgCEDTpcAGcHOyOv4Ie1XgdH0yaz1R61zrF89cLlZPqdgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMnfO1p953Zw4geD5CrcA8JrSPUIJzhkYHXSNtGKNFvh89TZhX1eZ%2FT%2BPIXJCvljGj4tZW4KDXQESUL8dcbJVS4blkzbcnoS8PMsKptNovqByhE6VESoC3VTdxZFPykzLSrxOj50fA%2F4G6IGmFV33mslG1OdsgK2ahCQ96x4%2BOxG1%2BR4ORt5%2F0hb4ibgTmOmbpak0ztASh96zU3x4JLBY7%2BCdPJTF7P1RiO55GSGF3f8xRZSN%2BT3CBKHyLXIaG38EDYqK1oO%2BoCMKXg%2ByKA2bAFhK3yn%2BbW%2FI0OlvxHXKm6fLBE3byFMCLclQZdakeiWIWt0CBF8%2B95XmS2Nz3adJx6Um3H9ekieDZH9eff5T0pFRD%2FqpVGGOy5WX3yj0bgPsse%2FbmeEVNo2zk5HXEkhjvg58RzMCEcpuf%2BFfLHWVJw3Z4YRk4G936y6SyNuG7JDCGSOlYJJwDlqt8vJn0GnciYoig%2FrO8CyIwYd4IjAYYLYAC4I%2Bkb4tTzkF58NHbxXh%2Fzvef2zn%2Fyd6xo0PuigTrVcmQVg6254SEsTkjXMnQnv%2F1bprq1YIGj4FXwqd5jpn4ggDDgkfWvmdr5UFjFBgy9A1jyYmmR%2Ft7t%2BDQVPAUNCB8s7CDJP7vATuV9FdSROx8ZPTuWXV08vZtHpMK3fh8oGOqUBUApmXlKCVpICzWbRaYkyZjSKjUsWgaSbg4nWwEoimkZwvS1li3ikmn88zYzMfxloPu5iI45doXh6omksWi7RNKFLeXT1sOyMOatWqbA5G1oxL52qvV1%2FARuuwMaRcbIMMiqGt4zC58skUzkP8U8ddkoMR91WHtb7bvngypNUfpQwNei6W3DuIZ00HHzpt1NCwKyFHiN4pnpQrC2%2BZclJqFSgmZgz&X-Amz-Signature=69d4027c0723c9f9d51b565036470efdfa3adc5209dec69c02832c967e43173a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCXUKG2W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWpdz8EOt9t8Ala2aKqtM%2FPLQIhdeJWPWvR1Aa8c363AIgCEDTpcAGcHOyOv4Ie1XgdH0yaz1R61zrF89cLlZPqdgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMnfO1p953Zw4geD5CrcA8JrSPUIJzhkYHXSNtGKNFvh89TZhX1eZ%2FT%2BPIXJCvljGj4tZW4KDXQESUL8dcbJVS4blkzbcnoS8PMsKptNovqByhE6VESoC3VTdxZFPykzLSrxOj50fA%2F4G6IGmFV33mslG1OdsgK2ahCQ96x4%2BOxG1%2BR4ORt5%2F0hb4ibgTmOmbpak0ztASh96zU3x4JLBY7%2BCdPJTF7P1RiO55GSGF3f8xRZSN%2BT3CBKHyLXIaG38EDYqK1oO%2BoCMKXg%2ByKA2bAFhK3yn%2BbW%2FI0OlvxHXKm6fLBE3byFMCLclQZdakeiWIWt0CBF8%2B95XmS2Nz3adJx6Um3H9ekieDZH9eff5T0pFRD%2FqpVGGOy5WX3yj0bgPsse%2FbmeEVNo2zk5HXEkhjvg58RzMCEcpuf%2BFfLHWVJw3Z4YRk4G936y6SyNuG7JDCGSOlYJJwDlqt8vJn0GnciYoig%2FrO8CyIwYd4IjAYYLYAC4I%2Bkb4tTzkF58NHbxXh%2Fzvef2zn%2Fyd6xo0PuigTrVcmQVg6254SEsTkjXMnQnv%2F1bprq1YIGj4FXwqd5jpn4ggDDgkfWvmdr5UFjFBgy9A1jyYmmR%2Ft7t%2BDQVPAUNCB8s7CDJP7vATuV9FdSROx8ZPTuWXV08vZtHpMK3fh8oGOqUBUApmXlKCVpICzWbRaYkyZjSKjUsWgaSbg4nWwEoimkZwvS1li3ikmn88zYzMfxloPu5iI45doXh6omksWi7RNKFLeXT1sOyMOatWqbA5G1oxL52qvV1%2FARuuwMaRcbIMMiqGt4zC58skUzkP8U8ddkoMR91WHtb7bvngypNUfpQwNei6W3DuIZ00HHzpt1NCwKyFHiN4pnpQrC2%2BZclJqFSgmZgz&X-Amz-Signature=aa7653af72e7077d7372d85cec68fa251fb05d1f7ee9dcfd0ea131b20c64a902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
