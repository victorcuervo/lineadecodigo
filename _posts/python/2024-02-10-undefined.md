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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNIVFIZ2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T172350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDIRtS9S2WX76np4wrmyvCg9Pr7UD7sdlxHEcW%2BZtjHuQIhAJc7%2F3gJTkCr7vPArxjzcUuJm3lf1f%2FygX9%2Fv8hrq38UKv8DCDIQABoMNjM3NDIzMTgzODA1IgyA6J7MIZy2ZnDRD7Eq3AMV8x9ZLhMSapg%2BQQpMxOApkDNIfVLNStXT5Z6GRE0mlM5y%2F%2FKMkiiao%2BGBJXXK7%2BHozJN7xSMhRdqIzmFttwV2eadGaB2iGFaYR%2FmQdOtGjlW1QkqTRt0XXbEjW3KKo1WZ3Zd8J15epia%2FOb7qkfwYfhKAXgmTAEsdH27fIDWs%2F8u9%2BjmpykKOj2Pl7JyNxLZbOcT%2B5TM8JdegMd0crBvInrm12d7T8WIS7dNsAvut%2BisI1FITcdAHsNzDLOAOXI3ROVqmAsFN9M0XLLh7ju5z8k9KJqx67hUP17JmQl609jNg5FLuh0J1veYyXTm58V9O2gknsCpSnVkBymBr%2Fs1g1EElpbyl41EOp0rnnbA4DtQdGevKreCp3%2FfE92%2B2bZ2W7KO5U5Nq2cr%2FGG0QHp8nEK5CAfopPnTG4F6kDCY39qbv815%2FxDjBj9d6w%2FS859743M1Bw8RwsrmW2Ur5os70jKn%2F%2FxQ422ZbLNLbXF22%2Fabnte0ZTTqUt1ebH0Rt1L2aQSnuCIz%2FLhBlJ1IgbG%2BvzHkCqU3QPKaoWE8E%2F9QSGCqHYGpvfY1ZohAQOr0ji%2BAUGGZRn7je1%2B6s7nBw07DV1GAx6Eo%2Bkr3oddanq%2ByG%2BuRzKqbUEgpYsuPc8DDI28HJBjqkAQVAvXxrnneMJ9cB%2BcBN1ZWyzJURbD3EODCZzJeLgcx%2BnFIrlrG0c2uI6ytu4eiIDgxT4sOYDPQUijbcq97jBY5viSomj9b3itbMXhgOkinDXFxkPTRtJW0a1JK4mIYECunJ2ujWdn7Wv4DBhWOulqTTH2GiLU8s%2BO6zi490CHX%2FEX8GmxTtG1W0gIF%2Fh9yWNFCeJ9bYfAcy2OgBH561IJSwB1%2Fg&X-Amz-Signature=00f51c6ce7d4b8e8531e806fe77846f5ec5122b6e16c47c43afbaf4ad6abf71b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

