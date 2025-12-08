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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIJ3VSGZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T211350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMysHZFhbWDvPg6ZZan7Z7HaM6mcIWlfw52jyGrQTyFAiEAs8eiQJq9wH0WvkO4y1bdVIJPkjBdorl9Ll058AfzdIwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLWiyHlX9ZD14ZbqXircA9lJQpapiD6%2F%2BfU0pg9EhEJMLYGbli7l15Zzso7RnumKrnYcQhuyODC%2FpyGEZYRcGRht1kFHgZCmelR0S5VdEfm9dB6QHdnUeQx4wM7nrKKVu%2BAAb%2Fv8ndo7F22UwQIhaMYogFoeuH48oGizBe2NP%2FZKa6GNoASwciWSIHqXrhuZc%2FH96XN7opm%2BMO8jTKzQH%2F7OiUlvS4LQoLhL0SF2xpZkA6PhbMehEqRrJRFJBT5mcZ32dA7MW7w7xkx8OOHHGRTbnRxA61ECMz101cqT3L0uhDhqFT4ITMNrWUjEHHd9eLixcWzDWM0zfkKkF%2BuEisSCQOjeHzok9w%2BXB3sAP2J2mHy1anXbEOu9lKKjI95Xc5Th3EdoPGIQfZSOJfBx%2BW%2Bev13TsWzqC4RkMyBVD6nhnxopsf8AZMYi%2BhI1nFIoLqT2vrMg7rJGFnWCv36bfF0bcGxvbHN5DmeumjBtjtM5QIHrgM19UkxC50mi19oG7cvSIsbGLBrAs5IIII3ioR3J0%2FH9CdOUqPGSrtxydMzIvWn9D3iIgC%2FNxOzt3PwmWqrOCZSUHPBo72kcefVbjuh6JXnRnYIF%2Fi2AdircjISDNnvfpFckodIbAmW0RQGsv2VOb9fbo9orTcxSMOXc3MkGOqUB4GZfjk9Gq1OqoBpaqGuAgqEzTGTAudnmUwR5vlQd%2Fe6erNTsVrYmQpzxllj05F5LpwufoAs9B5mgsgTv7xRykaalXfkx3Gn0HGg4m%2FgZbuNbhwcc3dD3BAMasfnGgMffhhYTIOV%2FJkT%2BGJn9r3Za9NbP8zjVMZ1IqUEnvfNwRk%2FVa1gnBpaFgBFreKvBOf%2FzOv8p1mbYUpmyaCSk%2FS%2F3GEOsDRf2&X-Amz-Signature=09070e7601c3b568a0e9222cd9091ef4a39a258aea299461773bc13bd0c8adc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

