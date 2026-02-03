---
title: "Usando Raphaël para dibujar algunas formas en multiples navegadores"
description: "Ejemplo de código en el que estaremos usando Raphaël para dibujar algunas formas en multiples navegadores."
date: 2013-02-08
updatedDate: 2026-01-13
tags: ["svg","jquery","canvas","raphael","circle","rect","text"]
slug: javascript/librerias/usando-raphael-para-dibujar-algunas-formas-en-multiples-navegadores
author: xhrist14n
type: doc
id: 2c8a9dfb-adca-8194-aff6-e4a447e6a2f9
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/apis/raphael/figuras.html
---

Primeramente enfoquémonos en qué es Raphaël. Raphaël es una librería [Javascript](https://www.manualweb.net/javascript/) para gráficos [SVG](https://www.manualweb.net/svg/) destinados a todos los navegadores actuales incluyendo a Internet Explorer que como todos sabemos es el que más problemas da a la hora de programar puesto que no es sencillo encontrar librerías que sean compatibles con este navegador.


## Instalación


Su modo de uso es sencillo. Primero debemos obtener la librería que la descargamos de la página: [http://raphaeljs.com/](http://raphaeljs.com/) y además de esto necesitaremos [jQuery](http://www.manualweb.net/jquery/) (no imprescindible).


Para comenzar debemos colocar en nuestro código [HTML](https://www.manualweb.net/html/) las librerías a usarse para esto incluimos el siguiente código:


```html
<script src="jquery.js"></script>
<script src="raphael.js"></script>
```


## Inicialización


Luego debemos poner una función inicializadora, en este caso haré uso del inicializador de [jQuery](http://www.manualweb.net/jquery/):


```javascript
$(document).ready(function() {
  // Código aquí
});
```


## Crear el Canvas


Dentro del mismo podremos hacer uso de la librería Raphaël y el conjunto de funciones de dibujo que deseemos. Y para esto necesitamos primero crear el canvas de dibujo de Raphaël, procedemos a hacerlo con el siguiente código:


```javascript
var paper = Raphael(10, 50, 700, 700);
```


Donde `paper` es el objeto que contiene el canvas de dibujo para Raphaël, el cual está posicionado en la posición 10,50 y tiene un tamaño tanto en alto como en ancho de 700px.


Para lograr dibujar cualquier objeto o interactuar con objetos de ahora en adelante usaremos el objeto `paper`.


## Dibujar Figuras


Nuestro objetivo es dibujar solo cuatro objetos que nos den alguna forma más o menos simétrica de un objeto, esto lo conseguimos así:


```javascript
var circulo = [paper.circle](http://paper.circle/)(350, 350, 80);
var rectangulo = paper.rect(290, 290, 120, 120);
var texto = paper.text(350, 350, "Raphaël");
var rectangulo2 = paper.rect(250, 250, 200, 200);
```


## Aplicar Estilos


Y por último procedemos a darle color para decorarlos con el siguiente código:


```javascript
circulo.attr({fill: "#f00", stroke: "#000", "stroke-width": 3});
rectangulo.attr({fill: "#0f0", stroke: "#000", "stroke-width": 2});
texto.attr({fill: "#fff", "font-size": 20});
rectangulo2.attr({fill: "none", stroke: "#00f", "stroke-width": 2});
```


Y obtenemos un interesante resultado que podemos probar en algún navegador de internet.

