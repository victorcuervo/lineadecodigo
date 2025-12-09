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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IQLHLIB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvq34VP%2F63kWF%2BcI8qm2RTSWAf%2BuqYjLVsPXOZ5M1MAAiEA651YQ4uc1HyIA9BAH5ERB0vi3K8e968cc5L%2B4RqemdoqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEFOh8R9EM%2Bh1R0nSrcAzrzWMUcOO5PRg%2B5UA5xDuSu2KqLtEioKCofivH8m%2FkCqG8MZanIWEzHWKpeVg5etTrWssyKakoyUwqA8P3Ue0CouDDIEcSjMpDKKxQQu0nbbdUuwKj1a1WLeI8FeYSSw0pLW1zbrqX%2BO3TIJpGEbVGC72zndrTPk7yfYFLSA4j8GkR06MIg%2F5OaJgHoIkUPh%2BZVFnKGn%2Bx7CllAwrh2r%2Bu11o7KigNNOcJoDqlEs0rMNqzEbt0xJCh87Q2hJOgTRzYymo%2BrzysVEsADgp%2FTrN0Uzqx3rApLy3rDz8jHsE1nd%2FAARhQS7wPggOmo0KUydicyO1ald%2FaqFBktZc0514l4BsqAGifEefHM7EW8u5yaXXgIlt6MGHkMfypp%2FdJc1sbVOIJggnkggPHCRRRMYFXeh3Zx1MprZsSl7OFfy4j3Up%2Be5o2l3n5oKu%2BatUvvbDC0bfCjswBn%2FTHLHmyuJGw%2BIT95aDTeINO2hcUqN9wSC9yrZsW%2FClqwpHwe9Ghu5iKbzjDf2JmvXCnIYYG6uAhvO8MZUz5Dz3bc8AooL%2B7lRWtKdmv3okoVU8UMfQLv8RHog5fSAGuREyUtoYfuenZ7MC1ezJxKUhLJERazaBxuNHRtEq3IQXUHEFRBMM3C3ckGOqUBmfVUhEWxUmy9yL3lR05YotAFS1eNVkeIp%2BLqiuVsUu10y5FQvr9I6KycrtI42pQYWekF4DR0MXIciTdiCGbwSLzqkLh1j51S9iDa9Wu0MRVs0Zal9GkOQcb6E67%2Bd%2F4Y70iE9vmGpjzlckh78E6NygF%2Fktu9EPrbw8Nw8bkqQch8eTZgqVLTzqQZTg%2BlYMF1an8Eiy3Y5uI40MjhoT9L9tNrXFUJ&X-Amz-Signature=6c366db3a4fb02a57d7da42e541c20f951a4c625b3510b731f529925c80ddc46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

