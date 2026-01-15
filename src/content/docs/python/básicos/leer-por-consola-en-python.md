---
title: "Leer por consola en Python"
description: "Cómo utilizar la función input para poder leer por consola en Python y guardar la información que inserte el usuario en variables."
date: 2021-10-20
updatedDate: 2026-01-15
tags: ["print","input","int"]
slug: python/basicos/leer-por-consola-en-python
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/basicos/leerconsola.py
topic: python

---

Si estás [empezando a programar con Python](https://lineadecodigo.com/tag/python-basicos/) una de las cosas que seguro que se te pasa por la cabeza es saber cómo se puede **leer por consola en Python**. Es decir, cómo puedo pedir al usuario un valor para, posteriormente, utilizarlo en nuestros programas.


## Pedir información al usuario


Lo primero será pedirle al usuario la información, así que vamos a tirar de la función `print()` para escribirle la pregunta al usuario en la consola con [Python](https://www.manualweb.net/python).


```python
print("¿Cómo te llamas?")
```


## Leer la respuesta con input()


Lo siguiente será recoger su respuesta, esto lo haremos mediante la función `input()` la cual asignaremos a una variable. El contenido de la variable será todo lo que introduzca el usuario por consola hasta que pulse la tecla intro.


```python
nombre = input("¿Cómo te llamas? ")
```


## Convertir la entrada a números


Es importante saber que lo que escribe el usuario e insertamos en la variable, en este caso en la variable nombre, es de tipo cadena. Esto es importante sobre todo si lo que hacéis es pedirle al usuario cantidades que luego vayáis a manipular como números. En estos casos es recomendable que hagas la conversión a número mediante funciones como `int()`. Si no aplicas la conversión a un número enteros es posible que te encuentres resultados en los que se concatenan valores en vez de sumarse y no sea el resultado esperado. Es por ello que el código para esos casos tendrá una línea adicional tal y como podemos observar en el siguiente código [Python](https://www.manualweb.net/python):


```python
edad = input("¿Cuál es tu edad? ")
edad = int(edad)
```


## Usar la información del usuario


Y volviendo a nuestro ejemplo inicial, ya podremos manejar el contenido que ha insertado el usuario de la forma que queramos. En este caso, ya que le hemos pedido el nombre, vamos a saludarlo.


```python
print("Hola " + nombre + ", encantado de conocerte")
```


Ya hemos visto que con un sencillo uso de la función `input()` podemos leer por consola en [Python](https://www.manualweb.net/python) y guardar la información que nos proporciona el usuario en variables. Si has llegado hasta aquí espero haberte ayudado y recomendarte que sigas revisando otros [códigos con ejemplos básicos de Python](https://lineadecodigo.com/tag/python-basicos/).

