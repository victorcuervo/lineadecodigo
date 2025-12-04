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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH7VGFOK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQC7qdD6z6%2Fxkey5f2RneVSjHVjgVaV93Y9ryUmAJTPHFgIhAID7mghIJ5SBndCw5cnjX8or5DqYp%2F2UR%2BO60G1tZuiwKv8DCEYQABoMNjM3NDIzMTgzODA1IgyPmVe%2FI3vZu9jof3kq3AP3mS%2BuYgtqSL98j8OT6oYGtkbvMvcE9bqcg4LRZhAJtlFcSRrLmmTrwZNEGEridP4AN1iyEQDioMFoeOEhadprRXG71WD28lJfeAKNetCK6AaxxOJOaMapvtpdBiUaoU%2FBrpkvpejcffP3BhkXrY%2FpkIPAwk%2FiJXtwOVbB7vOq1TrkhZnACirwUUViDOH%2BnAUF0duOXN5Kiz%2FYOap5U4Fl4QHx7h7Zw4k8IXaEOZ%2F4bB%2Fqjbb76evyKZvx0fZD3BaJU6fI2%2Ff2XQHA55KNvPtKwDovQ3cvbywnXDH6XoJiDf6DEoYvgiksZ6nR%2F1YwdEvZechErHZReQCVNjCk%2B%2BpbAoFQ0tfrj24Wxx3h3AyR4DLGzIsua2ejj%2B4jZeZ%2FsFMgvlBhQ7bcFU0Frnt6d5h3PUD89oyx1c0O3Nc8QjPDvmZkRMxy0eYld4X9kmUb4%2FYQ0V0drNA%2FfDOrn9PmVjy6EYDOanEE%2FUCo62jrfp8Lzu5UN3w5z5sa%2B0xoonzVo2%2BYi3tSkxZLwe9AlN1127rYhQMERVyr2SUTByEnm71ZZJUsmk0xCmG6G2lD10G%2FL%2FO3bvTQmS%2BbBsnjynkpMDOBwyg55xE07bI%2BfghDicwc1BaP9oY6Td%2Fz33SntDDig8bJBjqkARhyi46B0ZBOZ7zLNZ9jdmndPPje3gAUsHXJOm55%2BWJmClKjyqDnM0j8Olk7kO4KuirKvpnSS0KcVrBDQbW61JQNyQN3S06ahPYMNAFctB4hf5XHQb2xWawCevZ5kZr1765NHAb0Jiy%2BKNlVGHJbwLKMkPaFvp%2FLSZiEGDTBP8b1IHrPOlDdkmCgI88tEex%2F8DS4HadwMld1Z7%2FjW1sAnqGfQclE&X-Amz-Signature=29f6ca4ca7225c7928fa63305f671e64d2be0a8060b7e386382df0ffb86fceec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

