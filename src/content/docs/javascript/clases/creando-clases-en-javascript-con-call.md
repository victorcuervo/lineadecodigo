---
title: "Creando clases en Javascript con call"
description: "Creando clases en Javascript con call para tener varios constructores."
date: 2010-12-14
updatedDate: 2026-01-13
tags: ["class","new","call","clase","objeto"]
slug: javascript/clases/creando-clases-en-javascript-con-call
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/objetos/multiples-constructores-call.js
topic: javascript

---

Una de las cosas que no se podían hacer hasta [Javascript 1.3](https://www.manualweb.net/javascript/) era el ejecutar multiples constructores en una clase. Cosa que se solucionó con el método **call**, el cual nos permite crear clases con varios constructores. Pero vamos paso a paso viendo cuál es el problema y la solución.


Si estás en una programación a objetos con [Javascript](https://www.manualweb.net/javascript/), lo más normal es que definas en clases las entidades con las que trabajas. Por ejemplo podríamos tener las entidades **DatosBásicosPersona** y **Domicilio**. Veamos la declaración de estas clases:


```javascript
function DatosBasicos(nombre,apellidos,edad) {
  this.nombre = nombre;
  this.apellidos = apellidos;
  this.edad = edad;
}

function Domicilio(calle,numero,ciudad,codigopostal) {
  this.calle = calle;
  this.numero = numero;
  this.ciudad = ciudad;
  this.codigopostal = codigopostal;
}
```


Dadas estas clases podemos instanciar objetos de las mismas:


```javascript
var datosBasicos = new DatosBasicos("Victor","Cuervo",38);
var domicilio = new Domicilio("Mi Calle",8,"Madrid","28000");
```


## ¿Cómo reutilizar constructores con call?


Pero, cómo podemos reutilizar estas clases para definir una entidad que sea **persona** en [Javascript](https://www.manualweb.net/javascript/), la cual aglutine información de estas dos entidades. Pues para ello utilizamos el **método call**. 


Este método nos permite invocar al constructor de una clase, pasándole la clase en la que queremos instanciar el constructor y los atributos de instanciación.


Así, podríamos definir la clase persona de la siguiente forma:


```javascript
function Persona(nombre,apellidos,edad,calle,numero,ciudad,codigopostal) {
  [DatosBasicos.call](http://datosbasicos.call/)(this,nombre,apellidos,edad);
  [Domicilio.call](http://domicilio.call/)(this,calle,numero,ciudad,codigopostal);
}
```


Vemos que el constructor de la clase **persona** invoca a los constructores de **datosbasicos** y **domicilios** haciéndoselos suyos. Muy importante ver que el primer atributo siempre es **this**, que hace referencia a la clase persona que inicia la instanciación.


## Instanciar la clase Persona


Así, podremos instanciar una persona de la siguiente forma:


```javascript
var persona = new Persona("Victor","Cuervo",38,"Mi Calle",8,"Madrid","28000");
```


Y acceder a sus valores:


```javascript
alert(persona.nombre + " " + persona.apellidos + " de " + persona.edad + " años vive en " +
      persona.calle + ", " + persona.numero + " en " + persona.ciudad);
```


Manteniendo una correcta definición de clases. Como hemos podido ver, el **método call** es un poco desconocido, pero es un método de gran utilidad. Sobre todo si programas orientado a objetos con [Javascript](https://www.manualweb.net/javascript/).

