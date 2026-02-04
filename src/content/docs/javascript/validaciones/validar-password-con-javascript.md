---
title: "Validar password con JavaScript"
description: "Como crear un formulario y añadirle que se pueda validar password con JavaScript."
date: 2009-09-01
updatedDate: 2026-01-11
tags: ["form","input","for","eventos","getelementbyid","charat","length"]
slug: javascript/validaciones/validar-password-con-javascript
type: doc
topic: javascript
id: 91589899-d9c2-4107-8d44-743093a692d2
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/formularios/validar-password.html
---

Este ejercicio consiste en comprobar, de una forma sencilla, que la contraseña introducida en un formulario, dentro de dos campos distintos, cumple una serie de restricciones:

- Ambas contraseñas deberán de coincidir.
- No se podrá dejar ningún campo de los dos vacíos.
- La cadena no podrá contener espacios en blanco.

Lo primero que haremos a la hora de crear el formulario será indicar que los campos de entrada deben de ser [INPUT](https://www.w3api.com/HTML/input/) del tipo password


```html
<input type="password" id="passwd" name="passwd">
<input type="password" id="passwd2" name="passwd2">
```


Con lo que respecta a la validación, se debe de hacer en cuanto el usuario quiera enviar el formulario. Es decir, deberemos de detectar el evento [onSubmit](https://www.w3api.com/HTML/onsubmit/). Dentro de este evento ejecutaremos la función de validación, dicha función retornará verdadero si se cumplen todos los requisitos, sino se retornará falso.


```html
<form onSubmit="return validarPasswd()">
```


Ahora empezaremos a codificar la función [Javascript](https://www.manualweb.net/javascript/) que realice la validación. En este caso es la función "validarPasswd", la cual llamamos desde el [onSubmit](https://www.w3api.com/HTML/onsubmit/). Hay que decir que tenemos diferentes formas de realizar esta validación. La más rápida sería con el uso de patrones. Pero en nuestro caso y orientándolo a un desarrollo muy básico vamos a realizarlo con estructuras básicas del lenguaje.


Para acceder al valor de los campos vamos a utilizar la función .getElementById. Esta función recibe como parámetro el [ID](https://www.w3api.com/HTML/id/) que le hayamos dado a los campos [INPUT](https://www.w3api.com/HTML/input/) del formulario. Es por ello que deberemos de revisar el valor de los atributos [ID](https://www.w3api.com/HTML/id/).


```javascript
var passwd = document.getElementById("passwd").value;
var passwd2 = document.getElementById("passwd2").value;
```


Ahora pasaremos a realizar las diferentes validaciones


## Que no haya espacios en blanco


Recorremos la cadena mediante un bucle iterativo y con una variable de guarda. En el caso de que encontremos un carácter en blanco, cambiamos el valor de la variable de guarda.


```javascript
var espacios = false;
for(var i = 0; i < passwd.length; i++){
  if(passwd.charAt(i) == " ") espacios = true;
}
```


## Que no nos hayan dejado un campo vacío


Para ello comprobaremos que el tamaño es mayor de 0. El tamaño de una cadena lo conseguimos con el atributo .length


```javascript
if(passwd.length == 0 || passwd2.length == 0){
  alert("Los campos de la password no pueden estar vacios");
  return false;
}
```


## Que ambas contraseñas coincidan


En este caso comprobaremos que el contenido de las variables es el mismo:


```javascript
if(passwd != passwd2){
  alert("Las passwords deben de coincidir");
  return false;
}
```


Ahora, ¿Te atreves a realizarlo con patrones?

