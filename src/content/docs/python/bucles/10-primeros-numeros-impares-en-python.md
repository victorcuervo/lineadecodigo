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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PWFXTHS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T180140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgubUvadVgWzt%2BzeKJgDbJJT3tcD%2FUJJG2DnCuDHQGEAIhAI1EkcgY%2FTdrmOD6xRHmsth%2BQzLPGPrfcleeG3QVVvqfKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwimEsgIvQW4hiafwYq3AM9AL8C10BIrYt84g9MbfTR5OnhAP8Q4R9VibuCrHLrXQN2GgFPKy4r4eONeqa1OzbxHIsUyNstlt24%2BTiME3VzagBTiA8XtlHx82u5k%2BfJEzr2%2FMxW9KFTLNqadYdOCPK9CJDaOrT4qRyxwDVlP%2ByEUtMKFdnMftVc2b6X197FPU6GlTnjL76rmtLMITGfvXhx9M8q%2BQ2eWBvmITFeHak89QlTC%2BIS9tt7ho03aKkAlT0ddQQcwEiWKcTR7%2FEgqnbtbZfMk1smLKW25KgLKHq8DP4qNmIkQb1A%2F3wB6WaZ6BNWAUJCKWfBAUGoqeMEepWPbHO7dcpDgi%2B08KpV0aLRXrBFE7nMQDb%2Bx0RpLcfFJOrZmhYJ%2FGzGxLP%2FEbp3Pt%2F26q6zrg%2BjDcs2BaLOWoGMgmR3%2FLxXUhg3sOSxjKzephd%2Bk%2Fsaf%2FXoEaLxjhQmIDKvb%2Ftj77Phn50orfUB%2FNhdr4AZmxwmS27fg6N2xdZ6ZWgCbask3wXKAU0OCWweKMv8fWx%2BMEKdxEhOCJK9LlgifJ8UkKx%2BgTlGj0kZ0T3jTLwr4sj%2FqA0lyr9MpvG9kaYniPABjxVH9OuBTwr8rjnlLqGshj7%2FqM6pglCA2dtm%2Bvne9H7BxMRtVooFATD7vtbJBjqkAfJmRdHAU%2BcZrhpm6cczcSWUcvYaMaGrOjUqgTrnBmpX0%2FwAnZUCliE4NTWjVm4%2F4UJmRQ%2F9TnfHkqwTfwbaqUYHDvUwKuMsv8J91OqKeWqjNJVwtOhPIHVozQtpepoesLx6m0pcQ%2F6xaMRL7DiTmgZXs7Yc7UCfdZQ07wmqyFecE%2BJrq3YkDBiMmIh0Z87ygAFNk%2FzO9ilDm7%2BBGNTBcHDXmy1T&X-Amz-Signature=2c870b67402d9a4a71b33dff07baf084d8b8e4c09283b8cf9b463b850c039e72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

