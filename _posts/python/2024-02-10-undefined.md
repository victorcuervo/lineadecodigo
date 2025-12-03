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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJQQICXY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T152450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDKKYAVeDGxN8KZd9r23iZepuKhjOHLnyF81NCSDVF3kgIgU9RFcPtHBK9q3S2AZ4MvMUPWZXkzvCLNm9jEQLHHoa8q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDBeKUGbj6B1O1LMJWyrcA1dlpv3yRg8wsy%2FLXsQ2L45ioDohgTc8zndtIx56puk%2Fn1tjPnnNwSX8GzIhie2OwKwuIZMgIKvjznSIMQgB2UcarXkdaqyf0SJLD8w3LTqgC2U5Na22qRxx08R5jEzpqOn8cyKH1sfs7MlwXcw9QCsYSx13F4jINhfEntlfY5M8L%2BWdZApyI1urF6mcuW%2BgzSK%2FG%2BcPbcAT3uvS5H6C4f3NmNZxvXGwJY0l8muPQybt9H4xHn5TWZnCoUvO%2F1O8dcH6coYYG0kseIkvem0ABFAlDQPSinp%2Ft8YVeYBq7Eq5Tun2wlKQbk%2BauE364QdDK7WbQlbZb1asvonXCqRRuzLIPrHEcBnilSuZDfvMHEeN4KwDJmLBpOUHDR6JDhW%2F6AaEbQ4LigFbdwcTtIodfzvLMxUyib%2FMig6FXCTJqZxvPvCmaCjanPUnxBx3f6K1Li0Lc74Gqyk4f0q8eV8k8nhZg5y58pXkqP%2BeZT5kRxcB4lgcA%2FG2OLHBLeK77dw%2FhXwr3C87%2Bk9J9b%2FLod5DI5CczC465w3Rvm2ROT%2F7dGdnHswT8DN7yXm8ohYriyNS1t6H7lVteslr9RvjXbcF44Kz3kuo2G7vH5iF7B4NWu7aq6nVC0yxNKKi24%2BSMKemwckGOqUB%2FROUVlMxbKHLvYJ8XzB0GfO76XpuoNLzvHzwco6SrdnOV2Clxu8Gbnbg5qRd9k5OOfr9UoFvly%2BbvJ8OoZjxNUqGBYMHzUVFD46%2Bqxkg6QEsTccbdeZyxME8wZdM499aiNBauuJnfBNMYELqxizovC5s2moeixV3e1z5%2BNOedQwg3hoLIC5PhidH1J6CboJuz28022HPW79XVEyF2ki0BlwHFR3a&X-Amz-Signature=a98829883f28756e7db34412e9d3bf77caa44ae473e7859bf0d8674452f5eef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

