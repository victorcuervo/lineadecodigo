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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TXJZANW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAH%2Bju4DHamVliHckdIhUn4IYnzhUMu%2F8%2FjQUso%2BrTwEAiBOWkM2uB%2FIaURd2HBPbR2EXWy1JVWMIPBiFL6KbM%2FE1yr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMxu%2FaAyU8UhO4soilKtwDVfiXXshsWvPo3W907nS%2FjIk8wnDc%2F31%2FDqserBHFOq0JkaLuek1DhsJVd1%2FFkDE6bqhHECKyx2goVFjqWFP4rGikTUtf727%2BkbZRkFZ1hW4MzbtJ2k1U8UUnZYeHcqguc7h%2BOrLyNKwzllDebq9TE8BjnTGwTlK6Fw5o8DK4NVvNzP%2FXvmGkmv10FXW8H6TTffyNlfM99gubHIWlkzfm4NXvEER3cYEH8ZdPes%2BwnrKgbdziZodqp0nCAOtTeYO7CBWvOx9Sw3hy1Imv84IXTixbJq2djZz8FYyP2XKvOZch%2BcFakIsG7qj76%2BcbKnk5NGyHqEc1k4YCj%2FGGuApWlpwsGfKYRMwTwFUzAsbuMW3EsD6zozoqBfBKcxgeAvBS22VG%2BKihy0isllAyIZ3ejvFZU%2FR69lsd%2BzoL4Js%2BFmZrfY0vbstEm2tQN8xV5VcxIY6YGSDkWi7P12NFiS5NGbGZlAZsWqyaXuxSpV6mjFJvWWwLbBlZK5yI5J%2B2xx2YsQm%2BcfKFW0qo0MTSU0%2BeZqN73lJ3PoVadxz%2FVJnUaWbNQ4OzMF0oAwaLeYaD4Rp9gddL%2FGMjttbHj8%2F2%2BwG1ERPqNMXTdX3C5kG8v3WyoDwNPDDdpygEm1IUTOsw1%2FzOyQY6pgHOM%2FbNuAdaE2D0h%2BfeE5KuosQnRI8krJf2GBTlPG5SUBIECwZ5j0MB%2B8mUDhk9FecAs8%2Bv4TwC7kMQnFq26q1DOPjv2EhiT90u%2FLmuRS%2BC%2Bp78nrVY0e6wnrlWsFmbXO0JSWH9DX1NQno2pRg1SOJs3JzH3hJ3IAw0cS60pINgdzSyHr9vYt0xX9hXAuTmN0Zdf%2FbkE1Nf7UxLy9lSE5nma1L4VhC%2F&X-Amz-Signature=f93a605f5948224a773b7124c017f45abdcc3711ffd1d3ffbf9b0834190ba0a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

