---
title: "Sumar números en Python"
description: "Como controlar que lo que introduce el usuario son valores numéricos para poder sumar números en Python y mostrar el resultado por pantalla."
date: 2022-05-19
updatedDate: 2026-01-14
tags: ["input","print","int","try-except","break","bucle","while"]
slug: python/basicos/sumar-numeros-en-python
author: victor_cuervo
type: doc
id: 45137095-9224-49f8-8e1f-40ff5da47e39
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/basicos/sumar_numeros.py
---

Cuando estás empezando a programar [Python](http://www.manualweb.net/python) te encontrarás con problemas sencillos cómo puede ser sumar números en [Python](http://www.manualweb.net/python). La idea es pedir dos números por consola al usuario y posteriormente realizar la suma de estos dos números para acabar mostrándola nuevamente por consola. Algo que podría sonar sencillo, pero con lo que hay que tener cuidado para que no se nos complique.


## Primer intento: pedir números al usuario


Lo primero será pedir al usuario que introduzca un número. Para ello nos apoyamos en el método [`input()`](https://www.w3api.com/Python/input/) el cual tiene como parámetro el texto que queremos mostrarle al usuario para que nos introduzca el número.


```python
numero1 = input("Introduce el primer número: ")
numero2 = input("Introduce el segundo número: ")
```


Una vez que tienes los números, los sumas e imprimes por pantalla mediante el método [`print()`](https://www.w3api.com/Python/print/).


```python
suma = numero1 + numero2
print("La suma es: " + suma)
```


## ¿Por qué no funciona?


Y con esto ya tendríamos resuelto cómo sumar números en [Python](http://www.manualweb.net/python). Pues **la respuesta es NO**. Esto no nos soluciona el sumar dos números.


Por dos motivos, el primero es que realmente no nos hemos asegurado que lo que el usuario introduce por teclado es un número y podría meter una cadena, lo que nos llevaría a una suma de cadenas en vez de números.


En segundo lugar porque los datos insertados por teclado, aunque sean un número, son tratados como cadenas por [Python](http://www.manualweb.net/python). Por lo tanto la suma siempre sería una suma de cadenas.


Es decir, que si el usuario introduce un _"7"_ y un _"2"_ no vamos a imprimir por pantalla un _"9"_, en su lugar se imprimirá un _"72"_ que lógicamente no es lo deseado.


## Validar que es un número


Por lo tanto tenemos que mejorar nuestro programa controlando estas dos cosas. Por un lado tenemos que [asegurar que el usuario nos introduce un número por teclado](https://lineadecodigo.com/python/numero-por-teclado-en-python/).


Para ello lo que haremos es convertir el valor introducido por teclado a un entero mediante el método [`int()`](https://www.w3api.com/Python/int/). Si esa conversión falla se lo pediremos de nuevo al usuario.


Es por ello que la conversión la hacemos en una estructura `try-except` que controle la excepción [`ValueError`](https://www.w3api.com/Python/ValueError/).


```python
try:
    numero1 = int(input("Introduce el primer número: "))
except ValueError:
    print("Eso no es un número válido")
```


Cómo le pediremos al usuario el número hasta que realmente sea un número lo que haremos será meter en un bucle este código. Del bucle solo saldremos cuando tengamos un número mediante una sentencia `break`.


```python
while True:
    try:
        numero1 = int(input("Introduce el primer número: "))
        break
    except ValueError:
        print("Eso no es un número válido, intenta de nuevo")
        
while True:
    try:
        numero2 = int(input("Introduce el segundo número: "))
        break
    except ValueError:
        print("Eso no es un número válido, intenta de nuevo")
```


## Realizar la suma


Ahora ya podemos sumar los dos números. Y como estos son ya enteros podemos recurrir al operador de suma sin más.


```python
suma = numero1 + numero2
```


Y ya solo nos quedará el mostrarlo por pantalla con un método [`print()`](https://www.w3api.com/Python/print/). Ojo que si queremos mostrar el valor de la suma y otra cadena de texto tendremos que convertir esta suma, que ahora es un número, a una cadena.


Para ello tenemos el método [`str()`](https://www.w3api.com/Python/str/) que nos ayudará con dicho cometido.


```python
print("La suma de " + str(numero1) + " y " + str(numero2) + " es: " + str(suma))
```


Con esto ya tendremos un programa completo que nos permita sumar números en [Python](http://www.manualweb.net/python) controlando que lo que el usuario introduce por teclado es realmente un número.

