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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EBVCXGW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T190621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAo%2Bvy%2FGynFHoIlDUOkM6md8YkqeF5H%2BYxMNnbe%2FRT%2FhAiBErfyOvlNmf8SgDSfkW%2BV%2BWtn0%2FFcSaD7FbyNZcuG4uCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS7wTxugkVSMRPj%2FHKtwDHwx1KH5yCOSI3Yl3UpLUATjEkI6eB9nagfAJ8ornHOCHhdZV%2B9CkyBjQHNwVstBToTiBi7%2FjtQey9VbPTQt5cZ79%2FYzC3F9wPORZ8PYQZConGLcqdRUzkGynbQzGu8jrgzl6TSffpC6S9ZKSwsbrZ9weU6nyFDimFx9p5Nbhw9wGcg7oRew7ywnKBNrr7KAyaN3XMZZ769P7Y7vus%2BcpHvGv0Tab3M877QBMK8wRVe8Jq3QLE3P2sAs4R%2B1v%2FA9FAo%2FynhNtZ59UkIVi8V53eD2rTiif9pN9eh4J80M%2Bp5LabmkECL9wMRrDA%2BAPm0yb0TAuBhDjixiI89ZdOthTxtAENYaQOF9LdSwZ1ZwWMxkm14xFjc%2FjrQIAaqgbj74e8vc7eV7ljLTgdzk9AFHceexztf0aQvIHhCA6C%2Fs%2FxEzTNqtVcaygUG%2F4Iq2ZqcPJzpBkhNElCBCfTeN16YeiIDT95E965UZziTHYyC4QtoR7Hd3gCCgwyLeagovp4rZ6UVy7ibgJuEL1orPmn3tyoiPjiD4cLPS7pBMEWbTe9cpWf2ODicGSwRCsXiHdOmYajk7YvBV%2F7HbBei5otzdilH0f94nmPBl7EOqtbo39p4RaztAsyPxke8V9Z00wzLPcyQY6pgHgsiIUfpO1rGXfwBG1cHiFQFIz%2FUpHLVdrElDcyFqd00IBkMRdvtTXBvLVq2rQR9BkGH6z5AW1ABKeecRnWPsr4js73mfuIEDqnHimNqELeuc%2BQeUQve7He1AZ3ViIfy1j%2F7JnHJ9Sy7VWpqab6ZH0U5oSIpMpSsNefsjXcZXHH3KuxHJBhEJwY%2BuvHqfNxkwUbvTETRYhBCuuIVduqCrRbBjQmZSd&X-Amz-Signature=8f118248d73bef497a8a31f23e6da516292407ffb70d343f6e6ae3d1d3326276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EBVCXGW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T190621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAo%2Bvy%2FGynFHoIlDUOkM6md8YkqeF5H%2BYxMNnbe%2FRT%2FhAiBErfyOvlNmf8SgDSfkW%2BV%2BWtn0%2FFcSaD7FbyNZcuG4uCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS7wTxugkVSMRPj%2FHKtwDHwx1KH5yCOSI3Yl3UpLUATjEkI6eB9nagfAJ8ornHOCHhdZV%2B9CkyBjQHNwVstBToTiBi7%2FjtQey9VbPTQt5cZ79%2FYzC3F9wPORZ8PYQZConGLcqdRUzkGynbQzGu8jrgzl6TSffpC6S9ZKSwsbrZ9weU6nyFDimFx9p5Nbhw9wGcg7oRew7ywnKBNrr7KAyaN3XMZZ769P7Y7vus%2BcpHvGv0Tab3M877QBMK8wRVe8Jq3QLE3P2sAs4R%2B1v%2FA9FAo%2FynhNtZ59UkIVi8V53eD2rTiif9pN9eh4J80M%2Bp5LabmkECL9wMRrDA%2BAPm0yb0TAuBhDjixiI89ZdOthTxtAENYaQOF9LdSwZ1ZwWMxkm14xFjc%2FjrQIAaqgbj74e8vc7eV7ljLTgdzk9AFHceexztf0aQvIHhCA6C%2Fs%2FxEzTNqtVcaygUG%2F4Iq2ZqcPJzpBkhNElCBCfTeN16YeiIDT95E965UZziTHYyC4QtoR7Hd3gCCgwyLeagovp4rZ6UVy7ibgJuEL1orPmn3tyoiPjiD4cLPS7pBMEWbTe9cpWf2ODicGSwRCsXiHdOmYajk7YvBV%2F7HbBei5otzdilH0f94nmPBl7EOqtbo39p4RaztAsyPxke8V9Z00wzLPcyQY6pgHgsiIUfpO1rGXfwBG1cHiFQFIz%2FUpHLVdrElDcyFqd00IBkMRdvtTXBvLVq2rQR9BkGH6z5AW1ABKeecRnWPsr4js73mfuIEDqnHimNqELeuc%2BQeUQve7He1AZ3ViIfy1j%2F7JnHJ9Sy7VWpqab6ZH0U5oSIpMpSsNefsjXcZXHH3KuxHJBhEJwY%2BuvHqfNxkwUbvTETRYhBCuuIVduqCrRbBjQmZSd&X-Amz-Signature=01808c12feb96874fcb027b22ab7ff2fcc98b2d270b331a9a2385d0e9ec529fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
