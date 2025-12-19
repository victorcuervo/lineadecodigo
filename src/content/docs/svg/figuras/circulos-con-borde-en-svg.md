---
title: "Círculos con borde en SVG"
description: "Se explica cómo dibujar círculos con borde en SVG usando los atributos stroke y stroke-width."
lastUpdated: 2025-12-19
slug: svg/circulos-con-borde-en-svg
author: victor_cuervo
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

