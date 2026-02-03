---
title: "Dibujar un círculo en SVG"
description: "Se explica cómo dibujar un círculo en SVG usando la etiqueta CIRCLE y sus atributos como r, cx, cy y fill."
date: 2007-12-26
updatedDate: 2026-01-07
tags: ["circulo","fill","radio","style","circle"]
slug: svg/figuras/dibujar-un-circulo-en-svg
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-81d6-8630-ced2ee1bdab5
download: https://github.com/victorcuervo/lineadecodigo_svg/blob/master/figuras/dibujando-un-circulo.svg
---

Para completar esta sencilla tarea nos valdremos de la etiqueta SVG circle. Vamos, que para pintar un circulo en SVG no nos tenemos que comer mucho la cabeza.


Y aprendernos una propiedad que es el atributo r. El cual viene a indicarnos el radio que va a tener el circulo.


```xml
<circle r=10/>
```


Otras tres propiedades que nos vendrán bien serán:

- **cx:** coordenada X de la posición del circulo.
- **cy:** coordenada Y de la posición del círculo.
- **fill:** nos permitirá darle un color a nuestro circulo.

```xml
<CIRCLE cx="100" cy="100" fill="green" />
```


O, para los más puristas, utilizaremos el style para darle el color al circulo:


```xml
<CIRCLE cx="100" cy="100" style="fill:green;" />
```


Y recuerda que para poner el circulo necesitamos de un lienzo. Y, este, su tamaño y color lo delimita la propia etiqueta SVG.


```xml
<SVG width="300" height="300">...</SVG>
```

