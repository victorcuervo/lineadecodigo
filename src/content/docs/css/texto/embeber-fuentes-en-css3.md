---
title: "Embeber fuentes en CSS3"
description: "Cómo podemos utilizar nuestras propias fuentes al embeber fuentes en CSS3."
date: 2012-01-15
updatedDate: 2026-01-17
tags: ["font-family","font-face","css3","fuentes"]
slug: css/texto/embeber-fuentes-en-css3
type: doc
topic: css
id: 46e23955-bc7b-4f09-b6f4-4963cbd345d0
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_css/fuentes/font-embbeding.html
---

Dentro de [CSS3](http://www.manualweb.net/css/) tenemos la capacidad de embeber nuestras propias fuentes dentro de nuestra página web. Abriéndonos a un gran abanico de tipografías y evitando las restricciones de las propias fuentes que vienen definidas en el estándar de [CSS](http://www.manualweb.net/css/). Esto nos dará una gran potencia, ya que simplemente tendremos que generar texto y aplicarles la nueva tipografía gracias a la capacidad de embeber nuestras propias fuentes y no tendremos que recurrir a soluciones como la integración de tipografías con imágenes. Tendremos una página web más ligera.


Lo primero que tenemos que hacer es tener una tipografía. Las **extensiones soportadas son TrueType (.ttf), OpenType (.otf) y** [Scalable Vector Graphics](https://www.manualweb.net/svg/) **(.svg)**.


Así, nuestra fuente elegida para el ejemplo de embeber fuentes en [CSS3](http://www.manualweb.net/css/) es NisePico.ttf.


## Definir la fuente con @font-face


**La regla que tenemos que meter en** [**CSS3**](http://www.manualweb.net/css/) **para embeber nuestra fuente es @font-face**. Esta regla lo que hace es definir el nombre de nuestra fuente e indicar de dónde se descarga dicha fuente. Así el código será el siguiente:


```css
@font-face {
  font-family: NisePico;
  src: url(fonts/NisePico.ttf);
}
```


## Utilizar la fuente personalizada


Ya simplemente podremos utilizar la fuente NisePico dentro de cualquier uso del font en nuestras [CSS](http://www.manualweb.net/css/). Así, por ejemplo, podemos definirnos el siguiente estilo:


```css
.nisepico {
  font-family: NisePico;
}
```


Que asignaremos a la clase de cualquier elemento:


```html
<p class="nisepico">Texto con la fuente NisePico</p>
```


## Compatibilidad de navegadores


Aunque embeber fuentes en [CSS3](http://www.manualweb.net/css/) es muy potente, tenemos que tener cuidado en comprobar que los navegadores sobre los que despleguemos nuestro desarrollo tienen capacidad de interpretar el @font-face. El soporte lo podemos encontrar desde Internet Explorer 9, Firefox 6, Chrome 13, Safari 3.2 y Opera 11 en adelante.

