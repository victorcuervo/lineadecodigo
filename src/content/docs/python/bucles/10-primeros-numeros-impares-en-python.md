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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTFBR6L2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T121956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F6cBK0aK91R4N8l6hecKPAZJCM3gPbWymXfYif%2FhoAAIgRNN%2F6%2BTee61Iw0eeUlk%2BrFwKNnJlt0xpHI767UBKEmcq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDJ1AQo%2BVrU8eORUqzCrcA30bUtj46w2wdZiypXQ3aOq32SiOw%2FGqPwWHt3V9x7MKj6ds8gWdsc%2BnlMgDB4x0GkI%2Fk6cCqbJYdmKt0mx3aNTum%2FxUMiafwW256GXIn9lEsduryWvFTXdIaGFSfdvgs%2B4E%2FxbBNAY1XRXWAvh8o1hqwkyXQ5uHYxRPI1CXsk6VTQm9q1ZEUXKk8YtJIdwC%2BD6SX4rvl%2F9VQGPhCSvaKjmbiytmmAF9Bx6%2F6InJIYbMBY34lixb2YWsuFW9eTbJ5uyWcD97WhpEwXoiIFPOhr%2FY0BP0qDilC%2BHi71Nn6Hfp3lwslSRTp3rZJjIxLZl4SfAdqy1QtFrQ3%2BZdzTwf%2BnFyH1DhwS0FPm07gugrsxaQdVL8Fnb6gNr6xYedP891auqM2W6c8rPAmjdTUPMhtotg37ay%2FgAopxhbBbTbbqjxEdEYUnd13K9mJdmc%2BWV5povq3tg%2FEAibyADsWyJYXDsSWedi1i%2Fyb1aWsuw3lKSaboeR0SbZ%2BhPnLQCd%2FYgYP5iBGNN9m7Fg3ozChS7LTZvOR7C67n7KnM2zjSkNVzWH%2FNIasKVadWqZQ%2BggCnBLCSwslHlTxwnmjYw%2F4xL1x18r94A%2FcvXcRo9iatSFgBoO2QAs%2BWV8lMGisrj0MKam0MkGOqUB40e4T4wOTJoBkvBU3sbiVMLv%2BwnCt6MA%2FmjbM4Gy6FfloCnadUm3jta8fW2m9DwFOXOIkwSS87dINTLqH5bfjnC3oQgXOt62lepM121E5aywWKfuDuG49U5dKYcd80vV4ELf56D86sBzoXK0DeViJZh2%2BfSSI5wiUn12qp6YNcBsnze7l7UVDcTwcZO3%2BtfLeRCLy31PgmCDSCdxYPeVLiUUjRQQ&X-Amz-Signature=802420f7e669ef9a3b66908d405599de13bb56e9cafcf5af325c6faac8a54394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

