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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR42QZ4M%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T115306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv5PK0R6vxcYT2nreDr%2BPzvdThv56z3I%2BqTBTKj3rQ0gIgOTUwpPhiX2FWu%2FXCEiJPKZje9SdLhXoelNoXsuT2z5Iq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDG4w3WwLvgbpoeBVYyrcAzYWGx4pYFtVgzHFS%2F%2B6soyrwUOgRPU6peC%2B%2BKe78JlSfI5Z%2Bj5QTH9ztaKqzYtNhEegdbBIfcs1sgvcJYr2JqJvg3bizpEVwZwgPfW0UnuaWkPBfWgt6l4curc9fQs5UHH6yJf716MrgiqI5fuSegTG4d8Xtc2zcYnK9IJ5R69HU02y8crV97KquNwCbm90HwVSawWUOY38FL49zmNLrKX5T5FX23JJ%2Fib9EFrSRoHFGuq%2BQGzg4CU1bxDJH%2Bp2GJ%2FPKJnzJqwOUv0rKUjvw9Tj%2BCavq%2FUDYZfARnFEFzk5Qv4AUHq1JPVRbkhrAgWT%2F09ZP3ciXV%2BSnOtoypCICCCvRlfWwBHET4z%2B2mguTQqZ7xv1waljhem3Yx2MyxGBFsyVo3kN7%2FPE5SwGDiG%2F9zA9Kk8L2Vv2yjA5pvm2bSiUdoJw%2Bl1VXomMue3BoSjtVAEwOwtTeOcoYFesKySxPjqwQaOlCBSEAZPdV%2FyA7QDo%2BuHKNl3ffAscIu6UvVip1%2BZr%2FhyKAs%2Bqrome8p17ebi3rCKv2UGRS6R6Vbg5wurH6FUBGWXnFbAfV2Iy25BdvAVNRXR%2BWgclJFiD3uCvu1xuOzKX53XD0t6KMoxS3tEs0iTSaK0PHmYpWrHgMITVyskGOqUBhh37%2BVKOFWUIA4F1t48DGWnyHEH9jMrZ7b7DJRjBnRkONnwtRKSR8klJ9EDAVtpjh1%2F%2BscyHZm2E68fE%2BwMzINE7UuBJlpMG%2B5cfc5cfoTz1VEUpaWt9n%2BzoOK4YHZfqAfkcq6LTPjopmUdU0Mw7rzEoQ2K8zQytE9cqnHIyC7cPTzmA2bGBAgBqZcTyIkTLnVXNVqp1P%2FfIKnbrwNDYF9Yu0%2FsB&X-Amz-Signature=39083b79bd8b2fa984a9272f9bdaa6fa71c4d92516239edfb0bae7b2fea32252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

