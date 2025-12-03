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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ7EUKJG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T073223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDlLRjw%2FUNExpxzNkYvmJG28cXH0mIEoWr4hrWMOwYNFwIgLMp5YZEFBdYzz8xun92dDnK1m3EGzrHLF7n0gf3hazoq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDdGvrkE%2FlPK9HfhXCrcA2wh1hhUAiFj03CJzeGTbn3EOd2%2BwkzWtnW8kriiTrlngVdkCy%2FQ%2F3qrMf9U%2ByaghBKcu73n0DHRMtTrltB%2FeYWuNdye8AfdXwuJTP4M%2Bj7z6kH0IdN4QKBgYssMRH%2BqAWxJDLHzmA8747rf%2Bj%2B4pDJxfJCDao%2F101I9dbXCfdrnJWHYoTH%2FLixcsz4O5CF6pIwPswBAfp37zF2%2BUMcxPkLQcMh7BtKv2sldtFdoCR3zDXjpQuwEI2OcagmC%2BY3Uf15YbZwUxQRg%2FlKrsPRSZAvuQad%2BHHt9g1%2BYMHlwgSZvSqm80zRH1vTu92fPXCYw%2FBD0fYmb7OBLH2joaWN70YTqHnD2vFxTuzGObxzkdwidtspCNZTEzz2FJDXtuacTgG5PIIsnNvzc3E8aKrY6puV%2BRSmnMBIu9Y%2F4xAjxe89xcxjZL5NWu2%2BLFJrPDClFTq02day8PVCrno4dCzw4YZjF79D%2BRk%2BBQz%2F3oucg%2F0SwDNLTOMVIzFQZWkNg%2FYr%2FCOrS4iqVqdz5%2BlLUOWtoM5sg8RAtpp8in%2B6fOIbfDv4xe6XBsax9Kg4xz%2FlEC8kZXjM4wWhvnH0%2BkSfl3mSZ8yLW2dtC1NHn9X7ZyzDd8agihQFetNXqPl5JeQU2MIa5v8kGOqUBJP0mEt9PIbrYuCsDuj6MhsM%2B%2BYDJeKWRl%2Fk6pE2Z7jsRG7aouLcqe%2BpET73BPU3mhRjMUH0ht2Jf%2BJhRPW9lYI3ziSTPU7rPIKncjDcJsJlc9vbeQriWHSakGO1HAZCv2%2BiIYXdQlY0ADRrF0GGK2FnAA%2FuB5FyQ19B%2FL5843E7D7r1fvPaz4ZBeIgL8KkVrNbkf%2F7R%2FKp%2FbG8p66%2Bo0ey%2FB1N15&X-Amz-Signature=522468492a0e19ac8699a39a07e5cc460cd2acba169841d2663177bb671563ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

