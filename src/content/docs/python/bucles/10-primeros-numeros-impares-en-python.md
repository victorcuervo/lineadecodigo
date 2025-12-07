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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V23XQMZZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T021025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgnDa%2Bx%2BsuLY2Apzb4flkGlcjXVhOZze6lBDeNLuKh%2FAiEA0RB7a4QvlVi6bk%2F%2BSdzS6TE45f%2FJzJyNZIPA7awznmMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5K3pzbBpU89rOu7SrcA%2FkmDwtV%2FavE8gND7FZI4qsQaF0fEepkYDQYbQaZPQDGwlsYESaaVDGYL0QgwxgufAJnhzpv7v5PqIVPkOMBDAr0x9wmndJpQ8TS6L8boLQ1FXNuMz4NJHQIcCUZjuXtKiJkWOYRVe7hwGaZ%2BZg8vEQFh4Pa3NTQ1SEIhHqFflz9I4E61k4pJE%2FvPTlLa1nWsVIjWpH3HZclReuv6lXa1PEBtiF9v2O8p2Xd054Pjm9ukiS%2F%2FqZP%2B3IvKIz57QI%2Be%2BUsZyJFsBoKNyEx7KapRATSwqtdR4S5aXpuBXAmKJ9EfEGYkw%2BqQUmSR90fOMcCa0YE5rut056riPhQDSF9lrSnm3ePPpGENopCocbC2%2FRyPeu8oH6WCm4jMz40I6sB8LrCgQqhSr3XCZ2tUoPx56eRAfTpLKA%2FcGRiMVpw8G7wU8e1Hs4Jvrp0r5rpWvb%2Bb%2FWbSYQtDJAOs2OvtVW%2FyLghbCWcdX1rK1e%2FBymOuzjACm66mRMaR3PBLYqyOYt7yNDbwinlI4sO0iSQ6rgXrfP%2BKiXuNd%2BANL4GqTTIw0IChmb3vec7N%2ByZSgvL7uw6XN7Padgx4AkwdwHI2WojKugK%2BKzFHGm0xi5Dj4qOmcCAgyP49OVvNWfRa8%2BtMN%2F90skGOqUBeRdbFLTmpmpPZH1oBH%2BUtVXzn%2B27W5Ez6l3%2B14Wzd%2FHQKVJi6PmI5vX6TzARGIsVfhz7bQ0fG1ujc9VLq1HC7VYakPXHE0pghTM%2FLISHbqul82rnyNK9G4lNz5xTLuCE7G%2Fi1fC6lnwp8bw5WlEA2cpOj3XAy6oIAhQy6HwcESlpBm7X4dij%2F88Cq2rZcHYw78L6LX9628vkfgyGft8qx8TYh9BG&X-Amz-Signature=5cc3acf14f9e3a991cfd2d4c8612702920638b4e04208c24898594cf898d20a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

