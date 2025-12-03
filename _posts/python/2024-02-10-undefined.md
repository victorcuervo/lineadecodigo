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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665752NU2H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T085229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCpwgmIjvj11e3SYVU0ONEBdKWqqL%2BB58fBIq1G3IGt0QIgCdybdiieALs9PzdK4aoOhkZZ7BSicdX%2FN%2BzIyu3HDIUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMcurhz9GxtqTAMPdSrcAyyBsIDqYOcd3MNbVhSzrPLOqB0UpB1L7WhEtuN5%2Bk3zCQ7Oy7tBUiyEjA3Q8mLsn0A6zCMvhCKs2r8jhivHbLgQeZoXBlwi7S8PuPIEGpIpL%2FtlDOAEi8iEy39uOXMZHzLOKA8Q0PQJznOSg9ataE9btedQ24KqzR3StV0BJaCdAig7BE9Yf5TcDCJ2J60adJF6Qw8OqHDq9M0Lxfpc705xHjwdzLg%2BVlLv3tT%2B9tj%2FKNnoWS6kzsN9HqHG2KKHWjnVTiqs4%2BSQBLmP%2F6DmyRKfiSGGM4Xa%2FSFTM4uLPqTbOqX319z%2By%2BHrkRH4Ym8thNEW%2B3ImisfZ%2FOoP5blj793Y7mh0SQzJVmB7lr1izzOkkABX0VAgY7%2FMi2nEE8rMomnxX%2FjDm%2BAeVBXu6CYjPE3iyGXidvocoX7XdMZTjLZNW2r%2Fq5hZ32uaZ1vRtQUgFPHY5OUpUoFBDVOZiSlBhV3i7R9zhM04RvvtWB2Ihr%2Bt5b4DhodahuibjVwDf9MUhucZ0zV5FFbjIMCZbsMIkgRQj7Ko3uV2XXoav%2BXffSb0yo1t0Q98sBF60%2BZsCEUzbUj7K9N%2FtYIX%2FVU%2FrEbxcJikFKzMvQv3vEAMg36VQj1OVnSX2X1qcxP7OwLcMNvVv8kGOqUB27NtEjk7Zyb7O3KYuTF1K8a0XvIQ48Wqqb6gzJomwmwGpCI7qd05IbFAp5xvDvbKCbE%2BjmUD8b73Qy75Rk6dks9b3nS%2BIwhV2M7rIu4vmqCq1DwmrExAtZy9%2F6UUMRUdFOXAYGAKWUYgleuKEBVSPKr3%2FWJbc6BvTnASuf4jx9p9CCJvNBJ0U6%2By8Cf3Ojg2JrjZ%2Fg%2B4VzwErJMNq6USaJia51dQ&X-Amz-Signature=cfcdf1d7184c9cca38abfa780be8d90000edc70c7bb99628b14711a856bca953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

