---
title: "Tres Frames"
description: "Crea una página con tres frames utilizando HTML y aprende a estructurar contenido de forma efectiva. Descubre cómo optimizar tu diseño web con esta técnica."
date: 2007-03-24
updatedDate: 2026-01-19
tags: ["frame","frameset","rows","cols","noframes"]
slug: html/frames/tres-frames
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-8156-b1e7-fa1b5e161fb3
download: https://github.com/victorcuervo/lineadecodigo_html/tree/master/frames/tres-frames
---

La idea de este ejemplo es ver cómo montar una página que contenga tres frames. La disposición de la página será la siguiente: en el lado izquierdo tendremos un frame de ancho 20% del total, en el lado derecho tendremos dos frames en disposición horizontal. El superior ocupará el 90% del espacio, mientras que el inferior ocupará el 10% restante.


## Disposición de los frames


La estructura quedará así:


```javascript
+------------------+------------------+
|                  |                  |
|  Frame           |  Frame Superior  |
|  Izquierda (20%) |  (90%)          |
|                  |                  |
|                  +------------------+
|                  |  Frame Inferior  |
|                  |  (10%)          |
+------------------+------------------+
```


## Definir el frameset principal


Lo primero que tenemos que hacer es definir la página que va a contener la división de los frames y posteriormente cada una de las tres páginas que son el contenido de los respectivos frames.


La página que define el frame utilizará la etiqueta [FRAMESET](https://www.w3api.com/HTML/frame/SET) para definir la división. Para definir las divisiones hay que ir de la más general a la más concreta. Así que en nuestro caso la primera división es en columnas y la segunda es en filas, para la columna de la derecha.


La primera división se definiría con el atributo [cols](https://www.w3api.com/HTML/textarea/cols/) de la siguiente forma:


```html
<frameset cols="20%,*">
</frameset>
```


Como puedes ver, cuando queremos indicar que el tamaño de un frame es el resto, utilizamos el comodín `*`.


## Definir el frame izquierdo


Una vez definida la división hay que indicarle el contenido de los dos primeros frames. Para el primero, como ya es un contenido fijo utilizaremos la etiqueta [FRAME](https://www.w3api.com/HTML/frame/), la cual, mediante el parámetro [src](https://www.w3api.com/HTML/source/src/) indica el contenido de la misma de la siguiente forma:


```html
<frame src="izquierda.html" name="izquierdo">
```


Es bueno que utilicemos el atributo name para luego poder redirecionar los enlaces a uno u otro frame.


## Definir los frames derechos


En el caso del segundo frame, como no es un contenido fijo, sino que es otra división, tendremos que utilizar nuevamente la etiqueta [FRAMESET](https://www.w3api.com/HTML/frame/SET). Pero en este caso, con una división en filas:


```html
<frameset rows="90%,10%">
  <frame src="superior.html" name="superior">
  <frame src="inferior.html" name="inferior">
</frameset>
```


## Código completo


El código completo quedaría así:


```html
<frameset cols="20%,*">
  <frame src="izquierda.html" name="izquierdo">
  <frameset rows="90%,10%">
    <frame src="superior.html" name="superior">
    <frame src="inferior.html" name="inferior">
  </frameset>
</frameset>
```


## Soporte para navegadores sin frames


Como nota final cabe indicar que todavía nos podemos encontrar navegadores que no entiendan de frames (ya es raro, antes era algo más habitual). Así que, para estos casos, es bueno utilizar la etiqueta NOFRAMES con un contenido de texto avisando de que su navegador no soporta frames.


```html
<noframes>
  <body>
    Su navegador no soporta frames
  </body>
</noframes>
```

