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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4YTCLPJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T142324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI0%2B7nojEUkBMs7FinYseDAYg9HnWWsRb2ze8fck%2B4EgIgfid4vi3hlz6Q2ME9pByPybgDPFQZkZSFetTtdPYRnEwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkr3avzICKb%2F2UVMircA2T6%2Bl3jkliXvH4zTTdbWGiinFyh7EqdDL%2FIm%2BqqUsLIkDDjj10NYCxhs5HWjFoHR8DLTY2Mtxs3qMuzHuFCz0gi81WHJeEv0H4NWBa8NAYaeQkXCq0nTbwfEd20uthzUYv37YtbTv%2F7KaZKxb7ueY3i0gMZgA8jqrT3TbOaQQefwcrA4FeuOI0lR3vpNuP6eiWsS1yD8fEl%2FqXOeFxy22r8%2B2yoQF1OSQ8o%2BXCIwIIEbK%2FJgXLNzNxBZwP8PgdpdMB3Rgjd%2BPDEgkGRnZeqtn6xDFSDf0KInjBFpCkZSBiyUL6zamIFknNUITWizzxhkU%2B0s0yJJcYwjmXvpeT%2FF8bjlePW4YtZ2kM8H%2Bi1wlUafvOluxv8yZejiMVgww28I0mpeNYkdgeBGGCjwN55VmHiZs8Df9L9FsFIN0XbwG0UX0V63g%2FfruLGgYk%2BiwGUEuQ7n7YqW%2BJ7lySx9Y51ONGQ0Cjq0aGOuj9%2Fm8Ag5lK%2B8lBgpdEO9%2B7u2zEHtrm1ZoRIXgcQURM5eWm5bl69%2FySKKIFrfHfX%2BDALhG%2BQ4OVtSdaLKEwSWsT82jpvzVoK8uzCx6XH%2FrlaGHGzfo0ZuaNWFFchHH%2FIxnOOg4Dwd2kmTFI3PHwhj9%2BfAACiMN6a1ckGOqUBMo6vp%2BTRBT4gc%2FE6zzaTWxZG%2BuBUTOCrkJ7wYA8nbV6layW97im%2FeosF9VVL%2ByXxbd5e7%2BI6i8e9FoYTIUO66%2Fby2WWAwrhm9Vmrzh0IlP4L3xRVy6tWOR%2F8ZVStmBrnyW9XJmQQb74JAxewBKkdidMESNolQfwDBpZtgY9qsJHYRx8QB4Aly1WQ%2B4bUEbRf0ebUjPe1mwoQqDNkd5KSrds%2BhVqT&X-Amz-Signature=9ef7daa1910087baadd664415d075074fb187d14e6cac2ab0299cefce89d9b17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

