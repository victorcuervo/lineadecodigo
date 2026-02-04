---
title: "Autocompletar formularios con HTML5"
description: "Descubre cómo autocompletar formularios con HTML5 para mejorar la experiencia del usuario. Controla el autocompletado activando o desactivando este útil atributo."
date: 2012-04-19
updatedDate: 2026-01-21
tags: ["form","autocomplete"]
slug: html/formularios/autocompletar-formularios-con-html5
author: victor_cuervo
type: doc
topic: html
id: 119e1abe-4859-4ad0-b234-50af636d2705
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Formularios/autompletar-formulario.html
---

Seguro que cuando estás rellenando un formulario muchas de las veces te empieza a ofrecer opciones de autocompletado de los datos. Empiezas a escribir tu nombre y ya te ofrece varias opciones. E incluso, introduciendo un solo campo te rellena varios del formulario.


No en vano [el autocompletar de los formularios es una de las cosas que más está potenciando los navegadores](http://www.ayudaenlaweb.com/navegadores/autorellenar-formularios-con-google-chrome/).


## Controlar el autocompletado


Ahora con [HTML5](https://www.manualweb.net/html5/) vamos a poder controlar el aspecto de autocompletar los formularios. Así mediante código podremos decir si queremos que el formulario sea autocompletable o no.


Para controlar el autocompletar de los formularios con [HTML5](https://www.manualweb.net/html5/) tenemos el atributo [autocomplete](https://www.w3api.com/HTML/input/autocomplete/). Atributo al cual deberemos de pasar un valor booleano.


## Autocompletado activado


Así podemos tener un formulario con el autocompletar del formulario activado. Es decir con el atributo [autocomplete](https://www.w3api.com/HTML/input/autocomplete/) a **"on"**:


```html
<form action="formulario.html" method="post" autocomplete="on">
  <label for="nombre">Nombre:</label>
  <input type="text" name="nombre" id="nombre"/>
  <label for="apellidos">Apellidos:</label>
  <input type="text" name="apellidos" id="apellidos"/>
  <input type="submit" value="Enviar"/>
</form>
```


## Autocompletado desactivado


O un formulario con el autocompletar del formulario desactivado. Es decir, con el atributo [autocomplete](https://www.w3api.com/HTML/input/autocomplete/) a **"off"**:


```html
<form action="formulario.html" method="post" autocomplete="off">
  <label for="nombre">Nombre:</label>
  <input type="text" name="nombre" id="nombre"/>
  <label for="apellidos">Apellidos:</label>
  <input type="text" name="apellidos" id="apellidos"/>
  <input type="submit" value="Enviar"/>
</form>
```


Un simple atributo en [HTML5](https://www.manualweb.net/html5/) con mucha capacidad de control.

