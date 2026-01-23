---
title: "Listar el contenido de Local Storage en HTML5"
description: "Descubre cómo listar el contenido de Local Storage en HTML5 de manera sencilla y efectiva, accediendo a claves y valores almacenados en tu navegador."
date: 2010-10-29
updatedDate: 2026-01-23
tags: ["localstorage","getitem","key","length"]
slug: webapi/almacenamiento/listar-el-contenido-de-local-storage-en-html5
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/WebStorage/listar-contenido/listar-contenido-web-storage.html
topic: webapi

---

Si desconocemos las claves de la Local Storage del navegador en [HTML5](https://www.manualweb.net/html5/), siempre podemos acceder a listar el contenido de la caché.


## Obtener el tamaño de la caché


Para ello, lo primero que haremos será el conocer el tamaño de la caché. Esto nos lo proporciona la propiedad `.length`


```javascript
for (x=0; x<=localStorage.length-1; x++)  { ... }
```


Así, mediante un bucle for podremos iterar sobre los elementos de la caché.


## Obtener la clave


De cada una de las posiciones de la caché vamos a pedir el nombre de la clave que contiene. El método `.key()` será el que nos sirva para poder realizar dicha acción:


```javascript
clave = localStorage.key(x);
```


## Acceder al contenido


Una vez que tenemos la clave solo nos queda acceder al contenido de la misma mediante el método `.getItem()`


```javascript
localStorage.getItem(clave);
```


## Código completo


El código final que accede al contenido de la Local Storage en [HTML5](https://www.manualweb.net/html5/) nos quedará de la siguiente forma:


```javascript
for (x=0; x<=localStorage.length-1; x++)  {  
  clave = localStorage.key(x); 
  document.write("La clave " + clave + "contiene el valor " + localStorage.getItem(clave) + "<br>");  
}
```

