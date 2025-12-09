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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC4MRHBI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T045334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChb13mug06HqDmgfXeBfxun1Y0kKCjTmJ2quynrIjSeAiBEOexA5H3zs3NpMhHRrZHvQijAQM9NZVwEmQdjWmRvHyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqufYYLIiv6MEAuAMKtwDnolzRpEe%2F%2BZQTWSQKjSu19Ays0BZjPl8U9lBsbXBESKwaEtBnvbDKJ7oDs1sApCM%2FHIVFBR8GBUNI53SLdAGyhDPmCPTFMjXC6stCD%2FGsVhFaDjtxlz54TEHSk7E%2FF4FjJoprtC9GDkjihI7v7hAHdk33ozlNZMy9D3OvKfGR6GKnDaOXcPhBd1XnJ0UZdLMLe4XBJOPNgN7iF1%2FIdBjTWR8GYicfWTXzV0vMP1h7%2BOc4GWCpCtqsxK%2BChnaE%2F3iOVicMXsoBgpiGbD3jInVK%2FzYOnT1ewSdEJ70CeKiID0mDJmJdK8Q1DflWM9oZZbWb0flyJ2S7RIOIKfy57FsVie7yBwCy6hoC33o97jY3ZDdVQqbUygs74Co7fokmM2if19js9wpVl8jb6%2BYRFNXInZi4tTeD%2BvWp8o%2F%2Fj3SUf6VpyhZRxHAYXQi8opj%2FkY8cSvkbTochGpfA2RcYTNUU5AbIl03mau53yPb%2BYpQ2ywcnD5%2B5c9yIu50duxTkOHpXpZnplUkEh3JrKc4hXkWYptuEjUUok5R%2BZmj30lVcLK3kmO1B0An9eMEEK85dXU5rP4UHC0W4m3q6airnJhuhlsFS0NrB8gAnnugNDCGGr8S5mTQfiwVTZd4wMIwscneyQY6pgGLfRWIdXTgdIimx5dpHduxLlhctbBvEY8GZqHCcBmRniEVmFevKu%2FWUWTkJ8GTRjtcAQMaFvQoU573aLig%2FLhll1uMHgkClQ4Wo8C7J%2F7Wg5jtKdbOsiZVIXZXpEh84374mxjQUjSGGDjFi84lR2z%2FPKuxKyzlB1dYEm9i3Y%2F6MadoxNBYX1CHdoXoFx%2B2fSQl1EXn3n5d5BjYYwmCfHhM9dNW%2BakT&X-Amz-Signature=4aaeac67306881be8952f8e7b348dd132a6182bd4ce4c3b25c5242fd1d76b42c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

