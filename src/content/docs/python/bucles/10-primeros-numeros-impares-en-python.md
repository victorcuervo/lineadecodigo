---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS26MI5X%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDza1f48DjfT9Abll0RqmBrYbbuPgbQHUO%2FYqbWV8rSHwIgUCL43GydrOdKPIt7gFGNMYEtV%2B5lUUExEvAslSGMtCcq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDKfIVR0pdGTuuDdQaircAyNsaEltUK8CNrAvMU7IOogtFgn5X8u9PxOEccUJV65SkDTSBVRMcSUC9HThaRpxfi4UGlHg%2BW%2B8NCWXstzscIbuoVVJicoFo6EEfKuzUEwdpAbbpp4otUAs62PaYXJYVd1nvYuvoVZ2NXIF%2FMYiYy9GpGLsiVo48NJO52XIp49CZnczamMi8G%2BFbJDO%2Fx90uvwo1UYrhMg2B%2FPTDKXYbO04qQFxBTu2wT1YdnbT0cbuXOVwSbwqbWCGfuJnJ8dzKw0wmGbvOyj2CO9K%2BfZefnxni3K9WA%2FIfj4%2FwRUPZ5wKgw4wPuSnj9fbCPgD%2B%2B8ApowrTTSW8Zz4ql4FYR6ACPms8UDl6fVHZ3hzx86g8RQQ9M0cinSVLyFPTm3uNbYXkWJ4Sz369q1PlDn%2BOt5pS6%2Fyrs8VqV21M3HZfsG5hV1OM4jEdWpKsAtZrO%2B4VnzZgllUyooVHCAfVCXMxAWt50j4hUBgHKvg4ZAYfMc5i6HC6CtP8G1YmTizoHLRBUb4O2YF%2Fne4NfmxDARIlSh7marYRknkemAVbgZFiYFYx2Pwcu53Py6eSe870rylxEfqmKqPz7IaSRZb5x6h%2FED%2BMMRC%2BnD%2FIYGmW352hEZPD8f9JunxXHVB0tg2ZfgRMIq0w8kGOqUB8d%2BHW%2F2zMAjjYaw%2B72igwP5IxDHoeKqGZElw8fLt15S2XzItFBzrs8oSt%2B6ORuZ%2FdXYf8PKO8bFMWgwITKcVGy2CvL6tFvfu81Y8fbzPPtthocJXN2C57j45IhnGAeZFv1ZC1CQtMzmpW05njhPpwatCnDhx9mF%2BRVxciBhA3lrYDSrQa6a4zDv%2Bt4ui4yKQ6yYFG67JjeTbbPJ9%2B78lxAguek6w&X-Amz-Signature=1c83ac0155ed9c6a738b240d5a65b551a35888cccb30d0dc2302cd36d7c6adb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

