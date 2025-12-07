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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WASQLUMV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T091509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAE6jkk3EM6953YIuQGYSAxWUMz9nAuNIeYwWSriGRyzAiADthAGKqb%2BV5czVFOkY6r3keGlb6jV48kJlAmxB0U0gyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbyFyP%2FaxXhs7vWHTKtwDc0b%2BPyoo8G334%2BocTe6k9fOYipAODlKwRNHstQBO%2Feh51mSc31IRXQy7YVIaAsoZGP1yeDlPRUkS6Z7Xc7Xu%2FFD8D0EBfqqP0H6iuc%2F4thN1WyHaQ5Vo0A9nYisRS9mYP%2BwJSihjNlKYrMsS2BLpYvkROUXuZtJu7BxYgyQJzF%2B431LQQCt8Jf5fRMOG95PwrJYGKLTNOjKwywoEV5dA63PX1EVmBtRmCoR9co0tKMa6li0w3mTJbuV4jnKGg2xBh%2FWRXWuJRGL1vf1ynCX5ERsJ1i%2Fi%2FRuwxW0AH4dmTuVKiogO9WtLgbvByc0uZb6cMy%2Bk4Yl5px1qBOFZ83hxKIfpFL4C8OiW%2Feea3cO07IvPAUSLg21CUrUtF9e7z9DdDBRmNkc1xaz%2BGbdBvA79vw0x1vnwxCOzCfWJdne7%2FZqIdYnwECHZ5TYQ5egR4kyTNqVMdLsk34IKh3schn0UCVPiTnaZZ0FyycxZXr%2B05ndM6O7Q5tsu%2Fu1MnUbROIGJEIMw%2FAso9VyKNQ22f03x%2FiNugcjtYWe1aS0%2B%2BTNtbyQUJYxdKbaDvXQKtt0FnX9bZ2t5LjCP%2BUtw%2Bw17CCPbEP9XfFhP9D41RcHoS65bP4KZTzLA2Epzc5AGu5wwj53UyQY6pgG8F3u5qF%2BHvggHJNguA1EQ%2F2Hdp5%2BTwJTQcwjstWGNeTYDZ9L4vYCwXCVwEqoDby%2BhWTrCD8vCgAYaTGjSA2bKOvKJtrUcXVwxWWfLHHP%2FqRT5k89km%2BFTnRVU4S0Oyz9z0oPt0Irb1ak6zKjEpTTbH81ilpB6sy7oe40AGnoomxpuwM04Yh8eOmr3OQruFPX6OERz9vbROUDI814XY%2F7wZP9%2BNQmO&X-Amz-Signature=7ad29eefe11e44aab12e2300e00d09bb163c2c4cd86fb10a56272f3a1a6a1460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

