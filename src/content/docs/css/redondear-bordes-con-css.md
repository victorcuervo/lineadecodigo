---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REJU2BLB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDL%2Bju6u6WwK%2FJcIVqgy4xrfaRzIThviggfPy%2FnbnZXpgIgHibEkJVhhaUHxXbR97WrdGJQXveF3ytVIasuhnD2NnMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDBFluH6CTdOag6KPnyrcA6RzJmS1oL%2FmGEGgTXdwxERdGJR4CYeUs8MYVEewfKI4fVhs7WTBFXdBD6TDI62%2Flmg5m9gXVTY%2FrzV1aefUhmztbSepRfIUKBVig%2BbC7VIuvA1tSv%2FyQEFZ5x22UKTOiDGYARYW48ldVMfz%2B9QN3bsKJtavvuVMrEigHVCgEaMloC4EYm9Qx%2Bvgle3PKI0UDMRCzSpkOpTnDD9ncJP3X1fmX9T8FlC5plJoMZv4U9s05vW9yje2YjlmxpgRKPs%2FloFp%2Fq7oz3uUSZkCLUMx6VXtzP%2B%2F8x7EMfWfLt3wk6WyPDccNLs7COo5O0bjyQY6vI2YcR%2BzrBbE%2FIr%2FJI5Fhrvfk8hdpAgogqKLHzf0KJ9lFxUaCKUWwikGgAMpguK0ZR8invk2VdmrOvVz3KmOoINLGzOPbXErMdSG9X2C%2Fy%2F9dtVv%2FtE3pX3lKoEn9q4PKfGfyzxliuNpQdWnadmQaVBInX8LPLk21XXEWRTVbLFNvZUhSJvE31owYrX%2Bgm5yrAjPxtC607GP8GHGBBNwlifvIsWfyyC%2B0FctZpcWvV2FWWWwJ05hX6zfX2R6T9Xu7%2BDRmPLgJ1tRHXsSWB0YT37h9JTUwptwxf%2BwUmVccreGFx401rXf0LUkm%2B1%2FMOHmxckGOqUBO9uG1PgvyhcN%2ByfqiPZxueRP8zxop7H3TjzgsiM4leFL23%2BnYUFolDvP3OhAMYV8jp6d2zVNhKxavLMgnQltYyX336SamogwpAXEYmxh4bkzgPg9VzaxRpRtjRjt9zGNW8%2B36wmw92OPlzAkszrpVIF0jHPykfOeBzthclEbzhWb8u6Ouk9UYfYzukn7xhvUWJH%2F2KgEPxRSLlYO1VuIPW9erDe1&X-Amz-Signature=ac8b6d785761e2aed6b4ef703d63db95601f51cb41b5ac18986c95425b688807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REJU2BLB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDL%2Bju6u6WwK%2FJcIVqgy4xrfaRzIThviggfPy%2FnbnZXpgIgHibEkJVhhaUHxXbR97WrdGJQXveF3ytVIasuhnD2NnMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDBFluH6CTdOag6KPnyrcA6RzJmS1oL%2FmGEGgTXdwxERdGJR4CYeUs8MYVEewfKI4fVhs7WTBFXdBD6TDI62%2Flmg5m9gXVTY%2FrzV1aefUhmztbSepRfIUKBVig%2BbC7VIuvA1tSv%2FyQEFZ5x22UKTOiDGYARYW48ldVMfz%2B9QN3bsKJtavvuVMrEigHVCgEaMloC4EYm9Qx%2Bvgle3PKI0UDMRCzSpkOpTnDD9ncJP3X1fmX9T8FlC5plJoMZv4U9s05vW9yje2YjlmxpgRKPs%2FloFp%2Fq7oz3uUSZkCLUMx6VXtzP%2B%2F8x7EMfWfLt3wk6WyPDccNLs7COo5O0bjyQY6vI2YcR%2BzrBbE%2FIr%2FJI5Fhrvfk8hdpAgogqKLHzf0KJ9lFxUaCKUWwikGgAMpguK0ZR8invk2VdmrOvVz3KmOoINLGzOPbXErMdSG9X2C%2Fy%2F9dtVv%2FtE3pX3lKoEn9q4PKfGfyzxliuNpQdWnadmQaVBInX8LPLk21XXEWRTVbLFNvZUhSJvE31owYrX%2Bgm5yrAjPxtC607GP8GHGBBNwlifvIsWfyyC%2B0FctZpcWvV2FWWWwJ05hX6zfX2R6T9Xu7%2BDRmPLgJ1tRHXsSWB0YT37h9JTUwptwxf%2BwUmVccreGFx401rXf0LUkm%2B1%2FMOHmxckGOqUBO9uG1PgvyhcN%2ByfqiPZxueRP8zxop7H3TjzgsiM4leFL23%2BnYUFolDvP3OhAMYV8jp6d2zVNhKxavLMgnQltYyX336SamogwpAXEYmxh4bkzgPg9VzaxRpRtjRjt9zGNW8%2B36wmw92OPlzAkszrpVIF0jHPykfOeBzthclEbzhWb8u6Ouk9UYfYzukn7xhvUWJH%2F2KgEPxRSLlYO1VuIPW9erDe1&X-Amz-Signature=b42c4550b899e611529bb0664ac484a20f676863565eaa96478a711c7310f4e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
