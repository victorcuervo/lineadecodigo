---
title: "Gradiente lineal vertical"
description: "Un gradiente lineal vertical es una transición de colores definida por coordenadas en SVG, utilizando la etiqueta linearGradient."
date: 2008-01-28
updatedDate: 2026-01-07
tags: ["gradiente","lineal","lineargradient","offset","stop-color"]
slug: svg/gradientes/gradiente-lineal-vertical
type: doc
topic: svg
id: 2c8a9dfb-adca-8184-be13-d3b120f9f660
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_svg/blob/master/gradientes/gradiente-lineal-vertical.svg?short_path=dc66b72
---

Un gradiente lineal es una transición de colores a lo largo de un vector. Normalmente de dos colores, aunque puede ser de tantos como queramos.


Cuando dibujamos gradientes lineales, estos, pueden ser de tres formas:

- Horizontales
- Verticales
- Angulares

La etiqueta SVG que nos sirve para definir gradientes es linearGradient. La cual, mediante coordenadas x1,y1 y x2,y2 identifica el inicio y el fin del vector que coordina el gradiente.


```xml
<linearGradient id="rojo_naranja" />
```


En el caso que nos consta, gradiente lineal vertical, el "truco" está en el manejo de las coordenadas del gradiente. Mediante estas coordenadas lo que definimos es donde va a iniciar y donde va a terminar el gradiente.


A si que lo que tenemos que hacer es que las coordenadas x1 y x2 deben de ser iguales, mientras que las coordenadas y1 e y2 deben de ser diferentes.


```xml
<linearGradient id="rojo_naranja" x1="0%" y1="0%" x2="0%" y2="100%" />
```


Además a la etiqueta linearGradient le podemos anidar la etiqueta stop. Esta etiqueta nos ayuda a definir con que color iniciamos y con cual acabamos el gradiente. Para ello utiliza un atributo offset de posicionamiento de inicio del color y otro atributo denominado stop-color para indicar el color que se utiliza.


```xml
<linearGradient id="rojo_naranja" x1="0%" y1="0%" x2="0%" y2="100%">
  <stop offset="20%" stop-color="#f00" />
  <stop offset="80%" stop-color="#ff0" />
</linearGradient>
```


En este código indicaríamos que al 20% del vector se empieza a utilizar el color rojo (#f00) y que al 80% del vector pasamos al color amarillo (#ff0).


Veamos como quedaría todo el código de nuestro gradiente lineal vertical:


```xml
<defs>
 <linearGradient id="rojo_naranja" x1="0%" y1="0%" x2="0%" y2="100%">
   <stop offset="20%" stop-color="#f00"/>
   <stop offset="80%" stop-color="#ff0"/>
 </linearGradient>
</defs>

<circle cx="600" cy="200" r="100" style="fill:url(#rojo_naranja)"
   stroke="#000" stroke-width="2"/>
```

