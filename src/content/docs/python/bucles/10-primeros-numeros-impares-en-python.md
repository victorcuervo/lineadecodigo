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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T76NUNGU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T182227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkrAHP%2BH6lGYwWxOOpEmIwt%2BFGy2mj2IE59S1t4GoCjAiBHYoMlEwKxeULwQ1EovM3v%2BnNOELqxngifd7hRJu9dpyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvUaiCOtz%2B%2FM3i6zHKtwDTjLBmSrZEoShJt9ox3TEGWVN%2BB3vRdQgqXiW%2BLXCk%2FRvTdaXqVjAN8KsNXb78AM2Mz0BQERcTTZavkgB479MZtjqDVGOzwLwxZzl70qvzZrH9epUfWw0gXiWlbwK35QQPIoWu41s2xN2bRTphLlUj7GPzKNwn%2F2e4wB53zo2COau0%2BGODVpKaWy6URuRVD7uxFpi42x5dfyzJ9ft3fB7jnfjWJfiz1i%2FTDdgI8Dxqm0OyPH%2BeCBrRCj7bJqAwlmU3UmifbeF48bVASaCEjBXb2%2FjgywyGrRrJZygnVZcenqYbceDaO6TFZMtyKbbdmMZrlqMM0hXeSUBYer2716r%2Fd3UM9sUgtvwAd5FNOlwYzQ5VxK4lyx0RKGYphIU%2BbYhOdD%2BB1q5aACGPD9fH%2Br5zkMbzGOJXVw9ayHiRG4Dqa5JSC4UhM%2Fn3PP3lIpDANOiHvErSzxTnQjhiAIt8JfsnP62KimcZK5ruiKqDmONxLvnR7Y6jCxzMegaMTzBlfDpEkfy%2FgsEa6W9dB%2FvxOtgb4I4BxzhN54eQELP7eryua5I%2BtFW6gItDGNCeKCBpF57qxqIzWIcs6OHjFLMqSu6R7d1tjEVpGmRDByBg0zt4sj8Lj8O0XBs2Jr5IzEw%2BrXWyQY6pgEo9IMSZMZ5DKAEzbSECwybaT3OSxHmCO42DyJ12Bkm0B2DDNQU4LoPNhTny6FMYdRN2nRTPjQ211aqMQJd57z3R2sAuPrm0w48JpyPAeH%2FtXjfxWEPFm%2B0%2BWDlks0amsPDTVtD1B9UThz8qf7sP8n1SmQ3MtG8buhN5RcoF1g2FzsHs6A2ZIfsG1KDgpbQhn3bKieDfuEyHKVH0E7o%2Fo3nvO7Bn8si&X-Amz-Signature=794047f28a2c48be56a1b9031899604897ddc4f1c7ec749de1d1db8c39d602bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

