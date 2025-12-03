---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MMF5BMD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQD0RPcgeHK8%2FBb0HW8HjW5ZPa3FZU3G1hKhsxdp4gDPawIhAPvY4N6FZ5HJa%2FZcgJg7rBPBvoDhdtBd9yhv0n6CP2LWKv8DCDYQABoMNjM3NDIzMTgzODA1Igxmk9oI%2BAJbR%2FviWekq3AMpf7S%2FyPY12uCUvbXXt%2Ftdp3GZ2PwsIQzXC241BCMLT8jwZQ59aQWwTvlwkW8TnOc4w5Bo%2BL%2FjrpVkTYA24LDMJ8PghK0o3IwnM5gD6i%2BQP8vCXHzwyxV7cViH8DZN444%2FfUkI0d7vrcs58%2Bs12unvxgIK6Qy0dqbCC18unXf7lKU1fS%2FRyFLy9wjdGh%2FTb%2BHn8zXLTY8nvKzFbhvCpClTfE2J%2BsFdojEDGX4O%2BNooPYZpCuNpuhWHsQ28YYfPOp7nMpZlpATvE5q%2BBNjbF1KAgfQ2jVX3FfPuaapuFdJfE6bvPjOPGlm3Q4HBD0v3ACR3GL%2FOLPdUFlX8fn0RMz7hG9kAda7UQWfTtQI%2B7yepL0QO1Qvlv9Idxh8nNNSRzPhZJ31Toh07yZMloC3LJp2PtTh2WeKWHr5cqV8DurRqCYIWGwyKhPSZeatPrGr%2Fd62v6ldY20iQuCmcZBHSlUD2qXauiXp7Knt5rGUP6%2BSROddwrYwucqDiz9NZaYWECdWKGwi4eVXq13zoGamaWh1SnFSE2anF%2Fly5ebbrR0Ch4kXYtgeSzbnhu%2FAPZ3crnPQpGi9nSSkGIkJmyBTEWmtRozHWc8cit2o2UERSEz21EwV1%2BA5knQggJgFivzDFvsLJBjqkAWuvbPqJOoW54PBPpL%2FpaLsUYJbzzC8uCN9oeLuojG%2FKz59hYM4TWb3assmjjyFrhHyM0vzUWMLk43wbCAtXIx%2BhUiJvEDhKXOSoxI%2BNF01GbfmE9u%2BL54XjYH0vWIACYzWyHsQMbbJXWnrI5b0%2BlMEmy4H2%2Bg%2FVeXDyb%2BryqioPh9c5nGbD8n%2FrBkT72JVdbiTgDiGmgcC8XUTqSe8UqIfMqgVx&X-Amz-Signature=2c3b37626766d9b14279ed32abe39daf1a9cc38dd893b2c4c17ea0168e6ab713&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

