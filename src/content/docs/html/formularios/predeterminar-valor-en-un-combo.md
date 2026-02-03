---
title: "Predeterminar valor en un combo"
description: "Cómo construir un formulario en HTML en el que puedas predeterminar valor en un combo."
date: 2006-11-16
updatedDate: 2026-01-06
tags: ["form","select","option"]
slug: html/formularios/predeterminar-valor-en-un-combo
author: victor_cuervo
type: doc
topic: html
id: 27f093a6-89cc-4c91-9344-18c030885df1
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_html/formularios/predeterminar-valor-de-un-combo.html
---

Cuando estamos poniendo un combo en nuestra página web nos ayudaremos de las etiquetas [SELECT](http://w3api.com/wiki/HTML:SELECT) y [OPTION](http://w3api.com/wiki/HTML:OPTION). La primera se encarga de definir el propio combo, mientras que la segunda se repetirá por cada una de las opciones que queramos añadir. Así, podríamos tener el siguiente combo:


```html
<select name="ciudades">
  <option>Madrid</option>
  <option>New York</option>
  <option>Londres</option>
  <option>Paris</option>
  <option>Estocolmo</option>
  <option>Pekin</option>
  <option>Moscu</option>
</select>
```


En la página web veríamos el siguiente efecto: Si queremos que salga marcada una opción por defecto, deberemos de utilizar el [atributo SELECTED](http://w3api.com/wiki/HTML:Selected) sobre la etiqueta [OPTION](http://w3api.com/wiki/HTML:OPTION) que contenga el valor por defecto. Así, si queremos que salga Paris como opción por defecto, deberemos de tener el siguiente código:


![](../../../../assets/html/images/combouno.jpg)


```html
<select name="ciudades">
  <option>Madrid</option>
  <option>New York</option>
  <option>Londres</option>
  <option selected="selected">Paris</option>
  <option>Estocolmo</option>
  <option>Pekin</option>
  <option>Moscu</option>
</select>
```


Y se nos producirá el siguiente efecto:


![](../../../../assets/html/images/combodos.jpg)

