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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYYU36J%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T150939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxiASHFpNnlUekOEglUrd0O9ejPt6sGlCTWQGDMszi2wIhAPq2PcEZkF%2FnthWuoFuqWtCFq03JAu7Zz0HDPzS05sx1KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylwOlfvJ8IIIr1SYMq3ANOUBr0FwVATIwMaBSU3x2HpHxT%2FpWq1h1IhKoMHLwhtsoIEWz3eT4ZvtlAxG6Xvs0lQnDDMTvueV9neXzeQB7%2BjehEhG%2ByD0IfFicUYB5W3fYehIEtw64TispFBwHhg7%2BtwwBE2h2RuIWLjlEoEhje6OoihZIDizi%2BCKEOt38RQLpDLkbfjxDjFvdPt7UcV2cX17Lp9F9LhV4bxgpz%2BLrerudcvQ%2FrUGC9EY2P0G1%2FWGADK9fXW43IXTMdP2j16fmMqgCTfVmM7zKBJ%2FvEs1c7YqYN4GMe6kSxRnx8TU9CawLU182Ln%2FaFzAcjnbpeUHQiUDEpIRDGDbeX0rjTp5UWSy6LIEIg65WvqfXQb%2FJOkHnJW2FRgw%2BfAmB8tdh9tXSt6ar%2F1HiVCC5mEtWj4bLCgx8U7sleE0X4%2B9A174f3SW2gPlMmBmQAdUfjnKie%2BVb3bgGO8OAC2yog7GR6zgezfCkELx9JDEptIc1fGiz6L1vUTpay6ZaKv1GSYiyQfvkPsEwkpqSnbP6kD8fHJo%2B3i56%2F5K7iSS3QoN361jh3jj8iT0WcgwhON5ra7HHldl4jQou5Sonz9HnzVelWGEzjbxUhZusujhqlYyi%2FPHPxaM%2B2WHUQ5WjLnOdkiDCWwtvJBjqkAdDjbIxmPaApq9P2Zl%2BHib3fT3UvbitDdmRwTVfl1kK8JkWWCjTxrB2vfxZBGlt2jE3jfEoR9WtjQMi1FoRYeF8uagaBcuUFqUIHpOfhiXsUW1Z9aqiB%2FZKUd9uFjQcau5fabZU3QlCcUD%2BccN0ddwHPlMGx2E%2FC7%2Fh5Zg0QKMp7HWwGFPyCQLs2ChT4cI%2ByKsVKxiLrfM%2BK7IEMqNwPfNXdwtH3&X-Amz-Signature=dfcd2e0559c03f6078fb2d137fa90dc95398576fd36c8dce2151d5edd1a1cae5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYYU36J%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T150939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxiASHFpNnlUekOEglUrd0O9ejPt6sGlCTWQGDMszi2wIhAPq2PcEZkF%2FnthWuoFuqWtCFq03JAu7Zz0HDPzS05sx1KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylwOlfvJ8IIIr1SYMq3ANOUBr0FwVATIwMaBSU3x2HpHxT%2FpWq1h1IhKoMHLwhtsoIEWz3eT4ZvtlAxG6Xvs0lQnDDMTvueV9neXzeQB7%2BjehEhG%2ByD0IfFicUYB5W3fYehIEtw64TispFBwHhg7%2BtwwBE2h2RuIWLjlEoEhje6OoihZIDizi%2BCKEOt38RQLpDLkbfjxDjFvdPt7UcV2cX17Lp9F9LhV4bxgpz%2BLrerudcvQ%2FrUGC9EY2P0G1%2FWGADK9fXW43IXTMdP2j16fmMqgCTfVmM7zKBJ%2FvEs1c7YqYN4GMe6kSxRnx8TU9CawLU182Ln%2FaFzAcjnbpeUHQiUDEpIRDGDbeX0rjTp5UWSy6LIEIg65WvqfXQb%2FJOkHnJW2FRgw%2BfAmB8tdh9tXSt6ar%2F1HiVCC5mEtWj4bLCgx8U7sleE0X4%2B9A174f3SW2gPlMmBmQAdUfjnKie%2BVb3bgGO8OAC2yog7GR6zgezfCkELx9JDEptIc1fGiz6L1vUTpay6ZaKv1GSYiyQfvkPsEwkpqSnbP6kD8fHJo%2B3i56%2F5K7iSS3QoN361jh3jj8iT0WcgwhON5ra7HHldl4jQou5Sonz9HnzVelWGEzjbxUhZusujhqlYyi%2FPHPxaM%2B2WHUQ5WjLnOdkiDCWwtvJBjqkAdDjbIxmPaApq9P2Zl%2BHib3fT3UvbitDdmRwTVfl1kK8JkWWCjTxrB2vfxZBGlt2jE3jfEoR9WtjQMi1FoRYeF8uagaBcuUFqUIHpOfhiXsUW1Z9aqiB%2FZKUd9uFjQcau5fabZU3QlCcUD%2BccN0ddwHPlMGx2E%2FC7%2Fh5Zg0QKMp7HWwGFPyCQLs2ChT4cI%2ByKsVKxiLrfM%2BK7IEMqNwPfNXdwtH3&X-Amz-Signature=162e2ac5c8924357b7da6e9ed5618e1571b88f5588228ae151b9fb3d65f004df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
