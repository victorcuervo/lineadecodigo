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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZHVOMGY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEroyz%2F1sxVON1WbI8BrWfogGoFU9Y%2B2z%2FjJGa%2BMvk32AiACwMoWYWm6Y%2FNoufRtiF6eDhCAeYVlBrhkfGUMafo5Zyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMAtOZoF7%2FkiLzv1GeKtwDrpUxRhaWQ%2BBjD31R93xO5tg%2B2N9K0wk1xzY%2B2%2Bte1lfSDLKNWLgk%2Bvh6aDSiLHxlfN3W66IcyXjBJ2Ihpd8z%2BX5Xy08DVgCqvIonpr9kJJBA3NFSz%2FVJKow%2B3NaKNo4kRq5Be%2B0wTUqBWU3zsGER0s%2FSlYRXSZOWsnDtLoZ09PKEa%2FdmH2eRX3yoc%2Bfov6a4qxGzBuygXdsZrTAsvYVpk8sRbMCRy1ihP9N6LkDNYIcgGF%2FV9AfAY9EPtwzP1rTJ0EKjtXGLzn%2Bxr20ECHej3EK3sGQ6BdzPLh7luFXfSKrpqD5fAcVFw48VK%2BXcroxjFCbcohJN3SA%2FfsASGlA5DLT1lZjW%2BCilNv4Xy9MEQQJ84NLFAv9RKF%2BTWbCsFe2uvyl4MXMq3%2BHZqZ%2BAYiX4wVM3AvL%2BlBGdsUqxioIhsKYiv1APTLzIaLg3rix9F0l64Bstd3DCbSfsW%2BJDS5Yxnu3GKiJPGc0HTgbOSSPYSgYJXbuPYFaHyW20otwsR7wBEYRBZyIUarVh5Uaml%2FTbR9WFNNlQMo75Qmiz9fqy8op7%2FtHKPTE8U6OMc2nyTyzisSphFZGGi3hwPfa54LM2p1RgROYrHD0H2bDp76ri9dNrkBamtPILPuD4Nbkw1LKIygY6pgEuBiUwm3ZHIYVE9tva%2B1yiPgs5JiWPFvRExVWONLUcu3nds5iSp0%2Bz%2BM9pg2mW1kmh2b8H02GEH2bpxbnbBjBDQlubxTAYcyJWsROpX34hRCdK6WRl0IsaCK4Ei6i08YfB7voIVWPapVpNPYjAvdTRwvaUm2YZ4ru8pe68FBnpLywJBeufF9Z5q9B5at204lbrfFi0XtqwcaFQl465AWRv3C6n4VHv&X-Amz-Signature=8df42db1e08fa3b7b3eb354f43940e77cc759d9e755b8a4682e40c10ce70c387&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZHVOMGY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEroyz%2F1sxVON1WbI8BrWfogGoFU9Y%2B2z%2FjJGa%2BMvk32AiACwMoWYWm6Y%2FNoufRtiF6eDhCAeYVlBrhkfGUMafo5Zyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMAtOZoF7%2FkiLzv1GeKtwDrpUxRhaWQ%2BBjD31R93xO5tg%2B2N9K0wk1xzY%2B2%2Bte1lfSDLKNWLgk%2Bvh6aDSiLHxlfN3W66IcyXjBJ2Ihpd8z%2BX5Xy08DVgCqvIonpr9kJJBA3NFSz%2FVJKow%2B3NaKNo4kRq5Be%2B0wTUqBWU3zsGER0s%2FSlYRXSZOWsnDtLoZ09PKEa%2FdmH2eRX3yoc%2Bfov6a4qxGzBuygXdsZrTAsvYVpk8sRbMCRy1ihP9N6LkDNYIcgGF%2FV9AfAY9EPtwzP1rTJ0EKjtXGLzn%2Bxr20ECHej3EK3sGQ6BdzPLh7luFXfSKrpqD5fAcVFw48VK%2BXcroxjFCbcohJN3SA%2FfsASGlA5DLT1lZjW%2BCilNv4Xy9MEQQJ84NLFAv9RKF%2BTWbCsFe2uvyl4MXMq3%2BHZqZ%2BAYiX4wVM3AvL%2BlBGdsUqxioIhsKYiv1APTLzIaLg3rix9F0l64Bstd3DCbSfsW%2BJDS5Yxnu3GKiJPGc0HTgbOSSPYSgYJXbuPYFaHyW20otwsR7wBEYRBZyIUarVh5Uaml%2FTbR9WFNNlQMo75Qmiz9fqy8op7%2FtHKPTE8U6OMc2nyTyzisSphFZGGi3hwPfa54LM2p1RgROYrHD0H2bDp76ri9dNrkBamtPILPuD4Nbkw1LKIygY6pgEuBiUwm3ZHIYVE9tva%2B1yiPgs5JiWPFvRExVWONLUcu3nds5iSp0%2Bz%2BM9pg2mW1kmh2b8H02GEH2bpxbnbBjBDQlubxTAYcyJWsROpX34hRCdK6WRl0IsaCK4Ei6i08YfB7voIVWPapVpNPYjAvdTRwvaUm2YZ4ru8pe68FBnpLywJBeufF9Z5q9B5at204lbrfFi0XtqwcaFQl465AWRv3C6n4VHv&X-Amz-Signature=a60007b386eff9e72b3e36dc568564dcbf41364277dbebfac43b265ff232cc5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
