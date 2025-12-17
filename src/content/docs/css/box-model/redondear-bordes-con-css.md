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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPO2BW2W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwx3QKYHEgYuYVUJr3Z21%2BuThSgqAuMVXyWZuU%2BfKviAiBkG32sXElbqCFNT9AEHktth7Sciq7ZnKnGrBRv9ZhUFir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMpsOjHAqNIuGaXk4dKtwDYk7z7hzIr3wD7rGCZspFMGiU9ErPJ7LZdu1YaljJv1CLFbUbIQibinqGZg62zkEYx5P1B73HIJcqlT0p7PuHkPvTjxfah4bmVRMBnng4pptGAsUi0t%2BLdykVm9mTqYs5Te7JJhmfAsotVxvs1JAm6wdJQmTAK7aFiEZjc4hNwVpJ4kC2Kuv4%2BzdEi1otiDIwyUvDxKX%2Bq0CxEF7%2B%2FVoaFdk6KmPmK%2FwtcvtKlicbCWvWceenPLY4ZeUKIPyrDay8u8T74Wy7UBcau2L3PbGzdgRiqQ2diJrFLSj5yjIwE20rfkvaho09N8O0ckVWnBAVNX1%2B9arcw7sHBtiXmb%2BNNFRm5i8xQLNVABqn37YUiFh5%2B1xV4fEc%2FubefgfDSWAClTf1HD0IrrcQpS1U9yX7vd1%2BYSOEDpo1T0Hh3W6GRNBbJxEEdTbrQvcZBbABPkFio8%2BrO3Jg8DMnJppDpQNsAkMC6A%2BpBYxbEL3btZ9F6Iz5GuFA%2FvsjPMErY0jZeX17AfyqczOpGttEWaIrtn3bHYVPk9I60r8l%2BF%2BSru%2BSQ%2FGwc651DqSyK8sXo7gyOAT9toow8baI7tlTuc3XHD9Wkz0EX9HBiPR99KOJgv0oUFRg%2F9MOAdHtt21QB5MwnsaKygY6pgFuNQxGNsoVfgHtzdLdeKLhWqw8iMXJFpWYU21hHLpG5BGDysk23h8JXLpaEkyzvXwOSsWDjlb25x45%2BxXaFG9Zf72JSjYgmqDaS2Vyt60JJgDwaF97g8ZDHOzeB6yTnEtXIbVdFnJtbbLlixnOF0Z3tyMYRt0aUHvPs%2FBw3FO4e%2BTIcOhAoBaRIVY8kRJXrxDygZqsqYpEbavKT8a9qpvgZzCxLU2Q&X-Amz-Signature=fc14c64911c7b249d7ef4a35130610487e6e242313c5d783966808fa02b52a0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPO2BW2W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwx3QKYHEgYuYVUJr3Z21%2BuThSgqAuMVXyWZuU%2BfKviAiBkG32sXElbqCFNT9AEHktth7Sciq7ZnKnGrBRv9ZhUFir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMpsOjHAqNIuGaXk4dKtwDYk7z7hzIr3wD7rGCZspFMGiU9ErPJ7LZdu1YaljJv1CLFbUbIQibinqGZg62zkEYx5P1B73HIJcqlT0p7PuHkPvTjxfah4bmVRMBnng4pptGAsUi0t%2BLdykVm9mTqYs5Te7JJhmfAsotVxvs1JAm6wdJQmTAK7aFiEZjc4hNwVpJ4kC2Kuv4%2BzdEi1otiDIwyUvDxKX%2Bq0CxEF7%2B%2FVoaFdk6KmPmK%2FwtcvtKlicbCWvWceenPLY4ZeUKIPyrDay8u8T74Wy7UBcau2L3PbGzdgRiqQ2diJrFLSj5yjIwE20rfkvaho09N8O0ckVWnBAVNX1%2B9arcw7sHBtiXmb%2BNNFRm5i8xQLNVABqn37YUiFh5%2B1xV4fEc%2FubefgfDSWAClTf1HD0IrrcQpS1U9yX7vd1%2BYSOEDpo1T0Hh3W6GRNBbJxEEdTbrQvcZBbABPkFio8%2BrO3Jg8DMnJppDpQNsAkMC6A%2BpBYxbEL3btZ9F6Iz5GuFA%2FvsjPMErY0jZeX17AfyqczOpGttEWaIrtn3bHYVPk9I60r8l%2BF%2BSru%2BSQ%2FGwc651DqSyK8sXo7gyOAT9toow8baI7tlTuc3XHD9Wkz0EX9HBiPR99KOJgv0oUFRg%2F9MOAdHtt21QB5MwnsaKygY6pgFuNQxGNsoVfgHtzdLdeKLhWqw8iMXJFpWYU21hHLpG5BGDysk23h8JXLpaEkyzvXwOSsWDjlb25x45%2BxXaFG9Zf72JSjYgmqDaS2Vyt60JJgDwaF97g8ZDHOzeB6yTnEtXIbVdFnJtbbLlixnOF0Z3tyMYRt0aUHvPs%2FBw3FO4e%2BTIcOhAoBaRIVY8kRJXrxDygZqsqYpEbavKT8a9qpvgZzCxLU2Q&X-Amz-Signature=f00d64a5b1ec8a747b245956d9ca25e42b5687a1c32d359b16d59ed927af05f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
