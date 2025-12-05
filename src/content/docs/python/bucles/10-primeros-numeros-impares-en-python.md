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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEUYJYVZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T002857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9A9MESp139VbyiwooYaCIOk0IsE8%2BmsfmcqW5ZI0f7AiAiJjeNE9wViZRs7trqPDqGDdRs9ruo%2B1%2BnXdTWURjiYir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMbMDdzdbGcB0Zlqe2KtwD%2BPXtJDZ0SbIqfzQarEdzbyiqYMHC7sSz1jMjBZoJtEQ7FmYIUlYuuSvqVb9NYHRyEZ%2Be6G1t29qGzV4cJm11vlWvxArJq60jj8E455HxerphnrlbYhNdF3GCFHKWOJHvbJP7uH2vhPESXu9SDAvLhQNKQbQpct6fkQad48po4AHL%2BzCv5AIkiKIRg9V5qis6pLKVril6RD%2FoUJJwQpUr82VdecV2jv%2BLiR%2BvzXRWoQmmnWoel0qPnDz2U69IRm8QVjE1wkviY6ZXOufRVR41dkOTYloJh39SJDMPii6nvgr95EEw18FqJHaoYxfVDG%2FNZVUDjqm9tCidXb8VEGnv5UlITHAKFByK7dCCRG7uvpUxSGCgw2Hppl0udsz92y4N3TAyBM1rTcM6ArvskazZLQGOD%2B2aXRMy4wiPemcVzh3S2fUJ2hulBGoWUXyTSHVeW4PWF9ATTxMoeoS7Qz%2FFYgu50C5ngf%2Fgz8LyCe3afBl8JQEBMjBY7yoSAHEMWCzScZgREO4fWfTKvInvMFo4lMAHg%2F3%2BEZ20rpYxRk%2F6fx3Ub41G0mYLprQMBJ1FUpjtw%2FnJ8wgS6rsa4gml%2F6K85HRyVAOpCoDTRMQ%2Bt6F467NQjxnXpXPBNsWcDHcwnozIyQY6pgH7a%2FUCU19UP%2Bb%2BA%2F2Jhnw1tb7AfFBdFpsbchKQwJZFNXV37cLXPJbU9%2Bz3aSe%2FrImuN%2BxfmYbQ0MaPFBK03lZE4300Jj9rUziFjCn4y1TGHtForrCUly%2BMAIIC7PI3RHH2nGcpuE69l%2Fm3ClR1bJeGVfMfeS5vO%2FaLvWY2jmYqJ1ef7Moe3i1%2BYpdDfHni93JmdSKhWLMVhu1dFmT0QzKpPyti1Q5Y&X-Amz-Signature=fe695eee42d627bd9cc402365d45318e15e1ad715c40028ffa8537fd607022c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

