---
title: "Acceder a elementos con Prototype"
description: "El framework Prototype facilita acceder a elementos de la página web mediante la función con el ID del elemento."
date: 2007-02-10
updatedDate: 2026-01-07
tags: ["id","img"]
slug: prototype/basicos/acceder-a-elementos-con-prototype
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-810b-8213-fec707c45a13
download: https://github.com/victorcuervo/lineadecodigo_prototype/blob/master/basico/acceder-a-elementos.html
---

Podríamos decir que la característica principal del framework [Prototype](http://lineadecodigo.com/categoria/prototype/) es la facilidad de acceder a un elemento de la página web. [Prototype](http://lineadecodigo.com/categoria/prototype/) nos proporciona una forma unificada de acceso a los elementos de forma independiente al navegador que estemos utilizando.


Para ello [Prototype](http://lineadecodigo.com/categoria/prototype/) utiliza la función $. El manejo de dicha función es muy sencillo, ya que esta recibirá el ID del elemento al que queramos acceder.


```javascript
$("idElemento");
```


Para mostrar el funcionamiento de esta función vamos a acceder al contenido de una imagen que haya dentro de la página [HTML](http://www.manualweb.net/html/).


Lo primero, crear la página con una imagen. Y, claro, dar un ID a dicha imagen. Veamos como sería este primer código:


```html
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
    <title>Obtener referencia a un elemento con Prototype</title>
  </head>
  <body>
    <img src="img/prototype.png" id="imagen" />
  </body>
</html>
```


Muy sencillo de hacer con el elemento `img`.


El siguiente paso será el cargar el framework [Prototype](http://lineadecodigo.com/categoria/prototype/). Para ello simplemente hay que cargar la librería prototype.js en la cabecera de la página.


```html
<head>
  <script type="text/JavaScript" src="prototype/prototype.js"></script>
</head>
```


Y ahora solo nos quedará el utilizar al función $. El parámetro será el ID de la imagen. En este caso el ID que le hemos dado a la imagen es "imagen".


Veamos como sería la línea de código para utilizarlo.


```html
<script>
  document.write($("imagen").src);
</script>
```

