---
title: Formulario en Ventana Dialogo con HTML5
description: "Uso del elemento dialog para poder mostrar un formulario en ventana dialogo con HTML5 y cómo recuperar la información introducida."
lastUpdated: 2023-01-28
slug: /html5/formulario-en-ventana-dialogo-con-html5/
author: victor_cuervo
---

En ciertas circunstancias de diseño de nuestra web necesitamos que el usuario tenga foco en los datos que tiene que introducir, y es por ello que vamos a ver cómo podemos mostrar un formulario en ventana dialogo con [HTML5](https://www.manualweb.net/html5/). De esta forma mostraremos el formulario dentro de una ventana de dialogo dejando bloqueado todo lo que hay detrás de la página y así consiguiendo que el usuario haga foco.


Pero lo primero de todo es saber, ¿cómo se genera una ventana modal en [HTML5](https://www.manualweb.net/html5/)? Pues para ello hay que conocer el elemento [`dialog`](https://w3api.com/HTML/dialog/). El elemento [`dialog`](https://w3api.com/HTML/dialog/) nos permite definir el contenido de una ventana modal, de tal manera que los elementos que incluyamos dentro del elemento [`dialog`](https://w3api.com/HTML/dialog/) no se mostrarán hasta que no carguemos la ventana modal.


La estructura del elemento [`dialog`](https://w3api.com/HTML/dialog/) es la siguiente:


```html
<dialog open>...</dialog>
```


Ahora lo que tenemos que hacer es insertar los elementos dentro del elemento [`dialog`](https://w3api.com/HTML/dialog/). Ya que vamos a crear un formulario, un formulario de búsqueda, lo que insertaremos será lo siguiente:


```html
<dialog id="buscador">
	<form action="https://lineadecodigo.com/search" method="dialog">
	  <label for="busqueda">¿Qué quieres buscar?</label>
	  <input type="search" id="busqueda" name="q"/>
	  <input type="submit" value="Buscar"/>
	  <input id="cancelar" type="submit" value="Cancelar"/>
	</form>
</dialog>
```


Vemos que hemos utilizado un elemento [`form`](https://w3api.com/HTML/form/) que representa un formulario y los típicos elementos [`input`](https://w3api.com/HTML/input/) para poder poner un cuadro de texto de búsqueda, así como un par de botones de envío y cancelación.


Una de la cosa que habrás notado en el código es que el formulario, dentro de su campo [`method`](https://www.w3api.com/HTML/form/method/), sitio dónde típicamente [se indica el tipo de envío del formulario por si es GET o si es POST](https://manualweb.net/html/estructura-envio-formularios-html/#tipo-de-env%C3%ADo-get-y-post), es que tiene un valor de **“dialog”**. Y es que el valor **“dialog”** aparece en [HTML5](https://www.manualweb.net/html5/) para cuando el formulario se encuentra dentro de un elemento [`dialog`](https://w3api.com/HTML/dialog/). Indicando este valor lo que sucede es que se cierra la ventana de dialogo y se genera un evento de envío de información, pero sin enviar los datos. Es decir, nos tenemos que preocupar de enviar los datos, si es lo que queremos.


Ahora lo que tendremos que hacer será controlar este formulario dentro del elemento [`dialog`](https://w3api.com/HTML/dialog/). En primer lugar lo que tendremos que hacer será el mostrar la ventana modal. Para ello lo que hacemos es invocar el método [`.showModal()`](https://www.w3api.com/HTMLDOM/HTMLDialogElement/showModal/) del elemento [`dialog`](https://w3api.com/HTML/dialog/).


```javascript
var mostrarBuscador = document.getElementById('mostrarBuscador');

// Mostramos el buscador
mostrarBuscador.addEventListener('click', function() {
  dialogo.showModal();
});
```


> El método [`.showModal()`](https://www.w3api.com/HTMLDOM/HTMLDialogElement/showModal/) se encuentra definido dentro del interface [`HTMLDialogElement`](https://www.w3api.com/HTMLDOM/HTMLDialogElement/), el cual contiene los métodos y propiedades para poder interactuar con el elemento [`dialog`](https://w3api.com/HTML/dialog/) mediante código [Javascript](https://www.manualweb.net/javascript/).


Lo siguiente será gestionar el cierre de la ventana modal. Esta la podemos cerrar programáticamente mediante la invocación al método [`.close()`](https://www.w3api.com/HTMLDOM/HTMLDialogElement/close/) del [`HTMLDialogElement`](https://www.w3api.com/HTMLDOM/HTMLDialogElement/) o cuando se produce el submit del formulario.


Así, sobre el elemento [`dialog`](https://w3api.com/HTML/dialog/) gestionamos un evento “close” el cual asociamos utilizando un método [`.addEventListener()`](https://www.w3api.com/DOM/EventTarget/addEventListener/).


```java
var dialogo = document.getElementById('buscador');
var busqueda = document.getElementById('busqueda');

dialogo.addEventListener('close', function(){
	if (dialogo.returnValue == "Buscar")       
	  console.log('Quieres buscar ' + busqueda.value);
	else
	  console.log('Parece que no quieres buscar nada');
})
```


Cuando se cierre la ventana modal podremos, por un lado, el poder acceder a los elementos que la conformaban, es por ello que vemos en el código que accedemos al campo de texto para ver el valor que ha introducido el usuario para su búsqueda. Pero, por otro, podemos ver el valor que devuelve la ventana modal. Y es que el atributo [`returnValue`](https://www.w3api.com/HTMLDOM/HTMLDialogElement/returnValue/) contiene el valor del botón que se pulsó para salir de la ventana. Así sabremos su el usuario pulsó sobre el botón **“Buscar”** o sobre el botón **“Cancelar”**.


De esta forma ya sabremos cómo podemos mostrar un formulario en ventana dialogo con [HTML5](https://www.manualweb.net/html5/) y cómo gestionar la respuesta del mismo.

