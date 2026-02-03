---
title: "Creando clases en Javascript con apply"
description: "Creando clases en Javascript con apply para tener multiples constructores. Comparación a la hora de crearlo con call."
date: 2010-12-15
updatedDate: 2026-01-12
tags: ["apply","clases","call","constructor","arguments"]
slug: javascript/clases/creando-clases-en-javascript-con-apply
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-812c-9025-caaca6668da3
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/objetos/multiples-constructores-apply.js
---

Ayer veíamos que podíamos [crear clases con Javascript mediante el método call](http://lineadecodigo.com/javascript/creando-clases-en-javascript-con-call/). El método `call` nos permitía invocar a múltiples constructores, reutilizando una estructura de clases coherentes. Si bien, en [Javascript](https://www.manualweb.net/javascript/) contamos con otro método: el método `.apply()`.


Este método, al fin y al cabo, viene a hacer lo mismo que hace el método `.call()`, pero de otra forma.


## Clases definidas


Si recordamos, teníamos dos clases definidas `DatosBasicos` y `Domicilio`:


```javascript
function DatosBasicos(nombre, apellidos) {
  this.nombre = nombre;
  this.apellidos = apellidos;
}

function Domicilio(calle, numero, ciudad) {
  this.calle = calle;
  this.numero = numero;
  this.ciudad = ciudad;
}
```


## Usando apply para múltiples constructores


Y queríamos crear una clase `Persona` instanciando a los constructores de estas dos clases. El método `.apply()` nos permite hacer esto. Pero a diferencia del método `.call()`, `.apply()` recibe como parámetro el valor `arguments`. La variable `arguments` incluye todos los atributos de la clase que invoca.


Así, si definimos la clase `Persona` con `.apply()` sería de la siguiente forma:


```javascript
function Persona(nombre, apellidos, calle, numero, ciudad) {
  DatosBasicos.apply(this, arguments);
  Domicilio.apply(this, arguments);
}
```


Esto nos presenta un pequeño inconveniente, ya que deberemos de modificar `DatosBasicos` y `Domicilio` para que reciban todos los parámetros:


```javascript
function DatosBasicos(nombre, apellidos, calle, numero, ciudad) {
  this.nombre = nombre;
  this.apellidos = apellidos;
}

function Domicilio(nombre, apellidos, calle, numero, ciudad) {
  this.calle = calle;
  this.numero = numero;
  this.ciudad = ciudad;
}
```


Un pequeño inconveniente, pero que nos permite mantener la estructura de clases. Ahora ya solo te queda decidir cuál de los dos métodos en [Javascript](https://www.manualweb.net/javascript/) utilizar: si `.call()` o `.apply()`.

