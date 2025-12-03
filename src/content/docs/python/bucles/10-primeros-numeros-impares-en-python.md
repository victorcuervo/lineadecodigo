---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y33VXV2K%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDGymRLeZI90FfuMG8KL%2FomtXX319LUYIgDJrn26jGY%2FQIgTmw2711mG%2Fg32NZlYXB0DjdYdcfJDcsb8VvEH48A5Esq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBdhaYpFlCm9G8uL1SrcA4Pnn0ZCe28UQ5Mf%2FnwUgPdTBQ8%2FQ7qqq7l11V4XEhEOPYQ4XK0g7JPBk6wcUW0vw2gvOw1ZpPifgIPap4XokR2QZ4KlUOa4%2FJb02Pv2jjZj%2F5xAzBpH3Wm%2F%2BRX95WeiDidmJStHvs0%2FMGSO1pjkyM3CwVizwWSPW4z7Hw5eOdoOn57b4lFf5HW0kKg6qfoWihW9b3weMtc2gw205%2B9QEy%2FlvLyjOTaqPT%2BqQ3hgbAxjEqqRN3tIgO3Nnv1uUoKT5pjSWYHyuudspnLw0qOdSp%2FncAVHUx29K6pUwBa94qJEzr%2BNqcp9YniyYIkfzgxysJIEtfXYTzUcB7nH76YdcUm5yyktIOezbcYqV%2BpfNZOFfuG22rVmiahLzSaP%2Fjfm1ZKzwVFl3w%2FQmB5u65i%2BRCqGIy7g0OxWIaD9Er%2Fn4%2BGIc%2FqqF7kIRy3YuPz2FRdzz1QqE3oH2err5EM5pQY3pX3eOGOwW79jL3QbIc2Rk9yEQxOH5Pv3BwLEChJ4EPrJYepyHk2%2BK2uVPuAWB35iHLSiojHGsBz2A36%2Felusf0hTBKakaZ4Wno4gIVmK6USXceeKN28zSjb8lM5D33VwUumH8SfCXnoNTyCAiKAojtC9aTBpHYHlseLG08wrMOvcwskGOqUB8348uhwwxvPOUn6YoJvxqQzWT%2BSzSeV8U95cwlU9YQM1KYpmw1UJc7sNYbh04t6qAFOwUGBG6viOusjo8Yc2%2BaKFX1cG6PpKXA6PRrQIoCyEIbFBTsZL6k1MF0dijLrXC2QcG%2F5DrmfT50kUUK9O0z7LXVsDYFJFB0iUq9dUZZwc40aKbLeIGMUA0t16tyf4sQ6KlZEqy%2BVT%2F5ymVKTuWDFKxwhC&X-Amz-Signature=e98200f7a500527d578b42a0c31f47727b8dc6a43db819995fbd42900de29a40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

