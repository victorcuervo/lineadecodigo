---
title: Borrar carpetas de forma recursiva en Python
description: "Cómo utilizar los módulos os y shutil para poder tener diferentes formas de borrar carpetas de forma recursiva en Python para directorios no vacíos."
lastUpdated: 2024-01-28
author: victor_cuervo
---

El proceso de borrar una carpeta cuando [aprendes a programar en diferentes lenguajes de programación](http://lineadecodigo.com/), siempre tiene un denominador común que son las carpetas con contenido en ellas. Es por ello que hoy vamos a ver cómo podemos borrar carpetas de forma recursiva en [Python](https://www.manualweb.net/python/).


### Borrar una carpeta en Python


Pero, lo primero, es saber lo más sencillo, ¿cómo borro una carpeta en [Python](https://www.manualweb.net/python/)? Pues para ello vamos a recurrir al [módulo ](https://www.w3api.com/Python/os/)[`os`](https://www.w3api.com/Python/os/), sí, ese que tiene las funciones que nos permiten manejar el sistema operativo y los ficheros que lo componen. Por ejemplo tenemos borrado de ficheros, borrado de directorios, listar directorios,…


En concreto la función que nos permite borrar una carpeta es [`rmdir()`](https://www.w3api.com/Python/os/rmdir/). La función [`rmdir()`](https://www.w3api.com/Python/os/rmdir/) recibe como parámetro la carpeta que queremos borrar según podemos ver en su sintaxis:


```java
os.rmdir(path, *, dir_fd=None)
```


Así que podemos borrar una carpeta con el siguiente [código en Python](https://lineadecodigo.com/categoria/python/):


```java
carpeta = "/micarpeta/borrar"
rmdir(carpeta)
```


Pero llegamos al caso en el cual, si el directorio contiene elementos, no se puede borrar y nos encontraremos el siguiente error [`OSError`](https://www.w3api.com/Python/OSError/) en consola:


```python
OSError: [Errno 66] Directory not empty: 'directorio/borrar'
```


### Eliminar el contenido de una carpeta antes de borrarla


Visto lo visto tendremos que eliminar el contenido de la carpeta antes de poder borrarla. Así que deberemos de listar el contenido de la carpeta mediante la función [`listdir()`](https://www.w3api.com/Python/os/listdir/) del módulo [`os`](https://www.w3api.com/Python/os/).


La función [`listdir()`](https://www.w3api.com/Python/os/listdir/) nos devuelve una lista con todos los ficheros y directorio de un directorio en concreto, tal y como podemos ver en el siguiente código:


```python
for fichero in listdir(carpeta):
	remove(fichero)
	print (f"Borrado el fichero {fichero}")
```


Vemos en nuestro [código en Python](https://lineadecodigo.com/categoria/python/) que por cada fichero podemos borrarlo mediante la función [`remove()`](https://www.w3api.com/Python/os/remove/) pasando el nombre del fichero como parámetro.


Pero, ¿esto funciona si es una carpeta? Pues no, para las carpetas tenemos que volver a utilizar la llamada a la función [`rmdir()`](https://www.w3api.com/Python/os/rmdir/). Así que tendremos que ver en el listado de ficheros si es un fichero para eliminarlo mediante [`remove()`](https://www.w3api.com/Python/os/remove/) o si es una carpeta y tenemos que eliminarla en un nuevo proceso.


Si necesitas ver más el detalle el proceso no dejes de leerte el artículo de [Listar un directorio en Python](https://lineadecodigo.com/python/listar-un-directorio-en-python/)**.**


```python
carpeta = "/micarpeta/borrar"

for fichero in listdir(carpeta):
    fichero = path.join(carpeta,fichero)
    if path.isdir(fichero):
        borrar_carpeta(fichero)
    else:
        remove(fichero)
        print (f"Borrado el fichero {fichero}")
```


Nos vamos a apoyar en la función [`isdir()`](https://www.w3api.com/Python/os-path/isdir/) del módulo [`os.path`](https://www.w3api.com/Python/os-path/) para saber si la entrada en el directorio es un fichero o una carpeta. Vemos que si es una carpeta tenemos que repetir el proceso y por eso llamamos a la función `borrar_carpeta()` que es la que nos ayudará a borrar carpetas de forma recursiva en [Python](https://www.manualweb.net/python/).


Además hemos visto que utilizamos otra función del módulo [`os.path`](https://www.w3api.com/Python/os-path/) que es [`.join()`](https://www.w3api.com/Python/os-path/join/). La función [`.join()`](https://www.w3api.com/Python/os-path/join/) nos permite crear el path completo entre el nombre de la carpeta o path y el nombre del fichero que estamos listando.


### Función para borrar carpetas de forma recursiva en Python.


Ahora ya nos centramos en la función para borrar carpetas de forma recursiva en [Python](https://www.manualweb.net/python/). Que es esa que hemos visto en el código que hemos llamado `borrar_carpeta()`.


```python
def borrar_carpeta(carpeta):
    if (path.exists(carpeta)):
        for fichero in listdir(carpeta):
            fichero = path.join(carpeta,fichero)
            if path.isdir(fichero):
                borrar_carpeta(fichero)
            else:
                remove(fichero)
                print (f"Borrado el fichero {fichero}")
        rmdir(carpeta)
        print (f"Borrada la carpeta {carpeta}")
    else:
        print ("La carpeta a borrar no existe") 
```


Lo que vemos es que hemos añadido el código que recorre todos los elementos y los va borrando. Si es una carpeta la llama de forma recursiva y al final del método que es cuando la carpeta está ya realmente vacía es cuando llamamos a la función [`rmdir()`](https://www.w3api.com/Python/os/rmdir/) que nos borra la carpeta.


Ya solo nos quedará el invocar por primera vez a esta función pasándole la carpeta base desde la que queremos realizar el borrrado.


```python
carpeta = "temp/borrar"
borrar_carpeta(carpeta)
```


Ya habremos conseguido tener por completo nuestro código sobre borrar carpetas de forma recursiva en [Python](https://www.manualweb.net/python/).


### Borrar carpetas de forma recursiva en Python con el módulo shutil


Hay que decir que este código es muy útil para realizar un proceso para borrar carpetas de forma recursiva en [Python](https://www.manualweb.net/python/). Pero a la hora de la verdad no tiene sentido que metamos este [código en Python](https://lineadecodigo.com/categoria/python/) dentro de nuestro programa, sobre todo porque ya hay módulos que lo tienen implementado internamente.


Y esto es cuando hablamos del módulo [`shutil`](https://www.w3api.com/Python/shutil/) que es una biblioteca estándar que proporciona una colección de funciones para realizar operaciones de alto nivel con archivos y directorios. Estas operaciones incluyen copiar, mover, renombrar, eliminar archivos y carpetas, así como **trabajar con árboles de directorios**. Es especialmente útil para gestionar el sistema de archivos de manera más cómoda y eficiente.


En este caso lo que hacemos es importar el módulo [`shutil`](https://www.w3api.com/Python/shutil/).


```python
import shutil
```


E invocar a su función [`rmtree()`](https://www.w3api.com/Python/shutil/rmtree/). La función [`rmtree()`](https://www.w3api.com/Python/shutil/rmtree/) nos permite realizar directamente un borrado recursivo.


```python
carpeta = "temp/borrar"
shutil.rmtree(carpeta)
```


Cómo podemos ver el uso de la función [`rmtree()`](https://www.w3api.com/Python/shutil/rmtree/) del módulo [`shutil`](https://www.w3api.com/Python/shutil/) es lo más sencillo para poder borrar carpetas de forma recursiva en [Python](https://www.manualweb.net/python/).

