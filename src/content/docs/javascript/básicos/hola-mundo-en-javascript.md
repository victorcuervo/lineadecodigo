---
title: "Hola Mundo en JavaScript"
description: "Como realizar paso a paso un Hola Mundo en Javascript generando una cadena de texto dentro de una página web mediante el método document.write"
date: 2006-11-07
updatedDate: 2026-01-05
tags: ["document","write","script"]
slug: javascript/basicos/hola-mundo-en-javascript
author: victor_cuervo
type: doc
topic: javascript
id: ab497e90-9501-4bca-8daf-399d7b16d0a6
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/basicos/hola-mundo-javascript.html
---

Lo que todo el mundo hace [cuando está aprendiendo a desarrollar es el típico programa de “Hola Mundo”](http://lineadecodigo.com/tag/concepto-holamundo/). Así que vamos a ver cómo podemos hacer un Hola Mundo en [JavaScript](http://www.manualweb.net/javascript/).


Aunque todo sea dicho que yo he visto gente que busca frases mucho más curiosas saliéndose del tópico. Si bien, el fin es el mismo. La idea es conseguir el compilar o ejecutar el primer programa en un lenguaje que estemos aprendiendo.


En este punto es donde la satisfacción nos desborda. Eso de poder decir… “ya he ejecutado mi primer programa en [JavaScript](http://www.manualweb.net/javascript/)”. Todo un inicio. Y es que los primeros pasos siempre son los más complicados.


Para el caso que nos atañe, el de crear nuestro primer programa en [JavaScript](http://www.manualweb.net/tutorial-javascript/) deberemos de seguir los siguientes pasos.


En primer lugar deberemos de crearnos una página [HTML](http://www.manualweb.net/tutorial-html/). Para ello podemos utilizar cualquier editor de texto que tengamos a mano.


```html
<html>
  <head>
    <title>Mi primer codigo JavaScript</title>
  </head>
  <body>
    <h1>Mi primer código JavaScript</h1>
  </body>
</html>
```


Para poder utilizar código [Javascript](http://www.manualweb.net/tutorial-javascript/) deberemos de ayudarnos del [elemento ](http://www.w3api.com/wiki/HTML:SCRIPT)[`script`](http://www.w3api.com/wiki/HTML:SCRIPT)`.` Dentro de esta etiqueta es donde pondremos nuestro código [Javascript](http://www.manualweb.net/tutorial-javascript/).


Para empezar un par de nociones nos será suficiente:

- Que para escribir texto en pantalla con [Javascript](http://www.manualweb.net/tutorial-javascript/) habrá que utilizar el [objeto document](http://www.w3api.com/wiki/DOM:Document) y el [método .write(“texto”)](http://www.w3api.com/wiki/DOM:Document.write())
- Y que cada línea de código en [Javascript](http://www.manualweb.net/javascript) se acaba con un punto y coma (;)

Nuestro código quedará de la siguiente forma:


```javascript
document.write("Hola Mundo");
```


Este código lo insertamos dentro del elemento [`script`](http://www.w3api.com/wiki/HTML:SCRIPT).


```javascript
<script>
  document.write("Hola Mundo");
</script>
```


Y la página [HTML](http://www.manualweb.net/tutorial-html/) con el código [JavaScript](http://www.manualweb.net/javascript/) incluido será la siguiente.


```html
<html>
  <head>
    <title>Mi primer codigo JavaScript</title>
  </head>
  <body>
    <h1>Mi primer código JavaScript</h1>

    <script>
      document.write("Hola Mundo");
    </script>

  </body>
</html>
```


Así tendremos nuestra página web con nuestro Hola Mundo en [JavaScript](http://www.manualweb.net/javascript/). Ya solo queda abrirla en un navegador web y ver nuestro primer código.

