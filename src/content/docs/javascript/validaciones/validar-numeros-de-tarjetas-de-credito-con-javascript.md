---
title: "Validar números de tarjetas de crédito con JavaScript"
description: "Código explicado para ver como podemos validar números de tarjetas de crédito con JavaScript."
date: 2008-03-07
updatedDate: 2026-01-11
tags: ["regexp","match","visa","mastercard","tarjetas-de-credito"]
slug: javascript/validaciones/validar-numeros-de-tarjetas-de-credito-con-javascript
type: doc
topic: javascript
id: 322f6af4-16bb-4a10-a09a-92d220d1d850
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/formularios/validar-numero-tarjeta.html
---

Hace ya bastante tiempo leí en [anieto2K](http://www.anieto2k.com/2007/06/20/valida-tarjetas-credito-con-expresiones-regulares/) un pequeño, pero a la vez interesante artículo sobre como validar números de tarjetas de crédito con JavaScript mediante unas sencillas expresiones regulares en [Javascript](https://www.manualweb.net/javascript/). La idea es validar una tarjeta de crédito Visa y una tarjeta de crédito MasterCard. En nuestro caso vamos a ver el código completo del ejemplo.


## Formato de los números de tarjetas


Lo primero que tenemos que saber es el formato de los números de estas tarjetas de crédito, para poder montar las expresiones regulares que lo validen.

- **Visa:** son 4 grupos de 4 dígitos cada uno. Además el primer número de la tarjeta tiene que empezar por 4. Un total de 16 dígitos. Un ejemplo de número de una tarjeta Visa sería el siguiente: 4552 7204 1234 5678.
- **Mastercard:** de igual manera son 4 grupos de 4 dígitos cada uno. Pero en este caso los dos primeros dígitos van del 51 al 55. Un total de 16 dígitos. Un ejemplo sería 5588 3201 2345 6789.

## Construyendo las expresiones regulares


Ahora construyamos las expresiones regulares. Lo primero que tenemos que saber es que una expresión regular comienza con `/^` y termina con `$/`. Entre estos caracteres estará la expresión regular.


```javascript
/^$/
```


Como vamos a manejar dígitos tenemos que saber que el dígito lo representa el carácter `d`. Así:


```javascript
/^dd$/
```


sería una expresión regular que validase dos dígitos seguidos. Pero como no es plan de poner una ristra de caracteres `d` hasta llegar a 16 podemos utilizar la cardinalidad, es decir, el número de veces que se repite un dígito. Para ello utilizamos la siguiente expresión `{n}`:


Así los dos dígitos quedarían de la siguiente forma:


```javascript
/^d{2}$/
```


Alguna cosa más que tenemos que saber es que si queremos que en una posición vaya un número específico valdría con poner el número y de igual forma podemos expresar rangos mediante corchetes y el rango en concreto.


```javascript
[0-9]
```


Así, si queremos hacer referencia a los números entre el 500 y el 509 podríamos tener la siguiente expresión regular:


```javascript
/^50[0-9]$/
```


Por último, si queremos hacer referencia a que un número o carácter aparezca o no, es decir, la opcionalidad. Utilizamos el símbolo de cierre de interrogación `?`. Esto nos servirá para hacer referencia que entre los grupos de dígitos de 4 de las tarjetas pueda venir un guión o no.


## Expresiones regulares finales


Finalmente las expresiones regulares de Visa y Mastercard serian las siguientes:


```javascript
var visa = /^4d{3}-?d{4}-?d{4}-?d{4}$/;
var mastercard = /^5[1-5]d{2}-?d{4}-?d{4}-?d{4}$/;
```


## Validando con el método match


Para validar si una cadena se ajusta a una expresión regular tenemos varios métodos. En nuestro caso utilizamos `match`. Este método le aplicamos directamente sobre la cadena:


```javascript
cadena.match(expresion_regular);
```


Esto nos devolverá un valor booleano. Es por ello que simplemente tendremos que comprobar el valor retornado:


```javascript
if (cadena.match(expresion_regular)) {
  // Hacer algo
}
```


**Vía:** Anieto2K (qué tanto nos enseño desde 2005)

