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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LWMPUCB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsBkoJsBIpktt2Qfx8jB4SJAo07zPNrRZM%2F%2FEbBVD3%2FAiEA4fZmxk9W8EWFee1svWH9T3hime7%2FxUWYB4D%2FH57wGncq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDNTRok100fVzq%2BUF3yrcA21RttaMBHYHu%2BjGUMH4Ye%2Bapno0Rjri5V4C%2FfxmRLBz%2BvWc6a3a%2FE5UuMNn8JaJPlhWwZ%2F1kqwW%2Fx33qEVDvMDJVHkDJaxpednBRLLdWCrR3wNsWOsUMzjuM20jYTSOgiXlzexrcfRYZ5EMTs6uHe9j8sD7gj9TD%2B1tMKqHafnauWb3qOHcNWsOqhMTkqutfpkLTq61eOrZ3fMc4wO756AyQJSVWy2QQpCBDIGz8c0uGhqwIPHv%2BxVxh%2FL5jVurXkHxwucYr%2BPIO3AIx4nK4XBMgrGpN1ZBwbJKREAr9WiMvGr3kc7xGnNlvUL%2BRuv1aAirTLl9BlcBxmPF1elhYc%2B3cZoqVsnrMkVrW4647tHEbdVjvyifIIDDQWdixWB5ORJHPV1%2BJ7XK0bwjdPwqGvwO2%2Ft6WJR%2F1c4aooxl7sOjncSROd0bB3gUbrJAlb7CX2FkB2zxRHQLpkgSG5acD8TdavVtJM7Jj%2By9foNWAhgLnk3o0Jjb2MgkwOerkuglSXDV1qyFyQw3PhnK7ufJT7j51ofDZZdveKjN1%2FtIQRBUeH3woYOgbLxxoZwMi1NOEwNAKM7iSZZBE0JodV2qrUhGs4Os70%2BJUg9z0MJyXngxyMQo6sF5hk9ArjZ9MOTcxskGOqUBPj9%2FwdKoozuJ8beI8GoaezC%2BqAT9Foqo%2B1HO%2FByzeAQnlpR%2FF1XRwE0fR3Bo%2FCAINzw9QwiAlAQ3ucThvXs%2Flc4jAz73%2F1pa%2FUK17168IkawHcL91RriV6%2Bw8zTbwKF2UCUyibYnurACTH1DrhJteH%2BvqIQH6XbvwI26d2UIfYo0PXyloIOyCS8yXNMqIWUfWbEXzDPVR%2F%2FGo6V1QoYDIPnPxoz6&X-Amz-Signature=dcaa3b6759f55d9f905bbb95ba98811e84438e1d9a737b5b2510fa504f334ed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

