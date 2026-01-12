---
title: "Extraer partes de un email con Javascript"
description: "Se extraen partes de un email con Javascript usando expresiones regulares y desestructuración de arrays."
date: 2017-09-19
updatedDate: 2026-01-12
tags: ["email","regexp","array","console-log"]
slug: javascript/expresiones-regulares/extraer-partes-de-un-email-con-javascript
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/regexp/extraer-email.js
topic: javascript

---

En este ejemplo vamos a extraer partes de un email con Javascript. Para ello nos vamos a ayudar por un lado de **expresiones regulares** y por otro de las técnicas de **desestructuración de Javascript**.


Partimos de que tenemos un email del cual queremos extraer sus partes:


```javascript
var email = '[juan.sanchez@gmail.com](mailto:juan.sanchez@gmail.com)';
```


Las partes serían el **nombre de usuario, el servidor y el dominio**. En este caso serían:

- **nombre** = juan.sanchez
- **servidor** = gmail
- **dominio** = com

## Expresión Regular


Así que vamos con la expresión regular que va a analizar el email:


```javascript
/^([^@]+)@(\w+).(\w+)$/
```


Vemos que con los paréntesis indicamos los tres grupos de análisis que buscamos. Para el nombre de usuario buscamos cualquier palabra, es por ello lo de `[^@]+`, mientras que para el nombre de servidor como el dominio solo buscamos números y letras `\w+`.


## Ejecución de la Expresión Regular


La expresión regular la ejecutamos mediante el método `.exec()`:


```javascript
var email_analizado = /^([^@]+)@(\w+).(\w+)$/.exec(email);
```


Vemos que el resultado es el siguiente:


```javascript
[ '[juan.sanchez@gmail.com](mailto:juan.sanchez@gmail.com)', 'juan.sanchez', 'gmail', 'com', index: 0, input: '[juan.sanchez@gmail.com](mailto:juan.sanchez@gmail.com)' ]
```


## Desestructuración de Arrays


Ahora utilizamos la desestructuración de arrays de Javascript para quedarnos con las tres partes:


```javascript
var [,nombre,servidor,dominio] = email_analizado;
```


Vemos que ignoramos el primer elemento ya que es la cadena original y solo nos quedamos con los tres siguientes.


## Uso de las Variables


Ahora podemos utilizar las variables a nuestro antojo en el código fuente:


```javascript
console.log('Nombre del usuario: ' + nombre);
console.log('Servidor de Correo: ' + servidor);
console.log('Dominio: ' + dominio);
```


Así hemos podido extraer partes de un email con Javascript de una forma sencilla y con muy pocas líneas de código.

