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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD4TXASI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T093507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVa49ev1JmBHIDdb%2FnMqQVbyIAQh1hmJDpb2b0FtvY8AiEAic2R30n2iDDe9hE8cQ8XCQ3XtrHOGnnPdwM8Uk3bZ9gqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyfjwyoPuZr7%2BS8nyrcA93cfS5AD6lglOlnuqbwI3J7uKC1cyZPR%2B6YoPF8bzwYdyLGCkCM9h1LScKq8XG96qPvLfYjc%2F0dQUqYemHwcI0KOuORiHHJpSikhbmPP6qio0uccGy2YuoETLX7AbHkeGGunPguaCukWwRSuw%2FTd5R5zDqr%2F2qgOPmURJDfXuXx%2FlW0%2BySEA94WOB122d5hV5JI2CVrAqVPIJhBrJjMiYYFWH8EqDbKmZ6kQDnDzyk59YOBM%2FII%2BrBt0XdhqyH6lSI2GZc9TxVSwCe7vOEXyCugxUtKBkGTfIsCosz2lqAR0d%2BJ%2B%2FuDBUklyED5WGo%2FXn2ex5Es%2FccHEXorxdwidhtOQUqCextMt0d%2BVzUAiZpi4lgCZk3KSn%2BZ4YDOqjkC5b0dUzDBnO%2ByRMTrPIq9J5MvY00hnOwWuYF4%2FOGNh2%2FQ8w0K%2BYyHrdK3TSNDK5yE0ZhnQUp%2FnTzKnG6OmCy%2Bb%2BMEPLE2oEt1KAh5R6bzOYWesqwPZZfZ6ARFebIjyt4QOis3ob0XmGyhV%2B7KrEicfaxheoH2HdU14A8mZvQph7qF6WcoaixKvlRVT4YPOOhPor18bvp4DFdujLC7M%2FL6wqX33uzzuuaZxIJKwyUKP6OhKivMpIz%2BBTJYNhICMOLE38kGOqUBbBiPW6YdOy2DsWxdIF24%2B3k%2Fg6qRAVDucijVrW6%2FHh%2B40KE8CGJmCgwJbzQeUlkKMg8j0%2F3pCuByecQpPHHCXUigUCDbJAhsg7TChKDX6OyO2vhUbBa0NvyVmT2aRL%2FaQ8kzLQR%2Fx8pKN92eohtWCr%2FiXKxMKALGHEptZCYUVflWaUWh5XQ6AhCg0ty3bEMW9ApnWQRx%2FpKUUXs%2BaUjl3ppECw6O&X-Amz-Signature=2454053b93a96ab4c3fc09899fdf2102681ce53fcd5558c0c06e1e6091e24fdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

