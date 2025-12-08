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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622O4O2C2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2z7TRUCWTVmR87WuAJc99%2F%2FhGx9P%2FbLCS6FBLNEGoAAiEA2Moxa30oGRX%2BVWkfwxU02VU3sGlyUlpvg5r6Fn%2B4Q58qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCP5DhHEuq5vWcieUCrcA2pgEsePhEqlMmm%2BNu%2BPm3DUBT%2FaHF8odhit862Sobc2R8x%2FCwI1PVeW6RD5qX%2FRF2CuNIWnOR7%2FQbMz8YzRRbTU4RB15fb7xxbAGGB%2FLZWEc0iXCkGOSwow%2FHTvW0VD3xLQgHbnZVjyRVmbX%2FiZKYOkDJSveqyZO8ezhxhOZqmKYFRVWfO6nRL3XNqq9dcUI1wjf4VyH4IMegODYrqc6bAmM2CdiyvaSDRNSah7NMi5QXxSxDAjsiD58btQk0N7HnsMgilVkabkcfXSIooAjfjxJr0ixdbLCF8uXHXgbVbHzCnr3xf2msPyAZl1h0ezzhG8VKVdHJ%2FZAM9ig3cEuhCWZZLdiNJSQiuoj0p7D1xu0csTX5O%2FtZm0CgSmEEjkxgWta7eYz4Zet86nuheELffGfMDIp5G1niGPsQdwhiXHIBrdwls1D4GXAcy%2BewM7WrSBMXX7S3xXqxoJEjkd9RHpCXu5DGdjQ%2FGxlo%2Faqod7k5mnFgxagPP0v9Acn1LxYyCntMuV68DC6BWwrTcFSDx1Sf%2BP87CEglcghB0EBzBlLye91SCbmW8s5xhDBkOPGc%2FI3u%2B3w9RjUK1%2F3BEaCSG%2BCoeiXPnCq27BoewkpL%2FlItvJTHg062eH%2BsP0ML602ckGOqUBcur%2BOxuHdmkOvpBk2OSbKeJFaip4eVNEl2fiTnkk92ER8L9MnMPYNrggwDeptOkF3LcllodjdDikJcJrnUQmlZUN9JxU63AL4%2Br4ztIBSmVY0Fo43CTGEjJvaLwVINxnKTXSjGY0cxVpD6kwXq6v4k5xq2AZVWjvHRALkASi7DNxl0UZtybwmXqqP0CMQdZ2%2FSJ0AWV%2F1HHDXyIPJ%2FYcrtINhZ%2FO&X-Amz-Signature=2040a10e6f43da71b6c52689e95c1686ea8497f3cf6d828451c66fe1ea8da053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

