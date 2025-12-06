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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HEQBWOW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T181538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwfvILWndjd0mORJYCJyJ4phSYzm6vt2n80UO8kGfthAiEApbvyOZLVIurYexVTUPMEZP7Em5jiAC11fJWY4C8hT5Mq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDH%2FYLsY5gvC0UAm2tircA%2BQkYVOSOy%2FDir5640v2LPSU9LFJ5nuQa3zPy%2BSS5LSdhd%2BGuntyLA7GTanZSUHcOvZTos0AAoGkLYCOQyvrBcciceXNGN1J882M3EW2LYsdg%2FVcsFZ9Ot%2FWECKO0XDtcuBpaHRyg5wSsVsWepz7nKYiiQAvYXCHVYzmcW64w5RpNY3mhuGwoG%2FIRpEE5YkXW4cFHwbkR%2B2wdsRN1Hr6s66WaKAybcqskmLawfsaoi%2FMC1l1YCb6KAkcCuQgaZ22HXt46a2F%2BEI5ELMF83D4tiqjstt9FuFEjF0RP%2BFiiBlYUijRG8Yg1tion9mruVefELAAPreW27xXl95KXzlt3fqKvi4pPDzRJcN7m%2F8jc9C4sKMCOIOaBm4weQrms7w%2F0BWMdoEfF6t4I9FscqkxzfoEPpV%2FgHRhuoSMAeVovpCR2IFJkfvtFQK6W0xtriDJhBXuzTLSLGwpltZzNmIKUOpmQoIIpBJFqu7fh%2Bhjl3DFTLPziBrJE3tUdv3MJhGBvflIF6PrASIQ5yEFuBEmm%2Fviz9ZupF%2F2KzFPt899LbXuuNSEZ37suQYbOIST%2Fq1o8ZgROcMFzglS9s6NP3PEngZL7Ir54f889ROZ5c8tPzueCbmqky0o40%2FeHhzBMJ3C0ckGOqUBlFlF7pk5URqB1J6EJLdvv3NHAYbYGGro%2B4NTQPZ5oawtDy1zHhCs4xapVqmwVn04HXf7Nx9OqTGrjFjucQrvcK9rnuVa1aznSWX9I12qu9TafjT%2BzhyNXvK0JB%2BC3q10tu2vy%2FckaDpEE%2FoqlJlLYpEYrtZGa79Lcz6BWYAFOfY2c6kpxCXgEgI5yxFogq9bvtLUIADtXDwG9CJH%2F6chuIC0NZYM&X-Amz-Signature=97edc49d1159c9645d68a408cee84be3a67dfb2179336b43015463f1f92f75e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

