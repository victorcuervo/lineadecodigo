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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OE3VU7M%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T041408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjMpFgeNFrQ1dz0NP%2B3z7VNPcdTraIP9jmmP1nap98PAiEAhuIrrMACimpikg0Nx391oISFkOxZEtT5L5LV0YxUhlEqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsxx728PN4%2BKabpFSrcA9dqwz4mRwwrhEWnnuWnN13v50O%2BtaMOqDUldeszJPk3yMKyeHzgofbrVopvAlNzo3b2JQgtaD0pgOJJl%2FkLbOgdbpfTUilIP5jheQUTq%2B8WksVGQewG%2FG%2FVQhvQKJ1%2BtyW05V6A1Sq%2FX5lykJlkiCjrPu0yH8FzDCRfDPRV3T57GQFcvOiFwkNp%2B1q81ES1Ji1rY3HVo%2FJthk%2F2C4GYd3ljRm5weV1LYi5d4EvQ9kT1zAUCZdhNusRWsCBjnkqbXaQbRe0o%2FyuFPPZjd4GjKX0IYtl%2BRYedrpEVWgKJwm%2F9YKuLJEpUNk0t3%2Fs%2F0CVZJlNexQU0XAvaiEi%2BUt0mRF8YOamBAIjXldLk4OcIuDXLo8CAr4Nsl5FTPcYtAmmVFoOiwhIFe4QBLAJNAIqZyx%2Be2QoR8%2FsDWPc326ocNlgQgTkaqP0ZqFZ%2BU7z46Es6ASddpIJokgPh6XMGt5t4rjMbxOrs4jbC4w4hHyAqhft1b%2F8rT9oDWYQB0lv5dHgb3%2FJGXZd8%2F7abHdHJqGlC5slBMMJmnmUojSWw1rqgErn3bDAIRxz4puDqCMGGRpketeyjCgaB2DkSJHJ3aNuTIcfCcmmz6LgNkdXousBlz6q1CBo5VFGwWDZboiDTMPKt3skGOqUB%2FOM56nq1QabvaGj4iMNh%2Bu3IuRzCmwIAG%2BFgwh2up3oi6YJXrvA8oU1xmJptkFqzAsmuNPb%2B4kc8s60cxJBe38WKBbqJhfM79NtDnwKkbXPepS1F0d4y7Jw8JQwXz1BrBeYUTVlD7u8f3zNMBPmD1lU%2Fl2Leoy6mrqdS4h4Re30HeScEucDUYpBhgl4uTDCKAqK1vL9qISooAkmAaOSJwkzD2D4N&X-Amz-Signature=ffa40ca7ffa31f83f30b1d8aec397ec660d5664f5c8451204c2f9b263e0c5858&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

