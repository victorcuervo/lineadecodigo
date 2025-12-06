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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2UXIW2Y%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1bmu%2FkAxOjeHEZZ3w8mYGeGkJUpIfAiAbkrOR75NpNQIgCKWDO8gwI9fv5aaC74Lqg0YziopvKUmI6PbfKB%2BQ83Eq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHIC9H0BiYrs3AsQBSrcA3P4PfehFosp7fv1FhdQeQGqH%2But6pYoFzA%2BgM6JHCv9AlJkRefEIO4qFEWtTTjdqPk60W2o%2BIF%2BDPSAtZ8khXMwzdM113ChUR2WKDC3%2B0hdpH8eY1b43KnbISN5D2JJWrBnHSFyT9WIId1u4OEGEwOJYR0eOV7nYblh%2F1chkwOJXW3YZerV7hDipMLqJ5BST3Zz7D%2FQhbqO2NA4nojVN6gVNf8jSLptlsoF4vhCH%2Ffe4MgktKTAoB5VjxvMuHLcNKY2HewAIUaUmdDsWL5YgiyfTi7WIBTVBzpaDSH0HWB7YI7y5t5ziY7icezbYxoOP%2BFyNh3SI%2BtthGw0ioMgS86Gl8Qu82WcSwswjiqL1en4yww1AW14h4B9POYb8Hugm9vXjnPLHJne7xoS35J8oZd%2F%2FkmXS6SS7zj2dm4GKB15a44LgyLdDRspW81Xyl8W915lHapGLOXe1RzGGiu44MzQCm1b2Q4MiW%2BqrsZJ8U9p1uL2nqG0zOQCLU7hpGxUoqhYQY4WTIwdxpYneo1D%2BH0i2MTzhj0xcdjfdA6OSHZkCNWVZUSZK0B80nz%2BFMxjgvZxRyTMJITIqg45%2FnIWgE8%2BI0YIC0AMM5CWMIYUui7DoUMQOsdvalmRyRVfMPbqz8kGOqUBcr1HtYxRLXPnBJXAm5yKIQWkvvi%2FNQc5LZCHmwTnUAHjsn3wXXBhxtdMMN5M7bkP9cCrAIipWfOfF0Qpuc%2Fei86TSYyaGwOVqCZVdPIvqH5pgZiOfqMpnwiWqdJWAB39M2zjuJ3sLGrT6TSgrVrBdQcH8jdhM29Kef2656%2BEbQE0ypzJGd5HOEOOushCcvqmQWl57aQ3NRiReXVQiiXApuREpQEi&X-Amz-Signature=1bda6f6731ab2cedc06b0b2c7465e999d8b16dd4710b544014eabbd86f770dae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2UXIW2Y%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1bmu%2FkAxOjeHEZZ3w8mYGeGkJUpIfAiAbkrOR75NpNQIgCKWDO8gwI9fv5aaC74Lqg0YziopvKUmI6PbfKB%2BQ83Eq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHIC9H0BiYrs3AsQBSrcA3P4PfehFosp7fv1FhdQeQGqH%2But6pYoFzA%2BgM6JHCv9AlJkRefEIO4qFEWtTTjdqPk60W2o%2BIF%2BDPSAtZ8khXMwzdM113ChUR2WKDC3%2B0hdpH8eY1b43KnbISN5D2JJWrBnHSFyT9WIId1u4OEGEwOJYR0eOV7nYblh%2F1chkwOJXW3YZerV7hDipMLqJ5BST3Zz7D%2FQhbqO2NA4nojVN6gVNf8jSLptlsoF4vhCH%2Ffe4MgktKTAoB5VjxvMuHLcNKY2HewAIUaUmdDsWL5YgiyfTi7WIBTVBzpaDSH0HWB7YI7y5t5ziY7icezbYxoOP%2BFyNh3SI%2BtthGw0ioMgS86Gl8Qu82WcSwswjiqL1en4yww1AW14h4B9POYb8Hugm9vXjnPLHJne7xoS35J8oZd%2F%2FkmXS6SS7zj2dm4GKB15a44LgyLdDRspW81Xyl8W915lHapGLOXe1RzGGiu44MzQCm1b2Q4MiW%2BqrsZJ8U9p1uL2nqG0zOQCLU7hpGxUoqhYQY4WTIwdxpYneo1D%2BH0i2MTzhj0xcdjfdA6OSHZkCNWVZUSZK0B80nz%2BFMxjgvZxRyTMJITIqg45%2FnIWgE8%2BI0YIC0AMM5CWMIYUui7DoUMQOsdvalmRyRVfMPbqz8kGOqUBcr1HtYxRLXPnBJXAm5yKIQWkvvi%2FNQc5LZCHmwTnUAHjsn3wXXBhxtdMMN5M7bkP9cCrAIipWfOfF0Qpuc%2Fei86TSYyaGwOVqCZVdPIvqH5pgZiOfqMpnwiWqdJWAB39M2zjuJ3sLGrT6TSgrVrBdQcH8jdhM29Kef2656%2BEbQE0ypzJGd5HOEOOushCcvqmQWl57aQ3NRiReXVQiiXApuREpQEi&X-Amz-Signature=cb6f05be458533bcf845910e0f95c0bda459576a0972d9225d39ebbf2d05a6cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
