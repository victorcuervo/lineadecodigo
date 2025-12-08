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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU2FM54L%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T124507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlKgT2%2FQDW3eyELoMX4Rx7BYRXyxeU2W21nnNMM2M7igIhAP9sGhdumtjToy6UaZ0zUyLxhNj%2FcAF%2ByWnbqzeOQ4fVKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoxG8QRkz0b6RpQSgq3AMB5q%2B3n9CtLRUvqhQwvDhmAmhNES5vxa%2FW5uKF4W5qe05F%2FMeGuvdzwDVS%2BZyVepvl1zuvppLuDHDnClvc%2FjM6xPiortHvk%2F2c6L5OZXUN7%2BStATzfoAbM04NbGl%2B%2FcvGzFMzdk1r6D0z7eiGwIQz7V6rLlY9nEqHahkoacl38GX6aBazUi8VZG0abtO8apxlEttcBrmSsBiMekiQs251n2%2BsUH7PhzBSOrIVkC6Pj9Cayke5opJ0FxftlNjAQDNzsF%2BJcjLxJj70gCcgsOXytNNDSVtNB8%2BRdFd45UORtd%2BQV9L5Uq0ga5kw4JYS1cA4960jT8vJmXRetNjeMQHEizNyjMPN2ryWxIX66rN%2FFtIJ%2BgCQ1Qv2vpQAsiQJeNwzH2nA6p3gRTjIF2%2FHYr%2BfTwbfvm%2BOSoPJpSLJKRVgpeNvir4GsU65Slj7AqvqfddYI2D3F9H5YsGZ9Ahw22ov2E53dDV1XCJen5YgKC5EnkF3c%2Buog4CGOwci3%2BoCgYsW5riaN0k7ccvjNobDsK2EI9goea4e0mm3ATG5lloK6Kvm4lbGycM2N3Qv7GT6QHnMd8i5%2FfyA9Le4SQ1eun%2B%2Bf4SGP9v5IQB3zuBe1XVNG2cjiOwqIbJwhj7QMjzCp89rJBjqkAarrECL4a294pJt9raAW0OGXte2diiF0ievg1au6bLN%2B%2BsSqjpMW13AwIu%2BNd%2FH9VyK4800MaF7hdcLiRcBbvYIIOnYFiB0TOmDiEkWTSA13Kgf0ZfxefZoXnKCk39FdSp3xyt5UAA7spdFDK1aNZX8ZbcEIQqRiN5b%2F9fISHW49VAEjFy75l16g07N8WYuSsNaeLbW25ZpHfFKB9ARoue8YJrMd&X-Amz-Signature=ad6ffc757380de9679f0f89b70efba44d9cfc0c8c625c1f01ed3458c5b0d889e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

