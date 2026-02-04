---
title: "Formatear listas en Javascript"
description: "Utilización del objeto Int.ListFormat para poder formatear listas en Javascript de forma conjuntiva, disyuntiva y por unidad."
date: 2021-01-20
updatedDate: 2026-01-13
tags: ["intl","listformat","bcp47","format"]
slug: javascript/i18n/formatear-listas-en-javascript
type: doc
topic: javascript
id: 2c8a9dfb-adca-81af-b224-ef7c1a8077f3
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/i18n/formatear-lista.js
---

En el artículo de hoy vamos a seguir viendo cómo se puede [seguir utilizando el objeto Intl](http://lineadecodigo.com/tag/javascript-intl/) para dar formatos atendiendo a un modelo i18n. En este caso vamos a ver cómo **formatear listas en Javascript**. En concreto vamos a utilizar el objeto [`Intl.ListFormat`](http://w3api.com/Javascript/Intl/ListFormat/).


Pero qué es eso de la internacionalización del formato de las listas en Javascript. La idea es que nos permita convertir a un formato texto una lista de elementos. De esta forma si tenemos una lista de elementos nos los presente de la siguientes formas:


```shell
elemento1, elemento2 y elemento3 //si es una lista conjuntiva
elemento1, elemento2 o elemento3 // si es una lista disyuntiva
elemento1 elemento2 elemento3 //si es una enumeración de elementos
```


Además la gracia es que me lo haga atendiendo al idioma, por lo que esto mismo en inglés sería:


```shell
elemento1, elemento2 and elemento3 //si es una lista conjuntiva
elemento1, elemento2 or elemento3 // si es una lista disyuntiva
elemento1 elemento2 elemento3 //si es una enumeración de elementos
```


## Crear la lista de elementos


Pongámonos manos a la obra para poder ejecutarlo. Lo primero de todo será el tener la lista de elementos. En este caso vamos a tener una lista de ciudades, para ello declaramos la siguiente constante:


```shell
const ciudades = ['Madrid', 'Barcelona', 'Sevilla'];
```


## Instanciar Intl.ListFormat


Ahora vamos a instanciar el objeto [`Intl.ListFormat`](http://w3api.com/Javascript/Intl/ListFormat/). Al igual que [el resto de objetos de tipo Intl](http://lineadecodigo.com/tag/javascript-intl/) tiene dos parámetros.


El primero corresponde al **locale** en un formato etiqueta [representada por un código BCP 47](http://tools.ietf.org/html/rfc5646). Por lo que tendremos una etiqueta con 2 o 4 caracteres si aplicamos el país del estilo _es-ES, en-US, ar-EG_,... o _es, en, ar_,...


Y el segundo parámetro serán las opciones, en formato JSON, que le queremos dar a la lista. En este caso manejamos dos valores:

- **style**, cuyos valores son _"long"_, _"short"_ o _"narrow"_ y corresponde a lo largo o corto que queramos el texto.
- **type**, nos permite indicar de que tipo es la lista. Como vimos en el ejemplo si es _"conjuction"_, _"disjunction"_ o _"unit"._

Así, si queremos una lista donde sea de tipo larga y que sea una lista conjuntiva invocaremos [al constructor del objeto Intl.ListFormat](http://w3api.com/Javascript/Intl/ListFormat/Intl/ListFormat/) de la siguiente manera:


```javascript
const formatoConjuntivo = new Intl.ListFormat('es-ES', { style: 'long', type: 'conjunction' });
```


## Formatear la lista


Solo nos quedará el llamar al método [`.format()`](http://w3api.com/Javascript/Intl/ListFormat/format) para poder dar formato a la lista de valores. Es por ello que pasamos el valor de la lista a dicho método:


```javascript
console.log(formatoConjuntivo.format(ciudades));
```


## Código completo


Veamos como quedaría el código completo con diferentes maneras de formatear listas en Javascript:


```javascript
const ciudades = ['Madrid', 'Barcelona', 'Sevilla'];

// Lista conjuntiva en español
const formatoConjuntivo = new Intl.ListFormat('es-ES', { style: 'long', type: 'conjunction' });
console.log(formatoConjuntivo.format(ciudades));

// Lista disyuntiva en español
const formatoDisyuntivo = new Intl.ListFormat('es-ES', { style: 'long', type: 'disjunction' });
console.log(formatoDisyuntivo.format(ciudades));

// Lista unitaria en español
const formatoUnitario = new Intl.ListFormat('es-ES', { style: 'long', type: 'unit' });
console.log(formatoUnitario.format(ciudades));
```


Espero que este nuevo artículo sobre [formatos internacionales en Javascript os sea de utilidad](http://lineadecodigo.com/tag/javascript-intl/).

