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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US7M2XY4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCwNrEDERxuYkuT8FjzDIob4P74PT%2BnI%2BAv2tEGQyNIJgIgHwYKmBVgp34nFUH%2FcJJo%2Bi%2FtnhHkI10DpbGa2ybJxSQq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDKNv3nJ9eFEwIk3nXSrcA4Tqqb3%2FxcyTYx5K7jCZiAp2CYO5RQIYwZtTvU74Zlci1lE%2BFGn1p%2F2saQYZs9CiI6TmqtHhxHOZlYIMEp%2FKzV8sqlWbLgdm3xkFMGD7NozWkVoHrw4ALdAJpxK3ifSwAkXDRppZRygV%2B1uEVIbdEA0S1ZuQ%2FXQ1U1FNFUhjnPFOGCkSj9OwH1vjo%2ByeKF1PYiSL56MxoUABmuSnTjrvNS3qqnCVNbI5Atu5eQgTlLU55OTHdAn4DtYPxcSvDghYWWpruRjquYRGOSlNhCECjBeZiNo179nW7E2MOzhR8t7T8MAq%2BKmp0IfQAJ6l3xpwC5f4VhM%2FxIs%2BHfa0gBABBbLrr7h1rEvSh1j%2FjubRNT2L%2FuWEic2siRsTFzgq7A3XP32iC0FzZGTygqiqCTiP%2B2u5tp2xopFW%2FdX2kPmbOTCHxzhZku3HspCg1cdn8Xl429oItr%2FAbFYVJVVR3C9RHeL34EJ4Xre%2Fl9QwnGkGmcVfMkmOzjJ7dTciDpTVEga70bVtGn6xDDQz%2FCkh8KkJ5lAwTGNroLqGfQQfyl1GunBdNMAaKQkaanEbbCm4utslqwRhvxxtqododlazb8gaLwaw2VxwrN8WvQfTFrmSCp7X3m4i6y0pB635DztcMNSuxMkGOqUB%2F51QJrBNL0RmmVZYMK6gJ5eBEHZQ7jgQfPHUII2VRKeGt6Kd4zO%2Bk6MWKKDLbb1LKd3m55SFwkIZIorn0LkIvyVasDPxqZrZFkWlp5pIn4CywFq3YdRACTOj3n8CZE2kAaoClMgj5iHVsDVgS2LroGoTDAW09PHr14BoLezuTmY9SSvA0CvCXHEGtuxzxySx2okc4jSd1jfU%2Bgj%2Bon8%2B0r%2FnxY0p&X-Amz-Signature=088c6918673f144afe9defa6b6f92d324af47f8b03b90bf6d6b443c4bf221abf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

