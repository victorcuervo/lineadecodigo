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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO2QDGQG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T071610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCwyxB%2F%2B6DpV4efi5SvFar0EU9nxCZ3V2AcHZ777okJTgIhAL5mfN4%2BUxmBZy0DqmAP%2BgX095F6szB9WzSV1IZGOkVWKv8DCCgQABoMNjM3NDIzMTgzODA1IgxJivEbbk2WX2HJoxIq3AOJOpiAWep%2Ft5Wu%2Fjubmyc3vvoP8208AG6xlxSEBz7fuOoI0Lj9SYbZgeMDC3rBMZLGLaDy%2Bg7HGsxIvbRa6bFKB%2F0RVy6PlNJ4eIQrDKBzHOV4bowqimlOJqmUREp597UOz8%2BrdKjlIMdEz23e6VPGj9wnzJFGvHOYYDjI5EBc5wm4mpjrQrOxVgj0cYEx2Yqe2DPnnbyBOKhlQ4biaXTIdW%2Fc6Sjo5uKLSkDAywLwwTknC3XnVocxoM02%2FvE%2BjJb00RqodWhbjogHqqAq%2F48D1pGNkcUwTkElfZ3Z12CjxpDU%2FFk1seKzaY%2B9T%2BXRuloeMt72B1h4EXtFnCypNBrz3ICToHBE5twm3JE4fRxoaRnJgefgv%2F5lcMlBQrmF%2Bfoy%2BFd5t19lWHJ21iNde%2BR%2BIeiNZczrqdMQjwLA7HaBWIc040HnUATLD33L2g7mTDV0QDyS6B3bWxfj%2Fl65WDxv%2FOKY62iWpw3u7vHLl27sVH9R5K40k1oSV%2BLsgws0ilTitKFAQ4uAzJmLsNZ%2Fv1A16h34Vnqphw1%2BR4lmyebID2kOh2Ks1Q73NvtMO9Dv1ww33%2BYOl7iR%2Bf2EIjUnNssOnZrOt4gCNz2ETMyDFKp8PW0XmmsPgK6KqVdcADDKub%2FJBjqkAbE7DsYUE6RIkAQar8pc2nnQsZj5h6Y1mnhXdJAiRuq7Z3uYgtEvIc6CWMb0ADmXfwm%2F2uIZlf60V5zisdC9rrQERKiPGkFijc%2Bh7ao%2BgInhA2JwPgS6LdySMe1DXIZU3ZHFRXU4%2BBrkyaAE%2BNzULAx7TWN%2BxKrFVC9almAVgvMTVDpifEaCdS%2BbNAnzM%2Bhb9p%2BAr7vTr5ucJGdCBAoWNKwVJei3&X-Amz-Signature=e063a3ba99b6b7c7363984813865c65febc32accc01f0deb5ed7bdd24e3b2790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

