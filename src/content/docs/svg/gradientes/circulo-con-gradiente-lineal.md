---
title: "Circulo con gradiente lineal"
description: "El artículo explica cómo crear un círculo con un gradiente lineal que va del rojo al naranja en SVG."
lastUpdated: 2025-12-19
slug: svg/circulo-con-gradiente-lineal
author: victor_cuervo
---

Un gradiente lineal es una variación de color entre dos puntos de forma linear. Aunque, estoy seguro que la palabra gradiente tendrá múltiples interpretaciones dependiendo del área donde lo apliquemos, aquí vamos a ver como lo trata el lenguaje [SVG](http://lineadecodigo.com/categoria/SVG/).


Pongámonos manos a la obra. El ejemplo intenta mostrar como hacer un gradiente linear que pase del rojo al naranja dentro de un circulo.


Lo primero de todo y la clave de nuestro ejemplo será definir el gradiente que vamos a utilizar. Ya que posteriormente, dicho gradiente, lo aplicaremos sobre el circulo.


Para definir el gradiente lineal utilizamos la etiqueta `linearGradient`. Entre los atributos de esta etiqueta encontramos el vector que define el gradiente linear. Dichos atributos son x1, y1, x2, y2. Este vector indica los puntos de inicio y fin donde el gradiente empezará y acabará. Los valores que podemos aplicar a dichos atributos pueden ser o bien número o bien porcentajes.


```xml
<linearGradient id="rojo_naranja" x1="0%" y1="0%" x2="0%" y2="100%" />
```


Como etiquetas hijo dentro de linearGradient encontraremos el control de los colores mediante la etiqueta stop. Dicha etiqueta nos permitirá el definir el color con el que iniciamos y acabamos el gradiente.


```xml
<linearGradient id="rojo_naranja" x1="0%" y1="0%" x2="0%" y2="100%">
  <stop offset="20%" stop-color="#f00" />
  <stop offset="80%" stop-color="#ff0" />
</linearGradient>
```


La etiqueta stop tiene dos atributos significativos. El primero es offset, el cual indica, en que tanto por ciento del vector vamos a empezar a aplicar el gradiente. El segundo es stop-color, el cual indica el color a utilizar.


Toda esta declaración del gradiente, con el fin de poder ser utilizada, deberá de definirse dentro de las etiquetas de definición defs.


```xml
<defs>
  <linearGradient id="rojo_naranja" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="20%" stop-color="#f00" />
    <stop offset="80%" stop-color="#ff0" />
  </linearGradient>
</defs>
```


Una vez completo nuestro gradiente linear. Solo quedará definir la figura a utilizar y sobre la cual aplicaremos el gradiente. En nuestro ejemplo será un circulo. Para aplicar el gradiente utilizamos el ID que le hayamos dado al mismo. En este caso "rojo_naranja". El ID será utilizado como relleno mediante la propiedad fill.


El código del circulo nos quedaría algo así:


```xml
<circle cx="600" cy="200" r="100" style="fill:url(#rojo_naranja)"
   stroke="#000" stroke-width="2"/>
```

