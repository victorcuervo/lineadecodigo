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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU7TVUW5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T063656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZwAD9UCejmrS3stXJ%2Bid8RdJ21yrP53M%2FbfabEoEJbAiEA3RQJdjtFxTgpuSjrkukNbZ637vdqg96jdWTm1qE%2Fwk0qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0qbcazZXbexJGLEircAwyFVi2AzKsjnuoybg7HHy5Suj5L%2FCN0QyZi3Ug2NsgEUMP%2FI20iubrm7TeoUqNHIeAkLYiPXgsdU55ssmiUae0Ysk9VULPfnAY4Y67h3M2ImeFuESiczdwRZL5z9FqMnlasq%2BGXqB%2BXj7tUvBgnNq3f8%2B3Q6AMIowIUW90XQZ5Z7%2FuTPWGeWbaamWozFD%2BVA8ssD9MfceOoX9Cjb95QgLeLWynZMvRSqwh2kQOwJnZgEhzf0YA%2FyNP51u8oYBLCZII%2FQL%2FTtrFvhgHdlQ8gNp%2FOO7JcqydtddugIIaZ3m3r9tVuP3NmSLo5bE5tcWHEZnzN6h1jHKA9woOucouNK6BP9NwnzwN0jPATVdmoSJ2YB%2BoyHkMH5fWRfpgr7ehIzi4LLqcOe%2BnXpBwQwtyNrsrVsaqUMiMCv2YXpRbffF5v%2B6utJkuK7QMVEYSw3FuR5hzILE2v%2BOENFPoWnHilb4P2dxVtaH99aHVOVwGgkXg%2BjHIdrcN1%2B%2F3eFpFiWg%2FzU1CZ%2BGxhS3XOch7e4PcIEPXcc0bTiGeT3HY0JdJ7a6gIt1jr66bzvZbJKoSsMbQpMx2wj41Xlwm%2B%2B%2FuDmspT0yrttGZg6VQsCZjUPF328TE3VW5VOaIZiB3SW9OdMMqh1MkGOqUBo1XN6CeYMcp%2FSlGKFpt66CsVDR80S5s0SVRLcOaC97KIODSEDE7s%2FqOB1PxlyWlJ1wZhIN6rr%2BwukTL7TCMawPLv9FKsJzubm3%2FAyXPWfzHhoF4ZZ61j%2FSQ7Ng6AnN2DOC6DxY%2B5XHIb5GThEynCzhNm3%2B5Sgz3q5wPMbRKXg3p6kGY9%2FxlASO7Ngg%2FGJw8vc0ezLWWBoLEfW5pBPQKIHZ07RV9t&X-Amz-Signature=5d9629572f98ecb6cf73a4d32d7ae4429ee3ab369071c5884e371569dc74346d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

