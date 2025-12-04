---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMOPZ6VP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRrqwsr9qaFh6%2ByjLecdUlAWE2PwGoLLJGWykBqAFWIQIgEkH6TER41KiKhKaMPKge7apEwy8%2BwlEnMCOWoIZiWfwq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDEIAkRffsElHGdG2myrcA6oTD%2FnvwtRfrUdww4P3khlD4Eld4UXqjq3%2B6G6dlgyI2KUivnN2XvRZZuugmSWmCA6wvLAYMZughYi%2BqZKD3q14YvCuu6bKfROqdCbmOStFhgB42BWRkMJhMbnCD1u31Mp6otyI6swNzOU%2Fu0ioKD%2B35SLaLiWFoP96y48EYQ9c0g0b7x%2B%2BZFvtqiygnUAUlNJ8mrDP7lScVyyh8A%2Fol0d07a3QrPQR%2BOcFQrzFkUKaRZKi2QPqEvMh9DAGouPGJoICHA36lQI1ftfXmtRjd0DggnDAZ8%2FcOq6Wt0VUe0JdYlNOkX7x96p35kBC7NB0yxxlj3vTb1e0azCYweE9ZeTuTqHo8aDJ7myEE42FnTqXP7i9g4DRWEfA0Fcu0JaxTsdNZEpvW2MNb3sAAJT8zD1VXIQmEQ0Wqd7sKjwpl7m0AhENH8b3OG8FVosneO23jIKC%2F5X6EMWrMQIluPDRddC39f1R9K6%2BxY%2Fp2fl76T9wMNrQMa2jl2nSoTh2sfHCYtL8YB9caYkfaVMIL5hXMAXK0y1nJLUriKSylqa%2F6MZyTWzPv6T5qdY35eq3kYcw8SEaUo%2FvK%2Bt8Jbot%2F7HFcaEG5hwJ0%2BHVYLylE8k1fII7AKJvH56jP%2B%2BVQmdxMMLcxskGOqUBGgznIgAz%2F9FDm0M05DaJWnSb51pkYMZmBivDUoafHfShHbXLBlNeTHjVqJfoqxhnVRmwcaKXQg4ijRU30h0aS191%2FS%2Fa%2FtnpR%2BDxQ8FF8zB5duaPeiT4MZ8J%2Bgpin462%2FFaB7%2FGw%2FQxtG7FYoXZCYY9o9ppDsPaJoDJ3KH0FhZEHU3U4Uoh%2Fvee%2BAp3T%2FhbW5Q7cmj45j91xPmaUoEz%2BqBr%2FI%2Fz7&X-Amz-Signature=d74fb591b4aaffa90ca22d92e7c698851f31311baedc1308d3282da728b4eb31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

