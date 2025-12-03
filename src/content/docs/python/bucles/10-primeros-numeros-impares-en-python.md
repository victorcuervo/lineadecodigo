---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4EPHQGV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCQ1AM%2BF91SxwRP%2Bi9EwaFLhUtOLtC3poT1VL8rxhZ1yQIhAO%2FNdFE%2BvhnT443Q2w0JOtbjOEAEOQJkb3EPwddhNxuEKv8DCDcQABoMNjM3NDIzMTgzODA1Igwj3%2BknEV%2BA575JMp4q3AOgI4R0f%2FQbQCtiiXdoccU927hIw0tKakb9YWe7nY%2BqQpeTJuIA5yRRRzFYZTHXQKZf%2FHyocbekKrck0HjLda%2BOB0tknUbgOUEiaK70RHYiCtyCqK68RX56DKoOVUU%2F%2BxaSvksgUUEoPOvwgNX5RTUaxT8JLoVlq%2FCE%2BQusPpRNr%2B0Zr0X0o1FLDcYIcjl2mLK%2Ff1HJ9JV2%2BI30LRQE1b1MeaOd%2ByYkOBfllxQd5eUkp3b3szk0pBRM9C2e3g6bXJkhTIa4uCCjZFG28v1m9gn43odqQIHZ%2BaxJUGDWv5j7msO9md5qdQ%2BJOcseSGw5PS711zs2FntLD3XRk80PP7UMUv9JXRxgUHO0AQrKe1ikk620KrK7sZl2ONaJLi%2BkmtY2UK02dcfboRZvx%2BsLyiB3P7NVjLZhi%2FYHPRFnmtVHP7K0YdruWe4TFxAqImLEKyFLzO0x4WVNIvLq2utoffLKgLo9tj9kAMOV9lf8%2Bb9OaJZ6PGSQOlVNyzRu2xGz26w%2FiD%2B7oXmvaQo%2BdxaTJFUe0A9x0EK%2F6j%2Bj%2BiSn5LlkjGeLoPaH4uCUbEPfDgofQuzWlzSyXM2j1ZAzJgVbOpXPZEOl5GFU%2FoKDrEns2%2FZ9Awt7120qoVDS5b%2B8%2BDDO3MLJBjqkAaUo5xTAPHxZXV7QiUHIH0PImQxThyUrKgGaOgWgslVGWmrbkMbOszg%2BPqOIA1rWapEA0h366Pmb5ce5ssRu%2F4k0A3VQzDlSt1z6V%2FchIKJQtM8QJElKT5vpB7aTPMYpGeKHKBLNleS0BvmWAZOLnJV%2BINy1rKz9V8JIetE6z0fIP4jhznfGmJrC1TtpHBhyCKaFF443cM3GDMM7uhmBI%2FpbsABT&X-Amz-Signature=15b1b122ce5df54ef126275e63236528ee9ba0903ad5a93f44d77ad478714db5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

