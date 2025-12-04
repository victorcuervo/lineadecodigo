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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFBKSTIN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCmnT0mu8RUutQwNq1QRiV53Fq1SbMBRf4BQ5Vh1zX9%2FQIhAIman9ApVuo2qLdgaRDYHFGDLjM7QC6QvyfcsjwjMPQIKv8DCDwQABoMNjM3NDIzMTgzODA1IgxajW%2BjtXwroHMwI3wq3AOg4Fe%2F5LcQDkofd8t8XP6ZEX0r2gMmu29ZyAmrdsCiv%2BivKH0HFHTsgR1EgTTOVZvLrHjd%2FYyrngc3MQNQdaFN4RK%2FAyZ8jLKix2nzKyTitl3MaOCUgxNqxJqpLlxZwc3ybg2OG3fobrfYxhFc0YLoCWUtcL%2FeE4x8BmwLVn2yfImZxzoH5B01DH8cUOJf7ClDFDA118v9MESsEScs7V2ORebIsCbHttDHTrnFIlynICykZP%2BahuxigenOTgR%2BPkCyuShkRlNRDzlAw0F7pN%2BqpbbW8mAbHGxAuqMlCfi8%2BMdCRIShyVdpt7WfIoDDZL%2BzTQiOmvSuCJqP%2B%2BxyuODBAeUqwpwUenefMSpHUxPNas5nx1k%2BRkAATx7QwppPZ%2FrbQ8agIVpDselMb2ezc9MzwFvGrxssokHDe%2BMUNfX00ilyVKrJHN8%2FYFJHxTJJtAwj4TWNyRNzQ8i%2BjQAkW0I4zA3DZFebOJMABCYSATfF0d0YhjiH1B4bCXSoJqSZP7mteUx9qblwCGLNzsdy%2FCuaHoSrnDnwfM4hjZAt3gF2oodLR6RulQEBJtpTmJgz9RTXE5sUs8TmxuhzANHwo2ybSwZvHot6FIuhRlJskVFH2%2Fz8ZYHWMnezG9vTBjDM8sPJBjqkAeXz%2Fn8Y819doRku6hYttHp5zrboYK9oqUkM6oZnVV7qiV9ySsWkStX72ZM9duM%2FelC2wxcdXcT8stsxo%2Fd8lGlleh9zauUjBDi34Am6v90SpUWmDhHYN3O4qY%2FYRMrSv3fa5ctZs6ShwoM5Yt%2BEznkm%2F4Oi9WTLZ1YUm9ot8FSIn4Bqa55U%2BVi36m0xZYZxy46RRgClrA7u8ALZRtUfewL59GSv&X-Amz-Signature=acdf96f5286cc041525392871004b5325390417144acea7100999e465385bac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

