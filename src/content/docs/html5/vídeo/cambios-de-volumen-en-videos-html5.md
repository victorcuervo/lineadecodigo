---
title: Cambios de volumen en vídeos HTML5
description: "Artículo que nos explica el uso del evento onvolumechange HTML5 para poder controlar cambios de volumen en vídeos HTML5 y así autoajustarlo."
lastUpdated: 2024-01-29
slug: /html5/cambios-de-volumen-en-videos-html5/
author: victor_cuervo
---

En el artículo de hoy vamos a aprender cómo podemos controlar cambios de volumen en vídeos [HTML5](https://www.manualweb.net/html5/). Es decir, saber cuándo se cambia el volumen de un [vídeo HTML5](https://lineadecodigo.com/tag/html5-video/), ya sea para subir el volumen, bajar el volumen o apagarlo.


### Por qué controlar cambios de volumen en vídeos HTML5


Los ejemplos en los que puede ser interesante controlar cambios de volumen en vídeos [HTML5](https://www.manualweb.net/html5/) son aquellos en los que queremos que un usuario no pueda bajar el volumen de un vídeo o mutearlo. Esto puede ser interesante si estás trabajando en una plataforma de elearning en la cual quieres “asegurarte” que el cliente está escuchando el vídeo.


Otro ejemplo interesante para controlar cambios de volumen en vídeos [HTML5](https://www.manualweb.net/html5/) es en aquellos escenarios dónde tengamos establecidos unos patrones de volumen bajo, medio y alto. Nos permitirá el ajustar a uno u otro independientemente de que el usuario esté modificando la barra del volumen del sonido.


### Incluir el vídeo dentro de nuestra web


Así que, manos a la obra, vamos a empezar a construir nuestro código para controlar cambios de volumen en vídeos [HTML5](https://www.manualweb.net/html5/). Lo primero será el incluir nuestro elemento [`vídeo`](https://w3api.com/HTML/video/) y el elemento [`source`](https://w3api.com/HTML/source/). El elemento [`vídeo`](https://w3api.com/HTML/video/) nos crea un espacio para poder cargar el elemento multimedia y el elemento [`source`](https://w3api.com/HTML/source/) nos permite indicar el archivo y tipo del archivo que queremos cargar con el vídeo.


```javascript
<video id="mivideo" controls>  
  <source src="http://easyhtml5video.com/images/happyfit2.ogv" type="video/ogg"></source>
  Tu navegador no soporta el elemento <code>video</code>.  
</video> 
<div id="info"></div>
```


Para implementar correctamente esta funcionalidad, es crucial prestar atención a los detalles técnicos de la estructura [HTML](https://www.manualweb.net/html/). En primer lugar, debemos asignar un identificador único al elemento [`video`](https://w3api.com/HTML/video/) a través del atributo [`id`](https://w3api.com/HTML/id/). Este identificador actúa como un puente esencial entre la estructura HTML y nuestro [código Javascript](https://lineadecodigo.com/categoria/javascript/), permitiendo una manipulación precisa y eficiente del elemento multimedia.


Luego tenemos  el elemento [`source`](https://w3api.com/HTML/source/). Este elemento es el componente fundamental para la carga del vídeo y requiere dos atributos críticos: la ruta del recurso multimedia y su formato, especificado mediante el atributo [`type`](https://www.w3api.com/HTML/source/type/). En nuestra implementación, hemos optado por utilizar el formato OGV (Ogg Video). Este formato, especificado como `"video/ogg"`, ofrece una excelente relación entre calidad y compatibilidad, siendo especialmente valorado en la comunidad de desarrollo web.


Como complemento a la estructura principal, hemos incorporado un elemento [`div`](https://www.w3api.com/HTML/div/) en nuestro [código HTML](https://lineadecodigo.com/categoria/html/). Este contenedor dinámico actuará como un panel de información en tiempo real, permitiéndonos mostrar de manera elegante y organizada todos los eventos y acciones relacionados con la reproducción del vídeo. Esta implementación no solo mejora la experiencia del usuario, sino que también facilita la depuración durante el desarrollo.


### Controles externos para manipular el sonido del vídeo


Una vez que tenemos nuestro vídeo vamos a añadirle una serie de controles en los que insertaremos un elemento [`range`](https://www.w3api.com/HTML/range/) que nos permitirá gestionar el volumen y un [`input`](https://www.w3api.com/HTML/input/) de tipo checkbox para apagar el volumen.


```javascript
<label for="volumen">Volumen: </label><input type="range" min="0" max="1" value="1" step="0.1" id="volumen">
<input type="checkbox" id="mute"><label for="mute">Mute</label>
```


Estos controles los gestionaremos mediante [código Javascript](https://lineadecodigo.com/categoria/javascript/). Por un lado el elemento [`range`](https://www.w3api.com/HTML/range/) ante un evento de cambio, que se registra con el evento [`onchange`](https://w3api.com/HTML/onchange/), asignará el valor del elemento sobre el volumen del vídeo. Al volumen del vídeo se puede acceder mediante la propiedad [`volume`](https://www.w3api.com/HTMLDOM/HTMLMediaElement/volume/).


Por otro mediante el [`input`](https://www.w3api.com/HTML/input/) de tipo checkbox controlaremos si ponemos el volumen a 0, nuevamente mediante su propiedad [`volume`](https://www.w3api.com/HTMLDOM/HTMLMediaElement/volume/) o si, por el contrario, volvemos a poner el volumen que tenía. Para ello guardamos en una variable savevolume el valor actual antes de apagarlo.


```javascript
let mute = document.getElementById("mute");
let barra = document.getElementById("volumen");
let v = document.getElementById("mivideo");
let savevolume = 1;

mute.addEventListener("change",function(ev){
	if (ev.target.checked) {
		savevolume = v.volume;		
		v.volume = 0;
		barra.value = 0;
	} else {
		v.volume = savevolume;
		barra.value = savevolume;
	}
},true);


barra.addEventListener("change",function(ev){
	v.volume = ev.target.value;	
	mute.checked=false;
},true);
```


### Uso del evento onvolumechange para controlar cambios de volumen en vídeos HTML5


A parte de la gestión del evento [`change`](https://w3api.com/HTML/onchange/) tenemos otro evento que es el [`onvolumenchange`](https://www.w3api.com/HTML/onvolumechange/) el cual nos permite controlar cambios de volumen en vídeos [HTML5](https://www.manualweb.net/html5/). Así que volvemos a registrar una función para cuando se produzca el evento [`onvolumenchange`](https://www.w3api.com/HTML/onvolumechange/).


```javascript
mivideo.onvolumechange = function() {
	info.innerHTML = info.innerHTML + "Volumen cambiado a " + mivideo.volume + "<br>";
	barra.value = mivideo.volume;
};
```


Lo que hacemos el volcar sobre la capa de información el nuevo valor correspondiente al volumen que nos proporciona la propiedad [`volume`](https://www.w3api.com/HTMLDOM/HTMLMediaElement/volume/). De esta manera sabemos en que posición se ha quedado el volumen. Además actualizamos la barra del elemento [`range`](https://www.w3api.com/HTML/range/) para asignarle el nuevo valor.


### Forzar no poder subir el volumen del vídeo HTML5


Además de controlar el nuevo valor del volumen del vídeo. En los cambios de volumen en vídeos [HTML5](https://www.manualweb.net/html5/) podemos forzar a que el volumen no pase de un rango o bien a que se quede siempre en el mismo volumen.


Es por ello que cuando hemos registrado el evento [`onvolumenchange`](https://www.w3api.com/HTML/onvolumechange/) vamos a añadir también este forzado de volumen. Para ello añadimos la siguiente línea de código:


```javascript
mivideo.onvolumechange = function() {
	info.innerHTML = info.innerHTML + "Volumen cambiado a " + mivideo.volume + "<br>";
	// Ajustamos la barra al volumen seleccionado en el vídeo				
	barra.value = mivideo.volume;

	// Podemos forzar a que no se suba el volumen
	mivideo.volume = 0.1;
};
```


Vemos que nuevamente acudimos a la propiedad [`volume`](https://www.w3api.com/HTMLDOM/HTMLMediaElement/volume/) para dicho forzado. De esta forma ya tendremos el código completo para controlar cambios de volumen en vídeos [HTML5](https://www.manualweb.net/html5/).

