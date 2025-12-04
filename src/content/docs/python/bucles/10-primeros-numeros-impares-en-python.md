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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654ISI6SJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIHfkoW9tgVcdQnHPR%2BWrPlfVyNzmRqIy18NHY0FP3e%2BQAiA2ka1gifx0R9I1ybT%2FmaJiv9SM2wc2vYXt5I%2Fxa599%2Bir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMzhwUGQ9%2Ba7NZ2vu3KtwDD76%2FA5X8YU8M7Xww3%2FMN3ccZ2cr5nuEOjCHwSszb6cWlbk%2B03x3A75F%2BuoY3ZQz%2F1n1zlmhMz4tTbpbSdy05W%2Bzh87J9Z9UPWyQRYU7eEOQMdGl1wl12TgfqVwfM%2B71QIfcIpS96ct78eJbcN3%2F%2FiwK201l0s5uvOVR9%2FWL9QAfctOIm3%2BDb0AM3FJ7fIhmagN1i2uGwUHYlw4J92ZFIm4EAXT5JqTv98jf5qJFeK%2FRo%2FbxeQG8P6Ki%2F9%2F%2BdWpxMp2C3CEm4ETN4u1Q6J3oHtrQvdFNX4Dh5Kli0TNpuc0UZzGlwmnlbPVPFnGuknNupaS%2Fw2tAxbT4ygaAumMZAV2x53FbVQ2Bks16zrF%2Bas%2BkUCkuhViWUl0GKWHD5P%2F7OBtRT45m7UMwOydAWekXqTohXZlgnx0IoxSwjeoBvu1WzYZFA8gx1XCFAAy6rqswioYE%2FCJu9u7IyOt%2Bv%2BRk3RNIQjQVlectVHklYP%2BNEMu%2FxDSizQLdCQV7QxAZ3BoBM56lVrUbckmYLpA3eMEatuEqjeRwP3pkCWM9bJa8EiP8j6y2Q2RSVE0J6lBHTJfck%2BAN5wQHRYol%2BbT7Aq0FQqCk75sR7EZMXg6OI0UdHtzhIg9vGhdmeimPBB8Qwu%2BbFyQY6pgENKpApTdyW70tmQakFRNjbQwxJJiq0kG1JiCqnhCzfOeneV9szHxUvXTQTfwgagYuGCGdcpxJRyE37lLARfrxsj%2BpJuDJRs%2FEZa8S%2FFv%2BPhR3zRCHKhwzRJWRm79G3E7BVEGpXyOxBndca%2F6C69ZYuTaGp1OHJlHdtO7MbRv7l7vOmv%2BjABP5gRGQGbKRik8B%2B5YCMI81iB1SSYgj8RQ%2F1albcMwhQ&X-Amz-Signature=beeee80ccd569ae4f861c9e76f24185dc6eb14df06f867f322ba2a69b879cbd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

