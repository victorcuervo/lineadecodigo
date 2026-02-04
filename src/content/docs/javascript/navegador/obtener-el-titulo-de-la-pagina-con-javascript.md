---
title: "Obtener el titulo de la página con JavaScript"
description: "Código Javascript que nos permite obtener el titulo de la página con Javascript."
date: 2007-06-16
updatedDate: 2026-01-12
tags: ["document","write","title"]
slug: javascript/navegador/obtener-el-titulo-de-la-pagina-con-javascript
type: doc
topic: javascript
id: fd517f33-1421-4687-9f27-8b4b82b404a9
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/pagina/obtener-titulo-de-la-pagina.html
---

Al crear una página web [HTML](https://www.manualweb.net/html/) podemos utilizar [la etiqueta title](https://www.w3api.com/HTML/title-elemento/) para poder darle un titulo a la página. Si bien, mediante [JavaScript](https://www.manualweb.net/javascript/) podemos recuperar el titulo que se ha establecido a la página de forma dinámica.


## Acceder al título de la página


Esto lo podemos hacer ya que con [JavaScript](https://www.manualweb.net/javascript/) podemos acceder a los diferentes elementos que conforman una página. El objeto que referencia a la página es [document](https://www.w3api.com/DOM/) y el atributo `title` es el que hace referencia al titulo de la misma.


```javascript
document.title
```


## Mostrar el título en la página


Si lo que queremos es mostrar en la página el titulo de esta, simplemente tendremos que añadir el siguiente código:


```javascript
document.write(document.title);
```


En este código se puede ver que nos hemos apoyado en el [método .write(texto)](https://www.w3api.com/DOM/.write() para volcar por pantalla el contenido de `document.title`.

