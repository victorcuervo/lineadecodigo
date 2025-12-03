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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DRKZ2AX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T180640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCZ2G4PRIyVB6qpXNBrm4FVi4iWm%2BIthlgJUqYVMrwKXgIhAN2FEzu1ajNd%2FjAx9WSoNwZQur8oGly%2BlQRG7h5wOhG%2FKv8DCDMQABoMNjM3NDIzMTgzODA1IgyLA8O%2FGj1k2d36xtoq3APEv28bvlKwtAnACGuh0VRX6pRmxMccR2GsutMtxUvb1mXOGgncXcToFxMtnJ3U%2Fnoc8a%2FxvUB5E%2Bzjc9RqRsLVnOaAe%2FXOLPzqSqT%2B0FeGz6KcsUYCCKkXOcXSQSJHJsq9di%2F2LVDLIYdMUfy0V9zYP2A5kezNkYcZbYTq6IjPvn3uNtjkWm5or1DQ7jHmQ0DQFnF1LY%2BpJlW%2B3bvVO9%2BC40bgwg47hJwEmyRV2MQhLd2mN7GWrUAMUdN1DOrK3vbnioXNTM7LWMTl5XrBQqgIfjsRu9Yixx93rKnoUoBLYYFyUEWa2hLHzI%2BX8iwZi1DAg9yv5LGGw8v%2FAtpIsTXJYAQD%2FpgYYaRaJZvpsURApapRShxV5YqVauZ7AkZcgUHHcnu%2BhZ21m6WVTPJu4CdqYJvLERszmA1Xxf6Jl9DkEJ3P0i9M%2F5mlGWGY7IHkUs71Ek4zNuI6fC%2FARb5ivTbu8IwfAsBUcxHVbCUliEyzPvC4S1wVnyMj6En%2FpKv%2BqtkfmHR9qBBE0%2B8ySLTWOFxzcOrFyGEVGWApZ7qs5pB0kdokz3u5%2F%2FPrkAQZdeN7hnIaLGW%2FxDGmbWA%2FIu7Ljc1Z30H%2BqWJZ7skDkfSUZcWFSnnPpMY3XwxyTGl%2F3TDz98HJBjqkAZ9HdwHYMgXp7b2va9DNOpxYxutTboghG5K7xCTlqjFuQAY04f%2B0B%2FvJpbG%2Bya5gaX%2FK41KMNjTcde1QupVSToXD5gqUPKyn3syE6V0U1UYB6cO0LXo1J6vz994fP7jHiV9yvO5r4RrwObwB%2FH1gfosltjGEc1xs9SvDaBIKr6rG2lGH4XK4agsxh5ElhyjzEG9jwiw20FnJsNlmJGZeQIAd4sQT&X-Amz-Signature=c020768f78ca9f55525896a5822bb81e1da40396dc5244777caeec6081a8477f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

