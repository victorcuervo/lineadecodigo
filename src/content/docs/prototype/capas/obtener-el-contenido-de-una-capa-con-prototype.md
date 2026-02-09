---
title: "Obtener el contenido de una capa con Prototype"
description: "Aprende a obtener el contenido de una capa con Prototype. Descubre cómo usar $() e innerHTML para acceder dinámicamente al contenido de elementos HTML."
date: 2007-02-25
updatedDate: 2026-02-09
tags: ["capa","div","innerhtml"]
slug: prototype/capas/obtener-el-contenido-de-una-capa-con-prototype
type: doc
topic: prototype
id: 2c8a9dfb-adca-81f2-b6b7-cfcda8b748b8
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_prototype/blob/master/capas/obtener-el-contenido-de-una-capa.html
---

Como ya sabemos, el framework [Prototype](http://lineadecodigo.com/categoria/prototype/) nos permite manejar las páginas [HTML](https://www.manualweb.net/html/) dinámicamente de una forma muy sencilla. Para ello evita que tengamos que conocer todos los detalles del lenguaje [JavaScript](https://www.manualweb.net/javascript/) y las complejidades de los modelos DOM de las páginas.


Uno de sus ejemplos será el obtener el contenido de una capa de la página.


## Definir una capa en HTML


Las capas en [HTML](https://www.manualweb.net/html/) se pueden definir mediante el elemento [`div`](https://www.w3api.com/HTML/div/). De esta forma podríamos definir una capa en [HTML](https://www.manualweb.net/html/) de la siguiente forma:


```html
<div id="micapa">
  Contenido de mi capa<br />
  para lineadecodigo.com
</div>
```


Es muy importante el identificador que le demos a la capa. Es decir, el valor de su atributo id. Ya que dicho valor será el que utilicemos para acceder a la capa desde [Prototype](http://lineadecodigo.com/categoria/prototype/).


## Acceder a la capa con $()


En [Prototype](http://lineadecodigo.com/categoria/prototype/) nos apoyaremos en el método de utilidad `$()`. Este método recibe como parámetro el identificador del elemento de la página a acceder. En nuestro ejemplo sería 'micapa'.


```javascript
$("micapa");
```


Este código solo nos devolverá el elemento tal cual, es decir, la capa.


## Obtener el contenido de la capa


Si lo que queremos es acceder a su contenido deberemos de acceder al atributo innerHTML de la capa. El cual nos dará el contenido de dicha capa. Veamos como sería dicho código:


```javascript
alert($("micapa").innerHTML);
```


Nos hemos apoyado en el método alert de [JavaScript](https://www.manualweb.net/javascript/) para mostrarlo en una ventana emergente.


## Cargar el framework Prototype


Acuérdate que para cargar el framework [Prototype](http://lineadecodigo.com/categoria/prototype/) simplemente nos apoyamos en el elemento `<script>` mediante la cual indicaremos la librería prototype.js.


```html
<script src="prototype.js"></script>
```

