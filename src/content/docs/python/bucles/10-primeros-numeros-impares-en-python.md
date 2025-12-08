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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEY5CRSG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T214808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDpmryqoIILQVfVfzq8NKF0kcu7DNFTnoiBNAdfkCRpAiEA%2Ffn9yThMrRI0K7Al6VwT9P6mjE9aDYPbQ7KuSLBf9PgqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3cgE%2B8mSQBU6ym3SrcAyNP5JMF7yhH3KM%2FTtcawvSmT75%2BgRCu%2Bm0IpCWN37CU7z%2BIanO5mr0YsaHVZiIcvUYOlSWfOccbZS9Ge7B%2BQVtJXn8nS%2FFDs903IpkbvQclkS%2BcOW6Yu1Je1sTINDWQNlqNUhGVwdV%2FTKbvdczE5y6lY0sv7x%2FEQXq5fT29eTlg5iH8ggN%2BrQHBS%2F%2BvRGYdYZVGmDtW2eFdinWwTJg%2FKeEAOXmt3paVns69bKtmRdP7r1y6D864MRwJYzSEpuLzdIWyCVl7S%2BD8EL2Z8G5A5pXMFyL6a10d%2BL%2FF7%2BFuE1D7sijV6Q0oiSyJjLkKquhUVJ3yU1zaucfv62EtbXOyOyrC%2B1W9ZmbEjXbUIsameAPc%2Fxjn0IwOJGMFcwrT%2FCrG1atd7Dcb86HZCPcPkvKyL26cy1zzWdDsI2pSpnwSKsAsqJ%2BcjE10TbmTjE9X9a79ZLkTyNxuKLgxwGiHt4u8FDHveZXzGBwC91XMhUMBwJCdek9QUTNPeDDXl8p6Dfto9M4TM9ZEd%2BLQ7HFsY%2FQ9zHuJ2yvKe7%2F%2FotnSL4jc9gQeJQwAMx%2B%2F%2Bx84mYwV2qpZ5OOaczWKF9WdvIkX0vjCnT%2BaBpWN%2B%2FvuEOCHv%2FUPJO%2BxLQjQcr3S%2F9J4bFq6MLuC3ckGOqUB0PSO6QO4AuX2VznKAEef7rYyPGrTINFVgJf1caI%2Bvz0hJ48bnFhFEGbgPTKf3yOUFIIvR6ADR6PICvz%2B%2BBWm63zdKdgnkRfmLAs48kahe0RrRXRyHl4Awmhzw%2Bcdw7C6I9Zn7N3gPv95Fv4b1D6g0ENa4L4owzzgpDQvoKPMvlpyr4eyb56mmXwrKH%2B%2FttFeaJ6QtnveMEjfnEAZY2e0lZt57TIX&X-Amz-Signature=bdb20acc14e14f9fb2f8360d103afcba9dcc050b2feeff6c5416529a6e7fbad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

