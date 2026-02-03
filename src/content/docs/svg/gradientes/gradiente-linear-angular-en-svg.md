---
title: "Gradiente linear angular en SVG"
description: "Se explica cómo crear un gradiente lineal angular en SVG utilizando coordenadas específicas."
date: 2008-02-05
updatedDate: 2026-01-07
tags: ["gradiente","lineargradient","offset","stop","vector"]
slug: svg/gradientes/gradiente-linear-angular-en-svg
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-8104-ab5c-dd204ae6d0ea
download: https://github.com/victorcuervo/lineadecodigo_svg/blob/master/gradientes/gradiente-lineal-angular.svg
---

Dos buenos ejemplos para empezar aprendiendo de gradientes en SVG son [Circulo con Gradiente Lineal](http://lineadecodigo.com/2008/01/17/circulo-con-gradiente-lineal/) y [Gradiente Lineal Vertical](http://lineadecodigo.com/2008/01/28/gradiente-lineal-vertical/). Los cuales explican como hacer gradientes lineales horizontales y verticales respectivamente. A si que lo que nos queda por explicar es como hacer un gradiente lineal angular en SVG


Cuando decimos angular, lo que queremos decir es que el vector que representa la transición de los colores tiene un cierto ángulo. Dentro de la definición del gradiente lineal, la cual hacemos mediante la etiqueta <linearGradient>, no encontramos forma de definir el angulo del vector. Para poder llevar a cabo esto, solo tenemos las coordenadas de inicio y de fin del vector.


Y la forma de conseguir un angulo es que tanto las coordenadas x1 y x2, como las coordenadas y1 e y2 sean diferentes entre si.


Así, por ejemplo, un angulo de 90 grados (noroeste) lo podríamos conseguir con la siguiente secuencia de coordenadas:


```xml
<linearGradient id="rojo_naranja" x1="0%" y1="100%" x2="100%" y2="0%" />
```


Quedándonos el siguiente código:


```xml
<defs>
 <linearGradient id="rojo_naranja" x1="0%" y1="100%" x2="100%" y2="0%">
   <stop offset="20%" stop-color="#f00"/>
   <stop offset="80%" stop-color="#ff0"/>
 </linearGradient>
</defs>

<circle cx="600" cy="200" r="100" style="fill:url(#rojo_naranja)"
   stroke="#000" stroke-width="2"/>
```

