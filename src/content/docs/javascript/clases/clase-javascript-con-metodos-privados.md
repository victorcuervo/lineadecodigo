---
title: "Clase Javascript con métodos privados"
description: "Crear una clase Javascript con métodos privados para encapsular la funcionalidad."
date: 2010-09-19
updatedDate: 2026-01-13
tags: ["clases","objetos","funciones","metodo","metodo-privado"]
slug: javascript/clases/clase-javascript-con-metodos-privados
author: victor_cuervo
type: doc
topic: javascript
id: 5cd4186a-787f-41eb-8a17-165ef40fdbb9
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/objetos/objeto-rectangulo-metodos-privados.js
---

Hemos visto como crear [atributos privados definidos dentro de una clase en Javascript](http://lineadecodigo.com/javascript/clase-con-atributos-privados-en-javascript/). Ahora crearemos **métodos privados** que nos permitan acceder a esa información.


En la siguiente definición vemos [como podemos crear métodos públicos](http://lineadecodigo.com/javascript/crear-un-objeto-con-metodos-en-javascript/). Los cuales se pueden invocar desde cualquier parte del código [JavaScript](https://www.manualweb.net/javascript/).


```javascript
function Rectangulo(base,altura) {
  this.base = base;
  this.altura = altura;
  this.area = function() { return this.base * this.altura; }
}
```


## ¿Cómo crear métodos privados?


Pero, si nos queremos volver orientados a objetos en el más puro de los sentidos, una de las preguntas sería **¿Cómo puedo crear métodos privados?**


Recordamos que los **métodos privados** son aquellos métodos que se pueden llamar desde métodos de la clase, pero nunca de forma externa a la clase.


En este caso vamos a añadir un método que incremente en uno la altura. Pero haremos que el método sea privado. Para que el método solo sea privado dejamos de utilizar el elemento **this**.


## Definir métodos privados


Así, los métodos privados nos quedarían de la siguiente forma:


```javascript
function Rectangulo(nbase,naltura) {
  var base = nbase;
  var altura = naltura;
  
  function incBase() { base++; }
  function incAltura() { altura++; }
  
  [this.inc](http://this.inc/) = function() {
    incBase();
    incAltura();
  }
  
  this.area = function() { return base * altura; }
}
```


Vemos que los métodos **incBase()** e **incAltura()** son métodos privados, definidos como simples funciones y que acceden a propiedades privadas (base y altura).


De igual manera, hemos creado un método público, llamado **inc()**, que invoca a estos métodos privados. Y que será el que podamos llamar desde código [JavaScript](https://www.manualweb.net/javascript/) externo.


```javascript
var miRectangulo = new Rectangulo(4,3);
[miRectangulo.inc](http://mirectangulo.inc/)();
alert(miRectangulo.area());
```

