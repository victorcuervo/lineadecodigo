---
title: "Recorrer una matriz en VBScript"
description: "Aprende a recorrer matrices bidimensionales en VBScript. Descubre cómo usar bucles for anidados y la función UBound para iterar filas y columnas."
date: 2008-03-30
updatedDate: 2026-02-09
tags: ["array","dim","ubound","for"]
slug: vbscript/arrays/recorrer-una-matriz-en-vbscript
type: doc
topic: vbscript
id: 562e945e-23fd-4603-b59f-51a23f9139a2
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_vbscript/blob/master/arrays/recorrer-una-matriz.html
---

Este ejemplo nos va a servir para recorrer un array bidimensional o matriz mediante el lenguaje VBScript. Los pasos son bastante sencillos.


## Rellenar el array


Lo primero será rellenar el array con datos. Esto lo vamos a hacer manualmente, posición a posición.


```javascript
dim miArray(2,3)
miArray(0,0) = "Posición 0,0"
miArray(0,1) = "Posición 0,1"
miArray(0,2) = "Posición 0,2"
miArray(0,3) = "Posición 0,3"
miArray(1,0) = "Posición 1,0"
miArray(1,1) = "Posición 1,1"
miArray(1,2) = "Posición 1,2"
miArray(1,3) = "Posición 1,3"
miArray(2,0) = "Posición 2,0"
miArray(2,1) = "Posición 2,1"
miArray(2,2) = "Posición 2,2"
miArray(2,3) = "Posición 2,3"
```


## Conocer el tamaño del array


Para recorrer la matriz necesitaremos dos variables dentro de dos bucles for. La idea es ir recorriendo fila a fila, y por cada fila recorrer todas sus columnas.


También necesitaremos conocer el tamaño del array, tanto en filas como en columnas. Para ello usaremos la función UBound(matriz) que nos dará número de filas del array. Si queremos conocer el número de columnas deberemos de pasar a la función UBound un segundo parámetro indicando de que dimensión queremos conocer su tamaño UBound(matriz, dimension).


## Recorrer la matriz


El bucle a utilizar será algo así:


```javascript
for x=0 to UBound(miMatriz)
  for y=0 to UBound(miMatriz,2)
    document.write (miMatriz(x,y))
  next
next
```

