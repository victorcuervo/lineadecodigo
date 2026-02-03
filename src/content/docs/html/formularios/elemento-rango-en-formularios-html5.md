---
title: "Elemento rango en formularios HTML5"
description: ""
date: 2012-01-31
updatedDate: 2026-01-24
tags: ["HTML Form Input","HTML5 Form","HTML5 Form Range","Javascript Eventos","Javascript Eventos addEventListener","Javascript DOM","DOM EventTarget","DOM EventTarget addEventListener","DOM Event preventDefault","HTML Form"]
slug: html/formularios/elemento-rango-en-formularios-html5
author: victor_cuervo
type: doc
topic: html
id: ce4ef2ca-33cc-4839-8df5-c2609d858a28
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Formularios/elemento-formulario-range.html
---

Una de las novedades que tenemos dentro de los formularios [HTML5](https://www.manualweb.net/html5/) son los elementos input de tipo rango. Estos elementos son unos sliders que nos permiten seleccionar un valor desplazando un puntero sobre el slider.


## Crear un elemento de tipo rango


Para crear un elemento de tipo rango en formularios [HTML5](https://www.manualweb.net/html5/) tenemos que crear un elemento [input](https://www.w3api.com/HTML/input/) de tipo range de la siguiente forma:


```html
<input type="range">
```


## Atributos del elemento rango


Sobre este elemento podemos definir varios valores. En primer lugar el valor máximo y mínimo del rango. Esto lo haremos mediante los atributos [min](https://www.w3api.com/HTML/input/.min) y [max](https://www.w3api.com/HTML/input/.max).


```html
<input max="10" min="0" type="range">
```


De igual manera podemos definir los valores del incremento, es decir, cada vez que desplazamos el puntero en cuanto se incrementará o decrementará el valor del elemento. Este atributo es [step](https://www.w3api.com/HTML/input/.step). Así si queremos que se incremente de uno en uno definiremos el elemento rango de la siguiente forma:


```html
<input id="mislider" max="10" min="0" step="1" type="range" value="3"></input>
```


## Acceder al elemento rango con Javascript


Los elementos de tipo rango están disponibles vía [Javascript](https://www.manualweb.net/javascript/). Es decir, podemos acceder a su modelo DOM y consultar el valor que tiene el rango en cualquier momento. Bastará solo con consultar el valor del atributo value.


Por ejemplo, si queremos calcular el valor que tiene el rango cada vez que se modifique podemos crear un listener sobre el evento onchange de dicho rango con el método [addEventListener](https://www.w3api.com/DOM/EventTarget/addEventListener).


```javascript
var barra = document.getElementById("mislider");
barra.addEventListener("change",function(ev){	
  var resultado = document.getElementById("valor");
  resultado.innerHTML = ev.currentTarget.value;	
},true);
```


Vemos que cuando utilizamos el método [addEventListener](https://www.w3api.com/DOM/EventTarget/addEventListener) el objeto evento que se le pasa a la función lleva la referencia al elemento que generó el evento en el campo [currentTarget](https://www.w3api.com/DOM/Event/target/.currentTarget).


## Soporte de navegadores


Solo hay que tener en cuenta una cosa al utilizar el elemento range en formularios [HTML5](https://www.manualweb.net/html5/) y esto es el soporte de los navegadores, ya que todavía todos no lo dan.

