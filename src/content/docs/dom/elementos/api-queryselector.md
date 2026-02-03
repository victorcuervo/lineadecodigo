---
title: "API QuerySelector"
description: "Uso del API QuerySelector para la ejecución de selectores en Javascript."
date: 2014-08-30
updatedDate: 2026-01-13
tags: ["queryselector","getelementbyid","innerhtml","selector"]
slug: dom/elementos/api-queryselector
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-8114-b13d-fc72157faf3d
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/selectores/queryselector.html
---

## ¿Qué es el API QuerySelector?


El **API QuerySelector** es un API Javascript que nos permite ejecutar selectores para poder acceder a elementos del DOM de de una página web. Algo que [frameworks como jQuery](http://www.manualweb.net/jquery/) ya tenían implementado hace tiempo, pero que ahora tenemos de forma estándar en [Javascript](https://www.manualweb.net/javascript/).


De esta forma el **API QuerySelector** complementa a las funciones ya existentes [.getElementById()](https://www.w3api.com/DOM/.getElementById(), [.getElementByName()](https://www.w3api.com/DOM/.getElementsByTagName() y .getElementsByTagName().


## Comprobar soporte del navegador


Aunque el soporte del API QuerySelector está bastante extendido lo primero que vamos a realizar es **comprobar si el navegador en el que ejecutamos el código tiene el soporte del API QuerySelector**. Para ello validamos si existe document.querySelector.


```javascript
if (document.querySelector) {
  // Código con querySelector
}
```


## Ejecutar selectores


Para poder ejecutar el API QuerySelector es muy sencillo, para ello **basta con ejecutar la** [**función .querySelector**](https://www.w3api.com/DOM/.querySelector()) indicándole el selector como parámetro que queramos ejecutar.


```javascript
var elemento = document.querySelector(selector);
```


Los selectores pueden indicar múltiples cosas, ya sean identificadores, clases, etiquetas, jerarquías de etiquetas,...


## Ejemplo de uso


Por ejemplo si tenemos un ID dentro de nuestra página web que se llame "mensaje"...


```html
<div id="mensaje">Contenido del mensaje</div>
```


Podemos ejecutar el siguiente código:


```javascript
var mensaje = document.querySelector("#mensaje");
```


La variable mensaje contendrá un [objeto DOM](https://www.w3api.com/DOM/), en este caso un objeto HTMLDIVElement. De esta forma podemos acceder a todas sus propiedades, por ejemplo a su contenido con [.innerHTML](https://www.w3api.com/DOM/Element/innerHTML/)


```javascript
console.log(mensaje.innerHTML);
```


Ahora ya solo te queda ir jugando con los diferentes selectores del API QuerySelector para ir viendo toda su potencia.

