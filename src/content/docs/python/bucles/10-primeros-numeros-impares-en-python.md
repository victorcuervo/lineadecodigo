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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKC6QXA3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDnhtq6XJt%2Fdu3HqbYA9CTf4ciamrvqAy2GY4hN9khQRAiEA%2BRqs4xjsHUi9Kk1pTclzevP4k9g5PM9Qiy78zYRYP0Qq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBW5b8OVxtbU%2BEBkuCrcA4PCAa%2BBrUZJJ5PR2fVQX%2FgbYMf5mPOakrFs4OkFzJaFdKcporNOiN5nYOMh8XpyCn%2FSLhdmY0A9uNrG8Q7zCo77qJNxM6ww%2FO4Xn6FLDCQDCwXCEdMOySpG8poN%2FoASioZJUXgP%2Bd8DpVoEl7GWxJaoFS2Rj%2FVrJc4%2FaCLc%2BM%2Fd3EmlIg04%2F8WguUrGICbursDhrewEwd69VOOhvRjWSesk22Bfbd9et4h5Dug796LduKl1o8RNNlwFvsi2Ud%2F4sUou29aisv7K5OEcbMh9NLWqSshOdrI8kb%2F159%2Bg0G%2BA4fQoZ5zAluIPf6QXhbP6OfyzOvM2gicJCTyL8Lz5L%2FuBLlDgAxvittUmBl04QNuc7EB6ks8Y%2BRqPKLNzYP%2BcBGbQNGcD4Lbivp4md%2BY2UGEtyxzus82BzfrPtkQ5CnjDEwUMrROIIofwKP5mK3ULS01UmeTKU0naapJecSmme%2BN0ro2M4wj4KC%2FQrDJkR5TCNEOSlUHz1sqJzWEfKNDnSpZgZs04f2VCuKUUPjURjCd8yy3jgvNv1laOe7S%2BUVTDn%2Fd7ioAso2HzEon8o8k9sKeaQsYWrY3NgY8Gl6BqitUjfTg7u5cp8r6mlAukQJ7A%2BnFvnQiwWHBPDVYTMKvdwskGOqUBSttmwyovWwcxEI23yBtsNy8MKyN1mqVmi9kfDSn9GxE5A2nqDVm9bKIUKbABxaKhZ4WSDq3JLFUb35mRw%2F7NgAkjNQgb0c%2FPf83beLL2ROnE8ZgzpynPniaPocgQoDy0ZIPnbRDZESA6VLvpWzUb6ohdRRozXptpbb7wHX6gLWOyvAu3Zix%2BKyNr%2BvbvBdE0wCOAQlOfWYZHYsGb%2FK%2B0PA%2FLsguV&X-Amz-Signature=362486e83e64c6611f52ec314c0a5b0b0346fe0cc001f709c063396c28087128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

