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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SFMJDYA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T074815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJssXn32gSZlUy9bJl5I%2FN7%2FBYPRH9fyvhtAw2ePFirAiA3Vtne7fXedAMcsfPcyJpbKyiCLGulOWeGohaX5lr7CiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FwQvk%2Bj%2BP3iKOLczKtwDt9k9ktVJ%2BkeVs1ZP5obJ%2Fv3dkV8wVESwfGK2vW33yW0gRkA2Z0JhhqDPdHD%2BjsJ6MI1cEw6NmCgqSxkMvH%2F%2B4jp5TE6M4MqXFQEyHFrhooH%2FUk4Iz7GlYmLJ4f3A5UpoOrLtaZrJ4bGVlogrFR4BfjXOK78nTHTPHdKDX2ujyGhWBT%2FuT3tf6Y%2B4aeo%2FTZjTAnx6t%2FCzr2d4LjGBEEw2psKnzyMYRltWpHXCwg6Vr22mlVHngMp9kshtBw91SI5AiBWMGJdygD6Ox2fhcIHVWowQkMWzqyn%2BEc%2FUwIEK%2FAnseYnHiHyuHvumNW8ILdOCiOa1bd4LoDEZN8k5ma3pIpnygqOoAKmUD6yIxYzQxj1MHCAOeF5XrnDGr5wntyazrx6bi4zybURu8GPYWACC%2Fv%2F8Hr5U27%2B1%2F91O5eVjLRI1DQUax1GyEowX8OUiNr6De%2FcihcmXDqW8Cb%2FpUqW3GUncgA%2FBkYIYQKW5o1XpxqwrOfKoOslQB43d7NH5QvmrifzBsPycDw7LMI%2B8F63gV1DkHCC8zdKnWOxXwIsqmY7kiyELYA0ZKNexvfCrskhLqAVzWXauEtUzpt%2Bg8C8q5d9tR4JaFWV9FXzm7MDLf19TJtryUAFCla5i6%2FcwjaXfyQY6pgHx2t%2Fk1kPWhbBN%2FconhuOzcQG8F3yp2eHsCmc%2B5biYNhMhfHNJbRBnqusqfdo1KKdYYhVpU865TMTt8n%2BJyKpu6pDGFd9JsA%2BFFnoCXYC4MP8ibd9%2BcDzAgIik9GEcUdSy5aXW1yN%2FBKBySnSE%2FxmqvVI%2F%2F%2F0TbP1M9HDCG12%2FYCjZ2e4mrXzCd3Uxx5snYoFZ6CEtRMG8VHNtP0zRekUIH4jUH6qv&X-Amz-Signature=7f6ee0d833f349a75b972acbc2690c23574d252e535eddf8a4d6aed747ca08fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

