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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W4TVMF7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T172511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDGp7AayF8365dNjwqF3lpYQOffhKoSxsj%2FSqB%2BJyNzuAIhAO2gxfKFFswnY4kVmwQG9r0lbnmZgZ7eUDUNTAbQfh7KKv8DCDIQABoMNjM3NDIzMTgzODA1Igzyj%2BzvFZOQgW752lcq3APMYk5oUXff0dYbizaUM8qvvaB47FUCx52Q5mLDwIteWpysAsAyyVxyXqqijVXsgRmi6Kj9j1IGnHS%2FVicUbcFLkOMsCRkCdoq4ZUI10hO9wyzGceYwlox7z%2FhEFPXwWD1Bw9YDmbb7UEL7jxpsmCONn2zaaHZ26tX2m%2FmmCZR%2FPMNix3GE9ZzGKCApbdOUch2xlSlNoi8SlabmIgDg4L%2FRNpXKvD9RRuCDDV0tYal2MuEKtdHwUwYa0apfczIKpSgS5BCINPQEONYHqqO4LdM5qIHsYPGGzPWMLnPX2M6LAtO24fhIn0WopOMjjLh5FzRhYGEVt1%2FS%2B95pXkK%2BhxTQirJSQupHO%2BcJ%2FXLupqMoiI9Ad%2F6hKTmaqeg2y7iU2KxwypXqbWHTuZ3bcKn9UhVCrYTsgeD4m3yGQzSGnF8O5Om3jiwEPwncsThTB35jCdJ%2F1UwoCotgnO6cVRA6oFWzE8GQft8b3rwbRGpuYuxtACLau1pEPqHtfsVPpC5LglqSQVng%2BsyRIrhUkceC%2BinjU4bqQFhlI%2FN93b74PXrQ1Z8px5Gk6pPB4udPONRU2IOY2cFIcnKtcq7MQjKk6dvCm2Xwef9WjX78OPLkFmncUrQu9zmf0un%2BwOdp7DDC28HJBjqkAXv6sIjLgyQJKngjcEmP4JGvCdA8isPAAhCaweXGCQ6yq%2Bel1FqqVaAoFjL0l5ceej15wf7DJxzuQq85GjWCjhkm1uBeDXbZAMYOYZBQLh%2BCoZwr%2FefY6JecOfg4DsmNNFvpOLa33F%2FKbJBUHGi32PRwB5M05oMdFs6S4D%2FlLQZ%2B9DGIbB0yK76xH%2BCgFd73A8lbHeCZ1Ehn6KlR407dbjoV36da&X-Amz-Signature=811468ec24b7ca281b31a9184730ae2a3cc756b4f1d3093c0195ed0f6a8f30cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

