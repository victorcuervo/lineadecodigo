---
title: "Abrir una ventana que no se pueda redimensionar"
description: "Descubre cómo abrir una ventana que no se pueda redimensionar en JavaScript y controla su tamaño fijo con una simple línea de código. ¡Hazlo ahora!"
date: 2009-11-10
updatedDate: 2026-02-11
tags: ["window","open","height","width"]
slug: javascript/navegador/abrir-una-ventana-que-no-se-pueda-redimensionar
type: doc
topic: javascript
id: c36eac69-eae5-440e-89a2-fc5996d849ea
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/ventanas/abrir-ventana-sin-redimension.html
---

Una de las cosas que podemos hacer con el método [.open()](http://w3api.com/wiki/DOM:Window.open()) de [Javascript](https://www.manualweb.net/javascript/) a la hora de abrir una ventana en Javascript es forzar a que la nueva tenga un tamaño fijo y que además el usuario no pueda redimensionar.


Para ello simplemente tendremos que jugar con [los valores de las características asociadas a la ventana](http://w3api.com/wiki/DOM:Window.open()#Propiedades_de_la_ventana).


## El método window.open()


Pero primero recordemos como es el método [.open()](http://w3api.com/wiki/DOM:Window.open()) del objeto [Window](http://w3api.com/wiki/DOM:Window):


```javascript
window.open(url:string, nombreVentana:string, caracteristicas:string)
```


## Características de la ventana


De las [características de la ventana](http://w3api.com/wiki/DOM:Window.open()#Propiedades_de_la_ventana) nos centraremos en:

- **height** y **width** para darle un tamaño fijo a la ventana
- **resizable** para que al abrir la ventana, esta no se pueda redimensionar

En las dos primeras propiedades utilizamos el tamaño en píxeles, mientras que en la segunda utilizaremos el valor false como indicador para no redimensionar.


## Código para ventana no redimensionable


El código que nos quedará será el siguiente:


```javascript
window.open("http://www.w3api.com", "nuevo", "width=400,height=400,resizable=false");
```


Una pequeña línea de código en [Javascript](https://www.manualweb.net/javascript/) que nos puede ser muy útil.

