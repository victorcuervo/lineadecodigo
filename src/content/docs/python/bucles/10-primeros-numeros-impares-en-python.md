---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR66G6LX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCIFJ419RnUPf6IZRNM9TBAjpBAzfpBcGexSjAgv7lvowIgN6f5gvz3752%2BO62m8%2Fy6yXjvx9DdEzNirElHQWZkqx8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDMVE6cS3YERFBC4DwircA450KntcvUyHYUMi%2BtI4THsADXzdXS0vZWv5T6QUUcTjmteLRNfs39HyQBa4yZaeTJa7Da%2BbD7N7%2FAmTuTMBwB7rhTmjFGIVTa95NsUCYczyC%2BFSxOMVoCyjBNw6b2wXvunspcF1AhkFV45Vo%2FZl9rYTrwV47gFBB4hH0jTsyYjj50AQrd64H0oi8PS8u6YfIrUVSjFzs%2FcSgR0jUqna3lVr1l0Fxl6%2FZmDwjLXmCKjASCBgltRfHC%2F3YC9wg11LEtSiCC1KbYuQ37HZ0jP6%2Fc49mlD6b66wHbDprSI2CBli1hyJf2CXZMdhz64WhbicPcOXP5Cr4dzmlo%2B7n4%2FUBMNP%2B4Z11KuZs6GkTKH2nC5TOHC0pb%2Bq7K%2F2az4bspNe9wnbgKCQ55BKR3htJOg6ZZG5AY57zjveTgzIMmblA5mLmvU3xglgJK1iVD%2BplkpnesSxFZqtsDg%2F5HTTM%2BOUxYkhYAM%2B9b15AvxRx3Cc%2BonAZIZ41yx3eFcy4kvzWOGL5TWm0JUf%2BJmGVs5u8Yh1Y6k3D6hTr6a0iYr%2BK1zWHaKT8d5V%2FAP8Y73zSwoljC0osWlrc9j2aGOgUX2pyV9Gzq4cZE2b0z34LcwKRaMAzxfTj3U7U5MACXRLEzgIMIncwskGOqUBDOcOFT%2FhAbo3Ri2VdPChF8W3JZnomjdyXlyOE5tsq9WNw%2B6x1HeCOV0qvNP78u9hBnXhxQw5MkPGbyVGIn5T%2FJCTSbICLc%2Ff1aqe0v%2FtwStQSEc1IDSL5CrwkhRP3W9YHt7djTye%2FTqpLYLmpZwyh4HDGA962WDqh3RBKpZo414y5c1lxbOdqaPg9%2F8sTD1BmWoPQcdwZxKfdZbFn6LjbwOL4WLx&X-Amz-Signature=89f1729bbb8091fa328df09326bc71653bf8cb4880597bf2b8c0b49d64b40358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

