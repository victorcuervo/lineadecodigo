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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622WHDPIF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6QiHnapMn%2FFfFa4QVLxyKDl3mDYY04JTxjmjTPw9l1AiEAzWX103MAlQ5LKpZvDQG64%2BCWLBdNHxBQsQ7E2JEGKl0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBD55Veh4dVZam4R5SrcA%2BFyLBqhl2qKlWIpGZXUtdmD3nVqEJZe%2FdUmgH8g09A7yJazFZEvZc%2BIMROIKg1lcUE%2FD%2BrlYLtiOazBOyJ2NuoN9041H0GJnBJKc%2BomPjx%2F6akm3NblkC%2FyI2P6B1bbgCeOHSON6QB6rOsWjwFEQbalYLzAcDpXUkwRkbM5GFBS%2BgAKQch41st9%2FLbO6Zuq4UdpVcQ%2Fcd%2Bg7W1Fi83nV1h57O0pTJWBpX9Al8x16saDxsAaeCA8XTrHWbi0hx5dGDm5tGZ5sy9%2FFN1e4czPm3EKt%2F%2Fxzwgfpv4HJhyDtKnHoKC%2B0DFUclL7T9YfrT3m9Ow5DEoSmoFgenH0ZNQ6gsBM8F3IZkwIu5Lq9caWXKvyq%2Fm6Vp%2F7Dt80olp%2BkKKEsqJE%2FLf8Hx49oSkavWm81kT%2BTZ2bsx3GbiJp%2BUS6GmvWdaieQagzp4MsktQDmcgyTNWmSZa74j%2FL7cGpod7g7rHKo6q6ip2YTessZFgI9iPisgFueQgWfGRuU4tlOlCuNJBF6PJtOsqIZtZV0vE%2B%2BAfRaFklL6x%2FI3j%2FuOb6yz0WtCaq8WwzNiXugjF8Z3FW%2BLCR5tVUqeYXMJCRuinQB73RG0O23IAktHU9Y8FptcaXhF5%2B63IF7CwSOj76MIu8z8kGOqUBP%2BvxpY0obQKhTGuGGdXsPF8%2FjRA%2FqCw%2FFtHqGKLiIZCzIwqSUMz0ZZwUBrZQ35t0usp9F85xBLcgj0M1e7w1VnJWd4QVBjm1xWe1V7fBJDAcIGAXCz0mMzchaMm%2F4UKuR1G6faf%2F0Hbrk02Y2w6PuLZxAbyZPC%2FCK0Va30OmXVr7jvFzZlUMXk0u%2Bdbd3eItz9beIxlOoNGniytnqm3o6Tuek%2FDy&X-Amz-Signature=4730498dc97a0d1091d79f13108db2587d8dd3f779e0dc4bb26106bb52aef1a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

