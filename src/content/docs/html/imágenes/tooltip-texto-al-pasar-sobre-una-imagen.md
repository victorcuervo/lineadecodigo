---
title: Tooltip, texto al pasar sobre una imágen
description: "Cómo crear un tooltip para que aparezca texto al pasar sobre una imágen"
lastUpdated: 2025-12-09
slug: html/tooltip-texto-al-pasar-sobre-una-imagen
author: victor_cuervo
---

Muchas veces habréis pasado sobre una imagen y habréis visto que sale como un pequeño texto en amarillo con un texto, normalmente relacionado con la imagen. Pues bien, eso es lo que se conoce como tooltip.


Lo primero que vamos a hacer es poner una imagen en nuestra página web. Para ello utilizaremos la etiqueta [IMG](http://w3api.com/wiki/HTML:IMG). Dentro de esta etiqueta tenemos el [atributo src](http://w3api.com/wiki/HTML:Src) que nos indicará el nombre de la imagen que queremos mostrar.


Así nos quedará la siguiente [línea de código](/):


```html
<img src="foto.jpg">
```


Si queremos incluirle el tooltip, deberemos de utilizar el atributo title, al cual le daremos como valor el texto que queramos que salga en el tooltip. Veamos cómo queda la [línea de código](/):


```html
<img title="Foto de linea de codigo" src="foto.jpg">
```


Lo bueno del [atributo title](http://w3api.com/wiki/HTML:Title) es que lo podemos utilizar en diferentes etiquetas [HTML](https://www.manualweb.net/html/). Es decir, que no solo está limitado a la etiqueta [IMG](http://w3api.com/wiki/HTML:IMG).


Y veamos el resultado, pasa sobre la imagen…


![](http://lineadecodigo.com/wp-content/uploads/2006/12/lineadecodigo.miniatura.jpg)


Veamos el comportamiento de algunos navegadores:


![](http://lineadecodigo.com/wp-content/uploads/2006/12/title_navegadores.miniatura.jpg)

