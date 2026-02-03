---
title: "Subir un fichero a Amazon S3 con Python"
description: "Aprende a subir un fichero a Amazon S3 con Python de forma sencilla y rápida usando la librería tinys3. ¡Transforma tu almacenamiento en la nube hoy mismo!"
date: 2016-01-26
updatedDate: 2026-01-17
tags: ["tinys3","open","upload"]
slug: python/s3/subir-un-fichero-a-amazon-s3-con-python
author: victor_cuervo
type: doc
id: b1a67206-7e5a-40d1-b8c2-0f2a1b2a6c5f
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/tinys3/subir_fichero_s3.py
---

Cuando estemos trabajando con el almacenamiento de ficheros en la web una buena alternativa puede ser **Amazon S3**. Amazon S3 es un sistema de almacenamiento de ficheros en Cloud. En este ejemplo vamos a ver como subir un fichero a Amazon S3 con [Python](http://www.manualweb.net/python/).


Lo primero será activar el uso del servicio Amazon S3 desde la consola de Amazon. En ella encontrareis la opción de uso. Una vez que estemos dentro de Amazon S3 podremos crear **bucket** que son algo parecido a los directorios y subir ficheros.


Aunque nosotros subamos ficheros a Amazon S3 lo que realmente se almacena son **objetos**, objetos que tienen una clave. Esto es primordial ya que todo el manejo que hagamos con Amazon S3 será mediante dicha clave.


## Instalar tinys3


Para poder subir un fichero a Amazon S3 con [Python](http://www.manualweb.net/python/) vamos a utilizar la librería **s3tiny**. s3tiny es una librería muy sencilla que nos permitirá manejar Amazon S3 con unos pocos métodos, abstrayéndonos de la complejidad de su API.


Podéis [echarle un ojo al GitHub de s3tiny para ver su documentación en detalle](https://github.com/smore-inc/tinys3).


Lo primero será instalar s3tiny:


```javascript
pip install tinys3
```


## Importar la librería


Una vez instalado creamos nuestro programa en Python, el cual importará la librería:


```python
import tinys3
```


## Crear la conexión


La clase que nos ofrece la conexión a Amazon S3 es `Connection`, dicha clase necesita la clave de acceso y el secreto de nuestra cuenta de Amazon. Para poder tener estos dos datos tienes que haberte [creado un usuario IAM desde la consola de Amazon](https://console.aws.amazon.com/iam/home#home).


El usuario tendrá esos dos valores, algo parecido a lo siguiente:


```python
S3_ACCESS_KEY = 'AKIAIMTNFRBAQITESTQQ'
S3_SECRET_KEY = 'W5x/TESTSDMqh+QbF4bMX5EW0d0qTEST'
```


> Es importante que sepas que esta información es privada y no debes publicarla en ningún sitio público o repositorio de código.


Ahora vamos a establecer la conexión:


```python
conn = tinys3.Connection(S3_ACCESS_KEY,S3_SECRET_KEY,tls=True,endpoint='[s3-eu-west-1.amazonaws.com](http://s3-eu-west-1.amazonaws.com/)')
```


Es importante ver que a parte de las claves estamos pasando como parámetro el **endpoint** que representa la región en la que hemos creado nuestro bucket dentro de Amazon S3.


## Leer el fichero


Ahora pasamos a leer el fichero en local mediante el método `open`:


```python
f = open('mifichero.txt','rb')
```


Vemos que utilizamos los modificadores `'rb'` para indicar que la apertura es en modo lectura y que el fichero es binario.


## Subir el fichero


Lo siguiente será subir el fichero. En este caso tinys3 nos ofrece el método `.upload()`, este método necesita saber la clave del fichero en Amazon S3, el fichero que vamos a subir (que está en la variable f) y el bucket (o directorio) de destino.


De esta forma nuestro código será:


```python
conn.upload('mifichero.txt',f,'la-prueba')
```


Vemos que lo hemos subido a un bucket llamado `'la-prueba'`.


De esta forma tan sencilla habremos conseguido subir un fichero a Amazon S3 con [Python](http://www.manualweb.net/python/).

