---
title: "Modificando propiedades CSS con un Slider"
description: "Descubre cómo modificar propiedades CSS con un slider y transforma tu diseño web de manera dinámica. ¡Haz que tu página sea interactiva y atractiva!"
date: 2012-02-23
updatedDate: 2026-01-17
tags: ["form","range","css","style","border-radius"]
slug: html/formularios/modificando-propiedades-css-con-un-slider
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Formularios/range-modificando-css.html
topic: html

---

Una de las aplicaciones que podemos tener con un slider es la de modificar los valores de las propiedades CSS. Así los incrementaremos o decrementaremos, según vayamos moviendo el slider, aplicarán a ciertos valores de las hojas de estilo.


## Modificando font-size y border-radius


En nuestro caso, lo que vamos a hacer es modificar el tamaño del texto (`font-size`) y el redondeo de las esquinas (`border-radius`).


Lo primero será crear la página web, la cual contendrá una capa con un texto dentro:


```html
<div id="capa" style="font-size:12px; border:1px solid #000; border-radius:0px; padding:10px;">
  Este es el texto que vamos a modificar
</div>
```


Y debajo el slider en HTML5:


```html
<input type="range" id="slider" min="0" max="50" value="0" onchange="modificarCSS()">
```


## Creando el manejador de eventos


Ahora vamos a empezar a crear el código de manejo. Para ello vamos a controlar el evento `onchange` del slider:


```javascript
function modificarCSS() {
  // Código del manejador
}
```


## Primera forma: Modificando el atributo directamente


El código de este manejador será sencillo, ya que lo que hará será modificar una propiedad CSS. Bueno, en realidad, dos. Así que vamos a ver dos formas de modificar las propiedades CSS.


La primera forma será modificando el atributo de un objeto. Es decir, el borde de un estilo está representado por el campo `.borderRadius`. Así que solo tendremos que asignarle un valor:


```javascript
var valor = document.getElementById('slider').value;
document.getElementById('capa').style.borderRadius = (valor*2) + 'px';
```


Si miramos el código, vemos que lo primero que hacemos es coger el valor de la barra mediante el atributo `value`. Este valor lo vamos a multiplicar por una base y se lo aplicamos al estilo.


## Segunda forma: Usando setAttribute


La segunda forma es mediante el método `.setAttribute()`. En este caso, lo que hacemos es pasarle el nombre del atributo a modificar `style` y la propiedad CSS que queremos modificar:


```javascript
var valor = document.getElementById('slider').value;
document.getElementById('capa').setAttribute('style', 'font-size:' + (valor+12) + 'px');
```


## Código completo


Todo nuestro código quedará de la siguiente forma:


```html
<!DOCTYPE html>
<html>
<head>
  <title>Modificando CSS con Slider</title>
  <script>
    function modificarCSS() {
      var valor = document.getElementById('slider').value;
      document.getElementById('capa').style.borderRadius = (valor*2) + 'px';
      document.getElementById('capa').setAttribute('style', 
        'font-size:' + (valor+12) + 'px; border:1px solid #000; padding:10px; border-radius:' + (valor*2) + 'px');
    }
  </script>
</head>
<body>
  <div id="capa" style="font-size:12px; border:1px solid #000; border-radius:0px; padding:10px;">
    Este es el texto que vamos a modificar
  </div>
  <input type="range" id="slider" min="0" max="50" value="0" onchange="modificarCSS()">
</body>
</html>
```


¿Qué te ha parecido este uso del slider de HTML5? ¿Se te ocurren otros?

