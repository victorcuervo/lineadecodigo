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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P2QH75Y%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T162316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQC9uqllJ9mMyJo08T8TzP3QFCnyuJQ2wKNhpVzTlqR9mwIgDLtWcSY9NW%2Fc1ek4J2YZR0M7NnLZ1ahbBgs%2F6OlbGjUq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDLqC2QLWKC8hwBf7YircA28ne0WxxDm8tuYt%2FDPL4q9NXT26v7kAloGbMpSx4LJNuYtJCpSdSg58hsWKoCWFLGc8OU9zRKcLoa95%2B56h7sD1lwgblpmh96DeDYrMJ8ee1EIyHfU0TknSDhMjXuqbA03zSbUC2FH6JrFVUlRk63T3UCZ6DilPI9uM44vf81qqh6QM833zVAc%2F0zMetP3Rg%2BdV7UZvPrZEbTB6kPBQuRY0G2J%2F309cHmIO5N8uh7O50tcHhDXUChe2IHzirzqwcpHvPI0noSPP0L%2FV4S%2B3Pu5cBhDr6vJU%2BvblkDoHYnXFHGWX8XPIKj2GFiUNDM39yeV9RIyo80kAiMXuTo%2Fm%2BZKc6nQnA%2Fvmol%2FqFt%2Bd%2FnTm%2Bc5Q2v5eSQpEbinSHvCB0WaPv0fy8jgf5W1gZ8d3rG%2Bw3SIBTh6QE6ES4%2Fd5wX5l0QxOlUJjN7uUlYMNat0JfteMtCVQC6emlGRYAx1Zs%2FeRlNogjMwbQaiSR8tZ1UOVwNBkjE9RmPRWE8OI9zwftj4BOWMLcbgM0Ux1tw1rbj6FCmZ73LVoqft7pHx31Hf2807VywDS876hN4u9M7Rv8XTPFHKEW8aPm1aRU7VZQli2j7XxHInheiFX5G%2FRVO%2BmP26V5ci7QJw38tcXMK7BwckGOqUB7u5KEQv2ZmpKdt0%2BnEpSzFQwu3ZJLqj%2Bp6XwHLH6ddU8WtEU%2B%2FUFQfsmwpePYEf5xsSxjsAzsffaW8%2FeKQU9G6zJtWmPgQSNnncucrMbbrFk9JXX%2Be4Y%2BTl2JYU4mxSwDuyU%2Fmtuum1HEe9i%2BcjKT7hP5twRnd4dj8rrO%2B5yg0k8R9qTVzctqrbTUH6IRssxLfIdfTJJOFYXHKOAGbVx46I37qUR&X-Amz-Signature=0e3941235bf0d771f18ff35ba1dc5fdecad3eca655d78d0692a8046dc6e69ca3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

