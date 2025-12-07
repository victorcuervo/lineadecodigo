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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OTYYM2C%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T150357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBvR3c9M%2FFLLGxTvSYsYaWXhoW5M437EjKL2c7K507VAiEA9AdzVSYesLgiUR6rdGJm7%2F9sxvjhtJVSs0ANBCWVF6YqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXp4KENQxQP90oYPSrcA8O5cA3W1f4HRTdXLoSKPh9deIQt5wlxqpL1hxZ%2BidY6gNl5LHS7%2FSRhDkzLlTlQaWzSr9uhN2aLY6SNBUNORZ3KXyMqx9dOv4s%2BtH2Rfs1GErrex83nsnnXOKmxCRBLtaaWRfX5j%2B0L92mM6Kz4ytwIBeWbyOWLNWbgvP%2FXA4hISt3q1r%2FWTMK4yQUmH4bghKgRy%2BJ0UW0y7jRckDQNbXUL%2BYM8UbqaPInrqQ65LGglLi%2FDrPW%2FVIEB4T1XtWXTDO%2BIT6jYtQK9NkK98FL2fiDNj2tSaS%2FRoZ4jzQrg1Wn1KdOo9hAtxjVC5FMo4d3d6YqLj0WfvGXTCEOUc9vgFYQoGEHsN77X%2FXAHXWKuTQbxZhJUL6FuFub5Za7W57EYkRPwoA5ZKIJLrInAdc3GJ3YE1U23E6gpyHbSMRAlA9JsHsUNNjqUftb8UwUC%2F8nxnuE0gSfzEkU7T2j9jFlBOBJ2D%2BszxpONWc4mEE9IBgcOct03oiYh%2BstTW%2BJN9R15gT5fyA4dHth%2BgRm2PLOuMcZIT0GoENBZz6KCfsEjYkibgHSij2QObEvMJG5U5VxTQlsKH4cMoWDoNyQWk%2BD8sTTJQTfIYXLoIPcQyzjZKtyIOlTyWZmiZ4RfnzAQML6a1ckGOqUBzzcM8CcVyCEQhowkRT57VDKXKMq%2B%2FPZzMt61yzvmdFrF9KarflbUixq5tP5UsG%2BLMDv3kQjuLKBmfmsopLg1cIvQucWXOMDSZGo%2FclM0LaFoIyAfSWm8qwhmHWP8WYyeSZ8B%2BlPFBPpuWETMTKCKgkO6Yj2cL%2BfdKZVraVMUzMFKFy7dQv98DMaOQZSuLNygXOWQOf8Ga7TA03ECXFBLIhe5N%2BP6&X-Amz-Signature=9c8e18ddf9dea80f3b58d1d9848358c695c620944ebb250103dfc759d3643e82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

