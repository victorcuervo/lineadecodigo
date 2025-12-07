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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBDJHVAC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T215950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBK1G61eJbyFEnhSOfbX4Pyle2sMneiZk20SDkqoG%2FtpAiBM9%2FBQ8JD3sD1iFaixuAtL1RZ0XC2tjMOQROgBlgX8jyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOsJTqyP%2Bx7M0FydLKtwD74AEX0ik%2B4HqjM1OcLelk2%2Bl9qq%2FSDhD%2BQgNlJFC27tA1qIKis4YSaP7bTS5X8XDE7L0Bou7iZmU2wpyM%2BZuCsGIM6X0xLKJ9QABTP0%2BrtvDxeqyWriiMHg2Hs9kTTZkDN44S11Z9L3X5cbDr0bkZ92kSDviLf%2BhFPcfQEkV0lzGU6cvATWTFGZIX3YXoKNOltZc37smSVl3Q0QgxxxbmEUOWHCDTwh0Fw0lhAUhDvYie4DXJzlE7ZKQDsYwzp4qWfOh%2BEJ7co6e1PdCNyRpx4WPmJg5FLC5xlL%2BpRtQ73cM%2B%2B8otZOLTSu8q2V%2FH85DHLjivZtc%2BiBsTtjBsD0sW2vpzHUV5in7cvY0o56UWtwnzMbk9xjSsOkDqYJEnLmwPyYsSVTlOeXQYBwOjD6T00dKaG7Um2wyt5HdRUP2idB2RiNuNu%2F9pW%2FM%2FMg04WnpdIz1B7S0kgQL8NPCOwn3BKrUqVXuqCab7T9LVNQvCxmoxJmZ7kg11MCKBP1%2FncjANNR6D3d6%2FVPFhW6V33c5KnsJ6l17XxBP66%2BRJv1saew66CaNP%2FtRQ4a1%2F5fymaWBBCw%2Bth0NG6vrFLkeluTZBuhq78A3%2FTqtwUd5qVmjoCLpkflX48p%2FdQ1MGpUw7cbXyQY6pgHgK%2F4l74Pxr1M0oxBNJfpwCkx8kGgHL4YPPqqcPQ0TnM2UHYFJEfAZz%2Bm3hHzn5rDgROKhEAJTgbjL7GdnUuCphRMMqR%2B%2F8M4lJRA%2F%2FuTCTBDRV%2FKqJZ%2B3PJ3UzT9eSPHiUWfy%2FHkpAaKvT5ldkxEBVCp11%2Bz%2FHWp4az3evDSop%2Brhzq8ZcEfcF%2FnH651mmuS0%2BjH8wko%2FtG1ip%2B7wNcuLA1jEaLzu&X-Amz-Signature=3d95820b8fef00f89787ed8bf451e7f6181c4f0ba98b8e663730d5864152271d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

