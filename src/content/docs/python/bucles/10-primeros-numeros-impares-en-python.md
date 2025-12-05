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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L5FDV35%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoxnE1O7GyWrGRcYeCPB5CXLmDYhZ3lB0uZ1W4FV2e%2FAiBsd5aGcjX8db3RGbjGzZzooxn%2FtGpXczJ5OPicDe1P%2Bir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMoYoGIInmv5Cz%2F%2BssKtwDa0tV%2FFLgPFML9zbORI85Pwthrlxh0EgFq10spK1IgZWqNbE%2BY4CH4B5JUk9vCHjb2mOshd8xLaRvMfeoAPhai%2FSbRhvzeMuh5vU9%2FCsZh%2BUhBxB5KilOYicJ1DsayhRot15JLxX%2BYm2xuU5ncaHUguu2isGs%2B8jWgrFCI%2FxX0J1nm6Gg%2F5Qx3fRGO0swwAr8eDs6wcB%2Fh%2B%2F5st0JYHnjqgY7ozDDQai86ju3PcwyzAIq927kRk9gFrGm7RyV8aMKU5Il217S5kPGZaMPBunXxnff7bxMYfvg9b4nisJvYF9pI7Vy1ZVhD219Joa3G%2BshQKcvwTXOdI%2BQ%2BNOwwZiq4KIv9POm3xng%2FUBCHoG4k2xZOe%2Fz1FMoWiaika%2BdpoBPmIDGXwJOuugyx9jsHuIf0oewUPGS%2FYoi%2B%2FDCBHgPQ3btGwMf0jJzJG7Y7xqY1HTV9409w%2FJTew8lHhBktNi%2BCGyMzDXl9OPU7%2FujD3svNWft7pvCACsiPE14%2F3aSIoOLyB8jVPKhKCh98B%2BYe9g9i0EAr52byef%2BNyCckFoirwvoEyyOnpVx9xuncm%2BvqDXbTRrT2d49EY3w6QiFvlDso3%2F3jPMNhDXFLM%2FACTgNjFC13nLPZqtC%2BT96rdswkMnLyQY6pgG%2BBr5xJsDApFKUVy8yqygn8%2Fr%2F5q8YW%2BCtpsTWvOt13%2FPhIkS7UqF7J0k4T9Ep5a2sXW7Rf0bpg5c4nNDczeQydRb1SDfnjpCCJXnhly%2B9vfecO%2BRGp1O9DkLHsCC14K3m66FcTgfaxRf31Z2QC94b%2B0qFtdkSy63tfJtJZ0iGhpy0ij5fNAu0iWx43nROU5cnZvo7VbglUaquW9s5LW1kIddlxFg6&X-Amz-Signature=984f128960e30b89ba313dbf9a805cb4e132d99438e3b31de41f53d89167b054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

