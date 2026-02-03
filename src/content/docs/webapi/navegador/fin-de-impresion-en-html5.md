---
title: "Fin de Impresión en HTML5"
description: "Ejemplo que nos explica cómo utilizar el evento onafterprint para poder controlar el fin de impresión en HTML5 y mostrar un mensaje al usuario"
date: 2022-05-04
updatedDate: 2026-01-21
tags: ["onafterprint","body"]
slug: webapi/navegador/fin-de-impresion-en-html5
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-81f8-a3fb-ee74d419c02f
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Impresi%C3%B3n/control-fin-impresion.html
---

En este artículo vamos a ver cómo podemos controlar el fin de impresión en [HTML5](http://www.manualweb.net/html5) para poder interactuar con nuestros usuarios y avisarlos que la impresión del documento ha terminado de forma correcta o no.


Y es que el usuario, bien sea mediante el menú del navegador para imprimir o bien porque le hayamos incluido en la página web la capacidad de imprimir, podrá lanzar una impresión del documento actual.


Es en ese momento en el que entran en juego una serie de eventos que nos van a permitir asistir al usuario en el flujo de impresión. Estos eventos son:

- [`onbeforeprint`](http://www.w3api.com/HTML/body/onbeforeprint/) para poder interactuar antes de lanzar la impresión
- [`onafterprint`](http://www.w3api.com/HTML/body/onafterprint/) el cual nos permite interactuar con el usuario una vez que ha acabado el proceso de impresión

Para el caso que nos atañe ahora, para poder controlar el fin de impresión en [HTML5](http://www.manualweb.net/html5) nos vamos a centrar en el evento [`onafterprint`](http://www.w3api.com/HTML/body/onafterprint/).


## Crear el espacio para el mensaje


La idea del ejemplo va a ser el avisar al usuario en un mensaje dentro de la web en el cual le indicaremos que ha terminado su proceso de impresión. Es por ello que lo primero que haremos será crear en la página un espacio en el que vamos a mostrar el mensaje.


Esto lo haremos mediante un elemento [`div`](http://www.w3api.com/HTML/div/) al cual daremos un identificador "mensaje".


```html
<div id="mensaje"></div>
```


## Función para mostrar el mensaje


Lo siguiente será crear una función, la cual nos permita incluir un contenido en este elemento [`div`](http://www.w3api.com/HTML/div/) una vez que se haya realizado la impresión. Es importante entender que hay que utilizar el método `.getElementById()` para poder acceder a este elemento y volcar sobre él el mensaje.


```javascript
function postimpresion() {
  document.getElementById('mensaje').innerHTML = 'Proceso de impresión finalizado';
}
```


Vemos que cuando hemos obtenido la referencia al elemento [`div`](http://www.w3api.com/HTML/div/) lo siguiente que se ha realizado es utilizar la propiedad `.innerHTML` para modificar el texto.


## Capturar el evento onafterprint


Ahora podremos utilizar la función `postimpresion()` cuando se produzca el final de la impresión, es decir, cuando se produzca el evento [`onafterprint`](http://www.w3api.com/HTML/body/onafterprint/).


Hay varias formas de poder capturar este evento [`onafterprint`](http://www.w3api.com/HTML/body/onafterprint/), en nuestro caso vamos a utilizar un atributo del elemento body que nos permite en [HTML5](http://www.manualweb.net/html5) capturar dicho evento.


```html
<body onafterprint="postimpresion()">
```


Ya solo te quedará el cargar la página web y enviarla a imprimir. Podrás comprobar cómo sale el mensaje cuando termines o canceles la impresión. Así habremos controlado el fin de Impresión en [HTML5](http://www.manualweb.net/html5).

