---
title: "Clase con atributos privados en Javascript"
description: "Un ejemplo de manejo de clases en Javascript en el que podremos crear una clase con atributos privados en Javascript."
date: 2010-09-18
updatedDate: 2026-01-12
tags: ["clases","objetos","atributos"]
slug: javascript/clases/clase-con-atributos-privados-en-javascript
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/objetos/objeto-rectangulo-atributos-privados.js
topic: javascript

---

En los ejemplos que hemos visto de orientación a objetos con Javascript: [Crear un objeto en Javscript](http://lineadecodigo.com/javascript/crear-un-objeto-en-javascript/) y [Crear un objeto con métodos en Javascript](http://lineadecodigo.com/javascript/crear-un-objeto-con-metodos-en-javascript/), hemos podido comprobar que los atributos de la clase eran variables públicas. Es decir, podían ser accedidas desde el código [Javascript](https://www.manualweb.net/javascript/) de manera directa.


Si queremos que no se tenga acceso directo, sino que sea mediante método, deberemos hacer que los atributos sean privados. Veamos cómo hacerlo.


## Atributos públicos


Los atributos públicos serían definidos de la siguiente forma:


```javascript
function Rectangulo(alto,ancho) {
  this.alto = alto;
  this.ancho = ancho;
}
```


Y pueden ser accedidos de la siguiente forma:


```javascript
var r = new Rectangulo(4,3);
alert(r.alto);
```


## Atributos privados


Para declararlos privados, dejamos de utilizar la cláusula **this** y pasamos a definirlos como variables. Jugando, en este caso, con el ámbito de uso de las variables en [Javascript](https://www.manualweb.net/javascript/).


Las definiríamos de la siguiente forma:


```javascript
function Rectangulo(alto,ancho) {
  var alto = alto;
  var ancho = ancho;
}
```


De esta forma, el código de acceso directo:


```javascript
var r = new Rectangulo(4,3);
alert(r.alto);
```


Devolvería **undefined**.


## Métodos públicos para acceder a atributos privados


En este caso tendríamos que proporcionar unos métodos públicos para acceder a estos atributos privados:


```javascript
function Rectangulo(alto,ancho) {
  var alto = alto;
  var ancho = ancho;
  
  this.getAlto = function() {
    return alto;
  }
  
  this.getAncho = function() {
    return ancho;
  }
}
```


Y el acceso mediante estos métodos:


```javascript
var r = new Rectangulo(4,3);
alert(r.getAlto());
```

