---
title: "Función Replace en JavaScript"
description: "Código que nos explica cómo implementar la Función Replace en JavaScript."
date: 2007-08-07
updatedDate: 2026-01-11
tags: ["replace","regexp","string","javascript"]
slug: javascript/regexp/funcion-replace-en-javascript
author: victor_cuervo
type: doc
topic: javascript
id: 1908e548-0c43-45ca-af45-31e97d32bece
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/cadenas/funcion-replace-javascript.html
---

La función `replace` de [JavaScript](https://www.manualweb.net/javascript/) nos permite realizar sustituciones dentro de cadenas de texto de grupos de caracteres. La sintaxis de la función replace en [JavaScript](https://www.manualweb.net/javascript/) es la siguiente:


```javascript
cadena.replace(CadenaABuscar, CadenaQueLoSustituye);
```


## Ejemplo básico de sustitución


Así, podríamos realizar la siguiente sustitución:


```javascript
var frase = "Son tres mil trescientos treinta y tres con nueve";
frase = frase.replace("tres","dos");
```


En este caso, la primera coincidencia se sustituye dentro de la cadena. Es decir, la frase "Son tres mil trescientos treinta y tres con nueve" quedaría como "Son dos mil trescientos treinta y tres con nueve".


## Uso de expresiones regulares


Para poder realizar sustituciones más complejas hay que indicar que la función `replace` en [JavaScript](https://www.manualweb.net/javascript/) admite que el parámetro `CadenaABuscar` sea una expresión regular. De esta forma podríamos tener la siguiente sustitución:


```javascript
var frase = "Son tres mil trescientos treinta y tres con nueve";
frase = frase.replace(/[aiou]/gi,"e");
```


Lo que estamos diciendo con la expresión regular es que cualquier carácter del conjunto a, i, o y u, sea sustituido por el carácter 'e'. Nos devolvería "Sen tres mel tresceentes treente y tres cen neeve".


## Modificadores de expresiones regulares


Además, detrás de la expresión regular estamos utilizando un modificador. En este caso `gi`. Esto significa que la búsqueda es global, es decir, busca todas las coincidencias que puedan existir a lo largo de toda la cadena (modificador `g`) y que no es sensible a mayúsculas (modificador `i`).


## Sustitución global


Por lo tanto, si volvamos a nuestro primer ejemplo y lo que queremos es que se sustituyan todos los 'tres' por 'dos', deberíamos de utilizar el siguiente código:


```javascript
var frase = "Son tres mil trescientos treinta y tres con nueve";
frase = frase.replace(/tres/gi,"dos");
```


Espero que el ejemplo sea de utilidad...


> El anterior contenido de este post se ha desplazado a [Implementarnos la función replace de JavaScript](http://lineadecodigo.com/2009/03/12/implementarnos-la-funcion-replace-de-javascript/)


Puedes ver la [Desambiguación sobre la función replace de JavaScript](http://lineadecodigo.com/2009/03/12/desambiguacion-sobre-la-funcion-replace-de-javascript/).

