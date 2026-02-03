---
title: "Poner bullets en HTML"
description: "Aprende a manipular las entidades para poder poner bullets en HTML."
date: 2007-07-31
updatedDate: 2026-01-19
tags: ["lista","ul","li","bullet","bull","entidades"]
slug: html/listas/poner-bullets-en-html
author: victor_cuervo
type: doc
id: 78e38317-87b8-43d3-b168-1b183a0ac45d
download: https://github.com/victorcuervo/lineadecodigo_html/blob/master/texto/bullet-con-entidades.html
---

## Introducción


Si queremos poner un punto o bullet (viñeta) en HTML, tenemos diferentes opciones disponibles. Vamos a ver las dos principales formas de hacerlo.


## La forma estándar: listas desordenadas


La primera opción, y la más estándar, es utilizar una [lista desordenada UL](https://www.w3api.com/HTML/ul/):


```html
<ul>
  <li>Primer elemento</li>
  <li>Segundo elemento</li>
  <li>Tercer elemento</li>
</ul>
```


Este sería el mecanismo más estándar y recomendado para crear listas con bullets.


## La forma alternativa: entidades HTML


Otra opción, podríamos decir que más exótica, es la de utilizar entidades HTML. No vamos a entrar en este punto a analizar la utilidad o no de esta solución. Solo la explicamos para saber que existe.


## La entidad bull


La entidad que representa al punto o bullet es **bull**. Para utilizarla en nuestra página [HTML](https://www.manualweb.net/html/) solo tendremos que anteponerle un ampersand `&` y posponerle un punto y coma `;`.


La sintaxis sería:


```html
&bull;
```


## Ejemplo de uso


La [línea de código](http://lineadecodigo.com/) nos quedaría de la siguiente forma:


```html
<p>&bull; Primer elemento</p>
<p>&bull; Segundo elemento</p>
<p>&bull; Tercer elemento</p>
```


## Resultado visual


Y el resultado sería:

- Primer elemento
- Segundo elemento
- Tercer elemento

Aunque la forma estándar de crear bullets en HTML es mediante listas `<ul>`, la entidad `&bull;` puede ser útil cuando necesitas insertar un bullet dentro de un texto normal sin crear una lista formal.

