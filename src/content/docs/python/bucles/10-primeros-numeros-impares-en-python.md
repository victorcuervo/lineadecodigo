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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TEPDCBP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T002737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICd6gA5T2UrV2QRi9o8W7MOSn9P%2BgpqKy0AnxtWgbxQZAiBzDyemsptv1BfMnwCkBqON1WPNq%2FYkP2b0xLyz3exKxiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy%2FbsMSKLHMx2c30HKtwDu8T%2FoJHxB73csR5fsJTDn%2BytnvIgbofVBMg6g42VB3wzhJfomzmoJHc%2FWO%2BfZx3atCJH5dESrsWuCd0CEB%2FskNhv68fenKxo%2F9Rxs%2FyfMs%2BhiV2eabzM7oo4WPdkKU3ppYcyBSWt0eQRwDBf3YlZeIeSHIX4XQCE8KIXUflxLzWcWJc1Easuzksf2r84cemMffs7eS63WRieQ1PNMspFSHXt9TMePWiYuA6jmOa6dxSJQLumhWw5JEKZX7pPvC6QcCWTq7QjryjcJm2S20Iw1Vx7n1wyL%2FFNwZHCY4YWJ1y8WIkLK%2FwmLp09k1ijF2HNQdApjE%2F54aKnqDBfhaIAtkGXZir7PEgyBZrZvVU4NGfh7ekYOmhIG8%2FM7HzHznbskZoDEOkao9q%2FXCICvgkNfuCBJk2AoN3u7B3brfaAVWuWMt02DJD7zLnKAsjauYAtJR%2FbBlRfpG%2FGTdhl1M22N8w6B2fSz8P7a4iLgxvGwvVlJiFbHWeFk56qh8wrb6Z5%2Ftiv7sVQMNGH2UVJk7LylaSv9lqvWp6dCxW2JY2jKuEjuz5IBEqJIAutVx4XddQWsvHcQY9eGT6hpfkk3O0wsMD7kO4QkNHMp36LtynX2n%2FA%2Fjniriaxe69aQQUwicPdyQY6pgGQjVMW3a8Uwr4CuhjQl9wmxX3thcXcpg0SNuMIAIHpNdCWSTNbF1U4pPO1Grj09glMB8A1uD5xqL%2FgpbmcgpZWpfN1q1mnLy%2F%2FaikcTr0eszJ6j4TJP3ARfjXj2opBncIevyl01%2BJsxrP2K2OAOkxc4I7Zmcxvvx2QyMljTs1vyEYyTmK9wtUcTSowQOxWn9bqba1AVGIQNe%2Bkzfn%2Be1ksxEx%2FhRYC&X-Amz-Signature=ea7f1671ca7b7404d0df77752cb27b3a7a6394f5d86b84c7d6f280db1a707f4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

