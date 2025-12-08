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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667WGY44F%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnHe1B4tHk6OSzIdq5YlLgVVOOOZMfCEryixYBZ2hutAIgDx6yQfIOTkVMucbgAJo9tTS072ohfieh%2B6t7iEM%2FO%2FcqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPDgTAFwg4OpBKt1yrcA9SbyGG4RqeSsZCA%2BvM8iU8nkg%2F7499H7gCbpJwy7POBVryFzsdCGrbaJaWa3IEXL24O1ZsxlBUoB%2FyZQH2eljoOTMPjE3uW2ZTea%2B3kpfJHaGuQHc%2BFbzWrtdHOLTacw93bc3aT4XGbAHW%2BnECC50%2BwjVxsdCtiGo8kvSohcXhjrV%2BE2ZM%2B55rDNo3rdeWCSgGGqpM2hekcZw3JSzBUbXcMlvQUUZfFOh1vxP2LzimxSZCyxG9bY%2BAS008UTHxM%2Bqa73uMLcKtMpAUrS6q9eplLV3A7xszkJNPphi1rOPwYdgatHDeYvUv7CX0bZ4IPgjU7cexH4fgbZgIiSHAFTbaxB29uVzzUi2VNMvHuMQz3hm8tE4svDD%2F9K4E1jDLe5OGaQwAFIUGGgC1rHj%2Fp0seSPgjPhvT%2B0B5T9UYPf0BkpyP9rwPrpIGXOYViF8wJ4PiectQlNYhB%2BpD%2FZxbnfIRyC3jSTubJYIg8OdKgqV6nH1enPqhhf3VvJLXHEiDIz1OjogUgyTMCAnI4KHOidMfXAzOIHm2ZrORraHfnIS%2BOYsKxogG%2FQMXNwxUEr3ooLcz3Ri%2FCx122XtIV4kdg7GjM5zSUjofaxxuPuVGXY1Ugk%2B9plsZ%2BhiZjnfbNMKPv2MkGOqUBWUAH5pfYmohYlRhnHU36a1Phs%2F8%2BALVBBMndgZtMtIM0TtaInFuLTGn86L2kxLr1uLu23mdhWHL0oBL0b1QVjQxJ6wiV6R9P8SsddTsKHhU7LubxCCpYC3Yr7V5vVruNejk212cO9c8aon83HceI6B6JrvHvkSZ6yPvG5sOI7bz3sCRV2iQQDs0SFDCzxgDND%2BOfDs6LT1%2FDs%2BHmRHJKKrGx4SyA&X-Amz-Signature=cc9e1f65e71350e5d91a9357c441b3053a0215f30a2661ef293faaaf9651a356&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667WGY44F%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnHe1B4tHk6OSzIdq5YlLgVVOOOZMfCEryixYBZ2hutAIgDx6yQfIOTkVMucbgAJo9tTS072ohfieh%2B6t7iEM%2FO%2FcqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPDgTAFwg4OpBKt1yrcA9SbyGG4RqeSsZCA%2BvM8iU8nkg%2F7499H7gCbpJwy7POBVryFzsdCGrbaJaWa3IEXL24O1ZsxlBUoB%2FyZQH2eljoOTMPjE3uW2ZTea%2B3kpfJHaGuQHc%2BFbzWrtdHOLTacw93bc3aT4XGbAHW%2BnECC50%2BwjVxsdCtiGo8kvSohcXhjrV%2BE2ZM%2B55rDNo3rdeWCSgGGqpM2hekcZw3JSzBUbXcMlvQUUZfFOh1vxP2LzimxSZCyxG9bY%2BAS008UTHxM%2Bqa73uMLcKtMpAUrS6q9eplLV3A7xszkJNPphi1rOPwYdgatHDeYvUv7CX0bZ4IPgjU7cexH4fgbZgIiSHAFTbaxB29uVzzUi2VNMvHuMQz3hm8tE4svDD%2F9K4E1jDLe5OGaQwAFIUGGgC1rHj%2Fp0seSPgjPhvT%2B0B5T9UYPf0BkpyP9rwPrpIGXOYViF8wJ4PiectQlNYhB%2BpD%2FZxbnfIRyC3jSTubJYIg8OdKgqV6nH1enPqhhf3VvJLXHEiDIz1OjogUgyTMCAnI4KHOidMfXAzOIHm2ZrORraHfnIS%2BOYsKxogG%2FQMXNwxUEr3ooLcz3Ri%2FCx122XtIV4kdg7GjM5zSUjofaxxuPuVGXY1Ugk%2B9plsZ%2BhiZjnfbNMKPv2MkGOqUBWUAH5pfYmohYlRhnHU36a1Phs%2F8%2BALVBBMndgZtMtIM0TtaInFuLTGn86L2kxLr1uLu23mdhWHL0oBL0b1QVjQxJ6wiV6R9P8SsddTsKHhU7LubxCCpYC3Yr7V5vVruNejk212cO9c8aon83HceI6B6JrvHvkSZ6yPvG5sOI7bz3sCRV2iQQDs0SFDCzxgDND%2BOfDs6LT1%2FDs%2BHmRHJKKrGx4SyA&X-Amz-Signature=305883b5c72d248300d60868ef7979af389090205e34f4470a220cafec728c8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
