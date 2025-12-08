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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA7AJSJJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T140457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAy%2BuAy0BREBiSqXcTezwSM5v%2BQCFtimMZWuWLDY2ibyAiEAljBBDZoMh%2FBTVz3HpOcqbEZivebDd2gwsiOJk9zDGBMqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL00fQrTlS%2FGFu0LtSrcA5y5dKtpZwvwKCQWj0Jl1zAawfVv%2B4FxGCc%2BgwARi3H%2BtecF%2BUyE03gXn9GlyoYoZUj2l0EzhmOq1zjO%2FnhFeEv9vxVR%2FYPucvA7P7KeosCEx7EjpPZdLJ0k1DhWZeuopDedjuZHDVXaV1tfllq3zXcGci%2BCbLhRtpswDgHFKKCJG7FbDj2jEGrSDyWa%2FQ8%2Bb93eeF6bZzqnWWU67jk2zT8S%2Faf0T67WCi4CvchBoPM%2FgpQPssgJ8rjDKaUGxKDX%2BHHM5uQ21LTlBEXQnxgWGdi6z%2FUC754HWlxU0ZFhAlgTJH8Kz8ul1AuSEoMRNZHD16we1e1Na92oZCB4dzwxg1OUGnrY%2BkV8c9q26jvmzLS4rM5RG3BPMe20O6jPRuDbA2TCDlXMQ8FLHjgtq2F6Z14oNmmlLokrWUQu%2F2JX0rPkCXj2OdDQo2c1XzdAPnnzWYT2iGWnGhAM4RUFDgf2IPU6F9v%2B5yb8cmcB4fuYBnz5eqJERRNtRavzSipg9ti1YgcJ185baAjLbGt5xlnNYO4egBsjURsPQfQDUcx67ec3OZkgIRqWOD2iRm3v2xa57HAYguPnYZNqszcfcQhmzoDakuK35x0u8GG7h6WZ7HoAn%2BAfUX3m9adW%2B3xZMISQ28kGOqUBgq73FkmQVSsHCHAeThHlIF36vBVsm%2FVBd4T31iZe6uEKwHDewfOlz5uupB3tIudL564R30z%2BsyCmk%2FRVxNou6T6Ff2XbZQC3EmtQVk9LywRuzPbvNpTF7SZXoq5tAxkeyDRsSmHfGyLAW%2F%2FuuSpfIGNF1HG7GuHnu%2B%2FAhqch2voZJmR60fFWVUj%2BRY%2BekxPSXWIc%2BcANnyuozTeYog73CEVYlYjf&X-Amz-Signature=0d69ec8636a4a193341857ebef13b3d526c258076799835eee8dd5c93dff7a1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA7AJSJJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T140457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAy%2BuAy0BREBiSqXcTezwSM5v%2BQCFtimMZWuWLDY2ibyAiEAljBBDZoMh%2FBTVz3HpOcqbEZivebDd2gwsiOJk9zDGBMqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL00fQrTlS%2FGFu0LtSrcA5y5dKtpZwvwKCQWj0Jl1zAawfVv%2B4FxGCc%2BgwARi3H%2BtecF%2BUyE03gXn9GlyoYoZUj2l0EzhmOq1zjO%2FnhFeEv9vxVR%2FYPucvA7P7KeosCEx7EjpPZdLJ0k1DhWZeuopDedjuZHDVXaV1tfllq3zXcGci%2BCbLhRtpswDgHFKKCJG7FbDj2jEGrSDyWa%2FQ8%2Bb93eeF6bZzqnWWU67jk2zT8S%2Faf0T67WCi4CvchBoPM%2FgpQPssgJ8rjDKaUGxKDX%2BHHM5uQ21LTlBEXQnxgWGdi6z%2FUC754HWlxU0ZFhAlgTJH8Kz8ul1AuSEoMRNZHD16we1e1Na92oZCB4dzwxg1OUGnrY%2BkV8c9q26jvmzLS4rM5RG3BPMe20O6jPRuDbA2TCDlXMQ8FLHjgtq2F6Z14oNmmlLokrWUQu%2F2JX0rPkCXj2OdDQo2c1XzdAPnnzWYT2iGWnGhAM4RUFDgf2IPU6F9v%2B5yb8cmcB4fuYBnz5eqJERRNtRavzSipg9ti1YgcJ185baAjLbGt5xlnNYO4egBsjURsPQfQDUcx67ec3OZkgIRqWOD2iRm3v2xa57HAYguPnYZNqszcfcQhmzoDakuK35x0u8GG7h6WZ7HoAn%2BAfUX3m9adW%2B3xZMISQ28kGOqUBgq73FkmQVSsHCHAeThHlIF36vBVsm%2FVBd4T31iZe6uEKwHDewfOlz5uupB3tIudL564R30z%2BsyCmk%2FRVxNou6T6Ff2XbZQC3EmtQVk9LywRuzPbvNpTF7SZXoq5tAxkeyDRsSmHfGyLAW%2F%2FuuSpfIGNF1HG7GuHnu%2B%2FAhqch2voZJmR60fFWVUj%2BRY%2BekxPSXWIc%2BcANnyuozTeYog73CEVYlYjf&X-Amz-Signature=10d754f7adfdaab70bcd4b2e667991f3c7b46eaca2d8cda3f7b74bffa691f282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
