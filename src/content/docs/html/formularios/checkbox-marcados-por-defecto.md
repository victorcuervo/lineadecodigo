---
title: "Checkbox marcados por defecto"
description: "Ejemplo que nos explica como tener los checkbox marcados por defecto en un formulario dentro de una página web."
date: 2006-12-18
updatedDate: 2026-01-06
tags: ["input","checkbox","label","checked"]
slug: html/formularios/checkbox-marcados-por-defecto
author: victor_cuervo
type: doc
id: 968f77c0-2d89-424a-9131-8daaa13918b9
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_html/formularios/checkbox-marcados-por-defecto.html
---

Los checkbox son unos elementos [HTML](http://www.manualweb.net/tutorial-html/) que nos permiten captar, del usuario, multiples selecciones sobre un tema. Suelen ser muy recurridos cuando estamos encuestando al usuario acerca de sus preferencias. En dichas situaciones, puede presentarse el caso de darle seleciones marcadas por defecto. Es por ello que tendremos que saber cómo marcar los checkbox por defecto. Pero vayamos por pasos. Lo primero que tenemos que recordar es que los checkbox son elementos [input](http://www.w3api.com/wiki/HTML:INPUT) del tipo checkbox. Para incluir un checkbox deberemos de utilizar la siguiente [línea de código](/):


```html
<input id="futbol" name="deportes" type="checkbox" value="futbol"></input>
<label for="futbol">Futbol</label>
```


Vemos, que de manera adicional, utilizamos la etiqueta [label](http://www.w3api.com/wiki/HTML:LABEL) para dotarle de contenido al checkbox. Ya que de otra manera solo saldría la casilla de selección sin texto alguno. De esta forma un conjunto de checkbox quedaría de la siguiente manera:


```html
<input id="futbol" name="deportes" type="checkbox" value="futbol"></input>
<label for="futbol">Futbol</label>
<input id="baloncesto" name="deportes" type="checkbox" value="baloncesto"></input>
<label for="baloncesto">Baloncesto</label>
<input id="ciclismo" name="deportes" type="checkbox" value="ciclismo"></input>
<label for="ciclismo">Ciclismol</label>
```


Si ahora queremos que uno de los checkbox aparezca marcado por defecto, deberemos de utilizar el atributo [checked](http://www.w3api.com/wiki/HTML:INPUT.checked) de la etiqueta [input](http://www.w3api.com/wiki/HTML:INPUT).


```html
<input checked="checked" id="futbol" name="deportes" type="checkbox" value="futbol"></input>
<label for="futbol">Futbol</label>
```


Con el anterior código aparecería marcado el check del fútbol. Todo el código completo sería el siguiente:


```html
<input checked="checked" id="futbol" name="deportes" type="checkbox" value="futbol"></input>
<label for="futbol">Futbol</label>
<input id="baloncesto" name="deportes" type="checkbox" value="baloncesto"></input>
<label for="baloncesto">Baloncesto</label>
<input id="ciclismo" name="deportes" type="checkbox" value="ciclismo"></input>
<label for="ciclismo">Ciclismol</label>
```

