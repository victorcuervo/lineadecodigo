---
title: "Borrar un fichero en Python"
description: "Uso del módulo os de Python que nos ayude a borrar un fichero en Python mediante la función remove y validando que existe mediante exists()."
date: 2025-01-26
updatedDate: 2026-01-05
tags: ["try-except","os","exists","remove","filenotfounderror"]
slug: python/ficheros/borrar-un-fichero-en-python
type: doc
topic: python
id: b56fc25d-d4d4-415f-bbd6-d984715f6931
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/ficheros/borrar-fichero.py
---

Otro de los [ejemplos básicos sobre programación en Python](https://lineadecodigo.com/categoria/python/) que estamos revisando esta semana es el que explica cómo borrar un fichero en [Python](https://www.manualweb.net/python/).


## Módulo os para borrar un fichero en Python


El [módulo ](https://www.w3api.com/Python/os/)[`os`](https://www.w3api.com/Python/os/)[ de Python](https://www.w3api.com/Python/os/) nos ayuda con diferentes funciones que nos dan acceso a funciones del sistema operativo, entre ellas al acceso a ficheros y operaciones sobre ellos.


Así que nuestra primera [línea de código de nuestro programa en Python](https://lineadecodigo.com/categoria/python/) será el importar las funciones del [módulo ](https://www.w3api.com/Python/os/)[`os`](https://www.w3api.com/Python/os/). En concreto importamos las función [`remove()`](https://www.w3api.com/Python/os/remove/) y el [módulo ](https://www.w3api.com/Python/os-path/)[`os.path`](https://www.w3api.com/Python/os-path/).


```python
from os import remove, path
```


## Validar si existe el fichero


Una vez que tenemos importadas las utilidades de nuestro [módulo ](https://www.w3api.com/Python/os/)[`os`](https://www.w3api.com/Python/os/)[ de Python](https://www.w3api.com/Python/os/) pasaremos a validar si existe el fichero que queremos borrar. Para ello nos apoyamos en el método [`exists()`](https://www.w3api.com/Python/os-path/exists/) al cual pasaremos el path con la ruta del fichero que queremos borrar.


```python
ruta_fichero = "/directorio/fichero.txt"
if path.exists(ruta_fichero):
  # Existe el fichero
else:
  # No Existe el fichero
```


En el caso que el fichero exista devolverá un valor de `True` y podremos borrar el fichero y en el caso de que el fichero no exista devolverá un valor de `False`. Ahora ya estaremos preparados para poder borrar un fichero en [Python](https://www.manualweb.net/python/).


## Uso de remove para borrar un fichero en Python


Para borrar un fichero en [Python](https://www.manualweb.net/python/) vamos a utilizar la función [`remove()`](https://www.w3api.com/Python/os/remove/). Si revisamos la sintaxis de la función [`remove()`](https://www.w3api.com/Python/os/remove/) vemos que se le pasa el path con la ubicación del fichero, aunque mediante el parámetro `dir_fd` podemos especificar el directorio relativo a partir del cual queremos establecer el path.


```python
os.remove(path, *, dir_fd=None)
```


Así que podremos ejecutar código para borrar un fichero en [Python](https://www.manualweb.net/python/) de la siguiente forma:


```python
remove(ruta_fichero)
```


Es importante el hacerlo dentro de la estructura de validación del fichero que hemos creado anteriormente:


```python
ruta_fichero = "fichero.txt"
if path.exists(ruta_fichero):
    remove(ruta_fichero)
    print("Fichero eliminado")
else:
    print("El fichero no existe")
```


Y es que si ejecutásemos el borrado del fichero mediante la función [`remove()`](https://www.w3api.com/Python/os/remove/) y el fichero no existiese, nos mostraría un error del tipo [`FileNotFoundError`](https://www.w3api.com/Python/FileNotFoundError/). Por lo tanto, es una buena práctica validar siempre la existencia del fichero antes de intentar borrarlo.


O bien controlar la posible ejecución de la excepción [`FileNotFoundError`](https://www.w3api.com/Python/FileNotFoundError/) mediante una estructura `try-catch`:


```python
try:
    remove(ruta_fichero)
    print("Fichero eliminado")
except FileNotFoundError:
    print("El fichero no existe")
```


De esta manera podemos gestionar de forma elegante el error que se produce cuando intentamos borrar un fichero que no existe en nuestro sistema.


Ya tendremos completo nuestro código que nos ayuda a borrar un fichero en [Python](https://www.manualweb.net/python/).

