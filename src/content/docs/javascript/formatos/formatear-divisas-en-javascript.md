---
title: "Formatear divisas en Javascript"
description: "Cómo utilizar el método .format() del objeto Intl.Numberformat para formatear divisas en Javascript con su moneda y separadores."
date: 2021-01-19
updatedDate: 2026-01-11
tags: ["intl","format","json","locale","numberformat"]
slug: javascript/formatos/formatear-divisas-en-javascript
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/i18n/formatear-divisas.js
topic: javascript

---

Una de las capacidades que encontramos con el objeto [Intl.NumberFormat](https://w3api.com/Javascript/Intl/NumberFormat/), entre [muchas de las que le hemos visto](http://lineadecodigo.com/tag/javascript-intl/), es la posibilidad de **formatear divisas en Javascript**. Pero, ¿en qué consiste este formateo? 


La idea es que a partir de un valor que represente una cantidad numérica podamos añadirle de forma sencilla la moneda en la cual queramos mostrar el valor y poder indicar de forma clara los separadores de miles y decimales, los cuales cambian atendiendo a la ubicación en la que nos encontremos. 


Así podemos mostrar una cantidad en Euros para España en la cual la moneda es el Euro, los separadores son el punto para los miles y la coma para los decimales (pe. 1.235,64 €) o bien una cantidad en dólares para EEUU en la cual la moneda es el Dolar y los separadores son al contrario ya que la coma separa los miles y el punto separa los decimales.


## Definir la cantidad


Lo primero que tendremos será la cantidad. Vemos que este es un número entero que simplemente refleja la cantidad sin ninguna información adicional.


```javascript
const cantidad = 1235.64;
```


## Crear el objeto Intl.NumberFormat


Lo siguiente será instanciar el objeto [Intl.NumberFormat](https://w3api.com/Javascript/Intl/NumberFormat/Intl/NumberFormat/) el cual recibe dos parámetros.


El primero es el **locale** donde se establece la etiqueta de localización [representada por un código BCP 47](http://tools.ietf.org/html/rfc5646) en la que los dos primero caracteres representan el idioma, luego encontraremos un guión y luego dos caracteres que representan al país. Así encontraremos `'es-ES'`, `'ca-ES'`, `'en-UK'`, `'en-US'`, `'ar-EG'`, etc.


El segundo parámetro serán las **opciones**. Las opciones es una estructura JSON en las que se indican diferentes valores para dar el formato a la cantidad. En nuestro caso vamos a utilizar dos valores:

- **style**: nos sirve para saber cuál es el formato al valor. Como lo que queremos es formatear una cantidad monetaria utilizaremos el valor `"currency"`.
- **currency**: este valor nos sirve para poder indicar cual es la moneda que le queremos indicar a la cantidad. Siendo los valores posibles el acrónimo de las monedas, es decir, `EUR`, `USD`, `JPY`, `GBP`, etc.

De esta forma instanciaremos el objeto [Intl.NumberFormat](https://w3api.com/Javascript/Intl/NumberFormat/Intl/NumberFormat/) para España y Euros de la siguiente forma:


```javascript
const formato = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR'
});
```


## Formatear la cantidad


Una vez que tenemos el objeto lo que tendremos que hacer es darle formato. Para ello existe el [método .format()](https://w3api.com/Javascript/Intl/NumberFormat/format). A este método deberemos de pasarle el valor numérico al cual queremos darle el formato que acabamos de definir. 


Recordar que el valor lo habíamos definido en la constante `cantidad`. Es por ello que esta constante será la que pasemos al objeto [Intl.NumberFormat](https://w3api.com/Javascript/Intl/NumberFormat/) quedándonos el siguiente código:


```javascript
const cantidadFormateada = formato.format(cantidad);
console.log(cantidadFormateada); // Output: 1.235,64 €
```


Con esto ya hemos visto lo sencillo que es manejar el objeto [Intl.NumberFormat](https://w3api.com/Javascript/Intl/NumberFormat/) para formatear divisas en [Javascript](http://www.manualweb.net/javascript).

