---
title: "Dibujar un rectángulo con SVG"
description: "Aprende a dibujar un rectángulo con SVG usando la etiqueta rect. Define el tamaño, posición y color con atributos width, height, x, y y fill."
date: 2009-03-02
updatedDate: 2026-02-09
tags: ["rect","fill","width","height"]
slug: svg/figuras/dibujar-un-rectangulo-con-svg
type: doc
topic: svg
id: 2c8a9dfb-adca-817e-886d-f1e754952898
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_svg/blob/master/figuras/dibujar-un-rectangulo.svg
---

Dibujar un rectángulo con [SVG](https://www.manualweb.net/svg/) es una cosa bastante fácil ya que el rectangulo es una de las figuras estándar del lenguaje [SVG](https://www.manualweb.net/svg/). Para ello necesitaremos utilizar la etiqueta RECT.


## Definir el tamaño del rectángulo


Los dos primeros atributos importantes para nuestro ejemplo son la altura y ancho del rectangulo. Para ello utilizaremos los atributos de la etiqueta RECT: width y height.


```xml
<rect fill="red" height="100" width="200"></rect>
```


## Posicionar el rectángulo


Otra cosa que podemos hacer es la de posicionar el rectangulo dentro del lienzo. Para ello tendremos que definir las coordenadas X,Y del lienzo. El nombre de los atributos es el mismo: X e Y.


```xml
<rect height="100" width="200" x="50" y="50"></rect>
```


## Dar color al rectángulo


Por último vamos a darle color a la cosa. En este caso, utilizaremos el atributo fill, indicándole el color que queremos usar (rojo en este caso):


```xml
<rect fill="red"></rect>
```


Aunque podríamos darle el color mediante un estilo y el atributo style:


```xml
<rect style="fill:red;"></rect>
```


## Código completo


El código que nos quedaría al final sería algo parecido a lo siguiente:


```xml
<rect fill="red" height="100" width="200" x="50" y="50"></rect>
```

