---
title: "Citas en Bootstrap"
description: "Aprende a crear citas en Bootstrap de manera sencilla y estilizada. Mejora tu contenido con blockquotes y footers para una presentación profesional."
date: 2015-06-23
updatedDate: 2026-02-03
tags: ["blockquote","footer","cite"]
slug: bootstrap/texto/citas-en-bootstrap
type: doc
topic: bootstrap
id: 3e9537ea-edf5-4802-b3b5-582a137ab162
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_bootstrap/blob/master/texto/citas-bootstrap.html
---

Ya vimos en un artículo como podemos poner una cita en [el lenguaje HTML](https://www.manualweb.net/html/) mediante el elemento [`blockquote`](https://www.w3api.com/HTML/blockquote/). Normalmente los navegadores interpretan este elemento como un bloque identado, el cual tiene una separación superior e inferior con los elementos que lo representan.


Es por ello por lo que se mal utilizó para ejecutar identaciones de información en las páginas web. Mediante [el framework Bootstrap](http://www.manualweb.net/bootstrap/) podemos dar un formato a las citas de una forma muy sencilla y utilizando el elemento [`blockquote`](https://www.w3api.com/HTML/blockquote/).


## Estructura básica de una cita


Si seguimos una serie de estructuras podremos ver que las citas en [Bootstrap](http://www.manualweb.net/bootstrap/) se representan con estilos asociados. Lo primero será poner una cita. Vamos a utilizar [una cita de Groucho Marx](http://www.victorcuervo.com/2007/12/14/no-tengo-respuestas-para-casi-nada/).


Simplemente tendremos que poner el texto de la cita entre el elemento [`blockquote`](https://www.w3api.com/HTML/blockquote/):


```html
<blockquote>
  <p>No tengo respuestas para casi nada y sin embargo tengo preguntas para casi todo.</p>
</blockquote>
```


Es importante destacar que el texto de la cita está dentro del elemento [`blockquote`](https://www.w3api.com/HTML/blockquote/), pero que de igual forma lo hemos recubierto de un elemento párrafo. Visualmente veremos que el texto aparece con una identación, cambio de tipografía y la fuente es ligeramente distinta a la del texto normal.


## Añadir el autor de la cita


Ahora pondremos el autor de la cita. El autor irá en un siguiente bloque dentro del [`blockquote`](https://www.w3api.com/HTML/blockquote/), pero recubierto de un elemento footer:


```html
<blockquote>
  <p>No tengo respuestas para casi nada y sin embargo tengo preguntas para casi todo.</p>
  <footer>Groucho Marx</footer>
</blockquote>
```


En este caso la cita en [Bootstrap](http://www.manualweb.net/bootstrap/) nos mostrará el autor con una tipografía más pequeña, el texto en gris y con un guión por delante.


## Alinear la cita a la derecha


Otra cosa que podemos hacer a la hora de crear una cita en [Bootstrap](http://www.manualweb.net/bootstrap/) es alinear la cita a la derecha. Para ello deberemos de utilizar la clase `blockquote-reverse` la cual aplicaremos al elemento [`blockquote`](https://www.w3api.com/HTML/blockquote/):


```html
<blockquote class="blockquote-reverse">
  <p>No tengo respuestas para casi nada y sin embargo tengo preguntas para casi todo.</p>
  <footer>Groucho Marx</footer>
</blockquote>
```


## Incluir el origen de la cita


Por último podemos hacer citas en [Bootstrap](http://www.manualweb.net/bootstrap/) en las que incluyamos información de dónde encontramos la cita. Es decir, si es de algún libro, película,.. Para ello dentro del elemento footer utilizamos el elemento cite indicando dónde está referenciada la cita.


Podría quedar de esta forma para, por ejemplo, [una cita de Miguel Delibes](http://www.victorcuervo.com/2010/03/14/yo-naci-en-avila/):


```html
<blockquote>
  <p>"Yo nací en Ávila, la vieja ciudad de las murallas, y creo que el silencio y el recogimiento casi místico de esta ciudad...</p>
  <footer>Miguel Delibes en <cite title="La sombra del ciprés es alargada">La sombra del ciprés es alargada</cite></footer>
</blockquote>
```


Vemos que el elemento cite tiene un atributo title que complementa la información del origen de la cita. Lo mejor es [que visualices el resultado](http://lineadecodigo.com/wp-content/uploads/2015/06/citas-bootstrap.html) para que veas el efecto de poner citas en [Bootstrap](http://www.manualweb.net/bootstrap/).

