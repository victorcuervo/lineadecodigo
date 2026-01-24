---
title: "Enlaces a Teléfonos"
description: "Descubre cómo crear enlaces a teléfonos con el protocolo tel y mejora la interacción de tus páginas web con los dispositivos. ¡Haz que tus usuarios se conecten fácilmente!"
date: 2019-01-16
updatedDate: 2026-01-24
tags: ["a","href","tel"]
slug: html/enlaces/enlaces-a-telefonos
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_html/blob/master/enlaces/enlace-telefono.html
topic: html

---

¿Crear enlaces a teléfonos? En los primeros años de la Web (que ya parecen unos cuantos) la idea de los enlaces era la de [enlazar páginas entre sí](http://lineadecodigo.com/html/hipervinculos-enlazar-dos-paginas-web/), crear [enlaces a sitios concretos de páginas](http://lineadecodigo.com/html/enlace-a-una-parte-concreta-de-la-pagina/) o [enlazar a algún recurso](http://lineadecodigo.com/html/imagen-con-enlace-en-html/).


Algo que hemos [explicado en la parte de enlaces de nuestro manual sobre HTML](http://www.manualweb.net/html/enlaces-html/). Pero claro, la extensión del uso de la web y la aparición de nuevos dispositivos: teléfonos, televisiones,... hace que la interacción con los mismos cambie las bases del paradigma del [lenguaje HTML](http://www.manualweb.net/html/).


Algo que ya hemos visto con la evolución al [lenguaje HTML5](http://www.manualweb.net/html5/) y todas las capacidades de acceso a los dispositivos que se han incluido. Entonces crear enlaces a teléfonos se ha convertido en una necesidad clara para el desarrollo de páginas web.


La idea es que cuando pulses sobre un enlace, cuando se pulse sobre un botón o cualquier otro elemento que sea enlazable se active una llamada por teléfono. Aquí puede pasar que si estás en un dispositivo móvil se active la llamada sobre el número enlazado y si estás en un dispositivo de escritorio puedan abrirse software de comunicación como podría ser un Skype.


## El protocolo tel


**La base para crear enlaces a teléfonos es el protocolo** `tel`. La idea es que el protocolo sirva para identificar un recurso de teléfono con al que queremos llamar.


El formato en el que deberemos de escribir el teléfono deberá de ser el formato internacional. Es decir, el prefijo del país del número, seguido del número. De esta forma si queremos llamar al teléfono 695 68 59 20 de España escribiremos lo siguiente:


```text
tel:+34695685920
```


## Crear el enlace al teléfono


Ahora lo que tendremos que hacer es crear un enlace sobre dicho recurso. Para ello utilizamos el elemento `a` del [lenguaje HTML](http://www.manualweb.net/html/), en concreto su atributo `href`.


```html
<a href="tel:+34695685920">Llamar al Teléfono</a>
```


Este simple protocolo `tel` y el uso como enlaces nos da una gran potencia a la hora de crear documentos web que estén muy integrados con nuestros dispositivos telefónicos.

