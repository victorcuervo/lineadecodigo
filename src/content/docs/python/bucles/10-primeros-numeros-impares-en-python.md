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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQLTX3EU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAOKHxcvtHnRclxBgleHfNNXOWwBhIvKqv43FI0xPQi%2BAiAJo%2FkFTI80CRIYg9tNlvCzvpBhIdpbDjtZn%2FB9PfNhByr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMek%2F7YgNYV0xDdG9XKtwDFZcNOybVqkN06%2FEkPQCDjAGh%2Fof2JMGvnt%2FUZ7QIZiVKqELQxq3PYBKynRhssIEU10kiaTbsMz6iOtaarDcUoAy8T4OdxKRiLmmSqkxA6MAaM19XMvCJBJaDeP2Kd7A9MncD%2Br8kFWz%2FNpaXlE1B7m%2FLcOH6j2y7U4PdGW9oxODPKXSfQm69RQrXxl1KwUKdJ9RTpcCdnon2LpdfUKm2hY%2BtYq84osshK6a5A4b4ld3nPbxqoFvOVKElO0U6a%2Fa1ihuSN%2Flzg4ob4rpQ5cLG2Ze7otx8MkMgCWstarqopMsV2YRr5G0a5rRsDCifiXBRrbFYeWa5z4kve7nkxoaSMA4i4342p6wubg86a%2BRA%2FN%2FidSj%2Fj0I5pPPO%2BK29BboyAqAuMwmDKbaS%2BxLdsIEwKOuj%2BTERxCB3a1JZFDEDoeho7K%2FRSRYnqSiuAOqhX2kG2ga710J2vM34c0fmeBYsdqIDd64wgCokNEcmsS6lbM57H2tQgLI9ShYUha%2B0J4Xyr2PX9D05BCXM1p949ONVocd2nMoU8gz8hqKJ7JqoqF3O3b2MY75wDpVL4Fv6PVQ4iJTOATIlAiEhGyby6kt0RTfijTcFJqOBxEcBijLzjpyds%2FKZ63%2BLCMRgpWQwp5DEyQY6pgE%2Fz4so%2FU1hOlH%2FqrdxhmtDaa11%2FVQGCplmiqJViGdt2HXk%2FJQBlhOcrjPwMHJMc%2FXfyvnT4Lf3k7q7MS%2FK%2FcK%2FPhDw5YL0nMCeV%2BUW4DRx%2FXCpY%2BEC%2Bimh7vxqmyT5wosdb5hZO4Y5c2EBQjsDh5ur0NpKqK2vNj02Vc%2B5B%2FUKl05GrerMUu6D7slwUe2Lx43JzTmeeufdTtytW8T%2BFus1hUP9TQEz&X-Amz-Signature=1b31d13f3cab937627a3eb41302b6a0eacb25726d9a3fbf7b722eec7465883f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

