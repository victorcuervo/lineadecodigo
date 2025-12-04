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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HIOXN5V%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T234807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FcR2ymNJMXh0xQaxXLawfK1TYk6uaVQJhqY6TSje4FAiA0RVjToXiXDwCcoNwR42QuWoEGYzrKW%2FQ5%2FKeB5BYF%2Fir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMG%2FOqDtuiUrpCsG11KtwDNwj4fOtyShX%2F2oTn4lgILbMV0UdXb%2FngI6jdNbsJpF5sLVTaJXocr4mkQG5Vnl2%2FvZFXs6ybhHQUeNGKxo03%2Bg7b0oN0daOGcg%2BLttEaVg03rJj6gfb3fb%2F6X48kq2Mt7WBndqRMycdEcADgXEGBkJmq3W%2FnM2gnhEH9ZXstQIKCbqzsG1KnMfsRM1u2M8AvDQJuJrzWPcc%2FmveR1DGPQ6QbYD9SSeiUd4FXEVX5wh0TjPAzORq8QaKuS5tmSat%2Fe2rNN9ti4WgeP7SP%2BgIJbm34V%2BY%2BKPgaZIemwB8I0IYFQ0k06%2F%2F1JvURHhcRBHiQoujzB5%2BMaxZWbyAdYuKLETM%2FpyO%2BmTTVWJF%2BvbBt1Kddib1AFDjcDZyJ%2B%2F%2BqvYq5obWja0f0Pwl3rWsuxu3uVNuJlNj%2F4i38udY5%2BvRorJfInvly4OACRXa28Tqb6ftuVy2f0nmFTMiOwjlFv3%2FK2NmGLqpei%2FoZCA%2B0uLOm6gfMk6pm55M%2FSamLaTYVYmlPJGiJwHr6dLwgRBv%2FI2yvSC%2FjmKPPMBTGz8%2FrJQOdVBTTiH1YIA0AkiR1CrtdQHJGm2ZO5xll5ZhEpFRWLB56ZbgvD0cm3gc4REkwCGCJTmdV2hpTeeGCDCXFtlEw%2BIvIyQY6pgGmWEWtGEYJ8GSQb6IB%2FkLOp2ft6tekGw8QwqD%2BVGjkyo4p7kor6YR0XQSn1GxcBuJsely8490o5wFz1CHmzHaQJ4LzxRkwjZSSKe9cN%2FRK3wBhX1neeVYVz6NBJzOlh4y3REiwdl%2FDaLJO35RIo48YdD%2B%2B7%2BSMTHAETY6d8hvE0xEGy0QlSmC%2BtRZtsdve2qBetKkrp3dIfj%2FUAtc1yls8OSy%2F6NyA&X-Amz-Signature=971040aeb604b867593b15991177be6269466fc4bfeb1ac99bc9874a0645aa1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

