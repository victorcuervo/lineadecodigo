---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QZC7YSK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDtZ%2FENiRiJJGuSSSVYx1Sh%2Fu2jsAIUKbZJuysGPoIz1AiEAhIqVU7UtWwNAPqTJ4B88snIhkcT07nSyX80RZCWbmHoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDNmFp8hWApZb6Zj6byrcA2Ai5DCGQPMBGo4A7kbdx7KM58mnp%2BFYgTaMvVY6%2Fd4Q%2BWc%2BJ5IQq33Vvw5B7%2Btx2ka3u8sp2pkFJzS1S5MG98KKMv1EHYb2VGMF2gXtJEVHUKhhTQPo%2F1hxpjFqt2gSjIVynhDUT0BCooRRTnkra1InlWKjq5HQppvXItYswa4fwGZ3eOV5naAPD5zRtMs77SeiE1Ia5mehhtwQ%2BB2%2FR4p4TLB3dGKigrIb66iM%2FJSQiUpRbts1QmZ5U8CO5rKGV0tdhId5m9fV%2BLgwrN97UKloXbiJqPe49VjpBUlByMatIbP2UEmkqrtrKKE0o1WtAQNgXwVeSRvZ3J7aCL078r%2BF5MxO5b4ptx7bdgY4sP5%2Fc%2BnYi1JA%2BjkkqCYL%2B0D4cl%2Be76Vx4EQll0Z%2BBJymnSYmbUgoogAAh%2F6mAmp64QqEvi4mKXXpgvulFoC%2BU2CGA6TumayMv2nczQVjUUPZ%2Bkx%2F06PC62k2d69t8QzvSOU%2BmE1fpnMbYr4DIH1mPpap5qTuqoOIfvA9Prh7vTcfWPiMBwy4aDFH1jbUhHvmMa4E2YTonJp3m8BoF6jkZpB7CwvWz21ln4ONY1kpFkXOMu2i5cXqYDw9yvAT7%2Fdtx8Qt1owiIQiLQwYCbcDTMKnKxMkGOqUBOGImOLgoeBsCjY%2BFkVwZ40YPwTQzjn189FDKlFgxUOICsfxUD19gXMg0SS1s%2BZdV6wlDRC302cSlE64mi5wEiM2vukUWrD88XWQjXMZzla4ho%2B1tOWkD0GgI%2FLC7GfxI2DGFCZZAmkVxG6WCps%2FanAArb%2Br35oEqx96mDhWXhQOdazl7XjPbW6M6vW%2FZQlOmYYIJyKwvXqy9ApvpzXswhs7IIabo&X-Amz-Signature=e5d2d71f42738c9d2014cd61eea6dcc86e64aa65237e765cffc65163e9fb8bb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

