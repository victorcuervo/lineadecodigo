---
title: "document.getElementById"
description: "El método document.getElementById permite obtener referencias a elementos HTML mediante su id y manipular sus propiedades."
date: 2007-06-25
updatedDate: 2026-01-12
tags: ["onclick","getelementbyid"]
slug: dom/elementos/documentgetelementbyid
author: victor_cuervo
type: doc
id: 97a82630-7b1c-46b9-a668-bbba9bc007b4
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/dom/getElementById.html
---

Si hubiera que decir cuál ha sido el método más importante del lenguaje [JavaScript](https://www.manualweb.net/javascript/) desde su creación, creo que muchos coincidiríamos en que es [**document.getElementById**](https://www.w3api.com/DOM/.getElementById()**)**. Dicho método nos permite **obtener la referencia a un elemento de la página mediante el id** de dicho elemento.


## Obtener referencia a un elemento


Por ejemplo, si tenemos una imagen representada por el siguiente código [HTML](https://www.manualweb.net/html/):


```html
<img src="imagen.jpg" id="miimagen"/>
```


Podríamos obtener una referencia a dicha imagen mediante el siguiente código [JavaScript](https://www.manualweb.net/javascript/):


```javascript
var imagen = document.getElementById("miimagen");
```


Una vez obtenida la referencia al elemento, podemos acceder a todas sus propiedades, ya sea para lectura o escritura. Por ejemplo, en este caso podríamos cambiar [el origen (src) de la imagen](https://www.w3api.com/HTML/source/src/), su alto/ancho,...


> Una de las cosas que más puede sacar de quicio a las personas que lo utilizan es confundir mayúsculas con minúsculas. Si usamos getElementBYID o getElementByID o GETELEMENTBYID,... no nos funcionará.


## Ejemplo con área de texto


En este caso vamos a utilizar esta función para obtener el contenido de un área de texto. Así que lo primero que haremos será crear un área de texto:


```html
<textarea id="areadetexto" cols="50" rows="10"></textarea>
```


Ahora, para acceder al área de texto, utilizaremos su id "areadetexto" y la función [document.getElementById](https://www.w3api.com/DOM/.getElementById()). Con el fin de hacerlo más interactivo, vamos a utilizar el código [JavaScript](https://www.manualweb.net/javascript/) en el evento onClick de un botón.


Veamos el código:


```html
<input type="button" value="Mostrar" onclick="alert(document.getElementById('areadetexto').value);"/>
```

