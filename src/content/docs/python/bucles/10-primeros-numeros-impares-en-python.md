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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657R5QWUC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T164955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkUllpL6hiQJxKD0ENm3E5jLtSAHTTQy7N6ty%2BuqKvwAiAWvVqYC8gedkMh4jGBSXhrllpQioTfdVPNEyLS9bsZ5iqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ3sa2UxVxEAWSmYhKtwDxMMDaspVssTg%2BsZwt3iVwuipsroM9YOSeDe0HkuIUFGsi2gIkxblBHyyMWcUSJ9W%2F7p1AOCQxMGPpFD%2Flfq%2Fdzw3%2BucOBKxnDYAu8K5eQkEFxKHleplHH6QYdyiThM8d%2Bp7aP2g8%2BkDkdgPTP05x%2B27XMA1e3SRyAzr6XkrBUN8GDGtft0MrFTldEPAtyCTDnMq0Z%2F1PyK%2Be3bRjDInCWch4%2BLO05hhYDoMTZL5p%2B90R3sk0aLXQa2m97wu%2FefBtNuxgwTHKA%2BW3in0xtpu4c6FLbWxrJ0uobcgmdLW8C1emXSRtv8Yz2JU2e0cOxzZAvrKMuE4D07RuGBrFkzIu5djqisBJChcLayYMS7Dj1yQufNTqAeO2o%2Fqo95MHADOZ9S0mQRrRtdReIjx%2BH8J22LNKMWlIwTosC7BfuX%2BEzEX2%2F5jaAfrpEAX7i9Rbps8pTg%2By2LQH58QaSGGfhvClezIVNdyS0M19Js1HzysnpEoYLEVkYfbkes6qfvgfOiIKqYcJwis%2Bs82w7jsPY4h%2F5jsiapie3xSySVivxC1T2tZEp1a2dnK46MFWCVwJsxrs67heBCxQ9Vy1dVw4Qied6SE7Oy5WkXznB8Z2YMAiStdPY2E%2F%2BGSUDKuZrxkww%2BTbyQY6pgGAGaqr6J5fWisQeW8yJXpfiSxdw%2F7xh%2FYlUPbBZXYRR%2FxGRTQIB4tRhZ9mDG79IqGWK1tYb2CF%2FYvv%2BrVzMBLVWAOw%2FrB0E4ZS%2BwlHcITPgwnS81of%2FsQyhh%2BT2EFQIeXPlWP7SAYVxDmS878mMyVQtzD26Gyy9w9Q2ESBwn2xxu4qn%2BfQQxSNQwpKhg2MsvY%2B3tcMEtqhTpMOBQI8bD%2B%2B7S%2FUEbGv&X-Amz-Signature=ca10fd7b600526837b826df7797891c5414ca7728cfcccabb5070e15cd1cf230&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

