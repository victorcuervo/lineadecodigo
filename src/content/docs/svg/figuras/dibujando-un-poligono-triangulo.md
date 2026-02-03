---
title: "Dibujando un polígono - triángulo"
description: "Este ejemplo muestra cómo dibujar un triángulo en SVG usando el elemento POLYGON y sus atributos."
date: 2008-01-13
updatedDate: 2026-01-07
tags: ["fill","stroke","stroke-width","triangulo","polygon"]
slug: svg/figuras/dibujando-un-poligono-triangulo
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-8123-a9b9-c09c8f783dc7
download: https://github.com/victorcuervo/lineadecodigo_svg/blob/master/figuras/dibujar-un-poligono-triangulo.svg
---

En este ejemplo vamos a ver los pasos necesarios para poder pintar un Triángulo en [SVG](http://lineadecodigo.com/categoria/svg/) utilizando el elemento POLYGON. Para ello lo único que necesitamos conocer los vértices de nuestro polígono. El polígono elegido es un Triángulo. Como su nombre bien dice, tendremos tres lados y consecuentemente tres vértices que tendremos que indicar al elemento POLYGON para que este se pueda pintar. Los vértices de nuestro polígono son indicados mediante el atributo points. Para ello bastará dar las coordenadas de los puntos. Estas separadas entre comas y a su vez, cada coordenada, separada por un espacio. Las coordenadas elegidas para nuestro Triángulo son: (100,100) (100,200) y (200,200). La etiqueta nos quedará de la siguiente forma:


```xml
<polygon points="100,100 100,200 200,200"/>
```


En cuanto al coloreado del polígono tendremos que recurrir al atributo fill. Mediante el cual, y utilizando un nombre, indicaremos el color de relleno del Triángulo


```xml
<polygon points="100,100 100,200 200,200" fill="red">
```


Otra de las cosas que podemos modificar es el borde del Triángulo Para poder llevar a cabo esto utilizamos los atributos stroke para indicar el color del borde y stroke-width para indicar su tamaño.


```xml
<polygon stroke-width="10" stroke="green"/>
```

