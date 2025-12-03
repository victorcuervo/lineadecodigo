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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FA2V5MT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T055353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCREkn3kL6K7nsQSfVasubtP6sO5%2BoSrqASk70UWp%2BNQAIgfDeN3y1L9%2BjLuUVm7oqP0Lhw%2F%2BIh5IvtXCa2Va%2FReDoq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDGV4g9zOaUM3w5Z1cyrcA3jOqx6Naouz%2Bz4RjInnJXX8w10fuXJzQVBCLlhiSeaVmtblZKc3rY0r9IXt0jK4%2FjcAxLcjV7ZaX%2BZwVheAwROeYpWRFMAmW%2BaFJi2TEwRH6xQuhTYWDbAW0ZaMyBkL%2FtGXB9c6RJ4hB%2BR5iDy%2BYxHVd%2BPh5QPsP1SPSaDuWfm1sHPMY%2FFsEU619EPcNhiOnU3AeQTrOTGgFCMrN6OteW1UIy2wZ%2BkjeZGKSZrqoYjMrfrV7RzlUhyqVdwtf1i0M6NwYSSh3dEFZEaS8TDLwG6DyWMN6QPnkL1HhZB5niIBKW1jwUacZJToC0mgFIMShq%2BIuz52XoEdo%2Bnf7TtnHSHptb1dhcjRbOclkNFWl%2BuL%2FdYiwqXjhg7u7gP6XI5jY4LKx0JTENXivD9wjbX0GZOslhwravPBM2PCGIG%2FspJ2uABGwBugahOz62Z8xBQD08kHplBTK9xKrzrcKWt7IcgGdtwz9OkdFDyd9zy2ouAGTIa3oG2RpaqAtkIHQEZ993OkRHWJ%2By4H5hNsI2tJNEHP3PVhlNCs0If2gGAp%2BbWVodDidgAUtTBUFRORiNA7qjrqta4HAI2Pdz0H6Bewgo%2Fru84EMn5u9LmkisfB%2BjJ8CwKXN89zuLKApP1IMPmZv8kGOqUBMzWQNieQ1PfDPb82kMp5woPOD1p1MVARh8TByt2Ph4AgryG7Fs%2Fzw5mRC8BgCzmgWVUfiuCEwbbe5cJOCrMhvvu%2Bgi3iLVpgRBMiZyUvIP%2BEiOxFBVyFaYhiR3UcOqjMk7iB6fCagoKabAnqoz4Z%2Bms9pcSw5BD87EMLC96%2FFxO40gvOHz0lIw4fibB1%2B00yfyaelijFO47%2F1mai%2BuEyPOujNy76&X-Amz-Signature=c3bb38810a93934e2f88d3e63278df1423bf9ea175a373d78f782ac7fb00609e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

