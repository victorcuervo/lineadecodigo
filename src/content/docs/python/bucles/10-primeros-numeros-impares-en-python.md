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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQX6J4CS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T143303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr4%2BzCZreIT3L7G4uV2yjSOCD%2FDMD%2B3QrU%2BS3kiv1emgIhAIDW5jiKa%2BVUYE3SexuVAmiX0ErAN9t0EuvQHbQqmIn6KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxjXgZFAov6oNBt0Eq3APjl3DppVEiOoBgnTrhYEJ6zxI2xiqJPMQ1MfJ9SI9NtThR6yd9pQIAthehvVlKCLapSnazPXASGTjE7HJFVFUHZP%2BsR4sg0QNBQYbCCzGumkM8JNlfPWp84GXMd6KSvw3Ro%2FZBpI2jDXRHTHUKcnV99p3z9IK21NMKPlgfx7iGkGb7BPRmlbfOzCD8KrZcXvzFUmzQIQ7%2FqcbrLILdp5gxyhnnBt3exYJOzpTeWcheCD8CoESRN38pcu%2FgSKTDPxSN3N4tVasr7CRRISJtmQEgTXKFawfSRtNc%2BpsPLu%2BgiuZC0sh1rHg6ks1nJTWxn4jRLuUWh0b8ZnqS2aJjAxujtkAVgwfz592lbI7P3AJF3i7y47ag%2F%2BYNP6IPOodYn5G%2Bo6v7vbG5nDF4rEv70zU0H%2Fm7kQ28i0oluHe%2B80uWX3sja%2BZzNNBGYwoHyC35X65qQd0NNRspVWxspaGC4MRd5CEELymgQ5nFNjxIKT%2B%2B8NBqDS4U2q9sKXW6Zks8MiBnZSKVhgItkwicX6OGT7x90biQXP8ka670%2BvY7gFv9GUTK2Ke1DJEt1Tf764WLqyEEYa7idkeO1K%2BLFO21QBwXpmXue5tq2i4z%2FZApaUBKd80orFDAkf3gdEpTezC7kNvJBjqkAcR89UMzTUYSUZT3QD9APgYqpWYIJyb7u%2Fz6lKpVIcDA62%2B9uBkqEMHP%2FdtPUvytDiXqHnMl77nzS%2B8jWUie5flmy9oLiITQmSLbt2fH5tEkzZ%2BEZ7MVNBjSZ4BW%2BsMkX7Rb3%2BhLJJmn124Nf8Hxy2Ls%2BEbCyu0QOcq%2BgduXwUf1biiXSO1f5ERiQ%2BSoRPiZqU%2FxSFM10J6R3SQJM2LOnUf%2FZH%2F4&X-Amz-Signature=f059c71f048916b9e472bdd2fe5981177aa97eebad07fce3206f9de6b9bf51df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

