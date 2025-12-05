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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CH6A7S7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T005602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe2K7iFLPB2exi9UikHPsjycyAyUApC4IRy4bSGstFDwIgLbMpTwbxS58o8MEfcHS25F6c9HrvPko0XFPD3S8FF6Eq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDFbH4xGmbngAEBLwyircA0RG%2FrsW4P0O4VgEpYI5wqe2ZIPO59LbR%2Fc0%2Bin5ESYUi9dHbDN3NeT5TlgnQf8b6C4Cg1CQfsvgL8CAh8yGrfwULQPQBpzndHhXfhd8kw2xsehhMOwrt7nWN8yjqYrOBZJSAhyXeKciKil8YEqrWxpmmRcwx4vGxGCDdur%2BKGPuLr9nsp2ufqSblAKrGfs2AsBHhisI%2BEf6l2FlE6p5L4EhvW%2F09KkCqhYkWjXnUkxpTQ4W8WsYpXRd0GYi3cEGfAXZGB%2BHDBShmKilyXM0mT9QQJlmXBtd4uEPyDP%2B2Kav5Ptu%2B4EIvVJb8JjYcLiXbDnoeetr1habVO5IYguLe4JRiw2WWx4TS8pNZyUI8Z80RU8tFIltpjdSROifrr70M4GdSwpLjp0FVpkozgBiJ2o1x021zKKH63qpHOqPeM0bMGwlsVcO1xZUhcNosTCO305O5E866JWcRi%2F%2F%2Ff28OJ4hpqGktD7cqkAScr74l2hurs2vUfrKA5TN8Ft4WKLr3gienzURQ3%2BAplbNH%2BlBsGhygfzM1xazPhtuc%2Bq%2FnHYq%2BIxQ0tpRugxBr%2BMBLpTye3d6EbOeRupk7p6GQLARB1ntc1e0N2AluvCdEGWde%2BF4Jipxjmx5ZROBvNWjMI2MyMkGOqUBFo%2FAgAwa%2FRvIQp8HwStrxTAIxC1PwRiEFLHCF64ERPzAkXh67sabgEfjasoUnJayOGpUaU19F6jJXb2vxfwi3eIGyfIab4mCmMWkMSMnAJIhTAjrOW6emdjn%2FkON7QvUK7kkBXWw9dze33gQkncgRqQhRpw7l9mfyX6Y3gzbiuYVOJn6%2FWv7C%2Fcki085wCHuLc0SeDg5NO7W0Der%2FKSkrqXEPFnx&X-Amz-Signature=712c3503ca862816d8db09e9f8ab839d2ccd336d314ce6ed1fc17568734cb14f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

