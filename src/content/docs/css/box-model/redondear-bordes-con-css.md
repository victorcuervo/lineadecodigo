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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIP36L3N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCc2J4f3FOVUBHuKaX5jn2RJSf4rqr413YbzK5s2PLQAIgMSGi%2FyEXAmZkCm8UxWgg7j9zq8eVQcwHkTwhEhIEYmQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDGmeeUdfQ3fACE5q%2BCrcAz4C30NXAoSOB1wqgeVsekjd1E8p7wmq%2BYRPJa6WocmrMQ%2FgzFYkBoJuKYNnL1L9Y8UCrpV6b4fjyBE0iY9qV%2BlaYwPSkmjhnpxyuy4tLNhczUZVFbWuzi8rUjU9SWMQAo%2BCh9KXfAfrEiTPgX7fI0aHRDfXssjHr13hVfocCVBWDs2pPVz1FeUVUAuOgujR7rTrIGv9moykCShMrzuRf78d2p0otxagvqXoO7WuURFImjv6mN6%2FIJdb5Cn2vwFN%2BGmoYtineR%2By1dWAJmmJE5S8R563pnixRzLul96fELmg%2FcAW70RI9uToDL8xaq5vk9ah9p1BAUeNQ0FJK2V8x1p2uZ2SPdyQIuz6VRfyzPgxA%2BANj%2B0%2Fx0I27f%2FGRlKAAbkbr276xk%2B5h89tLbmsLoFzg6t7JGmfmM9FPrhj3LnXQR5Jlc%2BHG7b8lQZktsTZGU4n7b%2FQVenhnjF%2BTsqbQ%2BMBHRsgnoJuNMZlZgZtqr894By7HWnDmctoi0GC4EtBNGCL8QuWlTrW6NpVkoAwSFv9ycebSBwDQkT7CtYMqSrKnRmEfHal8%2FC%2FPNV89j1c1nt80JL%2BoYkVQEd8JtyvYMwLzgmArRAvZOGu6YbUkDfqm6enRWeoM5MfmktoMPCWiMoGOqUBgz5vYU0wlglElbnyIJQPMOYI4E9Gjr2PWE8L7csQ2G4g1XgcDdPO%2B2TusMmILBezgYaBElFH44QOqgIdSqK%2Fq4a5vSpsizn3sOT0yIkJhJfkDYJBiEL1D0A%2FH8ghz7TwHPduEob4ZJvfBKylxArJh2dq3Fhu5uDsVlIbRGQrQBQkz2aYQ4VEWAvZoF8k99IatDoWbO%2Fy4iaUpyBWwxdw5Df4gtSV&X-Amz-Signature=5aa733737d59c50bfb4a75a20273012aa0215b38441916e2c954644b5f5356b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIP36L3N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCc2J4f3FOVUBHuKaX5jn2RJSf4rqr413YbzK5s2PLQAIgMSGi%2FyEXAmZkCm8UxWgg7j9zq8eVQcwHkTwhEhIEYmQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDGmeeUdfQ3fACE5q%2BCrcAz4C30NXAoSOB1wqgeVsekjd1E8p7wmq%2BYRPJa6WocmrMQ%2FgzFYkBoJuKYNnL1L9Y8UCrpV6b4fjyBE0iY9qV%2BlaYwPSkmjhnpxyuy4tLNhczUZVFbWuzi8rUjU9SWMQAo%2BCh9KXfAfrEiTPgX7fI0aHRDfXssjHr13hVfocCVBWDs2pPVz1FeUVUAuOgujR7rTrIGv9moykCShMrzuRf78d2p0otxagvqXoO7WuURFImjv6mN6%2FIJdb5Cn2vwFN%2BGmoYtineR%2By1dWAJmmJE5S8R563pnixRzLul96fELmg%2FcAW70RI9uToDL8xaq5vk9ah9p1BAUeNQ0FJK2V8x1p2uZ2SPdyQIuz6VRfyzPgxA%2BANj%2B0%2Fx0I27f%2FGRlKAAbkbr276xk%2B5h89tLbmsLoFzg6t7JGmfmM9FPrhj3LnXQR5Jlc%2BHG7b8lQZktsTZGU4n7b%2FQVenhnjF%2BTsqbQ%2BMBHRsgnoJuNMZlZgZtqr894By7HWnDmctoi0GC4EtBNGCL8QuWlTrW6NpVkoAwSFv9ycebSBwDQkT7CtYMqSrKnRmEfHal8%2FC%2FPNV89j1c1nt80JL%2BoYkVQEd8JtyvYMwLzgmArRAvZOGu6YbUkDfqm6enRWeoM5MfmktoMPCWiMoGOqUBgz5vYU0wlglElbnyIJQPMOYI4E9Gjr2PWE8L7csQ2G4g1XgcDdPO%2B2TusMmILBezgYaBElFH44QOqgIdSqK%2Fq4a5vSpsizn3sOT0yIkJhJfkDYJBiEL1D0A%2FH8ghz7TwHPduEob4ZJvfBKylxArJh2dq3Fhu5uDsVlIbRGQrQBQkz2aYQ4VEWAvZoF8k99IatDoWbO%2Fy4iaUpyBWwxdw5Df4gtSV&X-Amz-Signature=207769ed68586e6850a5ba1b68e6abfa90b5dde547594951a941d9eca503a0c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
