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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZRI7GWI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T110239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnzQv6nfbPiFk3WnI%2F0PzP6zrRVwix13rXv6wVFb3j5AiEA0%2BwKGVFP6arTKyQu1lP%2Fkbn2Lhh%2BcDfG7o4G83T8f6Iq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDPxvv4C6DoWMAIv2bircAxWZDKlyztXkQfXa3mXc9CkyDSjrwG%2BoKawbUI%2Bsr2JPA7llz0tvkIw11G7pcQniU3Ivs0jki3w8cE71rDW6Mpe8%2F6oumII4ecPh6jf3Nlt59xTYJED2RGLKmgPS%2B98boqufxl%2BHngZ03lWGc7I5DY1v2x08dk1fSiwiqmheGvg0oc%2BZlYI2vwRL7CijmCvUsBkdRLLFKubDWTtTFjJZ8Hf0UN2kuLFK3hCERA%2FoQ4CUW%2FkLohr7irFNCxRySJz4dHCkCuFAPXLdbCDeYhGrA1x9WfZW%2FDdB9UGnWxqME22fIR4e%2FX8ZK6cQonO%2BWBdCob3nykqVJKAfexT24yxiOxqBbMDUFwjkcXabUijCX8hMVd8JD6tWYyE0mc7pagWtMz1Fx%2FSkZWrsoUL0kIt%2BCLgKbRnGrCNTOGTlZSYeNGNPiY3okjYbph5%2F1p%2BLCOPGi9s1d6fPYt%2F0QyGr%2Bm22%2FPFyamamHoHmvMjk%2Fe%2Fl9wMakVzODGRZr8b6qm6e9q8wngUTVJTzf%2B4zacNxiTuy4zeW8MOOilVvtjIAg0ZUFFsZg9Ke951onPsqzjc4fZp9ClV2smOxQ4e65OGpEcI91lHIOoi%2F3hH814wKsjZZy9REbqyb3%2BqYieCcD%2FU4MPjHyskGOqUB9NWRwYAPEKYN5xdxOYXmNOb9herkmdNgDG9%2FDU0xkK1NSjPtvslyXfzwt3M5SaeQBhhBPq3cfqvvCWlFeAMCPtCK%2B5rpxEkK1j0zOxRg3hgE38dyo%2BAamsBGbsliIS%2BIbyFy01mxdtrI4usRpeDNH1rem6n8oQ3cU2YWoY7RbcnoidpHkpYvnkCaeyCcQPuWlzBy1ddmlGYo2WBcrmR7DGzOSwDm&X-Amz-Signature=8d5df2a2456dfcb00b9021124b2d1e29ac97c2051b570823ca36545c20c2da2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

