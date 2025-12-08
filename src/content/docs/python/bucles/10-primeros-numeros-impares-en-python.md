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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO4KW4F7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPt7Tadf7lf9z7MTGv1s6m%2BrEbcFB3m3mlsH%2BB1%2BeARAiEA22PKFAqY%2F8TWY9UbShBwu21Da3c3sswjwRUlRdkRLOgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhrA8Mj5ezy5CJi9SrcA6mAkqm0nF7%2Fsa%2BIFs5GZd8mbIN1TtBZEY1Sk1Ojgo2eAaCinZG401mLV2gKeTdo76YNN2b0gcLfP0oMGpkKHjNrDso8AmMRQVYq1LD%2FggMEPfbRwSCH3u7XLj4CwvOnrScq60PImr8bRcFVvbDiCGhAk4bCGmDlrPpHveeHF0Tj4m3T102U2ZKxohnH7hg7a3EFAMfVT%2F%2BsVa%2Bl8MsLXIh3h8H1MousBau2ucl29NHskcNpBkvZIWzahwy3uQgtqDy2Ew%2BXma6fTZYYuG7tIuZee7vjzB2ZvamFC6cSauwtI767J%2BTlzExAV5OwcxvZbzBCKq0%2FQezVKnzYBbYF2DOtECXE0FnyWIHwEK2fWL6KlmFB8cI7sYshb5oTEctErSe83aU1mN8TLE%2Fi%2FUY%2FXs7pzHKeFD2rVTD%2BF8ihcJ2Tjqqwhr%2FNuKAuTDRDoDjZN5R8SHw9prwHC8Q4O7WtdpNr8fb5N28%2F3faG1NJ%2B33UGgY3%2B4T60zzVa1%2BN7H6NKWuVU8c5EcrOkoYZG8J%2BfBM0n0%2FAjhmSbIjITGkgHXoF7smFsijJRRz%2BHBmw2aDuyMjg7qOh0r6BY59z8eBycqnWYKBuCkN7TbF03qaCJFGfTOlyTbvwni%2BOlnU%2FkMKiU2ckGOqUBFYXPSQhvA57gjjSP%2FRpwlhLAtRn2WsOt3VdyFkccBc3TKqnHqZBytlolfUa3jG4BlXlRnb2e07Ok1kmmt7Swa75Z%2BoOAIoZawMtm2qkxvkuuAPBjp5%2BFqEtxIP2TkvXXrznNrDuzl%2FfRn78os%2BOFwE%2Fq%2Frk2BZ5cZ4ce5wRj7uveECDqjo4rrAsKlqgG73MFvcyGxmWMZUqszk7448Owt8i1dFIi&X-Amz-Signature=5214a4d3b7f9fa401f589c9c4eace3ef6106ef931ac1fbd9222fd12c110d9205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

