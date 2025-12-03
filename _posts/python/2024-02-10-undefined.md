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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AJ6YG5Q%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T045237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICEz2xpHaPl2VZtZ7FnkvF4QFfaE%2BkjxUUdLURBYB2emAiAxwSA1uWn0PuXk5wlvi8dFdzO4DdM0liCFrXHS41LwJCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMBoFtT8hngwGpO6z7KtwDXVGrjfiRI%2BS3bDtPGEF0s2dldJEhhs297IlLnu7uoSMIGgKgGwXJKIHviY6kt1B%2Bd9Ny9FLngKlFadviCa0jRwqf%2BElV%2FXDu6jv6BLXyvyjtAo%2F%2FdmiIuUmcN4AIDEMv3bsjiGo5%2FZ%2BfrxeX63VSjBiXcEIV5bNrhc0Pa4uCs%2FxAFkNxU3gnCwEE3ESXAijYiAArfWjClzfaNB7icRoDXjB9HydG1GkOYTXw98g2h%2FeaEEOKOOhKv%2FBA%2F6R0A%2FDcilKuG5YwPSsyLuIwPJ%2FWb7ImPSaSM30%2BqshxIOREKr4FUJnSySxOXo6gNp7YfbTWPQncfUySAF09G0zAgjo1f%2Fc8mjhLEnNivb9bx6MaCtNzziVGCY6VtqfFaEggQGpftPysJq95rp%2F6XAGK7qs2ULewVnFzVf8DJUXnrITYeOxG8abgub9r5bROMHG1%2FPPiGjCHKPTGVCnkN3tjWmJKutpUtfjdSeKOc528bqxHmMyb1OzOwUD6L3uTs%2B246mJMQ%2BkSMBEyoLELIJbSatEGe21t3JlBerKlu9s5UkUtlFsCZYeNP6zwHw8pMRkvBsdqu8Xl8LpAIxJlhNvC3ZnoZGBbii4weDvNu8xcVVLv%2B6c5SOwv0L%2Bwuo%2Fr99swspS%2ByQY6pgFRT41N%2B1DSsL59IgkJLWuRbp6QWmHZdFxS%2F8UIsXxRF5l%2B3VTzZYVFzpf24TsaUMaD6ky8MlcmIORkUVinyaQvWAHdO5fow6JVX6R7EsL%2BJYEKELmQaTfmOpSZLdjkJCFG6fLuH9cf9vqiiH6qkx%2B%2F%2Bmt02TencM9cWRlc7LoaXaUV%2F1XPZxYASuBcGu0a7LvayoNlxjZYsgt2fQls1RQN0k74CLDD&X-Amz-Signature=141b091eefc07bdc7bcec87a4c64a67168189639eadc93f601c0766085976768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

