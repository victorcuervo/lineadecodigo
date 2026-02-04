---
title: "Comprobar claves en diccionario Python"
description: "Uso del operador in para poder comprobar claves en diccionario Python y así evitar errores en ejecución al intentar acceder a una clave que no exista."
date: 2017-07-04
updatedDate: 2026-01-14
tags: ["for","in"]
slug: python/diccionarios/comprobar-claves-en-diccionario-python
type: doc
topic: python
id: e87fd2f9-30da-4c60-8266-a319bfa3f2d1
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/diccionarios/existe_clave.py
---

Los diccionarios [Python](http://www.manualweb.net/python/) son unas estructuras que almacenan conjuntos de pares clave/valor. Cuando operemos con ellos será muy recomendable comprobar claves en diccionario [Python](http://www.manualweb.net/python/) para evitar errores en ejecución.


## Definir un diccionario


Lo primero será definir un diccionario. En este caso partimos del siguiente diccionario:


```python
colores = {"rojo":"red", "azul":"blue", "verde":"green"}
```


En este diccionario [Python](http://www.manualweb.net/python/) las claves serán los nombres de los colores en español, mientras que los valores serán los nombres de los colores en inglés.


Si ejecutamos la siguiente sentencia:


```python
print(colores["rojo"])
```


No habrá ningún problema, ya que el color existe, y la sentencia nos devolverá el valor en inglés.


Si bien, si ejecutamos la siguiente sentencia:


```python
print(colores["amarillo"])
```


Nuestro programa tendrá un error en ejecución. Y, claro está, no queremos que sucedan estas cosas.


## Operador in para comprobar claves


Es por ello que antes de manipular una clave de un diccionario en [Python](http://www.manualweb.net/python/), ya sea para acceder a su valor o para eliminarla deberemos de comprobar que la clave existe.


Para comprobar claves en diccionario [Python](http://www.manualweb.net/python/) nos vamos a apoyar en el operador `in` mediante la siguiente estructura:


```python
if clave in diccionario:
    # Acceder al valor
```


Así, si queremos comprobar si existe la clave 'amarillo' deberemos de codificar lo siguiente:


```python
if "amarillo" in colores:
    print(colores["amarillo"])
else:
    print("No existe el color amarillo")
```


Vemos que solo accedemos al contenido de la clave si esta existe. Es por ello que es muy recomendable comprobar claves en diccionario [Python](http://www.manualweb.net/python/) mediante el operador `in`.

