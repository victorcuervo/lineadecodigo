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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTRGK4SQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNwClrqnAWr8jiD1N4mjj5qpX5FT%2BfHQYCDnlJwV4%2B4QIgPU3Xx5L401CaPim4TjkidOC4HUh3IiZW70bjIi3Y%2BSsq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDHrgiGvhiWceurAgdCrcA68UwXnzLJQU%2F5gxCN8Rlru5MN4f7rMreaHv55hfu2m%2BLqXmz6IFMdIH%2B%2B9wNMoc1%2F6yxgcyHqAVaAD4Jw70z6z3qODpsiTupHj%2FH3Wqu7lgMtlamtfAn%2BjLtH71xXmra6vP0sGDhdzhU3fprGm82HQn%2FU8XbgJe7urFX687hn8QhEjnuJhPbfgSIln%2FLuJvqp2WDpKYsK%2B2t6NotQKogfIn%2FjmSybT%2FxZmee20VKGoNmgQMDoG%2FSLTWBSm4A8Wk75%2Fcnk1DPcCUNRxibEqRboVLIxi7lEAzUg2PHY8bqA456%2FmJa1m50H2iAKxejeyI3ztBjCfMNEPCxgFYTUKRHUHD9An8Ljd%2FMmW94VdmmGm%2F7opVNXcmVKnDCqxsMwcwZcKwUQ3x1rnAqBgAnn1FMKIK%2BGTEjUkCWpkrDCdAejI8xT%2Bn9bUv1UL1zDfcJNqozpOLYSqIsWgDEZThfvrZzlILtDDqChm5dAsItkOlGOQ1qJgDSfHh9nMzDqUvaRqau6wmh3UnJZBJspQ6Fzd5UtAOXdojxnwgEdtBLUg7j2NRfCnRRhRoQviJuZx1oSAdfWzO3A2zgyuSheorvLUFbP8ennHkFhbHmVEjthYEdoPt02jnZ91wKeYRQRWOMLzDzskGOqUBtwAWnckbhjWrKUfo%2FnZYIZtUmHZk45EvuL50vK5F1UJtWqV0ceonVL8B5FvBvrNo56CtPXoNf4NL4IDF0wx4TlMwUUTW4ndgktEsrrm4RuiEZMLZi%2FJXYjrQyv1UYyLBuUgGxROEYMA0y4iQhI%2B%2FKYUTuEJGKb86g07zpHTl%2BvuDefx%2FQsBS%2FqZoWie6Dd8xgoc%2BvZqZiZKVI8D5aOQf6SaFZlL1&X-Amz-Signature=0c9466eba1b1b3b5107bea1b426d4bf61cbcd0bccccff91962eb1a4f08a7f034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTRGK4SQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNwClrqnAWr8jiD1N4mjj5qpX5FT%2BfHQYCDnlJwV4%2B4QIgPU3Xx5L401CaPim4TjkidOC4HUh3IiZW70bjIi3Y%2BSsq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDHrgiGvhiWceurAgdCrcA68UwXnzLJQU%2F5gxCN8Rlru5MN4f7rMreaHv55hfu2m%2BLqXmz6IFMdIH%2B%2B9wNMoc1%2F6yxgcyHqAVaAD4Jw70z6z3qODpsiTupHj%2FH3Wqu7lgMtlamtfAn%2BjLtH71xXmra6vP0sGDhdzhU3fprGm82HQn%2FU8XbgJe7urFX687hn8QhEjnuJhPbfgSIln%2FLuJvqp2WDpKYsK%2B2t6NotQKogfIn%2FjmSybT%2FxZmee20VKGoNmgQMDoG%2FSLTWBSm4A8Wk75%2Fcnk1DPcCUNRxibEqRboVLIxi7lEAzUg2PHY8bqA456%2FmJa1m50H2iAKxejeyI3ztBjCfMNEPCxgFYTUKRHUHD9An8Ljd%2FMmW94VdmmGm%2F7opVNXcmVKnDCqxsMwcwZcKwUQ3x1rnAqBgAnn1FMKIK%2BGTEjUkCWpkrDCdAejI8xT%2Bn9bUv1UL1zDfcJNqozpOLYSqIsWgDEZThfvrZzlILtDDqChm5dAsItkOlGOQ1qJgDSfHh9nMzDqUvaRqau6wmh3UnJZBJspQ6Fzd5UtAOXdojxnwgEdtBLUg7j2NRfCnRRhRoQviJuZx1oSAdfWzO3A2zgyuSheorvLUFbP8ennHkFhbHmVEjthYEdoPt02jnZ91wKeYRQRWOMLzDzskGOqUBtwAWnckbhjWrKUfo%2FnZYIZtUmHZk45EvuL50vK5F1UJtWqV0ceonVL8B5FvBvrNo56CtPXoNf4NL4IDF0wx4TlMwUUTW4ndgktEsrrm4RuiEZMLZi%2FJXYjrQyv1UYyLBuUgGxROEYMA0y4iQhI%2B%2FKYUTuEJGKb86g07zpHTl%2BvuDefx%2FQsBS%2FqZoWie6Dd8xgoc%2BvZqZiZKVI8D5aOQf6SaFZlL1&X-Amz-Signature=81de2aee863afe792376aef4111ea824db614bf186505b82204e6c9126175683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
