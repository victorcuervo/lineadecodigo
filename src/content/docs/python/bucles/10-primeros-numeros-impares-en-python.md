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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6XXINGG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAEDZuD259NljZ1Iv3QkwRBAGPeJ2I1uiXb97bYKaoAJAiEA2VX4FH%2BIIppvHVaXDQJeldUAlxwfGb%2BiOe%2FisTroBQwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDG%2FmzrFn3vBg6DWTkSrcA9Mj%2B1cg9OC1UQYdvLXZpbvj%2Bfbl334kZsQ8SVdgf3%2FP2kKXD3%2FInu92ajZaZnf2E3mWvb3Hh4JhfecSV3rtWzU0N4CKdEWZ0nnTWcxCpdobG88N83aZGmv1CJUZgFO0NdPTF82hMK4v4FqPaeNK0mwho61WnmdrdzTk3EKukSJsCYPcyiQ%2B1rnJ73qajQ95I1EYZ4i8AUIj7i0gKmOtQUhhsUjKUahf92AEVO8LcrfTcBapH4jBp6GhBXTmeJLC8l51L2bznk%2Fej4EjovVvr4r7XH62nJ2A5jnDTP9vMK6SLjGheb%2FSO5DhFRV%2BlRyk0vSDpwRn4kuUnR2cmdqBx0ikAPiswW0yf0MWaOOtubVKezsjR402KwNd3IMkQ2R49oMSoRK3WtHkEyFHil0OfALbaUG%2FzVxohOVz8ilqF9EGG%2BxNBk%2FLBR77r3GXziHnjuwHI6l8fofK%2F%2FMebIQogTO8747ZOivJKh2qtwB7%2Bd29yGi3Ll57YAW6mRwL0AzsnjAJJoVav8RMeVQDrJ9Fdz5CXvAnvsfZGUmWHJwEoXx5XgpT4BBYbB%2B8rpytoYujUS%2FUZHQxOq%2BzrB4PAPJALATBViXm2WWrFOPVO3wiw5e93S57naDsXQ%2BydlGYMKiRzckGOqUBeH%2B7Hw13a95%2BCBamFrP3qi1VkCBChHQDoC4kGFvM4kYDbS0IROty7Nu5%2BAjBijAryNMWFCgJOGaeJMHBCs%2Fcq8b%2B2dmocC97hcwvQTTCGZrvDqNBwuxw3qe3vRF0A0rq7s4UM1bkL5BKiDDiYikHyb8U9HS9RUaNlvCULMjWlk3aJyE4CCFedezVuu9dQBhd%2FUdZEf%2FHUeEw8kqNn4ZyOhmgPcY8&X-Amz-Signature=a998a60b9370e0886c5b30a29c7f1010021c766ce856f26a33dfcc00881ca3b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

