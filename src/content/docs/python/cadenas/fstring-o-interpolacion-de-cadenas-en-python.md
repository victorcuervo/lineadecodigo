---
title: "fString o interpolación de cadenas en Python"
description: "Las fString o interpolación de cadenas en Python permiten dar formato a las cadenas de texto de manera fácil, incluyendo contenido variable."
date: 2024-01-31
updatedDate: 2026-01-03
tags: ["texto","fstring"]
slug: python/fstring-o-interpolacion-de-cadenas-en-python
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/cadenas/fstring.py
---

Ya hemos visto algunos [ejemplos de cómo podemos dar formato a las cadenas en Python](https://lineadecodigo.com/python/formato-de-cadenas-en-python/), en el artículo de hoy vamos a ver cómo funcionan las fString o interpolación de cadenas en [Python](https://www.manualweb.net/python/) para poder dar formato a las cadenas de texto.


Las cadenas fString, también conocidas como cadenas de interpolación, son una característica muy útil en [Python](https://www.manualweb.net/python/). Se distinguen por tener una estructura particular que las diferencia de las cadenas de texto comunes. Esta estructura es la siguiente:


```python
f'cadena de texto'
```


Como se puede observar, estas cadenas de texto empiezan por una letra f minúscula, que es seguida por comillas simples que delimitan el texto que la cadena va a contener. Esta es una sintaxis única de las cadenas fString, y es lo que permite su funcionalidad de interpolación de texto, lo que las convierte en una herramienta poderosa para manipular y formatear texto en Python.


De esta manera podemos definir una fString o cadena de interpolación de la siguiente forma:


```python
saludo = f'Hola, ¿Cómo estás?'
print(saludo)
```


La gran ventaja que tiene el uso de este tipo de cadenas en [Python](https://www.manualweb.net/python/) es que les podemos meter variables de una forma muy sencilla. Simplemente tenemos que incluir una variable entre llaves dentro de la cadena siguiendo la siguiente estructura:


```python
f'cadena de texo {variable}'
```


Dónde variable puede ser cualquier variable que tengamos definida dentro del código. Así lo podemos ver en el siguiente ejemplo:


```python
nombre = 'Luis'
saludo = f'Hola, ¿Cómo estás {nombre}?'
print (saludo)
```


Incluso, podemos realizar operaciones entre las variables que vaya dentro de la fString o cadena de interpolación. De esta forma es muy sencillo mostrar la operación entre dos números como resultado de una cadena, ya que no tendremos que generar una variable para el resultado y lo tendremos directamente en la cadena.


De esta manera podemos utilizar las fString para representar una suma de números mediante el siguiente código [Python](https://www.manualweb.net/python/):


```python
a=2
b=3
cadena = f'La suma de {a} y {b} es {a+b}'
print(cadena)
```


Como podemos apreciar es muy sencillo y eficaz utilizar las fString o interpolación de cadenas en [Python](https://www.manualweb.net/python/) para incluir contenido variable a forma de plantillas dentro de una cadenas.

