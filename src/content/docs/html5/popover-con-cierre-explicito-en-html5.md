---
title: Popover con cierre explicito en HTML5
description: "Crear un popover con cierre explícito en HTML5 utilizando el valor \"manual\" en su forma de mostrarse y en el método hidePopover() para ocultarlo."
lastUpdated: 2025-02-17
slug: /html5/popover-con-cierre-explicito-en-html5/
author: victor_cuervo
---

En el artículo de hoy vamos a ver cómo crear un popover con cierre explícito en [HTML5](https://www.manualweb.net/html5/), es decir, que haya que cerrar mediante un botón o una imagen de un aspa la ventana emergente y que no sirva simplemente con pulsar fuera del mensaje. Ya hemos visto que la evolución del [lenguaje HTML5](https://lineadecodigo.com/categoria/html5/) nos ha ofrecido nuevos [elementos como popover para mostrar ventanas emergentes](https://lineadecodigo.com/html5/mensajes-emergentes-con-popover-en-html5/). Pero, en ese caso, vimos como aplicar un elemento [`popover`](https://www.w3api.com/HTML/popover/) con un cierre sencillo al pulsar fuera de la ventana emergente.


### Crear un popover con cierre explícito en HTML5


Lo primero que tenemos que hace es utilizar el elemento [`popover`](https://www.w3api.com/HTML/popover/) para crear nuestro mensaje emergente. Si recordamos la sintaxis de este [atributo de HTML](https://w3api.com/HTML/tag/atributo-html/) vemos que hay varias formar de abrirlo.


```html
popover = auto | manual | hint
```


Por defecto, el elemento [`popover`](https://www.w3api.com/HTML/popover/) se abre en un modelo `“auto”`, que es el que permite cerrar el mensaje emergente simplemente haciendo click fuera del mensaje. En este caso, para poder crear un popover con cierre explícito en [HTML5](https://www.manualweb.net/html5/) vamos a abrirlo con el tipo `“manual”`. Por lo tanto codificamos el elemento [`popover`](https://www.w3api.com/HTML/popover/) de la siguiente forma:


```html
<div popover="manual" id="pop1">
	<h2>Este es un popover de HTML5</h2>
  <img src="imagen.png" alt="Imagen de Ejemplo">        
</div>
```


Ahora lo que necesitamos es crear nuestro botón que permita mostrar el popover en la pantalla del [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/). Para ello utilizamos el siguiente código que se apoya en el atributo [`popovertarget`](https://www.w3api.com/HTML/button/popovertarget/) del elemento [`button`](https://www.w3api.com/HTML/button/):


```html
<button popovertarget="pop1">Abrir Mensaje</button>
```


Vemos que tanto el atributo [`id`](https://www.w3api.com/HTML/id/) del elemento [`popover`](https://www.w3api.com/HTML/popover/) como el elemento [`popovertarget`](https://www.w3api.com/HTML/button/popovertarget/) del elemento [`button`](https://www.w3api.com/HTML/button/) coinciden.


Ya tenemos de un mensaje emergente, el cual, además, no puede cerrarse simplemente tocando fuera de él. Es por ello que tenemos que añadirle más elementos.


### Gestión del cierre del popover en Javascript


Lo primero que haremos será crear un elemento [`button`](https://www.w3api.com/HTML/button/) dentro del elemento [`popover`](https://www.w3api.com/HTML/popover/). Y es que, este elemento botón, será el que nos ayude a cerrar la ventana emergente.


```html
<div popover="manual" id="pop1">
  <h2>Este es un popover de HTML5</h2>
	<img src="imagen.png" alt="Imagen de Ejemplo">
  <button>Cerrar Ventana</button>
</div>
```


En vez de este botón podríamos haber añadido una imagen con un aspa, un simple enlace o cualquier otro elemento que fuese accionable para poder realizar el cierre de la ventana.


Ahora lo que vamos añadir el es [código Javascript](https://lineadecodigo.com/categoria/javascript/) que nos permite cerrar la ventana. Para ello tenemos que llamar al método [`hidePopover()`](https://www.w3api.com/HTMLDOM/HTMLElement/hidePopover/) sobre el elemento que contiene el mensaje emergente.


El método [`hidePopover()`](https://www.w3api.com/HTMLDOM/HTMLElement/hidePopover/) es un método del modelo DOM que se encuentra dentro del elemento base [`HTMLElement`](https://www.w3api.com/HTMLDOM/HTMLElement/).


Para ello nos apoyamos en un evento [`onclick`](https://www.w3api.com/HTML/onclick/) sobre el elemento [`button`](https://www.w3api.com/HTML/button/) para poder asociar este cierre del mensaje.


```html
<div popover="manual" id="pop1">
  <h2>Este es un popover de HTML5</h2>
	<img src="imagen.png" alt="Imagen de Ejemplo">
  <button onclick="pop1.hidePopover()">Cerrar Ventana</button>
</div>
```


De esta forma ya habremos conseguido crear un popover con cierre explicito en [HTML5](https://www.manualweb.net/html5/) que cerramos mediante [código Javascript](https://lineadecodigo.com/categoria/javascript/).

