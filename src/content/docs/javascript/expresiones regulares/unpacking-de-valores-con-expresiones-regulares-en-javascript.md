---
title: "Unpacking de valores con expresiones regulares en Javascript"
description: "El unpacking de valores con expresiones regulares en Javascript permite extraer información de cadenas y asignarla a variables fácilmente."
date: 2017-09-14
updatedDate: 2026-01-13
tags: ["array","regexp"]
slug: javascript/expresiones-regulares/unpacking-de-valores-con-expresiones-regulares-en-javascript
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/regexp/unpacking-regexp.js
topic: javascript

---

El unpacking de valores con expresiones regulares en [Javascript](https://www.manualweb.net/javascript/) nos permite analizar una cadena de texto y extraer partes de ellas dejándolas directamente en variables que podamos utilizar en nuestro código fuente. Esto es posible gracias a los operadores de desestructuración que nos ofrece [Javascript](https://www.manualweb.net/javascript/).


Lo primero será tener una cadena para extraer información. La cadena será la siguiente:


```javascript
'Buenos días Juan, ¿Le gustó Ávila?'
```


Cómo podemos apreciar hay dos partes que son las que vamos a intentar extraer, estas son el nombre de la persona a la que saludamos y la otra será la ciudad sobre la que le preguntamos. Es decir, otra cadena podría ser:


```javascript
'Buenos días Lucía, ¿Le gustó Madrid?'
```


## Definir la expresión regular


Lo siguiente será definir la expresión regular que nos ayude a detectar estos dos grupos. Esta será la expresión regular:


```javascript
/días ([A-Za-z]+), ¿Le gustó ([A-Za-z]+)?/
```


Vemos que entre paréntesis se definen los grupos que queremos extraer, el resto corresponden con los literales específicos de la cadena.


## Ejecutar la expresión regular


Cuando ejecutamos esta expresión regular con el método `.exec()` lo que vemos es que se nos devuelve un array con varias posiciones.


```javascript
let regexp = /días ([A-Za-z]+), ¿Le gustó ([A-Za-z]+)?/;
let array = regexp.exec('Buenos días Juan, ¿Le gustó Ávila?');
```


La salida del array es:


```javascript
[ 'días Juan, ¿Le gustó Ávila?', 'Juan', 'Ávila', index: 7, input: 'Buenos días Juan, ¿Le gustó Ávila?' ]
```


Vemos que la primera parte es la cadena completa, seguida por los grupos que detectan las palabras buscadas.


## Desestructuración del array


Ahora es cuando tenemos que hacer la desestructuración del array.


```javascript
const [, nombre, ciudad] = array;
```


Utilizamos una coma de inicio para que ignore la primera posición, y luego dejamos las variables nombre y ciudad. En este momento directamente podemos utilizar estas variables que serán las que tengan el contenido extraído por la expresión regular.


```javascript
console.log(`La persona ${nombre} estuvo en ${ciudad}`);
```


Vemos que de esta forma tan sencilla podemos hacer un unpacking de valores con expresiones regulares en [Javascript](https://www.manualweb.net/javascript/).

