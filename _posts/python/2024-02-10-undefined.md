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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2OAD4H7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T103241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDH8JKWJt6G%2BjubslQgNnPsjN0cvFdySSe0TSN3uA9ckAIgW41SbWvJNSoKiToYyit%2FBnZAPPqvdBgmm7ezKYibmscq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDM3QQ%2BalEyjsDLXjjSrcAzmzl%2BC4wmanCMuL499wS8sIUTQnMyScBCeNQ%2B0KDHuQwJfVV16tPpCcoDDWPTUcnMmkfmgS9ig3mFohPAB3tDrhdZdGZo5ouRTPNeyTgcAQnAbjaHmCpoQ4guqLcpsGK1J0hr6O3g9GWUYfKRUG0UclP%2BOnrVmLAefOmQtV%2F5seetOchRxDDAR6VRWPnn1JQbp1N1ZGPGbAWw1s95OsXGX9LxK%2FTUd3a3trv84zXlLrZiiHwiAurHR0bUlHhOquE8u4Bxry8ZwP0BdPUoh1denGJIh%2FCD29i3sMNuV63d9XqUAA8nJ63rAdFjgUqW8wUYnw97sYzpVsQ8hARlWle4%2FnPh%2FP9VVhIRG%2FtMPSXSW9WZDzPwFsWccuB5LtKtfGDyAPQx0KUXrVh1UHg5wZBktDyrQ3PKA6e3M9onRdPAZ2SxbvSrhMQUGmvWujki4hfGZp%2BqpvBSZegb%2BwcXhkH%2Bh%2F4NraSzRv1HutIZ123VM7OH%2FH17FBNGNSJtC2gM%2Fqk8BZm%2FU6WuyW5y5sGN1osuEdjXWp%2FSlGoVVGluFy8fI1E%2B6ANSNbuFe6xP%2FJq882BJ4z0%2Bn72BBMWu0eAp8PSDtZkIrprGlwZal7qBXKNUO2LUXQD9dmxDq93tMSMN6SwMkGOqUBgxu9PdxllC2ett32Z%2BK47UxxbDWLEi0Aeve0I%2FxPx9FjfY7eA4kssNRONz8ELUMAMCDp%2Bg98kOEIswRxrIlEt2i2RqAbMdGJTFjg%2Bi8OYmbNLBOiJN%2B%2BparlO6A7aU85xLZrWscxoJNGjYzkL8sUL%2F45AAAyo4b7P%2BJcGbAyz3oL50uNB3lfcI%2FP9Mgs%2B5s%2BjsxJbNpDFrx5X3EJ09UjOf1hQMdd&X-Amz-Signature=eef33f5f0231d93d0306a09802fe344f0d88e4497ffa732e53ab9534c1103fde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

