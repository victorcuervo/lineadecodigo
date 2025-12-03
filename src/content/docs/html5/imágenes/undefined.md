---
title: Zoom en imágenes con el ratón en HTML5
description: "Uso del evento onwheel y la función scale() para poder crear un sistema que nos permita realizar un zoom en imágenes con el ratón en HTML5."
lastupdates: 2024-01-29
author: victor_cuervo
---

Uno de los elementos que más aparecen en las páginas web son las imágenes. Bien sean decorativas o bien representativas. En el caso de hoy vamos a ver cómo podemos implementar el control de zoom sobre imágenes con el ratón en [HTML5](https://www.manualweb.net/html5/). La idea es que el usuario, cuando se posicione sobre una imagen pueda hacer zoom bien mediante la rueda del ratón o bien utilizando movimientos gestuales sobre un trackpad o una ventana visual.


Esto nos servirá mucho si tenemos algunos casos de uso como:

- **Detalles de productos en aplicaciones de e-commerce,** donde los usuarios necesitan examinar minuciosamente las características y acabados de los artículos antes de realizar una compra.
- **Galerías de fotografías profesionales o artísticas,** donde es importante apreciar los detalles finos y la composición de cada imagen con precisión.
- **Herramientas de Mapas interactivos,** que requieren una navegación fluida para explorar diferentes niveles de detalle en la cartografía digital.
- **Revistas puestas como imágenes,** permitiendo a los lectores examinar el contenido editorial y las ilustraciones con mayor detalle.

### Colocando la imagen dentro de una capa


A la hora de implementar el control de zoom sobre imágenes con el ratón en [HTML5](https://www.manualweb.net/html5/) lo primero que haremos será [poner una imagen dentro de la página web](https://lineadecodigo.com/html/alto-y-ancho-de-una-imagen-con-html/) mediante el elemento [`img`](https://www.w3api.com/HTML/img/). Algo muy sencillo que haremos de la siguiente forma:


```html
<img id="zoomImage" src="imagen.jpg" style="width: 100%; height: auto;">
```


Pero, como queremos hacer zoom sobre la imagen y que esta se quede en un recuadro, es decir no queremos que la imagen crezca de forma indiscriminada por la página, lo que haremos será el poner la imagen dentro de un recuadro que representaremos como una capa de un elemento [`div`](https://www.w3api.com/HTML/div/).


```html
<div class="zoom-container">
  <img id="zoomImage" src="imagen.jpg" style="width: 100%; height: auto;">
</div>
```


Vamos a ajustar el estilo de esta capa para que tenga un tamaño concreto mediante las propiedades [`width`](https://www.w3api.com/CSS/width/) y [`height`](https://www.w3api.com/CSS/height/) de [CSS](https://www.manualweb.net/css/) y sobre todo vamos a indicar que oculte el desborde de la imagen por la capa, ya que cuando crezca la imagen se producirá un desborde. Esto lo conseguimos mediante la propiedad [`overflow`](https://www.w3api.com/CSS/overflow/).


```css
.zoom-container {
	width: 300px;
	height: 300px;
	overflow: hidden;
	border: 2px solid #000;
	position: relative;
}
```


### Manejar el evento onwheel para controlar el zoom en imágenes con el ratón en HTML5


Una vez que tenemos la imagen insertada dentro de la página web pasaremos a controlar el evento de zoom. El evento de zoom es el evento [`onwheel`](https://www.w3api.com/HTML/onwheel/) y lo registramos asociado a la imagen.


Es por ello que recuperamos un puntero sobre la imagen que hemos insertado utilizando su [`id`](https://www.w3api.com/HTML/id/) y el método [`getElementById()`](https://w3api.com/DOM/Document/getElementById/) .


```javascript
const img = document.getElementById('zoomImage');
img.onwheel = function(event) { ... };
```


Ahora pasamos a codificar las acciones con el zoom.


### Cambiando el tamaño de la imagen mediante scale


Para poder cambiar el tamaño de la imagen y asociarlo al evento tenemos que conocer dos partes. Por un lado el valor del ratón, para ello tenemos el interface [`WheelEvent`](https://www.w3api.com/WebAPI/WheelEvent/) con la propiedad [`deltaY`](https://www.w3api.com/WebAPI/WheelEvent/deltaY/) que ofrece un valor en punto flotante sobre cómo va creciendo o decreciendo el valor. Por otro está la escala de la imagen, es decir, como es el alto y ancho de una imagen, esto lo podemos manipular mediante la propiedad [`transform`](https://www.w3api.com/CSS/transform/) de los estilos y la función [`scale()`](https://www.w3api.com/CSS/scale/).


Lo que vamos a definir también es un valor de escala inicial y otro de cambio de escala.


```javascript
let scale = 1;
const scaleFactor = 0.1;
```


Ahora según vamos recibiendo valores de la propiedad [`deltaY`](https://www.w3api.com/WebAPI/WheelEvent/deltaY/) lo que haremos es, si son negativos aumentar la escala y si son positivos decrementar la escala controlando que no podemos a dejarlo sin visualizarse.


```javascript
if (event.deltaY < 0) {
  scale += scaleFactor;
} else {
  scale -= scaleFactor;
  if (scale < scaleFactor) {
    scale = scaleFactor;
  }
}
```


El valor final de la escala lo asociamos a la propiedad [`transform`](https://www.w3api.com/CSS/transform/) mediante la función [`scale()`](https://www.w3api.com/CSS/scale/):


```javascript
img.style.transform = `scale(${scale})`;
```


Por lo que el código para hacer el zoom nos quedaría de la siguiente forma:


```javascript
let scale = 1;
const scaleFactor = 0.1;

img.onwheel = function(event) {
	event.preventDefault();
	if (event.deltaY < 0) {
	  scale += scaleFactor;
	} else {
	  scale -= scaleFactor;
	  if (scale < scaleFactor) {
	    scale = scaleFactor;
	  }
	}
	img.style.transform = `scale(${scale})`;
};
```


De esta forma ya habremos conseguido tener nuestro código para implementar el control de zoom sobre imágenes con el ratón en [HTML5](https://www.manualweb.net/html5/).

