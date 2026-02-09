---
title: "Definir una variable en VBScript"
description: "Aprende a definir variables en VBScript usando la cláusula DIM. Descubre cómo VBScript asigna tipos dinámicamente según el valor asignado."
date: 2010-09-07
updatedDate: 2026-02-09
tags: ["dim","variable"]
slug: vbscript/basicos/definir-una-variable-en-vbscript
type: doc
topic: vbscript
id: 499833b8-898e-4591-a118-9123e08d003f
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_vbscript/blob/master/basicos/definir-una-variable-vbscript.html
---

Si queremos definir un valor variable en [VBScript](http://www.manualweb.net/vbscript/) deberemos de utilizar la clausula DIM.


```javascript
DIM variable
```


## Definir una variable


Así para definir la variable nombre haremos lo siguiente:


```javascript
DIM nombre
```


Mediante el símbolo igual le podremos asignar un valor:


```javascript
DIM nombre = "Victor"
```


Si bien es verdad que el compilador no se queja si omitimos la sentencia DIM. Así podremos definir una variable mediante la línea de código:


```javascript
nombre = "Victor"
```


## Tipo de variables en VBScript


Una cosa importante es que no se define el tipo de la variable, si no que en el momento que asignamos un valor a una variable, a dicha variable se le asigna un tipo. Así, la variable nombre, después de la asignación, será de tipo String. 


Si bien, en la siguiente línea, podemos hacer lo siguiente:


```javascript
nombre = 23
```


Automáticamente, la variable nombre, pasa a ser de tipo entero.

