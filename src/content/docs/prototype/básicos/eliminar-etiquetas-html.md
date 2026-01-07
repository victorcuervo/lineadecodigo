---
title: "Eliminar etiquetas HTML"
description: "El método stripTags se utiliza para eliminar etiquetas HTML de un texto ingresado en un formulario."
date: 2007-02-20
updatedDate: 2026-01-07
tags: ["input","form","striptags","$F","textarea"]
slug: prototype/basicos/eliminar-etiquetas-html
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_prototype/blob/master/basico/eliminar-etiquetas-html.html
topic: prototype
---

En ciertas situaciones manejamos contenidos de texto que van mezclados con etiquetas [HTML](http://www.manualweb.net/html). Los cuales nos interesa que sean procesados sin dichas etiquetas.


Un claro ejemplo sería para evitar que introduzcan texto [HTML](http://www.manualweb.net/html) en los comentarios de una página. Evitando el efecto no deseado. Aunque también sería util para otros casos.


El framework de [Prototype](http://lineadecodigo.com/categoria/prototype/) nos proporciona un método sencillo para hacer esta limpieza de código. El método es stripTags(). Simplemente habrá que aplicar dicho método sobre una cadena de texto. Así podríamos tener la siguiente línea de código:


```javascript
"<div>Este es <br/>mi texto</div>".stripTags();
```


La idea en este ejemplo es tener un área de texto donde podamos poner el texto que queramos (etiquetas [HTML](http://www.manualweb.net/html) incluidas) y utilizar el método stripTags() para eliminar dichos códigos.


Lo primero será el crear el textarea:


```html
<form>
  <textarea rows="10" cols="20" id="texto">
Texto por defecto
</textarea
  ><br />
</form>
```


Ahora la idea será el tener un botón que nos ayude a realizar nuestra "limpieza de [HTML](http://www.manualweb.net/html)". Para ello lo primero que hay que hacer es obtener la información del textarea.


En este caso nos apoyaremos en otra función de [Prototype](http://lineadecodigo.com/categoria/prototype/). Esta será $F('elementoFormulario'). Esta función devolverá el contenido del elemento cuyo nombre pasemos como parámetro.


De esta manera el código del botón quedará de la siguiente forma dentro del formulario:


```html
<input
  type="button"
  value="Eliminar HTML"
  onClick="alert($F('texto').stripTags());"
/>
```


Se me olvidaba. Para cargar el framework [Prototype](http://lineadecodigo.com/categoria/prototype/) simplemente nos apoyamos en el elemento `script` mediante la cual indicaremos la librería prototype.js.

