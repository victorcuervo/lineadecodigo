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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUP6RA2Q%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T104836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIDVqosxYwNPW79LzYI52UEEHN7hHf7%2FmhaQG4ft%2ByDkOAiAiI7Byfr5vaEqA0wg%2B5TFFAse4Xjti5CbuQSGxNEMrXyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMBLwjiQVurSJaQgDWKtwDeYf2T5w%2F8oQUuYjLvMKHk9ebzRj7Bo2z1RvaqKUEFdqG%2BpwjAssmeqW2PVXqN8pRCcw%2BKgpg49xAYUqJ5jTskbn%2B6u99z1YHptpykB1O4BXdnQwq8whe3yrpJvbB5dZyLBseW8xXQbp%2BRjLoD8Ahb0%2Bt0MczcyIF8bKloNP01HFdiqN7k9rDRJuna7l897ztRRxNVJSYSTHBe7g3BSLPtBfT5iW8UrIuHTVl8xcjujGpC72zA1Z%2FfupW%2BRTK5jzLW9Yoksskz2dwRWBFaV9dvZvc7nGW0Z8uj9OmUqqgjMrgwbIaTIv7KKcUgX7oFtkV0EM4NSvMaNvXmm4taz9B3v2vUmk6GsuVw2QGPOpczrdv5wOIOGVBm8X40gIw7J0LLMzkcN6R0kIVwLD03mK4w0Ds5bV7u2YhAVKT6cwAtjcePRMPEMQJfzcJZJKMzBcQppNGggtvFnKTlWPgxeAYKO6LTEjTBZZKlpPp%2BU59ZfKq5KIj7uk2bs8lGzrnkfzGbaFH8M8lOMXpQ9PHEwOGODh57DA6MtFxY8lvKiONn34xE6j5Io9faSzIxeINJjV5a2tLp52%2By%2FtJnBPZhp5%2F121hB9QQj0g%2Bhn4iB6Mk5Gxmh34yM0C6BOSuz4ww7pPAyQY6pgH0k1xRhq1RfgHuDsIo0RzYorxEPoJukTiurWfuL7RjWvQb7vf6oOoqnIY20ocA2hyFOSqT0Nx%2BE6jK1Ti2itXRxcD6%2F4HBPVvHDbSw%2BvTp%2FpRW%2FDKBwsTEm8rmSa1Yaa25qGWCo2rQj%2BPCBQ1rvUIKbBi3G3jY8Yo38x3wP%2FT0R6lF6ouT2RGyCY6S7h1Fhk%2FSsEtnBW%2FJRRUydp66pFKL%2FKtPxfu9&X-Amz-Signature=a4ada99ee2083d48cacd55e140c80723c2dd27aa41f19affd3399ec8f2d14a5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

