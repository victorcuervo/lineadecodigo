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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KKVYJAE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T175221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuJc6EYphrAuJa05mENwu8qeU194DudjMJFq50QhlKnAiAovayn2UZDy4V7Q74omi6033Qpq4L82G%2BlddhomI7FnSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMW%2BJ2XbgpQBl95DfhKtwDzxgNwF560aV9WBqUEt8a%2FnJ5u55WO8t4srVWN%2Fk%2Frn1yyDgTJOrRn5Ttz4DzJ97Ux9Mv6Bj8Ir5urP5d2AsY7tc%2B99Ibo%2Bzab1JO74NiWl6zMrmF6VGZSBiKC%2F3TvZAWVSwFbOn8J0d%2FLJxCdrXz7FqXCn409v0jsSmcvqWBUFCY7VjR%2FRXA7f0HGc0K%2FgQsn%2Bbwupsfw8e1rA5lae7t8HP63q5DiaWixx3bXXMxjBATWfdY2olfGs3wAReC80omGhr8mA411KLzKT82tr25ASWXiyrmO%2BJOkcwk9%2Fl1q7lItEO%2Bic4URegg%2FWKW8q2lUVHMC3r%2BWdIKd0c7nq2jGJOST7gdNgqruKHwCBXk%2Bk%2BK3%2F%2FDQKm%2Bvw8Ig2yCSzb8a1u2bRGalqjVxYb1deMDUqCfiE02FnXaGaadnRrP1ZOSVDpOnFZRf7mkLDKOa1y6mgL4ttIdQ9QXE1rmdypsH78fCMmKxGBVdsu1sWCwoOmSlXTgK05Fb%2FGHmYMHKnq67MyTNZJVpgksMgurBJjcDpT1CHYF%2Bmz8iJa0FcT2i0rIX3%2FCUGVJNpIEs2P4YcURsQp3Nf8k9SRxBiIMqw2dbSN2pZIe3KX4lLT%2B6LNAgjpaCct%2FZXK845pD0iYw8crLyQY6pgEiETwmxxUXyvr7chw0uy%2FkxOiGyzRb8QZwyrh3ocu22KPYijOYM%2BfEw%2FcnTe5kvxh3ttOHJVsj2aA25dtcM90VkuQHJK%2B1s6aWuOj8Cpj7tlHjqv36pc8cpvowj9wBUNnIZy3618hD08vZ08DKxJOR8je6PiSEh1uNjGgR2h0OJqW%2FlJbA%2FNRCbjClRMcw76nF%2FvOGbx4%2BSMxaKWbgfGVq0UKozQMa&X-Amz-Signature=45f31cc07f1accd50ace6f39ecfe8b34fe8ef783acb89c43a7a0890a8eb3ad38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

