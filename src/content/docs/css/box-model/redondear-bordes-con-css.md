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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQTGK5VC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRmWLqE4XKQh%2Bkt6%2BMvKn5PapmedlRfFGMQnC41c9KXAiEAll89VfLdjF4U85YF7e5qhJ%2FBRz7ugf4M5s0UO5qa%2BSIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDGtrkjmbwd0%2BxvWYkircAxAxDw5E7kZyCJlPdrRHeGqMXAHhQjgSHLYb%2F%2B%2FdO1C2eXx3N26TUa4iBrFlXmbX28jJoLhadlYQ8kyt0jECY0BEId3Wl6u2V3VgUXkAUwn0Rwfqt8ry%2BaE%2BkxyTA%2Bkdn1CbFg6dKhVdGMOemtn2PFUqEOSKeJBVKh8qswn%2B5XO%2BHd%2B4mV5FW32akPWAEwnIfus3ie%2BJ8q9QVG88YFwodib2pV4p1tmz9gu06%2BOeoTtpfiLfWOxVgFFE3w5CDUM6Wg27wtfTvjzrDNoKdegDlMC1tVEgzZ37fje5H35Mrf8bDUKwUNfgJwA9pBzMPDVvRjctdXIla2kkV%2BhOksq9qzkWtT0yVGZJBgd3B9ogjUcNdzFYqRmjsLDF6SFCOo%2FKFWB5l1pZcinozJ4DEq0coho8aGAaRD5Zm1vV1vBPPfxc6ErDYMf84cENRcug7%2BbyA%2BUpZeIj3ill%2B4m2Rop0xHRoDX1H5mDP5CZ%2B9w9M2fTac8fRSaGM1t5YmFRe97WH1UBIZYFLLfbBSK6bfO6gnfmdBCz5LK8jkqUGaROdX%2FXanwf11ZwtsJPINa0y0GPYnMA%2FIQgHEVLvmhjbz8pO0a2edouf7hv6v1J9YtPhZl7A3gHrzsAHel4VcG14MMGPisoGOqUBUkrE92l9YGIteS%2FwM7KIhenKQTgdZ61RBUIX9JCAVKvwFTK3kC4J3vYRMnpuvnFqtJQdRuf1VKnl7nzSDZA6cOniWxM1xDpMO6VXGGl4L%2FzVKZyXFbmDZ60SgqJOsr3Ld8E4cHJWgpGTYV6DYHrUBs6DvZccNRHOSYuiqsGPX2dHKpAm6ov6D2n%2BWxQn%2Fd5RqqLYaFygv0Olt166%2BinPImq3izwn&X-Amz-Signature=c801f5ff794ef8e3748e88af5e0a711b3edddd0eba170f62117296dac9b0627d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQTGK5VC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRmWLqE4XKQh%2Bkt6%2BMvKn5PapmedlRfFGMQnC41c9KXAiEAll89VfLdjF4U85YF7e5qhJ%2FBRz7ugf4M5s0UO5qa%2BSIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDGtrkjmbwd0%2BxvWYkircAxAxDw5E7kZyCJlPdrRHeGqMXAHhQjgSHLYb%2F%2B%2FdO1C2eXx3N26TUa4iBrFlXmbX28jJoLhadlYQ8kyt0jECY0BEId3Wl6u2V3VgUXkAUwn0Rwfqt8ry%2BaE%2BkxyTA%2Bkdn1CbFg6dKhVdGMOemtn2PFUqEOSKeJBVKh8qswn%2B5XO%2BHd%2B4mV5FW32akPWAEwnIfus3ie%2BJ8q9QVG88YFwodib2pV4p1tmz9gu06%2BOeoTtpfiLfWOxVgFFE3w5CDUM6Wg27wtfTvjzrDNoKdegDlMC1tVEgzZ37fje5H35Mrf8bDUKwUNfgJwA9pBzMPDVvRjctdXIla2kkV%2BhOksq9qzkWtT0yVGZJBgd3B9ogjUcNdzFYqRmjsLDF6SFCOo%2FKFWB5l1pZcinozJ4DEq0coho8aGAaRD5Zm1vV1vBPPfxc6ErDYMf84cENRcug7%2BbyA%2BUpZeIj3ill%2B4m2Rop0xHRoDX1H5mDP5CZ%2B9w9M2fTac8fRSaGM1t5YmFRe97WH1UBIZYFLLfbBSK6bfO6gnfmdBCz5LK8jkqUGaROdX%2FXanwf11ZwtsJPINa0y0GPYnMA%2FIQgHEVLvmhjbz8pO0a2edouf7hv6v1J9YtPhZl7A3gHrzsAHel4VcG14MMGPisoGOqUBUkrE92l9YGIteS%2FwM7KIhenKQTgdZ61RBUIX9JCAVKvwFTK3kC4J3vYRMnpuvnFqtJQdRuf1VKnl7nzSDZA6cOniWxM1xDpMO6VXGGl4L%2FzVKZyXFbmDZ60SgqJOsr3Ld8E4cHJWgpGTYV6DYHrUBs6DvZccNRHOSYuiqsGPX2dHKpAm6ov6D2n%2BWxQn%2Fd5RqqLYaFygv0Olt166%2BinPImq3izwn&X-Amz-Signature=fa4bfee8c60ff7e69e5e7d6079c9643ccb9c673d9ab2739d38e4e4156a886b01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
