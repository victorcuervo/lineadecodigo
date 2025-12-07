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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR353RK7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjpjvfz2JyfjJxriXyrwFJMhLZrUf17zznMQ4MMhO3rAiEAibF8NyCG%2BO7EpXg8iLn%2BLY2gAK5VV9MwdztJh8iuYJkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMf0nGprbFogT0Eu2SrcA8NsVPAODFNNVddJ57gKKvKLugT17OLJFnYM%2BxSLuJ%2FwrzBbjBNBuaJYjk12n9uK8fFdVoLOq59LNASo3Ch5W9Wsb%2BgSL3U4R61WV%2Fv6WTs5oOTjZOutmo2%2B%2BLynORTlNqjGRuuGwzzRNHxvXKkIfY1QVzsxyf7XAOyymTB%2BrU7HcJHqM3wsYbVsmRiXLAEq256VVA1I0CV1Jz8DGcdivooVCJGJsGeDKXnjpbxsLlBMqRT3PFX6gvnn5oA51AztMhSL6szQxxJlUSIgirVA76%2BSC1YTf%2FhlUOXzirY8oQ5yGw5fv7dauwzfJSLZ8FdPXl9gppo1ZUUBN2zgi7kD4niM8J5wxsPqwjgrDo9NCQWPkFTK%2FILYcX2eRQPS%2FwMDKl3NpdMlOYpO1qE%2FilcmGP91k2JG8nOGqJ8uvYIkbYkXjk0iQ6BaOK56tA%2BeNusOIhQNZPfE1qpX94NH6bydRSVraNcYLOoJSGL5SFOEPHzJNfxrX80jX5xozQWM8QxDAJmigDNvYXxhq3p5UNfCo89qB8PUotICpSKKtUqxSk5iBL7AFbV43RDG4WhtE67vD04o%2FcxU5NfQaHTAqdTpWKjyBwUxxrYO4nB%2BbEZTLrubQfEvgWHhi%2Bej0LKvMPj90skGOqUB5jSlxHmRi4CEbg0lCXfn8Mnb90dg3vLQbU4yaxorSKwRr3dxzRQIBUyG9TqBEIl1GsriJ4m9GtvA9Cc3oSlxoEB4fp0Gjz5dfRrqPgD4tbHnYhcTSsgB40eKYuAE46gGkP2KMNdEofH9qltdfzViEr9hxutSDBclCk%2Fmd%2BIjNxDk5UFK%2BnKxS4Isk%2BmPBoO1n2WJCIdYBNKWqdk3BJwfhekVFb0a&X-Amz-Signature=766f4a749a2c2a0dbbc04f09ebe02ad7503870f4f84a38540f7c410a41bbec7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR353RK7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjpjvfz2JyfjJxriXyrwFJMhLZrUf17zznMQ4MMhO3rAiEAibF8NyCG%2BO7EpXg8iLn%2BLY2gAK5VV9MwdztJh8iuYJkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMf0nGprbFogT0Eu2SrcA8NsVPAODFNNVddJ57gKKvKLugT17OLJFnYM%2BxSLuJ%2FwrzBbjBNBuaJYjk12n9uK8fFdVoLOq59LNASo3Ch5W9Wsb%2BgSL3U4R61WV%2Fv6WTs5oOTjZOutmo2%2B%2BLynORTlNqjGRuuGwzzRNHxvXKkIfY1QVzsxyf7XAOyymTB%2BrU7HcJHqM3wsYbVsmRiXLAEq256VVA1I0CV1Jz8DGcdivooVCJGJsGeDKXnjpbxsLlBMqRT3PFX6gvnn5oA51AztMhSL6szQxxJlUSIgirVA76%2BSC1YTf%2FhlUOXzirY8oQ5yGw5fv7dauwzfJSLZ8FdPXl9gppo1ZUUBN2zgi7kD4niM8J5wxsPqwjgrDo9NCQWPkFTK%2FILYcX2eRQPS%2FwMDKl3NpdMlOYpO1qE%2FilcmGP91k2JG8nOGqJ8uvYIkbYkXjk0iQ6BaOK56tA%2BeNusOIhQNZPfE1qpX94NH6bydRSVraNcYLOoJSGL5SFOEPHzJNfxrX80jX5xozQWM8QxDAJmigDNvYXxhq3p5UNfCo89qB8PUotICpSKKtUqxSk5iBL7AFbV43RDG4WhtE67vD04o%2FcxU5NfQaHTAqdTpWKjyBwUxxrYO4nB%2BbEZTLrubQfEvgWHhi%2Bej0LKvMPj90skGOqUB5jSlxHmRi4CEbg0lCXfn8Mnb90dg3vLQbU4yaxorSKwRr3dxzRQIBUyG9TqBEIl1GsriJ4m9GtvA9Cc3oSlxoEB4fp0Gjz5dfRrqPgD4tbHnYhcTSsgB40eKYuAE46gGkP2KMNdEofH9qltdfzViEr9hxutSDBclCk%2Fmd%2BIjNxDk5UFK%2BnKxS4Isk%2BmPBoO1n2WJCIdYBNKWqdk3BJwfhekVFb0a&X-Amz-Signature=d9dc6cdacda7e03302ff8d0a64a3d03d3949c4df0c832848357806209ceee6fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
