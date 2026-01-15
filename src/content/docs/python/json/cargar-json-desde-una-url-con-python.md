---
title: "Cargar JSON desde una URL con Python"
description: "Cómo utilizar las librerías requests y json para poder cargar JSON desde una URL con Python y mostrar una propiedad por consola."
date: 2022-05-02
updatedDate: 2026-01-15
tags: ["json","api","rest","http","url","requests","get"]
slug: python/json/cargar-json-desde-una-url-con-python
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/json/cargar-json-url.py
topic: python

---

Cuando trabajamos con elementos JSON es muy probable que estos vengan de un servicio REST que esté ubicado en una URL si son datos que nos ofrecen otros sistemas, normalmente vía API. O en otros casos estarán en ficheros, si en esta situación hemos utilizado el JSON para almacenar información de configuración. En el ejemplo de hoy vamos a ver cómo podemos **cargar JSON desde una URL con Python**.


## Obtener datos de una URL JSON


Para ello lo primero será contar con una URL que nos devuelva un JSON. En este caso vamos a utilizamos la URL:


```javascript
[https://jsonplaceholder.typicode.com/todos/1](https://jsonplaceholder.typicode.com/todos/1)
```


Esta URL nos devuelve un contenido JSON de ejemplo y nos servirá para nuestro código de ejemplo. El JSON que nos devuelve tendrá una forma como la siguiente:


```json
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
```


## Importar la librería requests


Lo primero que tenemos que hacer es importarnos la librería `requests`, la cual nos permite hacer peticiones HTTP de una forma muy sencilla.


```python
import requests
```


## Realizar la petición HTTP


Una vez que tenemos importada la librería `requests` vamos a utilizar el objeto `requests` que nos permitirá establecer la conexión, en concreto con el método `.get()` al cual pasaremos la URL con el JSON.


```python
response = requests.get("[https://jsonplaceholder.typicode.com/todos/1](https://jsonplaceholder.typicode.com/todos/1)")
```


Lo que obtendremos, si todo va bien, es un código 200 con la petición de respuesta.


```javascript
<Response [200]>
```


## Convertir la respuesta a JSON


Si bien, a nosotros nos interesa el contenido, así que lo convertiremos a JSON mediante la propiedad `.text`:


```python
response = requests.get("[https://jsonplaceholder.typicode.com/todos/1").text](https://jsonplaceholder.typicode.com/todos/1%22).text)
```


## Crear un objeto JSON


Una vez que tenemos el texto en formato JSON vamos a crear un objeto JSON. En este caso utilizamos la librería `json`, por lo que habrá que importarla.


```python
import json
```


El método `json.loads()` nos permite pasarle un texto en JSON y devolvernos un objeto en JSON para poder ser manipulado. Así escribiremos la siguiente línea de código:


```python
objeto = json.loads(response)
```


## Acceder a las propiedades del JSON


Ya solo nos quedará acceder a una de las propiedades del objeto JSON para obtener su contenido. Por ejemplo podemos acceder a la propiedad del título de la siguiente manera:


```python
print("Titulo: " + objeto["title"])
```


Siguiendo estos sencillos pasos ya habremos conseguido **cargar JSON desde una URL con Python**.

