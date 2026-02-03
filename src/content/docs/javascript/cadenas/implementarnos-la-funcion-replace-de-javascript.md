---
title: "Implementarnos la función replace de JavaScript"
description: "Ya que no está dentro del lenguaje veamos como podemos implementarnos la función replace de JavaScript."
date: 2009-03-12
updatedDate: 2026-01-13
tags: ["string","array","split","join","replace"]
slug: javascript/cadenas/implementarnos-la-funcion-replace-de-javascript
author: victor_cuervo
type: doc
topic: javascript
id: 2c8a9dfb-adca-81b9-bda2-e0e6537247db
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/cadenas/funcion-replace-javascript.html
---

Dentro del lenguaje [JavaScript](https://www.manualweb.net/javascript/) existe la función **replace** para realizar la sustitución de cadenas de textos. Podemos ver un ejemplo en ["Función Replace en JavaScript"](http://lineadecodigo.com/2007/08/07/funcion-replace-en-javascript/).


En este ejemplo vamos a ver como implementarnos la función replace a partir de otras funciones existentes en el lenguaje [JavaScript](https://www.manualweb.net/javascript/).


## Definir el interface de la función


Lo primero que haremos será definirnos el interface de la función:


```javascript
function replace(texto, s1, s2) {
  // código de la función
}
```


En esta función reemplazaríamos sobre el texto las cadenas `s1` que encontrásemos por las cadenas `s2`.


## Utilizar split() y join()


Existen diferentes formas de hacer dicha sustitución. Todas ellas nos las tenemos que codificar. En este caso vamos a utilizar dos funciones: `.split()` y `.join()`.


La primera lo que hace es, a partir de una cadena, crear un array de cadenas. La división la hace a partir del parámetro recibido. Así, si tenemos el siguiente código:


```javascript
var texto = "Son dos mil doscientos treinta y dos con nueve";
var array = texto.split("dos");
```


Lo que obtendremos será un array de la siguiente forma:


```javascript
array[0] = 'Son ';
array[1] = ' mil ';
array[2] = 'cientos treinta y ';
array[3] = 'con nueve';
```


Vemos que son 4 cadenas:

- `'Son '`
- `' mil '`
- `'cientos treinta y '`
- `'con nueve'`

## Unir el array con join()


Seguidamente utilizamos el método `.join()`. Este método lo que hace es unir un array de cadenas y entre cada cadena mete el texto que se recibe como parámetro. Así conseguimos hacer la sustitución del texto.


```javascript
var nuevoTexto = array.join("tres");
```


El resultado será:


```javascript
"Son tres mil trescientos treinta y tres con nueve"
```


## Implementación completa de la función replace


La función replace quedará de la siguiente forma:


```javascript
function replace(texto, s1, s2) {
  return texto.split(s1).join(s2);
}
```

