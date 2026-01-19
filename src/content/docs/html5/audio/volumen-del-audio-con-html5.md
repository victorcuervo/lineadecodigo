---
title: "Volumen del Audio con HTML5"
description: "Descubre cómo controlar el volumen del audio con HTML5 utilizando un slider y JavaScript. Aprende a implementar esta funcionalidad de manera sencilla y efectiva."
date: 2016-10-21
updatedDate: 2026-01-19
tags: ["addeventlistener","getelementbyid","range","volume"]
slug: html5/audio/volumen-del-audio-con-html5
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Audio/volumen-audio.html
topic: html5

---

En este ejemplo vamos a ver cómo podemos controlar el volumen del audio con [HTML5](https://www.manualweb.net/html5/). La idea es utilizar un slider de [HTML5](https://www.manualweb.net/html5/) y código Javascript para modificar el volumen.


## Crear el elemento audio


Lo primero que haremos para llevar a cabo nuestro ejemplo de control del volumen del audio con [HTML5](https://www.manualweb.net/html5/) será insertar un elemento audio:


```html
<audio id="reproductor" controls="controls"> 
  <source src="mimusica.ogg" type="audio/ogg">
  <source src="[mimusica.mp](http://mimusica.mp/)3" type="audio/mpeg">
</audio>
```


Vemos que mediante los elementos [source](https://www.w3api.com/HTML/source/) indicamos los diferentes orígenes de audio que se pueden reproducir.


## Crear el slider de volumen


Lo siguiente será crear el slider mediante el elemento [input](https://www.w3api.com/HTML/input/).


```html
<input id="mislider" max="1" min="0" step="0.1" type="range" value="0.5">
<span id="valor"></span>
```


Vemos que el elemento [input](https://www.w3api.com/HTML/input/) es de tipo `"range"`. Y que hemos configurado sus valores mínimo a 0 y máximo a 1 ya que son los valores máximo y mínimo que admitirá el control de audio. De igual manera indicamos que los incrementos son de 0.1 para poder obtener un valor en esos rangos.


## Controlar el evento change del slider


Ahora empezaremos con el código Javascript. Lo primero que haremos con este código será recuperar el valor del slider cada vez que este cambie. Para ello deberemos de controlar el evento `"change"`. Esto lo conseguimos mediante el método [.addEventListener()](https://www.w3api.com/DOM/EventTarget/addEventListener).


```javascript
var barra = document.getElementById("mislider");

barra.addEventListener("change", function(ev){
  // Código para actualizar el volumen
}, true);
```


## Obtener el valor del slider


El valor del slider nos llega en el objeto [Event](https://www.w3api.com/DOM/Event/target/).


```javascript
ev.currentTarget.value;
```


## Asignar el volumen al audio


Así que lo que haremos será asignar dicho valor a la propiedad volume del audio. Para ello lo primero que haremos será recuperar la referencia al audio.


```javascript
var reproductor = document.getElementById("reproductor");
```


Y luego asignarle el valor dentro del controlador del evento que hemos definido con anterioridad.


```javascript
barra.addEventListener("change", function(ev){	
  reproductor.volume = ev.currentTarget.value;	
}, true);
```


De esta forma cada vez que movamos el slider se actualizará el volumen del audio. De esta forma tan sencilla hemos conseguido controlar el volumen del Audio con [HTML5](https://www.manualweb.net/html5/).

