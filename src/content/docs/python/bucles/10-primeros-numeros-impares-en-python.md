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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU6N656Z%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T194650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECl2rYgxGrTy%2FJri2USIkBaw675DEU8FmbrN8tGKuEgAiEAv7uhjwUixSKD9F%2BCvoI9SU3mDx4DIE9ldAgMVlr0AoIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3YxanZlijnw8ZmLyrcA4WJSB4%2FV%2BLzUdL7G%2Bgyi0NG0KjFATm82WazPb2t59o%2BrM1WAom1bHSE8qVwwhjh411Jbb4iuLNv8tbj4fL3s%2FOeNF%2Bsx6WDNbCQ%2BpF4xIAxveZgboW1NvF3g04ZNdT%2BQbmxksWz0atXDAt%2BTJmRGtkKJEPe6EE7hn0mZMThrbeO60vMsIM8xQlg5fdLzfUAcsqKTh08iLV2pO33YU%2BJB7e0AgjYGfghNZDCRJRIkkpqMoNTk3tVT31Q%2Fm7owNbsV5usJ2uRBw69H%2BMasaYLtK6C90DwsebW6QkZPrHot%2Fv7JBrb9QprDS6pxyxNSnLeFHJaBTFft0RWcqKbtVSJk9hr4bqGt402IEiIsczTQNHnS6JxXv1wyhJqRUisV4RPd%2B7C2RUdKp7QCpD2WobxCFdQiUv2b2jf%2FZ6utuSNO01jtWL5sr2psR3ZNpvm1Ll91Zl2GVv%2B7r4TQAOZez30DF5wcI%2BLy6k7AV8kYm6YUE1Uefufs2LwleKXp1HwHS3bQaCMFBhhoiqk%2FLnSCGPY5gZ1QNtAQ1TMoTbZJyMgRStlXCIngVKbZgwbFsbrvhDjPqpHqNzezwhIW5wRQ%2Ftts4dmq%2FrDExMRcxgZcdcNJQj6IjnY2CgHuowQ%2B4KpMIe03MkGOqUBHAETGkOeZbsEhMNvtup2cgaBM06x3EJSYb82EX8ew%2BFld8ZdyPffhwWvmfs2X%2BK3EAZ4d4pZ7WG%2FsvUNCVc%2BtMUFc6jIzMJsqm1aNYxgvorgGkGBuecP4bNhT77ftAO5diP4kxEDiurPAXgVaWmTBglavd%2BXlRVqhIiaoVQgf2xfwuRUUJ0nqTRyebn96lV2uf0RGXIljwW0OCzyrxlWJzqBSSJ4&X-Amz-Signature=969aee23165179370a369c715222347d72ed16b36a9041cbaad1888f064ee0e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

