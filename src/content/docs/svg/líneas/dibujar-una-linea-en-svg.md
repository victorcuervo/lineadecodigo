---
title: Dibujar una línea en SVG
description: "Se explica cómo dibujar una línea en SVG utilizando coordenadas y atributos de color y ancho."
lastUpdated: 2025-12-16
slug: svg/dibujar-una-linea-en-svg
author: Víctor Cuervo
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

