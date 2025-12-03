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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NICPUC5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T060702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDDAFE9%2B6g64Bsq581A39W3t0%2Bh%2FXIX5Es%2BRkcx42%2FuHAIhAIF9XP2PV2arBiz%2FjZZs2ODggRRTcL5ZhXk7fy%2Fbv8axKv8DCCcQABoMNjM3NDIzMTgzODA1IgwxkE0JEPkikJB4jXoq3AMup%2BwrDb4Smug7vnos4neL5cTqND%2Fos%2FeARaqFpWNqe1RqMa8a8ZGIml8bX8N47kFXBnrOPnBwOQsnR4iHlTKGq5Y58sVrp2DW3SKwv0zCYJJyag8ksMW5oi4dXuSM5nrveUVCic2yKfJEpkIsb%2Bdwo8p7V%2FeXto8FgdjgNbucGt5j78QR08oFXOkV8XMTSBJZzASIfAGNLc2BS%2BAJJSKOYZfLKZ5mn1XIkEkeRMdQqq4lPIgOa%2BIuriuLUWEuqSdQA%2BXFuixsG4YnXc0kdWbmkQmxguaZBiZhnFWBm5bTC7jxSr9nFJXdB6gCEUV%2FNOzMtDmcv99zsQpN8RcFrV7UhM1csLMiSdeO4oTIPk0VSz3Mpgj4e3OpIXk1d3KQzBNTtrKJjXIUs%2Fda1rp4mRxTATjf0q4%2FrZqnMGWacsEaSp4EKpuEMKmxgxUK9OSiVay8hzrhu0Dc7KkF3e%2F6ANpJkdmJlyPTarXeBlT4ZsNOOqGlvR4I1cRy%2BZrxDLMz2mAy1%2BaUnGC2viwwz9cRV4l%2BV4CfupSDYObYz%2FCZ9rUKF6HaxEPta4GHWMsEZGAsPsIixZjIEp%2BumwnV6p7nVU2Yr3bZI5p6h8AUonSueBHkMHUea4axnu7np9Q4fDCbm7%2FJBjqkAfYlMX7lGX5UtibWAL9G3Xu%2FZ%2Fa9R5wbmrlSyDeJNT4gVznEteAO5Q7sziJUVempOqoLeVB6E4d62pUPrnXHhb8yUUsKIu1Ark78ow6kDe0EgDpFpMLS37NKRlX6cEu7Ugl68atYPZ9sCgnPLvY2ztyH7NBsBNrVz%2FWh3947FWd9bFdl8ylLzGugSo%2BCeC90mr5KAIU4tOfyd42K1UVNyDPzLK5x&X-Amz-Signature=38d8dbb985a871676acb196bbc237fb131cc0615f20e0f7c8e64d3f6f202f984&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

