---
title: "Posicionarse en el primer elemento de un formulario"
description: "El artículo explica cómo posicionarse en el primer elemento de un formulario utilizando el framework Prototype."
date: 2007-03-01
updatedDate: 2026-01-07
tags: ["form","focusfirstelement"]
slug: prototype/formularios/posicionarse-en-el-primer-elemento-de-un-formulario
type: doc
topic: prototype
id: 2c8a9dfb-adca-8197-b977-d40895dbc7ce
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_prototype/blob/master/formularios/posicionar-primer-elemento-formulario.html
---

Si queremos facilitar la vida a nuestros usuarios, nos deberemos de preocupar de ayudarles a la hora de manipular nuestras páginas [HTML](http://www.manualweb.net/html). Por ejemplo, si tenemos un formulario para capturar los datos, una gran ayuda para el usuario será el posicionarse el cursor en el primer campo del formulario.


El framework javascript [Prototype](http://lineadecodigo.com/categoria/prototype/) nos ayuda a realizarlo de una forma muy sencilla. Y es que [Prototype](http://lineadecodigo.com/categoria/prototype/) tiene un objeto Form, el cual tiene una gran cantidad de métodos para manipular los formularios: habilitarlos, deshabilitarlos, limpiarles,... y, por supuesto, para posicionarnos en el primer elemento del formulario.


En este caso, el método para posicionarnos en el primer elemento será .focusFirstElement, el cual recibirá el formulario (el propio formulario, no el id que identifica el formulario) que queremos manipular.


```javascript
Form.focusFirstElement(formulario);
```


Para pasarle el formulario como parámetro nos podemos apoyar en otra función de [Prototype](http://lineadecodigo.com/categoria/prototype/). La función $. Esta simple función nos devuelve un elemento DOM pasándole el id del elemento como parámetro.


De esta manera el código nos quedaría de la siguiente forma:


```javascript
Form.focusFirstElement($("peticion"));
```


Es importante saber que para que nuestro código funcione (en nuestro ejemplo), el formulario se tiene que identificar mediante el nombre 'peticion'. Es por ello que el formulario sería algo así:


```html
<form id="peticion"></form>
```


Lo bueno de este código es que se posiciona en el primer elemento habilitado. Es decir, que si los primeros campos están deshabilitados o son de solo consulta, los omite. De esta manera se situaría en el primer campo hábil.


Y no se os olvide cargar el framework [Prototype](http://lineadecodigo.com/categoria/prototype/) en la cabecera de la página.

