---
title: "Cálculo del NIF en JavaScript"
description: "Código fuente que nos enseña cómo podemos realizar el cálculo del NIF en JavaScript."
date: 2007-01-16
updatedDate: 2026-01-12
tags: ["validation","substring","regexp","modulo"]
slug: javascript/expresiones-regulares/calculo-del-nif-en-javascript
author: victor_cuervo
type: doc
topic: javascript
id: 000bf2bb-2f29-4f1a-a815-28e908d7e048
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/validaciones/calculo-del-nif-en-javascript.html
---

Este ejemplo es muy sencillo pero muy útil. Consiste en calcular la letra del NIF a partir del número del DNI dentro de una página web con la ayuda de [JavaScript](https://www.manualweb.net/javascript/). El procedimiento del cálculo consiste en realizar el módulo de 23. Su resultado nos dará una posición en una secuencia de letras (TRWAGMYFPDXBNJZSQVHLCKE). La letra situada en dicha posición será la letra del NIF.


## Crear la cadena de letras


Nosotros creamos la ristra de letras en una variable:


```javascript
var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
```


## Calcular el módulo


Sobre el número del DNI calculamos el módulo (%) de 23:


```javascript
var posicion = dni % 23;
```


## Obtener la letra


Y obtenemos la letra de la cadena. Para ello nos ayudamos de la función substring (caracterInicio,numeroCaracteres). Veamos como sería esta [línea de código](http://lineadecodigo.com/):


```javascript
var letra = letras.substring(posicion, posicion + 1);
```


## Validar la entrada


Los datos los vamos a obtener de un formulario. Es por ello que cabe la posibilidad que el usuario nos introduzca datos erróneos (de manera intencionada o no). Para comprobar que el número introducido es correcto deberemos de comprobar que son 8 dígitos. Dicha comprobación la realizaremos mediante una expresión regular:


```javascript
var expresion = /^[0-9]{8}$/;
if (!expresion.test(dni)) {
  alert("El DNI debe tener 8 dígitos");
  return false;
}
```


## Ejecutar con el evento onBlur


Ah, se me olvidaba. La función la ejecutaremos cuando el usuario abandone el campo del número (se supone, en un proceso normal, que para pasar al campo de la letra). Es por ello que utilizaremos el evento onBlur de dicho campo.

