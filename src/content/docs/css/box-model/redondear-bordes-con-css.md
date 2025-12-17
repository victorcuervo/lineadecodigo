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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DVPUYFU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFAzDP%2FDxTKO6YnqqoNKDzi3cd0w%2BwRQWGYCt9zZ9W%2BgIgSRnNUPFf%2FZjG8QcgVSizgUVWKAvRMvrSBgXj2R4LjL8q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFdsU98yLKzuw93jCyrcA0nRjXY%2Bq5s6cJTDHDpZTFDfksR3Y%2FDZlBF6QlFM7EUGYuUXnY4g90Ogg5YTnG7Iwz2oBNZt9s%2FAp8Jxd5VpE9guyuDewJx9VSGyaLG1nLgZFZBs4ZFt5Z7kckZ%2BjXoqQlailFCQxUQBO0DTBjfOp36wb0Mof2oB2I1xomyhXOKcqq5d7ZrsJiXVwj6Cga5mXc6fXmy8m20V0A3TEFaXM0mhbPbqwrTbLexqe6kH%2BCXAQnzils6OKYuKLRU58XSt5foRHRNWIAv0yDy4uKsyz7fQJcPnmgPzbM%2BvvdxLIimIhyNHnUDfttTRgN6EMiS4HdBm5Ql%2Bq5suDoaLXZHnUGxTpsHxhyBBH3h8JBsC%2BKAu6%2FRIVCmLMuY6Iwp9ysktqJlUbVIJDCPYqN%2FsjUl2OWLuTXNBGRH2RfaWbygPbYkTQK1SQHk80kCQYzXMjP%2FVBxfo4vGIU0pq7sShvHKj5Yj%2BvQUhZT9LbzJls09sZeKe7H6nrmrgQoCiWEujNbqAP%2B9IeYxonQKnK2teqZfXsp438SxPGPsmK7wSEB1pzuoSuCwVtzoZSEGWEzmCujHltzwuW7m2nOI4QC3J9VGHjTnHuOvNJzGg7ZPDbV9%2FRpCaqj0B5fLlIyxSjhCLMP3QicoGOqUBp7fg2LqGIi258uWjY68GQVapX2FlQTqV3EYRDwDRAKP6UAU3cdoFUO5JPwZOywBQAZ4lCEquGHK1Mepnd6A5MKpPjXLC9HETZHudD3fUYKQllXM2xbDA8XB2xAP19NKwqPwoocj5Q0HI77DUUupwAOpd6vG5kA28qbYRB%2BAnVTjnFj%2BWdHMWrEZYRVt61WBUoQDe6IQsJRSjtZS%2F3qEowcgY9Gyx&X-Amz-Signature=eafc6ec209161e64772f2d11cf4bfc553189c42d55c95b5d54e20f09d9bea3b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DVPUYFU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFAzDP%2FDxTKO6YnqqoNKDzi3cd0w%2BwRQWGYCt9zZ9W%2BgIgSRnNUPFf%2FZjG8QcgVSizgUVWKAvRMvrSBgXj2R4LjL8q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFdsU98yLKzuw93jCyrcA0nRjXY%2Bq5s6cJTDHDpZTFDfksR3Y%2FDZlBF6QlFM7EUGYuUXnY4g90Ogg5YTnG7Iwz2oBNZt9s%2FAp8Jxd5VpE9guyuDewJx9VSGyaLG1nLgZFZBs4ZFt5Z7kckZ%2BjXoqQlailFCQxUQBO0DTBjfOp36wb0Mof2oB2I1xomyhXOKcqq5d7ZrsJiXVwj6Cga5mXc6fXmy8m20V0A3TEFaXM0mhbPbqwrTbLexqe6kH%2BCXAQnzils6OKYuKLRU58XSt5foRHRNWIAv0yDy4uKsyz7fQJcPnmgPzbM%2BvvdxLIimIhyNHnUDfttTRgN6EMiS4HdBm5Ql%2Bq5suDoaLXZHnUGxTpsHxhyBBH3h8JBsC%2BKAu6%2FRIVCmLMuY6Iwp9ysktqJlUbVIJDCPYqN%2FsjUl2OWLuTXNBGRH2RfaWbygPbYkTQK1SQHk80kCQYzXMjP%2FVBxfo4vGIU0pq7sShvHKj5Yj%2BvQUhZT9LbzJls09sZeKe7H6nrmrgQoCiWEujNbqAP%2B9IeYxonQKnK2teqZfXsp438SxPGPsmK7wSEB1pzuoSuCwVtzoZSEGWEzmCujHltzwuW7m2nOI4QC3J9VGHjTnHuOvNJzGg7ZPDbV9%2FRpCaqj0B5fLlIyxSjhCLMP3QicoGOqUBp7fg2LqGIi258uWjY68GQVapX2FlQTqV3EYRDwDRAKP6UAU3cdoFUO5JPwZOywBQAZ4lCEquGHK1Mepnd6A5MKpPjXLC9HETZHudD3fUYKQllXM2xbDA8XB2xAP19NKwqPwoocj5Q0HI77DUUupwAOpd6vG5kA28qbYRB%2BAnVTjnFj%2BWdHMWrEZYRVt61WBUoQDe6IQsJRSjtZS%2F3qEowcgY9Gyx&X-Amz-Signature=856c1f7bd40482b838859697dd6f5d320167a1f0444d7732444d80a7a82cd9bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
