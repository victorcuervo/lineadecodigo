---
title: "Rectángulo redondeado en SVG"
description: "Este ejemplo muestra cómo crear un rectángulo redondeado en SVG utilizando las propiedades rx y ry."
lastUpdated: 2025-12-19
slug: svg/rectangulo-redondeado-en-svg
author: victor_cuervo
---

Este ejemplo muestra cómo redondear los bordes de un rectángulo con el lenguaje [SVG](http://lineadecodigo.com/categoria/svg). La tarea es sencilla, ya que en la etiqueta básica RECT, que nos sirve para el dibujo de rectángulos, tenemos dos propiedades: rx y ry.


Ambas propiedades permiten redondear los bordes de la coordenadas X y las coordenadas Y.


Así podríamos tener el siguiente código:


```xml
<rect width="200" height="100" rx="20" ry="20" />
```


Todos los bordes se redonderarian 20 pixels.


Ahora que tendríamos un efecto muy curioso si redondeásemos tanto los bordes cómo el ancho y alto del rectángulo. Consiguiendo círculos y elipses......


## Circulo


```xml
<rect x="50" y="50" rx="100" ry="100" width="100" height="100" />
```


## Elipse


```xml
<rect x="50" y="50" rx="100" ry="200" width="200" height="100" />
```

