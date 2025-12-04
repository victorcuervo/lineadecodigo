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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMVX6I6P%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIBa18%2FEjJQT%2FIVvvveQx5Jm0DIUeXm1RoptylBO9DP%2BiAiA4LhOtXofkC8k7A3FSf%2BfcfzcKJSmKlkrCixcm1omF3ir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIME%2FUnzPctj3%2FyiMDwKtwDAxZ5lhWuYJpNmJNpl57K4U7%2FIuPDcfqHTa16osnQ3puj7IT9W0MLtaMNO7SeYOjoJwvr2Xu4FVWdcQ2gDBpsryUkIjJzE3rUmn95SNI%2BWkeH4usoVmj%2BcayWm7n36iMQdnCXQS%2BuX4REptNOPeuZkL0w2z6KmsHYJqo8a7WK%2Fjs4qlZUm%2Bde8%2Byb0JtifvLZu5F6%2BeFKvGFLS%2FqZX4utEAaE2teJZFRMTeEfmRDdAk%2F3yhTPWa%2FC0X%2FFaNU5ylNNL950RtVqaoEp3%2FaL6iLiOEWThMwf1l1gIYHuRZjnpbjQ3UFoC3whPcHizVS%2B6hcSANWwP%2FZz4Qwc77Tw%2Fp4FuzQqiF9RlWEYzisDDmnmKpHd9MLevrCBn3aIi%2BqhCPUQvfmIPuOml9qVtCNXGXGF53J0m4sbk8H6LsfBKJ5iDCE%2FeOx8o4AfKiu%2FDph55E21waMvqCqQQ%2B2hZFbpUNTbOytrH34s5ZTLFL9yPXC1hFjrSLKJNpL0xNe6OKTnjcGm8pGpH1ZzcrZbQ5gPBEqLC8Bd1I%2FCdsaAEOQ21KmrurCHspQl1%2BXyBycBN49I0GVx4Wsx1h4s2rhbTcCSrYG%2FgppvepARiU%2Bo1mxXGCYBvb6vwp2oaEKT%2BYExJ30w6cnFyQY6pgHLPUeXUw6EAGorV8tBjQGod8PjlD3ewsoQQHgHxTPMtlqcPRQmbtVlMOG7DtNtH4bpIO13kmf%2BWmZHulX6%2BKard9zUV8xMmf1Xiv%2FkWKiaqqLrAskgczdX5kz7ZOSw0zOGwtmxpRZPGScP2Itr4IcG80h0Nzn3mmLyGA8VrGgfnVeiCAAFeR8SqGn934aRiZoAmq8F2yBsVulkh51SVHXGfBIV%2BUa2&X-Amz-Signature=0452a4192b5f712170d86d5f4077b685e5cc7f9446d6a7843fbb83230caa25c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

