---
title: "Borrar un fichero de S3 con Python"
description: "Aprende a borrar un fichero de S3 con Python de forma fácil y rápida usando la librería tinys3. Optimiza tu gestión de archivos en la nube hoy mismo."
date: 2016-03-06
updatedDate: 2026-01-17
tags: ["tinys3","fichero","delete"]
slug: python/s3/borrar-un-fichero-de-s3-con-python
type: doc
topic: python
id: 41413de5-c4fd-4ec4-a32e-69a4d1774e39
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/tinys3/borrar_fichero_s3.py
---

En este ejemplo vamos a seguir utilizando la librería **tinys3** para poder borrar un fichero de S3 con [Python](http://www.manualweb.net/python/). Lo primero que haremos será importar la librería tinys3 en nuestro programa.


```python
import tinys3
```


## Configurar la conexión con Amazon S3


Una vez importada la librería podremos utilizar el objeto `tinys3` para poder realizar una conexión con **Amazon S3**. A la hora de realizar una conexión vamos a necesitar tener la clave de acceso y el secreto. Que serán códigos parecidos a los que se pueden ver a continuación.


```python
ACCESS_KEY = 'XXXXXXXXXXXXXXXXXXXX'
SECRET_KEY = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
```


El método `.Connection()` será el que nos ayude a realizar la conexión contra S3. A este método le pasamos las dos claves, de forma opcional el bucket sobre el que trabajaremos y la región de Amazon en la que tenemos desplegado nuestro S3.


```python
conn = tinys3.Connection(ACCESS_KEY, SECRET_KEY, tls=True, default_bucket='mi-bucket', endpoint='[s3-eu-west-1.amazonaws.com](http://s3-eu-west-1.amazonaws.com/)')
```


## Borrar el fichero de S3


Directamente sobre el nuevo objeto conexión creado tenemos un método llamado `.delete()` al cual le pasamos la clave del objeto a borrar, así como el bucket en el que se encuentra para poder realizar el borrado del fichero.


```python
conn.delete('fichero.txt', bucket='mi-bucket')
```


De esta forma tan sencilla habremos conseguido borrar un fichero de S3 con [Python](http://www.manualweb.net/python/).

