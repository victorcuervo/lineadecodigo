---
title: "Hola mundo en SVG"
description: "Se explica cómo crear un Hola Mundo en SVG utilizando la etiqueta de texto y atributos para personalizarlo."
date: 2006-12-28
updatedDate: 2026-01-07
tags: ["hola-mundo","text","font-family","font-size","fill"]
slug: svg/basicos/hola-mundo-en-svg
author: victor_cuervo
type: doc

topic: svg
---

Resulta un poco extraño explicar un ejemplo de como hacer un "Hola Mundo" en un lenguaje destinado a los gráficos vectoriales. Pero es posible. Y es que nadie ha dicho que no haya texto dentro de los gráficos. Por ejemplo, imaginemos un mapa terrestre (ahora que está de moda el tema de [Google Earth](http://earth.google.com/)) con las localizaciones de las ciudades, pueblos y accidentes geográficos.


A lo que vamos. Lo primero que tenemos que hacer es definir nuestro archivo SVG. En este sentido, recordar que es un fichero XML y que la primera etiqueta que nos encontraremos será SVG. Donde definimos el namespace del lenguaje.


```xml
<?xml version="1.0" ?>
<svg xmlns="http://www.w3.org/2000/svg">...</svg>
```


Una vez definido el documento lo que nos queda es poner el texto. Para ello nos apoyaremos en la etiqueta <text>. De esta etiqueta lo primero que tenemos que saber es que con los atributos X e Y posicionamos el texto:


```xml
<text x="100" y="50" />
```


Y lo segundo, que entre la etiqueta de apertura y cierre tiene que ir el texto:


```xml
<text x="100" y="50">Hola Mundo</text>
```


Ahora, y ya para nota, si lo queremos poner bonito podemos utilizar los atributos font-family, font-size y fill donde podemos elegir el tipo de letra, su tamaño y color respectivamente.


```xml
<text font-family="Verdana" font-size="30" fill="blue" />
```


Y, así de sencillo, tenemos nuestro Hola Mundo en SVG.

