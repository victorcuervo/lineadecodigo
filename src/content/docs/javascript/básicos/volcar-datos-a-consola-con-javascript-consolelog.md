---
title: "Volcar datos a consola con Javascript console.log"
description: "Utilizar el objeto Javascript console.log para volcar contenidos sobre la consola Javascript de los navegadores web."
date: 2013-05-18
updatedDate: 2026-01-12
tags: ["console-log","chrome","firefox","firebug"]
slug: javascript/basicos/volcar-datos-a-consola-con-javascript-consolelog
author: victor_cuervo
type: doc
topic: javascript
id: 721c6ce1-ea0c-4669-93f1-38e96cb96a8c
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/basicos/console-log.html
---

Todo buen programador debe depurar sus programas. Si estamos trabajando con [Javascript](https://www.manualweb.net/javascript/) es muy útil volcar datos a consola con [Javascript](https://www.manualweb.net/javascript/) console.log


## Programando con Javascript console.log


Console es el objeto [Javascript](https://www.manualweb.net/javascript/) que representa a la consola y con el método [Javascript](https://www.manualweb.net/javascript/) console.log podemos volcar el contenido sobre la consola. A la hora de volcar los datos podemos hacerlo de dos formas. O volcando una cadena de texto o volcando un objeto.


```javascript
console.log(cadena);
console.log(objeto);
```


Así podríamos tener el siguiente código con [Javascript](https://www.manualweb.net/javascript/) console.log:


```javascript
console.log("Hola Mundo");
```


O bien, volcar un objeto:


```javascript
var miObjeto = {nombre: "Juan", edad: 30};
console.log(miObjeto);
```


> Recuerda que al manipular el objeto [Javascript](https://www.manualweb.net/javascript/) console.log, el [objeto console](https://www.manualweb.net/javascript/%20%22Javascript%20console%22) es con c minúscula.


## Dónde está la consola para Javascript console.log


Dependiendo del navegador o de la extensión que estemos manejando podremos encontrar el resultado de [Javascript](https://www.manualweb.net/javascript/) console.log. Así podemos encontrar la consola en:

- **Google Chrome**, se puede encontrar la consola en _Herramientas > Consola Javascript_. Se pueden realizar muchas [operaciones dentro de la consola de Google Chrome](https://developers.google.com/chrome-developer-tools/docs/console).
- **Firefox**, la consola está en Herramientas > WebDeveloper > Web Console. Desde esta consola podemos ver el código generado por nuestro programa con el [Javascript](https://www.manualweb.net/javascript/) console.log.
- **Firebug**, es un [complemento para los navegadores](http://getfirebug.com/) orientado a optimizar el desarrollo de las páginas web, dándonos acceso a la gestión del DOM de la página, a las descargas realizadas por una página web, y como no a la Consola dónde se vuelca el resultado de [Javascript](https://www.manualweb.net/javascript/) console.log.

¿En qué más sitios has utilizado la consola para ver el resultado de [Javascript](https://www.manualweb.net/javascript/) console.log?

