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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFGV6FES%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFnNoTUUDICLH1yuATBN8aqDTrS2IGB2gUr53chmNMuFAiB18Yr0DaUQ90dfnZj8tBnrPzNWUrXaiK6igitjCGhefCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn%2FOK9n2%2B4Sl1q%2FUiKtwD%2BIP8YoIC0fCnDgYmZHdlg%2BP5lR2cboh9SMBLf2Mvs2EoMF5v8AgT2yVTpwfVV%2FIcdWUtxtCt%2BPMdLrAW9uldXspO6Ql0PAq%2Bhurl0RrCFrAHirxJaqYmasaBWMvtmE0wNlSFOhLyR7N9q28f2k6GeGcihjNEbVXeHFs1IjJ64qBcZnJwLoVLkb1P7Ge%2BXNqfG1TwXyzEPWDvrP%2BkYekxw7Dh6VQg8gpHAV3JaRPYHPFYLkP4d4Ik14PH%2FhGWYYtE2e7zk6b%2FcXCqqR16C8zOTmbKhho2OV7i3%2BrociYmpAvsJP0bZUrXfl5MXqqZferawbd0p2tKfCyuBBIq7RrTC1obmeS9jxNzvoQUpvbeKs6ucdDtwv2SqVgzlu3BZChT0Gyuoa1oOmgRY%2FgvkKrd%2B%2BGIaYzKGS3lCuJJ0NgU8KGTtvVQYIqot37yymful7MqGxxXf2H2HUHQh9uClLdHGcmoFTSsTJMG0HuPSbkVWRrdVA1MjoFh5m2CiaWvXVTCexYQRJIj0kcbHS2rwLinFd2epbvvnSJw%2B1gE33ZEjkGDiUQhTc7YJgOK0EiqJ891d8RI6ZRtosut0%2BSZ2jN082BwDDiBSicTSKyMzKrxoyfgsVkIz9KpdXu%2BxeIw05%2FUyQY6pgFmhc7t91xoERTZxAnkziePOxZ2gpBxEAwLWFNcs6AH2hX8ttaK2OA6IYHG1dw%2FI3ysdT%2Bgs%2B1cQBuujXoA%2F4EpuwjAjXVob7ysr6budNKIMppFprMHNLGow1NB%2Bu8ztAezp7UswZkOSfrraKNwSx7lUHosP9xKJmD8kjiVS40uehbTHNe7RCm6wbzap9GD0NFdT6RC5UQ%2FhfXf%2Bgr1oogl22lGhfm%2F&X-Amz-Signature=d9d07f24e7d24feabb58c4f8216b4efd199b768d751ac5655d89c37b76d7ed73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

