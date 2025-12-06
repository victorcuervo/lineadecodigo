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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MGX2Y25%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T215312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1CZ1ao2pLd1ILhoSmyo5o6tiCZXWmiJnoBhWJ7E4d%2BAiBFxKp3ANVw6m%2BIm4RtTxxVREX5FCHwfrkrK6Z25aINhCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMVmu%2BatE2U3mcbtf7KtwDS1Jw4AQRFRksYKPp6eu%2Bq8LIQD9LW2A2LX5Lteq%2FWrz10mCRMajp%2FkvVjL5%2BZmldBYJXBdHgannS3NmNe65lx0UTefVzdybdDvdSF2ufthEMFZp%2BSrOyeQT8Jl70Tym7vEiiFCbOV4mjXSEBUn16QI8eCIYyV1sn0WRBDP5IABp21eRaZ4iElXnMF7WWXNZe1A3nqCUNQNVYTxSiVR%2BLKf8bIOXRGudsJeIpPONlPkUbquhOkbicLPcjG34pXWewlQlrhYBxvTE8U3QIARBEB5WcI3dQj7KtV8XNanFKpbiyankWqUd53WsbxAW8JqwyBdgW5PfBurL0MMAWHFoQSjMR%2FTGCq9%2FbgbIT4Zpe21PcUolttSjLuaYN2%2F8C1kRAsV%2F8ZHWhElqSYIZH1rFcXEWVnJIgln55RoxOIqTGSb399xWlEqWawtx9W8gIzLHhgCo1KZ82dDIEzHok0wgtdKUgxXBIKD0nt9KUM9Ef%2F4DdV3A3ZD77Vw0p20TLWvksTo9A4%2FvH5jMimkK3PcmUUzgsEMGyQZ0YgJynvVI2T3r3vMFMN4BYpLgpNeGFR8PksIYyWFAVP5nPucK%2FXaWcyHJGNXEvidcgI7ne6vLbZT1z8Pvn0XUWCvtppgAwtsXRyQY6pgEMYyHfUL9I8QiC0UhmkaAdAGQds%2FuFrd7R4eSHcoZtwkdyQGMDW9S%2FRHxYv7LrJbG74gCgTRaUhUHVnNJ2eJO3Q8OWzDXArvS3%2FfFk4nqiEZG4jhbOPG5psUXKP%2FWrY%2BeoX7r2ePz%2FDtdwKMdUgbuWK852aAEtucmrSBsvCul1jewlZHT9g3twCCm4AFLLd8TvBO6kdoZuRSshUxwfi6nrgyZbelnc&X-Amz-Signature=b98b375b20be5ebec33b392ba1e80b6d85893d506cbe3eec1e51191ad47064f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MGX2Y25%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T215312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1CZ1ao2pLd1ILhoSmyo5o6tiCZXWmiJnoBhWJ7E4d%2BAiBFxKp3ANVw6m%2BIm4RtTxxVREX5FCHwfrkrK6Z25aINhCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMVmu%2BatE2U3mcbtf7KtwDS1Jw4AQRFRksYKPp6eu%2Bq8LIQD9LW2A2LX5Lteq%2FWrz10mCRMajp%2FkvVjL5%2BZmldBYJXBdHgannS3NmNe65lx0UTefVzdybdDvdSF2ufthEMFZp%2BSrOyeQT8Jl70Tym7vEiiFCbOV4mjXSEBUn16QI8eCIYyV1sn0WRBDP5IABp21eRaZ4iElXnMF7WWXNZe1A3nqCUNQNVYTxSiVR%2BLKf8bIOXRGudsJeIpPONlPkUbquhOkbicLPcjG34pXWewlQlrhYBxvTE8U3QIARBEB5WcI3dQj7KtV8XNanFKpbiyankWqUd53WsbxAW8JqwyBdgW5PfBurL0MMAWHFoQSjMR%2FTGCq9%2FbgbIT4Zpe21PcUolttSjLuaYN2%2F8C1kRAsV%2F8ZHWhElqSYIZH1rFcXEWVnJIgln55RoxOIqTGSb399xWlEqWawtx9W8gIzLHhgCo1KZ82dDIEzHok0wgtdKUgxXBIKD0nt9KUM9Ef%2F4DdV3A3ZD77Vw0p20TLWvksTo9A4%2FvH5jMimkK3PcmUUzgsEMGyQZ0YgJynvVI2T3r3vMFMN4BYpLgpNeGFR8PksIYyWFAVP5nPucK%2FXaWcyHJGNXEvidcgI7ne6vLbZT1z8Pvn0XUWCvtppgAwtsXRyQY6pgEMYyHfUL9I8QiC0UhmkaAdAGQds%2FuFrd7R4eSHcoZtwkdyQGMDW9S%2FRHxYv7LrJbG74gCgTRaUhUHVnNJ2eJO3Q8OWzDXArvS3%2FfFk4nqiEZG4jhbOPG5psUXKP%2FWrY%2BeoX7r2ePz%2FDtdwKMdUgbuWK852aAEtucmrSBsvCul1jewlZHT9g3twCCm4AFLLd8TvBO6kdoZuRSshUxwfi6nrgyZbelnc&X-Amz-Signature=4852d7514db2a9f0ea2052b63e08aad49a8817b4c6cdf9755f4b3befb260abba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
