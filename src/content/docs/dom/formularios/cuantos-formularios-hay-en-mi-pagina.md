---
title: "¿Cuántos formularios hay en mi página?"
description: "Código Javascript que me nos ayuda a saber cuántos formularios hay en mi página web."
date: 2008-02-27
updatedDate: 2026-01-13
tags: ["form","forms"]
slug: dom/formularios/cuantos-formularios-hay-en-mi-pagina
author: victor_cuervo
type: doc
topic: dom
id: 2c8a9dfb-adca-8192-a538-d6f886afe58b
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/formularios/numero-de-formularios.html
---

Los formularios son los elementos [HTML](https://www.manualweb.net/html/) que nos permiten recoger información del usuario y enviarla a un servidor. Los formularios pueden contener elementos gráficos o simplemente contener la información para el envío de datos y permanecer ocultos. Los formularios forman parte de la estructura de la página y por lo tanto del [DOM](https://www.w3api.com/DOM/). Esto nos abre la posibilidad de acceder a ellos, modificar su información, y como en este ejemplo, simplemente conocer cuántos formularios componen nuestra página.


## Insertar formularios en la página


Lo primero será insertar los formularios en nuestra página. Por ejemplo:


```html
<form id="incidencia">
	<textarea cols="10" rows="4"></textarea>
</form>

<form id="form_test">
	<button>Boton</button>
</form>

<form id="oculto"></form>
```


## Acceder al DOM con Javascript


Ahora utilizamos el lenguaje [Javascript](https://www.manualweb.net/javascript/) para acceder al [DOM](https://www.w3api.com/DOM/). La colección que nos da acceso a los formularios es `document.forms` y el método que nos da el número de formularios es `.length`.


Así simplemente tendremos que añadir la siguiente línea a [Javascript](http://www.manualweb.net/tutorial-javascript/):


```javascript
document.write("El número de formularios es " + document.forms.length);
```


Un ejemplo muy sencillo que nos ayuda a saber cuántos formularios hay en mi página web.

