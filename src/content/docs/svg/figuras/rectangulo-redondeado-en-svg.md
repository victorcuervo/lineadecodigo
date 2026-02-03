---
title: "Rectángulo redondeado en SVG"
description: "Este ejemplo muestra cómo crear un rectángulo redondeado en SVG utilizando las propiedades rx y ry."
date: 2007-12-24
updatedDate: 2026-01-08
tags: ["circulo","rect","rectangulo","triangulo"]
slug: svg/figuras/rectangulo-redondeado-en-svg
author: victor_cuervo
type: doc
topic: svg
id: aac31514-9cf9-4867-a8ef-c677a4b0186c
download: https://github.com/victorcuervo/lineadecodigo_svg/blob/master/figuras/rectangulo-esquinas-redondeadas.svg
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

