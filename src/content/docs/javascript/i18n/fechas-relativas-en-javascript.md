---
title: "Fechas relativas en Javascript"
description: "Cómo poder prepresentar fechas relativas en Javascript con texto de forma localizada a un idioma y país mediante el objeto Intl.RelativeTimeFormat."
date: 2020-03-20
updatedDate: 2026-01-13
tags: ["intl","bcp47","format","relativetimeformat"]
slug: javascript/i18n/fechas-relativas-en-javascript
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-8140-8c2e-f3c1c824700f
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/fechas/fechas-relativas-texto.js
---

Una de las cosas interesantes [de la librería de internacionalización](http://lineadecodigo.com/tag/javascript-intl/) representada en el objeto `Intl` es el manejo de fechas relativas en Javascript. Dicho manejo nos permite representar una fecha atendiendo a elemento relativos, es decir, poder especificar cual fue el día de ayer, o antes de ayer, o dentro de tres meses,... y todo ello atendiendo a la localización que le indiquemos, por lo cual podremos especificar literalmente este contenido.


## Creando el objeto RelativeTimeFormat


Para ello lo primero que vamos a hacer es crear un objeto `Intl`. En concreto vamos a instanciar el objeto `RelativeTimeFormat`.


```javascript
let rtf = new Intl.RelativeTimeFormat(locale, options);
```


Este objeto recibe dos parámetros, _**la etiqueta de localización**_ [representada por un código BCP 47](http://tools.ietf.org/html/rfc5646) en la que los dos primero caracteres representan el idioma, luego encontraremos un guión y luego dos caracteres que representan al país. Así encontraremos 'es-ES', 'ca-ES', 'en-UK', 'en-US', 'ar-EG',...


El segundo parámetro los _**las opciones**_ en las que queremos representar el contenido de la fecha. Estas opciones se representan en formato JSON. Las tres propiedades que hay en las opciones son:

- **style**, cómo queremos que sea la longitud del texto, que puede ser _'long'_, _'short'_ o _'narrow'_.
- **numeric**, si queremos que los números se representen en formato numérico, daríamos el valor _'always'_ o en formato textual, que daríamos el valor _'auto'_.
- **localeMatcher,** que indica el algoritmo de matching a ejecutar y cuyos valores pueden ser _'lookup'_ o _'best fit'_.

Así la creación de nuestro objeto `RelativeTimeFormat` quedará de la siguiente forma:


```javascript
let rtf = new Intl.RelativeTimeFormat('es-ES', { style: 'long', numeric: 'auto' });
```


## Usando el método format()


Lo siguiente será apoyarnos en el método `.format()` el cual recibe dos parámetros, el primero numérico positivo o negativo con la relatividad y el segundo el tamaño de la relatividad, si queremos que sea meses, días, años,...


De esta forma si queremos que nos indique el día de ayer escribiremos:


```javascript
rtf.format(-1, 'day'); // ayer
```


Pero si queremos indicar que sea pasado mañana lo pondríamos de la siguiente forma:


```javascript
rtf.format(2, 'day'); // pasado mañana
```


Podemos utilizar la medida de meses, así el mes pasado sería:


```javascript
rtf.format(-1, 'month'); // el mes pasado
```


O incluso podemos utilizar trimestres, así dentro de tres trimestres sera:


```javascript
rtf.format(3, 'quarter'); // dentro de 3 trimestres
```


Como vemos es muy sencillo utilizar el objeto `RelativeTimeFormat` para poder representar Fechas relativas en Javascript de una forma localizada.

