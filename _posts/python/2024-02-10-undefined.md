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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX576XEF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T112618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHwxn5tMT6o4%2Bxs5qAMzMeVgSqcCICKW7smOY7Ed%2Byn9AiEArD44hTT8Juv1kKo3Th1QlHQlsOHfqyy%2BSXTUxrAAk3Uq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDK2%2BbOfrU4peUOsklCrcA%2BxxGbfGT5qZHpOoLZ3UUSU8qbwcEklCag09vmZg53ttpa9Z35ydllOSHJchezLaK5f1nUl54Zd9YYPX2eie30jed7D0JLtyIJlCVTCe9Pm8y4pDQjVIpAeCun%2BElUlA3cfpNeeS7E%2FWbBJvV1jfQAwnB%2FXjVSqn4z4I7WGqZi%2F7xGm%2F9ysn2tIyhU9QA5Rs%2BnVa4AqYtL0PSUIIpePt5gcQPFqUnZgVs%2FvTyhth2vNDa0Jj8tkQNSv7jVQHRdaPRVoLJF2%2F18qDpB5D1Ds7zV%2FmCqmgiQq0QevNYxb75xJLIeMNQg9EZGqXqQee2wvZBrBHIOzK71tsJVDmUzdii22EKsq1hUiTUx2jQ6Xh%2FKErfaHbnTaxddisj7JRfNB7lDYXg9p6EFYckGDpqRIkxb2QvNyc6VDPXwM0bn%2FQ8jdxGTfyqH1YMNlo0L3ZX42t1rg5rb8rk4s1f8Lun0DwpJy0kleBvkOct4naX5qbn%2B4BhHQyWXbkzp1jr%2F%2FvHBPXho1a6qJbjFSj39wyUN6YwRnAXk2B%2BI8CmnHlI4370LUHwuC8o%2BKyVrsGM7%2Ff%2FEq4IJ8vA%2Bow0VwG8IQmGz%2FLvHbKRWVrOK97dnUWYLK6QqcsAzoc0%2BDsm3VFhBunMJKuwMkGOqUB7Zd7Ze9uaemykzO1hD88%2BOzj2Y3hs0Fkl0LhRdlkLuVOD8snBah%2Ff092s3oXfyjwkM5d3le23ckgoR42gYfxTBDyvHt4YmJNHDjAYs5DDZlkhqxRRJAUzfXvArZEGFwTFR0fqLM08c%2BRefaFSuNTe3elFCiMM6M5fJ2hX1QI%2F90M%2FoC6jSyCDfswedXILp0AYNV1%2BQxDjX9RpDyvskgpVKniNpAz&X-Amz-Signature=70dbf979d0bf95d97b56c8fc346871e64228f8df267aaf20d1f6df58e1d911a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

