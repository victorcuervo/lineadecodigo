---
title: "Dividir una cadena en elementos con JavaScript"
description: "Uso del método split para poder dividir una cadena en elementos con JavaScript."
date: 2007-08-15
updatedDate: 2026-01-12
tags: ["cadena","array","string","split"]
slug: javascript/cadenas/dividir-una-cadena-en-elementos-con-javascript
author: victor_cuervo
type: doc
id: ac7685d1-3020-4df5-8006-263c9ab2e103
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/cadenas/dividir-una-cadena-en-elementos.html
---

Cuando estamos manejando **cadenas** en [JavaScript](https://www.manualweb.net/javascript/), nos encontraremos casos en los que deseemos convertir estas en **arrays** o viceversa. En determinadas ocasiones, es más fácil manejar en forma de array su contenido.


## El Problema


Pensemos en cuando estamos recopilando información en formularios de las páginas o descargando información al navegador. Si la información es una lista de elementos, tendremos varias formas de manipularla como parámetro.


**La primera opción** será tener un parámetro por cada elemento. Con ello tendremos URL de la siguiente forma:


```javascript
[http://www.ejemplo.com?elemento1=valor1&elemento2=valor2&elemento3=valor3](http://www.ejemplo.com/?elemento1=valor1&elemento2=valor2&elemento3=valor3)
```


Lo que hacemos es encadenar pares nombre-valor. Si bien, si varían el número de elementos, emisor y receptor tendrán que ajustar el código a la hora de manipular los elementos.


**La segunda forma** es enviarlos todos en un único parámetro con los valores en una cadena. En este caso tendríamos algo así:


```javascript
[http://www.ejemplo.com?elementos=valor1,valor2,valor3](http://www.ejemplo.com/?elementos=valor1%2Cvalor2%2Cvalor3)
```


En este caso daría igual que tengamos más o menos valores. Ahora lo que tenemos que saber es cómo, una vez que tenemos esta cadena, podemos dividirla en N elementos dentro de un array.


## La Solución con split()


Empezamos con una cadena JavaScript con los elementos:


```javascript
var cadena = "valor1,valor2,valor3";
```


Si queremos dividirlo y convertirlo en un array podemos utilizar **el método** **`.split()`**. Este método partirá la cadena en tantos elementos como caracteres de división encuentre. El carácter por el que dividirá será el que se pase como parámetro al método.


El método se ejecutará sobre la misma cadena y nos devolverá el array de elementos:


```javascript
var elementos = cadena.split(",");
console.log(elementos); // ["valor1", "valor2", "valor3"]
```

