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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2FCKMTV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T020626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcFkCCeLdd9TvrqZNwwGjmttKJQEugGVEbfAdhIfYOeAiEAi3tNjdtLKndSXwjdtIzixRzNhXO2YsEEFQv6cEYsDbQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbILOHJWyWUNrjFlircAyJXSikC%2Brit%2BJpcSQEVMKgl%2FBF6wWe2jGjJXlnk9DAVz5MYHrHIrSUZoPUDw294pPF4hp5Yg%2B%2F9kFbHEVVNpIqZSygwTO9QdUlQ0OizMgkzBk1USfxZEcsDLIirTEjbxUuoUUHdNXBn1KhCLxdDrVxXJav3chy4icDt8xhQQA18CxV%2BkfEPvwcBTu2u%2F3wqpRWnEBwVGM%2FlVrLMA6pzTmAdgPHHdaMcviIjl%2BYAEgKxgN5d4Uf16JDQFxi9YGmsy0q0CvVwj8%2BVnhlybyTETbmWPstBIntwBYnwLstyyFvviHCYdqHUJounC1W%2FO2ws92b1bUk8tVwPC4Vuh3Imc%2FTGsVO7LbX9K56GASu1J61uXQoY9r0pxcKkRAiPjiJDB4ZpdwvYOZYbGmxt5azCN%2BTmHVXqwsY6EbfKj2H9POt9Npbc%2BouFNkMM%2B82b2A8SE%2FTUo8eM4N9MDxhNHuhFGb0Dc0SXKISl9KcTaSEECsQ4duzEcKCuoh%2FKLx6vpv9AnxM9tOQ%2Bb1Gnr44Q4VB1PnI4dEQgKCYbJlndJ5QWiOkAU6mxd01m1AkimlIgpRzSB9Cc6QhRNcSFSui%2BTv151uUFH24hh1lK59O%2BewAyymF7I0YC8J9n5puRv7cpMPPQ2MkGOqUBws430JYM5KyDH%2FHq3N0thd22eQ8YT3zqsfjCKF6zrkMGFzorpZry5jFO5xAD38vETFNIsD%2BrGi4OlsBG6V3pkauW7t4trqTsJEeREie94Bcq4sWfWcot2YL94Yclu7y1v2rMB4Qd6pM%2FtARGmJAYyKaeT%2FjY3dS7KlczRnQT%2FHHnSkeEGwx9BgqcgGDUd1sMTkwVMKAKrH46ULELIJfLg2St%2B6G4&X-Amz-Signature=c599a1a8d28fcc231538600ee807497ea9342b0fc0a52bd89793774eb788c510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

