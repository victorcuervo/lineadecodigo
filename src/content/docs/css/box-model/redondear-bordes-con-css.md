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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VXKGR5H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFPKo4c0WLKjF1ba2lF1CNSF7Nu6J0Z8YEM7KD5K1I9AiBXPAr4%2Bqq%2BM2dC7%2Fb0XIu%2BgXUhreQjdAl%2BgzEK1Flp0yr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMcExu0lbThM2KLfv2KtwDIu01OFY%2FPD%2B4WKuwGHsXm%2FY1sqGlmGyjag4srO0ioxzXuP0bc7qjgAXp1E1Pb%2BELSxSMXFnogJ7QIzviaHMJUdUxSv3jsWHibCCn%2FyU1iZ19LpzRPZC1Jtwo5itwTeB7FWDZ1W0rfmHbJvIgZeR1KRgZlITTeAbXqgozyxYdUPo8Tyq9LgOb0KCMVL%2BzKu0TN90xD%2Fv%2F9hpAAE9BJLS9sphk7ERbULpC%2BfM0woCeu0xV1z8yfADysr6h3%2Bau0Fc6CztLt%2FqFmuquLjXl2IhCYAJ0aZaRP0ISag%2FQJ92KDrarp%2Fzwzljh75y9tsfzP%2F2n3jRSgy1xV3B%2B3b3nbmPYDnGITpRtDMHtcTB0t7lFG8RNWGLBRVpYcQOFiurKjT7Ubk13Liw7KHLbnkrbLbi439iwKUI62ewkTkvF6O526OuuEd%2FGQTEwi4QAws4irl4R3gngx2BkxkCXt6LcUU9ktAwjosorUy7WnsA2ZmQMFlIVmnQi8%2FfQHCEvc7O%2BvOA7Qvoj2QQDkXfRid%2FqRo4w9rumaG9T45%2FnK1bJWahSuG6GpqQ9PjrmtTvC1wdiI1iMI298XOA1tgdB7kUjLTA4m21CX7%2FwIIEzgjBxs2WabYjwnA1BxKd97UwQ3J0wjriJygY6pgFxYRGgqbt6ShyFE3WIVyrwUtHW4HciaAGy4RTrijtVzoN9%2BOzckusqJXRhJVOimeacwdM%2BYH0oi0Xvyc1nfUUAqrDLGjzpc33BdviseOOZH4OK5kMy5MaUgAab%2BkzkQRzcG01%2BWANm1LLD9bu4aWSGPsacx3YsmVZK%2FrpOeDj6bAoGt9bK8m6mDRu5C3xSC8hetMUf68TgfHkHU5xzYQXP6OyevNDy&X-Amz-Signature=a50c44a7e4070efe6b37ebdca188990263105ab70db880282897e50e40bd6f86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VXKGR5H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFPKo4c0WLKjF1ba2lF1CNSF7Nu6J0Z8YEM7KD5K1I9AiBXPAr4%2Bqq%2BM2dC7%2Fb0XIu%2BgXUhreQjdAl%2BgzEK1Flp0yr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMcExu0lbThM2KLfv2KtwDIu01OFY%2FPD%2B4WKuwGHsXm%2FY1sqGlmGyjag4srO0ioxzXuP0bc7qjgAXp1E1Pb%2BELSxSMXFnogJ7QIzviaHMJUdUxSv3jsWHibCCn%2FyU1iZ19LpzRPZC1Jtwo5itwTeB7FWDZ1W0rfmHbJvIgZeR1KRgZlITTeAbXqgozyxYdUPo8Tyq9LgOb0KCMVL%2BzKu0TN90xD%2Fv%2F9hpAAE9BJLS9sphk7ERbULpC%2BfM0woCeu0xV1z8yfADysr6h3%2Bau0Fc6CztLt%2FqFmuquLjXl2IhCYAJ0aZaRP0ISag%2FQJ92KDrarp%2Fzwzljh75y9tsfzP%2F2n3jRSgy1xV3B%2B3b3nbmPYDnGITpRtDMHtcTB0t7lFG8RNWGLBRVpYcQOFiurKjT7Ubk13Liw7KHLbnkrbLbi439iwKUI62ewkTkvF6O526OuuEd%2FGQTEwi4QAws4irl4R3gngx2BkxkCXt6LcUU9ktAwjosorUy7WnsA2ZmQMFlIVmnQi8%2FfQHCEvc7O%2BvOA7Qvoj2QQDkXfRid%2FqRo4w9rumaG9T45%2FnK1bJWahSuG6GpqQ9PjrmtTvC1wdiI1iMI298XOA1tgdB7kUjLTA4m21CX7%2FwIIEzgjBxs2WabYjwnA1BxKd97UwQ3J0wjriJygY6pgFxYRGgqbt6ShyFE3WIVyrwUtHW4HciaAGy4RTrijtVzoN9%2BOzckusqJXRhJVOimeacwdM%2BYH0oi0Xvyc1nfUUAqrDLGjzpc33BdviseOOZH4OK5kMy5MaUgAab%2BkzkQRzcG01%2BWANm1LLD9bu4aWSGPsacx3YsmVZK%2FrpOeDj6bAoGt9bK8m6mDRu5C3xSC8hetMUf68TgfHkHU5xzYQXP6OyevNDy&X-Amz-Signature=20a77756c05516421333aa56d7fc02e638f44e5086c9b5184e4364b98fa79560&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
