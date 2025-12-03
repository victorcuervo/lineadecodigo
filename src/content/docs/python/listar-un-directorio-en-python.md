---
title: Listar un Directorio en Python
description: "Para poder listar un directorio en Python deberemos comprobar que este existe mediante una función exists y listarlo con la función listdir."
lastupdates: 2024-01-28
author: victor_cuervo
---

En el artículo de hoy vamos a ver cómo podemos listar un directorio en [Python](https://www.manualweb.net/python/) para poder comprobar cual es el contenido del mismo. Y es que la sencillez que nos ofrece el [lenguaje de programación Python](https://lineadecodigo.com/categoria/python/) lo hace realmente útil para poder desarrollar utilidades de gestión de fichero ya sea en máquinas locales o en servidores.


### Uso del módulo os


Cómo hemos visto en anteriores artículos como el de [comprobar que existe un fichero en Python](https://lineadecodigo.com/python/comprobar-que-existe-un-fichero-en-python/), el módulo [`os`](https://www.w3api.com/Python/os/) se convierte en relevante para poder operar dentro de nuestro sistema operativo. 


Es por ello que lo primero que haremos será importar dicho módulo [`os`](https://www.w3api.com/Python/os/):


```python
from os import listdir, path
```


Si bien no vamos a importar todo el módulo, si no aquellos objetos que nos vayan a a ayudar para poder realizar nuestra tarea de listar un directorio en [Python](https://www.manualweb.net/python/). Así que importaremos el módulo [`os.path`](https://www.w3api.com/Python/os-path/) para poder comprobar que existe el directorio que queremos listar y la función [`listdir()`](https://www.w3api.com/Python/os/listdir/) para poder realizar el listado del directorio.


### Comprobar si existe el directorio 


Pero, vayamos por pasos, lo primero será comprobar que existe el directorio. Para ello nos podemos apoyar en lo que explicamos en el artículo [comprobar que existe un fichero en Python](https://lineadecodigo.com/python/comprobar-que-existe-un-fichero-en-python/) ya que la validación es la misma ya sea un fichero o un directorio.


Es decir, nos apoyamos en la función [`exists()`](https://www.w3api.com/Python/os-path/exists/) del módulo [`os.path`](https://www.w3api.com/Python/os-path/) . De la que si miramos su sintaxis podemos ver que recibe un path como parámetro.


```python
os.path.exists(path)
```


La función [`exists()`](https://www.w3api.com/Python/os-path/exists/) del módulo [`os.path`](https://www.w3api.com/Python/os-path/) nos devolverá un valor de `true` si existe un path o un `false` si no existe. Por lo que el [código Python](https://lineadecodigo.com/categoria/python/) que añadiremos para comprobar que existe el directorio será el siguiente:


```python
carpeta = "path/con/el/contenido/"

if (path.exists(carpeta)):
    // Listar directorio
else:
    print ("La carpeta no existe")
```


### Uso de la función listdir para listar un Directorio en Python


Una vez que hemos comprobado que existe el directorio del que queremos listar los ficheros pasaremos a focalizarnos en la función [`listdir()`](https://www.w3api.com/Python/os/listdir/) que nos ayudará para extraer los ficheros.


Si nos focalizamos en la sintaxis de la función [`listdir()`](https://www.w3api.com/Python/os/listdir/) veremos que lo que espera como parámetro es el path del cual queremos listar los ficheros:


```python
os.listdir(path='.')
```


Además vemos que si no le pasamos un path lo hará del directorio dónde estemos ejecutando nuestro [código en Python](https://lineadecodigo.com/categoria/python/). El resultado que devuelve la función [`listdir()`](https://www.w3api.com/Python/os/listdir/) es una lista con el contenido del directorio, ya sean ficheros o directorios.


Por lo tanto utilizamos un bucle for para poder recorrer el contenido de lista devuelta por la función [`listdir()`](https://www.w3api.com/Python/os/listdir/) :


```python
for fichero in listdir(carpeta):
        print (fichero)
```


De esta forma ya habremos conseguido listar un directorio en [Python](https://www.manualweb.net/python/). Es importante saber que en el caso de que el directorio contenga otros directorios, el contenido de los mismos no serán listados. Para ello deberemos de realizar un código que nos permita listar de forma concurrente el contenido de un directorio con [Python](https://www.manualweb.net/python/). Pero eso dejamos que nos lo contéis en los comentarios y lo dejamos para un próximo artículo de [Línea de Código](https://lineadecodigo.com/).

