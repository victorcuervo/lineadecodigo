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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OO3D6GO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0LpWpbK7U2Rd4YMk74S4jdAGHsyrizakBUHJ7PzP5gAiEAxXXOKDWRJHYILVhg0xx%2FMCLWcw0X59wv7JSxqb6p%2FfcqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FG%2FMUKjaTHWfu%2BaSrcA0jpPPEms4OGtO9%2FdJgL4N6q6vrS3Z4K%2FYDwm7h%2FADMx%2BPaUTZ1aNsexF9K7dyAZvmApi%2FpydBiQpolc70vWirqaIynNHJ2bwTDBLxLvTekyTcQwi9u8Wn8ZrV2S0rdTQxDnUxCxIvetVIEswB2A1wYmDafhhRHLMp7N0nok2LIpOQ%2B3QLH%2Fv9ZxiHNXcutofmKjPE0KDxn8ONDZYVj54pKDL0Ch7hXMFPTsb2fqjh4cc0FBOnmobvFNbibPASjDldLywqsbXGEQBgiCxY9e1QG4fkbeq%2B1HSfPJimqFfL2GZh41pHnnwwdbD02efIuZ62sapD0MKkf1HcIfTpdmqjb6gDVVR84sWhs4ECDNerPu%2BEjH4YXAda70J8mjeZp4ui1fqndTDJOflBaYljvwN1FEXwqcjtT4AugRopi2imInsu1fOisnggET8%2BtU66bi7aMyyO2Q5HSvrZEQRF9LySvpZYrgVf2yonCssDgZWrh8hcphYMMoi7hghLRYsV%2BlmYg%2FWETbyccBRQY7TUg5dJlOYDsIZAj%2B81p%2FyYDJPFOf4BTAFrhciMwsGNPd%2BaYEi%2FnN0js1ScKqOmtwAQpiPhdL%2BfnSvpWNTJqWxHmrUnN77946vT9EW5H23HyKMKqu3skGOqUBt%2Fmo3%2BwudJakE1s2ib1pYlEyhS8v12T57NATjkZO7GmwURsuN8ZorOtIp6reLrewrte4hHo2p4LUCAch6WRChVtz7z985Ygz0Yi7RxVneUKsJVcdmv3Npp5HM1WmLaasjNZrqNDm5pZwGdur%2BOq7bi3TqUsHESpI%2BsJTp%2Bbw%2BnmTrLDeroYx0eQo7R6G2vSiB3hPqajP4HAUXjnP3%2BNuvhTHUYLG&X-Amz-Signature=a23cdc7a8c5aa9e3cf9ebd3d370cf14411404afb1c373c88afdb3d37a178fb75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OO3D6GO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0LpWpbK7U2Rd4YMk74S4jdAGHsyrizakBUHJ7PzP5gAiEAxXXOKDWRJHYILVhg0xx%2FMCLWcw0X59wv7JSxqb6p%2FfcqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FG%2FMUKjaTHWfu%2BaSrcA0jpPPEms4OGtO9%2FdJgL4N6q6vrS3Z4K%2FYDwm7h%2FADMx%2BPaUTZ1aNsexF9K7dyAZvmApi%2FpydBiQpolc70vWirqaIynNHJ2bwTDBLxLvTekyTcQwi9u8Wn8ZrV2S0rdTQxDnUxCxIvetVIEswB2A1wYmDafhhRHLMp7N0nok2LIpOQ%2B3QLH%2Fv9ZxiHNXcutofmKjPE0KDxn8ONDZYVj54pKDL0Ch7hXMFPTsb2fqjh4cc0FBOnmobvFNbibPASjDldLywqsbXGEQBgiCxY9e1QG4fkbeq%2B1HSfPJimqFfL2GZh41pHnnwwdbD02efIuZ62sapD0MKkf1HcIfTpdmqjb6gDVVR84sWhs4ECDNerPu%2BEjH4YXAda70J8mjeZp4ui1fqndTDJOflBaYljvwN1FEXwqcjtT4AugRopi2imInsu1fOisnggET8%2BtU66bi7aMyyO2Q5HSvrZEQRF9LySvpZYrgVf2yonCssDgZWrh8hcphYMMoi7hghLRYsV%2BlmYg%2FWETbyccBRQY7TUg5dJlOYDsIZAj%2B81p%2FyYDJPFOf4BTAFrhciMwsGNPd%2BaYEi%2FnN0js1ScKqOmtwAQpiPhdL%2BfnSvpWNTJqWxHmrUnN77946vT9EW5H23HyKMKqu3skGOqUBt%2Fmo3%2BwudJakE1s2ib1pYlEyhS8v12T57NATjkZO7GmwURsuN8ZorOtIp6reLrewrte4hHo2p4LUCAch6WRChVtz7z985Ygz0Yi7RxVneUKsJVcdmv3Npp5HM1WmLaasjNZrqNDm5pZwGdur%2BOq7bi3TqUsHESpI%2BsJTp%2Bbw%2BnmTrLDeroYx0eQo7R6G2vSiB3hPqajP4HAUXjnP3%2BNuvhTHUYLG&X-Amz-Signature=db54bad3de411edb263c18ac40fa4fc25f07dde8a8d17aa781e5da7660c7872f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
