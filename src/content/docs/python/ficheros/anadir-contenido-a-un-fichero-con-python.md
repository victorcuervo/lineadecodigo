---
title: Añadir contenido a un fichero con Python
description: "Ejemplo que nos muestra cómo añadir contenido a un fichero con Python gestionando su modo de apertura e insertando texto."
lastUpdated: 2024-01-28
author: victor_cuervo
---

En este ejemplo vamos a ver cómo podemos añadir contenido a un fichero con [Python](https://www.manualweb.net/python/). La idea es partir de un fichero existente que ya tenga contenido y añadirle más contenido.


Por lo que lo primero serás definir una variable con el nombre del fichero sobre el que vamos a añadir el contenido.


```python
fichero = "fichero.txt"
```


Cuando manejamos ficheros es bueno aprovecharse de alguna librería como la librería [`os`](https://www.w3api.com/Python/os/). En concreto vamos a importar la librería [`os.path`](https://www.w3api.com/Python/os-path/) para poder chequear si existe el fichero que vamos a manipular.


```python
from os import path
```


Será el método [`os.path.exists()`](https://www.w3api.com/Python/os-path/exists/) el que nos permita comprobar que existe el fichero que vamos a manipular.


```python
if (path.exists(fichero)):
```


Habiendo validando que ya existe el fichero vamos a proceder a abrir el fichero, esto lo conseguimos mediante la función  [`open()`](https://www.w3api.com/Python/open/). La función [`open()`](https://www.w3api.com/Python/open/) recibe como parámetros, entre otros, el nombre del fichero y la forma de apertura del fichero. Como podemos ver en la sintaxis de la función:


```python
open(file, mode='r', buffering=- 1, encoding=None, errors=None, newline=None, closefd=True, opener=None)
```


En este caso como vamos a añadir contenido lo que haremos será abrirlo en forma “append” por lo que utilizaremos el valor “a”.


```python
with open(fichero,"a") as fichero:
```


Ahora pasaremos escribir el contenido sobre el fichero mediante el método [`write()`](https://www.w3api.com/Python/io/TextIOBase/write/), el cual tiene como parámetro el contenido que vamos a volcar al fichero.


```python
fichero.write("Fila añadida al Contenido del fichero\n")
```


El código Python con la comprobación del fichero, su apertura y escritura de contenido quedaría de la siguiente forma:


```python
if (path.exists(fichero)):
    with open(fichero,"a") as fichero:
        fichero.write("Fila añadida al Contenido del fichero\n")
else:
    print(f"El fichero {fichero} no existe")
```


Vemos que en el caso de que el fichero no exista le mostramos al usuario un mensaje indicando que este fichero no existe.


De esta manera hemos conseguido añadir contenido a un fichero con [Python](https://www.manualweb.net/python/).

