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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4NDNEIX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T172132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC667xrgM5ME%2B3Cy55ZJacas8tQPvhCSiKNZOPkvcq%2FSwIhAJPrUGfjvq%2F62XcabyUca2AAjBEoqjER9mvAqd%2BYi2CyKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwT0cKMoD%2FmotTLNXoq3AMVQVm%2BDs6jQaCR8aRt6sOrs2a2ESh%2BqXA1DmZLmN8umclFMwFB8JOGxR%2FhWR6c1GTMay8uAJy9KsDp5nJrL0kp%2BUHXgzW4FIe03Qs9HQxssdA22oJ2BnOz5HDW%2B3laqioj7YeC7b6Jsyq73rP7Q13xQKm4ea3RZpg%2BX2Bo9DehxIbdvZNeSRsyOGn7VrinSnbbP78sgQ9M0ZexrrwZup366b6CrC5le75yaKhZ6FQlwjHDOV%2BajC18DnT%2BY4IiyCeMDAgiX9QpWpIZ7PDq0V%2FxWymXyVOLpMrD2AJpCU54rneM18LaOHjKHFLL47YLAYtN6G5K3PXkPanU4P3Kb4rzV4sUuoZvvdsbpi7w2ZX2Hm6pRtLLRVcs7OPiHIEJeMwgPMsVhuOCwidM4rKbAY26%2FxDMh8jvl9WvzO34fOdQxekE1Vntkfb5giY5PMofv3FuKt8wR8kzFdsZwQAv37lupmHHHPZ%2Bn1Nez6Uko8CfUNzjg9dQ4XgwCsYyzGEFKmY2cLUymoDVXK%2BFTFInAUpAcC2qGX8fptoRh18w2DCGSS0GYt5Erybu5Jd6%2B9HYeggRg5vl%2FKMZQhI6gpDwtQKTtXiSitkiWN0iCkFUkzbIC2Gri1l0OMvhpMAmBDDLhtzJBjqkAViqaLpQvHDJ3z1Lm9Ms32pSDl1H0OoXzW5UpxPNs3dxpYpN9jWv3PMaAMb9WvCLt%2BfISQVJFNd3A%2Fnvu%2F4sABFZc9%2FLHzEsS8Bara1%2FKMJ3Y%2By1UOrDCeJKfMUdLwBXSImdvm%2Bgh9ZDRzFx3gJQ6280yyGw%2BkwyhIVDyYkP0XL%2F2ED%2BCYvciS0wf1gFst6%2FrsnT5H9XraFYc8fvDW05ufAwhAev&X-Amz-Signature=f81bb156c48bb86fab064197dba5c3e8c29bda56b0599a6a2eafd21687073b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

