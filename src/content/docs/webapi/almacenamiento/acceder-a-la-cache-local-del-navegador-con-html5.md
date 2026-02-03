---
title: "Acceder a la caché local del navegador con HTML5"
description: "El objeto localStorage nos va a permitir acceder a la caché local del navegador con HTML5 y guardar información persistente para la sesión."
date: 2010-10-09
updatedDate: 2026-01-23
tags: ["localstorage","setitem","getitem"]
slug: webapi/almacenamiento/acceder-a-la-cache-local-del-navegador-con-html5
author: victor_cuervo
type: doc
topic: webapi
id: 2c8a9dfb-adca-813d-8c58-d532f060b2ba
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/WebStorage/insertar-elemento/insertar-elemento-web-storage.html
---

Una de las cosas que podemos (o vamos a poder hacer) con los navegadores, una vez que estos implementen [HTML5](http://www.manualweb.net/html5/) (y anexos) es acceder a la caché local del navegador con [HTML5](http://www.manualweb.net/html5/). De esta forma podremos almacenar información de forma persistente, a lo largo de toda la sesión de un usuario y lo mejor de todo, no será en el servidor, si no que será en el navegador. Lo cual nos va a permitir dotar de funcionalidad offline a nuestras aplicaciones.


## Características de Local Storage


Algunas [cosas que tienes que saber de la caché local o Local Storage](http://lineadecodigo.com/tag/html5-localstorage/) son:

- Que esta tecnología viene a sustituir a las cookies en la faceta de persistir información
- La vida de los datos durará mientras el usuario no cierre la ventana
- El tamaño de los datos que puedes almacenar en la caché variará entre 5Mb y 10Mb
- Que los datos se guardarán asociados al dominio

## Comprobar soporte de localStorage


Lo primero que haremos en nuestro código será comprobar que existe el elemento `localStorage`, y por lo tanto tenemos acceso a la caché local. Así nos aseguramos que el navegador en el que se está ejecutando nuestro código tiene soporte para el elemento `localStorage`.


```javascript
if (typeof(Storage) !== "undefined") {
  // Código para localStorage
}
```


## Almacenar información en la caché


En el caso que exista la caché podemos acceder a ella mediante el objeto `localStorage` de dos formas. En un primer lugar podremos almacenar información en la caché mediante las siguientes sentencias:


```javascript
localStorage.setItem("clave", "valor");
localStorage.clave = "valor";
```


## Recuperar información de la caché


Y para recuperar la información de la caché será muy parecido y lo realizaremos de la siguiente forma:


```javascript
var valor = localStorage.getItem("clave");
var valor = localStorage.clave;
```


Con estas pocas sentencias ya podremos acceder a la caché local del navegador con [HTML5](http://www.manualweb.net/html5/) y aprovechar todas las capacidades que nos ofrece.

