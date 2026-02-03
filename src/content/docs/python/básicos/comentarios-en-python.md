---
title: "Comentarios en Python"
description: "Artículo que nos explica las diferentes formas que hay de poner comentarios en Python."
date: 2015-11-26
updatedDate: 2026-01-05
tags: ["comentarios"]
slug: python/basicos/comentarios-en-python
author: victor_cuervo
type: doc
topic: python
id: 7b67d5aa-9ffd-407b-a2d6-0ad9384ec965
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/basicos/comentarios.py
---

Veamos las diferentes formas que hay para poner comentarios en [Python](http://www.manualweb.net/python/). Tenemos tres formas de manejar los comentarios en [Python](http://www.manualweb.net/python/). La primera será tener una línea con el comentario. Para ello lo que hacemos es anteponer el símbolo de la almohadilla al principio de la línea.


```python
# Esto es un comentario en Python de una linea
```


La segunda forma será ponerlo después de una sentencia. En este caso volvemos a utilizar la almohadilla, si bien, en este caso, detrás de la sentencia.


```python
print "Ejemplos de Comentarios" # Despues de una sentencia
```


La tercera forma será si queremos poner un comentario en múltiples lineas. Para ello deberemos de tener una línea con tres comillas (simples o dobles), luego las líneas de los comentarios y al final otra línea con tres comillas.


```python
'''
Comentarios
multi-linea
'''
```


En este caso es un poco contradictorio ya que Python no lo considera como un comentario, [los comentarios solo serían las almohadillas](https://docs.python.org/3/reference/lexical_analysis.html#comments), si no que es una cadena de texto multi línea que no está asignada a una variable. Estas son las tres formas que tenemos de incluir comentarios en [Python](http://www.manualweb.net/python/).

