---
title: "Ir al principio y al final de una página web"
description: "Crear enlaces internos de la página para ir al principio y al final de una página web."
date: 2006-11-10
updatedDate: 2026-01-06
tags: []
slug: html/enlaces/ir-al-principio-y-al-final-de-una-pagina-web
type: doc
topic: html
id: 166a4373-590e-4c49-95d3-634d6459e73b
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_html/enlaces/enlace-a-principio-y-fin.html
---

Siempre tenemos que buscar que el usuario se sienta cómodo en nuestras páginas web. Para ello debemos de **proporcionarle enlaces que le permitan navegar a la página principal, a las categorías principales,…** y sobre todo, si la página que tenemos es muy grande, deberemos facilitarle **que suba al principio de la página sin que tenga que arrastrar el dichoso cursor**. En este punto hay que comentar que esta situación no debería de darse mucho. No nos interesa que haya páginas kilométricas. Por varias cosas, por ejemplo, porque el usuario no va a entender tanta información de golpe, posiblemente una lectura en varias páginas ayudará al lector, por el tamaño de la página. Cuanto más texto tenga la página, más pesará, lo cual hará más costosa la descarga de la página al navegador. Pero independientemente de lo grande que sea la página, siempre deberemos de facilitar ir al principio de esta. Para poder realizar esto utilizaremos el elemento [`A`](http://w3api.com/wiki/HTML:A). Y es que el “ancla” no solo nos sirve para enlazar páginas, sino para señalar un punto específico de esta. Así, si queremos señalar un punto en concreto utilizaremos el atributo [`name`](http://w3api.com/HTML/select/name/)


```html
<a name="arriba"></a>
```


Si ponemos este código en el principio de la página podremos hacer enlaces que nos posicionen el navegador en él. Lo mismo nos servirá si lo ponemos en cualquier parte de la página web, con cualquier otro nombre. Así, en la parte inferior de nuestra página, podríamos poner el siguiente ancla [`A`](http://w3api.com/wiki/HTML:A):


```html
<a name="abajo"></a>
```


Lo que vendrá a hacer referencia a la parte de abajo de la página. Ahora solo nos quedará el crear los enlaces. Para crear un enlace se utiliza el mismo elemento [`A`](http://w3api.com/wiki/HTML:A), pero en vez de con el atributo [`name`](http://w3api.com/HTML/select/name/), utilizaremos el atributo [`href`](http://w3api.com/wiki/HTML:Href).


```html
<a href="pagina.htm">Texto del enlace</a>
```


En la [línea de código](/) que acabamos de escribir se hace un enlace a una página en concreto. Si queremos hacer referencia a una parte de la página, es decir, a una parte definida mediante el [`name`](http://w3api.com/HTML/select/name/) del elemento [`A`](http://w3api.com/wiki/HTML:A) , deberemos de utilizar la almohadilla después del nombre de la página.


```html
<a href="pagina.htm#arriba">Texto del enlace</a>
```


Si la parte de la página es en la misma página que en la que estamos insertando el enlace, podremos obviar el nombre de la página:


```html
<a href="#arriba">Texto del enlace</a>
```


Nuestro ejemplo de ir al principio y al final nos quedará de la siguiente forma:


```html
<html>
  <head>
    <tile>Ir Arriba e ir abajo</title>
  </head>
  <body>
    <a name="arriba"></a>
    <a href="#abajo">Ir a la parte de abajo</a>

    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

    <a href="#arriba">Ir a la parte de arriba</a>
    <a name="abajo"></a>
  </body>
</html>
```


Solamente tenemos que copiar este código en un fichero que llamaremos **PrincipioYFin.htm**

