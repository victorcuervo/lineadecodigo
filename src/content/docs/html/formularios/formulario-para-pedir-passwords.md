---
title: "Formulario para pedir passwords"
description: "Explicación de cómo crear un Formulario para pedir passwords en HTML mediante un campo de entrada de texto de tipo password."
date: 2006-11-13
updatedDate: 2026-01-06
tags: ["form","input","password"]
slug: html/formularios/formulario-para-pedir-passwords
type: doc
topic: html
id: 47f7e926-34b1-4e8b-8ca9-131f17178983
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_html/formularios/formulario-para-password.html
---

Si estamos con construyendo un [formulario HTML](http://www.manualweb.net/html/formularios-html/), bien para dar un alta de un usuario o bien para autentificarle en un proceso de login, vamos a **necesitar el utilizar campos de entrada donde no se pueda leer lo que se escribe**. Para ello vamos a ver cómo se construye un formulario para pedir passwords.


> Puedes consultar [todos los ejemplos que tiene Línea de Código para la construcción de elementos de formulario](http://lineadecodigo.com/tag/html-form/) y así aprovechar al máximo las capacidades que este elemento de [HTML](http://www.manualweb.net/html) nos ofrece.


Y es que cuando un usuario escribe su contraseña no es muy recomendable que sea legible. Ya que quien no nos dice que tenga a alguien detrás leyendo lo que está escribiendo y pueda comprometer la integridad de esa contraseña. Lo primero que tendremos que hacer es definir nuestro formulario. Para ello vamos a utilizar el elemento [`form`](http://www.w3api.com/wiki/HTML:FORM) de [HTML](http://www.manualweb.net/html). Los elementos del formulario irán siempre dentro de este elemento y podremos situarlos en la parte de nuestra página web que queramos.


```html
<form>
  <!-- Elementos del formulario -->
</form>
```


Ahora pasaremos a ver cómo se insertar campos para poder introducir texto dentro del formulario. Para ello tenemos que saber que los campos de introducción de texto se pueden crear mediante el elemento [`input`](http://w3api.com/wiki/HTML:INPUT). Este elemento tiene un atributo [`type`](http://w3api.com/wiki/HTML:INPUT.type), donde se le indicará **el valor text**.


```html
<label for="nombre">Nombre:</label>
<input id="nombre" size="40" type="text"/>
```


Si lo que queremos es poner el campo con un texto no legible deberemos de utilizar **el valor password** dentro del atributo [`type`](http://w3api.com/wiki/HTML:INPUT.type). Quedándonos la siguiente [línea de código](http://lineadecodigo.com/) en nuestra página web.


```html
<label for="clave">Password:</label>
<input name="clave" size="12" type="password"/>
```


El [formulario](http://lineadecodigo.com/tag/html-form/) nos quedará de la siguiente forma:


```html
<form>
  <label for="clave">Password:</label>
  <input name="clave" size="12" type="password"/>
</form>
```


De esta manera ya tendremos construido [nuestro formulario](http://lineadecodigo.com/tag/html-form/) para pedir passwords en [HTML](http://www.manualweb.net/html) y podremos pedir al usuario que introduzca sus contraseñas de una forma segura sin que nadie pueda ver el contenido de las mismas. ¿Conocías la existencia de este tipo de campos? ¿Qué campos utilizas más dentro de los formularios? O ¿sobre qué elementos de formulario te gustaría que escribiésemos en [Línea de Código](http://lineadecodigo.com/)?

