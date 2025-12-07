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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BKRTMBL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBjgtkQo85oiK%2BnY79XBR3DC3Zvb3mfV9nKoPzijsR7XAiBj%2B1JFCxJDMeNjzp8G0MC0qJLCjMSt3ObYu5AtnVYCjCqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCIGs91NsovFaweZAKtwDLOlR2kAlM6NHVddGGAsbqRXRZ%2FHCEdxPbGZ2b3yicmCFTMW9bUdnVNYnTCDuceMpRhSHu7cLHVhf9F2TrTDS5v%2Bm6XmLoUFMUt0xOOYHtmyFWjqre2A1uA2B72CeZNuDv7ofTrcet%2BF0G%2FwEGQG8BGKHoFvDFEJIUcxW0NEWNeWugyLHmRMzuChL4Dkk4u4bfqOcdoBps59KSEa0%2B8eBu58Hr7RBN%2Fdej%2ByoPu3xiIPLDxSHHPqNPQTaehsbtWFDMF71IjDN4MvFBxGvgce1wAFigndTUSdb%2BUfFLH6e4MN4j%2BkaegQzmD%2B5aL2q4CPHtYxZFbmQcJrkstUkaIfei%2F%2BiDG77GhlYiS70WeAi53ur8f5jrizOiQqBPNQbkgIwAIx2DBBhid7SpbRMX47VtKuOEMMlrbVyVuNjcWXLINDjgz1hgNZGyk1JrUPsJGuovFt%2FDH9lVipzfcc5t%2Fm%2B21x0vq2ymuTAZmaDx4g7%2Frn5w9J9bNYsCMp6qQHYvhH9sMxsTqfJ3R2oFIVi%2FCWoqZv1WM0ikai1AAm%2FYGZ2vyAOox%2BqICX%2BVDIF9e5bKW0q%2FMg7PPuCL%2FYNYo4h81jA4PEn8GiYqPGFH9wln2MIk1FZ4KWNSE5er1K5bV0w94TYyQY6pgHAz4n82AoeatB6840AiNatlmCZWOI8ub8nWz748TJhH2Yoy3luxqKD2I6FPg9lIcSxgJxzQPPSDpclHuQgGDDvCVH3zJ6YmSrgSjDYX08%2F4zYAvMEJm6VpvtLImHp8LacdbUXFQQ80bDvLr%2BHiDjdVCrtnYAcReOQt6ZctlIq8V%2FHZICOipjY9yp6glPLxZkRfmxhwoz%2B97%2BLV0XKDyUTWJvF5Zjdo&X-Amz-Signature=12e2827fb50c1b96aeda54775befb54c65038a89044b075ec200a7906ed65875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

