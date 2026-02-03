---
title: "Reemplazar un estado del History API"
description: "Artículo que nos muestra cómo podemos utilizar el método history.replaceState para poder reemplazar un estado del History API y asociar un nuevo objeto JSON"
date: 2019-01-12
updatedDate: 2026-01-19
tags: ["history","pushstate","replacestate"]
slug: html/navegador/reemplazar-un-estado-del-history-api
author: victor_cuervo
type: doc
topic: html
id: 2c8a9dfb-adca-81a9-bbfe-e0ee851792f4
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/History%20API/history-states-replace.html
---

En el anterior artículo hemos visto [por qué se añaden estados dentro del historial del navegador en las aplicaciones SPA (Single Page Application)](http://lineadecodigo.com/html5/gestionar-estados-del-historial-con-html5/) y cómo podemos controlarlos, en este caso vamos a ver cómo podemos reemplazar un estado del **History API** para asignarle nuevos valores.


Y es que como vimos, al realizar una inserción del estado mediante el método `.pushState()` el primer parámetro era un **objeto JSON** con información que fuese relevante para el estado y sobre todo que permitiese, una vez retornado al estado, el reproducirlo.


## Insertar un estado con pushState


Así podemos partir de haber insertado el siguiente estado dentro de nuestro documento [HTML5](http://www.manualweb.net/):


```javascript
history.pushState(
  {page: 1, section: "inicio"}, 
  "Página Inicio", 
  "/inicio"
);
```


Vemos que el primer parámetro es el objeto asociado al estado. Pero si recordamos la secuencia de estados, cuando cargamos un documento en primer lugar, este no tiene un objeto JSON asociado.


## El método replaceState


En este caso podemos recurrir al método `.replaceState()`. **Este método nos va a servir para cambiar el estado en el que nos encontramos actualmente**. Bien sea para cambiar el primer estado del documento que no tiene objeto JSON asociado o bien sea para cambiar cualquier otro estado del historial.


La sintaxis del método `.replaceState()` es la misma que la del método `.pushState()`.


```javascript
history.replaceState(objetoEstado, titulo, url);
```


## Reemplazar el estado actual


De esta forma podemos modificar el estado actual de un documento [HTML5](http://www.manualweb.net/) escribiendo lo siguiente:


```javascript
history.replaceState(
  {page: 0, section: "home"}, 
  "Página Principal", 
  "/"
);
```


## Ejemplo completo


Si queremos ver la secuencia que nos ayuda a reemplazar un estado del **History API** ejecutaríamos el siguiente código:


```javascript
// Al cargar la página, reemplazamos el estado inicial
history.replaceState(
  {page: 0, section: "home"}, 
  "Página Principal", 
  "/"
);

// Añadimos un nuevo estado
history.pushState(
  {page: 1, section: "productos"}, 
  "Productos", 
  "/productos"
);

// Verificamos el estado actual
console.log(history.state); // {page: 1, section: "productos"}

// Podemos reemplazar el estado actual
history.replaceState(
  {page: 1, section: "productos", filtro: "activos"}, 
  "Productos Activos", 
  "/productos?filtro=activos"
);

console.log(history.state); // {page: 1, section: "productos", filtro: "activos"}
```


Con esto hemos visto lo útil que es el uso del `replaceState` para reemplazar un estado del **History API** y sobre todo para dar un contexto al primer estado del documento sin añadir una nueva entrada al historial del navegador.

