---
title: "setTimeout con parámetros"
description: "Artículo que nos explica como podemos definir una invocación a la función setTimeout con parámetros."
date: 2015-09-24
updatedDate: 2026-01-12
tags: ["window","settimeout","funcion-anonima","funciones"]
slug: javascript/navegador/settimeout-con-parametros
type: doc
topic: javascript
id: e161d82d-90f6-42dc-99ba-ffbb697f15e2
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/timers/settimeout-con-parametros.html
---

Hemos visto [muchos ejemplos en los que utilizamos un timer en Javascript](http://lineadecodigo.com/tag/javascript-dom-window-settimeout/) para lanzar un método una vez transcurridos cierto milisegundos. Son muy conocidos los ejemplos para [construir un reloj](http://lineadecodigo.com/javascript/reloj-javascript-en-una-capa/), [contando caracteres online](http://lineadecodigo.com/javascript/contar-caracteres-on-line/). En todos estos ejemplos veíamos que había una invocación a la función `.setTimeout()` del siguiente estilo:


```javascript
setTimeout('miFuncion()',5000);
```


Como podemos apreciar la función `.setTimeout()` recibe una cadena con la función a ejecutar en el callback y el tiempo en milisegundos en el cual hay que invocarla. Pero qué sucede si queremos tener un setTimeout con parámetros. Es decir, que le podamos pasar una nueva información para ser utilizada en la función, ya que el siguiente código no funciona:


```javascript
setTimeout('miFuncion(parametro)',5000);
```


Podríamos realizar una primera aproximación que es definir la variable valor como global y que así tenga acceso cualquier método. Esta podría ser la de tirar por la calle del medio y quizás no nos interesase definir variables globales. Para poder definir utilizar setTimeout con parámetros vamos a tener dos formas. Para ello vamos a crear una función que vuelque al log un segundo, así durante 10 segundos.


```javascript
function escribir(valor){
  if (valor<=10)
    console.log(valor);
}
```


## Función anónima


En este caso podemos definir dentro del `.setTimeout()` una función anónima que sea la que invoque a la función `.escribir()` pasándole el parámetro.


```javascript
valor = 1;
setTimeout(function(){escribir(valor)},1000);
```


Vemos que se invoca a la función con el parámetro valor.


## Como parámetro de setTimeout


Quizás sea lo más sencillo aunque es más desconocido, la idea es que la función `.setTimeout()` permite que a partir del tercer parámetro se le pasen argumentos a la función de callback, los cuales se mapearán a los parámetros que esta función espere. De esta forma el código Javascript quedaría de la siguiente forma:


```javascript
valor = 1;
setTimeout(escribir,1000,valor);
```


Así que ya hemos visto dos formas de poder invocar a la función setTimeout con parámetros.

