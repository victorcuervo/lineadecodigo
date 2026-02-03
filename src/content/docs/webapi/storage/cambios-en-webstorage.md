---
title: "Cambios en WebStorage"
description: "Cuando manipulas las cachés de tu navegador para poder manejar datos offline tienes que conocer cómo gestionar los Cambios en WebStorage."
date: 2023-09-20
updatedDate: 2026-01-10
tags: ["localstorage","addeventlistener","storageevent"]
slug: webapi/storage/cambios-en-webstorage
author: victor_cuervo
type: doc
topic: webapi
id: dfac2d2f-6d39-4b3b-a9a7-4376766b662a
download: https://github.com/victorcuervo/lineadecodigo_html5/tree/master/WebStorage/cambios-webstorage
---

El uso del WebStorage en [HTML5](https://manualweb.net/html5/) nos permite cachear información en el navegador para poder ser utilizada durante las diferentes sesiones que establezca el usuario a nuestra web. De esta forma podremos disponer de información de una forma rápida e incluso en momentos en los cuales el usuario no tenga conexión. Una parte importante en ese proceso de almacenamiento de la información se produce cuando hay un cambios en WebStorage y queremos actualizar la información que de él estamos recopilando.


Pero lo primero será recordar [cómo insertamos información con nuestra API de Webstorage](https://lineadecodigo.com/html5/acceder-a-la-cache-local-del-navegador-con-html5/) sobre el elemento LocalStorage. Para ello primero comprobaremos que tenemos acceso al LocalStroage.


```javascript
if (localStorage) {...}
```


En caso afirmativo utilizamos el método .setItem para poder insertar un elemento en un formato clave/valor dentro de la LocalStorage.


```javascript
if (localStorage)
  localStorage.setItem("nombre","Víctor");
```


Lo que tenemos que saber es que cada vez que se produce esta actualización de información bre la LocalStorage se lanza el evento `“storage”`. Es por ello que podemos crear un manejador que esté escuchando cada vez que se produce dicho evento.


Para crear un manejador de eventos nos apoyamos en el método [`.addEventListener()`](https://w3api.com/DOM/EventTarget/addEventListener/), el cual aplicaremos directamente sobre la ventana del navegador.


```javascript
window.addEventListener("storage",function(e){});
```


Para saber qué elemento del LocalStorage se ha cambiado tendremos que utilizar la información del eventos que viene dentro del objeto [`Event`](https://www.w3api.com/DOM/Event/) de la función del manejador. Es decir, en el parámetro `e`.


Si bien, tenemos que saber que el objeto [`Event`](https://www.w3api.com/DOM/Event/) que se recibe tiene el interface [`StorageEvent`](https://w3api.com/WebAPI/StorageEvent/). Y de esta interface recibimos diferente información, entre la que encontramos:

- [`StorageEvent.key`](https://w3api.com/WebAPI/StorageEvent/key/), nos indicará la clave dentro de la LocalStorage sobre la que se ha producido el cambio.
- [`StorageEvent.newValue`](https://w3api.com/WebAPI/StorageEvent/newValue/), contiene la información del nuevo valor que se ha introducido dentro de la LocalStorage.
- [`StorageEvent.oldValue`](https://w3api.com/WebAPI/StorageEvent/oldValue/), nos facilita el valor anterior al cambio que se ha producido dentro de la LocalStorage.

Sabiendo esto podemos codificar nuestro manejador creado mediante [`.addEventListener()`](https://w3api.com/DOM/EventTarget/addEventListener/) para que nos muestre dicha información:


```javascript
window.addEventListener("storage",function(e){
        let cambios = document.getElementById("cambios");
        cambios.innerHTML = cambios.innerHTML 
           + "La clave " + e.key 
           + " cambia su antiguo valor de '" + e.oldValue 
           + "' por el nuevo valor '" + e.newValue + "'.<br>";
});
```


De esta sencilla forma ya sabemos cómo podemos controlar cuándo hay cambios en WebStorage utilizando [HTML5](https://manualweb.net/html5/) para poder actualizar nuestra información en la web.

