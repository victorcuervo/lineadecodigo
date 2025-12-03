---
title: Crear una carpeta en Python
description: "Uso de la función mkdir y el módulo os.path para crear una carpeta en Python. Cómo controlar la excepción FileExistsError si ya existe la carpeta."
lastupdates: 2024-01-28
author: victor_cuervo
---

Ya hemos visto algunos[ ejemplos de código en Línea de Código](https://lineadecodigo.com/) que nos permiten, por ejemplo, [crear un fichero en Python](https://lineadecodigo.com/blog/crear-un-fichero-en-python/). En este caso vamos a ver cómo crear una carpeta en [Python](https://www.manualweb.net/python/).


### Uso de la librería OS


Lo primero que tenemos que saber, como en todo ejemplo de uso de ficheros, es que nos vamos a apoyar en el [módulo ](https://www.w3api.com/Python/os/)[`os`](https://www.w3api.com/Python/os/)[ de Python](https://www.w3api.com/Python/os/). Y es que el [módulo ](https://www.w3api.com/Python/os/)[`os`](https://www.w3api.com/Python/os/)[ de Python](https://www.w3api.com/Python/os/) nos permite acceder a los recursos del sistema operativo, los ficheros entre otras cosas, de una manera sencilla.


Por lo tanto lo primero que tenemos que hacer es importar el [módulo os](https://www.w3api.com/Python/os/).


```python
from os import path, mkdir
```


En concreto, para no importar todo el módulo, vamos a importar una función y otro módulo, por un lado [`mkdir`](https://www.w3api.com/Python/os/mkdir/) que nos permitirá la creación del directorio y por otra [`os.path`](https://www.w3api.com/Python/os-path/) que nos permitirá validar la existencia o no de dicha carpeta antes de crear y evitar así errores de ejecución.


Una vez importado vamos manos a la obra.


### Crear una carpeta en Python con mkdir


Lo primero será crear una carpeta en [Python](https://www.manualweb.net/python/) con la función [`mkdir`](https://www.w3api.com/Python/os/mkdir/). Si echamos un ojo a la función [`mkdir`](https://www.w3api.com/Python/os/mkdir/) vemos que su sintaxis es la siguiente:


```python
os.mkdir(path, mode=511, *, dir_fd=None)
```


Si vemos los parámetros podemos observar que tenemos los siguientes:  **path**, ruta del directorio que queremos crear. Esta ruta puede ser una ruta absoluta o relativa al directorio actual de trabajo. **mode**, que serán los permisos del directorio que se va a crear, por defecto es 511. y **dir_fd**, descriptor de archivo opcional que especifica el directorio relativo desde donde se interpretará la ruta path si esta es relativa.


Así que lo que necesitamos para crear una carpeta en [Python](https://www.manualweb.net/python/) es decidir cual es el nombre de la carpeta.


```python
carpeta = "/temp/mi-carpeta"
mkdir(carpeta)
```


### Controlando la excepción FileExistsError


Una de las cosas que tenemos que saber del uso de la función [`mkdir`](https://www.w3api.com/Python/os/mkdir/) es que si la carperta existe se generará una excepción [`FileExistsError`](https://www.w3api.com/Python/FileExistsError/). Es por ello que tendremos que controlar la posible generación de [`FileExistsError`](https://www.w3api.com/Python/FileExistsError/) mediante una estructura `try-except`.


```python
carpeta = "/temp/mi-carpeta"

try:
    mkdir(carpeta)
    print('Directorio creado exitosamente')
except FileExistsError:
    print('El directorio ya existe')
```


### Validar si existe la carpeta en Python


Si queremos evitar la potencial generación de la excepción [`FileExistsError`](https://www.w3api.com/Python/FileExistsError/) una alternativa que tenemos es la de poder validar si existe la carpeta en [Python](https://www.manualweb.net/python/) antes de crearla.


Ya hemos visto en el artículo [comprobar que existe un fichero en Python](https://lineadecodigo.com/python/comprobar-que-existe-un-fichero-en-python/) que para poder validar la existencia de un fichero tenemos que importar el módulo [`os.path`](https://www.w3api.com/Python/os-path/). Y utilizar la función [`.exists()`](https://www.w3api.com/Python/os-path/exists/) que tiene la siguiente sintaxis:


```python
os.path.exists(path)
```


Así que añadiremos la función [`.exists()`](https://www.w3api.com/Python/os-path/exists/) en nuestro [código Python](https://lineadecodigo.com/categoria/pyhton/) de la siguiente manera:


```python
carpeta = "/temp/mi-carpeta"

if (path.exists(carpeta)):
    print(f"La carpeta {carpeta} ya existe")
else:
    mkdir(carpeta)
    print(f"Carpeta {carpeta} creada")
```


Vemos que en el código nos apoyamos en la transposición de cadenas de Python para concatenar el nombre de la carpeta con el texto del resultado.


En este caso ya no necesitaríamos gestionar la excepción [`FileExistsError`](https://www.w3api.com/Python/FileExistsError/).


Con esto ya tenemos nuestro código para poder crear una carpeta en [Python](https://www.manualweb.net/python/). 

