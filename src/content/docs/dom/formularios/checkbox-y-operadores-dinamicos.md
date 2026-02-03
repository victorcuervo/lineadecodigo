---
title: "Checkbox y Operadores Dinámicos"
description: "Cómo manejar Javascript en el uso de Checkbox y Operadores Dinámicos para poder guardar sus valores como valores binarios."
date: 2008-03-29
updatedDate: 2026-01-13
tags: ["bits","checkbox","xor","operadores"]
slug: dom/formularios/checkbox-y-operadores-dinamicos
author: victor_cuervo
type: doc
id: 1ba6c11a-0cc0-4ad7-96ec-79d054d944f6
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/formularios/checkbox-y-operadores-binarios.html
---

Será algo muy normal que en el desarrollo de nuestras aplicaciones web tengamos que incluir un formulario para obtener datos del usuario y lo más probable es que dentro de dichos formularios tengamos que recoger datos mediante checkbox. Imaginemos, por ejemplo, obtener los gustos del usuario, los nombre de los boletines a los que se quiere apuntar,...


Por ejemplo, actividades deportivas:


```html
<form>
  <input name="futbol" type="checkbox" value="futbol"></input>
  <label for="futbol">Fútbol</label>
  <input name="baloncesto" type="checkbox" value="baloncesto"></input>
  <label for="baloncesto">Baloncesto</label> 
  <input name="atletismo" type="checkbox" value="atletismo"></input>
  <label for="atletismo">Atletismo</label> 
  <input name="balonmano" type="checkbox" value="balonmano"></input>
  <label for="balonmano">Balonmano</label> 
  <input name="gimnasia" type="checkbox" value="gimnasia"></input>
  <label for="gimnasia">Gimansia Ritmica</label>
</form>
```


## Almacenar los datos


A la hora de almacenar la información seleccionada por el usuario en una base de datos lo primero que se nos puede ocurrir es el almacenar los datos en campos booleanos. Es decir, que tendremos un campo por cada posible opción del formulario. Esto nos obliga a realizar tantos accesos a los campos de la base de datos (para insertar los datos) como campos tengamos.


```javascript
let campoFutbol = true;
let campoBaloncesto = false;
let campoAtletismo = true;
.....
```


Vamos, un engorro. Y eso sin tener en cuenta que en cualquier momento nos pueden cambiar los requisitos de nuestro formularia y aparecer una nueva opción, lo cual implicaría alterar el diseño de la base de datos y del código que accede a la misma. Esto se complica sobremanera, ¿verdad?


## Solución con bits


La solución a este problema es utilizar datos en formato bit. Es decir, nuestras opciones son una ristra de bits, donde el hecho de que un bit este a 1 significa que esa opción esta seleccionada y al estar a 0 significa que no se ha seleccionado la opción. 


Partiremos de la base de que no hay ninguna opción seleccionada. Es decir, nuestro valor inicial es un 0.


```javascript
let Futbol = 0
let Baloncesto = 0
let Atletismo = 0
let Balonmano = 0
let Gimnasia = 0
```


Cuando el usuario pulse sobre uno de los campos cambiaremos su valor. Si el campo esta en 0 lo cambiaremos a 1 y si esta a 1 lo cambiaremos a 0. Para ello tendremos que hacer una operación de XOR (el operador XOR es ^) entre el valor actual de la cadena y una mascara que solo tenga a 1 el campo seleccionado. 


En el caso de que el usuario seleccione baloncesto (su mascara será 01000) deberíamos de realizar la operación:


```javascript
00000 XOR 01000 = 01000
```


Si ahora el usuario selecciona atletismo (mascara 00100) realizaremos la operación:


```javascript
01000 XOR 00100 = 01100
```


Cuando el usuario pulse sobre una opción seleccionada, como se aplica el XOR, su valor cambiara a 0. Si pulsamos sobre baloncesto:


```javascript
01100 XOR 01000 = 00100
```


Solo nos queda seleccionado el atletismo. 


## Trabajar con enteros


El último inconveniente que nos vamos a encontrar es que [Javascript](https://www.manualweb.net/javascript/) no trabaja con representaciones a nivel de bit, sino que lo transforma a valores enteros. Es decir, que nuestras operaciones serán con números enteros que serán potencias del 2. En el caso expuesto los valores de las opciones serian...


```javascript
Fútbol = 1
Baloncesto = 2
Atletismo = 4
Balonmano = 8
Gimnasia Rítmica = 16
```


El método que nos permitirá activar o desactivar las opciones es realmente sencillo:


```javascript
function activaDesactiva(valor){
  checkboxActivados = checkboxActivados ^ valor;
}
```


Donde `checkboxActivados` será la variable general que mantendrá el valor de las selecciones. 


Para finalizar recordar que las operaciones entre el valor almacenado y las mascaras se lanzaran en el evento `onClick` sobre los checkbox.


```html
<input name="futbol" type="checkbox" value="1" onClick="activaDesactiva(this.value)">Fútbol</input>
```

