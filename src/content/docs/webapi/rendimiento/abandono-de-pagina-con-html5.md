---
title: "Abandono de página con HTML5"
description: "Artículo que nos enseña a controlar y gestionar el evento beforeunload para poder controlar el abandono de página con HTML5."
date: 2021-12-07
updatedDate: 2026-01-23
tags: ["beforeunload","addeventlistener"]
slug: webapi/rendimiento/abandono-de-pagina-con-html5
author: victor_cuervo
type: doc
id: bd9bab30-fab8-449f-a781-688b28585b9f
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/P%C3%A1gina/controlar-abandono-pagina.html
---

En este artículo vamos a ver cómo podemos controlar el abandono de página con [HTML5](https://www.manualweb.net/html5). La idea es que tenemos a un usuario en nuestra página y este está, por ejemplo, [insertando datos en un formulario](https://lineadecodigo.com/tag/html-form/). En esta situación será bueno indicarle que está insertando información y que si abandona la página perderá lo que ha insertado.


## Controlando el evento beforeunload


Este comportamiento de control de abandono lo podemos gestionar si controlamos el evento [`beforeunload`](https://w3api.com/HTML/body/onbeforeunload/) de [HTML5](https://www.manualweb.net/html5). Así que recurriremos al lenguaje Javascript para controlar la ejecución de dicho método.


## Usando addEventListener


En concreto nos apoyaremos en el método [`.addEventListener()`](http://www.w3api.com/WebAPI/EventTarget/addEventListener/) para realizar esta acción. En concreto vamos a utilizar el método [`.addEventListener()`](http://www.w3api.com/WebAPI/EventTarget/addEventListener/) sobre la ventana del navegador.


```javascript
window.addEventListener('beforeunload', function(event) {
  // Código de control
});
```


## Pasando parámetros al método


Al método [`.addEventListener()`](http://www.w3api.com/WebAPI/EventTarget/addEventListener/) le vamos a pasar el nombre del evento y la función que lo controle.


```javascript
window.addEventListener('beforeunload', handleBeforeUnload);
```


## Implementando la función de control


Vemos que en el caso de la función que va a dar respuesta al evento utilizamos una función anónima que vamos a codificar. Además está función recibe como parámetro un evento con la información, de entre otras cosas, del elemento origen del evento. 


Es importante saber que cuando controlamos el evento [`beforeunload`](https://w3api.com/HTML/body/onbeforeunload/) el propio navegador va a mostrar un mensaje. Es por ello que en nuestro caso vamos a dejar un mensaje sobre una capa de la página mediante el método [`.getElementById()`](http://www.w3api.com/WebAPI/Document/getElementById/).


```javascript
window.addEventListener('beforeunload', function(event) {
  document.getElementById('mensaje').innerHTML = 'Vas a abandonar la página';
});
```


## Código completo


Además, para que funcione correctamente deberemos de devolver el valor `null`, tanto en el atributo .returnValue del evento como de la función anónima. De esta manera el código que nos controla el evento [`beforeunload`](https://w3api.com/HTML/body/onbeforeunload/) nos quedará de la siguiente manera:


```javascript
window.addEventListener('beforeunload', function(event) {
  document.getElementById('mensaje').innerHTML = 'Vas a abandonar la página';
  event.returnValue = null;
  return null;
});
```


De esta forma ya tendremos controlado el abandono de página con [HTML5](https://www.manualweb.net/html5) para poder avisar al usuario de que va a salir de la página.

