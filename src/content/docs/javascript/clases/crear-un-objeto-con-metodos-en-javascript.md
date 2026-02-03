---
title: "Crear un objeto con métodos en Javascript"
description: "Crear un objeto con métodos en Javascript para poder añadir nuevas funcionalidades."
date: 2010-09-03
updatedDate: 2026-01-11
tags: ["function","objeto","clase","metodo"]
slug: javascript/clases/crear-un-objeto-con-metodos-en-javascript
author: victor_cuervo
type: doc
topic: javascript
id: 2df3f81a-3a58-49ee-9789-d1067cfafb40
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/objetos/objeto-rectangulo.js
---

En el artículo de cómo [crear un objeto en Javascript](http://lineadecodigo.com/javascript/crear-un-objeto-en-javascript/) podíamos ver como construir de una forma muy sencilla una clase con atributos, de tal manera que instanciásemos objetos de dicha clase y accediésemos a sus atributos. Ahora vamos a ver como podemos complicar la clase y añadirla métodos en [Javascript](https://www.manualweb.net/javascript/). 


En este caso vamos a utilizar la clase `Rectangulo`, la cual tendrá dos atributos: `base` y `altura`.


```javascript
function Rectangulo(base, altura) {
  this.base = base;
  this.altura = altura;
}
```


## Añadir métodos a un objeto


Ahora añadimos el método que nos permita calcular el área del rectángulo. Para añadir un método podemos hacerlo de dos formas. 


La primera será declarando una función [Javascript](https://www.manualweb.net/javascript/) inline. En este caso la función será anónima. Es decir, no tendrá un nombre:


```javascript
function Rectangulo(base, altura) {
  this.base = base;
  this.altura = altura;
  this.calcularArea = function() {
    return this.base * this.altura;
  };
}
```


La segunda opción es asignar a una de las variables una función externa con nombre. Así, definimos la función `getArea()`:


```javascript
function getArea() {
  return this.base * this.altura;
}
```


Y en la clase rectángulo asignamos a `calcularArea`, dicha función:


```javascript
function Rectangulo(base, altura) {
  this.base = base;
  this.altura = altura;
  this.calcularArea = getArea;
}
```


## Instanciar y usar el objeto


En ambos casos, instanciamos el objeto rectángulo:


```javascript
var miRectangulo = new Rectangulo(10, 5);
```


Y llamamos al método área:


```javascript
var area = miRectangulo.calcularArea();
console.log("El área del rectángulo es: " + area);
```

