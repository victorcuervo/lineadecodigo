---
title: "getElementsByName"
description: "Artículo que explica como utilizar el método Javascript getElementsByName de una forma sencilla y apoyándolo mediante ejemplos."
date: 2008-01-20
updatedDate: 2026-01-12
tags: ["Javascript DOM","Javascript DOM getElementsByName","DOM Document","HTML Form Checkbox","Javascript DOM getElementById","Javascript Array","HTML Form Input"]
slug: javascript/elementos/getelementsbyname
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/dom/getElementsByName.html
topic: javascript

---

Junto con [getElementById](https://www.w3api.com/DOM/.getElementById()), posiblemente getElementsByName sea uno de los métodos más utilizados para manipular un [árbol DOM](https://www.w3api.com/DOM/) dentro de JavaScript. 


El método **getElementsByName** nos permite acceder a una lista de elementos, los cuales tengan el nombre pasado por parámetro. Aquí nos preguntaremos acerca de qué elementos dentro de una página web pueden tener el mismo nombre. Ya que hay que recordar que los [ID](https://www.w3api.com/HTML/id/) son únicos y por lo tanto hacen referencia a un único elemento. 


La verdad es que, por poder, podemos tener los elementos que queramos: capas, botones, formularios,... Si bien, un ejemplo de uso podría ser una lista de checkbox. Podemos tener un conjunto de elementos seleccionables, con diferente [ID](https://www.w3api.com/HTML/id/), pero con el mismo nombre. Esto nos permitirá acceder a dicha lista. 


## Crear lista de checkbox


Es por ello que lo primero que vamos a hacer es crear la lista de checkbox:


```html
<input type="checkbox" id="opcion1_1" name="opcion1" value="valor1">Valor 1<br>
<input type="checkbox" id="opcion1_2" name="opcion1" value="valor2">Valor 2<br>
<input type="checkbox" id="opcion1_3" name="opcion1" value="valor3">Valor 3<br>
<input type="checkbox" id="opcion1_4" name="opcion1" value="valor4">Valor 4<br>
```


Es importante apreciar que el nombre ([atributo name](http://w3api.com/HTML/form/name/)) que le hemos puesto a los checkbox es el mismo, 'opcion1'. 


## Acceder a los elementos mediante getElementsByName


Lo siguiente que vamos a hacer es crear un método que acceda a los elementos 'opcion1' mediante el método **.getElementsByName**. Este método necesitará que le pasemos como parámetro el valor que hayamos dado al atributo name.


```javascript
var elementos = document.getElementsByName("opcion1");
```


El método **getElementsByName** devuelve un array de NodeList con los elementos que cumplen la condición. Es por ello que deberemos de recorrer el array para acceder a los elementos y su valor. 


## Código completo


Todo el código de nuestro método quedará de la siguiente forma:


```javascript
function mostrarValores() {
  var elementos = document.getElementsByName("opcion1");
  
  for (var i = 0; i < elementos.length; i++) {
    if (elementos[i].checked) {
      alert("El valor seleccionado es: " + elementos[i].value);
    }
  }
}
```


Ahora solo nos quedará lanzar este método en algún sitio. Por ejemplo, en un botón:


```html
<button onclick="mostrarValores()">Mostrar Valores</button>
```

