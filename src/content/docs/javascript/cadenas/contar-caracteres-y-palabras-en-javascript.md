---
title: "Contar caracteres y palabras en JavaScript"
description: "Código que explica cómo podemos contar caracteres y palabras en JavaScript de una forma sencilla, volcando el dato sobre un elemento input."
date: 2008-03-05
updatedDate: 2026-01-13
tags: ["getelementbyid","regexp","replace","split"]
slug: javascript/cadenas/contar-caracteres-y-palabras-en-javascript
type: doc
topic: javascript
id: dc040556-b270-440b-b3f2-4551d527f8c7
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/formularios/contar-caracteres-palabras.html
---

Cuando ofrecemos un área de texto puede darse el caso que tengamos un límite de los caracteres a ser introducidos. Por lo que es probable que queramos contar caracteres y palabras en [Javascript](https://manualweb.net/javascript/). En este caso sería bueno el irle ofreciendo al usuario el número de caracteres que se han insertado, y de paso las palabras.


## Crear el área de texto


Lo primero que vamos a hacer es crear un área de texto en [HTML](https://www.manualweb.net/html/) mediante el elemento [`textarea`](https://w3api.com/HTML/textarea/).


```html
<form id="formulario" action="#">
  <textarea id="area" cols="20" rows="10">
  Texto dentro del área de texto
  </textarea>
  <br>
  <input type="button" value="Contar las palabras" onclick="WordCount();">
</form>
```


Dentro del formulario incluimos un botón, que al ser pulsado invocará al método `wordCount()`, el cual contiene todo el código del ejemplo para contar caracteres y palabras en [JavaScript](https://www.manualweb.net/javascript/).


## Obtener el texto del área


Dentro del método `wordCount()` lo primero será obtener el texto del área de texto (valga la redundancia). Esto lo haremos mediante el método [`getElementById()`](https://www.w3api.com/DOM/Document/getElementById/).


```javascript
textoArea = document.getElementById("area").value;
```


Una vez que tenemos el texto el número de caracteres lo obtenemos mediante la longitud del mismo con la propiedad [`.length`](https://www.w3api.com/Javascript/String/length) del objeto [`String`](https://www.w3api.com/Javascript/String/):


```javascript
numeroCaracteres = texto.length;
```


## Contar las palabras


Lo siguiente es contar las palabras que tiene dicho texto. Para poder hacer esto utilizaremos la función [`split()`](https://www.w3api.com/Javascript/String/split/) la cual **trocea una cadena en subcadenas** tomando como carácter de corte el que le pasemos como parámetro, y dejándonos el resultado en un array de palabras.


```javascript
textoAreaDividido = textoArea.split(" ");
numeroPalabras = textoAreaDividido.length;
```


Lo más normal es pensar que contando la longitud del array de palabras tendremos la solución. Pero existen algunos casos que debemos de considerar:

1. Que exista un blanco al principio del texto.
2. Que exista un blanco al final del texto.
3. Que existan varios blancos seguidos.

## Aplicar expresiones regulares


En los dos primeros casos lo que tendremos que hacer es eliminar los espacios en blanco y en el tercer caso deberemos de reducir los X blancos en uno solo. Las cosas serian más fáciles si contásemos con funciones del estilo [`trim()`](https://www.w3api.com/Javascript/String/trim), `ltrim()` o `rtrim()`. Pero en [JavaScript](http://www.manualweb.net/javascript/) no es el caso.


Para solucionar esto deberemos de recurrir a las expresiones regulares y a la función [`.replace()`](https://www.w3api.com/Javascript/String/replace/). Deberemos de crear expresiones regulares que simulen las excepciones y aplicar un replace (por nada en el primer y segundo caso y por un espacio en el tercer caso).


Las expresiones regulares que simulan las excepciones son:


```javascript
primerBlanco = /^ /
ultimoBlanco = / $/
variosBlancos = /[ ]+/g
```


Una vez aplicadas las excepciones al texto haremos el split y contaremos la longitud.


```javascript
texto = texto.replace(variosBlancos, " ");
texto = texto.replace(primerBlanco, "");
texto = texto.replace(ultimoBlanco, "");
textoTroceado = texto.split(texto, " ");
numeroPalabras = textoTroceado.length;
```


De esta forma ya habremos conseguido un código que nos permita contar caracteres y palabras en [Javascript](https://manualweb.net/javascript/).


## Actualización 20.junio.2009


El orden de ejecución para la eliminación de blancos será variosBlancos, primerBlanco y ultimoBlanco. Ya que si ejecutamos variosBlancos al final podemos tener un inicio o fin de cadena con varios espacios en blanco que no controlemos.

