---
title: "Saber si la batería está cargando con HTML5"
description: "Descubre cómo saber si la batería está cargando con HTML5 utilizando el Battery API para mejorar la experiencia del usuario en tus aplicaciones web."
date: 2015-10-11
updatedDate: 2026-01-19
tags: ["battery","batterymanager","chargingchange","charging"]
slug: webapi/dispositivos/saber-si-la-bateria-esta-cargando-con-html5
author: victor_cuervo
type: doc
topic: webapi
id: 2c8a9dfb-adca-81ee-a96b-ff012190ed91
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Device/Battery/cargando-bateria.html
---

Para saber si la batería está cargando con [HTML5](https://www.manualweb.net/html5/) vamos a apoyarnos sobre el **Battery API**. Esta funcionalidad es una de las que ofrece dicho API, donde también podemos saber el nivel actual de la batería o el tiempo de vida que le puede quedar a la batería.


Es bueno saber si la batería está cargando con [HTML5](https://www.manualweb.net/html5/) sobre todo si nuestra aplicación es de consumo excesivo de CPU. Ya que una alta computación dentro de nuestros programas hará que la batería del dispositivo disminuya más rápidamente y pueda dejar al usuario con una mala experiencia. En estos casos deberíamos de recomendar al usuario que ponga a cargar la batería del dispositivo para no tener problemas.


## El objeto BatteryManager


Lo primero es utilizar el elemento `BatteryManager`, este lo conseguimos mediante el objeto `navigator` y su método `.getBattery()`.


```javascript
navigator.getBattery().then(function(battery) {
  // Código para trabajar con la batería
});
```


Bueno, en concreto, **lo que estamos recuperando es una promesa**. De esta manera, la propiedad battery es la que representa a nuestro `BatteryManager`.


## La propiedad charging


La propiedad que nos ayuda a saber si la batería está cargando con [HTML5](https://www.manualweb.net/html5/) es `.charging`. Así que deberemos de preguntar por ella en nuestro código.


```javascript
navigator.getBattery().then(function(battery) {
  if (battery.charging) {
    console.log("La batería está cargando");
  } else {
    console.log("La batería NO está cargando");
  }
});
```


## Detectar cambios en el estado de carga


Como el estado de carga de la batería puede cambiar, el objeto `BatteryManager` nos da la oportunidad de escuchar el evento `chargingchange` el cual saltará cada vez que dejemos de cargar la batería o empecemos a cargar la batería.


Es por ello que podremos utilizar el método `.addEventListener()` para controlar este evento e informar de que ha habido un cambio y así saber si la batería está cargando con [HTML5](https://www.manualweb.net/html5/).


```javascript
navigator.getBattery().then(function(battery) {
  // Estado inicial
  console.log("Estado inicial: " + (battery.charging ? "Cargando" : "No cargando"));
  
  // Escuchar cambios
  battery.addEventListener('chargingchange', function() {
    console.log("Cambio detectado: " + (battery.charging ? "Cargando" : "No cargando"));
  });
});
```


## Código completo


De esta forma habremos realizado nuestro código para saber si la batería está cargando con [HTML5](https://www.manualweb.net/html5/).


```javascript
navigator.getBattery().then(function(battery) {
  // Mostrar estado inicial
  actualizarEstado(battery.charging);
  
  // Detectar cambios en el estado de carga
  battery.addEventListener('chargingchange', function() {
    actualizarEstado(battery.charging);
  });
});

function actualizarEstado(cargando) {
  var mensaje = cargando ? "La batería está cargando" : "La batería NO está cargando";
  document.getElementById('estado').innerHTML = mensaje;
}
```


El Battery API de HTML5 nos proporciona una forma sencilla de monitorizar el estado de carga de la batería del dispositivo, permitiéndonos adaptar el comportamiento de nuestra aplicación web según las necesidades del usuario.

