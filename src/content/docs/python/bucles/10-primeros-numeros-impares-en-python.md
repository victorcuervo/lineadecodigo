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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DAHVNSR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T095804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKULR8o3HM2tGQOXbUiqy9%2Fr6eIWOkvW4BZyX38THEggIgVyGLu5BdM7xJeouhkGN%2FK7Jleb35z5efB12r5JNcfJsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOYopvGNFw%2FUQ6SgYircA3yWDcj%2BMmQApeSJHmvvafN6tYZzPzesKQqlFC12RMBLBc0cu5j%2FhljJu67WGKNkq5AztcBoCKwiSczh6Gfo7vlt4WcMOZon5z2yrxQ3HzstpXuziFVWzllduj4mh3Efn0tFQ0iTKKqbVM49goGO7qL7TkxdLe8e4NMAz8ND5Xgujzm%2Ft7i%2FutyvQ%2BBApSulj%2FV7RBx28P7K2n2rqI3TdssTGeNen8dtQTBgScTBc22YRdLJF0Nqy1yuH6cpUwzNhqqBVDXm96dzO2yW%2FT3ZLS4QF6rmkGRyjnz9r8jBL0bc9%2FxHs6TabnjlANQvuaF520lb14qZLbZcrce53C5UHWe6n%2BgafsfXTCh5yPjQGVevEKG8t2JwZsvdyghRCGSjHM3FewtevQNhutfP0MR7CDyYf5d8VKHMQJMR%2FjoSuLl8%2Fmczxtq37kDuL0k%2FcztMcdzWL4pGwXdJ2fs5cFgMEoR2uHYRZzUhsRLu6uXu%2BPEARrI1%2BfNdKKPhjGoDh%2Bkn4Gt4VhupwdkN81iSHA3kAcKhCIm5DMiyAyPfElNdk%2BZvMK%2FNTj7%2FhuFre7tA%2BsDOdw3SV66HK2Ugw%2BV8x%2FFD5O%2ByeCbMD6priQOJd069db0z38JU6yeWfH92rXlDMPTF38kGOqUBHmhCxdp6Fud4Gpsp4MUwgt9FuGz7mowJwaPdGH0ZxunlBx%2B8WUZ7gjo5vcbHxpzygmSSCL8qwGoj1V6VuYfFt%2BN4%2FNvwdbPEDFuFLp80VZ2hBZjY7QLo2CzajzCWrJ1sT7Tpdc%2BzHMHZCXPMoitttSrtfgEntFeElDv%2Bp9pb3%2BZi65rnDxWyr3weTtbdpxjRckaW%2F%2BdyiW0wRvZxfT8fjDsvs%2Fe4&X-Amz-Signature=ef99051e1606e32e2756bc6379fc38d363d9b5d9a31a8469f27d845c4546f38b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

