---
title: "Crear un objeto en Javascript"
description: "Pasos para poder crear un objeto en Javascript."
date: 2010-09-01
updatedDate: 2026-01-13
tags: ["clase","objeto","propiedades"]
slug: javascript/clases/crear-un-objeto-en-javascript
type: doc
topic: javascript
id: 5b0f98af-1045-49de-bc72-2476ea38c795
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/objetos/objeto-persona.js
---

Aunque [Javascript](https://www.manualweb.net/javascript/) no es un lenguaje orientado a objetos, por lo menos en sus versiones 1.x, podemos crear objetos y gestionar nuestro código mediante estos mismos.


> Como recordatorio de la programación orientada a objetos, hay que tener en cuenta que la clase es la definición y los objetos son las instancias individuales de la clase, con valores determinados.


## Crear una clase en Javascript


En [Javascript](https://www.manualweb.net/javascript/) las clases se crean utilizando las **funciones**. Es por ello que, si queremos crear una clase, lo único que tenemos que hacer es crear una función. 


Por ejemplo, si queremos crear la clase `Persona` que contenga los atributos `nombre`, `apellidos` y `edad` lo haremos de la siguiente forma:


```javascript
function Persona(nombre, apellidos, edad) {
  this.nombre = nombre;
  this.apellidos = apellidos;
  this.edad = edad;
}
```


Los atributos que crearemos dentro de la clase se referencian mediante `this`. Lo que hacemos es asignarlos los valores que se le pasan a la función.


## Instanciar un objeto


Para instanciar un objeto de una clase utilizaremos la sentencia `new`. Así si queremos instanciar un objeto de la clase `Persona` tendremos la siguiente línea de código:


```javascript
var persona = new Persona("Juan", "García López", 30);
```


## Acceder a las propiedades


Ahora lo que haremos será utilizar la información que hay dentro del objeto. Si queremos acceder a una propiedad utilizaremos la estructura:


```javascript
objeto.propiedad
```


Para sacar un mensaje con el nombre de una `Persona` tendremos el siguiente código:


```javascript
alert("El nombre es: " + persona.nombre);
```


Como podemos ver, crear una clase e instanciar un objeto de la misma en [Javascript](https://www.manualweb.net/javascript/) se hace de una forma rápida y sencilla.

