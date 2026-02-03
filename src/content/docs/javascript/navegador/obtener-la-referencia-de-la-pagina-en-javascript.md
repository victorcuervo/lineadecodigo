---
title: "Obtener la referencia de la pagina en Javascript"
description: "Utilización del objeto Document para poder obtener la referencia de la pagina en Javascript."
date: 2007-06-24
updatedDate: 2026-01-13
tags: ["document","write","referrer"]
slug: javascript/navegador/obtener-la-referencia-de-la-pagina-en-javascript
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-817a-bdd0-d216431fdfca
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/pagina/obtener-la-pagina-de-referencia-del-documento.html
---

Hay dos formas de llegar a una página web. La primera es de forma directa. En este caso será porque habremos escrito la URL de la página directamente en el navegador. La segunda forma será porque lleguemos mediante algún enlace en alguna página de referencia. Que en un porcentaje de los casos será un buscador (y casi siempre [Google](http://www.google.com/)).


## Obtener la página de referencia


Mediante [JavaScript](https://www.manualweb.net/javascript/) tenemos la oportunidad de obtener la URL de la página que nos ha referenciado. Esto nos dará la oportunidad de saber quien habla de nosotros...


Para ello tenemos que utilizar el [objeto document](https://www.w3api.com/DOM/). Este es un objeto genérico del navegador. Y en concreto el atributo **referrer**.


```javascript
document.referrer
```


## Mostrar la página de referencia


Ahora solo nos quedará volcarlo a pantalla, mediante el método **write** (también del objeto document), para ver su valor.


```javascript
document.write("Has llegado desde: " + document.referrer);
```

