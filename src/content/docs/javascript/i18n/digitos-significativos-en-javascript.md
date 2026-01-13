---
title: "Dígitos significativos en Javascript"
description: "El objeto Intl.NumberFormat nos permite realizar cosas como extraer los Dígitos significativos en Javascript."
date: 2021-01-11
updatedDate: 2026-01-13
tags: ["const","array","digitos","console-log","intl","numberformat","for-each"]
slug: javascript/i18n/digitos-significativos-en-javascript
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/i18n/digitos-significantes.js
topic: javascript

---

Hay ocasiones en los que manejamos valores con mucha precisión en su definición, pero de los cuales, nos puede llegar a interesar en un determinado momento el verlos como un valor general. Y es en este punto donde nos ayudan los **dígitos significativos** en [Javascript](http://www.manualweb.net/javascript).


Y, ¿qué es eso de los dígitos significativos en [Javascript](http://www.manualweb.net/javascript)? La idea que subyace detrás es la siguiente, imaginemos que estamos contabilizando elementos y el valor que **tenemos es de 12.163.903 pero nos piden un datos general**. Es decir, lo que queremos **indicar es que estamos en los 12 millones de elementos contabilizados**. Pues esto es en lo que nos ayudan los datos significativos en Javascript.


Y para ello disponemos del [objeto Intl.NumberFormat en Javascript](https://w3api.com/Javascript/Intl/NumberFormat/). Pero, vamos por paso.


## Creando una lista de números


Lo primero que vamos a hacer es crear una lista de números. Para ello definiremos una constante con el array de números.


```javascript
const numeros = [1235467.64, 24535467.12, 3456783.2, 15653231, 8976562, 3122122];
```


## Definiendo la precisión de dígitos significativos


Y ahora iremos dando formato a esos números. Pero lo primero será definir la precisión que consideremos de nuestros números importantes. Eso nos lo ofrece [el constructor de Intl.NumberFormat](https://w3api.com/Javascript/Intl/NumberFormat/Intl/NumberFormat/), el cual espera que le digamos la localización del idioma en el que trabajamos, en nuestro caso **"es-ES"** y el número de dígitos significativos. En nuestro caso vamos a indicar que hay dos números significativos.


```javascript
const formato = new Intl.NumberFormat('es-ES', { maximumSignificantDigits: 2 });
```


Esto se hace mediante es segundo parámetro de opciones, el cual espera un elemento JSON y en concreto mediante la **propiedad maximumSignificantDigits**.


## Aplicando el formato a los números


Lo que nos quedaría para poder aplicar este tipo de formato definido en el constructor sobre el número es llamar al [método .format()](https://w3api.com/Javascript/Intl/NumberFormat/format) que cogerá los valores y formateará el número.


```javascript
console.log(formato.format(numero));
```


Como habíamos definido un conjunto de números para hacer la prueba vamos a recorrerlos e ir [invocando al constructor](https://w3api.com/Javascript/Intl/NumberFormat/Intl/NumberFormat/) y al [método .format()](https://w3api.com/Javascript/Intl/NumberFormat/format) de forma iterativa. Para ello vamos a [utilizar una estructura for-each](http://lineadecodigo.com/java/bucle-for-each-en-java/).


```javascript
numeros.forEach(numero => {
  const formato = new Intl.NumberFormat('es-ES', { maximumSignificantDigits: 2 });
  console.log(numero + ' => ' + formato.format(numero));
});
```


## Resultado


Podemos ver los números que teníamos y los valores de dígitos significativos que nos muestra cuándo indicamos que la precisión que queremos es de 2.

- 1235467.64 ⇒ 1.200.000
- 24535467.12 ⇒ 25.000.000
- 3456783.2 ⇒ 3.500.000
- 15653231 ⇒ 16.000.000 (Aquí vemos que se redondea hacía arriba)
- 8976562 ⇒ 9.000.000
- 3122122 ⇒ 3.100.000

Espero el artículo os sea de utilidad.

