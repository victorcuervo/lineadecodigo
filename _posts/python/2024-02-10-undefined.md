---
layout: post
title: 10 primeros números impares en Python
excerpt: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
categories: Python
tags: [python básicos,python bucles]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FOVTB4R%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T145240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIHWiPo%2F6cznKg6N5gQAsFHr4yUmnbcW4a0l1TbWJIOSxAiBIlXO1zcboXt63zxJfx%2FzskVlqZ7ypDmdlm5p1XC4JKir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM0BoQmJeK4ZqdPvKqKtwD844ZSkYGN4VxOT2uijo9GKS5xMwuVrFnZY6uuESbh8YHc8bR0F36x8cvAiUfjdzwERwkTtlNyW0Deiz%2BSNYP19ROrwCxD7AU7VagMA0gmN%2FOmvtqAnCh%2FfDz0hqDlyI68sL%2F2hnom7mRJYmjIeisVbV1J5Tr9Er37NzrPBMZwWeKDp1xGjr5nWlh9OTFqkL31gYeByARga1TmkVFhZL5buXD%2BViCe4mRK%2BvXmqgZ1xuJFXj%2B5C7HizSjC9QoCH5yc4ty896dhEOxJ7opk0n0u4ZkVUZXkPt20tchJvy%2FqqwRXLGD%2F4z01JscbWgwhX2WXNMwZ9orm7kRjHerdFkyK2EwahGUNiMy1QKvIPDVGOlYkTnQ2%2BHE%2Foh9uX6CXZkWsd5Wxyiu08l4vkcZuZdkWxZ7zAMHNvxknU9KqvY5LilME7k12NhrrGd444snmqMCzI2w8BdUAhBBAAN4F0fBTKvPoxLzYqX2cQio0OCHpT9VxF4TVhIO%2F5lbedhhrbrVokt19HeoT916%2BqAsZ5KcUJafH9c8sjkAt8nwl3C5WTZBM%2BIoG1Sd%2F%2FISJLrSXmIOtAdOC9C7E%2FvmiNDqtiEKg1WSd3ma9bfRrj5NlZM30Xhz73bK9WBoPflXYc4wkojByQY6pgH86zFNl5bKH98lkeU0SHPNZBF%2FG4HmQyxXmP7PcaXrV89i7n50TH9ETdWgPOV2CHqNEzVqVa4KmQqN4KmbeF0d0fvwftQRHul0xOUs8WtugtSa7ZOCbjTbUnMA4lfJgueTg32jGyfT7q5x1O%2B0xO09nAArrskmJrOG5cCt6KrL%2BWQBy%2BAu%2BKjF1ovLWUyFw3Rw1yawwYyzqhpNr1%2BftE7d48rh9wd9&X-Amz-Signature=0d128ebfb82656ba1a0b069116cf137cbe1bc698ddf0f2d54d451c1dcdd8411f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

