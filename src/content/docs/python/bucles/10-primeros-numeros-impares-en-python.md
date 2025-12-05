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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642F4U4TM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T221709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1Dge5sbAj4KcF3%2B1LuQ3FBmu8OcmUiqXoJP1Cb6gkFAiBQQG%2Blpuoe7r9ksnwB8m6atCg2t3w3K2kZjvKm3J5giCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMrtlFAO7sABK%2BBVQrKtwD509dZNn%2FBJw6E2dRMMIXZNG%2FrMhH4Fn3%2B63Sj0Y7n6ODvbn5azNUBpdEM5eO8rkxjQAuyfInfujyYW%2F2AA7UTejg9EuUpF3g1z9Tw6GSWbgqYcDjKDX3yetg48Ydw0I6Lld%2BNAdPRR0yT%2Bpd7ZKyT1UfHCzCaAy%2FS3KiNIM3aoPKLtXEhfRbuCNidMf74kwjrcpW9xYqa4Uq30DxIL9FPi5DbTZj9iwVvYKhIy4IQ2xcZgIP2pAN77RFCb1ZC1mAUwUTMJ9a85GoPSR4%2FkaU%2F4MkEAUrRgERXOS98oDm4Aqz%2BPYmU9vUa5P%2FRSxidDuKyQf7WRohO2l4M6pii4BKFcOqpinCqeukbbTfM%2BgQiwuo8JB02mYquC3Ko7s9a92fo%2Bnp1XO9hROtK84YIdX9nv9dTjarnIWKGARCgtSXsWwIOcQ3LEEDIxPmX6Rx858s4bI6H%2FqIoTNE8z%2BNPltTWTtDokvu6q5PK0nOhsyytLgeN3mK26vJJp7%2FBDja1FnTmnh8TBdFzH8j7M8qJWoB1sNzwpWURWIHWxoY4LRsJwb2I5ewL6SLVUyXgbPZfiRHmjLqdVvznllPkjKL5ldAJJw85PawXMmeVNfBTUQNrWg0yeh0JTEbxLM7x%2FUwyJPNyQY6pgF8wNj93xpvKRi0pRNuXAiSq1GW%2FkdF4aEd7hakoUtyFmnho8%2F3uudVQaKLqijB5kGIR%2FoEneu97U3z9zI7R07CAJCS7fcTHxw6PTSsIO0eVDCij2TiMYVbeiVexYp1hZdBJjHYX2G2EHTio3FJxXJ0jLs%2FVGku25GsmpRDHAFKGb1OEI9pvRKynxOww1BK0XdXF5F5FY2Khcg9mj43%2BBhXYYqtp9hV&X-Amz-Signature=989de5ebb9a0ee86f1b6232c28ae447971926d3bd91de1202363d3159f582ed5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

