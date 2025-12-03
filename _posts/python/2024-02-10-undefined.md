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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672QMFKT6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T044043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDh4g5ikp4hlZ8uT51bzeN7nulQVI7qp3INa6Na1QcJhgIgQto1gvsGnQ3scyJ9aPjvz%2BNVJuzd%2BysDNe8bQx1XRPEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAmr9fzHG7P%2FTgHGcyrcA8spBLWqPODAa544CbYtTEnlVYcT3LmvjV9YeOAmm64Pqf3sTJxo3RJe2hDcQEWY6lZJIssC%2FLA89DtGzxa1nXsH3wKqCbjFuNMcl%2BQ0r0pvtflNz9RelNATu%2FZhuSqEczYvmp7jYPSstc3iR9Gv5D%2FDuLja6wLbCiGl%2Bf4r8lGIBkjfq4wv77%2F0dsDmDxWx4S7x8rG5MXH0ke%2BpIO2ddGQSCW7ZOMYxCwshJUed2r5e96sUoE8fQOVT9tyrVVQrZtlz5G%2B8ASEc1D9%2BFiHX%2FdXmtUUUi6LczOYbSMUPm4jR3%2BxBT48muTPQh%2F%2BLwuzRTtA6ZVJcDVfgbxnCmZbclIG%2Frh4PWK9dw3geQJRQYREbm8NrTCvwRWaWUAfzzr%2F8MqqNmdr8OMQsVrYxfKlLCasgF2u%2FiFOb3aLiTaPeXiHUsIJTtFkH6eE0eZKxa4snq%2FQLHSMwkpzLk1i4eNirkQbcMdaX9ybMFcBuMCQe%2FxeRjTIEgch7JQS5Su0ropXRZ%2BChjiqSIMceCGrsLQHFrKyoQ6VUeX3N6WY%2BPIGB%2BtCFe8CqPAovTxsK2nqB5tVXseWqG0Dux9whtXtMgdf%2BV1diVpRNu0avoPIolBc2WiUVdHdelXEqE4Dp2j67MLSUvskGOqUBM3lStiwx0iWh8uWPLWC5jsh92vvgLAneeXl60UA4AKSR%2BwMt4XgvE%2BSEpOG4Kx6aQEQCY737yUdJ1wuZOU7bu34%2BUG6Ye%2FeyZ96socoTIzxCeNsHFtUw5BTwTc8cAVKbF64einrqWqT0mAA4jr%2B5sKrYrNHWLNj0EY8nM%2BCBz7BiwVaBZwLEvM0ZWe%2F8geSC0fYpadHIOXbspYr9dDc7ElUvgW37&X-Amz-Signature=48139a02c483913bd3f07a12a22d0f2a25055808402fbcc9450a092ca3448f38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

