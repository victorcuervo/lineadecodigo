---
title: "Iterar una lista en Python"
description: "Ejemplo que nos enseña a iterar una lista en Python mediante un bucle for-each."
date: 2015-11-16
updatedDate: 2026-01-15
tags: ["lista","foreach","for-in"]
slug: python/listas/iterar-una-lista-en-python
type: doc
topic: python
id: df48da0f-ed49-4391-9395-686cc28b904c
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/listas/iterar_lista.py
---

En el ejemplo de hoy vamos a iterar una lista en [Python](http://www.manualweb.net/python/). Lo primero que haremos será definir una lista, para, a posteriori recorrer todos los elementos que esta contiene y mostrarlos por pantalla.


## Definir la lista en Python


Lo primero será definir la lista en [Python](http://www.manualweb.net/python/):


```python
nombres = ["carmen","elena","lucia","sara","patricia","sonsoles"]
```


La lista se define mediante un conjunto de elementos que están delimitados por corchetes (`[]`) y a su vez están separados por comas.


## Iterar la lista con for-each


Una vez que tenemos definida la lista, lo siguiente será iterar la lista en [Python](http://www.manualweb.net/python/). Para ello vamos a utilizar una sentencia **for-each**. La estructura de la sentencia iterativa for-each es la siguiente:


```python
for variable in lista:
    # código a ejecutar
```


En cada una de las iteraciones sobre los elementos de la `lista` será la `variable` la que contenga el elemento de la lista.


De esta forma, utilizando la lista definida al principio nuestro bucle for-each que nos sirva para iterar una lista en [Python](http://www.manualweb.net/python/) quedará de la siguiente forma:


```python
for nombre in nombres:
    print(nombre, end=' ')
```


De esta forma la salida por pantalla será:


```javascript
carmen elena lucia sara patricia sonsoles
```


Espero que haya sido de utilidad este ejemplo que nos enseña a iterar una lista en [Python](http://www.manualweb.net/python/).

