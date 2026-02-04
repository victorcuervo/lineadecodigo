---
title: "Crear contenido editable en HTML5"
description: "Descubre cómo crear contenido editable en HTML5 de manera sencilla y efectiva, transformando tu página web en un espacio interactivo y atractivo."
date: 2012-02-28
updatedDate: 2026-01-21
tags: ["contenteditable","div"]
slug: html/documento/crear-contenido-editable-en-html5
type: doc
topic: html
id: 163d4411-bad1-47db-aab7-cf1cb9cf8d43
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Basicos/contenido-editable.html
---

## Introducción


Una de las nuevas capacidades que encontramos dentro de [HTML5](https://www.manualweb.net/html5/) es la de definir un contenido editable. Es decir, nos permite insertar elementos dentro del documento web los cuales el usuario puede editar desde el navegador y modificar su contenido.


Lógicamente ampliando las capacidades ya existentes con el [TEXTAREA](https://www.w3api.com/HTML/textarea/) para introducir texto. Así al poder crear contenido editable en [HTML5](https://www.manualweb.net/html5/) podremos estar cerca de tener un editor web (o diseñador web) de las páginas web o editores de texto con formato enriquecido.


## Crear una capa DIV con contenido


La forma de crear contenido editable en [HTML5](https://www.manualweb.net/html5/) es muy sencilla. Lo primero que haremos será definir una [capa de contenido DIV](https://www.w3api.com/HTML/div/). Sobre dicha capa insertaremos texto.


```html
<div style="border: 1px solid #000; padding: 10px;">
  Este es un contenido editable
</div>
```


Podemos observar que hemos dado un pequeño estilo a la capa, agregándole un borde y un espaciado del contenido con respecto al borde.


## Usar el atributo contentEditable


Para convertir a la capa en editable y así poder crear contenido editable, nos bastará con añadir el atributo [contentEditable](https://www.w3api.com/HTML/contentEditable) y asignarle un valor de true. Ya que por defecto este atributo vendrá con un valor de false.


```html
<div contentEditable="true" style="border: 1px solid #000; padding: 10px;">
  Este es un contenido editable
</div>
```


Simplemente con la inclusión de este [contentEditable](https://www.w3api.com/HTML/contentEditable) hemos conseguido crear contenido editable en [HTML5](https://www.manualweb.net/html5/). Ahora cuando carguemos la página en el navegador y pulsemos sobre el texto veremos como el navegador nos deja modificar el contenido de la capa.


## Compatibilidad con navegadores


Como siempre con la especificación [HTML5](https://www.manualweb.net/html5/) (al menos de momento), deberemos de tener cuidado con el soporte de los navegadores del atributo [contentEditable](https://www.w3api.com/HTML/contentEditable), ya que nos podemos encontrar que alguna versión no lo soporte.

