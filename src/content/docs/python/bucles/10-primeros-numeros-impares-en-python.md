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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKPXBIB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T104754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7OTspPrCLtfhL0f6JITYTXkG%2BNDQ8w4GXU4F1ErNEXAiEAr0Exzzs%2Fq7L9%2FGQkrpj6CIdeZupk%2FPtam7HwfkGVy%2B0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOPlfDUiqqVmzIhcBircAy1uucR5lcdzD1Dn3v9ipHMsjMqNvOHZ%2BitIuATdW1yrirHtkFG93%2FvZAZ3yXIxAuvc5rLvPOcBe66FwE%2FBYBWKd1%2Bqs%2BUkdaS55tvFS%2B3px%2B2MI7NJM2pNRDDtASOibDlD54c8KOb1uVvfEkQGmQjtjov88yMK3sfeMavl6iXEry4SU315WYPUpM4%2Bc6wLR2DtQ1sqSkoeQSK7bXhNUDfGGq43eY7ym8Luxro%2FoB6uCcHgQuiSnboif%2BZYNJHL%2Fdb08KuFpgOjrln2huV4kmpPyxq9F7U9SVWYyMx7i%2BSvEQrVKgRKpTpg%2FVm8gfYnifiriGqTheSGK1Mkfp0gALT1PpzT0nBSzeB0AnGPILz0IYKyv6vAnHec14fO9jAKtwpFiwZsbB5lxrBBRvLHRO8%2BylYcbVclEwXtMHRh6N8Wo95RJG7OuKSolAMdgfGoLRCV2SANcjTK2V02ZPwyapoOHTwV0sgA%2Bsmh0OKyGxELJOUsj%2B8U4ih4sucMFxj2TdC0v9QJG1CjT8ZqtW5fia0IoRGQmIsOfiiQHB3W52mm8P3OhuFjGl4o%2BhLJnbTeGfqNooqzK8R8p9Jimu0QFiTHjv1v4phppBki4xuJJKNUeON4oha9ssY0okg93MJ%2FGyskGOqUBWw9dHLcmy%2BQ0PlX8U8Ab2vhcf9oeH9Ae5JU4rEybuksuxlaqPmtK%2B%2FtpadqJ6WVVsC69%2BVNZLH9xtqxiNEWHIiwjDQkz9%2F16T%2BjCBe9FI4Cd0UbJ3a4U6QkiO0n9inezQYWFfRZAnK6mKR7b2wS7%2F3Y5JxoZciDcSU1ui%2B%2Fx7jdp0O0OCDbcR%2BiHsZ%2F7saSzvHAo00VBIr%2BxhYrFHkrbsuyr2eza&X-Amz-Signature=678000fa3ea2f117a3f0242ad48b31c11278f26855040f01396be5267a24db1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

