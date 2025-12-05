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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FO6GVCI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T014239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLBNLNzAPDVIG4vqRgV0%2F37O5ZAaDbIj7g9e%2BizK6J%2BAiAA%2F1jeAXHdF%2FtB6vZmvBbReqajprtAVJ7AZ2vp5rwPPyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMir%2BgmgEtOqCElBgPKtwDjWJ5%2Bb%2BQX8%2B3WeZ7lcCLB7vJkIGJUUlkeZ9K6ihMUXv%2FWG4Upg64DtDe8DHxBrMw%2BcP2Z2ZT6LwBdVOC5KrWsK5BxoG7HB3qmxK7aRldjH5Z0NAQszFJWCiykbUl3CNWXzNO79G5CZqqZcApbOe7%2BFtEOuo4CKMk1Y9VdZDvSkXfqBDrJHYHuAByjAI3785E35iuiF160eCNseQRHi7wK8OYDj7FxFMkdvWTjtfr5ad5fljw2XMGFLMBKSieuPKUzfGoVrGZhvP83A%2BkR02qN1vr%2Flu%2B%2FFOalwDVixWfdWhjTtv62d%2FQXhprdqQJYpNO7koIz59OkL4opMALHtDOmb87b5oo%2F%2BR2zfOUA05igtxWAEw1vYMUk%2FQ%2BgtCU0lzSYok9ubky5hFddceS7s%2FegT3rVuAovilUscX%2BxMpp6X4nH6a1s7lExftTgpDjxbBj%2BHEGpLLmbNgbfvyq8YCP23qC0G3Qiro8XQm%2F6b6FaFmweUrgeiIraiNtDFLQqhluYg0zsvOgJ8xx%2FsBnlc9bs%2FHTx7769JmZJ5bktXaM8%2FroELHZBiUNwN0gO8pfNML7%2FtigIfIFmZ%2BDcvDQ2cl%2BI3ntFJ%2BEZeRCuCLXBQUsbn0GjxERkIVbPB%2F5RYww%2BIvIyQY6pgEFodOEqssGv7Y93umkhzCEakYR6r1J0XqFYMQ3n7BrypI9j61APLTRW4zxXXXDZKyU6Zjx8g2l1%2BSXSymhlphFVb3SHgOhJmBht8QwBLelGmSpVmmUe9dBa9ryfFzWY9pImbY2pZaqkUzwfzXeBQf9696QMooOH1MeNshfzn7Oc38J1QhhWaEM1c%2BKT4ORAyMxlNgQ8BeaGJLCvULrLxn11N6ubOPk&X-Amz-Signature=3c314c450f31f4481e61b2f6e65c213bbabb10b068965237ffcc2027e932b227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

