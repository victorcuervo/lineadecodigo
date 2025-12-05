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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDMUDZE7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T105739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6XHeqVEVfTY7fFj%2BGaucl5VKQProsqpuR3X2CN2n2WwIgFL%2BAb8U07mETFyXt3W%2FgnXCcu71Dnfk8TpcbngaBl0oq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHjA77qnDGFBE89pVircAyKZzbUEzPo%2F0pHYsnANIhabJIuza9peRu2cAjHqXZEsQ1Y9j8v5t%2Fy%2FaF68F0RE1b5nd7dQOUwm82DRGKwsqqIusCu%2Bmp43F%2BSrcqjxld1NgwJ7abTOfz4jVy2XxjglahyGPVu1L6XC8pLgj0nHeRTEhe8Vnlh%2FU3O77XprolB1u36%2B4ouRwEvCoto1yE8b1ODyr8UGVB2C6GrDmF2A5Nny5gEonaIKvtgdDqgFf75rx6zCxSW7HGIlOiZy%2B5bLiaOUmpgP0eFKQKX4Un%2BH5JP76eKc9H3KNMBwqf0jHqbLV%2Fu5uyKcsnc9PEUZYp%2B4dnRpcVNJZVXUtkYb%2FrbrYuVUlHWYYu8XVR8qKp1loADg3B3dr1lR3JpfMBWZSDjdx%2F480MP1vOYm56WNBBHb1nrpN2PhXwCvw%2FwR4GV1c1%2F%2FzzHfbdrt0RY0Xa%2FvfujM1WYdTj%2FFPGoyuLLy1L1dsAw4ZIr9XuOWmuoPzY8nT6%2BiRuCN96gmmPSWtY8jxJV9qJJ%2BnV8enK86XO%2BKFDDA69%2B59kvL8XAfb2u%2BPq07q1qZ0hE7hGmo4NBm%2FXHUjOz8p3RxHDkP9CUY0Oglun7sycBNmYk3ncwX%2BQQgvt8YkUCBb4OdCJ46oNO8c5xAMJjJyskGOqUB98YMh6%2BdVjk%2FLlGSul22A64NKv%2Fu4DFQFj59BQ6Dcp%2F2MwPNY%2BFnalco3VmOy4YUiLZbjGViaNG0oMgM%2Bp9Yl5fHLsbV8UYzojMtIdw1JIGoI9GP%2BdzIRZrZahlbgxywwONWMS8NtXksB0o5MkOm1o4Ff3xWZvezEStpd3SgUuY%2BXqz9v9oU63Sa17RoRH5dz3TeM3aFJN90CrevNuQDIin%2FXbjM&X-Amz-Signature=bb4c3ac7406299bdd69420959d2a1d713396b6cf2f017959f48b9f2bc76e4f7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

