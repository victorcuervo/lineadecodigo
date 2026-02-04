---
title: "Escribir texto con formato en JavaScript"
description: "Manejo de elementos HTML para poder escribir texto con formato en JavaScript."
date: 2007-06-28
updatedDate: 2026-01-12
tags: ["document","write"]
slug: javascript/cadenas/escribir-texto-con-formato-en-javascript
type: doc
topic: javascript
id: 8bd38143-74da-41ab-828d-571b8f44cf9a
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/cadenas/texto-con-formato-en-javascript.html
---

Empiezo a aprender [JavaScript](https://www.manualweb.net/javascript/), ya me he creado mi primera página web y he incluido el código necesario para poner mi código [JavaScript](https://www.manualweb.net/javascript/).


## Escribir texto en JavaScript


Bien, seguimos adelante. También se como escribir texto con el lenguaje. He sido listo y me he leído en [Línea de Código](http://lineadecodigo.com/) el artículo Hola Mundo con JavaScript. Veamos... poner el [document.write("texto")...](https://www.w3api.com/DOM/.write())


```javascript
document.write("texto");
```


## Incluir formato HTML


Y ahora ¿cómo puedo hacer que mi texto salga con formato????? Pues es muy sencillo, además de volcar cadenas de texto con el document.write, también puedes incluir cualquier código [HTML](https://www.manualweb.net/html/).


> En el [método document.write](https://www.w3api.com/DOM/.write() podemos poner texto y cadenas [HTML](https://www.manualweb.net/html/). Todo junto.


Así, si queremos que nuestro texto sea un encabezado, podemos incluir [la etiqueta h1](https://www.w3api.com/HTML/h1/%20%22Elemento%20HTML%20h1%22) dentro del texto.


```javascript
document.write("<h1>Este es un texto en h1</h1>");
```


Y al igual que [la etiqueta h1](https://www.w3api.com/HTML/h1/%20%22Elemento%20HTML%20h1%22) cualquier otra etiqueta del lenguaje [HTML](https://www.manualweb.net/html/) que se te ocurra.

