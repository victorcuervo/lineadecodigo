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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y3Q6EZH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDnMmaKxae%2FFbcIeIeVOGmYw8oO85RLMjfs4WXDG1U75AiBbtgHexDAl0ORhu2toFH9aFo6Dv4QO2HEErQKXLFDGzCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMqsEB63cDdxiXkB7xKtwDxrwlv80QOjFljtLv2qDm7vRI3%2F5lcVeb8gtIMvItUzFxvo3QzV7Hy9kW8mjOvAbmNe8PtAWUpmejzpSjlJL2ZINuQs6YBqfvvKK75UKdQ9kZR3iZdX25IGGQuil07LzNROoGnEq5QUPCo%2F0Crsh1KnTyeS0ix19Tv%2BkLQv8uzaejOvbqgYuQHq5sVbXW0%2F4bIY0d%2BNMrVPSnjPDTTvR%2FJua7nJmwsjxfoFvaSVcVMWXD4W6dKKn%2BtCTCXwJ3EK7gZH4q1VMPjCeMevH0Qz8nfFhTYZja6MTLxMF5VDKq5mWz1Gxx9AjK2c9OMHR06nTGiMUYwje6kwuYCT9z3GGsN8w9SKChkeG5M5KE3GnzsGtWXdl%2BePaThgDIx%2Fm%2BpvWqK5%2Fin77yN9PiL7zWuvjP%2FTCeGci%2Bwi%2FGlwQydLcBZJ%2B9NfxpYmBjQ9WKtT96ZhPn0zomL0m1d270lnIQiaJ55vCUiIM98ne3FI53JpdbKtVr8ngxqR7liHZ3BqKY3ufZALSTL1C7yftAyK2UrH8W%2Fq%2BCXBG0%2BPtd4cjrKwQM9wOV12Om5FXk4iawRbTSrpu2%2FkO7BoIUUpl1xq26rePxgMkIQX1UkZFC%2FD4MfHwHqKXt%2BhsCe%2FOdGvTWypgwisvEyQY6pgEOwj8aRQUtfEj%2FKg%2FFSzHAbMvFgw6HD%2FYP3zOycDkWs0HZLf0q%2BNhgrA9GCdTgXIVyakVTEy6hZoxHqTMq1sMq84REI%2BI0nwQDikquRY6gZ%2FwNFqTTrsKZCAzg75HZ%2B230IRmd5TNRRiIpjr1m%2F%2Bd9As6OA%2FPGElCPDwZh8SZsGmcC%2BUjTySxbbvQleDPfiD3pXeki%2FgTwkj4KUlZdZE5ITanP%2FPvp&X-Amz-Signature=460e9abbdc761746521ed3fab44382d24a17278b7a0a56d31a77b3618c80745f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

