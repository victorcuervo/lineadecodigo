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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W6K74HN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T064706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCICjlXVSWgnuEBvIE38vVXhuhqUWmuG8%2FZ3b05aGEOsA0AiEAoZCYxn4M6Ruj4vpL4lpsR8UtY0KSKqjm%2BymT4Lyfv1Yq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDOYt2Pxl8vEk8x8H0ircAwVwT32ap1vjJ7naHsucsbD78Wx6ryCkZtNRguP3Lws%2FCjCE9HCQIsB2CkMMg%2BTqjW0nz4ZhsKSda89XFM3R9uya85cxRql59Ky8WoQvhj1saATqZS7TUI8q7697K2kwR2cyhP5vCXuMEnMRIIaHF9GdFWeSsx5CQh8vpHtkcII7kmI5Q1YpJMF0rq8McQDku46c%2BCXEGBl%2F03T4mc0dg4O0ApD7QGIKgx2spXN3psk4Akg6WFcvZgMZa79jYjjJ2J%2BTov1L9v7%2B5SUyQ%2BdLNyy%2F48y4CHHk3LaQS5RSND%2BvWv4vYQoL1VQWq3wSNe0DFjfunOW6YYEIEwbgzS8RjzI%2F4EIJ5UPlDm8%2F%2BryMlnP4WUYR%2FtKOcuDc9A5MvFAcG3XY9mBtR%2FTAAXSB41tB3%2FHAhSY3pAw1x813%2FmCbNhHhXgd7ndDb4iym70aJBOLBZqea6gEf4abLjgyv%2BNo7L%2BmdekY8VL3L7T%2B%2BuG2%2FU29Gb3AsLhEkv5%2BfSdkOSn3Y8mrwisamhQusZy%2FSwQ1bdAv4DzZt0LWSTyums017nfURbpLPRL5F7eSfnNHiHGLqShBBg7emTUe%2B%2F%2BonYLW6Y%2FmtgcoM8Q%2BrIMmc0TfbxWW2pJ7QFPJ%2BXiGpA6dCMPuZv8kGOqUBXG6ZIBxVovvpUX6pYShhXaeO2z%2Be61%2BLC5%2BsA%2BxA0FJQCkqYxzpXQqQW6cEWXJaBhjRLL%2FB24TiV7JRVzQYcosNI8fTLuKfNCnpNa9Eyy76cHTd%2FWRHwnbwpnE8E7v62DaxT1%2FnenbuVp8LZ3VY6AEE7utHMLiga5fIptDdFhgKiRPPO3JYm%2F6BMw6BrDplXJWHGqYe7O%2FyMtymZT0YnwX4qTxpK&X-Amz-Signature=f994451cb610e79ceb459cd56d04358af71aedbe66ae9c5c5eb6746c42090252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

