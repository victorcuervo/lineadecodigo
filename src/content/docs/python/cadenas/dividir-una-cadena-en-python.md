---
title: "Dividir una cadena en Python"
description: "Utilización del método .split() para poder dividir una cadena en Python a partir de las comas que separan los elementos de la cadena."
date: 2021-01-18
updatedDate: 2026-01-14
tags: ["split","strip","for-in","print"]
slug: python/cadenas/dividir-una-cadena-en-python
type: doc
topic: python
id: 92707703-5280-4427-b9a4-8cffbf072864
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/cadenas/dividir-cadena-comas.py
---

Estos días estoy desarrollando un proyecto en [Python](http://www.manualweb.net/python) para [W3Api](http://www.w3api.com/) y la estandarización de APIs. Una cosa muy sencilla pero útil que me surgió fue el tener que dividir una cadena de [Python](http://www.manualweb.net/python) de elementos separados por comas para poder asignar una serie de valores.


Pongámonos manos a la obra. Lo primero que tenemos sería la cadena. En este caso he creado una variable de tipo cadena en la que vienen un conjunto de elementos separados por comas. Son un conjunto de medios de transporte.


```python
medios = "coche, moto, bicicleta, patinete, autobus"
```


## Dividir la cadena con .split()


Para poderlo separar vamos a utilizar el método `.split()` el cual nos divide la cadena en base a un separador y si no le decimos nada nos lo divide por cada espacio en blanco que se encuentre. Si no deberíamos de pasar como parámetro el valor por el cual queremos dividir la cadena.


```python
palabras = medios.split()
```


El método `.split()` nos devuelve una lista de elementos con la división de la cadena. Es por ello que utilizaremos una sentencia `for...in` para [recorrer la lista](http://lineadecodigo.com/python/iterar-una-lista-en-python/). y el método `.print()` para [mostrarlo por pantalla](http://lineadecodigo.com/python/hola-mundo-en-python/).


```python
for palabra in palabras:
    print (palabra)
```


## Usar la coma como separador


Cuando lo muestre por consola veremos que nos ha dividido las palabras pero que hay una serie de aspectos que tenemos que mejorar. El primero es que aparecen las comas. Esto lo resolvemos indicando que el separador del método `.split()` no es el espacio en blanco, si no la coma.


```python
palabras = medios.split(',')
```


## Eliminar espacios con .strip()


Y el segundo aspecto es que ahora aparecen espacios en blanco. Por lo tanto cada vez que recorramos la lista eliminaremos los espacios en blanco apoyándonos en el método `.strip()`


```python
for palabra in palabras:
    print (palabra.strip())
```


De esta forma ya habremos conseguido dividir una cadena en [Python](http://www.manualweb.net/python) a partir de las comas que se vaya encontrando. Espero que aunque sea un artículo sencillo le encontréis utilidad.

