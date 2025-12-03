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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TGGZNJS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T064845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDpcz%2FE2FF0NZI8yCpwZfsuCGe6CNlDGIt1KY7yxDXAPAIhAO6LlPhR4Ac5pk0vgKaDfB9DY99R5B8buqb6pW7T%2F6lsKv8DCCcQABoMNjM3NDIzMTgzODA1IgwQ%2Bmcrqyt2q2hz6VUq3AP5p1XAzhwIvBl1tlc1QbUo%2Fi5M2RKLqD1qY4Kc0qO3ezHPEJWOyn%2FIbfB%2FxoQbV9RLqWmaVn7RPLCarNjMIRfyRDQt3Vv3WFYrpE8kZIBvvk19qp8%2Fli%2Fqp5zKvIoLAAFUo7%2B4hsEjk3ulZlpmiCYIdiFDR0MKdi8DaUVpz7CJchOVYokIIAzpqARz%2B4NOTPwDvOQJvRvXIyu7LQgRholIwl4fLydAFNO4UtsJtQtkH48tP3zMnNjVnq5LTzPJ0d%2Bp%2FL69mxD6CKrJO6HiaDzoeJU8c3DE2TGMn20W3I6OI9LcmMRAJSHqlhl0leEVnUKjthKGx265uz8vdQBuStzGBQmDU13%2BhRIbjBMHg%2FtxDyo%2BZwQ3lkLPXEM1DvmNqydl%2BtkKNsxdwgOYFMpgW7%2F4FZtWZPCIotXIrGB%2BAd5AlQ6lffAiJ5c%2F8yX0g3leUpqDYBTA098LD7IFoQByZQBmgoPqLidr9Aq5XEzgM9SrIBg7O6pATo8qQQJ62%2B%2B5yAA6GJUI7BeRKRK0gKb3B3yQ0DE95dG6%2BzDSihoh4DE2MjXuyI3nLLtCcdA%2FFcoGhOKC5MBywwmomdwfF%2F5Dx8S%2F7v7TXTDrdtUe5uUkXRxX15rzEO9EF5wGu6UXazC0mr%2FJBjqkAY8ovVIwBsbjqNiPlxJAoK89FT4W0qxg2w3r4P4eckHOr3pQwSYO%2BqNsLIJWg9Vm97Oemew1lqAOFwTk%2FuVYPJGbfpe0uqN5X8DFZJYcGuO1jy1k8k1OgY74Aa%2Bo9kttCrnrKRuWXz9ymXQeJN5DYg%2BkKuXF8zIylCXQc7cYIYNfJORUxeEN0wHc0NB7pqp%2F5TZZQD08a3dYGuREV4qgzFEU73hM&X-Amz-Signature=bf2c7a3636be35aedfad4def73add83490b4040d661b24fa58fec989b6805682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

