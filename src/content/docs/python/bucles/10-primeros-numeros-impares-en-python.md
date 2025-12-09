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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQFBZ6GJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T002605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVNJCRf6J1RWD5yL47Re4fWiW69LNZwRczz%2Bx4APKKyAiEA6sDPvFarvyfmbgZ%2FA6wZCKV3qGfyEIbJFkuABFgkG3UqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCKsVZ2Y%2BDyJzYoKsyrcAxv2ezxky3df9Baue6wEuCW5jYs5TjfOVE7Yeb0ok2j3JvAUWU%2FYeUImhtLX2iqvP7tZykBneRsgwQAJLRK2PzRAF5U9qysjEWJTErCG72gTWd0CyjrjwqhffOSfy6mxrCXP%2BAiERqIVATNVaQoJpGebHp5gj1s3KKEGPw%2BYJ7VJ9wTzyb2erhKCfg4nILphsxxBfkCazdjC26DT4xcaS1F59Spk6hVJY7U6wZEGR0Ib6pNm9nDiqCYjIpwTF6yiBtYzquxxkMf%2FtVhfs%2BNJIIQfO7d%2Blx2HWSddVtE%2FPv77F63bTysy3CvlnKmZxXQffSGY0RxWMEX3AXGwconPv4VcqClmJ096kkV5FbVFIlc0asfLzW%2FQ1bNqi5Mi6z4UzGLzvOJC3AABR%2B02OWDI6ojVEVh6WD%2FZEDCHDPL9t%2BuO%2BJXFT4utBYczi4JPRM1IbDA6%2FLOfS8UBMnbkia976TrRO%2FCcwI1boBso63HZlx9xssJluhqazByfnyI%2FKCnVkwgFMU2AQhUaNKbvxuO9wJgPq%2FR3HyM5MWXVAUoUS5nE%2FIKie7SYE4uxLUxasFifiy8xTeV%2FXXW3CifnNT2YpwbW%2Bzw69oayLMhW1wlqOesKuANPl4qT%2BdcXmvc0MLTC3ckGOqUBJcZdGNI7wMgKbxxZtBYEhldqR%2BFFA8XhMgfO7QSi5FmXCg%2F%2Faqh3tt%2BYsq1NHVi2AU9R7Kl6lOrildQ3bxJ9JgNcCv4l6mOvKGiCLrupo63GG89ndOctULwJNdJbNMbukjduzDhmemCWPDwLh42sdzTLP%2BlSXPA4YUeyFlUfFRW2NXblK28mOBzMDrWayH1n73u0YwfLZsLGj1lGTC6XSbrcf9Gf&X-Amz-Signature=358aab4cf77beffa7dfd53a4d41a3de24f176a6f70862d1b2dfa916b8cdfab3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

