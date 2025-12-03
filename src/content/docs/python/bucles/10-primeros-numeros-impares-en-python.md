---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMS3NML7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIG0gEbIB7tnyHAfzogMmEsouLlMRazj92fxPL%2Blps2vzAiEA0R9PyQO8%2FnMcZ5RwIkE1tVEoJbBeBeHKvXyttcT7dFYq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDHMBVHF8i%2Bn75yXM1ircA6uRu%2BEbPjSdn1cpd2zxeRgCNrb5PI1kADmQItv6I1LJnkxiedu%2BEXus68Fi6XmFC5Swz4XEjLoXhlI9bmrjKYN2%2FLdq%2FAe%2Bn56U97sHOg8q%2FHxu7kKrAkgg%2FW1wSEa6CaXeZT0cbzNJPOVmp08m6a3p1%2FH8eaeZ1mB9KMUS7VDGtJsraB1YAKON%2Be83etQbX9rYTiX0V29rKDBiK3Cc%2BdKegMoLhGBJBW991I0R9GUHM991FSeTdEaqFnaAmYBxE2a3T2q%2Bz9wCl0%2BvRg0nwTnyF0l56Pza6sBfQPAg4qvINNUQ7A8Sl9IhXT7UjGfrh4w4za6DTEf%2FfIiMpFTzhCOH0%2FELZnOJZjA2DJT7s4DoFwsCAFtNZ1ZvlxrgvG6xbGC1LrcorT2dnbHnDeEDWMReRqjV6N9FnaQe8wLLe9qKGjDq71bbLl8zyEF4EgckP%2B5rtcg0QHKddC5ywbi5Ynl5vd5vaOmGYgwLdvKMwiFsOJgA08X4bAUsDiyKOf56GyWEPaUR1FV5RB83zrUQafYrxgUh6piRguN6tCfSQR1lbnxHlxe36oLR7b5nVn0BnTVIKDxdD9nVaxSqRooFxeCbqSxN9SJmIjAhIDazCBKJpIyRu6C0iXu5HvXgMPvcwskGOqUBkofcfvCpHHV81IvUwLK9yyr6xlmrpxtl2fv%2BNPTevCGr18c3yAHV4wi4y4yMYSztB1CiofyBQMDDh6m3%2BXRxNyDm7evdWMCThL9L7bFCLAi5nX7Pwm%2BsLNvRgutV8N7ICsyghOf0%2BcQqWYlpgLKVL73x9n%2BuvsZrSK6BbSo4kurGNeu%2FdefEy8OI68N4mFKii%2F075zg0%2FsT3cE2ro1EQFRJ7rxyI&X-Amz-Signature=da15fb4a28a1fc2f13faa45b7c35ef3eaf9f56474abf7177566e309a08014b42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

