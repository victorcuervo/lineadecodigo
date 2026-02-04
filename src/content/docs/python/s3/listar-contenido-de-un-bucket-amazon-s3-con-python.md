---
title: "Listar contenido de un bucket Amazon S3 con Python"
description: "Aprende a listar contenido de un bucket Amazon S3 con Python usando la librería tinys3 y mejora tu manejo de datos en la nube de forma sencilla y efectiva."
date: 2016-01-28
updatedDate: 2026-01-17
tags: ["tinys3","bucket","list"]
slug: python/s3/listar-contenido-de-un-bucket-amazon-s3-con-python
type: doc
topic: python
id: f248ce9d-04f2-433b-952a-b65470aceaa7
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/tinys3/listar_bucket_s3.py
---

Ya hemos visto en un anterior ejemplo [como podemos subir un fichero a Amazon S3 con Python](http://lineadecodigo.com/python/subir-un-fichero-a-amazon-s3-con-python/). En este caso vamos a ver cómo podemos listar contenido de un bucket Amazon S3 con [Python](http://www.manualweb.net/python/). 


Lo primero que tenemos que recordar es que un bucket es un contenedor, una especie de directorio. Los bucket almacenarán todas las claves de los ficheros que hayamos subido a Amazon S3.


> Todo lo necesario para empezar a trabajar con Python, Amazon S3 y tinys3 lo tienes en [el ejemplo de subir un fichero a Amazon S3 con Python](http://lineadecodigo.com/python/subir-un-fichero-a-amazon-s3-con-python/).


## Instalación de tinys3


El ejemplo de listar contenido de un bucket Amazon S3 con [Python](http://www.manualweb.net/python/) lo vamos a realizar con la librería tinys3 que podéis encontrar en [https://github.com/smore-inc/tinys3](https://github.com/smore-inc/tinys3)


Así deberemos de instalar tinys3:


```bash
pip install tinys3
```


## Configuración de credenciales


Ahora vamos a importar la librería en nuestro fichero y definir las claves de Amazon S3 que vamos a utilizar:


```python
import tinys3

S3_ACCESS_KEY = 'tu_access_key'
S3_SECRET_KEY = 'tu_secret_key'
```


## Conexión a Amazon S3


Ahora nos conectamos al Amazon S3 mediante la clase `Connection`:


```python
conn = tinys3.Connection(S3_ACCESS_KEY, S3_SECRET_KEY, 'la-prueba', endpoint='[s3-eu-west-1.amazonaws.com](http://s3-eu-west-1.amazonaws.com/)')
```


Vemos que esta clase recibe cuatro parámetros:

- Clave de Acceso de Amazon S3
- Clave Secreta de Amazon S3
- El bucket a utilizar. En este caso lo hemos llamado 'la-prueba'
- El endpoint o región de Amazon S3 que utilizamos

## Listar contenido del bucket


Lo siguiente será utilizar el método `.list()` para obtener todas las claves de un bucket. Si queremos que sea de la raíz de un bucket escribiremos:


```python
lista = conn.list('')
```


Y si queremos que sea de un directorio en concreto:


```python
lista = conn.list('/directorio')
```


## Recorrer los ficheros


Ahora tenemos la información del bucket en un diccionario con la metainformación. En concreto la clave 'key' nos dará la información de los ficheros. Así recorremos todo el diccionario mediante un bucle:


```python
for fichero in lista:
    print fichero['key']
```


Y ya habremos conseguido listar contenido de un bucket Amazon S3 con [Python](http://www.manualweb.net/python/).

