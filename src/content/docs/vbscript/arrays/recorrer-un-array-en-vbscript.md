---
title: "Recorrer un array en VBScript"
description: "Este artículo explica cómo recorrer un array en VBScript utilizando un bucle for...next y la función UBound."
date: 2010-11-10
updatedDate: 2026-01-08
tags: ["array","for-next","recorrer","ubound"]
slug: vbscript/arrays/recorrer-un-array-en-vbscript
author: Víctor Cuervo
type: doc
id: 9e953049-aef5-4af2-8749-afdbfbf55682
download: https://github.com/victorcuervo/lineadecodigo_vbscript/blob/master/arrays/recorrer-un-array.html
---

Para explicar el ejemplo que nos ayuda a recorrer un array en [VBScript](http://www.manualweb.net/vbscript/) lo primero que haremos será definir el array. Para ello utilizamos la sentencia dim, la cual nos permite definir variables.


```visual basic
dim miArray(4)
```


Ahora cargamos valores en el array. Hay que notar que el primer elemento es aquel que empieza por 0.


```visual basic
miArray(0) = "Avila"
miArray(1) = "Salamanca"
miArray(2) = "Madrid"
miArray(3) = "Santander"
```


Lo siguiente será pasar a recorrer el array. En este sentido utilizaremos una estructura for...next. En la cual iremos incrementando el valor de una variable x hasta que lleguemos al tamaño máximo del array, el cual sabremos gracias al método `UBound()`.


```visual basic
for x=0 to UBound(miArray)   
  document.write (miArray(x)+ "<br></br>")
next
```


En cada iteracción del bucle utilizamos `document.write` para volcar el contenido del array a pantalla.

