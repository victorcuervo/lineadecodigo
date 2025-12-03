---
layout: post
title: 10 primeros números impares en Python
excerpt: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
categories: Python
tags: [python básicos,python bucles]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQX5KXVQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T101501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC1iI0HKTDh39cZQlm3A70hAH8lb7lANvQq80eiHXVXtQIhAM2O%2F7XaBKdMmE2hdNJiiG85NhyR%2FAhVlXAGkO9xumJjKv8DCCsQABoMNjM3NDIzMTgzODA1Igy4GL7yNW5WJ2DvkQgq3AMamL67%2FpLZ3WEzaGVGeAoN5Qm3CgaWWnFvyq7Qd5rJ1AxvxWuCI8RQ7tyBYk6S1Z5i5JqfBzNXDzh7XTMdNuaDVqzRYepKM5X2gYdmDDEk%2B0xGKpdnTSWnRX%2FvPFi3%2FxdkDdczB6Ycxgt8M0JtFr6cRh%2B5R3qwREG2D1IrTtaKFs6zfmK%2FjIbrJXVkR3a7OVW9spKMmRQkFhQxMMlHvM5z3kTDhvqdIq%2Fri1tsSeqrffTOv2m9d7GsMj45zJ4AQFBYsqDdofB%2BOrc00kuZYWa5HszSpVo4RzpBc59LYo7PKdKXJtYb6cNGjkVAnlH4KCdJ7sKqQ5BUATgTfarhZOvfgKZnIDNoIAURENuZfaAWXXHHNP4qNWZFK9hTF51VCrDRlMHfOhgQZGCTDxdJ%2BkXj1wyGM1yuQnos0eaL1hq0tT%2BvyEvzazOBN3OWsSNABDaTefkA6D1dvdFIvwaXxtswk7g2AoPpfDctRpBRV1Qeb4GrP3EcrRdMA8ybibgfzYNIUEua69Ke0cw8rvy80HAr7aJNpyYWySsPTkK3GGxj%2FuGUyajKoHHiuYPC7k%2FBOXnTLj8RAseAywLJ5gANy%2BnjdUQM93JoHbp8QII3WnNo5XlgudACmyLwArhqBTDZksDJBjqkAemC7NGACbeg6vgpeNP2WBorGpQ2mjfDw080DxHakDtjGUWIaJnnTplwUHN4h128wZsrlSI4JimqyD9CMwkxOmAbB%2Bp%2FY4TEldBRJtTL0PNm%2FeGZ%2FlGgT1mRN9%2BJrTP9o3h21xdOCO%2BFq8i9nQFihj5x9Ez9QP4OqXSt%2BAlIYhCWOfMp4SPGTHGUVtKzmXq7KEnxrKz2VpwdvdIoDnDu8RYjsEYO&X-Amz-Signature=db04d8eff03c957f58e6871969e6b4ca791d07473982a2a80ba980113f9e15ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

