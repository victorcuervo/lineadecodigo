---
title: "Transparencia y Opacidad en SVG"
description: "Se explica cómo definir objetos transparentes en SVG utilizando círculos y líneas, variando la opacidad de los elementos."
date: 2008-01-15
updatedDate: 2026-01-08
tags: ["circle","fill","line","opacity"]
slug: svg/transparencia/transparencia-y-opacidad-en-svg
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_svg/blob/master/transparencias/transparencia-opacidad.svg
topic: svg

---

El objetivo de este ejemplo es ver cómo podemos definir objetos que sean transparentes en [SVG](http://lineadecodigo.com/categoria/SVG/). Para ello crearemos tres círculos y una línea que los atraviese.Dichos círculos irán aumentando su nivel de transparencia. Es decir, el primero será el más opaco y el último circulo será el más transparente.


Lo primero es recordar cómo se define un circulo. Para ello, es recomendable la lectura del ejemplo [Dibujar un Circulo en SVG](http://lineadecodigo.com/2007/12/26/dibujar-un-circulo-en-svg/). Pero, básicamente, consiste en utilizar la etiqueta <CIRCLE/> con más o menos atributos.


```xml
<circle cx="100" cy="100" r="50" />
```


Para definir la transparencia del circulo utilizaremos el atributo **opacity** dentro de los estilos. Dicho atributo podrá tomar los valores de 0 a 1. Los decimales los utilizaremos con el separador de punto decimal. Por ejemplo 0.4. El valor de 1 hace que el elemento sea totalmente opaco, mientras que el valor de 0 hace que el elemento sea totalmente transparente.


Nos quedaría un código parecido a este:


```xml
<circle cx="100" cy="100" r="50" style="fill:green;opacity:0.8"/>
```


Si ponemos 3 círculos, incrementando el valor de la opacidad, y desplazando su centro dentro del lienzos sería:


```xml
<circle cx="100" cy="100" r="50" style="fill:green;opacity:0.8"/>
<circle cx="250" cy="100" r="50" style="fill:green;opacity:0.5"/>
<circle cx="400" cy="100" r="50" style="fill:green;opacity:0.2"/>
```


Lo siguiente será poner una línea atravesando a los círculos. Para ello deberemos de utilizar el elemento `line` con sus atributos de coordenadas x1,y1 x2,y2.


```xml
<line x1="25" y1="100" x2="475" y2="100" stroke-width="5" stroke="red"/>
```


Y se me olvidaba otra cosa. El orden del pintado lo establece el orden en el que aparezca el código. A si que si queremos poner la línea debajo de los círculos, habrá que escribirla primero.

