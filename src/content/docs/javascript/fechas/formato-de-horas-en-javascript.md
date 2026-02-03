---
title: "Formato de horas en Javascript"
description: "Cómo manejar bien los códigos de localización y el método .toLocaleTimeString(l) para dar un formato de horas en Javascript de forma correcta."
date: 2020-03-16
updatedDate: 2026-01-12
tags: ["fechas","locale","console","date","intl","tolocaletimestring"]
slug: javascript/fechas/formato-de-horas-en-javascript
author: victor_cuervo
type: doc
topic: javascript
id: eaca2178-f9c4-409a-979d-96a79905b106
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/fechas/formatear-horas.js
---

Siguiendo con el conjunto de [artículos que hablan de elementos de internacionalización](http://lineadecodigo.com/tag/javascript-intl/), como el anterior donde hablábamos sobre [cómo mostrar un número en Javascript según Locale](http://lineadecodigo.com/javascript/numeros-en-javascript-segun-locale/), veremos en este cómo dar formato de horas en [Javascript](http://www.manualweb.net/javascript/).


## Crear una hora en Javascript


Lo primero que necesitamos es crear una hora en [Javascript](http://www.manualweb.net/javascript). Es decir, lo que entendemos por hora, minutos y segundo. Para ello utilizaremos el objeto `Date`, el cual volcaremos sobre una constante.


```javascript
const fecha = new Date('2020-03-16 12:22:00');
```


Vemos que para ello hemos utilizado un formato con el día más la hora. Aunque podríamos haber creado el objeto `Date` tal cual, conteniendo de esa forma la fecha y hora actual de nuestro sistema.


## Formato de horas con toLocaleTimeString()


Lo siguiente será utilizar el método `.toLocaleTimeString(locale)` el cual recibe una [etiqueta BCP 47](http://tools.ietf.org/html/rfc5646) con el locale. La estructura de estas etiquetas es que primero tienen dos caracteres indicando el idioma, seguidas de un guión y luego otros dos caracteres indicando el país o región a la que se hace referencia.


Así, por ejemplo tenemos:

- **es-ES**, para el castellano en España.
- **ca-ES**, para el catalán en España.
- **en-EN**, para el inglés en Reino Unido.
- **en-US**, para el inglés en Estados Unidos.
- **fr-FR**, para el francés en Francia
- ...

Ahora, simplemente deberemos de invocar el método `.toLocaleTimeString(locale)` sobre la fecha que habíamos creado.


```javascript
console.log(fecha.toLocaleTimeString('en-US'));
console.log(fecha.toLocaleTimeString('es-ES'));
```


Al ejecutar este código veremos que al indicar un locale americano, es decir **en-US**, el formato de la hora será de 1 a 12 indicando si es **AM** (_ante-meridiem_, antes del medio día) o **PM** (_post-meridiem_, después del medio día).


Si bien, en el caso del locale español, **es-ES**, veremos que el formato de la hora será de 24h representado por las horas de 0 a 23.


Así podemos comprobar que dependiendo de la localización la hora tendrá una representación diferente y que por lo tanto es muy importante el dar formato de horas en [Javascript](%7B%7Bhttp://www.manualweb.net/javascript/%7D) de una forma correcta.

