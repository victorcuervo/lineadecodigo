---
layout: post
title: 10 primeros números impares en Python
excerpt: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
categories: Python
tags: [python básicos,python bucles]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHWHS5BA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T032429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIA%2B3tEiz%2Fv28YKu0G61PGSOVUjLaDiHTjGfBOd5lG0Y0AiBTmNAwBJf5SHfFPhYExSi8DmcQ7IJ2U7sU9EuADvEHDCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMlEZGEuylJSYDuN2jKtwDIU2H65uhVXqUkM%2BjYjSr7pentAnc2YvDsPJbd15eBK5g5GVMRgue3PXcSyyfmyvx6%2BuY9u7zykVFO58Q68yEwPcAmcUetGT65RFYaav6pD2cGGlPBV1B0SFxzOq8MA%2F6V3Ak36%2FHBbc66q%2BhNRuIjGh63w7AqHdqDVjjjKmBpBr1M%2Fpcxhp8eFuWPW2ulVnt%2Fn8ySP49Qzpq9EOU%2FBXz4wM3BwnWbuv15PlZDSlibTtew%2Ffgdcg4kJ7LrXM36WHRaU6MHWc3G4M2AxHNdeCBS8meTNgBgpkQ9lmawVoK%2F%2BWLW3tmUlvPKTaQRykiqaA6%2B9NCEJcVR1La%2FqFXaD%2BYc2h0J3aCmzpGx1mTJGlfRwxWTDb%2FDeD96kydnRkvvaLqbWG2YAikE%2Bu4ZY2uUFCT7YwBcfvuOuXjYXaAFRit%2FyOMC3fn0qP7EGh9vIJG1TOK8lhRTmZlf2HEn2DxdZYCyvB60tCNyYEsFHvOcn12lNYNEPNWJRWf4Zey7lSTVLrKavjgV419SYg7HdaAfelt0GiF9%2FKm5xtLQIVgDjDNASCPvWX8IJjxhHp6cJUuMBUhRbSiae%2BAnjWH0fKyrbPCPVr%2FMjAUm9f5R87%2FPvch4nv5bubj5jCp4HKbdKMw1JS%2ByQY6pgEwsWibuArje%2FoUYUdfvQy3fj%2B9eksp01ait53IWdcDQwRRNKMINK828qCEczopoHeeN3%2FdnV3U2S%2BWTBGtRmevztSk6JyFMZd4ii0gLMD7kHrkXHSt93WC%2FzA29NHpE5miqCCVm419Pq9zFjh77ilon2msto3CDuwOa6XQF2VtkEPxzXM3j9IiLx%2BxGAENHu8E2OABfb%2FOo4TfoO2iwkhSoOIeR5Kt&X-Amz-Signature=77063c44ec1f60c8854ca176df34ce3f67e61caff06b9c49a26e568ea7e3edca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

