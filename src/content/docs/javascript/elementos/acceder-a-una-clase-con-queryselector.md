---
title: "Acceder a una clase con QuerySelector"
description: "Podemos acceder a una clase con QuerySelector montando un sencillo selector que referencie al nombre de la clase."
date: 2014-09-03
updatedDate: 2026-01-13
tags: ["queryselector","queryselectorall","class","innerhtml"]
slug: javascript/elementos/acceder-a-una-clase-con-queryselector
author: victor_cuervo
type: doc
topic: javascript
id: 51177f65-7b3f-4265-b166-68a22232baf4
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/selectores/queryselector-class.html
---

## Validar soporte del API QuerySelector


El API Query nos puede permitir la ejecución de selectores. Así que en este artículo vamos a ver como acceder a una clase con QuerySelector. Lo primero será validar si nuestro navegador soporta el API QuerySelector, ya que no todos los navegadores lo soportan.


```javascript
if (document.querySelector)
  alert("Soporta Query Selector");
```


## Estructura HTML con clases


Una página [HTML](https://www.manualweb.net/html5/) puede tener diferentes elementos a los que les asigne una clase, a diferencia de un ID dónde solo encontraremos uno único dentro de la página. De esta forma la página sobre la que partamos tendrá la siguiente forma:


```html
<ul>
  <li class="item">Item 1</li>
  <li class="item">Item 2</li>
  <li class="item">Item 3</li>
  <li class="item">Item 4</li>
  <li class="item">Item 5</li>
</ul>
```


Como podemos comprobar hay varios [elementos LI](https://www.w3api.com/HTML/li/) los cuales tienen asociada una clase "item".


## Selector de clases


Para acceder a una clase con QuerySelector tenemos que saber que el selector de clases se monta anticipándole un punto al nombre de la clase.


```javascript
.item
```


## Utilizar querySelector


Ahora pasamos a ejecutar [el método .querySelector](https://www.w3api.com/DOM/.querySelector()) para obtener acceso al elemento.


```javascript
var elemento = document.querySelector(".item");
```


Al ejecutar el método .querySelector sobre la clase lo que obtenemos es un acceso al primer elemento que contenga dicha clase en la página. Es decir, que si ejecutamos el volcado del contenido:


```javascript
alert(elemento.innerHTML);
```


Lo que vamos a obtener es:


```shell
Item 1
```


## Obtener todos los elementos con querySelectorAll


En el caso de que queramos obtener todos los elementos que contengan la clase "item" deberemos de recurrir a la función [.querySelectorAll](https://www.w3api.com/DOM/.querySelectorAll()).


```javascript
var elementos = document.querySelectorAll(".item");
```

