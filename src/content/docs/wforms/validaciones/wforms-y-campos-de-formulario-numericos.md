---
title: "wForms y campos de formulario numéricos"
description: "Valida campos numéricos en formularios con wForms. Usa validate-integer para enteros y validate-float para decimales. Personaliza mensajes de error."
date: 2007-09-11
updatedDate: 2026-02-09
tags: ["validate-float","validate-integer"]
slug: wforms/validaciones/wforms-y-campos-de-formulario-numericos
type: doc
topic: wforms
id: 2c8a9dfb-adca-8175-80c0-d54452c400f1
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_wforms/blob/master/validacion-numerica.html
---

A nadie le gustaría que si al crear un [formulario HTML](https://lineadecodigo.com/html/formularios/) con un campo numérico alguien pusiese letras dentro. Mediante [wForms](https://lineadecodigo.com/wforms/) podemos validar que el campo es numérico de forma sencilla.


Simplemente tendremos que cargar el framework [wForms](https://lineadecodigo.com/wforms/) y utilizar la clase `validate-integer` dentro del campo de texto.


## Validar números enteros


La [línea de código](http://lineadecodigo.com/) sería la siguiente:


```html
<label for="entero">Numero Entero:</label>
<input id="entero" type="text" class="validate-integer"><br>
```


## Validar números decimales


Si bien, esta validación solo nos hará la validación sobre números enteros. En el caso de querer extender la validación a números decimales deberemos de utilizar la clase `validate-float`. En este caso nuestro código será:


```html
<label for="decimal">Numero decimal:</label>
<input id="decimal" type="text" class="validate-float"><br>
```


## Personalizar mensajes de error


Lo último que tenemos que saber es como modificar el texto de error. Esto lo podemos hacer mediante las variables JavaScript `wFORMS.behaviors['validation'].errMsg_integer` y `wFORMS.behaviors['validation'].errMsg_float`.


```javascript
wFORMS.behaviors['validation'].errMsg_integer = "El texto introducido tiene que ser un número entero";
wFORMS.behaviors['validation'].errMsg_float = "El texto introducido tiene que ser un número decimal. Por ejemplo: 9,5";
```

