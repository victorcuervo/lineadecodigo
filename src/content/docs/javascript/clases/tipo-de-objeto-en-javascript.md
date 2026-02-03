---
title: "Tipo de objeto en Javascript"
description: "Cómo saber con que tipo de objeto en Javascript estamos trabajando."
date: 2010-10-30
updatedDate: 2026-01-13
tags: ["objeto","instanceof","string"]
slug: javascript/clases/tipo-de-objeto-en-javascript
author: victor_cuervo
type: doc
topic: javascript
id: 2d962533-a253-4c35-b3b6-a39cef17dfec
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/objetos/tipo-objeto.js
---

Si estamos trabajando con objetos en [Javascript](https://www.manualweb.net/javascript/) puede darse el caso de que necesitemos conocer el tipo de objeto con el que estamos tratando. En este caso podemos utilizar la sentencia **instanceof** para contrastar el tipo de dato que manejamos.


## Sintaxis de instanceof


La estructura para conocer el tipo de objeto sería la siguiente:


```javascript
objeto instanceof TipoObjeto
```


## Validar tipos de objetos básicos


Así, por ejemplo, si tenemos el siguiente objeto:


```javascript
var miCadena = "Hola Mundo";
```


Podemos validar el tipo de objeto que es en Javascript de la siguiente forma:


```javascript
if (miCadena instanceof String) {
  console.log("Es un objeto String");
}
```


## Validar objetos personalizados


A parte de servirnos para los tipos de objetos que vienen en el lenguaje [Javascript](https://www.manualweb.net/javascript/), también nos sirve para objeto definidos por nosotros mismos. Así, si definimos la clase rectángulo e instanciamos un objeto de este tipo.


```javascript
class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
}

var miRectangulo = new Rectangulo(10, 5);
```


Podemos realizar la misma validación mediante instanceof.


```javascript
if (miRectangulo instanceof Rectangulo) {
  console.log("Es un objeto Rectangulo");
}
```

