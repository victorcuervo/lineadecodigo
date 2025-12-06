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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMP45YA2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T200453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqYuEj3A39GxqTlR7TLmxtAwYcSCKPWkHtOrRBAenC5AIhAPmGHrPl3p%2FUc7gA4qBQ%2B2MalzHTvITAgQ6zS77GylDrKv8DCHoQABoMNjM3NDIzMTgzODA1Igzb4Q7tk2EoBPDIlfMq3AOPsXe8ldcJxjnFGsLSeDlE%2Bblv%2FDtvHj2235AjuPvOKROH9%2FHJ7KL2RiokSSRgPPn6o48QaigThWdqmWcD1cyijq7jcEMV2rKVJCjtgnz0VNGhbMnbljgcolPT9KwEElL0z%2B%2Bz87G5OM0pMN7tg7TR3KLACMlJ8FgKhbpPzl0WLUvB1BO0wfmDjX3Jwv5%2FIp6OL3ySEqWb6IWf%2B%2BU85544oudKa%2BgKoHtFwhtHJkCd5MnU6IVwJfwtCoBSbbpXiD6JYmDABg55zkTHFzn6OzwTKPRr5OSGqTmDontoBr4%2ByKTrwFCATYVfQ0Qu%2F6N4BvXQwHsIBingg8%2BaZryLX26cAYVfQ7rsWmz32Y8pgZxn8GfM8zl2Wh2PoH1rhrz6jwfkzwHTjTvYePq%2BpuzfKlHJYGyYRYu1RNkYy8LmwUBX3r1rAo%2B%2FeLxLM%2Bo28rzkGUzuVFOm4kkxqaQW%2FLTsedyHnuOkhRmSR%2BpTZwjKB3%2Fe1jKcD5wF%2Fc%2Bh2S5aVWd6vtaUnafIequq8%2FkinqoxB%2BuWxesWpn9FoMnG2YVOUeGJu6oaLaZoNJP0giZyh%2B1Z%2F6zJgFr%2BzyhfrA294Kre37dRPmb2E5Pax5GdZuppXfoibmBMMY5WIItW5BxrXjDkydHJBjqkAW128AJhxBbs2mEjDRjPVEylwLXF5%2BJy9tYZZS7w6QFFXwU6FMYBoAes0jIulpDLEwGQ4eeehk76T%2FNULNsrRpzGv%2FoWi1Gq%2FbysjPE80JwRXSBfxcKf1J1OFgdSb5es%2BzjXzpUG5q85fgWPCQfJazVkNKROKbbm8MaUDVYdoe3TqO%2B2Ru5Z%2F15pGDneDJPmRDEVx4PG7hN2Va8JLjbG8rF%2Ffmx4&X-Amz-Signature=0c7569819872a5d1ac7a3500122f74a75570c04a80af630328e990892c7e891b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

