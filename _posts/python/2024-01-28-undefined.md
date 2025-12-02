---
layout: post
title: Crear un fichero en Python
excerpt: "Explicación de las formas que tenemos para crear un fichero en Python y análisis de los beneficios de utilizar una estructura with en el proceso."
categories: Python
tags: [python ficheros]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

En este artículo vamos a ver lo sencillo que es crear un fichero en [Python](https://www.manualweb.net/python/) sobre el que volcaremos un contenido. Para ello vamos a analizar que estructuras de control y que funciones de Python vamos a necesitar para llevar a cabo la tarea.


### Lo primero, crear un fichero en Python


Lo primero que haremos será crear un fichero en [Python](https://www.manualweb.net/python/). Para crear el fichero en [Python](https://www.manualweb.net/python/), lo primero que tendremos que hacer es abrirlo mediante la función [`open()`](https://www.w3api.com/Python/open/). Pero, ¿cómo que abrir el fichero si este no existe y lo queremos crear?


Esto es debido a que podemos indicarle al método [`open()`](https://www.w3api.com/Python/open/) que si al intentar abrir un fichero, este no existe, lo cree. Para ello vamos a analizar la sintaxis de la función [`open()`](https://www.w3api.com/Python/open/):


```python
open(file, mode='r', buffering=- 1, encoding=None, errors=None, newline=None, closefd=True, opener=None)
```


Vemos que el primer parámetro que tiene el fichero, el parámetro `file` es el nombre que le queremos asignar al fichero, nombre con el que le crearemos. Y el segundo parámetro es el modo de apertura que se refleja en el parámetro `mode`. Atendiendo a su sintaxis podemos comprobar que por defecto el fichero se abre en un modo lectura o ‘r’.


Los diferentes modos que tenemos de abrir un fichero en [Python](https://www.manualweb.net/python/) son:

- **r:** Modo lectura (read). Es el modo por defecto.
- **w:** Modo escritura (write). Si el fichero existe se sobrescribe.
- **a:** Modo append. Añade contenido al final del fichero si existe.
- **x:** Modo creación exclusiva. Falla si el fichero ya existe.
- **b:** Modo binario.
- **t:** Modo texto (por defecto).
- **+:** Modo actualización (lectura y escritura).

Dependiendo de lo que queramos hacer con el fichero utilizaremos un modo u otro. En nuestro caso vamos a utilizar un modo de escritura o write que es el modo ‘w’.


Así para crear un fichero lo haremos mediante el siguiente [código en Python](https://lineadecodigo.com/categoria/python/):


```python
fichero = open("mifichero.txt","w")
```


Vemos que aquí, exista o no un fichero se crea un fichero que se llama mifichero.txt.


### Incluir contenido en el fichero


Una vez que tenemos creado el fichero en [Python](https://www.manualweb.net/python/), lo siguiente que haremos será incluir contenido en él. Para ello podemos hacerlo de dos formas: incluyendo contenido directamente sobre el fichero o utilizando la estructura `with`. Vamos a analizar cada una de las alternativas


**Incluir contenido directamente**


Para crear un fichero en [Python](https://www.manualweb.net/python/) podemos incluir contenido directamente en un fichero con [Python](https://www.manualweb.net/python/). En este caso, lo que tenemos que hacer es utilizar el método [`.write()`](https://www.w3api.com/Python/io/TextIOBase/write/) sobre el fichero que acabamos de crear. El método [`.write()`](https://www.w3api.com/Python/io/TextIOBase/write/) recibe como parámetro la cadena de texto que queremos añadir al fichero.


De esta forma nuestro código quedará de la siguiente forma:


```python
fichero.write("Contenido del fichero\n")
fichero.write("Más Contenido en el fichero\n")
fichero.write("Última fila del fichero\n")
```


Lo que tenemos que saber es, que cuando operamos directamente sobre el fichero mediante el método [`.write()`](https://www.w3api.com/Python/io/TextIOBase/write/) , lo último que tenemos que hacer es cerrar el fichero mediante el método [`.close()`](https://www.w3api.com/Python/io/IOBase/close/). Es por ello que el código quedaría de la siguiente forma:


```python
fichero.write("Contenido del fichero\n")
fichero.write("Más Contenido en el fichero\n")
fichero.write("Última fila del fichero\n")
fichero.close()
```


**Utilizar la estructura with**


Pero la forma más general y extendida de utilización de ficheros es mediante el uso de la estructura `with`. La sintaxis de la estructura `with` es la siguiente:


```python
with expresión_contexto as variable:
  # Bloque para utilizar la variable
```


De esta manera lo que utilizamos el la apertura del fichero como expresión de contexto y la variable fichero como variable.


Así la composición de nuestra estructura with sería la siguiente:


```python
with open("fichero.txt","w") as fichero:
  # Bloque para manipular el fichero
```


Ahora, dentro del bloque de la estructura `with`, será donde podamos incluir el contenido sobre el fichero mediante el método [`.write()`](https://www.w3api.com/Python/io/TextIOBase/write/). Siendo el código más estándar que nos permite crear un fichero en [Python](https://www.manualweb.net/python/) el siguiente:


```python
with open("fichero.txt","w") as fichero:
    fichero.write("Contenido del fichero\n")
    fichero.write("Más Contenido en el fichero\n")
    fichero.write("Última fila del fichero\n")
```


Ahora lo que nos diríamos es, pues vamos a cerrar el fichero mediante el método [`.close()`](https://www.w3api.com/Python/io/IOBase/close/). Pero la respuesta es que no, ya que la estructura `with` ejecuta el cierre del fichero directamente por nosotros.


Si bien, no solo el cierre automático de ficheros es uno de los beneficios de utilizar una estructura `with` para manipular el contenido del fichero, si no que tenemos también.

- Manejo automático de recursos (archivos, conexiones, etc.).
- Evita fugas de gestión recursos (como no cerrar un archivo).
- Código más limpio y fácil de leer.
- Manejo implícito de excepciones y liberación de recursos.

Espero que con este artículo tengas un poco más de conocimiento sobre el proceso que se sigue para crear un fichero en [Python](https://www.manualweb.net/python/).

