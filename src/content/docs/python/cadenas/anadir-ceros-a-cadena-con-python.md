---
title: "Añadir ceros a cadena con Python"
description: "El uso del método .fill() nos permite de una forma sencilla añadir ceros a cadena con Python y resolver problemas con sistemas legados o campos de BBDD."
date: 2017-07-03
updatedDate: 2026-01-14
tags: ["cadena","variables","zfill"]
slug: python/cadenas/anadir-ceros-a-cadena-con-python
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/cadenas/rellenar_ceros.py
topic: python

---

Añadir ceros a cadena con [Python](http://www.manualweb.net/python/) es un ejemplo que puede ayudarte en el caso de que estés trabajando con variables de tipo cadena y el sistema destino, ya sea una base de datos o un sistema legado, requiera que el tamaño de la cadena coincida con el tamaño especificado.


Es decir, que para estos sistemas operar con '5' o '005' es totalmente diferente. En este caso vamos a partir de una cadena de la siguiente forma:


```python
cadena = "5"
```


Si imprimimos esta cadena veremos que por consola aparece un 5.


```python
print(cadena)
```


## Método .zfill() para añadir ceros


Ahora vamos a añadir ceros a cadena con [Python](http://www.manualweb.net/python/). Para ello vamos a utilizar el método `.zfill()`. Este método recibe un parámetro que será el tamaño de la cadena. Cogiendo el valor de la cadena actual y rellenando con ceros a la izquierda hasta llegar al valor indicado en el parámetro.


El método `.zfill()` se aplicará directamente sobre la cadena. Es por ello que si queremos que su resultado persista sobre la variable deberemos de asignarlo.


Por lo tanto, lo que haremos, si queremos insertar dos ceros en la cadena, utilizaremos el siguiente código en [Python](http://www.manualweb.net/python/):


```python
cadena = cadena.zfill(3)
```


## Resultado


Ahora, si imprimimos de nuevo la cadena veremos que aparece '005':


```python
print(cadena)
```


De esta forma tan sencilla habremos conseguido añadir ceros a cadena con [Python](http://www.manualweb.net/python/) y solucionar nuestro problema con el manejo de las variables de un tamaño fijo.


¿Qué otros casos se te ocurren donde necesitemos añadir ceros a cadena con [Python](http://www.manualweb.net/python/)? Cuéntanoslo en los comentarios. Nos serán de mucho interés.

