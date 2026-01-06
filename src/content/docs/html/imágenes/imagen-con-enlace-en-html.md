---
title: "Imagen con enlace en HTML"
description: "Como crear una imagen con enlace en HTML para que al pinchar nos lleve a otra página web mediante los elementos HTML img y anchor o a."
date: 2010-02-02
updatedDate: 2026-01-06
tags: ["imagenes","enlaces","href","alt"]
slug: html/imagenes/imagen-con-enlace-en-html
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_html/blob/master/enlaces/imagen-con-enlace.html
topic: html
---

Aunque lo normal en la web es que [los enlaces sean textos](https://lineadecodigo.com/tag/html-enlaces/), también podemos extender la capacidad de hacer enlaces con imágenes. De esta forma, cuando pulsemos sobre una imagen, esta actuará como enlace y nos llevará al destino demarcado por el enlace.


Para poder hacer esto en [HTML](http://www.manualweb.net/html/), lo primero será poner una imagen. Para ello nos basamos en el elemento [`img`](https://w3api.com/HTML/img/):


```html
<img src="casarural.jpg" alt="Los Tejos" />
```


El fichero que mostrará la imagen lo indicamos mediante el atributo [`src`](https://www.w3api.com/HTML/img/src/) del elemento [`img`](https://w3api.com/HTML/img/). Este podrá ser directamente el nombre de la imagen o un directorio relativo a la página dónde se encuentre la imagen o bien una dirección absoluta con el dominio y el directorio que apunte directamente a la imagen.


> Acordaros, como buena práctica, el poner un texto alternativo a la imagen con el atributo [`alt`](https://www.w3api.com/HTML/img/alt/) para aquellos casos en los que no se pueda cargar la imagen o bien para cuando sean necesarias capacidades de accesibilidad y poder ser interpretada la imagen por un lector.


Ahora tendremos que recubrir el código de la imagen con un código de enlace. El decir el enlace quedará de forma externa al elemento de la imagen.


Para los enlaces nos basamos en el elemento [`a`](https://www.w3api.com/HTML/a/)[ o anchor](https://www.w3api.com/HTML/a/). Y para indicar el enlace el atributo [`href`](https://w3api.com/HTML/a/href/). Al igual que pasa con las imágenes la url a la que apunte el atributo [`href`](https://w3api.com/HTML/a/href/) puede ser una dirección relativa, una dirección relativa con el directorio en el que se encuentre el enlace o bien una dirección absoluta con el dominio, el directorio y el elemento del enlace. 


Con todo esto que ya sabemos el código quedaría de la siguiente forma:


```html
<a title="Los Tejos" href="http://www.lostejos.com"><img src="casarural.jpg" alt="Los Tejos" /></a>
```


Ya habremos conseguido construir una imagen con enlace en [HTML](http://www.manualweb.net/html/). ¿Sabrías cómo hacer que este enlace, en vez de apuntar a una página web, apuntase a otra imagen para que al hacer click en la imagen se abriese la nueva imagen? Nos los puedes compartir en los comentarios.

