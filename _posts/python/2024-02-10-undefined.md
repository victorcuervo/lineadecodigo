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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMIQVSI7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T085849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIEUVfj354CmhIKJjLeS2dtdIr4jdCAI8dYhc08LB1WHpAiEAkfkEDMuhQwrYSNiu1sr5VjVhp7GPBHPRLITRTbaT7rcq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDLDcLG3u5Q7C1OpI0yrcA2IYVDrtfFaZm6Ce5p3F%2FZorF48al%2BFgRq4oxZG%2FGeflHzX%2FAnFQhPXl6bkyOhR9t7QEDHDLRnWTlky4wqS%2FuzLNyNfsUzHC%2Bfbxm4jC3M1HU6EhrfPXW%2BY3o47fsf7nE3h6UaKBVZoKk6rngcP%2FhWViae0%2BLejt9H0fi%2FKxe9jAl5H2grgwLvd9sqTTyLGhaXzEnX7yJobbkjeNe%2FhjNRKohfH7uznuskkBEXW7lVT27BPyfx0N7bPPr15wRM0ALxhR%2FMoGjXFBdjjNgJuXNXRiZk5q2ve8tYjH8qRP0ZEw4uS%2Bj%2Fg4LGq1VlxabR43jKVSoIKnV9GNudv1QiKRj6gDpNpEJa3bSvS7tOy%2FgTPxyYkSMMO6YXGv%2BoYtD0W%2BWli1yq3wYVuPNUrq2h9LAgNb2rCDzJFRToQrqtwdbOzMnxrQldAFhj0oF6wZELGyKxZP2i5JeLXwCAryvKKzY6veG%2FtaoVIbsLr6QVFVMWztFBYdY9L8F%2Bl39%2BT01ZDvcRZi7fnrYCr0fU4m8C0hDGhf2oSpxPOo3Rt19JBHHKDXvPRsNmkMMmFJClpVR1nsKR9lk9Pymcy9RBGlJaGkzujKQ%2B1dJS%2B1DFXoy7%2FG5jHoEhiFmvgWoNPUk%2FPbMND1v8kGOqUBlPKQ%2BS1ouezeOLGj%2F%2BgWzZ%2F2gBMGPnSd9nmVvqnuAlA5RzonziADeCuO9Iqq8hRW82JQ0DV32qi6e0%2BrVPzg4El4z%2F2H0LXjU5Z0cx0smy5sDYdbdJgWTHCMBiRsNMku6M2mOFfrX1gXgTTiDjBf2B1uq1EkNyn%2BJAXofxzwyUafSYZf1UDyWAzMoDer%2FPHXoWgvbZpBCYg6frF7mU5oLtu%2FxZtC&X-Amz-Signature=5da183f9d3953686f786596c2c78f02f64676417dd0a07a1b9f02ed9d21d0e11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

