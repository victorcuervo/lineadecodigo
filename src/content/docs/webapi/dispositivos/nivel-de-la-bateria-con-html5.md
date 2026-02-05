---
title: "Nivel de la batería con HTML5"
description: "Conoce el nivel de la batería con HTML5 de forma efectiva y mantente siempre actualizado sobre el estado de tu dispositivo. ¡Descubre cómo hacerlo ahora!"
date: 2015-08-30
updatedDate: 2026-02-05
tags: ["batterymanager","battery","level","getbattery"]
slug: webapi/dispositivos/nivel-de-la-bateria-con-html5
type: doc
topic: webapi
id: 2c8a9dfb-adca-8168-a5fc-c48d6c20b57b
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Device/Battery/nivel-bateria.html
---

Dentro de los estándares que hay alrededor de [HTML5](https://www.manualweb.net/html5/) nos encontramos con el Battery API. Mediante el Battery API podremos consultar el nivel de la batería con [HTML5](https://www.manualweb.net/html5/). Es decir, sabremos el nivel de la batería/s que contenga el dispositivo que cargue nuestra página web.


> ⚠️ Ten en cuenta que la especificación **Battery API o Battery Status API** [está todavía en ](http://www.w3.org/TR/battery-status/)[**Candidate Recommendation**](http://www.w3.org/TR/battery-status/)[ por parte de W3C](http://www.w3.org/TR/battery-status/) y es por ello que la implementación puede variar atendiendo a los diferentes navegadores.


	Ten en cuenta que la especificación **Battery API o Battery Status API** [está todavía en ](http://www.w3.org/TR/battery-status/)[**Candidate Recommendation**](http://www.w3.org/TR/battery-status/)[ por parte de W3C](http://www.w3.org/TR/battery-status/) y es por ello que la implementación puede variar atendiendo a los diferentes navegadores.


## Accediendo al BatteryManager


Para poder calcular el nivel de la batería con [HTML5](https://www.manualweb.net/html5/) tenemos que saber que el objeto que contiene la información acerca de la batería es el `BatteryManager`. Para obtener una instancia del `BatteryManager` deberemos de invocar al método `.getBattery()` del navegador.


```javascript
navigator.getBattery().then(function (battery) { ... }
```


Es importante saber que este método devuelve una promesa, la cual es resuelta mediante el objeto `BatteryManager`.


## Consultando el nivel de batería


De esta forma podemos acceder a la información del nivel de la batería con [HTML5](https://www.manualweb.net/html5/) mediante la propiedad `.level`.


```javascript
console.log("Nivel de batería " + battery.level * 100 + "%");
```


Es importante saber que el nivel de la batería se muestra en decimales entre 0.0 y 1.0 por lo cual deberemos de multiplicarlo por 100 para obtenerlo en formato de porcentaje.


## Evento levelchange


Con lo realizado hasta ahora podríamos decir que ya hemos mostrado el nivel de la batería con [HTML5](https://www.manualweb.net/html5/). Si bien, la especificación Battery API, nos ofrece un elemento adicional. Este es el evento `"levelchange"`. Es decir, el `BatteryManager` va a avisar cada vez que cambie el nivel de batería. Bien porque se esté cargando o descargando.


Así que vamos a crear un listener sobre el `BatteryManager`.


```javascript
battery.addEventListener('levelchange', function() {...});
```


Y simplemente lo que tenemos que hacer es volver a acceder a la propiedad `.level` para conocer el nuevo nivel de la batería.


```javascript
battery.addEventListener('levelchange', function() {
  console.log("Nivel de batería " + battery.level * 100 + "%");
});
```


## Soporte de navegadores


Si vas a realizar uso del Battery API debes de mirar bien el soporte de los navegadores. Ya que ahora mismo (30.agosto.2005) es soportado solo por Chrome 42+, Opera 30+ y el Android Browser 40+. Por otro lado Firefox 38+ de forma parcial. Como siempre os recomiendo que utilicéis [Can I Use Battery API?](http://caniuse.com/#feat=battery-status) para ver el estado actual de implementación.


Ya habéis visto lo sencillo que es conocer y estar actualizado del nivel de la batería con [HTML5](https://www.manualweb.net/html5/).

