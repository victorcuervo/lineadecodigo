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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674WFTTLG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrBnD5CsfT%2Fu25uMkJQsKfK51N%2BWNf5E2hChjuSj9mSAiEAuXyAJrFK20S8HNheuRhYB9JmFpBYoi3SwSyHP7F5fp4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDP9Tp%2FvZyKcsyb2cNyrcA0ECiHYoNTiPxbhPAJzNdQTHMUOyFvg%2FqprPGmYtA%2F42GdHDm%2BiKX%2F%2Bn%2FSq4b1HqRMz5qGTbe7EeEtOstDMq5Rt6Tgjq%2BDlNAd3gB1Xpz7DPABLaNbZvmVV9oEGCWaYo7aOw%2BViy1wynSEdAh2jewIZGFEkC2cZDfFfSoSoPekoldgmz795Cajwi%2BOheEj2K4Wal3FRe0t6Nmz1ZJaN6c%2BzkUvcrEAXehU6yEUd%2FtmKAG8X1fpIAyb6tBMBGPaZz6yCNMzsCxEMCmug%2F0%2BoG4ivQcG5sozhRX%2FhMvrhaQ6BWiZ%2BYY40mcUfseJq9JXSFLirdJk5HdJbh%2Fcs2XwDbABHWG8JvfbKdzdaZnVWwyolvIE4GMhI8Bj9gDyWDlL7l%2Bre3eF64BWqtdieu2DZzvX7WJihUz2RU0ub%2FRmBl1rDyMQHlf4LP9iMwHMyaourxw4qcr%2Fjb%2FsXBl%2BAkqiNw6jebuB16rHmTiCeQoUuYdPgYf4vtM%2FW5eu7IxlCbva2CTztWzR5q6G8yzrbXF3u0Kx69zuvb3PnGcDLis%2BkWGF%2B0nI%2BQAOsgkw5ixgg0wYLlWR5SLta7ma39%2BwR75pfJDjhmIWFsvWrE5gSdTByhWXBCl%2BKyvmo2XFai8LrTMNz2y8kGOqUBfcId%2F2%2BJ2Gtv4MnZKJY0NqcB8USseWQ45eTBZ%2F2XMJvihfkkFij7QKom1S4yk8nEYjfgYb%2Fya7I8jY2bF5VpLNIXC10e558i41EKXuL22KH21bUa4UDFnEoDIcZ%2BW1YJyPQUlAzir1KOl%2Fef5W%2BVcH%2FTNQs51SZLsHkk8dRRhPN6d0unDITNUxzsmkdsp23c1FvumoVHyuPuYEv0BlYofuWlBsQi&X-Amz-Signature=bcb27a46af104239a70597a8245536866c844ea56e9b85ea67ce31e0e92a9684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

