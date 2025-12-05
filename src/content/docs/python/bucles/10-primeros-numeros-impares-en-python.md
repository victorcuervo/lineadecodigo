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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVCWVBMM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9%2FeWVzBs20Y9al3LI8KWifPMDV3tAxT8An5qdcFPB%2FQIgehA39mYB744uQAAQYE8o%2FznD7eHGPkFW9%2BJEZC%2Bx%2FA4q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGXQSUh3UcNXajiKpircA5n2nq%2Bj55P7d0haIp0S55VJppYzZZXJLkxNmULx2LZZWH7hSw4%2B4mx6qjM0LX9DNTualgoxl8OWKxu%2FdnFZNmdoFvJ0lwJ3He0pOk9tTO6RdNfzTWsONHqMeWJiqeS6qiYM2%2FP5%2F8ljxc0qXJbsjUpVK1qCzPRZPjTc8aGeehZF2zBuL8iTTwmmIVsMs7vZOPS1IP0ZAbeozrOoEi4bn1YILRdoXqYi2UlqrfDEx4uMhx4uLLJkX4ptGL9%2FGsQ%2BpPWcBkmIll2JaVDoznH2XA8pdRFsISuEtQ2508%2BmwW3XJHAu7CGIhWjm8gyCXmpCJiyRNQh7Eivqq04hla11VgEbMSMlXAhbe8nhSFZEswM5f9Lf0flBLG91A3tYnsAo4Qn7HuR58cqRXjeL1TX6OP%2B2vxUQLb6chveRMud%2Bqmps3d1anyja8%2B4XgivGIZkIq7ZM09w%2BdBjb4ZmolOeL335u48%2FOk0eSRsz0wb6qhqxnQkF5t2hcmJ57IXXqOU%2BL8cTnCenbTmlnMVOEuUhL34lqlrffG%2BgP%2BPX9ZvMCIML%2BnWeAD8%2BVYGFdccBf30tzcPq7TyRoD%2B%2FgRcCF%2FEv0IJjsFdMTLxx6fI4n4NLhHTij%2FRXESn76MDWmuyPMMKiryckGOqUBaBai2IlGgpcriNoAFnu%2BXi%2BGPxkx9%2B0zQNwX78KTljniUZf61jk91fujH2%2FP6C%2BfaxDnQVBd6WL1a65lZrYaj8NezeNexeVv8u60wHXk59PsY6cv%2FGUmqkDzMxKra%2BGRJBSCR12Nd5XbVDcrKXWB0%2Fot31f2U0gL0opPMYR9gkQgkncISuj7befpjgW9rQiG4W5eFQ%2Ba2EwKeczPSG3S7nfXFXmF&X-Amz-Signature=aea439423de23438b5db86cb4abe4c40cba85af842902c161544d64ce1a38ba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

