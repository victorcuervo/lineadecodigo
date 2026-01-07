---
title: "Borde con gradiente lineal"
description: "El documento explica cómo usar un borde con gradiente lineal en SVG aplicando el atributo stroke."
date: 2008-02-07
updatedDate: 2026-01-07
tags: ["circle","defs","fill","gradiente","lineal","lineargradient","offset","stop-color","stroke","style","url"]
slug: svg/gradientes/borde-con-gradiente-lineal
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_svg/blob/master/gradientes/gradiente-como-borde.svg
topic: svg
---

Lo más normal es utilizar un gradiente como relleno de una figura. Eso no quiere decir que no podamos utilizar el gradiente sobre un borde.


Para poder realizar esta operación lo primero que tenemos que hacer es definir nuestro gradiente. La forma de hacer esto es la misma indistintamente de donde vayamos a utilizar este. A si que tendremos una definición de gradiente como la que sigue:


```xml
<defs>
  <linearGradient id="rojo_naranja" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="30%" stop-color="#f00" />
    <stop offset="60%" stop-color="#ff0" />
  </linearGradient>
</defs>
```


Si ves muy complicado el definir el gradiente, en [Linea de Código](http://lineadecodigo.com/) tienes muchos artículos y [ejemplos que te explican como trabajar con gradientes](http://lineadecodigo.com/tag/gradiente).


Ahora solo nos queda utilizar el gradiente como fondo del borde. Recordar que el relleno de los bordes de las figuras básicas o shapes se suele controlar con el atributo stroke.


Y para hacer referencia al gradiente hay que utilizar la función url. Esta recibirá como parámetro el nombre que le hayamos dado al ID del gradiente, precedido de una almohadilla (#). El código a utilizar sería este:


```xml
url(#rojo_naranja)
```


Al final tendremos el siguiente código. En este caso, aplicado a un círculo (no es que tenga nada contra el resto de figuras básicas):


```xml
<circle cx="600" cy="200" r="100" style="fill:#fff"
    stroke="url(#rojo_naranja)" stroke-width="2"/>
```

