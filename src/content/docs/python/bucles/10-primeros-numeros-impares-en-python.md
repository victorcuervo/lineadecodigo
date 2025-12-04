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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665CPHR5G%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBLMn78aWU6L6keo0ZifNLSHMKdtUANr%2B9c9JGYuslLlAiEAuJt0cptqkeM9MSo1lc%2FOKxWX0nGBLSfts3nv9VPhf4gq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDOv%2F72vOcLxh4DfYqyrcA03kgF5fNJ0GVaPDCQQE37aGyiqq6KgDcm0eel8wnR%2BA8R%2F6Ukx0uVDOdvyYTyy4ebsaiAQtZjFnO8UwGrX41Wzz7kkgNKwrHDCl5ESVBJhRuYk1TEy2TAgKUf2c%2BRWiTKBrG%2BuqVx3J2h4u2DgJzGiFG2tS1mtGdfdo8Di2%2B7TrjFc7xh%2FyAoqWARFWKnmHiUMNJTygA%2BhlNQ4GkExsasp8ZfJZcpFZJEzaa4K9JoZPYAQL1ut0eGpJ6C8LEFfofEV74giX7j8pLLlTBS%2FIpM4rYqmjNsAPfoo%2BHq8VYssZdUCR33%2Fdsdep5mAgQWa72QhvJok0EOudhULmIh4wqXn1jTAvifdHHxc9JGO6W1nCr0EfUtMLpeoJuZj%2FSsc16cb6BrQHp4sUDj6b%2B%2FsqIMYDjiQdx%2Fh8pmjkSsvIwPCyRzkPNZ6yTI14Q3if79hi%2BjhdJmk7D42Rk1rO5m4lBBXjFMWBW3Hy1MxTgDO%2FDsdQ7f1%2FgEnYddWu7ylZD6fDk2tPk%2B2v9agbKXoeY3%2BPDSirwN3o7JioAG9qZTH4kGoKnYGa10v3K5XFz4UOVui%2FiPvb3JefKrU6wPZnxdITZl11ox36vyDG%2Bn9ypk9W5YQ3GcrhAiO6aNbh%2F9dQMLHUw8kGOqUBx0oo%2FMKFQQnGbyUsGQxR1pDZ94GkhArc2YmXJ8MusdJFD3cuT5rmNOzyPN7DwgYgWza%2FCPHASFzEwFfyNqKgoB6o2I0YxFSMqop4PB1A%2B3P5mjvVl0cx4MzqjF%2F5N9VDH3Y%2FUV0Bs%2BVmfFbUrAI9AFQ5vvTkIp2g%2BVOsQEGOvZ%2BXcAzRtuEUy4ObpUz2PRD8kewAtotXxjJNmQaL0vkQIJ5m%2BiiY&X-Amz-Signature=2d670f2b59bfc882cdbd8c45b1ceb85df80987b58be6c83b8e7cf2595a169fdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

