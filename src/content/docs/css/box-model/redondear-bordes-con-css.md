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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ4X2T52%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa6oz3qwRG0s4jVOoCVlsHsfAFcUerG%2BzHcc5NinagugIhAOZDkHeV1B%2Bz8Y8NeTIf5ThpWLpeLc99C7axV7Wnx5HtKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7F0mGtoAamI40Fesq3AMJbZVTxYuRBI6fqmj1%2BF%2FBeYCFDYqItt9tteg8IsDSHVej9QO7lWPamCAUy%2F1yxqkNzXtjvHVYXblXLPtfWnSfH2WGMRxtoUn3FwNPxABd0ePYDcohDTZWTzyTsmijjAyx%2Fxy%2F6uaxjwN2vml6bPG%2BvLwba766DYktEKVMZQrum1%2Fz9PZMjUgT0JBGT6FftjOKy9zWcqGJMZqcsexjmQIpzn12ZqvXk2zwgnnPc2OrNbk2luIEYDuYnmoIbnbAN2dUp%2FlVfETfb36wcMJQEGx7%2BJR4OI5OzhN25lzuIBEsspfxwrfirrsmm7T%2Fx3zINKUI5mFD6v00dcT0FuogdQyGnvMtjy3HtbTC9CrkXKxUMHwNPNBwFh7P6Mw58UG0EMWZK9V5f%2BzTu0ZMe%2FhFzr9o5rUsBGLyADYwScKn4%2BOrr7jXIIMyOmlAsEY%2FAPeJRF%2Fx8C0XBGfc6Wz4GoJf2kEx7KsbYeG4uow%2FfeC1KimBPYmSCQjy6q%2FoDNpWoPakkuplV%2F2llT9EwuBtJAe2FhKJZKXK1vpxcto8XkFXdReWJj4aII2p4aeJJi26nn7zeWvgAjndzpgk6QYwcypwRcJajsTWdGvVoEpbPUIHk4b%2Bya7Ja68KEXW2Vzn35TDKnovKBjqkAYMej1geCESldma4vNNWgzffyAGTMTR%2BT7n5tA7p55lrmFqsokz7qdnl6GCA2gXLfrgORg6ThnPzgZt5kMDiscai%2BPfHsR%2FWbnpmC2LsQgSn7aeW7AtUvR6d1E4G5umen5jFwRp4xc68jEXxTwWOMVLC2PCCxgfpAo0pXmyG4KgsVBtQCOLpRn5eWvi0sQxhOY4Sm90SICeGJQyTGKNhDFe8xpxB&X-Amz-Signature=ff5718d3f56020c75dfafa946b643589aeb89f5754e491adf861b3ad5b09b12e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ4X2T52%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa6oz3qwRG0s4jVOoCVlsHsfAFcUerG%2BzHcc5NinagugIhAOZDkHeV1B%2Bz8Y8NeTIf5ThpWLpeLc99C7axV7Wnx5HtKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7F0mGtoAamI40Fesq3AMJbZVTxYuRBI6fqmj1%2BF%2FBeYCFDYqItt9tteg8IsDSHVej9QO7lWPamCAUy%2F1yxqkNzXtjvHVYXblXLPtfWnSfH2WGMRxtoUn3FwNPxABd0ePYDcohDTZWTzyTsmijjAyx%2Fxy%2F6uaxjwN2vml6bPG%2BvLwba766DYktEKVMZQrum1%2Fz9PZMjUgT0JBGT6FftjOKy9zWcqGJMZqcsexjmQIpzn12ZqvXk2zwgnnPc2OrNbk2luIEYDuYnmoIbnbAN2dUp%2FlVfETfb36wcMJQEGx7%2BJR4OI5OzhN25lzuIBEsspfxwrfirrsmm7T%2Fx3zINKUI5mFD6v00dcT0FuogdQyGnvMtjy3HtbTC9CrkXKxUMHwNPNBwFh7P6Mw58UG0EMWZK9V5f%2BzTu0ZMe%2FhFzr9o5rUsBGLyADYwScKn4%2BOrr7jXIIMyOmlAsEY%2FAPeJRF%2Fx8C0XBGfc6Wz4GoJf2kEx7KsbYeG4uow%2FfeC1KimBPYmSCQjy6q%2FoDNpWoPakkuplV%2F2llT9EwuBtJAe2FhKJZKXK1vpxcto8XkFXdReWJj4aII2p4aeJJi26nn7zeWvgAjndzpgk6QYwcypwRcJajsTWdGvVoEpbPUIHk4b%2Bya7Ja68KEXW2Vzn35TDKnovKBjqkAYMej1geCESldma4vNNWgzffyAGTMTR%2BT7n5tA7p55lrmFqsokz7qdnl6GCA2gXLfrgORg6ThnPzgZt5kMDiscai%2BPfHsR%2FWbnpmC2LsQgSn7aeW7AtUvR6d1E4G5umen5jFwRp4xc68jEXxTwWOMVLC2PCCxgfpAo0pXmyG4KgsVBtQCOLpRn5eWvi0sQxhOY4Sm90SICeGJQyTGKNhDFe8xpxB&X-Amz-Signature=d3be34943bed38843ba39cef3f53f36cf00b0fb733b1b1f0b0912fd341621cc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
