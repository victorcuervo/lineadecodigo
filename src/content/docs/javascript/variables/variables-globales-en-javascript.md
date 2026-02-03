---
title: "Variables globales en Javascript"
description: "Cómo utilizar el modificador var para definir las variables globales en Javascript de tal manera que puedan ser accedidas en cualquier ámbito"
date: 2021-09-27
updatedDate: 2026-01-11
tags: ["variables","var"]
slug: javascript/variables/variables-globales-en-javascript
author: victor_cuervo
type: doc
id: 7321eb24-5dd1-4bcd-b737-df965449d08e
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/basicos/variable-global.js
---

Si ayer veíamos [qué eran las variables locales en Javascript](https://lineadecodigo.com/javascript/variables-locales-en-javascript/), hoy vamos a ver qué son las **variables globales en Javascript**. Las variables globales son aquellas variables que una vez definidas pueden ser accedidas y modificadas desde cualquier ámbito de nuestro programa.


Como ya comentábamos las variables en [Javascript](https://www.manualweb.net/javascript), por defecto, son variables globales. Esto es debido ya que desde un principio en [Javascript](https://www.manualweb.net/javascript) se podían definir las variables sin ningún modificador o mediante el modificador `var`.


## Definir variables globales con var


El modificador para poder definir una variable global en [Javascript](https://www.manualweb.net/javascript) es `var`. Así definiremos las variables globales en Javascript de la siguiente manera:


```javascript
var suma = 0;
var n1 = 10;
var n2 = 20;
```


## Ejemplo de uso de variables globales


Para ver funcionando y cómo se maneja el ámbito de este tipo de variables vamos a definir unas variables que llamaremos `suma`, `n1` y `n2` las cuales iremos manipulando en diferentes sitios.


```javascript
var suma = 0;
var n1 = 10;
var n2 = 20;
```


Ahora [creamos una función](https://lineadecodigo.com/tag/javascript-funciones/) que permitirá manejar la variable. Lo que hacemos es sumar las dos variables numéricas y dejar su valor en la variable `suma`.


```javascript
function sumar() {
  suma = n1 + n2;
}
```


Y otra función que nos permite mostrarla por consola mediante el objeto `console.log`.


```javascript
function mostrar() {
  console.log("El resultado es: " + suma);
}
```


Ahora lo que vamos a hacer es invocar a dichas funciones una tras otra desde el programa principal de [Javascript](https://www.manualweb.net/javascript). Esto hará que cada una de las funciones vaya accediendo y modificando el contenido de las variables globales que definimos en el programa principal.


```javascript
sumar();
mostrar();
```


Lo que sucede es que todas las funciones van manipulando las variables que se han definido de ámbito global, dentro del ámbito principal del programa, lo cual permite sumar y mostrarse por consola.


De esta forma sencilla espero que haya quedado un poco más claro cómo se definen y manejan las **variables globales en Javascript**.

