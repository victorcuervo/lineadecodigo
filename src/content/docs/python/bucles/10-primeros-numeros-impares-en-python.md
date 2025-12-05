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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMNGYYCM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T144311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSgEQyymacdiH3d1s2p8jtT6BHCJfbHkBj5MIg7P2yigIhAJQty%2BwJhwPVzw%2FvexU33oSz%2FivM23Xpm6yU8l6zD%2F3xKv8DCFsQABoMNjM3NDIzMTgzODA1Igy67grQP6xgQxOrUnYq3AMpY1kzLKzk42dGTrmRljCmrvTE%2FXtC0SLZ0q%2BBxvuhMTiqV7HlZZoZCO2hlIhAbVlMziS2eDzepRDvj0db5XGMY36Z5Yv%2FG8LehSa%2F3huw3T2r8ayEHHHGiXUKyk7aIfA0Lia%2B3Ba3XZdvCJ9NoJcWVP6NB1K%2Fz%2F3htxQuKwUrQ4g04zoDXgYYN85YtvRHhjzd2MYXM7ueJO3V0BblzyNHSFrw6XxS73X74KIhMtd9fuKShkks%2FLMBoUGpxBW13lmZqTGwKwMLMULlYP52qpzi1zsCoKv6pxaaAK05sNsjwHKPH9YZ%2Br4N7WQf11ClN%2FRVjAKGNKxgaX03BanqRjMurF3hwrovY47yJc0Tkw7J%2FXOfaKbyFfZqkvIiEOaQwLS16eTrQNZRaAJvIgrui5s9zYeUOlzNfYDXaQrYEWwkhCBhH%2FiydOq7Vog9EmxJw3dOtYm1D5UwTMfp0BxCiUwpHDqUuXL9xuKf%2BWWd4hJDMIOyMdYZyre6S4gcrOjgDpmp7rJTuCo1S0zq4Ybs5hMZ%2Fxkm%2BkKuVHq7NHY3RL24%2BDxMViM%2B0m8P1PPbiympfghegYlfeFba3lIH%2BE4H1zZixFAihaQtNqQfJi5HJ35qZKTr5oDoPOjuX%2FmpAzCf0MrJBjqkAQeyQMDhpXP1cpFKC1xuDEa6ITz%2Fky15fM8rRbc7hTuw1MXZ0uNwN3XS4121UWhdXQyI2kFjB0h8xpJ1ASaPZmCQ3iIVUF%2FTWnbuTJ73fjF4kidJ7T2UuEQ%2FRpI0h3GsqlHmPIyJNyevi6hvMlUkLD2OGPw2dQSdh05MYH6crfu1%2BvkSgD7KtB2I6UaB4qOp4l%2F%2FI2ka2klixZIVh3KuQU1a9uEH&X-Amz-Signature=a458c362fb1345e2140c8cd67037dcf707aac4ce134525b3563a2dff512ecd42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

