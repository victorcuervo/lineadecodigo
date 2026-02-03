---
title: "Frames sin bordes"
description: "Cómo deberemos de configurar nuestra página web para que tengamos frames sin bordes."
date: 2006-11-28
updatedDate: 2026-01-06
tags: ["frame","frameset","frameborder"]
slug: html/frames/frames-sin-bordes
author: victor_cuervo
type: doc
id: 2c5a9dfb-adca-8098-9abf-e3872f534fc8
download: https://github.com/victorcuervo/lineadecodigo/tree/master/lineadecodigo_html/frames/frame-sin-borde
---

Cuando estamos creando un sistema de frames en [HTML](http://www.manualweb.net/tutorial-html/), y lo cargamos por primera vez, podemos comprobar de forma explicita que, por defecto, los frames TIENEN BORDE. Es decir, podemos ver claramente cual es división que hemos efectuado con los frames sobre la página. Quedándonos claramente delimitados los áreas del mismo. Si bien, cuando diseñemos, puede que no nos interese que nos aparezcan estos molestos bordes. Si digo la verdad no soy capaz de recordar ninguna página donde aparezcan estos dichosos bordes. A si que deberemos de aprender a quitar los bordes de los frames. Para ello lo primero que tenemos que hacer es recordar como se modela una página con frames. Esta página contiene un conjunto de frames, el cual se modela con la etiqueta [frameset](http://w3api.com/wiki/HTML:FRAMESET). En esta etiqueta decidimos si la división es por columnas


```html
<frameset cols="20,*" frameborder="0"></frameset>
```


o por filas:


```html
<frameset frameborder="0" row="20,*"></frameset>
```


Para ello y como hemos podido ver en las líneas de código, se utilizan los atributos [cols](http://w3api.com/wiki/HTML:Cols) y [rows](http://w3api.com/wiki/HTML:Rows). Cada [frameset](http://w3api.com/wiki/HTML:FRAMESET) o conjunto de frames contendrá tantos frames como columnas o filas hayamos definido. La etiqueta frame será la que mediante el [atributo src](http://w3api.com/wiki/HTML:Src) indique que página [HTML](http://www.manualweb.net/tutorial-html/) se carga en dicho frame. Veamos la [línea de código](/):


```html
<frame src="pagina.html"></frame>
```


Si bien, el [frameset](http://w3api.com/wiki/HTML:FRAMESET) puede contener a su vez y anidados, varios [frameset](http://w3api.com/wiki/HTML:FRAMESET). Quedandonos una estructura parecida a la que sigue:


```html
<frameset cols="20,*">
  <frameset rows="10,*">
    <frame src="pagina1.html"></frame>
    <frame src="pagina2.html"></frame>
  </frameset>
  <frame src="pagina3.html"></frame>
</frameset>
```


Una vez que hemos repasado los frames por encima, lo que veremos es cómo quitar el borde que sale por defecto. Este se manipulará por el [atributo frameborder](http://w3api.com/wiki/HTML:Frameborder), tal y como indica la [especificación HTML 4.01 sobre la etiqueta <frame>](http://www.w3.org/TR/html4/present/frames.html#h-16.2.2). Y es que el [atributo frameborder](http://w3api.com/wiki/HTML:Frameborder) tiene un valor, por defecto, de 1. Es por ello que salen los bordes. Lo que tenemos que hacer es darle el valor de 0 para quitar dichos bordes. Quedandonos la siguiente [línea de código](/):


```html
<frame frameborder="0" src="pagina.html"></frame>
```


Y si nos basamos en el ejemplo anterior:


```html
<frameset cols="200,*">
  <frameset rows="170,*">
    <frame frameborder="0" src="pagina1.html"></frame>
    <frame frameborder="0" src="pagina2.html"></frame>
  </frameset>
  <frame src="pagina3.html"></frame>
</frameset>
```


En este caso no habría borde entre la pagina1.html y la pagina2.html, pero si habría borde con la pagina3.html Veámos el código completo:


```html


<title>Frames sin borde</title>


<frameset cols="200,*">
  <frameset rows="170,*">
    <frame frameborder="0" src="pagina1.html"></frame>
    <frame frameborder="0" src="pagina2.html"></frame>
  </frameset>
  <frame src="pagina3.html"></frame>
</frameset>

```


**Nota Curiosa Uno**: Aunque [la especificación HTML 4.01 sobre frames](http://www.w3.org/TR/html4/present/frames.html#h-16.2.2) no diga nada con respecto a el atributo frameborder en la etiqueta frameset, este es soportado de igual manera. Incluso algunos navegadores soportan el atributo, tampoco estandar, border. A si que nos podemos encontrar de todos.


**Nota Curiosa Dos**: Si en los navegadores Mozilla no consiguen cargar las páginas del frame, este navegador abrirá la ventana con los bordes e indicando que no encuentra la página. Pero no os asustéis, una vez que encuentra las páginas, empieza a comportarse correctamente.

