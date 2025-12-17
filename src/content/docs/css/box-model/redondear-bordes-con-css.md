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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAHF2XTZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnrVYGzH1r%2FeZxNbT5IWGmy0uqQZBD7xQQ%2BZrIPwL1IQIhAO7B2gGjzG291QQdTEphwpSOkaDtYCNdCK83c4pBHCRwKv8DCHMQABoMNjM3NDIzMTgzODA1Igy4%2BNuNks1XVHRv5dMq3AMs81tQmzF9k4eaA5n5NvWheqcYWpi5AmqOfoWobBGJr0xXBuJLTnOjYuHYud21WMocWkCtTiMEKZTnM3w4EQoK0c0YzlW4fZ6flAUZn%2FY3bd%2FTrT9UP%2FtA6IQhKqnUgpuATXRYvqypA9uhM2%2F1DF3maL8q%2FZrMVsm2THyTt64Yp3oxyqe2vw7SiaZX3IubNkZATQ8Gqy%2Ba%2FRioL29iJ%2BBZ%2F%2F%2BmJ2HEJMiJO82n6%2F%2BJrVlnBSwBQdCkou1ufQD%2FMokkD7yXF%2BYlYzoSWRhchzIlH3%2FFF7iSuNOluqLLfhCbFZZJTI1KEC3xSUitnRWg%2B8Iea%2Bzdprz7pnHiC1lqvhFKXqevqMOh1XKcVCZ1Qfg4Qb2eXLHiLnr0KuO8SY9DpEFMbZ%2FmR3GutuM44J9LGR3rdeOALoKx385ca2z3SX7dvpvxmQyFX%2FpnoII3BWgQpZmyOd3fQmBQSk5kgU5pCW3RgqEhcGykErj%2BPKfnD8NAqAfv6cjrB89867ZZgDh8FlObkaqn8OPktnnDL4pMyKyvH2WBvwg9YnFml0hxrEo0gCC8j%2FqmMGzrv%2B%2FQiSp2XXWDYjNO7oNxAonwQC9uA5aIkTBVmh%2BxIx9nWqx7uv8xuT9yeo8u8rjAkRcstTD3l4jKBjqkAWfNGotT0UJug475JTvWEumDWvqDdbVImV3whT1suvMMaXLfLO9ONIy5dy0pX8ujB9Pm%2FU9O%2FLggAA7K1s4EhoEeBl1yk91WhmZaUvMS4dXGo3IpbzWVAiKKIIOTf6pypSC1wbpt8JDznjkMjEQiTJbTBCXtDgXoZ0vormtRqO0TlbBHJpFkxD03bnkAOc1r0uXheTcpnKK%2Be05q8i%2FYFqbmnpio&X-Amz-Signature=1e46cbad76572808af7b6f14a68c128faae7e713db7d6aea5806321533debce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAHF2XTZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnrVYGzH1r%2FeZxNbT5IWGmy0uqQZBD7xQQ%2BZrIPwL1IQIhAO7B2gGjzG291QQdTEphwpSOkaDtYCNdCK83c4pBHCRwKv8DCHMQABoMNjM3NDIzMTgzODA1Igy4%2BNuNks1XVHRv5dMq3AMs81tQmzF9k4eaA5n5NvWheqcYWpi5AmqOfoWobBGJr0xXBuJLTnOjYuHYud21WMocWkCtTiMEKZTnM3w4EQoK0c0YzlW4fZ6flAUZn%2FY3bd%2FTrT9UP%2FtA6IQhKqnUgpuATXRYvqypA9uhM2%2F1DF3maL8q%2FZrMVsm2THyTt64Yp3oxyqe2vw7SiaZX3IubNkZATQ8Gqy%2Ba%2FRioL29iJ%2BBZ%2F%2F%2BmJ2HEJMiJO82n6%2F%2BJrVlnBSwBQdCkou1ufQD%2FMokkD7yXF%2BYlYzoSWRhchzIlH3%2FFF7iSuNOluqLLfhCbFZZJTI1KEC3xSUitnRWg%2B8Iea%2Bzdprz7pnHiC1lqvhFKXqevqMOh1XKcVCZ1Qfg4Qb2eXLHiLnr0KuO8SY9DpEFMbZ%2FmR3GutuM44J9LGR3rdeOALoKx385ca2z3SX7dvpvxmQyFX%2FpnoII3BWgQpZmyOd3fQmBQSk5kgU5pCW3RgqEhcGykErj%2BPKfnD8NAqAfv6cjrB89867ZZgDh8FlObkaqn8OPktnnDL4pMyKyvH2WBvwg9YnFml0hxrEo0gCC8j%2FqmMGzrv%2B%2FQiSp2XXWDYjNO7oNxAonwQC9uA5aIkTBVmh%2BxIx9nWqx7uv8xuT9yeo8u8rjAkRcstTD3l4jKBjqkAWfNGotT0UJug475JTvWEumDWvqDdbVImV3whT1suvMMaXLfLO9ONIy5dy0pX8ujB9Pm%2FU9O%2FLggAA7K1s4EhoEeBl1yk91WhmZaUvMS4dXGo3IpbzWVAiKKIIOTf6pypSC1wbpt8JDznjkMjEQiTJbTBCXtDgXoZ0vormtRqO0TlbBHJpFkxD03bnkAOc1r0uXheTcpnKK%2Be05q8i%2FYFqbmnpio&X-Amz-Signature=d7d624ddd97a4097b696f8bc11e0f1b8976b6242bed477ebbad3ce7b81d82d1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
