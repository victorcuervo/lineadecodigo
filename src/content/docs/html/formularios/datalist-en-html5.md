---
title: "DataList en HTML5"
description: "Un DataList en HTML5 permite definir opciones predefinidas para elementos input, mejorando la experiencia del usuario."
date: 2012-02-01
updatedDate: 2026-01-06
tags: ["formulario","datalist","input","option"]
slug: html/formularios/datalist-en-html5
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-81dd-a232-df2d0b1025f4
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Formularios/data-list.html
---

Un [DataList](https://www.w3api.com/HTML/tag/html-5.1/) en [HTML5](https://www.manualweb.net/html5/) es una lista de opciones predefinidas que le podemos pasar al elemento [`input`](https://www.w3api.com/HTML/input/) le podemos aplicar un DataList en HTML5. Pues podemos aplicarlo al tipo text o aun tipo URL o al tipo range. Es decir, de [HTML5](https://www.manualweb.net/html5/). Es decir, el agente de usuario o navegador propocionará esa lista como posibles opciones.


Pero, ¿a qué tipos del elemento INPUT le podemos aplicar un DataList en HTML5? Pues podemos aplicarlo al tipo text o aun tipo URL o al tipo range. Es decir, sobre una caja de text o sobre un slider. En el primer caso el [DataList](https://www.w3api.com/HTML/tag/html-5.1/) serán las opciones propuestas y predefinidas que se le darán al usuario y en el caso del slider serán diferentes puntos dentro del slider.


Pero lo primero será definir la lista de opciones del [DataList](https://www.w3api.com/HTML/tag/html-5.1/). El elemento es [datalist](https://www.w3api.com/HTML/tag/html-5.1/).


```html
<datalist id="lista">
 <option value="0">
 </option><option value="2">
 </option><option value="4">
 </option><option value="6">
 </option><option value="8">
 </option><option value="10">
</option></datalist>
```


Como vemos, la lista tiene un identificador denotado por el [atributo id](https://www.w3api.com/HTMLDOM/HTMLDialogElement/returnValue/) y una lista de opciones. Cada una de las opciones de la lista la definimos mediante un elemento option.


Si queremos podemos dar a los valores de la lista un texto alternativo. Para ello utilizaremos el atributo label.


```html
<datalist id="listaurls">
 <option value="http://www.ayudaenlaweb.com" label="Ayuda en la Web">
 </option><option value="https://lineadecodigo.com" label="Línea de Código">
 </option><option value="http://www.dudasprogramacion.com" label="Dudas de Programación">
</option></datalist>
```


Como podemos comprobar la estructura de la lista es realmente sencilla. El siguiente paso será el asociar la lista al elemento [INPUT](https://www.w3api.com/HTML/input/). Para ello utilizamos el [atributo list](https://www.w3api.com/HTML/input/.list) del [INPUT](https://www.w3api.com/HTML/input/), el cual deberá de hacer referencia al [id](https://www.w3api.com/HTMLDOM/HTMLDialogElement/returnValue/) de la lista.


Así si creamos un input que haga referencia a la primera lista sería:


```html
<input id="mislider" list="lista" max="10" min="0" step="1" type="range" value="3"></input>
```


y si creamos una referencia desde un tipo URL a la segunda lista sería:


```html
<input id="misurl" list="listaurls" size="100" type="url">
```


Ya solo nos queda ver el efecto que produce el elemento [DataList](https://www.w3api.com/HTML/tag/html-5.1/) y su comportamiento de opciones por defecto en nuestro navegador. Eso sí, de momento solo el [navegador web Opera](http://www.ayudaenlaweb.com/navegadores/que-es-opera/) da soporte a los [DataList](https://www.w3api.com/HTML/tag/html-5.1/) de [HTML5](https://www.manualweb.net/html5/).

