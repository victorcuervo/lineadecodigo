---
title: "Dibujar un círculo en SVG"
description: "Se explica cómo dibujar un círculo en SVG usando la etiqueta CIRCLE y sus atributos como r, cx, cy y fill."
lastUpdated: 2025-12-19
slug: svg/dibujar-un-circulo-en-svg
author: victor_cuervo
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

