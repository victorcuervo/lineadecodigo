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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIEL5NC4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEYFhsRodbMqusY7Ossn4gnz%2BdQfYVJuS2GXkHK72HEGAiBtfCNiPkzoyeb2s9dip9cwiUUz2xChvlUiXnQPkZCjBCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM7RFYuD4qU9NZos%2FFKtwDbJNwfZ9wtarV2QHUTK6DPAEcpXQHeEf6d1kPFe5dyJ1op%2F1iQMT8DUPzv%2FPkIc03NbgNYBtnMum%2FR1BiJ6FZLI%2BRlus47gcSQpFG8nts%2BaS97lkoNls2nDA3LiA2t1092rK8smm4kTuX54nxCEdau9dxqbs0Ez%2Ba77YyNf3YR6XibHLJfr9pgEv4ZHN4xNJ7qFmUzYDfKfmSCtEBhYWwcop%2B51xcIZ7XyL5pdHC3wIe7%2Fu8MlRzPq955ghDkJGpBDwhvSaL3btwpg6Wb33rV3lb8AeBO32N9IVwCeCIRFeIp08uiISAQlMgxoj4PHX1eP%2BP1NZ%2BrDg%2FHJ1Wh0odmlVt1QXibYAvAYNxe5vxBN6MDlyvWbv1RkQJJCgaO0c1PG2TWi5hhUPUcDJyHy3AXUDAm%2FfmvZDTees%2BmjqX3RwMB%2BOWcqhXbvS7KqgRKDGXC5psh884lBQEcsVZdVm4maf8j1r51zk33bbU5I0Y2OpfH7OD%2F8Z1UFl3Vzcxzf5jPv%2Ben29Tdo8jtD%2FGrENbUYqkQj8OaTKVRVF433YhPfcA4d2wRvcgxz43OGiktwxJUaPXyXGdKIwnqLWBP1SEqvZvGrdiiB6s7Wz9Kh6ZNOq2bW9PUDIqA%2FM0E6pAwqKHGyQY6pgGxfr3jQ06qlDte1f7nBG%2BHMuh5QfSPS6G%2F8RDS7bfTVFDJeum2wGEfCkt037e5mjJyb2OJw86fQNsDQVoBWU%2Fr8dH5tS00yrD5ho6%2Foz4c4aVLYbu%2F2Z4zAC%2Fw6ZywZyVQVp0gNAVeWIkBxDJ%2BdjXqbUq%2BY%2BiANiJb44bCDYYdRs6xklXwM%2B6MAe3%2Bg8iGgc1ZSNb6Rd5IQcR3cPaly1o4zMKJov6c&X-Amz-Signature=bc8b773dc3def2a2ad20cfd870431129b3d13e2afa722e7cb247cc8cfa971f8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

