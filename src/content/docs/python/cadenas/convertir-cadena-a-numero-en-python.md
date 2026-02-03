---
title: "Convertir cadena a número en Python"
description: "El artículo explica cómo convertir cadena a número en Python usando el método int para evitar errores en cálculos."
date: 2016-03-07
updatedDate: 2026-01-15
tags: ["int","tipo","variable","cadena","numero","print","type"]
slug: python/cadenas/convertir-cadena-a-numero-en-python
author: victor_cuervo
type: doc
topic: python
id: 08bc6e75-46bd-4e67-96a9-e35ccfc13955
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/basicos/cadena_a_numero.py
---

Este ejemplo básico nos sirve para explicar cómo podemos convertir cadena a número en [Python](http://www.manualweb.net/python/). Si estamos empezando con [Python](http://www.manualweb.net/python/) nos vamos a encontrar en muchas ocasiones con que el tipo de dato que estemos manejando sea una cadena de texto. Si lo leemos de una base de datos, si es un valor que lo hemos recuperado de una request al servidor, y lo que no nos queremos llevar es la sorpresa que a la hora de manipularlo como un número obtengamos resultados no esperados.


## El problema


Nos puede suceder si tenemos el siguiente código:


```python
n1 = '3'
n2 = '4'
resultado = n1 + n2
print(resultado)
```


Que nos muestre como resultado un `'34'` en vez de un `7`.


## La solución con int()


Así que tendremos que convertir cadena a número en [Python](http://www.manualweb.net/python/). Y para ello deberemos de utilizar el método `int()`. Este método recibirá como variable la cadena que queramos convertir. De esta forma el código a escribir deberá de ser:


```python
n1 = int('3')
n2 = int('4')
resultado = n1 + n2
print(resultado)
```


Ya habremos conseguido manipular los números de forma correcta.


## Verificar el tipo de variable


Como último podemos indicar que en el caso de que no sepas cual es el tipo de una variable en Python puedes recurrir al método `type()`:


```python
print(type(n1))
```


Ya vemos lo sencillo y útil que es convertir cadena a número en [Python](http://www.manualweb.net/python/).

