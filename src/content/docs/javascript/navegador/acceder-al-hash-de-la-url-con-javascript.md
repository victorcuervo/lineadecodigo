---
title: "Acceder al hash de la URL con Javascript"
description: "Utilización de la propiedad location.hash para acceder al hash de la URL con Javascript."
date: 2014-01-29
updatedDate: 2026-01-12
tags: ["location","hash"]
slug: javascript/navegador/acceder-al-hash-de-la-url-con-javascript
author: victor_cuervo
type: doc
id: ebc1aa7c-0bf7-4095-9b39-8a650c41a1e4
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/pagina/obtener-hash.html
---

Si miras una URL el final de esta puede contener una palabra separada por un símbolo de almohadilla (#). Esto es lo que se conoce como **elemento hash de la URL** y nos sirve para posicionarnos dentro de una parte determinada de la página.


Esto lo conseguimos de forma sencilla mediante [HTML](https://www.manualweb.net/html/). La URL `miweb.html#elemento` se va a posicionar en la página allí dónde utilicemos el siguiente código:


```html
<a name="elemento"></a>
```


Si quieres más información al respecto puedes leer el artículo _Enlace a una parte concreta de la página_ el cual te resolverá todas tus dudas.


## ¿Cómo acceder al hash de la URL con Javascript?


¿Qué hacer si queremos controlar cuando el usuario llegue con una URL que contenga una etiqueta o elemento de hash? La solución es bastante sencilla y es que en [Javascript](https://www.manualweb.net/javascript/) tenemos el objeto `location`, el cual hace referencia a la URL que maneja el navegador, este objeto nos va a facilitar acceder al hash de la URL.


En concreto tenemos una propiedad del objeto `location` llamada `.hash` (el nombre que ni pintado) que nos devuelve el hash de la URL.


```javascript
location.hash
```


Como podemos ver, el uso de la propiedad `location.hash` nos facilita el acceso al hash de la URL con [Javascript](https://www.manualweb.net/javascript/).


## Consideraciones importantes


Eso sí, solo tenemos que tener cuidado con una cosa, y es que no nos devuelve el elemento correspondiente con el hash, si no que nos devuelve el elemento precedido de la almohadilla. Así de la URL:


```javascript
miweb.html#elemento
```


El objeto `location.hash` nos devolverá:


```javascript
#elemento
```


Ahora ya solo queda decidir qué hacer con el hash. Por ejemplo mostrar un contenido u otro, mostrar una pestaña u otra,... ¿qué más casos se te ocurren para utilizar la propiedad hash en Javascript?

