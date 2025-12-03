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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMJUZOWK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQC7DWA6wMTXPJiNvwa6n5JGURm0s%2B9CoyIPAUwcyVAlJAIhAOwgVa8loFFsK2YMufW93neLOG7ehinu9Xcrpc%2FB8lXDKv8DCDcQABoMNjM3NDIzMTgzODA1Igyr0FSEtUPcSrINRdYq3ANFOMW%2Be3MkAvgGf03JI5eLlEhP1o6gkbjdVgZWfJgjsa%2BBnQ01ct3wusPh9ZN9%2B3%2FP2WHxgdSdYgD1x5pfSnnlWabnO0bNpmx9bykRsey2nRcWhCujdcbGjvrt6GBETGG3EFmSKqPmUJV9MQxPysM9i56N7XkjocRysKVCwSBU4FKqmF2%2B2SK6J1nClf%2FFQO6RvPpGbIA4cqXx37xVAnalzYOjetxsn8DajgIwyLlX2e%2BlCunbDaVXWJ6U8FAStW9tHY%2BV5lR6bGvgCw9sAOY7rQfdaJ3eXiYNJWOsDf7uSS9HoTayCJovlToPCI8%2FxcIF7h680RD57UY%2Biu2JzcoQR6dJgVun0slqlw%2Fco2yd0ubZogAF6Dsh9yBpeT5Bv9pWeGkpRkwkJrBL%2FP3jLRVXKLPrAYKsIDVCS%2FuWf1fSiAI1RB2p9a5w52Fowd3a9%2Be8Vy3ji6adS%2BUaJ6%2BRmwfZFim2%2BfPdFMGfTHnbT0c8BDrJUdOaZSMx9seUP6xW%2Fo1dIQd27naTOou9jbeEuozdORWGywgKWmRBb1mkCp%2FXneWHX7pZHOjbgJJhjvcEbA6Udb19r2Jc4ukdzrvbAmx438C1APuA%2BYyqqNVvXUQOoxIZdOrXYEP8B2MWsjDm3MLJBjqkAacoo3f9KhPnD89xUbOwSYqK28NAzFvyuUti85ZB0hM0xwYVxZKpboNhQ5%2Frxt08J2b8LY4NJYEZIJCsBIH0EFtn0nGwsiN%2FMysdsmMstEza2SpRaOVpWNCClSPb%2F81iBkVjA5lIIDpeTOs6sljD1neSZxJS63XBBSCUmg9q1Altb1e6lAPO3%2BruQm3eEwpT9We4ZR5dIA9emxq59bJtlzkFo01J&X-Amz-Signature=31419272fb274412e032cca8fc59e6715d6478e214bf87b0a52dd1342dc33fe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

