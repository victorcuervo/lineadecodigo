---
title: "Fechas en formato local con Javascript"
description: "Utilización del objeto Date y del método .toLocaleDateString() para poder construir fechas en formato local con Javascript."
date: 2021-01-30
updatedDate: 2026-01-13
tags: ["date","tolocaledatestring","bcp47","utc","intl","dateformat"]
slug: javascript/i18n/fechas-en-formato-local-con-javascript
author: victor_cuervo
type: doc
topic: javascript
id: d613b0ef-af1a-43dc-ab6d-d5594c34b75c
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/fechas/formato-fecha-locale.js
---

En los artículos que tenemos sobre [fechas en Javascript](http://lineadecodigo.com/tag/javascript-date/) nos faltaba uno acerca de cómo poder crear fechas en formato local con [Javascript](http://www.manualweb.net/javascript). Es decir poder **realizar una internacionalización (i18n)** de la fecha antes de imprimirla. Muchos os estaréis diciendo, "esto [ya lo hemos visto utilizando el objeto Java.Intl](http://lineadecodigo.com/javascript/formato-de-fechas-en-javascript/)". Y es verdad. Pero en este caso vamos a ver las capacidades que tiene directamente el objeto `Date` para poder realizar esta internacionalización (i18n).


## Crear una fecha con Date.UTC()


Lo primero de todo será crear una fecha mediante el objeto `Date`. En este caso vamos a utilizar el método `.UTC()` para crear una fecha concreta de la siguiente manera:


```javascript
let fecha = new Date(Date.UTC(2021, 0, 30, 15, 0, 0));
```


## Formato local con toLocaleDateString()


Lo siguiente será el ver cómo podemos dar el formato local. Para ello nos vamos a apoyar en el método `.toLocaleDateString()` el cual recibe por un lado una cadena que siga [la especificación BCP 47](http://tools.ietf.org/html/rfc5646). Esto es más o menos dos pares de caracteres separados por un guión en los que se puede identificar el idioma y el país. Así tenemos **es-ES** castellano para España, **en-UK** que sería inglés en el Reino Unido, **en-US** que sería inglés en Estados Unidos o **ar-EG** que sería árabe en Egipto.


El segundo parámetro es un **elemento JSON** en el que podemos indicar las opciones de la localización. Entre estas opciones encontramos las siguientes:

- **weekday**, como queremos que se represente el día de la semana si con un texto estrecho (_narrow_), corto (_short_) o largo (_long_).
- **year**, por si queremos que sea de cuatro dígitos (_numeric_) o de dos dígitos (_2-digit_).
- **month**, podemos visualizarlo con un dígito (_numeric_), con dos digitos (_2-digit_), estrecho (_narrow_), corto (_short_) o largo (_long_).
- **day**, que podrá ser de un dígito (_numeric_) o de dos dígitos (_2-digit_).

Así podríamos tener la siguiente configuración de opciones para visualizar la fecha.


```javascript
let opciones = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};
```


> La verdad es que en este punto hay un pequeño "truco" y es que el método `.toLocaleDateString()` realmente está ejecutando el constructor del `Intl.DateTimeFormat`.


## Mostrar fechas en diferentes locales


Ahora lo que haremos será invocar al método `.toLocaleDateString()` con la cadena del locale más las opciones. Así tenemos las siguientes opciones que se mostrarían por consola.


```javascript
console.log(fecha.toLocaleDateString('es-ES', opciones));
console.log(fecha.toLocaleDateString('en-UK', opciones));
console.log(fecha.toLocaleDateString('en-US', opciones));
console.log(fecha.toLocaleDateString('ar-EG', opciones));
```


De esta forma tan sencilla hemos conseguido poder mostrar por consola fechas en formato local con [Javascript](http://www.manualweb.net/javascript).

