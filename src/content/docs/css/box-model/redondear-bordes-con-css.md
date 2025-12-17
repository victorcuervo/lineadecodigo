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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676ON4QTF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBB%2BdbB6VuYzy958cAL3DQJDUzst5EYybpjikuO78nKKAiBDIq43Pdwi%2BMgdnKo2i1d8Jsda2RHZy%2F9agVvqmavZCyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMDGG7ic%2FcZei6NPeIKtwDkIcDlT1rI4TCfm2mrPeuHiivkn9jGT50WcImWxRUk%2BTzy25nmYR0zyrgJooJRlgs%2B5UNVt4WL%2Fiv9Kwo7iV6ataxUKo0B0BQuMHDDAozWZPuF0otNGOG2aYV%2FL0%2BokH%2BWF0P8PN8c723YvQufWhxYn5rBaDY%2B8sG3zH5qtgGAhHyee1H4u%2BdOZ8HgwTslBIuwckJAHRqECNgNuF87J3qN9hEljJFo6knZ6PjYDjvlH%2F2i5CalyEorU965lI6dQUIdKKodIwDaDWCPmGF3NRd%2B5zW5oF2%2BmnRfLuEq5vprg%2BLnDO5gEz5pPqbgGCm%2B1dZOjSojAcGldkvDo%2Bhxl32DipdXADF1EGwN9yd9vMPvhVO6j81%2BZH8RaL3py%2FeTt0C0FOwmRUTzBZg4u8PuBMBR7BBc2w5RikGv32zBa%2Fnz%2FGgTU3iczbcrtz2E4OQ5MfqIwkwUPhS6zvGM45dy7G7rzBhQHRMvibB2JpQ9sEAhrMDLdCk1MKhi9lTqzNBkMP5nPJLRKJ6uAkeOfslDuPTVJ7iQuoLamCIOgfopMvNpfXT8XP2frU%2F3vnTyXfN8uj2OrDEK7j1mTDGG3ZznPS6qjlAUmPshhHBrckYO972kxugPcf3WobxF%2BGuTg4wnd%2BHygY6pgEn5uCF0vxh60m%2Bs%2FUAlftIxArICzbR84vMzE72ifaYFzTQ2VO74t6rfTL50iLcS%2Fj1XGpqaagW4UueWugCiakHz7Zxn928YSqSM%2BXbGlD2xRQGWDv6Chh4i8JWP41mVmIzUnAWxpJbl8B4HEskM1EmMv660I2Qc2NMOB70zopn4k34UDP5uAqRodukz%2FaPCxe8gl%2Bocqh2nU10mhMRT6P6sAMzMfFD&X-Amz-Signature=c6797f36c9ca074eec70a8e5e07324244ad2ce8883155649b5806f0c02dd5f41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676ON4QTF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBB%2BdbB6VuYzy958cAL3DQJDUzst5EYybpjikuO78nKKAiBDIq43Pdwi%2BMgdnKo2i1d8Jsda2RHZy%2F9agVvqmavZCyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMDGG7ic%2FcZei6NPeIKtwDkIcDlT1rI4TCfm2mrPeuHiivkn9jGT50WcImWxRUk%2BTzy25nmYR0zyrgJooJRlgs%2B5UNVt4WL%2Fiv9Kwo7iV6ataxUKo0B0BQuMHDDAozWZPuF0otNGOG2aYV%2FL0%2BokH%2BWF0P8PN8c723YvQufWhxYn5rBaDY%2B8sG3zH5qtgGAhHyee1H4u%2BdOZ8HgwTslBIuwckJAHRqECNgNuF87J3qN9hEljJFo6knZ6PjYDjvlH%2F2i5CalyEorU965lI6dQUIdKKodIwDaDWCPmGF3NRd%2B5zW5oF2%2BmnRfLuEq5vprg%2BLnDO5gEz5pPqbgGCm%2B1dZOjSojAcGldkvDo%2Bhxl32DipdXADF1EGwN9yd9vMPvhVO6j81%2BZH8RaL3py%2FeTt0C0FOwmRUTzBZg4u8PuBMBR7BBc2w5RikGv32zBa%2Fnz%2FGgTU3iczbcrtz2E4OQ5MfqIwkwUPhS6zvGM45dy7G7rzBhQHRMvibB2JpQ9sEAhrMDLdCk1MKhi9lTqzNBkMP5nPJLRKJ6uAkeOfslDuPTVJ7iQuoLamCIOgfopMvNpfXT8XP2frU%2F3vnTyXfN8uj2OrDEK7j1mTDGG3ZznPS6qjlAUmPshhHBrckYO972kxugPcf3WobxF%2BGuTg4wnd%2BHygY6pgEn5uCF0vxh60m%2Bs%2FUAlftIxArICzbR84vMzE72ifaYFzTQ2VO74t6rfTL50iLcS%2Fj1XGpqaagW4UueWugCiakHz7Zxn928YSqSM%2BXbGlD2xRQGWDv6Chh4i8JWP41mVmIzUnAWxpJbl8B4HEskM1EmMv660I2Qc2NMOB70zopn4k34UDP5uAqRodukz%2FaPCxe8gl%2Bocqh2nU10mhMRT6P6sAMzMfFD&X-Amz-Signature=ba5f3cce008eb2b36bef03ad34d6af558d98128cc776f7ead04c9a96a7535709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
