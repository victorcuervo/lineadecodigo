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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKAOGQQ4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T131937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBBMzRQsAoaYGAQ8dB3JqZlH8ooW963sjh3jDy8L2hnAiEA2LNc9SINtSPu8xn8TODV3ZZ12RJC52%2BPa1Yl26Lem4Aq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJiTb2jQI%2FzmM4zVBCrcA%2FVp%2FrNnIku7EQCMR%2Bj0%2B6iTLSWOP116v1JjmC6jvDeSlgCJLIV%2FeAZ5HZ9NHGC61DLcCGP1BVf7ZkwMbvQXlvUMTQyTgxH10LUXHkChlH7MEg7%2BxQDiWS%2FRRKDTxtYjAZtlN6gs%2BtvqKsXv30A8gQuWN1nGuZNc7gDYZlcJdLVUPOibEYXcFxC1qsDa6TLPQB%2BvwaD%2BqkhBwOII9rV5qNFryiADwub6XAyF0Ia%2BJgmMXqDkvhfr6UV7QQYv44Q20u26D7ilpxpTHD37XyltR%2B%2F97Ib%2F%2FnLGOy4hohTvHk3Xr8vFcf%2FTvkHffHgdNRsYe67wQLu8OZsOPpZmwH%2BawbU3q0%2Bqo%2Bwn6uaRLagrcyUjy4VIF4zLOqOBRXIKITMWo0tvT0FAA8uy8hEZlyr60BjTL1h7L1H3tU08V0vhf6ckp5DI9lGJ8eZcm%2FP%2Fk0SIEbkS0wvs9V1SawjnkgJDC8HR9fPlGe40tDh0RhVTQgzPxm7tVSeo6cD9lUjKfLML4AUqOn8oQobWgmogtYnsxONjNw0KDqylO2nLfiMLLfx7S9lkkLFbHuruJxHLMp1rxmbzpPfQ1bIQsHzq4%2Fpgb6YMu7mSHh2ZbprLF7EnTSR%2FNVaHTgNB5ZNVJDmEMKvKyskGOqUBz9QzS5gcxg8bXRe4sfTZFzbM6lJn45dNLs4Qw5o%2Bv8ZJgSdE6tkY5ICQoX%2BN8JKjiIY45aJ%2F3I0uM3vYRmlb2TZXzh2qmUB62BuEaESAKxNzMlSrCHg6boScvakaAptwjYt8Zwc7HzCJ1rqmDnkTV2NTndr2smhFzyXo%2Fk%2BBgL6SXb%2BNgGlIXsOq%2B2p6U3Mjbn9sNwEoAIryMfEx3a00e68AEe%2F2&X-Amz-Signature=a2804fdde3f30b2a96bdaab4c70d1ee15ce0372da97708c50d03b747dd4ee976&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

