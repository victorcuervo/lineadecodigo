---
title: Leer ficheros con Python
description: "Existen dos formas de poder leer ficheros con Python, bien leyendo el contenido entero del fichero o yendo línea a línea."
lastUpdated: 2023-05-27
author: victor_cuervo
---

En el artículo de hoy vamos a ver cómo podemos leer ficheros con [Python](https://www.manualweb.net/python/). Analizaremos las dos formas en las que podemos leer su contenido, bien sea de forma completa o línea por línea.


A lo largo del código vamos a utilizar el módulo [`os`](https://www.w3api.com/Python/os/) que nos permite acceder a diferentes interfaces para realizar operaciones sobre el sistema operativo. En concreto vamos a utilizar el módulo [`os.path`](https://www.w3api.com/Python/os-path/) que nos permite gestionar las ubicaciones de los archivos. Es por ello que vamos a importar este módulo [`os.path`](https://www.w3api.com/Python/os-path/)


```python
from os import path
```


Lo siguiente será comprobar que el fichero que vamos a leer existe, ya que, en caso contrario, el acceso de lectura fallaría. Para poder comprobar que el fichero exista nos ayudamos de la función [`.exists()`](https://www.w3api.com/Python/os-path/exists/) del módulo [`os.path`](https://www.w3api.com/Python/os-path/).


```python
nombre_fichero = "fichero.txt"

if (path.exists(nombre_fichero)):
  # Acciones sobre el fichero
else:
    print(f"El fichero {nombre_fichero} no existe")
```


Lo siguiente será abrir el fichero. Para abrir el fichero utilizamos la función [`.open()`](https://www.w3api.com/Python/open/). La función [`.open()`](https://www.w3api.com/Python/open/) es una función base del lenguaje [Python](https://www.manualweb.nte/python/). Esta función recibe muchos parámetros, [como puedes ver en su definición](https://www.w3api.com/Python/open/), pero nos vamos a quedar con los dos primeros que son el nombre del fichero y el modo de apertura del fichero. En este caso, como vamos a abrir el archivo para leerlo, utilizaremos el modificador `'r'`.


Por lo tanto, la forma de abrir el archivo es la siguiente:


```python
with open(nombre_fichero,"r") as fichero:
```


Como podemos ver, utilizamos la estructura `with` para abrir el fichero. La estructura `with` nos permite encapsular las operaciones de lectura y escritura en un bloque, de forma que se garantice el cierre del fichero incluso si se producen errores durante la lectura o escritura. Esta es una forma segura y recomendada de trabajar con ficheros en [Python](https://www.manualweb.nte/python/).


Lo siguiente será realizar la lectura, bien sea de forma completa o línea a línea.


### Lectura de ficheros de forma completa


Para realizar una lectura completa de un fichero con [Python](https://www.manualweb.nte/python/) lo que haremos será utilizar el método [`.read()`](https://www.w3api.com/Python/io/TextIOBase/read/) sobre el fichero. Esta lectura dejará todo el contenido en una variable. en nuestro caso lo que hacemos es mostrarla por consola.


```python
with open(nombre_fichero,"r") as fichero:
  print(fichero.read())
```


> El interface base que define el acceso a ficheros es [`IOBase`](https://www.w3api.com/Python/io/IOBase/), en dicha clase puedes ver todos los métodos que nos permiten manejar un fichero para su lectura, escritura, búsqueda, truncado,… Aunque luego tienes clases especializadas como [`TextIOBase`](https://www.w3api.com/Python/io/TextIOBase/) especializados para lectura de texto o [`RawIOBase`](https://www.w3api.com/Python/io/RawIOBase/) para lecturas “en crudo” del fichero.


### Leer ficheros por líneas


En este otro caso vamos a realizar la lectura por líneas del fichero. Para ello tenemos que saber que la operación [`.open()`](https://www.w3api.com/Python/open/) nos ha dejado un puntero a las líneas del fichero en una lista que podemos recorrer. Por lo que podemos utilizar una estructura `for` para recorrer cada una de las líneas.


```python
numberline = 1
with open(nombre_fichero,"r") as fichero:
  for linea in fichero:
    print(f"{numberline}-{linea}")            
    numberline = numberline+1
```


Lo que hacemos es utilizar el método [`print()`](https://www.w3api.com/Python/print/) para volcar cada una de las líneas por consola. Hemos utilizado un contador adicional para poder poner cada una de las líneas por la que vamos.


Así ya sabemos las dos formas que tenemos para poder leer fichero con [Python](https://www.manualweb.net/python/).

