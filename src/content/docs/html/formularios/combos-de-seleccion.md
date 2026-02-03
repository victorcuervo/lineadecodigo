---
title: "Combos de selección"
description: "Cómo montar un formularios con combos de selección en HTML para que nos permita elegir una de las opciones, así como marcar una preferente."
date: 2006-11-02
updatedDate: 2026-01-06
tags: ["select","option","form","selected"]
slug: html/formularios/combos-de-seleccion
author: victor_cuervo
type: doc
topic: html
id: a70cfe76-0961-472e-b6b8-71632121e16d
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_html/formularios/combos-de-seleccion.html
---

Una de las primeras cosas con la que nos encontraremos a la hora de [desarrollar una página HTML](http://lineadecodigo.com/categoria/html/) será la necesidad de crear un combo con opciones. Lo que son los combos de selección. Estos elementos los solemos encontrar en casi todos los formularios que hay dispersos por la web. Con ellos se busca que el usuario pueda seleccionar una de las opciones. Para codificarlos lo primero que tendremos que hacer es crear un elemento [FORM](http://w3api.com/wiki/HTML:FORM). Dicho elemento viene a representar un formulario.


```html
<form>
  <!-- Formulario -->
</form>
```


Dentro del elemento [FORM](http://w3api.com/wiki/HTML:FORM) pondremos el combo. Para poner un combo nos ayudamos del elemento [SELECT](http://w3api.com/wiki/HTML:SELECT).


```html
<form>
  <select>
    <!-- Opciones del Combo -->
  </select>
</form>
```


Una vez que tenemos nuestro combo, deberemos de introducir las diferentes opciones. Estas se insertan mediante los elementos [OPTION](http://w3api.com/wiki/HTML:OPTION). Es decir, por cada una de las opciones que queramos añadir tendremos que incorporar un elemento [OPTION](http://w3api.com/wiki/HTML:OPTION). Es por ello que si queremos crear un combo de selección que reflejase los equipos de futbol de la Liga Española quedaría de la siguiente forma:


```html
<select>
  <option>Atletico de Madrid</option>
  <option>Betis</option>
  <option>FC. Barcelona</option>
  <option>Real Madrid</option>
  <option>Zaragoza</option>
</select>
```


Como vemos el nombre del equipo, que es cada una de las opciones, va dentro del elemento [OPTION](http://w3api.com/wiki/HTML:OPTION). Si queremos que una de las opciones sea la predeterminada podemos utilizar el [atributo SELECTED](http://www.w3api.com/wiki/HTML:Selected) del elemento [OPTION](http://w3api.com/wiki/HTML:OPTION). En nuestro ejemplo, si queremos predeterminar al “Betis” como la opción por defecto, nuestro código quedaría de la siguiente forma:


```html
<select>
  <option>Atletico de Madrid</option>
  <option selected="selected">Betis</option>
  <option>FC. Barcelona</option>
  <option>Real Madrid</option>
  <option>Zaragoza</option>
</select>
```


De esta forma ya tendremos nuestros combos de selección en [HTML](http://www.manualweb.net/html/).

