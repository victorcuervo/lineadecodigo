---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGQTOZ47%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCD9BIOnLxmuzmcknayhqd5bjxPFrexPj52CEegkteq5QIhAMlmTtSgsR5KpggRjyTQQPP06TJo95%2F92Qk1YplxIuaTKv8DCDgQABoMNjM3NDIzMTgzODA1IgyoiAvtrbe%2FmOML5P8q3AMeOBd3SS9aWIX7EJUIJl8GIK4jsCBhpWe8jt9mal2ZRDuoNdLRaaQy78SaQvTJi5NH0jDAqndEQ1RrpIA1GVZRx4r%2FMioa7KlCSj0aGty6I%2BPfcyjYow%2Bv0Z6hXKmS89p6bEMe6M9NeZM7zAfzxYyGBspmZ%2FRsNEdYUb4d4Z6KgX43JxpX4%2FNoXHzCwMT6Njxnb2AOn6D%2Bo1nhHn8sttPVNNjcQuoL6amDnoFVWcxbCGT%2BAq3HLCiGdpT%2BeCkXlLHEoGQVAKLEMn9hSq%2BC2j71GHlodzfveOe4ThIZ3%2Fwo6KvGf8twdhOoNjF7bsxlmdLaixiLCBr%2F5Q3ArYvtGB9izULSgW6mfoke%2B%2FW6hdTYfEXdt%2Fq6jTxnEyxNp%2FngKl2cJ58hFPJk4MOFFq4%2B665S%2FHU81ys7l66jWkEKC6BCoxtrJEGUcS0d2yGUyj5NBB3pq6YzPveiv95MPzOKBQRyY5ZxAD5ho2EVf6%2F2HY1r0RxIZPwuQABBvgrdkJXhg6g2pOzQjtky6LVIw%2BORGqZ5o1R%2BXl82Cvw%2B1IAMqxXoyPoObMvwf4X006ppP%2BxeU2W%2BY7Jwc1w0fxCq6o48pcdEzqqO%2FJgtKuCbE3dZQhXHpNR60TVSoMlqWUV%2FKjCS%2BMLJBjqkAd9NgpZFGkOvnjyP5lXoHd7EFuaz724IqqMmuu5bXlzpdi1%2BPw2B6DRP2YxyEl%2BoOLUDkG0XNCJ5b899zO99aieoa1vHmgowCbKQy0d%2FMmYPj%2Fl0354mlxKWaaw8mgiVe5etHjrblFP1cBPcQWm2AjL2jN9qaQnsOlaZ9fm2SIlTlKoRl0sHlgUff19sOGDOVy4KVgV2NuvUsxUQG23UnjN2Pitp&X-Amz-Signature=e8e2b2468ddd0d9034fae5b6d059720cfca7277bca70a6a9929d4cbb796168c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGQTOZ47%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCD9BIOnLxmuzmcknayhqd5bjxPFrexPj52CEegkteq5QIhAMlmTtSgsR5KpggRjyTQQPP06TJo95%2F92Qk1YplxIuaTKv8DCDgQABoMNjM3NDIzMTgzODA1IgyoiAvtrbe%2FmOML5P8q3AMeOBd3SS9aWIX7EJUIJl8GIK4jsCBhpWe8jt9mal2ZRDuoNdLRaaQy78SaQvTJi5NH0jDAqndEQ1RrpIA1GVZRx4r%2FMioa7KlCSj0aGty6I%2BPfcyjYow%2Bv0Z6hXKmS89p6bEMe6M9NeZM7zAfzxYyGBspmZ%2FRsNEdYUb4d4Z6KgX43JxpX4%2FNoXHzCwMT6Njxnb2AOn6D%2Bo1nhHn8sttPVNNjcQuoL6amDnoFVWcxbCGT%2BAq3HLCiGdpT%2BeCkXlLHEoGQVAKLEMn9hSq%2BC2j71GHlodzfveOe4ThIZ3%2Fwo6KvGf8twdhOoNjF7bsxlmdLaixiLCBr%2F5Q3ArYvtGB9izULSgW6mfoke%2B%2FW6hdTYfEXdt%2Fq6jTxnEyxNp%2FngKl2cJ58hFPJk4MOFFq4%2B665S%2FHU81ys7l66jWkEKC6BCoxtrJEGUcS0d2yGUyj5NBB3pq6YzPveiv95MPzOKBQRyY5ZxAD5ho2EVf6%2F2HY1r0RxIZPwuQABBvgrdkJXhg6g2pOzQjtky6LVIw%2BORGqZ5o1R%2BXl82Cvw%2B1IAMqxXoyPoObMvwf4X006ppP%2BxeU2W%2BY7Jwc1w0fxCq6o48pcdEzqqO%2FJgtKuCbE3dZQhXHpNR60TVSoMlqWUV%2FKjCS%2BMLJBjqkAd9NgpZFGkOvnjyP5lXoHd7EFuaz724IqqMmuu5bXlzpdi1%2BPw2B6DRP2YxyEl%2BoOLUDkG0XNCJ5b899zO99aieoa1vHmgowCbKQy0d%2FMmYPj%2Fl0354mlxKWaaw8mgiVe5etHjrblFP1cBPcQWm2AjL2jN9qaQnsOlaZ9fm2SIlTlKoRl0sHlgUff19sOGDOVy4KVgV2NuvUsxUQG23UnjN2Pitp&X-Amz-Signature=4a17d88209ea1a454eb91d5a644878abe13fc0986e00a9a5e5ded2ee1a90e6ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
