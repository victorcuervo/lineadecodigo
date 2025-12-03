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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWOU4FZY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDtVTrMZkzDn3Bkh0G1OwQigYTkmMGy3XaJ74gSdJ5WwwIgUiqO85CP%2BkH80tYXk8dKP6mO4HyJwhTd%2FsSd8WjplEkq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDI%2F5GR3fxZoGMmVcOyrcA2tamDagAunA0s3Tr7JOP8KbfzEBE68qkJqNtDonywErHkW%2FZAllwZ7wnSvGD%2FLicwJXE9tpMXIJ1uwm673ABc7XO48tg7b1jV%2F3Lq829vCcXsDF%2F12KvWCSD0p6Q2HM3EKKKUPlwUTILQIQyIHS09YwW65JD%2FD3MJBm2TEsM7OeVzdvl0JkFg13Ikij56NVCOJuRTG1fSwD9MJibjfm%2FbR0Ks2LqgG4PPe255v8AlFIEOU5yyZmIdAa49q3eGAuX2s6wUUw%2FpaCGfoaZVyyOzJQdD6MWpQc%2FaLTwDExyJaYNdClMTydXfYfR8ZKht%2BVaLRMSfkHnzQ6%2BygR%2F4DQeG5K3V53q5%2FBw5Ki%2FJcBSCdg%2Bi5xLG%2Frp6e%2BhvBoE1Rt6qtm%2Fq%2FiJfqpfkgMN7vZ5T4QVBsN79uPjB6GO4DbvzHRngJtxrx9Suw41D1Y6KqSG%2BAMJcM01%2FT0rgWx0YGP1SklF7WNcPlshVsoB04%2FbmHuNbpuWy7S2kMFtUEbjNnzIrr7FxZzYscxLDBNmApkOGARhMV1C%2FhClZ%2BSiwZc%2B2gM5YCG%2B3Lq9IJxx8imY%2B6q7lhcwPsEwj3VB55eyg7RXF6QFYfvrQjrxmy4fDiGqUujp6nF%2FMuSt24TTBRFMOKav8kGOqUBzXz3YrPdjt3wFzAsOXV%2BFsjbflXrACaAL37vAt86J3EICjtEXPx0atMj4qDnuzKhONLfIofKOZiH8sjZvHu3Hcebx%2B0WX00L2LS2drUfuWLGhLDQlKAYNuv6%2B1w2frP%2FtbO%2FDA3bAElr1wwMPHote1Nho4heHFBHbkWUy2kXK%2BPWP7QZNsW39tsYWvqyf7UcwbASzw1vszhDJTg7dUaDqLiNZ0Ia&X-Amz-Signature=62c3cf4819afdc6c0f15b890d287f6d754049dea1b7f8b54cf3f2217e8153068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

