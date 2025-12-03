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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAG7ULJQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T003207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIBYUIJOzFWuFRj8h1BHnig%2FZc6Xk26koX8BRAv%2Bsj2LYAiA%2FqV6Sa2epdV5bNNP5aLgql6Oxx0FHBsJSeHa8qjvS%2Bir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM40q17D0eByPn5OWqKtwD05Xa5kUOfSygjEqQ4%2FWOmkVGKMTAhNaVLhKIYsDaTvA37%2FmXu8AW%2FPefHQx7a%2F5fl2XUodfS4qSVCOJUkNe%2BqyRa1xvHDPhzv09IkD2zW%2BpqLKzVs%2FMY%2FLAqAzBl%2FyZsyjRXkK%2FzY%2FPLM%2BN6RiTLkwp8HqROUV4QPLw0%2FHOd%2Bgb%2FoauIW42ARmh7OmeIj4DB3wa%2FAvohQsULTQeW52DZNNaTMC%2BhSIKgHXEi1B5GZZd6a6RzyfB114rPh2MyQz7965ioKm9hSjnD1pdNknDwdXfAB2jlXUZuaDAblSJDUobzVcdjlxpx1C6j3CgxU%2BSBE1%2BBmKTP%2B%2F4J2h342ut7bUuh1uD10v5IdfNVy%2F%2FcP%2FDE7jwZKpxcGMKXIdI8Tz0Iyt51tRMlIHxsh2vIG1oUATa8V5usWi52CCokpGcmRup0tdQZMOIr4VPxn4nkENZsIxH7pub6sLzX4cFrMMB2rvUpsXK23beRIO3k9chKmOEwmFkO32ty%2BUci3A1hPPAEmBh%2BnWgpoC1sqwjPYZrszWz0LCdnE9La8okHT24SHsJh9foElbarj%2FyfY0ZNjT%2F%2B17EXEVUQstSnJVmAbvWRycfBaLTDhYl11U0rlkFUFkEf7KaatVrYx1c5x%2B8w4%2F69yQY6pgGHtoc31K4eUfIxqtimp4NTnn0JxydIGG1Om3jJaWQvRUb0fVf8FGtKeJjpdIl%2Fd0nRS2aLH3Gh1Jbeh9nLuf%2F2qKUhG4kM0NDPvMZfT%2FQXB0jhR5xGZrXe4uvsuzFO4JbGd0zCq%2BUwbkxAJIHBchpP6Kq7Qp58W2sbaOBdXrcPPgn%2BsXKg%2F1h0e7ITRMMOb5enZ9C8mAeGOky%2FPScsmqzmPzSRL7cS&X-Amz-Signature=72e50f24dd8dc0cdbe0fc8ace8271b1bbac0689e017cf3c38a1855cf13f03d29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

