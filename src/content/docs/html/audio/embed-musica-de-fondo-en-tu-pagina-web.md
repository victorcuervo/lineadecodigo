---
title: "Embed - Música de fondo en tu página web"
description: "Descubre cómo añadir música de fondo en tu página web utilizando el elemento embed y sus atributos. Mejora la experiencia del usuario con este recurso técnico."
date: 2007-03-24
updatedDate: 2026-01-21
tags: ["embed","autostart","bgsound"]
slug: html/audio/embed-musica-de-fondo-en-tu-pagina-web
type: doc
topic: html
id: bb17e062-4d8c-473d-8963-b237dd8e4cff
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html/blob/master/video-y-sonido/embed-musica-de-fondo.html
---

Cuanto más amplio es el espectro de navegadores y sistemas operativos sobre el que tenemos que diseñar nuestra página web más se complican las cosas. Por lo que tendremos que acudir al elemento [`embed`](https://www.w3api.com/HTML/embed/) para poner música de fondo en nuestra página web.


Esto también lo podemos hacer con el elemento `bgsound` ([recomendable leerse el artículo que explica cómo utilizar esta etiqueta](https://lineadecodigo.com/html/bgsound-musica-de-fondo-en-tu-pagina-web/)). Que fue el primer elemento que se creó para poder poder música de fondo en nuestra página web.


En este artículo vamos a entrar en profundidad sobre cómo podemos utilizar el elemento [`embed`](https://www.w3api.com/HTML/embed/) y los diferentes atributos de los que dispone para gestionar música.


Si bien, hay que tener en cuenta que este elemento sigue sin ser estándar. Aunque, cierto es, que la interpretan un mayor número de navegadores y plataformas. (_a marzo de 2007_)


## Atributo src del elemento embed


El atributo más importante a conocer del elemento [`embed`](https://www.w3api.com/HTML/embed/) es [`src`](https://www.w3api.com/HTML/embed/src/). Este nos permitirá indicar cuál es el fichero que contiene el audio. El código sería algo parecido a lo siguiente:


```html
<embed src="starwars.mid">
```


## Ocultar el control con hidden


Si ponemos este código tal cual nos saldrá un control musical con sus botones de **play**, **stop**, **control de volumen**,... y claro, como nosotros queremos poner música de fondo, deberemos de ocultar dicho control. Para ello contamos con el atributo [`hidden`](https://www.w3api.com/HTML/hidden/), al cual deberemos de dar un valor de true.


```html
<embed src="starwars.mid" hidden="true">
```


## Iniciar automáticamente con autostart


Y ahora, hecho esto, tenemos un ligero problema. Y es que cuando teníamos el control musical, disponíamos del botón play para forzar el inicio de la canción y ahora, al haber ocultado el control, no tenemos forma de hacerlo y es por ello que la canción no comenzará. Por lo tanto, deberemos de utilizar el atributo `autostart` con un valor true para que se inicie la canción.


```html
<embed src="starwars.mid" autostart="true">
```


Y a disfrutar de cómo poner música de fondo en nuestra página web.


---


## Actualización


Este ejemplo era válido en navegadores antiguos y para la versión [HTML 4.01](https://manualweb.net/html/). Desde la especificación [HTML 5](https://manualweb.net/html5/) disponemos del elemento [`audio`](https://www.w3api.com/HTML/audio/) que nos permite gestionar la música dentro de las páginas web y el atributo [`autoplay`](https://www.w3api.com/HTML/audio/autoplay/) para iniciar la música de forma automática. Puedes leer el artículo [Música infinita en tu web con HTML5](http://lineadecodigo.com/html5/musica-infinita-en-tu-web-con-html5/) para ver el nuevo funcionamiento.

