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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665SJ54EE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5M%2FesDslk%2FhfyPOBi5ef7MjfI8Pf4%2BBfC%2FoiQP02kDAiBXOPxTfLfmMPNksWqRQ1ARxAAc0mcZ5s81t1t4i56%2FCSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMfymMjB0BnNoPNja%2FKtwDIGSvP7uE43F3R3kuRQka6Uayz%2BVzSp8OBLSGk8LLNupY0h5ELfDMOInwnzBQypt8J%2FbrVNumCPEWnw9WQOBuTFfByECRa2TsDS%2F6tzr83PpjiuKyJcvL33ibmR4nRapRotzdYEFDahV51MJWVpFs%2BJBWCq10E6tGWir0b1A%2F6EEWnoYIWSTwFS6pVRjhtYxCzJRgO1uLAVpsvNAUezwaUy%2F1cIfLgpwCVmK2Q%2B5zaC9nHpM4BODAwI9GmEX2XREaFBvNy%2Btn7vFWSPnmXvLfqt34qctmzvpfF6fcLbWOJwmUcS%2BVgDOdFRCzAkU6jhbqEzcfH8n8CnT7e3%2F9dox2FwxM3oCRbUzw2xTFfRPpvZE8TXCafbiuda%2FdpzdvN4tcsgNiiWRn9%2BoWNee1xqfmaGbvjpraDqvVqfCYaUaW%2FVX7X9LJC4igIA1zdkmum3Z1PsKA56cQEsfwur1NqSNMaL7QTpl3xUnM0%2FGhx5CgoOjUe%2BhCJ9nbRjIitzYSoSsdcwzoDCS77M6sVjarTH4p%2Fp%2ByjOSoMTOcK860k2dXIJiTMp1mYeA%2BME441u7aWKvIoLG6RBj%2F8nIVQY4zVommX71sYVh5B4bgU42nwjKvDxM%2BzJIDMjqcGfiT0p8wv7zPyQY6pgG9nwqGg4O1mSYfJ8n9PZ54M77xTzPwy0vOBMIKo%2FXYKgJig2ToR3gaoGEmbKTHJf672ySE4iDfl9VhroAL0ZBhGepN1UHgQK4vRKQ6vZ%2F4AozC7dKgQzm1lQHTGxuVqd%2BG%2BawrqnCUtnXLDsKSxVAn43tt%2BlK%2F6C8pkaIZgSxI1NqxcEn7OD5H04qqDfWgoOZFIh6lw7ZgPiq37QU281MpRO%2Bv%2F8TF&X-Amz-Signature=afa0ed3410b884117442879f7b0ea9461c162b80d94ee287682252d1d1bf2a36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

