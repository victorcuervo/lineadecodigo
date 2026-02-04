---
title: "Tooltip, texto al pasar sobre una imágen"
description: "Cómo crear un tooltip para que aparezca texto al pasar sobre una imágen"
date: 2006-11-18
updatedDate: 2026-01-06
tags: ["imagenes","texto","tooltip"]
slug: html/imagenes/tooltip-texto-al-pasar-sobre-una-imagen
type: doc
topic: html
id: b1933a35-db63-4569-a3a6-80a797b0cdbd
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_html/imagenes/tooltip-texto-al-pasar-sobre-una-imagen.html
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


![](../../../../assets/html/images/lineadecodigo.miniatura.jpg)


Veamos el comportamiento de algunos navegadores:


![](../../../../assets/html/images/title_navegadores.miniatura.jpg)

