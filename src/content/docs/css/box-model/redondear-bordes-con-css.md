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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HMBAEZW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaR%2BE%2BaKEoUiyDkrrCUtzXYY9yFVw0l6UfZZm2MeM%2FjAiAnnV0wm0vH1LKegqjpNO0GOxOsyHcfyWy2H3qHfY9%2BoSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMT%2BG4SCgpyfL10tBRKtwDgey4uGEx%2FG8MDaRWoY8lkhJ1ghkLOkJvUHDEA9YWu31LUXwhqmAG3wqWiu7uQ6QLtDU0ey1%2BzefT%2BpfQ0uV9KmUyZPcGwtZtsgRbM0em1B6HQRGIYg5jzAqDV4czl8GVVz6xXxTI0rFMQlDSUQDm4tFT18mw6dVOQiwNUYE9U6zglQrr2A%2FdhwHuFhrRi58bwp%2B3bUW9gnoObTOiMt1l6oykML8VvFIYJ6OVCjDHXEiRcF0%2BGOTE7Lu9ZFkgFMwxFTCvhAjnMHNZdjnMjnzZXn8U5aDgoOnRZ%2BggNg0er%2B5s9NyDGYc7qsww8EYgcLfDHtFCgXv386l6SHy%2BvKFm6xW1EcaDoDXITpyi82T%2FmgJiO8qs1p7htGISoqsAFC09g0wCyZhPZaRpkASB%2B2psFVITMRFUzP%2Fdidw54Yqcjtgj1dnbzFZJPRbA5%2BPVM7ygAWMJ%2FSSzpcM3qSRNwy7UkGv5HVwvOUp2OiC%2FlpARubjw9F22VGFbtKePzJpMCzl%2FGviqLXZxZVN4NdUr%2BRNNGpD9%2F8zZuK6V%2F%2B2A5i5twfKERZtDw0GpasZ82TYK3k1zO0tFywBdcrB2McHcsH00P5MopPqqs26hys4EbzFhzXtlYo0aLlHpicH9kMgw9p2JygY6pgHyMDw6bAOoT%2BUubci3l5pOMZsNq%2F1wqwihNQwOJ1gYufx%2B7d8AISyMyNnVCfoek8AWqzawpMJvSI0X%2Fm1d95GUPs2ZA2Yfo1O6HsbLwNmpIr4gYZ3OT3QhblLSKhY6aXhaeJpfCH5gPPWJTnVtiBLKhQoaVkPjOjAul8QcNxZhyNG%2Fxubz1l3%2FeN26NLCkG6EGZqIYFJXLiBCDj4lCG42fDP6FO4Ni&X-Amz-Signature=e09d5c6ab1c1c295ff9b82e72dbd49a82853c281bbd77e1fce904cd67c1f77ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HMBAEZW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaR%2BE%2BaKEoUiyDkrrCUtzXYY9yFVw0l6UfZZm2MeM%2FjAiAnnV0wm0vH1LKegqjpNO0GOxOsyHcfyWy2H3qHfY9%2BoSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMT%2BG4SCgpyfL10tBRKtwDgey4uGEx%2FG8MDaRWoY8lkhJ1ghkLOkJvUHDEA9YWu31LUXwhqmAG3wqWiu7uQ6QLtDU0ey1%2BzefT%2BpfQ0uV9KmUyZPcGwtZtsgRbM0em1B6HQRGIYg5jzAqDV4czl8GVVz6xXxTI0rFMQlDSUQDm4tFT18mw6dVOQiwNUYE9U6zglQrr2A%2FdhwHuFhrRi58bwp%2B3bUW9gnoObTOiMt1l6oykML8VvFIYJ6OVCjDHXEiRcF0%2BGOTE7Lu9ZFkgFMwxFTCvhAjnMHNZdjnMjnzZXn8U5aDgoOnRZ%2BggNg0er%2B5s9NyDGYc7qsww8EYgcLfDHtFCgXv386l6SHy%2BvKFm6xW1EcaDoDXITpyi82T%2FmgJiO8qs1p7htGISoqsAFC09g0wCyZhPZaRpkASB%2B2psFVITMRFUzP%2Fdidw54Yqcjtgj1dnbzFZJPRbA5%2BPVM7ygAWMJ%2FSSzpcM3qSRNwy7UkGv5HVwvOUp2OiC%2FlpARubjw9F22VGFbtKePzJpMCzl%2FGviqLXZxZVN4NdUr%2BRNNGpD9%2F8zZuK6V%2F%2B2A5i5twfKERZtDw0GpasZ82TYK3k1zO0tFywBdcrB2McHcsH00P5MopPqqs26hys4EbzFhzXtlYo0aLlHpicH9kMgw9p2JygY6pgHyMDw6bAOoT%2BUubci3l5pOMZsNq%2F1wqwihNQwOJ1gYufx%2B7d8AISyMyNnVCfoek8AWqzawpMJvSI0X%2Fm1d95GUPs2ZA2Yfo1O6HsbLwNmpIr4gYZ3OT3QhblLSKhY6aXhaeJpfCH5gPPWJTnVtiBLKhQoaVkPjOjAul8QcNxZhyNG%2Fxubz1l3%2FeN26NLCkG6EGZqIYFJXLiBCDj4lCG42fDP6FO4Ni&X-Amz-Signature=13eb9fd3916156de484f874ebade931364ee604bc26cdec06614b185cdc70cff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
