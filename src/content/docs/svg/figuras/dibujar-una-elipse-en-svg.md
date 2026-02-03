---
title: "Dibujar una elipse en SVG"
description: "Para dibujar una elipse en SVG se utilizan los atributos cx, cy, rx, ry y la propiedad fill."
date: 2008-01-11
updatedDate: 2026-01-07
tags: ["fill","elipse","ellipse"]
slug: svg/figuras/dibujar-una-elipse-en-svg
author: victor_cuervo
type: doc
topic: svg
id: 2c8a9dfb-adca-8194-b9cb-d4bd50c511f8
download: https://github.com/victorcuervo/lineadecodigo_svg/blob/master/figuras/dibujar-una-elipse.svg
---

Si queremos dibujar una elipse en SVG deberemos de utilizar la etiqueta `ellipse`. En este caso lo que vamos a hacer es dibujar una elipse de 50x100 de color rojo.


La forma de configurarla es muy sencilla. En primer lugar lo que hay que hacer es posicionarla en el eje de coordenadas mediante los atributos cx y cy.


```xml
<ellipse cx="200" cy="100"/>
```


Una vez posicionada deberemos de darle un valor de radio de ancho y alto. En este caso utilizaremos los atributos rx y ry. Mediante rx especificamos el radio horizontal de la elipse y mediante ry el radio vertical.


```xml
<ellipse rx="100" ry="50"/>
```


Lo último que nos quedará será el rellenar la elipse del color elegido. Rojo en nuestro caso. Para ello utilizamos la propiedad de pintado fill dandole el nombre en ingles del color.


```xml
<ellipse fill="red"/>
```


El código final quedaría de la siguiente forma:


```xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="300" height="300">

<ellipse cx="200" cy="100" rx="100" ry="50" fill="red"/>

</svg>
```

