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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN7AZGQG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T175147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCICfcTWvN74GYUMr3eZ5uQOGUQNuYUj7LqTcNGXhfsFtIAiAVlQ01fZzaE6D0hG9SPe6zRrO7m1EuqcH8UTdlvmpsuCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMi2Jn%2BPQQJeDPRdHOKtwDPUsYv7vtDo4rRi0CTSNps%2BF554FGy7wJvYJZOskpJsFrTfVi5uKAJ4o4vSLGrLo7WZ5vJ4xfa8KtJgXplFz5Ct65R%2BnZextBuyeR08k5LA6nwuNl20%2BiF6Jy7gJOo51OHm0GDvbtXl5qwGGE0dTrOyY1kc7h90wzH4g0BtlMIjBCmTmimA7oD%2BHDqQEQHFYlPU6FN0xhR%2Bmr97%2BnIJXyW9SYoJwN0v7AU60TnsE3c6mJZa2AQJOu%2FXDY2mXPtkC19h74v%2FcFr6mf5fyx9c0gk3ALaCUw0tmnHOwRnaUDGlwaDqXwDNUbriSpkrztTq9%2Brc8LEogDAScIHTm0w%2B1DCqTfFHpFO07eV7dK%2Fb7PP0xlLqStnwTmmfZEKWDUHgBHzjQxSgYG3cSxsG3Ad6Ca7%2Fg4INUbUAi1ajjlvr%2FFxWyxWaP7k33CVJmLhyHmma9xeUQcvnd3PPsRhfo5cSMbSw0A6p%2FlkzsoPDuIhVNBG6fZ5nSrAkj1l12aL0w1MMxK3Zr6WwQADQeLl9ljpACr2GcTMvmsVql8wqugbBKjHk9%2Bmv8Lt5pMR4rmYYpmzaqjd48GJrPVoccqZuHrKtw7m9pHFKkf5S3cTh%2BeRPoStxROEf5qu3jEdbyPzDUw0trByQY6pgHHuPx454waW3m3BbWJTi9cpxOU7J%2FfB2kAg4rGZqYR54Zy2JiM26U5gu%2BP7TJaiejSq38wWfyC4b%2BxZz4lYy2CUUCOgcXw%2FWb6sK1rXrj2GenLhw%2B0699690oO4ycEKofWHgPkXfz7hv72%2FOPpc6njXj%2FF8Hevcc%2FeDRCbP8bCOl2af10XX8akI8H2Kp%2B3%2FMmQ681UBTU1AUy%2FxUlki%2F7nKUYzDOwi&X-Amz-Signature=54cac98c5311715a763c9eefa8e4398c7508f8550eb23e99d4de51705b44b8e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

