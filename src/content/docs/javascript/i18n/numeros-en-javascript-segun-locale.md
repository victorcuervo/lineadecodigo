---
title: "Números en Javascript según Locale"
description: "Uso del método .toLocaleString() para tratar números en Javascript según Locale y así representar comas decimales, sistemas imperiales o número arábigos."
date: 2020-03-15
updatedDate: 2026-01-12
tags: ["intl","tolocalestring"]
slug: javascript/i18n/numeros-en-javascript-segun-locale
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/numeros/numeros-segun-localizacion.js
topic: javascript

---

Cuando estemos [trabajando con números en Javascript](http://lineadecodigo.com/tag/javascript-numeros/) deberemos de tener cuidado del sitio en el que está visualizando nuestra aplicación. Es por ello que vamos a ver **cómo podemos tratar los números en Javascript según Locale**.


## Representación de números según localización


Dado un número tan sencillo como el siguiente: `11223.48`


O escrito en nuestro lenguaje [Javascript](http://www.manualweb.net/javascript):


```javascript
let numero = 11223.48;
```


Este se visualizará de diferente forma en diferentes sitios. Así podemos tener que:

- En el Reino Unido o en Estados Unidos se utilizará la coma como separador de miles y el punto como separador de decimales: `12,113.48`. Este es el conocido como **sistema imperial**.
- Mientras que en países como España (u otros Europeos) será al revés y utilizaremos el punto para separar los miles, mientras que utilizaremos la coma para separar los decimales: `12.113,48`. Este es lo que se conoce como **coma decimal**.
- Y en el caso de los países árabes se utilizarán los **números arábigos**. Así nuestro valor se representará de la siguiente forma: `١٢٬١١٣٫٤٨`

## Método toLocaleString


Para poder tratar los números en [Javascript](http://www.manualweb.net/javascript) según Locale tendremos que apoyarnos en el método `.toLocaleString(locale)`. Este método se aplica sobre cualquier variable o constante que hayamos definido dentro de nuestro programa en [Javascript](http://www.manualweb.net/javascript) y recibe el locale de cada sitio:

- **es-ES** para España
- **en-US** para Inglés Americano
- **ar-EG** para el árabe en Egipto

Las etiquetas están atendiendo al formato [BCP 47](http://tools.ietf.org/html/rfc5646) donde lo primero que se ve es el idioma y luego es seguido por el país o región al que queremos hacer referencia. Puedes consultar el listado completo de locales que se pueden utilizar en el [IANA Language Subtag Registry](http://www.iana.org/assignments/language-subtag-registry).


Así simplemente tendremos que ejecutar lo siguiente:


```javascript
let numero = 11223.48;
console.log(numero.toLocaleString('es-ES')); // 11.223,48
console.log(numero.toLocaleString('en-US')); // 11,223.48
console.log(numero.toLocaleString('ar-EG')); // ١١٬٢٢٣٫٤٨
```


De esta forma obtendremos una cadena de texto de los números en [Javascript](http://www.manualweb.net/javascript) según Locale. Como se puede observar es algo muy sencillo, pero que deberemos de tener en cuenta cuando hagamos aplicaciones que puedan ser internacionalizadas y tengan usuarios en diferentes localizaciones.

