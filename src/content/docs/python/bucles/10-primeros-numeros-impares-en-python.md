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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673CQLPB7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T161514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6kpaVWv2JAG0gMtGcXruU%2F6G9ejrrdOZknz9XQFI5fAiAOnwfR92QddQbcViEzgKInnfpI9Eug5Tvs7PCkM4HjNCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMMcj5k8TM2tFNh0wKtwDWYKuhqXH3brc7dUCSczbFA8sk44%2B1%2FErS28%2BwjscTLBRBaiHhTM57RpU4w5EwVo6%2BALDrlKT0J5p4Dbf3nC7X4x6O1zPite7tqvgJbSKts%2FXueXWp8hZjAH7buKqVCrmAtyl3bghGUzaJEgxcTE6baa1y3L7bVL2MRqb2eFI5%2B4NiTO5L6%2FEHW0jKQ3KuKiCg5FOHbufBgp%2Fkis1ANTCDDEUtsqxBAPylJYNTXjdYvzcb26FEiIp0eawhL7dR6KkuiRzUzFt9ADj5NMLO3tJXhMDcwwY7zHZZswd6Vb0ags6KLCc1kyWxfUUWwh5AY0L8mUFtdlnV6gmqUtoNOfjpa9mPcaIZ96J7I4aCE4gaaMTwX7H1gDHh8xahNFkYmrZYeI5VwawjFa%2FVdp6lGDFAktZrmWSHxH253zlgCfNowZ5m%2FtAic7VVoqcKjicTH3yAd2iAOhv7lqoFFqdHTu6GUVA3jkNBmaG81XIJDr1ayvG568rkTECEg1YwA7gxRlejOBWXevd%2BDdJcnf3hO8%2FaEJncf6d21%2FX3q%2BolrDCCUh8oRmT6%2BQthDSxEcTgmYKdp%2BRdGhCtmVjJi%2FmBbU%2Bw2Rrgq3k5SxxDqHN1X6SqdXh570xVPzVwVV7rQ0owscDWyQY6pgG6CBNl5p1yPlRfOS%2B1iRoZ0Bhbir7pSbrVFTdzRzL5NQz%2FBWeHWx4BOSuFv6plkmg7qswwr%2FbVWNkArJG7QQ%2FMAzf96vpdZE%2FUGDwSNmaAhg5P3Iwom9lrogL0w%2B6VH6dEr4EgFKpjRKCwQ3OcJPNhSJDc%2BiHJP%2FtQhs8tTftWGLD8qEUvBo3B15LoFsXqjAoH0l1vS0OQtqos%2BAqwqOJUtgtN592K&X-Amz-Signature=ea2158c4a8d9710b195ab1e261db6af2f3ba22d84b08889fed7d0338977fb0d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

