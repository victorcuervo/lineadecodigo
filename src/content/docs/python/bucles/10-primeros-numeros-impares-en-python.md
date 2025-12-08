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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6BNLT7X%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T133830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMR88ibZjKTgruVlAOS5n7ZXQhG8Pc1PeHurFazDLNUQIhAJQUUFwc5xnGvjuT8f6KZycjymhsM0oLWtpMFrMgXhxyKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3pkm1NSZCCLL3twIq3ANWNI5vJgI%2FkiA2e8f8vwCZG3bgZrwsP9mX1QKP6thy9pGvCGoeh3r5Vqsh92TS1JmQ9X5H%2FKGc%2BuCNcFTp8Qw7WCUl2%2BOgLHO8no6U2tjJ3KTgVZAc66LK2CK7Q8ea%2BHmY96GfABbqKm76G9tV6Vj4%2FXj1V9LV1BG%2F0UoZwLVt55u1ZvxFdBp0ZEC9g6uZBhsUjDfk600NzMFMMeynKcTUf2BqPmXyMu6HMJIPWx18vTYW2MIKHcWBjJ58VbgjhTW50IWsV2txYz06umEKdUczsypFYBPQKX2nH85IyIS20cRwmtmP6%2F07VipUhHGlSDryUNtmdy8oxrStFR6icOti4LIQmtRIe4bRNlHPTjShpLBEVaK40J7UrYW6x%2Fgekj%2BoZwUNCGtW1pW82jXL9iUcQIAZm1Bf3XrBxbGPNczG9jRFlApXtCMDjF8fG%2BDowgI1ZSR2qVzjPYEM8E%2B1OJkHQPJH1r9B20KPPPkHuIrL28B3KboqJXGIUfb4ygzoClXQ9%2BOi31FPxsACmwDmHGK8r1jSwl7Wu%2F9G8jaK7wKmQlfZ6RZF3W5mqUxHYtvBomixiPFFAgQFdkB5mCuAaHN25z7EJ2jkYU8fyTNz1Rnf0VZjzlznKPQLbN4lqDDRj9vJBjqkAd4PP8R4aKcjYfudrT8BGl6GjYh%2BoNkTdCoJtwQAYoq%2FRu%2BShprc09VAsqeybmWMnn0bSmD8pQPB7%2BMdsf13iYtKwlD7j%2B%2BKj%2Blq7%2BKwvcp8PJ1%2FZ08n2dwewpU0%2FXxCOflwF6z%2FuzKX%2B%2BoPb7PaNkIIZpWKcZbjkJBL0Dt0sy6%2FC4q2GUUbSL9qXxKApa%2FQHHIAfGMEuUEK7qjamqy5n9wXiCQQ&X-Amz-Signature=e5cd824fe136442f81b910df4ec0b4e446f9d91652aa04de8cab5bc25c69ec3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

