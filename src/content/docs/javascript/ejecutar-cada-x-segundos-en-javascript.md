---
title: Ejecutar cada X segundos en JavaScript
description: "Artículo que nos explica cómo montar timers mediante una función como es setInterva() para poder ejecutar cada X segundos en JavaScript."
lastUpdated: 2023-09-17
slug: /javascript/ejecutar-cada-x-segundos-en-javascript/
author: victor_cuervo
---

En el artículo de hoy vamos a ver cómo podemos ejecutar cada X segundos en [JavaScript](https://www.manualweb.net/javascript/). La idea será que un método se ejecute una vez que hayan pasado, por ejemplo, 5 segundos. Y es que una cosa nos permite [JavaScript](https://www.manualweb.net/javascript/) es dotar de dinamismo a nuestras páginas web. Este dinamismo puede ser desencadenado por dos circunstancias. La primera es que el usuario que interactúa con la web genere un evento. Por ejemplo, pulsar un botón, pasar sobre una imagen... El segundo caso es que las acciones se desencadenen por cuestiones temporales, es decir, pasado un cierto tiempo.


### setInterval y setTimeout


Para desencadenar acciones cuando pase un cierto tiempo, [JavaScript](https://www.manualweb.net/javascript/) nos proporciona dos métodos: [`setInterval()`](https://www.w3api.com/DOM/Window/setInterval/) y [`setTimeout()`](https://www.w3api.com/DOM/Window/setTimeout/).


En el caso de [`setInterval()`](https://www.w3api.com/DOM/Window/setInterval/) nos permite ejecutar una función de forma repetitiva cada cierto tiempo que especifiquemos. Es decir, podemos indicarle que ejecute una función cada 5 segundos, cada minuto o el intervalo temporal que necesitemos.


Y para el caso de [`setTimeout()`](https://www.w3api.com/DOM/Window/setTimeout/) nos permite ejecutar una función una única vez pasado el tiempo que le especifiquemos. Es decir, podemos indicarle que ejecute una función cuando hayan pasado 5 segundos desde que se lo indicamos. La diferencia principal con [`setInterval()`](https://www.w3api.com/DOM/Window/setInterval/) es que [`setTimeout()`](https://www.w3api.com/DOM/Window/setTimeout/) solo ejecuta la función una vez, mientras que [`setInterval()`](https://www.w3api.com/DOM/Window/setInterval/) la ejecuta de forma repetitiva.


### Formulario para ejecutar cada X segundos en JavaScript


En nuestro ejemplo en el que vamos a ejecutar cada X segundos en [JavaScript](https://www.manualweb.net/javascript/) vamos a implementar un contador dentro de la página. Está claro que un valor funcional no nos va a aportar, si bien lo que estamos buscando es un valor didáctico y ver cómo funciona el método [`setInterval()`](https://www.w3api.com/DOM/Window/setInterval/).


Lo primero que vamos a crear es un formulario, el cual contenga un campo de texto. En dicho campo de texto, iremos actualizándolo con valores del contador.


```html
<form>
  <label for="contador">Contador:</label>
  <input id="contador" type="text">
</form>
```


Es importante el darle un [`id`](https://w3api.com/HTML/id/) al campo. Ya que este valor será el que nos permita acceder a su contenido, para modificarlo a posteriori.


### El contador que será invocado por setInterval


Lo siguiente será definir una función que implemente el contador. Básicamente, esta función obtendrá, vía [DOM](https://manualweb.net/dom/), el elemento del formulario y volcará sobre él el valor de un contador.


Nuestra función `contador()` sería la siguiente:


```javascript
function contador(){
	var contador = document.getElementById("contador");
	contador.value = cont;
	cont++;
}
```


Hacer notar que mediante el método [`.getElementById(id)`](https://www.w3api.com/DOM/Document/getElementById/) obtenemos el elemento de la página que queremos modificar. El contador deberá de tener un valor inicial. Es por ello que, fuera de la función, le asignaremos el valor. Todo el código [JavaScript](https://www.manualweb.net/javascript/) sería el siguiente:


```javascript
var cont = 0;
function contador(){
	var contador = document.getElementById("contador");
	contador.value = cont;
	cont++;
}
```


### Creando el primer setInterval


Ya, solo nos quedará el crear el intervalo mediante la función [`setInterval()`](https://www.w3api.com/DOM/Window/setInterval/). Esta función recibe dos parámetros. El primero será la función que queremos ejecutar cada X segundos. En nuestro caso `contador()`. El segundo parámetro son los X segundos, si bien, serán expresados en milisegundos.


Por ejemplo, si queremos ejecutar cada 5 segundos en [JavaScript](https://www.manualweb.net/javascript/) el código será el siguiente:


```javascript
setInterval('contador()',5000);
```


Solo nos quedará resolver una pregunta. ¿Cuando ejecutar el método [`setInterval()`](https://www.w3api.com/DOM/Window/setInterval/)? Este no lo podemos lanzar antes de definir la función contador, ni antes de que se haya definido cualquier parte de la página que sea modificada por contador (en nuestro caso, el formulario). Es por ello que lo mejor es ejecutarla al final de la página, o mejor dicho, cuando se haya cargado toda la página.


Con esto ya habremos conseguido tener nuestro código que nos permite ejecutar cada X segundos en [JavaScript](https://www.manualweb.net/javascript/). ¿Qué ejemplos se te ocurren que podrías implementar en tu página web mediante la función [`setInterval()`](https://www.w3api.com/DOM/Window/setInterval/)?

