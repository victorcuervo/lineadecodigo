---
title: "Todos los campos del formulario obligatorios"
description: "Aprende a hacer obligatorios todos los campos de un formulario con wForms usando la clase allrequired. Simplifica la validación de formularios."
date: 2007-10-28
updatedDate: 2026-02-09
tags: ["required","div","allrequired"]
slug: wforms/basicos/todos-los-campos-del-formulario-obligatorios
type: doc
topic: wforms
id: 2c8a9dfb-adca-810e-9a34-e34ec14e5a52
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_wforms/blob/master/todos-los-campos-formulario-obligatorios.html
---

De una forma muy sencilla y utilizando [wForms](http://lineadecodigo.com/wforms/) haremos que un conjunto de campos de un formulario se conviertan en obligatorios.


En el artículo [Campos obligatorios de un formulario con wForms](http://lineadecodigo.com/wforms/campos-obligatorios-de-un-formulario-con-wforms/) podíamos ver como conseguir que un campo fuese obligatorio, indicándoselo directamente al campo. En este caso haremos que un conjunto de elementos de un formulario sean obligatorios.


## Crear el formulario


Lo primero que vamos a escribir son los campos del formulario que queremos que sean obligatorios. El formulario va a ser algo sencillo: un campo de texto, un área de texto y uno de selección.


```html
<form>
<label for="texto">Texto:</label><input type="text" id="texto"><br/>
<label for="area">Area:</label><textarea rows="10" cols="20" id="area"></textarea><br/>
<label for="seleccion">Seleccion:</label>
<select id="seleccion">
<option value="">Seleciona una opción...</option>
<option value="1">Uno</option>
<option value="2">Dos</option>
<option value="3">Tres</option>
</select><br/>
<input type="submit" value="Enviar"/>
</form>
```


## Aplicar la clase allrequired


Para delimitar los campos del formulario que queremos que sean obligatorios, los vamos a rodear por una capa [`div`](https://www.w3api.com/HTML/div/). Además a esta capa le vamos a asignar la clase "allrequired" definida en [wForms](http://lineadecodigo.com/wforms/) mediante el atributo class.


```html
<form>
<div class="allrequired">
<label for="texto">Texto:</label><input type="text" id="texto"><br/>
<label for="area">Area:</label><textarea rows="10" cols="20" id="area"></textarea><br/>
<label for="seleccion">Seleccion:</label>
<select id="seleccion">
<option value="">Seleciona una opción...</option>
<option value="1">Uno</option>
<option value="2">Dos</option>
<option value="3">Tres</option>
</select><br/>
</div>
<input type="submit" value="Enviar"/>
</form>
```


## Cargar la librería wForms


Ya, solo nos quedará el instanciar la librería [wForms](http://lineadecodigo.com/wforms/). Para ello añadiremos en la cabecera el siguiente código [JavaScript](https://lineadecodigo.com/javascript/):


```html
<script type="text/javascript" src="wforms.js"></script>
```

