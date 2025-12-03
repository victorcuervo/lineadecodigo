---
layout: post
title: 10 primeros números impares en Python
excerpt: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
categories: Python
tags: [python básicos,python bucles]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO7G7V7H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T051919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBqGlDINha8N4QqseldIBM7v%2Bbwg1o2t1fpvZkRmuU8PAiA9isMYCgasfrDUWXNDnDIZiteTNA%2FQ1i8zGt7GpQDjcyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMDN3e8pdANhCHEIAzKtwD%2FlDTEBVqWtxt2Yg8svxy2dCbAijQcRjaWc9rjsLn6vSVbUCiaKRS%2B3qRiMQz9JpSWd2Wi4UGO5YYr2MJ4M7qaEUPG18IV%2Boumk1Y74ASX%2Fhkx1yVURdbpjd6f%2BcLHzpMPO%2BQpV8glVZcE18efaVQcxVMnXugSj%2FK5U4BD9itb8S3LZPr880G35Hie6rtOLBDnXVjOka7qzo5PHXA93Wd3xDHGkHTxqoZ65PpMfR2%2BE2JrASOsO0iMt6xuE9sBMLKb%2BRT9HG5WNwG4nvr7fydyWJmyzw%2BVB5HZdMfvhh9gSM4flo0tSR12ohPxgS4xeRmHUbkTitjaGDDJGjx%2F6372m%2FcCxaT7pOUig8jACSsM8O2jIucXHFME%2Bp48W%2FV2vEBUEes5Oa8Y6pRd%2BLubOL9chqjsn%2F0bNTSb6wesjrZNpGSZBsz9O47Zw7r7gjApuYgrjqpfT0Ie22oJhFaCe7p1R%2FRn%2FWtVy2e5bsUeivRWJLWYegnUUSb0pkpy%2BMWt8cs727JpFFuZkbni7yHq9M1XmNhskSnrPUIs%2FnSDdcCyDFCPe45qwVuZjz5Yw7BDCXoNtKdJ%2BBQtxE5yT%2BkljHY7u%2FIuVFpFXkxN6puS%2B2tlIMyK2%2F0EBNHcs7IJ2kwlJa%2ByQY6pgECAFqNldnC2U%2BoBAdWzkiAEZv0GKGyeADehBVQg13gjzugtnx8CDVEtZedf4yWlfNcO6g69HPhy7XR73XBzntt7D6YkEgeiq7zGtNlRTbEORTTHFYyaRqetX1xBgil3fGF2rH1oN6lDE0qAgAkVuZQk5FcsQFPqnNoTgEY2nGpQoEGTYSXUh8ZjDIDyWyJKO6KlyqgmZuJJTau5cc9Qocx1jcDNNOX&X-Amz-Signature=5a1c86f86cd1e9862cd5610f19b3cfed0afbd5e840124645764d98a080586851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

