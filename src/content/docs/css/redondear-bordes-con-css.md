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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642VPUZ4Z%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T034311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbXnWcGSpYkx%2BIijXtrW585juxRRXsHIflAU2NeRGWNAiBnC%2BMlIbynR5ZU7VBQGL2OMtCArbWn3eZMI3w9%2FG4IuiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdGoFzOPxF%2Fwv7vCBKtwDCnTve87raknTpcHsSA2fbhHOzElGiFDjy9BzAgExdsCw1M8xIIj15R6JGGcReaTrClWrjdEeJ67q%2BqA%2FACYudeZ4c71S3y9Sb0mb1iIlTPkal%2Bb%2F8znLFGMyTBC1ANo0U%2FlAidHcO%2F3K2Wh5O%2FEhRSsM49%2B%2B%2B%2Fc2OGHcD6%2FccfLa0UG94Gw80UfeaSIag3EsUvx1onHfYVPxJ20i6eSspAFYmqcdPxUX4AD4zt2ozzq3AIV7LHx%2F%2BeQHCZd%2FPzj9tOvKwuNvQwW2DrHvjenVueXBEKxngwaikUH7b1p5Hd5vduWynFmEAEuV7oYhkFiPnBba0LplNjIj%2Fv%2Bv%2F4hVrBzpZhr34osdeEOTpPe3QBHaV9pxzHaOJ8VkS1EyzxEJiiFE27gHYI4%2BNne%2FcOoiUo0b7d4cSMsBO5YHkl9MpZHqXY%2FqZcjyRpHEFgMGeG4jAchnUFw37JDtlU9bHOW2rxIYwmcLVHK5QPD4mEJcbGKGtbTDqH5fqODnDQ2vSoVixZphoXKs8TXSMYMTZ1nRcEEtMqWteecy4aMuy%2FuRZE9zEUHOTHLJMD2SeUIBtqef2IO%2Bs2IXdtBGUczwmWXW0ZGVe1C%2Bub7Hpq70bv2%2FsBBHiXN5Tn3%2BHTo4MDcw7u%2FYyQY6pgGCpGYR9e1b70kpESZwN%2FInbIjMMhK3ZBhH53NOmHUHz23bn%2FNkV%2BADT5Y99XKd%2B5JoSGu7SF9niKVud4rMBsa6J4CQ0eq5l7otwxstb3WqOPx4HmCyqX04f7v%2FugWLL5nVxIVK3LftWYI8Lg6CrjpUxTOMqWx6AAN6Bc5SARaUDPlOYSqrgWTzJObpOqGRBQyF5MjSXCsYVcTJnczwG%2BGKkCmlqVm3&X-Amz-Signature=8938f19bb80a2f36c9a7f42326a1bc65aea92327811f01b9b53a1987fb134e63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642VPUZ4Z%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T034311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbXnWcGSpYkx%2BIijXtrW585juxRRXsHIflAU2NeRGWNAiBnC%2BMlIbynR5ZU7VBQGL2OMtCArbWn3eZMI3w9%2FG4IuiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdGoFzOPxF%2Fwv7vCBKtwDCnTve87raknTpcHsSA2fbhHOzElGiFDjy9BzAgExdsCw1M8xIIj15R6JGGcReaTrClWrjdEeJ67q%2BqA%2FACYudeZ4c71S3y9Sb0mb1iIlTPkal%2Bb%2F8znLFGMyTBC1ANo0U%2FlAidHcO%2F3K2Wh5O%2FEhRSsM49%2B%2B%2B%2Fc2OGHcD6%2FccfLa0UG94Gw80UfeaSIag3EsUvx1onHfYVPxJ20i6eSspAFYmqcdPxUX4AD4zt2ozzq3AIV7LHx%2F%2BeQHCZd%2FPzj9tOvKwuNvQwW2DrHvjenVueXBEKxngwaikUH7b1p5Hd5vduWynFmEAEuV7oYhkFiPnBba0LplNjIj%2Fv%2Bv%2F4hVrBzpZhr34osdeEOTpPe3QBHaV9pxzHaOJ8VkS1EyzxEJiiFE27gHYI4%2BNne%2FcOoiUo0b7d4cSMsBO5YHkl9MpZHqXY%2FqZcjyRpHEFgMGeG4jAchnUFw37JDtlU9bHOW2rxIYwmcLVHK5QPD4mEJcbGKGtbTDqH5fqODnDQ2vSoVixZphoXKs8TXSMYMTZ1nRcEEtMqWteecy4aMuy%2FuRZE9zEUHOTHLJMD2SeUIBtqef2IO%2Bs2IXdtBGUczwmWXW0ZGVe1C%2Bub7Hpq70bv2%2FsBBHiXN5Tn3%2BHTo4MDcw7u%2FYyQY6pgGCpGYR9e1b70kpESZwN%2FInbIjMMhK3ZBhH53NOmHUHz23bn%2FNkV%2BADT5Y99XKd%2B5JoSGu7SF9niKVud4rMBsa6J4CQ0eq5l7otwxstb3WqOPx4HmCyqX04f7v%2FugWLL5nVxIVK3LftWYI8Lg6CrjpUxTOMqWx6AAN6Bc5SARaUDPlOYSqrgWTzJObpOqGRBQyF5MjSXCsYVcTJnczwG%2BGKkCmlqVm3&X-Amz-Signature=0f5ce1b473b2b5d6270cb880d4c45a08e90fa688bb8ab649a0b4c799dcb8a7a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
