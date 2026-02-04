---
title: "Número por teclado en Python"
description: "Código que nos explica cómo podemos controlar que el usuario nos introduce un número por teclado en Python y no otro tipo de caracter."
date: 2022-05-13
updatedDate: 2026-01-15
tags: ["input","int","try-except","bucles","while","break"]
slug: python/basicos/numero-por-teclado-en-python
type: doc
topic: python
id: 31d2efa0-3d71-4d39-a268-85cd632bc5bb
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/basicos/cadena_a_numero.py
---

Cuando estás obteniendo números por parte del usuario puede ser que el valor introducido no sea realmente un número. Es por ello que en este artículo vamos a aprender cómo controlar cuando introduzcan un número por teclado en [Python](https://www.manualweb.net/python) que este sea realmente numérico.


## Pedir un número al usuario


Lo primero que tenemos que aprender es cómo pedir un dato al usuario por consola. Para ello vamos a utilizar la función `input()`. El parámetro de esta función será el mensaje que queremos mostrarle al usuario:


```python
input("Introduce un número: ")
```


Este valor vamos a insertarlo en una variable y, de paso, convertirlo a un número mediante la función [`int()`](https://www.w3api.com/Python/int/). Ya que queremos que sea un número.


```python
numero = int(input("Introduce un número: "))
```


## Controlar errores con try-except


En el caso de que el usuario introduzca un número todo irá bien. Pero qué pasa si el usuario introduce un texto que no contenga un número. Pues en ese caso recibiremos un error con un mensaje que dirá algo como "**ValueError: invalid literal for int() with base 10"**. Lo que quiere decir es que no ha conseguido convertir el texto introducido por el usuario a un número.


Nos vamos a aprovechar de este error para controlar que se ha introducido un número por teclado en [Python](https://www.manualweb.net/python). Y es que lo que vamos a hacer es controlar que no se produzca el error, y en el caso de que se produzca el error, capturarlo, informar al usuario que lo que ha introducido no es un número y volverle a pedir un número.


Para ello utilizamos una estructura `try-except` para ejecutar el código:


```python
try:
    numero = int(input("Introduce un número: "))
except ValueError:
    print("No es un número")
```


Vemos que se controla la excepción [`ValueError`](https://www.w3api.com/Python/ValueError/) y le indicamos al usuario que no es un número lo que ha introducido.


## Bucle para validar la entrada


Si solo creamos este bloque de código se hará un único control sobre el valor introducido. Y una vez evaluado seguirá a la siguiente. Es por ello que si queremos pedirle al usuario el número hasta que realmente introduzca un número deberemos de ponerlo en un bucle.


```python
while True:
    try:
        numero = int(input("Introduce un número: "))
        break
    except ValueError:
        print("No es un número")
```


Como se puede observar en el código lo que tenemos es un bucle infinito del que solo salimos cuando realmente tenemos el número. Para ello tenemos la sentencia `break` que nos saca del bucle. De esta forma tan sencilla conseguimos controlar que realmente tenemos un número por teclado en [Python](https://www.manualweb.net/python).

