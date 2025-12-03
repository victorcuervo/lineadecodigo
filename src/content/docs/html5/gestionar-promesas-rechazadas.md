---
title: Gestionar Promesas Rechazadas
description: "Cómo podemos gestionar promesas rechazadas, ya hayan sido gestionadas o no, en nuestra página HTML5 mediante la suscripción a eventos."
lastUpdated: 2023-03-19
author: victor_cuervo
---

Ya sabemos lo [que es una promesa](https://manualweb.net/javascript/promesas-en-javascript/) y cómo podemos [crear una promesa en Javascript](https://lineadecodigo.com/javascript/crear-promesa-en-javascript/). Ahora vamos a ver cómo [HTML5](https://manualweb.net/html5/) nos ayuda a gestionar promesas rechazadas suscribiéndonos a los eventos que estas generan. Esto nos permitirá realizar una gestión de promesas que no hayan sido tratadas de forma correcta


Como ya comentábamos una promesa nos permite hacer la gestión del resultado de un proceso asíncrono, tanto como si el proceso ha resultado de forma correcta como si ha terminado de forma no satisfactoria. Pero, ¿podemos saber de forma externa si una promesa ha sido procesada? La respuesta es sí. Pero vamos por partes.


Lo primero será [crear una promesa](https://lineadecodigo.com/javascript/crear-promesa-en-javascript/) mediante el objeto [`Promise`](https://www.w3api.com/Javascript/Promise/).


```javascript
var rejectedPromise = Promise.reject('Error a las ' + new Date().toLocaleTimeString());
```


Además, como no vamos a realizar ninguna tarea, ya que es un ejemplo, directamente la vamos a rechazar la promesa mediante el método [`.reject()`](https://www.w3api.com/Javascript/Promise/reject/). El valor que le pasamos cómo resolución del rechazo es un mensaje con la hora en la que hemos rechazado la promesa.


Una vez que **se ha rechazado la promesa y esta no ha sido gestionada**, dentro de la página se genera el evento [`unhandledrejection`](https://www.w3api.com/HTML/body/onunhandledrejection/), que nos viene ha decir que teníamos una promesa, esta promesa se ha rechazado, pero no se ha hecho nada al respecto.


Por lo que podemos hacer es suscribirnos al evento [`unhandledrejection`](https://www.w3api.com/HTML/body/onunhandledrejection/):


```javascript
window.addEventListener("unhandledrejection", function(event) {            
    console.log("Promesa Sin Manejar rechazada. Razón: " + event.reason);
    event.preventDefault();
}, false);
```


Lo que vemos es que en la gestión de este evento recibimos un objeto de tipo [`PromiseRejectionEvent`](https://www.w3api.com/HTMLDOM/PromiseRejectionEvent/) que tiene un atributo [`.reason`](https://www.w3api.com/HTMLDOM/PromiseRejectionEvent/reason/) el cual nos indica la razón por la cual no se ha gestionado la promesa.


Además hemos invocado al método [`.preventDefault()`](https://www.w3api.com/DOM/Event/preventDefault/) para evitar que se propague el error al [navegador web](https://www.ayudaenlaweb.com/navegadores/) sobre la promesa no manejada. De esta manera tendremos controladas aquellas promesas que se ejecuten en nuestro código que no tengan un control de su flujo.


De igual manera podría pasar que sí que hubiésemos gestionado la promesa, o mejor dicho, el rechazo de la promesa. Para ello hemos incluido en el código el uso del método [`.catch()`](https://www.w3api.com/Javascript/Promise/catch/). Que aunque no hagamos nada con él nos permite gestionar la promesa.


```javascript
setTimeout(() => {
  rejectedPromise.catch(() => {});
}, 1);
```


En este caso también disponemos de un evento al cual podemos suscribirnos que sería el evento [`rejectionhandled`](https://www.w3api.com/HTML/body/onrejectionhandled/), el cual se dispara cuando hay una promesa, pero esta si que ha gestionado su proceso de rechazo.


De esta forma tendríamos el siguiente código:


```javascript
window.addEventListener("rejectionhandled", function(event) {            
	console.log("Promesa Manejada rechazada. Razón: " + event.reason);
}, false);
```


De igual manera que nos sucedía con el evento [`unhandledrejection`](https://www.w3api.com/HTML/body/onunhandledrejection/) aquí también disponemos del evento [`PromiseRejectionEvent`](https://www.w3api.com/HTMLDOM/PromiseRejectionEvent/) y su atributo [`.reason`](https://www.w3api.com/HTMLDOM/PromiseRejectionEvent/reason/) para saber el motivo del rechazo.


Con esto ya sabemos cómo podemos gestionar promesas rechazadas ya hayan sido gestionadas o no gestionadas en nuestra página [HTML5](https://manualweb.net/html5/) mediante la suscripción a eventos.

