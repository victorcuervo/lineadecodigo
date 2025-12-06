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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FA2YVOC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9%2B96aWuoeA7hFZHZSMIj4e9TEfFbgyJqJKQdZIOqjAAiARSfQkNtO%2B49TL9iU%2FsgEvosAI6WsR53SgZH7ht4kZiCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM9pmjqYdrml231EXyKtwDcQs8ltChK%2FqqG9CzGdNxfJP2X5ptq62Drp7rfDkHXddeJWw6S6Y38xXRALqQO8Aa2%2FVFVmMpBEpUpALclQcSsxODDM%2BK%2BwkYR%2BiFJNZeDJCDl8jRxzzSllMshM8VZL%2BtIIHn0TuqRrBJ%2BLe8dP6LMgNqaBPLK1%2FK99lHRuM6vCByROC2683f3ZprkW6FBbjZA0Wy%2FjFym5%2BSMtgZ5q%2FsDpVrHgifC4CpJd80ERlN11nuuY8MHeOg9SduvR4Od139hIcr8evTArqdak9yPy%2BoKilen2Opx4BT%2FO0Sn%2B%2FbsQ%2FnZ8HJ2OsVVjTC7EljR5%2B%2FLZlKbCNFt9TcjBGF0kjO3Sej9ZL%2FMRHD3b86WmjlaFM7Y%2BI5br%2FeTY4d9cNE5lf5ly9Pp%2FHToesGogTpd6YY3XO%2BWQmUFM3FDG9Uj99hb9l7v%2BM1TZqQCl0iVxKoFtKXX8kHh6iyrulubQ%2FzJSkKfbSWcEhAVWSuF3J0vK3lrVQXRE4porpIL%2Frl%2BhFFOdNrI2JyHnyB08BwdiEBFz%2F9zL%2FfVJcUwSab6oQ7JmKM%2FPQq9ffDXYgXbyZ9c39Sl1%2Fdv%2BLwgk%2FuxyBUR4GPllXdh7JV7HpjsuWlyqYWlxte5AJrD9mPq%2FOAX%2FMIKCUwib3PyQY6pgFbB%2BHJaqrDE0fMTXYAF%2FugAN1bAXwXQSTaJUrgR9bxlAxjLxcEAOJVabQf13JAooD2MGRVlvibeBdA%2BtgapJP2u7MeJp32OJQ2mskKn3dphZzBOIz2l5RV87egTzIJUOHlcvLwLDBYdA8%2BU2CzYiESrExukWNB3ebzXFDxDqo2%2B7ND4Vh19LF2UCJwDmaTxtJ2a6%2BVdTSUNb%2FrTPS6%2BvbRFsU5l56L&X-Amz-Signature=24060e8c5a55859d97849b12716a11d8f8c4a580c90b9b96689b366ae55285b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

