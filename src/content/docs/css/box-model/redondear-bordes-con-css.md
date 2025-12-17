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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KTMJVKU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T000954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfSb2zu%2BUABpAn%2FZzImaItAXid3Mw9z6R9XkqA6gY8kAiAb3CNwD2v7gMAXmMNcmPjzo7N0IvtF5%2Fhz7qCZDqyWOir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMJbVkvGKRQpZZ0cpZKtwDBoe2dgt9CW1CMVFcowgma44pUDfOKxfZOWyOVsH3nlgUMpCYA9Um6bt9uoZXABbdaxOrS6QL%2Fg0R8ya1Jj0XjiONE7VsVR3ETCrBTtmD1gwBE7Pebe8SsStpuCgK5p6SEiHZP%2BDNU1Mv7P1Bfd2VwU4taa7TEuMtNJU9K6CF2NUs21%2FUWwCr8531J%2BIkHxSepZkM5QiMBEqZbF%2BRvxyz3zswO2GzqvQNPkq0c4PfGx4x3bTamMT5SaBknCdzEfSC%2Bv3jX6LpO6wYW35HGKcr5SZKSuB%2F%2BfQoXRazVSBxoWNKOPc%2FIrxavApwnkYCIFhtnDwxQnJBRLOVf15MClIcv3OMy9SLCkMdtCxmrXk5WQplalOhBfPxzeXErfMT4zz%2FwqEXkcL8pNxXNfLE%2FJio1uwWPdNk0qTMpvl2pasglJYNZt4HIKrDmS9QZPrSDKl0rB5WoxGH1rnlUqDlMIxpO8pWpDP45FLJPFGT7qQ8sn2TB81Kl8zqxzSBKJqZdunQTjPtcBbdnRavj82mcgg3FrJBhqvjXbB5x4IS999E2cO9Sl8kY1jFkW5oNGCmLHqqzuaOGGAjlQ4Pxh9GL9uT%2FRN64qdUg2vXHes%2F%2BWsJpIxun3FZHAKjjHl%2B9X4wnt%2BHygY6pgFEoP2qXEs9dlQhdovxYUShXldtRSMHo%2ByZ0ncqCzADAbuIY0CP2Sk5AWCvBuPgW5skz9JozC9kO7vhrVkj3Zi5EXdhOV4x%2BjKzEmsGolNmXkN11enqyHKkFCfX3xAa7fkFxpIvJFCzFY2ZazB4dXqq7bKNHdx9%2BdqFyPkV%2BjPIKhviGmHvmLh%2FmtRV%2BQ7VLebVxQUHcS7swHfSSzYBHlEA3c1C5%2Bef&X-Amz-Signature=720a5026eebb24cba8e2a609daecda7c2a5c7d53f54001c712b9398abb83e862&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KTMJVKU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T000954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfSb2zu%2BUABpAn%2FZzImaItAXid3Mw9z6R9XkqA6gY8kAiAb3CNwD2v7gMAXmMNcmPjzo7N0IvtF5%2Fhz7qCZDqyWOir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMJbVkvGKRQpZZ0cpZKtwDBoe2dgt9CW1CMVFcowgma44pUDfOKxfZOWyOVsH3nlgUMpCYA9Um6bt9uoZXABbdaxOrS6QL%2Fg0R8ya1Jj0XjiONE7VsVR3ETCrBTtmD1gwBE7Pebe8SsStpuCgK5p6SEiHZP%2BDNU1Mv7P1Bfd2VwU4taa7TEuMtNJU9K6CF2NUs21%2FUWwCr8531J%2BIkHxSepZkM5QiMBEqZbF%2BRvxyz3zswO2GzqvQNPkq0c4PfGx4x3bTamMT5SaBknCdzEfSC%2Bv3jX6LpO6wYW35HGKcr5SZKSuB%2F%2BfQoXRazVSBxoWNKOPc%2FIrxavApwnkYCIFhtnDwxQnJBRLOVf15MClIcv3OMy9SLCkMdtCxmrXk5WQplalOhBfPxzeXErfMT4zz%2FwqEXkcL8pNxXNfLE%2FJio1uwWPdNk0qTMpvl2pasglJYNZt4HIKrDmS9QZPrSDKl0rB5WoxGH1rnlUqDlMIxpO8pWpDP45FLJPFGT7qQ8sn2TB81Kl8zqxzSBKJqZdunQTjPtcBbdnRavj82mcgg3FrJBhqvjXbB5x4IS999E2cO9Sl8kY1jFkW5oNGCmLHqqzuaOGGAjlQ4Pxh9GL9uT%2FRN64qdUg2vXHes%2F%2BWsJpIxun3FZHAKjjHl%2B9X4wnt%2BHygY6pgFEoP2qXEs9dlQhdovxYUShXldtRSMHo%2ByZ0ncqCzADAbuIY0CP2Sk5AWCvBuPgW5skz9JozC9kO7vhrVkj3Zi5EXdhOV4x%2BjKzEmsGolNmXkN11enqyHKkFCfX3xAa7fkFxpIvJFCzFY2ZazB4dXqq7bKNHdx9%2BdqFyPkV%2BjPIKhviGmHvmLh%2FmtRV%2BQ7VLebVxQUHcS7swHfSSzYBHlEA3c1C5%2Bef&X-Amz-Signature=51f388034f3497cee435d65a1b61c64a0dea5a6db102c5e24b554bdbe4b3a36a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
