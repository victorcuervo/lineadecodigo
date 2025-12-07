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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIN4MSX3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPA0Yv4b9jewoEXvvyVexmd5269%2BlfcHn01F%2BA4d1GcQIgdL0mOYze%2F8Erd0gcWl6Zzlcgwrjpzmk9dqj0PdAuss0qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgc5AzyFGSYKmuY%2BSrcA5z2RuMxGCzo3%2BO%2Bh%2B8pRf%2FmfUxK15ZgfEZiD%2BMFCZXOky8j%2BuYK0pMTjNsKyCltjLw%2FTQEeIEYkV%2Bfk0cqDZAGTudApfH2heGq553EiFhz00BptfFWraPdmeLHRYLe1IIsukfE6xkYJZhdgeAhWbllNmtZ7kxXeyr2vKV%2BAv3OnZo74FGjwyoN3tF1bAC9ecuEbN5pUblNBpcZHApYU2iYZhuGB3b2EteclaqF9f1B%2F%2BA0YQN3YVXoTCLWeRcUix5tcnul74v4dngXnH1TLCaOfTXS9Sb9ceJ4dB2Q1o6ye%2BXPJkqc%2Ftn%2F7quN%2Bk%2FmR8yL5DJ%2BEsTYLgQ1x8Xepl4SQEb34PHaKk0Gqq8kInP8HZukI%2BmY%2BcbXr9OLkI5M7D9addb9%2BkMZV1ak6mzO91gkmXCVoHGKywbVV1BcWMym7Wcw3YtuMC9lVpMB5GAcfuoWXx3q2vEUj9wH04msuY1kVCpqxD7%2BWNs8ZCS2YEGKdCt2Gtv45Jj1Ycd%2Fp%2BXPKN3pnMZSzY03BTe1qy40%2FFjnMdgOj%2B2of2SPYSWBoAt0ySi8V%2FIR%2FUcxzshubJRvf1DvGiFrZlDZ0%2F53Omvo4otHM%2By8c6f9q0JRAZzwIjgxVG4X99cCoxvsf0Ns8MPGo18kGOqUBeureL8pjvlqgNahMBC14JRS7pdJ%2BsU8zNg%2F9tyWNOul85fRb%2BDa%2F4h0zOScC50%2BwZ8wwWqC%2BE%2BDubee2OHfRMxzERjXVPV7z3McgcjrWCubvRYMBDu0H3mvxlz5B4QQb1wwKikDx4oyB83lrwJKeQIuQGmFaKotSXs%2FWwgti%2FMIEv7FFmetxuUXLn2hOnx70yWKw16go6AkQ5nHehi6YJwlaCg2E&X-Amz-Signature=f7eb6275774a5d5e566dc113f609793dc826bc15a5ac4d37cbaf41491b4b1862&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

