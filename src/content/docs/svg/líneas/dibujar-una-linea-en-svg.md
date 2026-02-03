---
title: "Dibujar una línea en SVG"
description: "Se explica cómo dibujar una línea en SVG utilizando coordenadas y atributos de color y ancho."
date: 2007-12-30
updatedDate: 2026-01-07
tags: ["line","stroke-width"]
slug: svg/lineas/dibujar-una-linea-en-svg
author: Víctor Cuervo
type: doc
topic: svg
id: 2c8a9dfb-adca-811b-9dbe-de3ed6621a68
download: https://github.com/victorcuervo/lineadecodigo_svg/blob/master/figuras/dibujar-una-linea.svg
---

Este es uno de los ejemplos más sencillos de SVG. Consiste en dibujar una línea dentro de un lienzo. Es para ello que explicaremos cómo poner una línea de color rojo que vaya de las coordenadas (10,10) a las (100,100).


Para poderlo llevar a cabo tendremos que utilizar la etiqueta <line/>. La cual no tiene mucho misterio ya que sus atributos representas las coordenadas x1,y1 e x2,y2 origen y destino de la línea. Quedándonos el siguiente código:


```xml
<line x1="10" y1="10" x2="100" y2="100" />
```


Una última cosa que haremos será el dotar a la línea de un ancho mayor. En este caso utilizamos el atributo stroke-width y stroke para indicarle su color (el rojo).


```xml
<line stroke-width="5" stroke="red" />
```

