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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6MGM4DC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T054639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIBAb0LLghHRr%2FYCRsfvzkc0KGHqQVGjgc%2FYMQk4bs%2FcoAiAJ9n3yfpT0v44WaaqA%2FohvBakArUIzTepYllJ%2BrYYv2yr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMHpYVTzRvJdIFM2B9KtwDDIz1rUB34ANJeofBcFnXXC52Viw6d8OWylnPKgc%2FCv%2BjGaf2EbWbkLHV2fhCqV%2Fm2l%2FB%2BcDE7XhFmKjFIdemB5IY7Z2jxLj%2F9Z77b4VEkqicSqpTRnBh56jlEHcyw9w%2FurueY%2FcZV4iXEQG%2BOViwu8OgWKDKVQ18%2FsNdGQMNiWz2ia%2FxyzKH1%2FreykTYQIKzoxqTmrX7Dqxc0pr0SrgyFCCz2A85ssTXCYIcZzwzXDIkDT%2B5fbmifyeqpsPAXSDnJ3wXiOHVuKp8nFH%2FR23%2Fh2GHFaDfsdYH73fKo9s%2F1bD6NQbfoRkMUrCAANNJzKH%2B61Yu8esfefipmo7tdbpSe%2B8g833v5uSXH6MH3Lq6tpn5FpOiQX8nNHqHGZ03hQwVQh85ipUeVkEX5m7qUHvdyGHmjeMJ2HwXD9Uo5RQlDwpBBx0exocF6lZ8%2FFBJxT38608AzAg06%2FSees%2BZFxBHkZ3YTMN9yHfglDHNAKu%2F1YHUK0vn5sNZoyWpQI6xnLooqmj2jmTnWA03SD%2BYswrVtVDBItWOQzHWVjA%2FXva5VTSr6vvOCQrBbDgm8sySDAe%2BAY%2FCDV%2B2iN7Vkvq6ujIhWqs82%2B%2BRBojCnqG0THjfXn63ICrLyvIouqzeYhYwpJq%2FyQY6pgGBY9w70UnxLPTjb87oLdxT55zsDElnuoWoxq9CN4ax9pGVMUV2DsZSrnMxVFPlFi1mDcr4b7PQQ8dseC1BH63CwtRqoamYjHEQzWLt5x5AMH2paG59piCXKlSLszd3OunJySIE9W3dD8FIC9BtQNlc5dcY9wK7cb5xEahB4eDjjGuBopMU%2FO2P5HfCgBR1azC4megnqG948JjyUoQSrlRWN%2B8VHRkz&X-Amz-Signature=59f92465f01fad04e131f4cd2c548168c0c772a202fe955556a15095bfce8ee4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

