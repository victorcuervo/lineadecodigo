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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TFUXB6D%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T171911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdsVPrFDnCqb5Fo2udzjsuiIvmzdkBWE65Sge6bkNWFAiEA9eQTO4Z4IAtzkTrfmzUB13xUfWwLwhNaBvnBG76I6goq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHO0OllJg3DjL%2B7fNCrcA0FufatoxAq%2Fy9r11Osll7C6c0w7zEEqAUOB0jlsAK6Of8e7qH0kkfhejl6wnG%2BCHrlW9ngymPX2H5Bqxt%2BfbYOI0DWDo6ifojxAKodv0i7GLg5NJL9maqfY4PxhU7ar6IUbjwz2AJBO%2B%2BQmLCxpmujxNEj2uEFBWhR888LKYB5dSn7%2FaQAqZRG1R5PPVu9HV5UWJsPpGwGAeanR1DRydRWS2%2BLvmx9oD9e%2FGZR2ogEBAljOwqLLZNVNXUDQ45PkQC6CdiRAZ0mFv9zqWgSyBO%2FFeOCwDT4zoMeED%2FM2N%2FdnuyScSsNkPXOlCP7elDCankiiiqGv3icANKTeayR1x%2F8DgUBTmHBZFWMDwF%2Fw%2F%2FRu%2FP3PvO7mSmz7041lqFzIn%2BYx6ggNi%2FccfbbO2fedKm2DwQFPxJrAUqAkmbunlArJ54jfuNfMdwSmVsEHwyUFeFeSq5nTNI3oW13eU8ShlxxscSG1xibhH32krfB9KLsIBg87%2BI%2B2j%2BGcNYj7hzdcXNdbGGeknq5qA17wsj%2FfSEJrlaSrvARgPqBQvz%2B74K6%2Fdwou8rffU7ueFnyoL0PbHaoU5mvrAvIuZITxPhQSDyGVTxvCRVTM2yIDKm0V%2FVibPpiorS01ivRPR9KNMIbyy8kGOqUBhIoNUywhm2LKCWXGFmubQmZoWP1pM1uwUB2n%2BiJTrGsNrsTB2aK4ajBUM4o0o8ERf16rQh0XbeuSMmGSEWkBUFTQDvnXrUt%2FyYvUkFaz2MvIbDnWvR3H6bO6JCPIyxjm%2BgYOXiCxWn8ff5mEb472N1gBnSLPt6tgc78WQtBE4HtneUabrclFG1WJYRsdQqKXBzfxXmy5AT3GfyYaGz3NbxWO6x4n&X-Amz-Signature=e95007676c6fc7f5b159777d1859bfabea7c74702462ec5c6855c3fc731b451f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TFUXB6D%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T171911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdsVPrFDnCqb5Fo2udzjsuiIvmzdkBWE65Sge6bkNWFAiEA9eQTO4Z4IAtzkTrfmzUB13xUfWwLwhNaBvnBG76I6goq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHO0OllJg3DjL%2B7fNCrcA0FufatoxAq%2Fy9r11Osll7C6c0w7zEEqAUOB0jlsAK6Of8e7qH0kkfhejl6wnG%2BCHrlW9ngymPX2H5Bqxt%2BfbYOI0DWDo6ifojxAKodv0i7GLg5NJL9maqfY4PxhU7ar6IUbjwz2AJBO%2B%2BQmLCxpmujxNEj2uEFBWhR888LKYB5dSn7%2FaQAqZRG1R5PPVu9HV5UWJsPpGwGAeanR1DRydRWS2%2BLvmx9oD9e%2FGZR2ogEBAljOwqLLZNVNXUDQ45PkQC6CdiRAZ0mFv9zqWgSyBO%2FFeOCwDT4zoMeED%2FM2N%2FdnuyScSsNkPXOlCP7elDCankiiiqGv3icANKTeayR1x%2F8DgUBTmHBZFWMDwF%2Fw%2F%2FRu%2FP3PvO7mSmz7041lqFzIn%2BYx6ggNi%2FccfbbO2fedKm2DwQFPxJrAUqAkmbunlArJ54jfuNfMdwSmVsEHwyUFeFeSq5nTNI3oW13eU8ShlxxscSG1xibhH32krfB9KLsIBg87%2BI%2B2j%2BGcNYj7hzdcXNdbGGeknq5qA17wsj%2FfSEJrlaSrvARgPqBQvz%2B74K6%2Fdwou8rffU7ueFnyoL0PbHaoU5mvrAvIuZITxPhQSDyGVTxvCRVTM2yIDKm0V%2FVibPpiorS01ivRPR9KNMIbyy8kGOqUBhIoNUywhm2LKCWXGFmubQmZoWP1pM1uwUB2n%2BiJTrGsNrsTB2aK4ajBUM4o0o8ERf16rQh0XbeuSMmGSEWkBUFTQDvnXrUt%2FyYvUkFaz2MvIbDnWvR3H6bO6JCPIyxjm%2BgYOXiCxWn8ff5mEb472N1gBnSLPt6tgc78WQtBE4HtneUabrclFG1WJYRsdQqKXBzfxXmy5AT3GfyYaGz3NbxWO6x4n&X-Amz-Signature=c69d27900542db58a5a1aded426df5f64d90578fa6c6a2097f2857672de2ade3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
