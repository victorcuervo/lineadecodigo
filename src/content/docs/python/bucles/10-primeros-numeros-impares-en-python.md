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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQUTQL5W%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T063942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FWXMP0tBz0wYKMUT2AXoRLw64yS0Y705%2FVMxRrg52LwIgNu%2FYdvAqZB0xQQFB2lb0CEF8PqUwyx6byfVOCZkWTwsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyDMxP6Gs1I429YNircA89qDPJWmFd3%2BzX1h2f96v9rdcTjWBQHPdk6C%2Bj7z8oVOcco2MGJ0gKh%2B%2Bjgb1sb5x%2BA2LiI6sUh%2FGq6RlbHq7zWxUmSlJ6f5HV6C%2FNi1En7iNwEUmWrs%2BMYcUc7iYRoqp1SLy5Iua3dY%2Bv8ow7dm1Dio68qkXRjqoyW38f4%2B5otBvM4gB5WTPoXCK2d1L2%2BgTP%2BqZqDClX85lkBsX27BHolsXIDDXid%2BmaYjcRWAeG6tjvS0CiREBAWeiTj9MvPkuHvtaTjoqbriBl4%2FXJyp%2B7FwptEnD5qn4GMXbb7OWtqQ%2BJ0%2BhLp6uWpFJmuAl%2BENcKs2QG9H2HTWp%2FUBFtwAVp7%2BRTpZt8IjY2K2hNsVIFC1s2BE0gDOrrped3dVrazFByXXw2caaf1W211MoS8J%2Fq%2BGVPX66cbOmnHI7MjA%2FUIzBcDLdYLTU5T0megu7Ot4cb3IRlN2J85511sdG6wvctQX8ovUlhj1%2B0Qgf4TfHZo7vhiB14s%2F%2B%2FzJN8pePSE4d9WBSa099Xfb1rBMv3VF4YnOLF9m2P54qpvvP8SS9w2NE2m109GxjzTkeiYp2TKHA8orHrJyrWtaFBbvsl1suy%2Ft8XScQvZtZzrSjBIZ7Owl1Jy%2F0B4o4Vp0%2F3qMIKc1MkGOqUBvR5jPjbtYgORU7q6S4xfFh8iPcbxFME4GAfyMPK6GYsyC0xwKRZq2qDhaRWV8Z2Lk04qo%2FeVTqeaXu8k4PqIdto3OCvgfJ5hHHQXAAHQK7L9tGEXH7WXKZ%2B5HPOz8VszLuvqs8w9I%2B0tSm%2BUOXNkFPUFUIpKnSCMbL2O3YIAP4bpFOo0VyXcbt%2BrL6p9uQ7MknbjgBHn9JBR5JoDbSWufTe5VYx8&X-Amz-Signature=358df22b874b3db30f0ae4fa0d035633bb955625f54a7fb64d43156b153ea666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

