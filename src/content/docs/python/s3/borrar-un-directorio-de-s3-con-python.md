---
title: "Borrar un directorio de S3 con Python"
description: "Aprende a borrar un directorio de S3 con Python de forma sencilla y efectiva, eliminando todos los ficheros antes de eliminar el directorio vacío."
date: 2016-03-08
updatedDate: 2026-01-17
tags: ["directorio","fichero","borrar","delete","tinys3"]
slug: python/s3/borrar-un-directorio-de-s3-con-python
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/tinys3/borrar_directorio_s3.py
topic: python

---

En un anterior ejemplo vimos [cómo podíamos borrar un fichero de S3 con Python](http://lineadecodigo.com/python/borrar-fichero-s3-python/), en este caso vamos a realizar algo parecido que es **borrar un directorio de S3 con** [**Python**](http://www.manualweb.net/python/). 


Si bien, en el caso del borrado de ficheros contábamos con el método `.delete()` la librería **TinyS3** no nos ofrece un método que permita el borrado de un directorio, así que tendremos que implementarlo nosotros mismos. 


## Borrar contenido del directorio


La idea de borrar un fichero de S3 con [Python](http://www.manualweb.net/python/) lo que busca es borrar todos y cada uno de los ficheros que haya en el directorio, para, al final, borrar el directorio en si mismo. Ya que si intentamos borrar un directorio que tenga contenido nos va a dar error. 


Lo primero para poder borrar un directorio de S3 con [Python](http://www.manualweb.net/python/) será conectarnos al sistema de Amazon S3 mediante la clave privada y secreto.


```python
conn = tinys3.Connection(ACCESS_KEY,SECRET_KEY,tls=True)
```


## Listar y eliminar ficheros


Lo que vamos a hacer es listar el directorio que queremos borrar. Para ello vamos a utilizar el método `.list()`


```python
lista = conn.list(DIRECTORIO,BUCKET)
```


Vemos que no solo hay que indicar el nombre del directorio a listar, si no que además hay que indicar el bucket que lo contiene. 


Ahora empezaremos a recorrer los ficheros que tiene el directorio.


```python
for fichero in lista:
    conn.delete(fichero['key'])
```


Por cada uno de los ficheros vamos a ejecutar el método `.delete()` que lo que va a hacer es borrar dicho fichero. Es importante saber que tenemos que utilizar la metainformación de la clave para pasarla como parámetro al método `.delete()`


## Eliminar el directorio


Una vez que hayamos borrado todos los ficheros del directorio solo nos quedará borrar el directorio, ya vacío, mediante el mismo método.


```python
conn.delete(DIRECTORIO)
```


De esta forma ya habremos conseguido borrar un directorio de S3 con [Python](http://www.manualweb.net/python/).

