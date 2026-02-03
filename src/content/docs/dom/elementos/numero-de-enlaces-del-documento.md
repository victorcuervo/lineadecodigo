---
title: "Número de enlaces del documento"
description: "Código en Javascript que nos permite saber el número de enlaces del documento."
date: 2007-06-25
updatedDate: 2026-01-12
tags: ["document","length","write","anchors"]
slug: dom/elementos/numero-de-enlaces-del-documento
author: victor_cuervo
type: doc
topic: dom
id: e75e62c1-99b6-474a-ac8d-a3bf9f85edf2
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/pagina/numero-enlaces-del-documento.html
---

El manejo del modelo de objetos de la página (**DOM**) nos permite acceder a cualquier elemento que esté conformando la página. Esto nos proporciona una gran potencia a la hora de interactuar con los objetos que la conforman. 


En este ejemplo vamos a ver cómo de una forma sencilla podemos conocer el **número de enlaces** que hay en la página.


## Crear una página web con enlaces


Lo primero que tenemos que hacer es crear una página web que contenga enlaces. Hay que recordar que en [HTML](http://www.manualweb.net/tutorial-html/) los enlaces se crean mediante [la etiqueta "anchor" A](https://www.w3api.com/HTML/a/).


Incluyamos algunos enlaces:


```html
<ul>
  <li><a href="[http://lineadecodigo.com](http://lineadecodigo.com/)" name="link1">Linea de Código</a></li>
  <li><a href="[http://error500.net](http://error500.net/)" name="link2">Error 500</a></li>
  <li><a href="[http://www.google.com](http://www.google.com/)" name="link3">Google</a></li>
</ul>
```


## Obtener el número de enlaces con Javascript


Ahora mediante código [Javascript](https://www.manualweb.net/javascript/) vamos a obtener el número de enlaces que hemos incluido en la página. 


Para ello deberemos de acceder al **objeto document**, el cual representa a la página. Dentro de este objeto tenemos el objeto **anchors**, que representa a los enlaces y este tiene una propiedad denominada **length**. Dicha propiedad nos dirá cuantos enlaces tenemos en la web.


```javascript
var numenlaces = document.anchors.length;
```


> Es importante destacar que los enlaces tienen que tener el atributo **name**. De otra forma, al utilizar el método **document.anchors.length** no obtendríamos ningún resultado.


## Mostrar el resultado


Si queremos mostrarlo por pantalla, como siempre, utilizaremos [el método document.write()](https://www.w3api.com/DOM/.write()).


```javascript
document.write("El número de enlaces del documento es " + numenlaces);
```

