---
title: "Formulario que multiplica números en Javascript"
description: ""
date: 2006-12-20
updatedDate: 2026-01-05
tags: ["form","input","getelementbyid","value"]
slug: javascript/funciones/formulario-que-multiplica-numeros-en-javascript
author: victor_cuervo
type: doc
topic: javascript
id: fb0c94da-7e98-4e92-8267-e46be0e70b8a
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/formularios/multiplicar-numeros.html
---

Cuando hablamos de un formulario que multiplica números en [JavaScript](https://www.manualweb.net/javascript/) es debido a que una de las cosas para las que se ha usado [JavaScript](https://www.manualweb.net/javascript/) en los formularios [HTML](https://www.manualweb.net/html/) es para operar entre valores introducidos en los campos del formulario, por ejemplo para multiplicar valores. Aunque nos facilita una funcionalidad hace que por desgracia nos aparezca mucho código [JavaScript](https://www.manualweb.net/javascript/). Y digo por desgracia ya que creo que no hay cosa más tediosa y complicada que el mantenimiento de [JavaScript](https://www.manualweb.net/javascript/).


Sin ir más lejos este es uno de los principios en los que se apoya la especificación de XForms. Reducción del código [JavaScript](https://www.manualweb.net/javascript/). Solo queda que algún día este implementada en los navegadores. Hasta entonces seguiremos usando [JavaScript](https://www.manualweb.net/javascript/).


En el caso que hoy nos compete, la idea es facilitar al usuario una multiplicación de dos valores introducidos en un formulario. Es por ello que lo primero será el crear el formulario, el cual tendrá tres elementos [`input`](https://www.w3api.com/HTML/input/) que reflejarán los valores del multiplicando, el multiplicador y el resultado:


```html
<form id="multiplicar">
  <input type="text" id="multiplicando" value="0"> X
  <input type="text" id="multiplicador" value="0"> =
  <input type="text" id="resultado">
</form>
```


Por defecto hemos dado un valor de 0 a los campos. Aunque esto es opcional.


La idea es que cada vez que alguien modifique o bien el multiplicando o bien el multiplicador, el resultado cambie. Es por ello que tendremos que controlar el evento [`onChange`](https://www.w3api.com/HTML/onchange/) sobre dichos campos. Este evento llamará a la función multiplicar, la cual codificaremos más adelante.


```html
<form id="multiplicar">
  <input type="text" id="multiplicando" value="0" onchange="multiplicar();"> X
  <input type="text" id="multiplicador" value="0" onchange="multiplicar();"> =
  <input type="text" id="resultado">
</form>
```


La función `multiplicar()` será el código [JavaScript](https://www.manualweb.net/javascript/) que realice la multiplicación. Esta función la deberemos de poner en la cabecera de la página [HTML](https://www.manualweb.net/html/).


```html
<!DOCTYPE html>
<html>
  <head>
    <title>Multiplicar Números</title>
    <script>
      function multiplicar(){ ... }
    </script>
  </head>
  <body></body>
</html>
```


Esta función, lo primero que hará sera ir a recuperar el valor de los elementos del formulario. Para ello nos apoyaremos en el [DOM de los elementos de la página](https://www.manualweb.net/dom/) y en su función [`getElementById()`](https://www.w3api.com/DOM/Document/getElementById/). El parámetro será el valor del atributo [`id`](https://www.w3api.com/HTML/id/) del elemento [`input`](https://www.w3api.com/HTML/input/).


> Mucho cuidado con las mayúsculas y minúsculas de [`getElementById()`](https://www.w3api.com/DOM/Document/getElementById/). Un pequeño error en esto hará que la función no funcione y nos volvamos locos buscando el error.


```javascript
m1 = document.getElementById("multiplicando").value;
m2 = document.getElementById("multiplicador").value;
```


Esta función devolverá el elemento [HTML](https://www.manualweb.net/html/) en cuestión, es decir, el [`input`](https://www.w3api.com/HTML/input/). Así que habrá que acceder al valor del elemento con el atributo [`value`](https://www.w3api.com/HTML/input/value/).


Ahora ejecutamos la multiplicación. Veamos la [línea de código](https://lineadecodigo.com/):


```javascript
r=m1*m2;
```


Y por último deberemos de asignar el valor al campo de resultado. Para ello volvemos a utilizar el [`getElementById()`](https://www.w3api.com/DOM/Document/getElementById/).


```javascript
document.getElementById("resultado").value = r;
```


De esta forma la función `multiplicar()` quedaría de la siguiente forma:


```javascript
function multiplicar(){
  m1 = document.getElementById("multiplicando").value;
  m2 = document.getElementById("multiplicador").value;
  r = m1*m2;
  document.getElementById("resultado").value = r;
}
```


De esta forma ya hemos podido comprobar cómo se crea un formulario que multiplica números en [JavaScript](https://www.manualweb.net/javascript/).

