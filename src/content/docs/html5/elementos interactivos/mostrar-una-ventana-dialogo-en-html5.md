---
title: "Mostrar una ventana dialogo en HTML5"
description: "Ejemplo de cómo se puede gestionar el elemento dialog y poder mostrar una ventana dialogo en HTML5 mediante Javascript."
date: 2024-01-15
updatedDate: 2026-01-06
tags: ["dialog","HTML5 Básicos"]
slug: html5/elementos-interactivos/mostrar-una-ventana-dialogo-en-html5
author: victor_cuervo
type: doc
id: d5700bc9-a1df-4a98-a513-5bdb9bfb51f5
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Basicos/ventana-dialogo.html
---

Mostrar una ventana dialogo en [HTML5](https://www.manualweb.net/html5/) no es algo que sea nuevo ya que durante mucho tiempo se han intentado gestionar ventanas emergentes dentro de las páginas web. Ya, en los primeros momentos de la web, los métodos [`alert()`](https://www.w3api.com/DOM/Window/alert/) y [`confirm()`](https://www.w3api.com/DOM/Window/confirm/) nos permitían gestionar o crear estas ventanas emergentes.


En [HTML5](https://www.manualweb.net/html5/) tenemos el elemento [`dialog`](https://www.w3api.com/HTML/dialog/), el cual nos permite representar el contenido que queremos mostrar dentro de la ventana de dialogo. Así, la estructura del elemento [`dialog`](https://www.w3api.com/HTML/dialog/) es la siguiente:


```html
<dialog>
  <!-- Contenido del Dialogo -->
</dialog>
```


Por lo que vamos a rellenar el dialogo de contenido, por ejemplo, insertaremos un párrafo de texto mediante el elemento [`p`](https://www.w3api.com/HTML/p/) y un par de botones. En este caso añadimos dos botones mediante el elemento [`button`](https://www.w3api.com/HTML/button/). Es importante incluir botones dentro de la ventana de dialogo ya que es lo que nos permitirá el salir de dicha ventana de dialogo.


```html
<dialog id="dialogo">
  <p>¿Te gusta este ejemplo?</p>
  <menu>
    <button id="cancel" type="button">Cancel</button>
    <button id="ok" type="button">OK</button>
  </menu>
</dialog>
```


Además hemos puesto las opciones de los botones dentro de un elemento [`menu`](https://www.w3api.com/HTML/menu/) para que queden agrupadas.


Tenemos que saber que el insertar este elemento [`dialog`](https://www.w3api.com/HTML/dialog/) dentro de la página no hará que se muestre al usuario. Es decir, permanece oculto. Para poder mostrar la ventana de dialogo deberemos de recurrir a código en [Javascript](https://www.manualweb.net/javascript/) para poder mostrarla.


El elemento [`dialog`](https://www.w3api.com/HTML/dialog/) es representado dentro del modelo [DOM](https://www.manualweb.net/dom/) de las páginas web mediante el interface [HTMLDialogInterface](https://www.w3api.com/HTMLDOM/HTMLDialogElement/). Es interface nos enseña que existe un método [`.show()`](https://www.w3api.com/HTMLDOM/HTMLDialogElement/show/) que es el que nos permite mostrar el contenido del elemento [`dialog`](https://www.w3api.com/HTML/dialog/) y por lo tanto mostrar la ventana modal. Así que asociaremos este método [`.show()`](https://www.w3api.com/HTMLDOM/HTMLDialogElement/show/) a un botón para poder mostrar la ventana.


```html
<body>
  <button id="mostrar">Mostrar la Ventana</button>
  <script>
    var boton = document.getElementById("mostrar");    
		var dialogo = document.getElementById("dialogo");

    boton.addEventListener("click", function(){        
        dialogo.showModal();
    });
	</script>
</body>
```


Vemos que nos hemos apoyado en el método [`.getElementById()`](https://www.w3api.com/DOM/Document/getElementById/) para poder acceder al elemento dialog que hay en nuestra página, vía el id que le habíamos asignado.


De igual manera, el interface X nos enseña que tiene un método [`.close()`](https://www.w3api.com/HTMLDOM/HTMLDialogElement/close/) que es el que nos sirve para poder cerrar una ventana modal, y por lo tanto dejar de mostrar el contenido que tenemos en el elemento [`dialog`](https://www.w3api.com/HTML/dialog/).


```html
<script>
		var dialogo = document.getElementById("dialogo");
    var botonCancelar = document.getElementById("cancel");
    var botonOK = document.getElementById("ok");

    botonCancelar.addEventListener('click', function() {
        dialogo.close();
    });

    botonOK.addEventListener('click', function() {
        dialogo.close();
    });

  </script>
```


De esta forma ya habremos conseguido mostrar una ventana dialogo en [HTML5](https://www.manualweb.net/html5/) mediante el uso del elemento [`dialog`](https://www.w3api.com/HTML/dialog/).

