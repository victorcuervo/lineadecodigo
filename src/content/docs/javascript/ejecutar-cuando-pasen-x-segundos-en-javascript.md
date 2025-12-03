---
title: Ejecutar cuando pasen X segundos en JavaScript
description: "Utilización de la función setTimeout para poder ejecutar cuando pasen X segundos en Javascript un código configurado en nuestra página."
lastupdates: 2023-05-22
author: victor_cuervo
---

Este artículo es un complemento a [Ejecutar cada X segundos en JavaScript](http://lineadecodigo.com/javascript/ejecutar-cada-x-segundos-en-javascript/). Mientras que en el primer artículo veíamos cómo utilizar el método [Javascript](https://www.manualweb.net/javascript/) [`.setInterval()`](https://www.w3api.com/DOM/Window/setInterval/) para ejecutar una función cada X segundos de forma repetitiva, en este vemos como ejecutar cuando pasen X segundos en JavaScript una función. Para ello nos apoyaremos en la función [Javascript](https://www.manualweb.net/javascript/) [`.setTimeout()`](https://www.w3api.com/DOM/Window/setTimeout/).


> La función [`.setInterval()`](https://www.w3api.com/DOM/Window/setInterval/) nos permite ejecutar de forma recurrente una función cada x intervalos, mientras que la función [`.setTimeout()`](https://www.w3api.com/DOM/Window/setTimeout/) nos sirve para poder ejecutar una función, una única vez, transcurrido un tiempo,


La función [`.setTimeout()`](https://www.w3api.com/DOM/Window/setTimeout/) tiene la siguiente estructura:


```javascript
setTimeout(funcion_a_ejecutar,milisegundos);
```


El funcionamiento es muy sencillo. Se ejecutará la **"funcion_a_ejecutar"** cuando pasen los milisegundos especificados como segundo parámetro. Esta función [Javascript](https://www.manualweb.net/javascript/) solo se ejecutará una vez. Y transcurrido ese tiempo no se volverá a ejecutar a no ser que la invoquemos nuevamente.


Lo primero que haremos será el definir una función muy sencilla. Que solo muestre un mensaje por pantalla. Será nuestro típico saludo, ¿se te ocurre función más sencilla?:


```javascript
function saludo(){
 alert("Han pasado 3 segundos");
}
```


Y ahora establecer el temporizador. Este le activaremos cuando se pulse un botón:


```javascript
<button onclick="setTimeout('saludo()',3000);">Saludo a los 3 segundos</button>
```


Es muy importante que el método a ejecutar que especifiquemos en la función [`.setTimeout()`](https://www.w3api.com/DOM/Window/setTimeout/) lo pongamos entre comillas.


De esta forma habremos conseguido ejecutar cuando pasen X segundos en [Javascript](https://www.manualweb.net/javascript/) una función. Algo muy sencillo a establecer un intervalo. Esto se utiliza cuando necesitamos que la función se ejecute una única vez.

