---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastUpdated: 2024-02-10
slug: /python/10-primeros-numeros-impares-en-python/
author: victor_cuervo
---

En nuestros [ejemplos básicos para aprender a programar en Python](https://lineadecodigo.com/categoria/python/) hemos visto ya cómo utilizar bucles para poder listar los números del 1 al 10, en este caso vamos a ver cómo podemos listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/).


### Uso de bucles para listar números


Lo primero para poder listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/) es conocer el manejo de los bucles en Python. En concreto vamos a ver cómo se maneja el bucle `for`. El bucle en `for` en [Python](https://www.manualweb.net/python/) tiene la siguiente estructura:


```python
for variable in secuencia:
    # Código a ejecutar
```


Para conseguir la secuencia nos apoyamos en la clase [`range()`](https://www.w3api.com/Python/range/range/) de [Python](https://www.manualweb.net/python/) que nos permite generar una secuencia de números.


Así, revisando la sintaxis de la clase [`range()`](https://www.w3api.com/Python/range/range/) vemos que nos permite listar los números.


```python
class range(stop)
class range(start, stop[, step])
```


Por lo que podemos sacar todos los números con una secuencia generada por [`range()`](https://www.w3api.com/Python/range/range/) de la siguiente forma:


```python
for numero in range(1,11):
  print (numero)
```


En concreto hemos sacado 10 números ya que la clase [`range()`](https://www.w3api.com/Python/range/range/) genera la secuencia desde el número de el valor de `start` hasta el valor del número de `stop`-1.


Pero, esto, nos genera una lista de números consecutivos, es decir, nos muestra tanto los pares como los impares.


Así que si queremos listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/) tendremos que comprobar que el número, antes de imprimirlo por consola mediante [`print()`](https://www.w3api.com/Python/print/), sea un número impar. Para poder comprobar que el número es impar deberemos de validar que el resto de la división por 2 es diferente a 0. El resto se puede calcular mediante el operador `%`.


Por lo tanto el código de uso del bucle `for`, mas la clase [`range()`](https://www.w3api.com/Python/range/range/) y la validación del resto mediante el operador `%` quedará de la siguiente forma:


```python
for numero in range(1,21):
  if numero % 2 != 0:
    print(numero)
```


### Clase range con step


Además del código calculando el número impar mediante el resto de una operación de división por dos, vamos a ver que podemos listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/) utilizando solo la clase [`range()`](https://www.w3api.com/Python/range/range/).


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAWD2THE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T101928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICx3MPEnHK8nnLNq5vEfz2OaJNfFilqYHeLd59WoZI53AiBNJZqY%2BNkjGyuvCfeRZ5Si93m2FzL47jKMFvte4OWukyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMIuLGGaYco9REEYOYKtwDU70%2BA5Rys56o2mYW9Op5oAGir6q49BIpngHbuvkR81u9g5LzOkK1%2FQHhEkbbuZIb2iCeFWEidqRUbdV7lWVkxwP1KrosQry5wgrc7UmFk6BGOJNtqiCFvRvg4vqAerRuEw1S4aaZN6Fl9OYNbOuUI7GwduUxuikjfDFb4ZC3RZVvMypg9%2F98fuJyqhDrH0G0zteLsZXnZ4uzLTk6edhT9viQASJeT1HaCcmbbcN5kLhCKCPYsAWxdIGwbUsV%2BWiYtHVqKbvKL2rg9a6wi6AJ%2Biueh5dDGA66HV7CANT%2BKCu9aWLwr%2F07WJV2683ty8sHNKtDCZ6PH6igsxMKWk1r7fF802YUe5Jk2hBwUhil4%2FoVS4jjzDqs2bRbwGjqHVYoDehn%2BMdxeIf6euuF4XoOTENWY6RN4Xgj%2BjKxtZ6aRXMJawS864bD619wLNYWIlnfqrVZ0xVeg2SZmIrlpi96DvZxaCja759X624FhOEhYElrQUXWIIbgEvmnP06Eq2ysl%2BLdF%2FGup5ntFfG006HO8llDc8mFnwarvlgXXvJQr6uEnHUAo%2F3C8wyj3K02GE4TAcHFHep%2FfKNi%2FvV7FHXCDpsTTuOPSUfLFTH4uzZ3uNEjuNQLl5DyXAV4%2BAow8c3KyQY6pgHCkvGeCk%2F2odoPde4LNrsiqL4yvMQ0N4Vshh7aJu3Brwq9lv0Il836NfCPet71Bo6%2Fx%2FYmJmXvAaF%2FgUSPHvfo8CLXgJkprEU13UdA0fCfeG3Fg3ZKhuSxFVZv9ayQSp7pAaEb8onEu5CDuoY91I6nrnM1P0MdUZx%2FRMqEI5NJ9FoVheAf3r%2BpOVe4cSz2tekbnakC1t%2BjYq%2BpMem3d%2BydAjeucivG&X-Amz-Signature=3c7ce1e6bdfaebf6c0ddd27e7c0c9cdcf76bd544dae2a6b4276a4f8245690f56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Mirando un poco más en detalle los parámetros de la sintaxis de [`range()`](https://www.w3api.com/Python/range/range/) vemos que hay uno que es `step`. Este parámetro nos permite el generar una lista de números con valores de separación entre ellos.


```python
class range(stop)
class range(start, stop[, step])
```


Es decir, que si generamos un rango de números del 1 al 11, con un salto de 2, tal y como conseguiríamos con este código:


```python
range(1,11,2)
```


Veremos que nos genera los números en saltos de dos en 2.


```python
# 1, 3, 5, 7, 9
```


Si cambiamos el parámetro `step` y ponemos un valor de 3.


```python
range(1,11,2)
```


Veremos que los números están separados de 3 en 3.


```python
# 1, 4, 7, 10
```


### Código para listar los 10 primeros números impares en Python


Así que podemos utilizar la clase [`range()`](https://www.w3api.com/Python/range/range/) con el parámetro `step` para poder listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/).


Para ello, como queremos sacar los 10 primeros números tendremos que utilizar un rango de 1 al 20 y como solo necesitamos los números impares, le añadimos el salto de 2 en 2.


```python
range(1,21,2)
```


Por lo tanto el código definitivo para poder listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/) será el siguiente:


```python
for numero in range(1,21,2):
  print(numero)
```


Lo que nos mostrará por consola la siguiente secuencia:


```python
#1, 3, 5, 7, 9, 11, 13, 15, 17, 19
```


Y ya tendremos por completo nuestro ejemplo para poder listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/). ¿Qué otros casos de uso se te ocurren en los que tengas que utilizar el parámetro `step` de la clase [`range()`](https://www.w3api.com/Python/range/range/)?

