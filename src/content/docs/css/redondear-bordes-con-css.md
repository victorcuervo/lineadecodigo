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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI5WZRX6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T180955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtHs7tu6dHmwgmAxfSln%2B6354W1wUBh6S78xdKVHeixAiEAndgXbzxydVAyry64hi3yZwxhjMJ%2BSDrTmzx05d%2BmeP4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDBVSdsqg9FCwP07DiCrcA5RRMN5Hr0Nf1XUUqKD3asck0WSwUz4AAtBxv68PZo5vTc7kVzvgBkHXf4fW1CjunDCQTbfADZ7v9FvrHrzzoes4CZFe4WvG1MihRsgdqE5CyMo1QD4QHoN24zx3HYgbzHBtI3W2ja3nraacwvazo%2Fmf9mgR%2BlcAx7QEcbHiZEqtRFWPgdeqpzNivcGOJeA3pQjElsqt8xNpt91wU%2FnUISWim84qDFjzkwOGwItXb3cCm6Gkz53J6FcbtnhmJceVy8N3kbgQlVBRLcDHe%2F5YanGJGl7%2B7FPAdaU55aJlXEVxCwxmF7obaqHTDKBERDjpPcgTBXwhHWcS4i%2FCklS22SfHcgv63%2FeuRXZ%2Fn2TRMC%2BYJC7Niqpq%2BrtH88ivJWNQ640saQHv3WUcbMl1KBuvHlt%2B6eE3liVhD6psWFkCW2hidGaD7gHHmvWpBr1uzZ8mgZbWb98YPBAku%2FKeZHs8VVr%2B7nUvQ6ka4XSAla6B7hy0YR7q15mNY%2BsxYgvJ0QzQ6UvPjnQW05T3k1xLi2qeIVBcnlW4mggtR7yJfiHntE4UovT%2FE5f00YT9E%2B5TaHH%2F4UiQEmsvH9kU4lDf56DphaorIG5FpSlHmG%2Ffw5iPp0YhmJuBgD%2FiOuOAVz43MID5y8kGOqUB6dVq3O96lscqTZnbYELuFm0xejKW2Q%2BbasHXXNejXxQQCPFS4pz9e6PdE%2FTT43%2FBduAxYpX6wAj2Xc1%2Fj8ceK7g3WgDdgcZ8sz8JlYf8x%2BYyQhD7jZ%2BJYNxubjs8fkfV8T%2BAGAoG9ll%2BrEQ0htze2Xtx%2FUObBfD9GYB0hEq2%2FWGMnOwE6y9xRXiKwR0QkIivX5vV3BjM2gfyuBCdjoS0Gmwyd9Ut&X-Amz-Signature=da0eb4494a10c7639f43853a001d7ceb029c3f71a1df46641e2f430a7b53e8f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI5WZRX6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T180955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtHs7tu6dHmwgmAxfSln%2B6354W1wUBh6S78xdKVHeixAiEAndgXbzxydVAyry64hi3yZwxhjMJ%2BSDrTmzx05d%2BmeP4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDBVSdsqg9FCwP07DiCrcA5RRMN5Hr0Nf1XUUqKD3asck0WSwUz4AAtBxv68PZo5vTc7kVzvgBkHXf4fW1CjunDCQTbfADZ7v9FvrHrzzoes4CZFe4WvG1MihRsgdqE5CyMo1QD4QHoN24zx3HYgbzHBtI3W2ja3nraacwvazo%2Fmf9mgR%2BlcAx7QEcbHiZEqtRFWPgdeqpzNivcGOJeA3pQjElsqt8xNpt91wU%2FnUISWim84qDFjzkwOGwItXb3cCm6Gkz53J6FcbtnhmJceVy8N3kbgQlVBRLcDHe%2F5YanGJGl7%2B7FPAdaU55aJlXEVxCwxmF7obaqHTDKBERDjpPcgTBXwhHWcS4i%2FCklS22SfHcgv63%2FeuRXZ%2Fn2TRMC%2BYJC7Niqpq%2BrtH88ivJWNQ640saQHv3WUcbMl1KBuvHlt%2B6eE3liVhD6psWFkCW2hidGaD7gHHmvWpBr1uzZ8mgZbWb98YPBAku%2FKeZHs8VVr%2B7nUvQ6ka4XSAla6B7hy0YR7q15mNY%2BsxYgvJ0QzQ6UvPjnQW05T3k1xLi2qeIVBcnlW4mggtR7yJfiHntE4UovT%2FE5f00YT9E%2B5TaHH%2F4UiQEmsvH9kU4lDf56DphaorIG5FpSlHmG%2Ffw5iPp0YhmJuBgD%2FiOuOAVz43MID5y8kGOqUB6dVq3O96lscqTZnbYELuFm0xejKW2Q%2BbasHXXNejXxQQCPFS4pz9e6PdE%2FTT43%2FBduAxYpX6wAj2Xc1%2Fj8ceK7g3WgDdgcZ8sz8JlYf8x%2BYyQhD7jZ%2BJYNxubjs8fkfV8T%2BAGAoG9ll%2BrEQ0htze2Xtx%2FUObBfD9GYB0hEq2%2FWGMnOwE6y9xRXiKwR0QkIivX5vV3BjM2gfyuBCdjoS0Gmwyd9Ut&X-Amz-Signature=08d3a476b067da671e349bcea21e80a995492a802b4d0479f42d5f12c0bd79e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
