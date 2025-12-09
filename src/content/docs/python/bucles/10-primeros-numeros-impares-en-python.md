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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC3H5LCT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHNo1wi%2BmY4nfMN32yLng8%2BOCuNpFqJ9cdfuEkfv7l4QIgMLy3Fz4todr3uyWsBBTa3HDk5DKTGShuSJv71nSP1XsqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpifornIfdM8lTZByrcA%2FGpXjahrIYpus0t6FbpvC9OHQyg80Fls8ET71xtel7ymUaPrRtMZ96YRZHJQgzMb8r9cZN155t7qMVUyTR%2FONg3c41MiNzkHGC3gVwkRXUuurXFEPTXwjqnu3UDZnOeNbV8yrKK2JLj2Ksqg34tcETrT3yBM0VHWOfGWqizWVOMPH6ySHZm%2BtLKFyvIjQWvjJ5GPs9%2BgDNBdLCGnzt6V%2Fp1RMo95%2BPeyo2OB8WE%2F0UueXynDdy4ZVPP%2BifJmgGVd9nGyABtukcviSZn%2BCAlBKUmU32zvN79Qrkq%2FWU9xk0U1rRkuan3hASZ829OZS233hiB%2BYaxIbDFyi9r71eT9kd33TRzuew6tfx%2Bpm970%2FTGEsPSCZua98IgGpeBILIgrlSkQh%2FKyTXjc59c65uW4zhrBy7eqcEupNvKyeXlUTJB7Z%2B3f41Ojw02P2gQ3sSJvg6bkegBA4E35BQt5WrOwF1e0HA6ilFgD7va%2FUvYbLbeLmMFpLQ1WXRxeiOqN59sTm19rkhn53kll8bR9mXBt76U2ocGDC3IinBd%2FsWciImX4HOqpU5%2Fjgtbp7oPZK0Dy2lZ46nTjhJe7cY4mhCE4KZX250GYd7OnGVupDJKJ2Xi5EKfEUeWdXvysl0KMOGk38kGOqUBgTQYLx%2BEQPOTPhzZ1gP5N6g9wB0R%2FchAyiVQN2isLYnm3SeVQkNSKVHxDAloLXejgQBLlYttnjbtjNbvpUSJHQ%2F2by%2F0z1pLiiG5auqXGEkcczlpwYZDhDiVB7297sJkpm%2Byo2y5LSgbZn5xWPwtOPixV3zmwCfDWmPOnhhNb4ueKfwUxAoD0gGc4rnNWNlm6iu8EQWKr6Um9Ugy7XjeW9flAJo7&X-Amz-Signature=63330b89df18758a188379c8462387e28896a8c0ee7bd3499d35a9f3d4badaf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

