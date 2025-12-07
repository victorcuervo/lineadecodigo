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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRCBR5KY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T154914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsj4oaZ4VQ3%2FHDMiFIFCe2Jl2yWWiBvvbpyMYTPMe2swIgbStpWI2Qq2yqsqELCc%2B8Wdw4DMbxPy9d5RdkhfI29EIqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrRQiRmALmKoI9ohyrcAyVhLMWSUCEYWoPaejpEwFmTWhNROXVCaqv9WQR3Uqy6tz3GnOXag83To2ovEyYFPwfrBsFzXqDTJIPYeXYwiC6fbdwB4haF3a3%2BpPfghKUXAcg%2BxY3jpru1bXh09%2F6lzmlhZP2dmATzHcG6jVMzGfyDarRNG7ZbOQKux%2FJS%2BWMSPek5qLeDVdSTegFsKKwclhoOOH2cxX5Xku6g%2FLl7gdQqpao3RonmUmixccV%2BJYsgAtb61%2FvEZMJWV9hHP%2BShUhi2%2BusASYG6%2BedIROkmws%2FczRm4oevCPQpBm%2BzNV5keKsk%2BHdILVJnozubvtsK7ZcHMfsiqPNGPEAxrkKw6ErV%2BfcmopkEM5kjEtdyKC3%2BswaoC9RHP5SuXQ4jltls8nwHZVoT72PUYkaKh9tNqvuW%2Bgcp3PbHD0MvbqeRt3qrDfZM11aHfSxKYLgS1n9hNOXtfIZlVcXprqe2ZUU7VmBaXykJFw1dP0V4%2B4deJnOykhQguv90hxwDkh1zXqBR9df6Fy%2BGbHtqU4D7gaitkgdyL7MiI%2B2EM43RJWsNM8D%2F9O2k6CtfBgj4datnnWVmNpOd0N%2B%2Fv5eL5Qxrzm0RvG1yz9vVQNWsL0IL3%2FNNkBE2Wcum%2FU9f7euU8p%2BflMNC61skGOqUBcwLUysJQuawnyNVJUaCFZXBrZXOfX8OrifruoFixWejtPWGEly4hD2hFvklkC2Ylw6UOlJdzzhmjXsZ03PhOicPXoEqHPHGsCL3KmvFlTHamI4Ix2jpbyAfFtdupo2OaeyvtXbMHgn5ugAC3E5I6Syv4zsiX5blAlaPNA%2BgOdxfuoBupsxGGhIz1bJaWHYgG%2F1MJKDBSJPhQXrFOLmcD8RgeacrR&X-Amz-Signature=06c16a2ddcb6f791830833f77e36d969f4e557cbaebe48445d46346b63de525c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRCBR5KY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T154914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsj4oaZ4VQ3%2FHDMiFIFCe2Jl2yWWiBvvbpyMYTPMe2swIgbStpWI2Qq2yqsqELCc%2B8Wdw4DMbxPy9d5RdkhfI29EIqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrRQiRmALmKoI9ohyrcAyVhLMWSUCEYWoPaejpEwFmTWhNROXVCaqv9WQR3Uqy6tz3GnOXag83To2ovEyYFPwfrBsFzXqDTJIPYeXYwiC6fbdwB4haF3a3%2BpPfghKUXAcg%2BxY3jpru1bXh09%2F6lzmlhZP2dmATzHcG6jVMzGfyDarRNG7ZbOQKux%2FJS%2BWMSPek5qLeDVdSTegFsKKwclhoOOH2cxX5Xku6g%2FLl7gdQqpao3RonmUmixccV%2BJYsgAtb61%2FvEZMJWV9hHP%2BShUhi2%2BusASYG6%2BedIROkmws%2FczRm4oevCPQpBm%2BzNV5keKsk%2BHdILVJnozubvtsK7ZcHMfsiqPNGPEAxrkKw6ErV%2BfcmopkEM5kjEtdyKC3%2BswaoC9RHP5SuXQ4jltls8nwHZVoT72PUYkaKh9tNqvuW%2Bgcp3PbHD0MvbqeRt3qrDfZM11aHfSxKYLgS1n9hNOXtfIZlVcXprqe2ZUU7VmBaXykJFw1dP0V4%2B4deJnOykhQguv90hxwDkh1zXqBR9df6Fy%2BGbHtqU4D7gaitkgdyL7MiI%2B2EM43RJWsNM8D%2F9O2k6CtfBgj4datnnWVmNpOd0N%2B%2Fv5eL5Qxrzm0RvG1yz9vVQNWsL0IL3%2FNNkBE2Wcum%2FU9f7euU8p%2BflMNC61skGOqUBcwLUysJQuawnyNVJUaCFZXBrZXOfX8OrifruoFixWejtPWGEly4hD2hFvklkC2Ylw6UOlJdzzhmjXsZ03PhOicPXoEqHPHGsCL3KmvFlTHamI4Ix2jpbyAfFtdupo2OaeyvtXbMHgn5ugAC3E5I6Syv4zsiX5blAlaPNA%2BgOdxfuoBupsxGGhIz1bJaWHYgG%2F1MJKDBSJPhQXrFOLmcD8RgeacrR&X-Amz-Signature=7e20d34764e9632bb34d758f430af07c6a7ee68ad9fd8e5283d2832cdb0c7685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
