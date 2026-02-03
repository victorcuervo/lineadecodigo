---
title: "Formato de Fechas en Javascript"
description: "Cómo utilizar el objeto Intl y su método .DateTimeFormat() para poder dar formato de fechas en Javascript de diferentes formas y con diferentes calendarios."
date: 2020-03-17
updatedDate: 2026-01-11
tags: ["intl","date","datetimeformat","datestyle","timestyle","calendar"]
slug: javascript/fechas/formato-de-fechas-en-javascript
author: victor_cuervo
type: doc
topic: javascript
id: 046425cf-a28d-479c-aac6-7fa6a32ecb4a
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/fechas/formatear-fecha.js
---

Algo que parece sencillo como el tratamiento de las fechas se puede volver algo complejo si no tenemos en cuenta cómo tratarlas a la hora de presentarlas al usuario. Es por ello que aquí vamos a ver cómo podemos dar formato de fechas en [Javascript](http://www.manualweb.net/javascript).


Para ello vamos a trabajar con el [objeto Intl](http://lineadecodigo.com/tag/javascript-intl/) la cual nos permite adecuar el formato de las fechas a la localización en la que presentamos el contenido.


## Crear una Fecha


Lo primero será crear una fecha. Para ello utilizamos el objeto `Date`, al cual pasamos una fecha en concreto.


```javascript
let miFecha = new Date('February 15, 2020 03:24:00');
```


## Utilizar Intl.DateTimeFormat()


Ahora vamos a crear [nuestro objeto Intl](http://lineadecodigo.com/tag/javascript-intl/), en concreto el método `.DateTimeFormat()` el cual nos sirve para poder dar formato de fechas en [Javascript](http://www.manualweb.net/javascript/).


```javascript
let formato = new Intl.DateTimeFormat(local,opciones);
```


Este método recibe dos parámetros, el primero es el local del formato que queremos seguir, el cual atiende a una etiqueta que siga [la especificación BCP 47](http://tools.ietf.org/html/rfc5646). Este es un código con el acrónimo del idioma, seguido de un guión y del acrónimo del país sobre el que queremos hacer la localización. Por ejemplo _es-ES_ para castellano de España, _en-US_ para el inglés de Estados Unidos o _ar-EG_ para el árabe de Egipto.


El segundo parámetro son las **opciones para el formato de la fecha**. En ellas podemos definir, mediante una estructura JSON algunos valores como el estilo del formato, calendario a utilizar o sistema de numeración,...


## Opciones de Formato


Así podemos dar forma algunos de los siguientes parámetros:

- **dateStyle**, para el estilo de la fecha y que puede tener los valores _'full'_, _'long'_, _'medium'_ o _'short'._
- **timeStyle**, para el estilo de la hora y que puede tener los valores _'full'_, _'long'_, _'medium'_ o _'short'._
- **calendar**, para indicar el tipo de calendario y que puede tener los valores _'buddhist', 'chinese', 'coptic', 'ethiopia', 'ethiopic', 'gregory', 'hebrew', 'indian', 'islamic', 'iso8601', 'japanese', 'persian', 'roc'._
- **dayPeriod**, para expresar los periodos del día, con los valores _'narrow', 'short'_ o _'long'_.

El formato JSON quedará de la siguiente manera:


```javascript
{
  dateStyle: 'short',
  timeStyle: 'short',
  calendar: 'islamic'
}
```


Por lo que la invocación al método `.DateTimeFormat()` se haría de la siguiente forma:


```javascript
let formato = new Intl.DateTimeFormat('es-ES', { dateStyle: 'short' });
```


## Aplicar el Formato


Ahora lo que tenemos que hacer es invocar al método `.format()` al cual le pasaremos la fecha para que pueda ejecutar el formato.


```javascript
console.log(formato.format(miFecha));
```


## Ejemplos de Formato


En este código podemos ver el resultado para fechas cortas:


```javascript
let formato = new Intl.DateTimeFormat('en-US', { dateStyle: 'short' });
console.log(formato.format(miFecha)); // 2/15/20
```


Fechas largas:


```javascript
let formato = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' });
console.log(formato.format(miFecha)); // Saturday, February 15, 2020
```


O fechas en el calendario islámico:


```javascript
let formato = new Intl.DateTimeFormat('es-ES', { dateStyle: 'full', calendar: 'islamic' });
console.log(formato.format(miFecha)); // sábado, 22 de jumada II de 1441 AH
```


De esta manera podrás tratar tus programas que tengan que dar formato de fechas en [Javascript](http://www.manualweb.net/javascript).

