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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUBLBU5F%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjuMnqev0vLMQvL%2Bhikt9cBJ1fWPWCSppt0I8w28mq%2FAiASmEDg9UDpoXtiA6ZjXkbG1IWP4uzwevgtUtpC8XV7SCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM06PuFtI7us9LV4vuKtwDxQ1QqaNozZs2d2DTuztaPtEKgUIiEcJD1444mX55r%2Fn%2FbPIfgE%2FMNCUQPpbw8W1b9Ux6TU7q1G3XXPUbEEL8rKfpuoZh8Bo8CJIN6ZgKUPWRuwHkuIGs2AzOHj9EBD9y43a2l2I%2BfI5LwUnFuspA9F19NBGrgRSSy%2FU%2F9YYNW%2F6M8kb%2FT7g7iiIOM2JreXVTO9Hlyy%2BIgVoNJBlna6w3PzYQa0Tbr2Jt2qjG8%2F3rgWLTAmj07gG2UwxvQY8ao%2B9WbdnlNbPWzHCirdt2E0Ohe8B6rw4Fwi%2FD41dETPrQJcEiazkMfIB3NKu0SwNVHTgiR%2FB2uooZCZcNEbaK%2Fp9Qf0RK%2BidtFlS9uW%2B%2F1mxZS9B0SIE6YS0PVOqfREdsj1mMwF0kgeOJ4TOPgBcLMdkDaDx3jbnY0igZnXzwIQMsGZZ%2BbQ4nYuVSSvVy%2Bb5eMhnLyi3dkMofOnLE0036whTOXlUeOk3hix%2BNLfJXHfP1BHoCu7Vke5WbB1fNp1%2F0zuChjjEjdkH4%2BphnHow3cXNemHwrn6b7PMYvArqh3tDghk%2BGfgteRkqICIspnmONo%2F9LoTmTUqAznZe1U1yjIMekHbjjVO%2F7mjKKAhSNLgg7PzT7e5%2BDuY712sEzolwwhY7eyQY6pgH2k7%2Ff3uT6Bv7KI8vTy%2Fh6%2B9tWdkXnxkic8kDgrfW%2FsPk1sOTxW0ryuXDqb8msz9ri5xlgsE7xCI6giNzWo%2FQkxbkwDY3OLdY6qGwCKGgCUKLuAnS0kgGnldJKaaBKWey3wa6BzKdZbqMzb8q0lMx7UCH8%2B0PF6UUIQfSdy8uvLEheAqepcPfHw%2F2qpgqml6fPJwussE2PHF0TK%2BToTA%2Fh2ULdcj9Y&X-Amz-Signature=3158032d09132d5d3e8f45f472c4d78499cf2cb7f83ce67271c5a8a3aaa827f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

