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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTWXUQEZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRB7Ys9zBYmK%2FS3wBzUWt6BGHa95tyVWlT9D7O353d%2FwIgOi3W%2B2Pizg2FVVPdWOnCzkgcLNJruVyKtjjAHwPdyNgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAhSktByia43xbPWSrcA6CfGdrHzpZUTEn1zisLv37doIUEmRPO1GWAx0yp7mv4wpASDIB2ZX2oIYvB6eeqUAAS%2Bfv2L4xbxnhGJFF0FdGY9gAUuvkz9KbvormPt%2F89g2bhhvMx9kiXznt%2BByqghVrhqsHwHDyx2ri4ZhQwWhrNGnooNL7qa9MVUl9AK0gTcBfMV74AP%2BLAUr%2FgPC0HEPk1XK3t5yMgHccU6bKkz3FYuPmuR62KC9wtgPPECDGisRTEYmXsnPDW95QSsnk7Cxa3P4AzPqlJAI%2FFfx0jzUeSS%2F9TiZKSGakfkUnDlSB7pHUig4fwJtyUHaZj0hVnVbJvn1lFR5%2Bkvtrs0pbqFpJHrsgbVCYIMrcy6gHt0edMvd3%2FbXlhe4%2Bs91CrS6OGIYfe7CfP2C%2BKYr4L09he%2Fo8j%2FETQUx40Cyh%2BGZBju3ICiCFshkVoLSfTziku%2F%2Fp2Z6mAO1%2BW%2B86Iss%2BpHq6KFU3FP7hvt0rlFwUbFRXA31%2FOB%2FgqrMJ%2F%2B28b8P2skhbeAT2XkoB0O3mrCCuV%2B9cuNuxBOJue9Pyb%2FnNB26e8r5WtaNXFpAkGGVryNFPcpenB%2BtxFBOlH%2B5E6tAwruoYJqL5t%2FTKiU07G1%2Fekw8OOQSoczvNJvkI2CK%2B5WuQoMMDP2ckGOqUBCw%2B6slKwWEalpcSengMIvaKlazBRnF%2Fn%2BU5HXfWO9p6xlh3PouymPRpIFZovidqF99ge8mLwnmWl9aA4s75XKmD7C%2B0WkuRzP%2B6rDGLFbPAtb3v3airO3NaI55z%2BuIlW0RPpwugvp1Mdu7%2Bv4KHQtE5R8kKdoprDnQfIwRV7eT0gc22Ew%2B5qhM8oqzNJz9gbKE7pvCWysyNvvVHfAJDBoloHf9QU&X-Amz-Signature=1b1db1ac3258ed8bab90553febfc62abd8413ba00063cc60428dc5d2ae75e545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTWXUQEZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRB7Ys9zBYmK%2FS3wBzUWt6BGHa95tyVWlT9D7O353d%2FwIgOi3W%2B2Pizg2FVVPdWOnCzkgcLNJruVyKtjjAHwPdyNgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAhSktByia43xbPWSrcA6CfGdrHzpZUTEn1zisLv37doIUEmRPO1GWAx0yp7mv4wpASDIB2ZX2oIYvB6eeqUAAS%2Bfv2L4xbxnhGJFF0FdGY9gAUuvkz9KbvormPt%2F89g2bhhvMx9kiXznt%2BByqghVrhqsHwHDyx2ri4ZhQwWhrNGnooNL7qa9MVUl9AK0gTcBfMV74AP%2BLAUr%2FgPC0HEPk1XK3t5yMgHccU6bKkz3FYuPmuR62KC9wtgPPECDGisRTEYmXsnPDW95QSsnk7Cxa3P4AzPqlJAI%2FFfx0jzUeSS%2F9TiZKSGakfkUnDlSB7pHUig4fwJtyUHaZj0hVnVbJvn1lFR5%2Bkvtrs0pbqFpJHrsgbVCYIMrcy6gHt0edMvd3%2FbXlhe4%2Bs91CrS6OGIYfe7CfP2C%2BKYr4L09he%2Fo8j%2FETQUx40Cyh%2BGZBju3ICiCFshkVoLSfTziku%2F%2Fp2Z6mAO1%2BW%2B86Iss%2BpHq6KFU3FP7hvt0rlFwUbFRXA31%2FOB%2FgqrMJ%2F%2B28b8P2skhbeAT2XkoB0O3mrCCuV%2B9cuNuxBOJue9Pyb%2FnNB26e8r5WtaNXFpAkGGVryNFPcpenB%2BtxFBOlH%2B5E6tAwruoYJqL5t%2FTKiU07G1%2Fekw8OOQSoczvNJvkI2CK%2B5WuQoMMDP2ckGOqUBCw%2B6slKwWEalpcSengMIvaKlazBRnF%2Fn%2BU5HXfWO9p6xlh3PouymPRpIFZovidqF99ge8mLwnmWl9aA4s75XKmD7C%2B0WkuRzP%2B6rDGLFbPAtb3v3airO3NaI55z%2BuIlW0RPpwugvp1Mdu7%2Bv4KHQtE5R8kKdoprDnQfIwRV7eT0gc22Ew%2B5qhM8oqzNJz9gbKE7pvCWysyNvvVHfAJDBoloHf9QU&X-Amz-Signature=1a851934b70e662f5353e1a7f427f5bca15a06a5ffe5e5c5754ee6ae47acf0c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
