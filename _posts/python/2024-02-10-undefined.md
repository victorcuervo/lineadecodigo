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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5GTWWWS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T054145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCcYItlTSSHDuE%2BWDQZRfLj5Xb1OmhJR1aFph7%2BD58heAIgFdkNsquRLwbVQOxQZu3g5OdmTkZibGTmBEaAZzkl%2BDkq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDCCgK%2BmfSWmnWmnSIyrcA9E0mZ%2F3Qu0JKLU0RLgc8XDCM%2BycVFvCYzmNYBaRI8LtY9ZzynfAV65d%2BLWclgMw30%2BSMPqnI%2BP7RgTrq4U0lXnv7bVLIIcLmrdNtugxgS3AxVYMGnlVAjtvxKfVgoPzd3%2BCPmUxNXBHyohqVg1xlkjQoe20qJd6i6hQ2K%2FYN4HF2%2B06FKsMYPeXhsfTIBPTf7wuruV%2B99CnOY%2F8mA7uqVlDm7ZYOuCv5At3JFytVUJHCnrTK4uLMVgC382WzvT2YStu2F49FGCSyiwoFhaL3OtbwCn3Gx6%2Bd20EjyzNUJiJsXFQllkDwUr9fMWtiCgV98tKCOrp7liZh7LM%2Fhv%2BjN8YJOa9KiV5D0uW6SLF0GPC9cH7Fcm0zh0WgISM7HfYeaO6CjUx2Fh4qZ9D%2BRlZTICexZA3FCxq4T8xzKJUTI1KD91zoMg5PcA4H7TqGgn8YMcZa3HkTa6QN9BLXTtmlSMEydRGIU7jm%2BRDtF1w9Tl9m88wn%2BIRocJ57k1WmKStLbrY1q5rLkn0N8bLT1hJ%2BZ3tl4iGCTiu1QXHsRdzJW2V4SA74sGaQY3df6vOkQmEzEr%2Bb7Eqh6suPVNUyIEJMUmMCpJzKcsjPJavV0kNwRjt%2BCH3d5VPZzWi1wJ2MMqWvskGOqUBKTsuuYO4JXmAnqnE4ZXW4JZkQkdIh59lWhxnCOuhI2F82H9MK%2FhbCJ3qhHjrD%2FIX8YUCgcUzapF3IK3%2BLQOkyEM6gJHaHamdw63XMBSppbkG0WVTPRYlzeFB8s1glAhKyZ2zhVUeHVCFC1oYwzcGqPAmM42bbT5sh2W%2BIMN11oaopeKRPXEkNyXqPNmhrK16dqV9JLkISmjYIgdHrZyyJjEXnoN1&X-Amz-Signature=6313f23f8951e0f3d332c4070320e7af8689990c866725fd00c25a782255eebf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

