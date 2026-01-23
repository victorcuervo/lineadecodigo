---
title: "Música aleatoria con HTML5"
description: "Descubre cómo implementar música aleatoria con HTML5 en tu página web. Aprende a crear un reproductor dinámico y ofrece una experiencia auditiva única a tus usuarios."
date: 2016-10-19
updatedDate: 2026-01-23
tags: ["audio","controls","getelementbyid","math","random","play"]
slug: html/audio/musica-aleatoria-con-html5
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Audio/musica-aleatoria.html
topic: html

---

Algunos nos habéis pedido sobre cómo poner música aleatoria con [HTML5](https://www.manualweb.net/html5/) o música al azar, dentro de vuestras páginas web. En este artículo vamos a ver cómo podemos llevarlo a cabo.


Lo primero que tenemos que controlar es el elemento [`audio`](http://www.w3api.com/HTML/audio/) que nos brinda [HTML5](https://www.manualweb.net/html5/) para poder poner música de una forma sencilla en nuestra web.


```html
<audio controls="controls"></audio>
```


Otra de las cosas que debemos de saber es que para poner una pista de audio podemos hacerlo mediante el atributo [`src`](http://www.w3api.com/HTML/source/src/) del elemento [`audio`](http://www.w3api.com/HTML/audio/) o bien anidando el elemento [`source`](http://www.w3api.com/HTML/source/).


```html
<audio controls="controls"> 
  <source src="mimusica.ogg" type="audio/ogg" />
</audio>
```


Esta segunda estructura es la que vamos a utilizar para poder montar la música aleatoria con [HTML5](https://www.manualweb.net/html5/), si bien lo que haremos será construirla y modificarla directamente mediante [Javascript](https://www.manualweb.net/javascript/).


Lo primero será definir un array que contenga el listado de canciones y el archivo de audio que lo representa.


```javascript
var lista = [
  ['nirvana.ogg','Nirvana - Lithium (Live at Reading 1992)'],
  ['blur.ogg','Blur - Country House'],
  ['weezer.ogg','Weezer - Buddy Holly']];
```


Vemos que el array es multidimensional. Es decir, cada una de las posiciones contiene a su vez un array de dos posiciones donde la primera es el nombre de la pista de audio y el segundo es el título de la canción.


Como somos muy detallistas vamos a construir una lista para indicarle al usuario las canciones que tiene disponibles. Creamos una capa a la que llamemos "listado" en la página y regeneramos el contenido mediante el siguiente código:


```javascript
var listado = document.getElementById("listado");
for (x=0;x<lista.length;x++) {
	var item = document.createElement("li");
	item.innerHTML = lista[x][1];
	listado.appendChild(item);
}
```


Ahora vamos a cargar una de las canciones de forma aleatoria. Como tiene que ser una canción aleatoria generaremos un número aleatorio entre 0 y el tamaño de la lista ayudándonos del objeto [`Math`](https://www.w3api.com/Javascript/Math/)


```javascript
numero = Math.round(Math.random()*(lista.length-1));
```


Ya tenemos un número aleatorio, con dicho número acudiremos a la lista y montaremos de forma dinámica un elemento [`source`](http://www.w3api.com/HTML/source/) con el contenido del array.


```javascript
var reproductor = document.getElementById("miaudio");

var source= document.createElement('source');
source.src=lista[numero][0];
source.type="audio/ogg";
	 
reproductor.appendChild(source);
```


Vemos que utilizamos los métodos `.createElement()` y `.appendChild()` para crear un nuevo elemento y para añadírselo al elemento de [`audio`](http://www.w3api.com/HTML/audio/).


Una vez construida la pista lo que haremos será el simular una carga de la canción mediante el método `.load()` del [`audio`](http://www.w3api.com/HTML/audio/) e iniciaremos la canción con el método `.play()`.


```javascript
reproductor.load();
reproductor.play();
```


Creamos una función que haga todo esta secuencia, a esta función la llamamos `.cargaCancion()`.


```javascript
function cargarCancion(numero){
		 
  // Cargamos la canción de forma dinámica
  var source= document.createElement('source');
  source.src=lista[numero][0];
  source.type="audio/ogg";
	 
  reproductor.appendChild(source);
	
  reproductor.load();
	
  var texto = document.getElementById("texto");
  texto.innerHTML = lista[numero][1];
	
}
```


Ya estará sonando una canción de forma aleatoria. Pero ahora nos queda un pequeño detalle, que cuando acabe la canción se cargue otra canción de forma aleatoria. Para ello deberemos de controlar el fin de la canción mediante el manejo del evento `"ended"` cómo ya explicábamos en el artículo ["Fin de Audio en HTML5"](http://lineadecodigo.com/html5/fin-del-audio-html5/).


```javascript
reproductor.addEventListener("ended", function(){
  cargarCancion(aleatorio());
});
```


Cuando acaba la canción volvemos a cargar otra de forma aleatoria y así habremos conseguido tener música aleatoria con [HTML5](https://www.manualweb.net/html5/) en nuestra página web.


## Actualizado mayo 2022


Como hay un control del "autoplay" para las canciones hemos añadido un botón para poder arrancar la canción de forma aleatoria y que no se arranque automáticamente, ya que se podrían haber dado circunstancias en las cuales no se pueda escuchar. Hay [información del "autoplay" en navegadores como Chrome que es interesante leer](https://developer.chrome.com/blog/autoplay/).


Creamos un sencillo botón para iniciar la canción.


```html
<button id="play">Pulsa para escuchar</button>
```


Y cuando hagamos click en él arrancaremos el reproductor.


```javascript
document.getElementById("play").addEventListener("click", function(){
 reproductor.play();
});
```

