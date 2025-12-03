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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIO2A2IB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIE%2FrfPsdzMVs3ny%2Bh7bpfb8ROo0c2TOxRfBph2sBEGVAAiAEynNTrZB8ouMesGvUzgAfg2%2Bx24PLn7P%2F17qyRMFJryr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMLvxzSvhj6zeSMEyHKtwD%2BYKPEOK%2BA2%2BSZVOOrjXimKAlR%2FIw97BC8wmuZZgsVDkVhX4%2F9JAveqwJsWRqT%2FPVzYuwkmU0z94SDYL9OHtFw1QtJ%2FjYbomNX4O7zDZHyRM41gqvDwbw%2BOt77lNRyOcp8soKBD%2BCwZhiemFT9SMJIUsaKnpooKvjnqBLEd7kc%2B%2F3eYlDzkAdroHRFkarz1HF0EYRAobRiSUzfDlzW3%2FBH2IgFiW2NT%2Fmh%2BLMwHRQi0kMQnTd2yqEpz%2B9o%2BmHp4C8Ptsxi6E2C%2BYB21cPDEaz396qTCMeP75NeqEF3CZ%2FiNKLD4p1cXO2ZVRyQzal%2FWu%2BXDssldb%2BO4lsdJfgOgwBb7G8mN%2FtSqQ7f%2FE%2Be7PWqQ2APuokWarTP0HlxRlTOm7ZYAOyCWk8UiETqeUIkaSWgd1J49ATSeqQ65riira2U4ZEHfRX7XNUpRCiPWSwxotX7MAEuGcfAdveIH%2FXTcdb0igrSokRxcHfLMgFlJ%2Bm8G3L%2Bfdd%2BqAgMLeJYNW2A8fc00odfIqV9rGUd6e1gnsJbLZJvhFpo4EhkXXx9yrTg3j2P9WestbAvbQwajWduHlRULLrsWDM9alM%2B7A36xuyGV66EG0CnjgVJ49I4lYdKMU3X%2B46Cb8M1Rb5vTEwtPjCyQY6pgEXQZVswYbWph69cbypqXIZisS%2Fo0xYou%2FZVWaXShRvSoYJI11oPYrI1t6Ua97u4hJ1r%2BzdWfEyMgJqXYlDq2DsbgSXpn7D5NkOZaAzC50eVfgNERt%2FFbu8TMTZ%2Bbe%2BsVoo06yAICwF8WX6nZOVJi%2BN%2BIp3t7lp%2FmYycFDevE8Jp96ZNcYLnQThIU%2BSYSWlz%2BTf6jLxs52cWMk5mGAqLnHbhOmha1Ky&X-Amz-Signature=06573f8186a3cbf3e16b0fdcb67b0c338f3660ecd0d52108cdb3599857a0d5e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

