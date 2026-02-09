---
title: "Redimensionar un array con VBScript"
description: "Aprende a redimensionar arrays en VBScript. Descubre cómo usar REDIM y PRESERVE para modificar el tamaño de arrays sin perder sus elementos existentes."
date: 2008-02-09
updatedDate: 2026-02-09
tags: ["array","dim","ubound","redim","preserve"]
slug: vbscript/arrays/redimensionar-un-array-con-vbscript
type: doc
topic: vbscript
id: 2c8a9dfb-adca-8188-8f6e-ed1f754bc1c5
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_vbscript/blob/master/arrays/redimensionando-un-array.html
---

Una de las funcionalidades que tiene VBScript en el manejo de arrays es la capacidad de redimensionar el tamaño del array. Para ello se basa en la sentencia REDIM. La idea es modificar el tamaño del array.


Para demostrar su utilización vamos a definir un array con los dias de la semana, el cual volcaremos por pantalla. Seguidamente redimensionaremos el array para quitar el sábado y domingo, quedándonos un array con los cinco días hábiles.


## Definir el array


Lo primero que haremos será el definir el array e insertarle los diferentes elementos:


```javascript
dim semana()
redim semana(6)

semana(0) = "Lunes"
semana(1) = "Martes"
semana(2) = "Miercoles"
semana(3) = "Jueves"
semana(4) = "Viernes"
semana(5) = "Sabado"
semana(6) = "Domingo"
```


Hay que indicar que desde el principio definimos con la sentencia REDIM el array.


## Mostrar los elementos del array


Una vez cargado el array, recorremos y mostramos todos sus elementos. Para ello nos apoyamos en un bucle for, el cual irá desde el elemento 0 hasta el último elemento. Para saber cual es el último elemento de un array utilizamos la función `UBound`.


```javascript
'Mostramos todos los dias de la semana
document.write("Dias de la semana <br>")
for x=0 to UBound(semana)
  document.write (semana(x) & " ")
next
```


## Redimensionar el array


Ahora pasaremos a redimensionar el array. Para ello volvemos a utilizar la sentencia `redim`. Si bien, si queremos que se nos conserven los elementos ya existentes hay que utilizarla junto a la sentencia `preserve`.


```javascript
'Recortamos el array
redim preserve semana(4)
```


Ahora solo nos quedará el recorrer nuevamente el array.

