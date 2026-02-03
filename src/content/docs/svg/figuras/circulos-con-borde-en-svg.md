---
title: "Círculos con borde en SVG"
description: "Se explica cómo dibujar círculos con borde en SVG usando los atributos stroke y stroke-width."
date: 2007-12-28
updatedDate: 2026-01-08
tags: ["borde","circulo","stroke","stroke-width","style"]
slug: svg/figuras/circulos-con-borde-en-svg
author: victor_cuervo
type: doc
topic: svg
id: d129c605-a99b-406b-8c4c-510339c4b1c0
download: https://github.com/victorcuervo/lineadecodigo_svg/blob/master/figuras/circulo-con-borde.svg
---

Lo primero que tendremos que hacer será dibujar un circulo. Para ello utilizamos la etiqueta <CIRCLE/>. Es bastante interesante que le eches un vistazo al ejemplo [Dibujar un círculo en SVG](http://lineadecodigo.com/2007/12/26/dibujar-un-circulo-en-svg/) para poder acometer la tarea.


Una vez tengamos nuestro circulo, simplemente tendremos que "abusar" de dos atributos:

- **stroke:** indica el color del borde.
- **stroke-width:** indica el ancho del borde.

Al final tendremos el siguiente código:


```xml
<circle
  cx="100"
  cy="100"
  r="50"
  stroke="blue"
  stroke-width="10"
  style="fill:cyan;"
/>
```

