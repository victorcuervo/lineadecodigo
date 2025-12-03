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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V53AFTL2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T123249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQC%2BQIaOzNf%2FaK%2B7SIPijY371LChdfjNLrHKEqWZEhYfpgIgBcfjwM0oKWlY8%2FWlEpAE6punWLVaH51x6B2JvAYB56wq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCbtU3fhJ%2Fv2jsQQPCrcA8UQdOt5oye6oUs9AAqKt0PbFTlSaRs551qSekGu7joYe4mBBby8AzqkowCA%2F%2BYrAo6P0X9xb4x1y1JfX9kD6q0prGXVI9Q2u3ioVoHfxJXdutV7mbST602st0iyhY11IspSs5RpstWgSj7b4AkplwLDZsCYn5Y16SDQckVyHPe2S9jFORbpdZ23M5Rmp8M5egJTlAFcjJYhv8h2GP4YCamjxr4URUCcNIDiu4FfRM4foSXXUdPi17qoKfIZc1Qpy55H1MOEUtvQ94g9%2FB%2FOR%2FNrg%2F%2BY%2FKS1wNPhy9niH8GH8dEmW0e0%2F76zs4CQu0gSyxb3KE7Q5SHgLOFQT9iCcDk1E34ajgah%2BwO40QpTCWBnPmQNv7tMrKbQEE1k6Y6pE3gQACq0XyWdSghaXL77hzQ%2F3YFNAy2YbhwmgQP6uty8jr2B%2FPTFFRNbywcvGiFrxVIt8wQhE4vwMw0%2FMKbcWhuf3a1evSnRnhl0tonJBbVaqHQGebyVPcPNdSh%2B7ljQLHTCHfylufdxf%2BF5X9nAszRW%2BSJSOkCrIhP7DNayxIuwZj8rD%2FW71o7eXHUaM1fooj7KlMxidphyv7mymdBf5WLT6OSTMAP2GdJgelfZyAneD4H2qO03ayFnazFLMLjNwMkGOqUBTnxxPAq467y1I3whxQk7UX8aWDIouAUntzU4cx6AWA5AKSzYyaPI7gzbm60kebwK3PgL8Izp2pI4oNsN2TKNurGU9hFMGjEKmFpEGNwmjs%2BGnWb6%2Bejk2D5rS4%2F%2BABbmU55sLoh8m1mwO1exfhoeGmbT6sgLZQPAxkO6dyvLo9FidvYtsXKUs5D%2FnPbt5Z%2Bq1Mlf4EcjQNtT3aFvZspOzoZTXuTL&X-Amz-Signature=a1f7d5c9a128725f23fd67c2b031422facfb28a5b8a92ba7c389fc84ee13e0e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

