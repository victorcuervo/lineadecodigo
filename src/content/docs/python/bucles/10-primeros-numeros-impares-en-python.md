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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DJHRBAP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T120339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwDgxRHFOS%2BO76agF6Mjoh0Br1qFG9oIjpxhhIxxXvwAIgF8PV4P3e%2FGwztk1zO8kwt57cK%2F8g%2FqNZ%2FLIMqHexBOEqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFTXoSKiqhZTCFRnTyrcA%2BAYcX%2BkLddcXfsTPzx4J%2FUgEReOwntcYbQ6RCLlb0NXvvNdaHNK7YM%2FcOrvsuzdf%2BjcMDeyhGudxLbKe2EM9fTDBpX36B%2Fr%2B3nRipaZSAf0oVdRsOJ7mfLmvpynR9%2FLfUuzaN5AF%2FFuP5TJ6nPOvZCvSKcJTATPL0B1Afy7n6X5BT4HC4weTREu52cWyrBN8GkonClglR0sEqAFCs6C1ccTtIshWKBRCnm3RVWKBtlpTjDHyv0%2BM8TIqGtyi8WheipVvkUeBCn5L7cjLL6A5jB1C%2BDUfZoeXiFj1ThKrhW%2FFZUInRq7aY4j2qfAADVUrQpIIV8INPfpJlzLjHZYrjaJoGOR4SCzjCCdV%2FrXT4LtwgsrHVd28I5Dkfh6JSd4I9FKLQhUZTcVii5dN5waP6P5g9FbsL5x8jePbJSkzANlttKePhP6Iorq4%2BL5CV%2Fb8U1QiKTSGRvBoj8TsIk1hEGDmETw1eO98419%2B4XqWN8U%2BgqL7abMC5kAlihVF6%2F5fObwIsQn28hdOlV9UtqtjqqSCQeqGWUu3pjtJ8ZFbrTlsf5jFQcVExoBpegwFfMnCmS1A1k4dD9oztfaOkYJdEqXSR1F91PDu1u6%2FUWrBwA7zTCGOfQcra7RvM8kMMea1ckGOqUBUdFlFYbfBhsDejx3LEIM7IQZOsuuHcF0Eobfhvm%2BgH9Er04MejqFKFQLfhxdIfmotFdXI3FNsPNFsy8wSY5Xb1wXbeFiVWlLxr4m%2FEih8GHg4Vn7TNZNPlOZ4LggxAvgcsby%2F3XYEg9%2B9ZSGKmA469xeYVXUXrT2h7zCBdgOo8L2bNc%2BWmyM6zkOP9QvnM0EcsWj9a3Pmnoim31FTYxeTqc9E2O%2F&X-Amz-Signature=2269790321dd7f47176eef9f10b5d5819c215c441214bdc4fc4141c1eccba221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

