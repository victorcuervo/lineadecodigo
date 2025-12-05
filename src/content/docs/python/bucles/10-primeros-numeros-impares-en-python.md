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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677TITG2A%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T083126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyaE%2Fz87NTJHvrrxBXb2TXmDSyANZASFHKNh1Ib25ZsAiEAlLUQ%2FKwJwCfhE18kpk8Z3NP3Z7NrZLlZImD%2BlhgkKG0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDHpTcg1iyu0yd%2FmGQCrcA9FzsUOdGl8fYZ3aACZLGArtdOG7vchmjAynA9cutqgFp4OKW4CcYaaVOGEtD3mGgcgM1cueZeSZ6T2s8jO7u1kQnnCtykSxJ7IgsEvwwcL6Cj9Jzgwu35wgRgrbK802xHSopuieWOrCEv9p7%2Biu6a02viFt8Zhho5n5xMNFPkgEgp9ITSzc1rvDq0i6qf1q3dD15%2FD%2Bp0u3DxUSDYAbGxFG2juPdJ05Hb1EFpCPzfgZc0WoGaODsCVWa4XHi4MKKwY4taedCq%2BvHHFLW8Vi13eM0ySUOQksb3CFtTYX7cmMj%2BBpTIqLrDXggsdKk9%2BttzQfqe1%2FCwaYVEGJxR3sFsJOuy3xc%2BpxwMOpNxzpt%2FkQsGyiD0OXLJQbQezdA0wnyVsI8Eiqw0I0ziPen8NNcRRZuAAkpvEvw32aJ%2BKXgELkLDCJztw8At3azcD0vx9%2FJb7jZKVVbtdXlcOz5T6XIj6sF0zZjx%2Fb5F%2BZJsNk%2FpbxroUiUbYR9zrG9WidClZ7qCcOB6q1wcYN%2B7Y4QsYgZQ1A7kNEAB7nMAMLPM8D%2FntgOt%2B2qQP81NSCdKeQ1J%2BYyLkls2acPdgqv7iG5SDUYMXo9jcKtB5sUo48XU25hLWGv1zTqFO0tzETl%2F7nMNSqyckGOqUBaMt7l0PJ0Mm7oEWJzm3WYyZCldCRM3UnPyi4Ysya2y%2FxkNZvl3PazgeZ5z8GeScUTe86LJwSkOU3Yh6hZmPHKB9d3fNbSX%2Fta4mEfwghqZejAxfQZiDaC2XH%2FVQKP4v6q2IN4hdc9GA6rEfOaHQkzJH%2BrkCfMT%2B6Goar2GjL%2FV%2BlhwTj8kKGtiPHfGA%2Fm6fEVg%2FjMa063kALHrZt0b2s%2Fu7AhQip&X-Amz-Signature=8d15473ff9719b635bf57af68005a17c23d4f2c12f5d111fe818952fa149df8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

