---
title: Borrar una carpeta en Python
description: "Utilización del módulo os y de sus funciones remove, listdir y rmdir para poder borrar una carpeta en Python que no contenga otras carpetas dentro."
lastUpdated: 2024-01-28
author: victor_cuervo
---

Para poder borrar una carpeta en [Python](https://www.manualweb.net/python/) deberemos de asegurarnos que la carpeta está vacía antes de proceder a su borrado. Es por ello que vamos a ver en este artículo el proceso que deberemos de seguir para poder conseguirlo.


Lo primero es tener claro cual es el directorio que queremos borrar y lo dejaremos almacenado en una variable.


```python
carpeta = "temp/borrar"
```


### Validar si existe el directorio a borrar


Es una buena práctica el poder validar que el directorio existe para poder iniciar el borrado. Ya que si intentamos borrar un directorio que no existe nos dará error.


Es, en este punto, dónde podemos apoyarnos en el módulo [`os.path`](https://www.w3api.com/Python/os-path/) y, en concreto, con la función [`exists()`](https://www.w3api.com/Python/os-path/exists/)


```python
if (path.exists(carpeta)):
```


### Listar el contenido del directorio a borrar


Ahora pasaremos a ver si la carpeta está vacía o contiene ficheros. Para ello tenemos que recorrer su contenido utilizando la función [`listdir()`](https://www.w3api.com/Python/os/listdir/) del módulo [`os`](https://www.w3api.com/Python/os/).


```python
for fichero in listdir(carpeta):
  fichero = path.join(carpeta,fichero)
  print (f"Vamos a borrar el fichero {fichero}")
```


Cuando vamos recorriendo el directorio iremos obteniendo los nombres de los ficheros, pero no el path entero que tienen. Es por ello que tenemos que recurrir nuevamente al módulo [`os.path`](https://www.w3api.com/Python/os-path/) para poder tener el path del directorio más el fichero con la función [`.join()`](https://www.w3api.com/Python/os-path/join/)


Esto es lo que hemos añadido dentro del bucle for que hemos creado para recorrer los ficheros.


### Función remove para borrar ficheros


Una vez que tenemos claros los ficheros que hay dentro del directorio lo que haremos será borrarlo. Para ello nos apoyamos en la función [`remove()`](https://www.w3api.com/Python/os/remove/).


```python
for fichero in listdir(carpeta):
  fichero = path.join(carpeta,fichero)
  remove(fichero)
  print (f"Borrado el fichero {fichero}")
```


### Función rmdir para borrar una carpeta en Python


Ya vaciado el directorio podremos pasar a eliminar el directorio. Si para los ficheros utilizábamos la función [`remove()`](https://www.w3api.com/Python/os/remove/) para borrar el directorio utilizamos la función [`rmdir()`](https://www.w3api.com/Python/os/rmdir/).


```python
rmdir(carpeta)
print (f"Borrada la carpeta {carpeta}")
```


Con esto ya habremos conseguido borrar una carpeta en [Python](https://www.manualweb.net/python/). Si es verdad que estamos asumiendo que en la carpeta que queremos borrar no hay más directorios, solo contiene ficheros.


En el caso de que contenga más directorios habrá que hacerlo de forma recursiva. Nos puedes contar en comentarios como lo resolverías ya que tenemos diferentes formas y utilidades para poder hacerlo. Y en los [artículos sobre programación en Pyhton de Línea de Código](https://lineadecodigo.com/categoria/python/) lo publicaremos a no mucho tardar.

