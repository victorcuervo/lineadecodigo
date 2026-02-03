---
title: "Enviar SMS desde Web"
description: "Descubre cómo enviar SMS desde Web con un simple enlace HTML y permite que tus usuarios te contacten fácilmente. ¡Implementa esta función y mejora tu comunicación!"
date: 2019-01-18
updatedDate: 2026-01-24
tags: ["a","href","sms"]
slug: html/enlaces/enviar-sms-desde-web
author: victor_cuervo
type: doc
id: cf4b70f7-b1c3-4a8c-8859-947871b1ef38
download: https://github.com/victorcuervo/lineadecodigo_html/blob/master/enlaces/enlace-sms.html
---

Ya hemos visto [cómo podemos enviar un WhatsApp desde una Web](http://lineadecodigo.com/html/enviar-whatsapp-desde-webs/) o [cómo poner un enlace para que se pueda hacer una llamada por teléfono](http://lineadecodigo.com/html/enlaces-a-telefonos/). Ahora lo que vamos a ver es cómo podemos **enviar un SMS desde Web** con el [lenguaje HTML](http://www.manualweb.net/html/).


Es decir, crear una página que mediante un enlace [HTML](http://www.manualweb.net/html/) nos permita enviar un SMS al número que queramos. La idea es poder añadir a tu web un enlace de **"Envíame un SMS"** para que tus usuarios/clientes contacten contigo.


## El protocolo SMS


Lo primero que tenemos que conocer es que el protocolo para poder enviar SMS desde Web es `sms`. Es decir, cuando crees un enlace el protocolo a utilizar no será `http`, sino `sms`.


El protocolo deberá de ir seguido de un número de teléfono en formato internacional, es decir, con el prefijo del país. Los que puede ser necesites utilizar son 34 para España, el 52 para México, 57 para Colombia, 51 Perú, 54 Argentina, seguido del número el teléfono local al cual queremos enviar el SMS.


De esta forma para enviar un SMS a un teléfono 695 68 59 20 de España la URI sería la siguiente:


```html
tel:+346956859202
```


## Crear el enlace para enviar SMS


Ahora lo que tendremos que utilizar es un elemento de enlaces de [HTML](http://www.manualweb.net/html/), es decir un elemento `a` para poder crear nuestro enlaces. En concreto la URI la utilizaremos dentro del atributo `href`.


Así nuestro enlace [HTML](http://www.manualweb.net/html/) para poder enviar SMS desde Web sería el siguiente:


```html
<a href="sms:+34695685920">Envíame un SMS</a>
```


De esta forma tan sencilla tenemos el enlace creado para que se puedan poner en contacto con nosotros vía SMS desde una web. Algo realmente sencillo.


¿Cómo de útil lo consideras para ponerlo dentro de tus webs?

