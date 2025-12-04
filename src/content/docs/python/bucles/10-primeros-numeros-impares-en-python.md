---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JUNXA7V%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIA50IbRC%2BFbaOcQHcy2wK%2FBEymShaaeRSI1JigOv8LVLAiEA67C9f7oAbMSvawszyUnI8Ar0qoO2xuoHfY8EJbG2s5oq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDwH%2FNf8lyBzqdaUdCrcA4IpRg5qlAQWF27CEiM%2Bu9Yui92PrsiYhiAx1u2w8bKx7PP7KILDfdLjFFaKZFsmVcEGTXKBneIAbUszanO3ZlGxPI3x7tZ5Ug%2FFFJTKohynN%2FJKXzF1%2BSwLEVKYUqBBHSlNXiJrSnlYQhn%2FhZ62IVOae2sxEVTKedvlnrVr2SpAVeH32IjYC8qeDW2qfl5ySezRX9PWpltgz3I7PS3b9g%2B04SoM3bpB1XPqw2SSaRTt4QghJ7K6KIAcRTvSmug3y9rGHYqAfl%2Bdu1Xu5ohPiSb%2FIJHmUdR1nPQHkTsh%2Bs9YOcgta1aAR0Yc%2BahRCcGeEty4eZwFFA9BHfrqBA%2ByZMEEQkes2xJZiSU7JNOq56yI9Qg4KXzo0lGp6ku5hXMhCU90vTTRWX5WvtrakX7j%2B7WAojRTOS%2Bh7xINeyFa%2BsIPjbxk4tD8aMzK%2FMjrhOdEe4bN%2FrboqdFtSo7OMJNFQdr6yXrLquXvcBBYnlyeYOmd7IXtqjuWQ1%2BYW3aRh9%2BP1GMADn3Sw3ye4R9CoyIPt5FXXbEXuxQTNHTbJSSJ2WIdEkCYtTMO4b2nquHxRz1wuXTFaRu9CEVqeVlDtathIwTir%2Bcse9cfTysRbAdc%2FAf0NlzfwMOYNrcIUwiwMJ%2BQxMkGOqUBRWL6sryqRhuISRuJ3PPkLGJk%2Fz0qTIBD2eKkd3c6%2FCyLAITtzcrkx579Pit2q%2BTBl8TdVzqYcyeHP%2Blo9WpLi%2BhX5vHfWECq69nGbr73bXUG0XTuJH44w%2BxCHS9T6KUBsKfn0FAzZDZXMyrtkFt202VAeIS8GR7ZCdxSMyhsrTq77p%2BdAQHWwzPGAiNGUT%2FpiiLQCGNTmMldBDlCIFcWl0opzN2z&X-Amz-Signature=157c214eeefe19eab3bda75f56cd71b2f1e0104d9937f652d566682c7e860cc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

