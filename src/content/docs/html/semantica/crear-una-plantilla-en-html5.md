---
title: "Crear una plantilla en HTML5"
description: "Ejemplo que nos enseña a crear una plantilla en HTML5 para poder rellenar el contenido de una tabla utilizando código Javascript."
date: 2023-10-03
updatedDate: 2026-01-05
tags: ["template","createelement","queryselector","queryselectorall","clonenode","appendchild"]
slug: html/semantica/crear-una-plantilla-en-html5
author: victor_cuervo
type: doc
id: eff9f1c3-bc91-47bf-8848-77063a5c521f
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Sem%C3%A1ntica/template-html5.html
---

Uno de los elementos que aparece en [HTML5](https://www.manualweb.net/html5/) es el elemento [`template`](https://www.w3api.com/HTML/template/). Mediante este elemento podemos crear una plantilla en [HTML5](https://www.manualweb.net/html5/). Pero, ¿qué es una plantilla en [HTML5](https://www.manualweb.net/html5/)? Una plantilla es un conjunto de elementos que podemos reutilizar en diferentes partes de nuestra página.


En este caso vamos a crear una plantilla [HTML5](https://www.manualweb.net/html5/) para insertar filas en una tabla. Lo primero será definir la plantilla mediante el elemento [`template`](https://www.w3api.com/HTML/template/).


```html
<template id="ciudad">
  <tr>
    <td class="record"></td>
    <td></td>
  </tr>
</template>
```


Vemos que dentro de la plantilla hemos puesto los elementos que representan una fila de una tabla mediante los elementos [`tr`](https://www.w3api.com/HTML/tr/) y [`td`](https://www.w3api.com/HTML/td/).


> El elemento [`template`](https://www.w3api.com/HTML/template/) no tiene una visualización por pantalla. Nos sirve para poder reutilizarlo en otras partes de nuestra página.


Ahora creamos una tabla que será dónde reutilicemos nuestra plantilla [HTML5](https://www.manualweb.net/html5/).


```html
<table id="ciudades">
  <thead>
    <tr>
      <td>Ciudad</td>
      <td>País</td>    
    </tr>
  </thead>
  <tbody>

  </tbody>
</table>
```


Vemos que la tabla no tiene filas ya que ahora vamos a crear nuestro código [Javascript](https://www.manualweb.net/javascript/) para poder reutilizar la plantilla [HTML5](https://www.manualweb.net/html5/) en la creación de las filas.


Lo primero que tendremos que hacer en nuestro código [Javascript](https://www.manualweb.net/javascript/) es validar si el navegador soporta el elemento [`template`](https://www.w3api.com/HTML/template/). Para ello chequeamos si este elemento tiene el atributo content.


```javascript
if ('content' in document.createElement('template')) { ... }
```


Para poder reutilizar la plantilla vamos a crear un clon del contenido que tiene. Para ello accedemos al elemento de la plantilla y creamos un clone mediante el método [`.cloneNode()`](https://w3api.com/DOM/Node/cloneNode/)


```javascript
const template = document.querySelector("#ciudad");

// Clona la plantilla
const clone = template.content.cloneNode(true);
let td = clone.querySelectorAll("td");
td[0].textContent = "Barcelona";
td[1].textContent = "Spain";
```


Lo que hacemos ahora es insertar los elementos de texto que necesitemos en la plantilla. En este caso los valores de las celdas de la tabla. Vemos que nos apoyamos en el método [`.querySelector()`](https://www.w3api.com/DOM/Document/querySelector/) para localizar la plantilla en nuestro documento y el método [`.querySelectorAll()`](https://www.w3api.com/DOM/Document/querySelectorAll/) para encontrar los elementos dentro de la plantilla dónde insertar el texto.


Una vez que tenemos preparado nuestro nodo representando la estructura de la plantilla, lo que haremos será el insertarlo como un nodo hijo dentro de la tabla. En este caso utilizamos el método [`.appendChild()`](https://www.w3api.com/DOM/Node/appendChild/).


El código completo que nos reutiliza la plantilla nos queda de la siguiente manera:


```javascript
if ('content' in document.createElement('template')) {
    
    const tbody = document.querySelector("tbody");
    const template = document.querySelector("#ciudad");

    // Clona la plantilla
    const clone = template.content.cloneNode(true);
    let td = clone.querySelectorAll("td");
    td[0].textContent = "Barcelona";
    td[1].textContent = "Spain";

    tbody.appendChild(clone);

    // Clona nuevamente la plantillax11
    const clone2 = template.content.cloneNode(true);
    td = clone2.querySelectorAll("td");
    td[0].textContent = "Paris";
    td[1].textContent = "Francia";

    tbody.appendChild(clone2);
}
```


De esta forma habremos conseguido rellenar el contenido de nuestra tabla después de crear una plantilla en [HTML5](https://www.manualweb.net/html5/) y utilizarla mediante nuestro código [Javascript](https://www.manualweb.net/javascript/).

