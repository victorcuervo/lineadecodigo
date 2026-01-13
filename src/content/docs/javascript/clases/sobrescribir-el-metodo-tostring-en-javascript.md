---
title: "Sobrescribir el método toString en Javascript"
description: "Código que nos enseña como podemos sobrescribir el método toString en Javascript."
date: 2010-09-29
updatedDate: 2026-01-13
tags: ["objetos","tostring","prototype"]
slug: javascript/clases/sobrescribir-el-metodo-tostring-en-javascript
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/objetos/objeto-con-tostring.js
topic: javascript

---

Va siendo hora de aplicar los conocimientos adquiridos en los artículos sobre objetos en Javascript ([Crear métodos dinámicamente en Javascript](http://lineadecodigo.com/javascript/crear-metodos-dinamicamente-en-javascript/), [Crear un objeto con métodos en Javascript](http://lineadecodigo.com/javascript/crear-un-objeto-con-metodos-en-javascript/), [Crear un objeto en Javascript](http://lineadecodigo.com/javascript/crear-un-objeto-en-javascript/),...) para realizar algún ejemplo práctico. Y este será el sobrescribir el método toString en [Javascript](https://www.manualweb.net/javascript/).


Y es que, cuándo [creemos un objeto en Javascript](http://lineadecodigo.com/javascript/crear-un-objeto-en-javascript/), sobre este podemos invocar el método `.toString()`. Si bien, este método nos devolverá lo siguiente:


```javascript
[object Object]
```


## Definir el objeto


Vamos paso a paso... tenemos nuestro objeto persona


```javascript
persona = new Object();
persona.nombre = "Víctor";
persona.edad = 33;
persona.ciudad = "Madrid";
```


## Sobrescribir el método toString


Ahora, para sobrescribir el método toString en [Javascript](https://www.manualweb.net/javascript/) lo haremos dinámicamente mediante la sentencia prototype:


```javascript
persona.prototype.toString = function() {
  return this.nombre + " de " + this.edad + " años que vive en " + this.ciudad;
}
```


También lo podíamos hacer definido de forma directa sobre persona.


## Invocar el método toString


Ya solo nos queda instanciar el objeto e invocar el método `.toString()`


```javascript
document.write(persona.toString());
```


Mucho más bonito lo que suelta ahora por pantalla.

