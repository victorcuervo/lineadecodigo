---
title: "Metainformación Bucket Amazon S3 con Python"
description: "Aprende a consultar la metainformación de un bucket Amazon S3 con Python usando la librería TinyS3 y accede a datos valiosos de tus archivos almacenados."
date: 2016-03-02
updatedDate: 2026-01-17
tags: ["tinys3","bucket","metainformacion"]
slug: python/s3/metainformacion-bucket-amazon-s3-con-python
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-81e6-ad9e-e9064a024d13
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/tinys3/metainformacion_s3.py
---

En el ejemplo de hoy vamos a ver cómo podemos ver la metainformación bucket Amazon S3 con [Python](http://www.manualweb.net/python/). Es decir, la información que Amazon guarda por cada uno de los elementos almacenados. Para ello utilizaremos la librería **tinys3**.


## Establecer las claves de acceso


Lo primero será establecer las claves de acceso a Amazon S3:


```python
S3_ACCESS_KEY = 'YOUR_ACCESS_KEY'
S3_SECRET_KEY = 'YOUR_SECRET_KEY'
```


## Conectarse a Amazon S3


Lo siguiente es conectarnos con nuestro sistema Amazon S3 mediante el método `.Connection()`:


```python
conn = tinys3.Connection(S3_ACCESS_KEY,S3_SECRET_KEY,'la-prueba',endpoint='[s3-eu-west-1.amazonaws.com](http://s3-eu-west-1.amazonaws.com/)')
```


## Listar ficheros del bucket


Una vez conectado vamos a listar los ficheros que tengamos en un directorio tal y como vimos en [listar contenido de un bucket amazon s3 con Python](http://lineadecodigo.com/python/listar-contenido-de-un-bucket-amazon-s3-con-python/).


```python
lista = conn.list('')

for fichero in lista:
    print fichero
```


## Acceder a la metainformación


En cada una de las variables fichero tendremos la metainformación del bucket Amazon S3 en un diccionario [Python](http://www.manualweb.net/python/). Así que solo tendremos que indicar las claves del diccionario para ver la información almacenada.


Dentro de esta metainformación tenemos:

- **key**: clave del fichero.
- **storage_class**: tipo de almacenamiento del fichero.
- **last_modified**: fecha de la última modificación del fichero.
- **etag**: información de la etag asociada al fichero.
- **size**: tamaño en bytes del fichero.

## Mostrar la metainformación


Así el código quedará de la siguiente forma:


```python
for fichero in lista:
    print fichero
    print 'Clave: ' + fichero['key']
    print 'Tipo de Almacenamiento: ' + fichero['storage_class']
    print 'Fecha Modificación: ' + str(fichero['last_modified'])
    print 'ETag: ' + fichero['etag']
    print 'Tamaño: ' + str(fichero['size']) + ' bytes'
```


De esta forma habremos conseguido mostrar por pantalla la metainformación Bucket Amazon S3 con [Python](http://www.manualweb.net/python/).

