---
title: "Unpacking de objetos en Javascript"
description: "El unpacking de objetos en Javascript permite asignar propiedades a variables fácilmente y renombrarlas si es necesario."
date: 2017-09-23
updatedDate: 2026-01-13
tags: ["unpacking","propiedades","objetos","console"]
slug: javascript/clases/unpacking-de-objetos-en-javascript
author: victor_cuervo
type: doc
topic: javascript
id: 2c8a9dfb-adca-81cd-ab81-c58e403a158d
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/objetos/unpacking-objetos.js
---

Siguiendo con temas de unpacking, ya hemos visto como hacerlo con [arrays](http://lineadecodigo.com/javascript/desestructurar-arrays-javascript/), [expresiones regulares](http://lineadecodigo.com/javascript/unpacking-valores-expresiones-regulares-javascript/),... en este caso vamos a ver cómo podemos hacer unpacking de objetos en [Javascript](https://www.manualweb.net/javascript/).


## Definir el objeto


Lo primero será definir un objeto con un par de propiedades. Así que lo haremos de la siguiente forma:


```javascript
let persona = {nombre:"Víctor",edad:47};
```


Cuando tenemos un objeto podemos volcar por consola el contenido de una de las propiedades de la siguiente forma:


```javascript
console.log(persona.nombre);
```


## Realizar unpacking de objetos


Para realizar un unpacking de objetos lo que haremos será definir las variables sobre las que queremos hacer el unpacking y definirlas en una estructura de llaves atendiendo a la siguiente forma:


```javascript
let {propiedad1, propiedad2} = objeto;
```


En este caso con el objeto que hemos definido haremos lo siguiente:


```javascript
let {nombre,edad} = persona;
console.log(nombre);
console.log(edad);
```


Vemos que al hacer en unpacking de objetos con Javascript podemos utilizar directamente las variables.


> El nombre de las variables para el unpacking debe de ser el mismo que el nombre las propiedades del objeto.


## Renombrar variables en unpacking


En el caso de que queramos dar un nuevo nombre a las variables sobre las que hacemos el unpacking deberemos de seguir la siguiente estructura:


```javascript
let {propiedad1:nuevavariable1, propiedad2:nuevavariable2} = objeto;
```


Así, con nuestro objeto utilizaremos nombres de variables diferentes de las siguiente forma:


```javascript
let {nombre:name,edad:age} = persona;
console.log(name);
console.log(age);
```


Con esto ya hemos visto lo sencillo que es realizar un unpacking de objetos en [Javascript](https://www.manualweb.net/javascript/).

