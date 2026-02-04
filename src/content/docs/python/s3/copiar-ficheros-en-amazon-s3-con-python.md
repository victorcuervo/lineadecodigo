---
title: "Copiar ficheros en Amazon S3 con Python"
description: "Aprende a copiar ficheros en Amazon S3 con Python de forma sencilla y eficiente. Descubre cómo aprovechar la librería TinyS3 para tus proyectos."
date: 2016-03-10
updatedDate: 2026-01-17
tags: ["tinys3","bucket","copy"]
slug: python/s3/copiar-ficheros-en-amazon-s3-con-python
type: doc
topic: python
id: 2c8a9dfb-adca-8166-a854-f9d41741c1de
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/tinys3/copiar_fichero_s3.py
---

Una de las capacidades que nos ofrece la librería **TinyS3** de [Python](http://www.manualweb.net/python/) es la facilidad para poder copiar ficheros en Amazon S3 con [Python](http://www.manualweb.net/python/). En este sentido nos ofrece el poder realizar una copia de ficheros desde un bucket a otro bucket de Amazon S3 o bien copiar ficheros dentro del mismo bucket de Amazon S3.


Pero vayamos por partes.


## Conexión a Amazon S3


Lo primero será importar la librería **TinyS3** y realizar una conexión sobre Amazon S3 mediante una clave privada y secreto. El método que utilizaremos para la conexión será `.Connection()`:


```python
import tinys3

S3_ACCESS_KEY = 'BAKIBAKI678H67HGA'
S3_SECRET_KEY = '+vpOpILD+E9872AialendX0Ui123CKCKCKw'

conn = tinys3.Connection(S3_ACCESS_KEY,S3_SECRET_KEY,BUCKET_ORIGEN,endpoint='[s3-eu-west-1.amazonaws.com](http://s3-eu-west-1.amazonaws.com/)')
```


## Definir los buckets


Una vez que hayamos creado la conexión a Amazon S3 tendremos un objeto con la conexión, el cual nos va a ofrecer directamente un método `.copy()` que nos va a facilitar el copiado de ficheros. Vamos a definir dos variables con los buckets. Esta variables las vamos a utilizar en la copia.


```python
BUCKET_ORIGEN = '/bucket-origen'
BUCKET_DESTINO = '/bucket-destino'
```


## Copiar entre buckets diferentes


En el caso de que queramos copiar un fichero de un bucket a otro deberemos de utilizar el método `.copy()` con el nombre del fichero origen, seguido del bucket de origen, luego el nombre del fichero destino y por último el bucket de destino.


```python
conn.copy('origen.jpg',BUCKET_ORIGEN,'destino.jpg',BUCKET_DESTINO)
```


## Copiar dentro del mismo bucket


Si vamos a realizar la copia dentro del mismo bucket, simplemente omitiremos la variable con el bucket de destino y utilizaremos el mismo método.


```python
conn.copy('ORIGEN.jpg',BUCKET_ORIGEN,'destino.jpg')
```


Ya hemos visto lo sencillo que es manejar el método `.copy()` para copiar ficheros en Amazon S3 con [Python](http://www.manualweb.net/python/).

