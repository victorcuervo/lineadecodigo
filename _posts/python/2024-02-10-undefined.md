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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ6YLM5Q%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T065918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCRHTM%2Bf4KQsV4OwWQtd5rHFsUU6QSpJibI%2BMbWnVV3cQIgKtCbv13mePKQtH1fMnGLwdwlFv%2FgiN0xHo%2FA1%2BCn4AEq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDK7q23TuYOeoF1He4CrcA5ZVuTVflH4LyPBPPoaNdfwyWgd3BI6hAtHOPnnwz4GAImIq%2BDOsgcjwvXCWB%2F1mRuAhPu5kVuuv%2FwwsHJPzvmRKFagvJtalH24Nxo4OxY1iEvoyqLJwP6FR7H7gXOgZVr8vbGgkiw%2BxFVpONrTgSZlP%2B3%2FZG7dtgodNyh5AUDGk8gRnpZ1nFvelwFiYI3rx%2Fpq%2B56a6zaqlNeTNO3udjdC%2FUzLEJ1RcwBh8ajqdJbmuwdFl9LDQl7uK6oCg%2F53yRKUdbSXDVNLp9WrSXqLLejegnLyhiKdcI3%2FOvewy7qN8WNkuSL9z%2FH611nMhgJ8t1vZAF1xQHbnU7ePix8OU6vQyFOaxnP7JVI6kHYx13jCfiH8k%2Bd5vrIrG%2BplJG3RcftI7oJ7%2BzSNCdHbqyHKqAV%2F%2FuDxLldah2A6Kl0XouEPHIIu2X31OPmYj3iJIS9wx2fFY44JkIqP5hEUE6ToEPxyoinm7H6Yq2tltMYKxxwVkiTD3mKr%2FHto%2FeGOmgo6N5fNUTXb6OxGdK%2FIFbiMRdGKwzZSO0W7kE%2F8EEh6%2BVSFujYeu7MrKO%2F8kPtd%2FPwfZmMQN0DHgRhTtUFUfc2z%2FNPo6CUu0%2Fg7dBDrZlhhJNj%2BwreDZGxnnYoo3rc2AMN%2B5v8kGOqUB7%2F6BkRbIV6glAA59dt2uHQNEf0oGKvMtpUoWh7qpRM7iwgeAgfoM5shiPxpFnDi3B1VOfyO6XIy9efQ9CnJs%2BqWSIfRGQRNkjyLVhQpFxsSXGKCEbhwz46kmhsSQYtFcYaPrlahWBm2Cv4x7f0LHpDvFaA3TeMfuEwpZyskKYv3aoupGue6oJSBI6A0aYuQKjWjzdHiRJCHF5IdeHi5qLOw2gYID&X-Amz-Signature=d2058d72ebdb621b70771d6d0eee373f6bfda8aea297b871b6ff5c519a87259a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

