---
title: Validar que el texto introducido es un número
description: "Utilización del lenguaje Javascript para validar que el texto introducido es un número. Para ello utilizamos expresiones regulares."
lastUpdated: 2023-05-29
slug: /javascript/validar-que-el-texto-introducido-es-un-numero/
author: victor_cuervo
---

Validar que el texto introducido es un número en un formulario [HTML](https://www.manualweb.net/html/) es, quizás, el código [JavaScript](https://www.manualweb.net/javascript/) más utilizado a lo largo de la red. No en vano, si nos ponemos a pensar en el tipo de validaciones que se hacen dentro de un formulario, estas se limitaran a _**tamaños de cadenas**_, _**validaciones de número**_ o, en los casos más avanzados, en _**patrones o expresiones regulares**_.


Y es que la potencia de detección de patrones en [JavaScript](https://www.manualweb.net/javascript/) puede ayudarnos a resolver cualquier validación que queramos hacer en un [formulario HTML](https://manualweb.net/html/formularios-html/). Como veremos más adelante en el caso que nos compete.


Para empezar tenemos un [formulario HTML](https://manualweb.net/html/formularios-html/) simple, en el cual incluiremos un campo de texto mediante un elemento [`input`](https://www.w3api.com/HTML/input/).


```html
<form id="formularioCantidad">
  <label for="cantidad">Cantidad:</label>
  <input type="text" size="10" id="cantidad">
</form>

```


La idea es que cuando la persona teclee algo sobre este campo y se vaya a otro realicemos la validación sobre si es o no un número lo que ha introducido.


Así que lo primero que tenemos que hacer es controlar el evento [`onChange`](https://www.w3api.com/HTML/onchange/) el cual nos indicará que el contenido del campo ha cambiado con respecto al anterior y nos hemos ido a otro elemento de la página. Lo que haremos será asociar a este evento la función de validación.


Quedándonos la siguiente [línea de código](https://lineadecodigo.com/):


```html
<input type="text" size="10" id="cantidad" onchange="validarSiNumero(this.value);">

```


Como podemos ver, la función `validarSiNumero` está recibiendo como parámetro el valor que haya en el campo del formulario. Si bien, podemos utilizar cualquier [otro evento](https://www.w3api.com/HTML/tag/evento-html) que nos pueda venir bien.Ahora solo nos quedará codificar la función [JavaScript](https://www.manualweb.net/javascript/) que valide si lo recibido es un número. Como hemos dicho al principio, nos vamos a basar en patrones. Es decir, la idea es validar que los caracteres pasados son números y tendremos que compararlo contra un patrón que signifique eso.


Los patrones en [JavaScript](https://www.manualweb.net/javascript/) son **expresiones regulares**. Una expresión regular se define de la siguiente forma:


```javascript
/^ expr regular $/

```


Es decir, siempre empieza por `/^` y acaba por `$/`.


Si con una expresión regular queremos validar que un carácter sea un número utilizaremos el rango `[0-9]`, quedándonos la expresión de la siguiente forma:


```javascript
/^[0-9]$/

```


Si queremos indicar que van a ser un conjunto de caracteres deberemos de utilizar un operador de cardinalidad. En este caso deberemos de utilizar el `*` para indicar que serán n caracteres. Ahora, nos quedará de la siguiente forma:


```javascript
/^([0-9])*$/

```


Sobre la expresión regular se aplicará el método test, el cual recibe el dato a ser contrastado con la expresión regular. Es por ello que nuestra función de validación de números quedaría de la siguiente forma:


```javascript
function validarSiNumero(numero){
  if(!/^([0-9])*$/.test(numero))
    alert("El valor "+numero+" no es un número");
}

```


Ojo, que en la validación estamos indicando que sea diferente a la expresión regular definida. De ahí el símbolo exclamación (!). Que lo que hace es negar lo puesto después.


La función la deberemos de poner en la cabecera de la página para que pueda ser utilizada desde cualquier parte de la página.


De esta forma tan sencilla hemos conseguido validar que el texto introducido es un número en un formulario [HTML](https://www.manualweb.net/html/). ¿Qué otras formas se te ocurre de hacerlo?

