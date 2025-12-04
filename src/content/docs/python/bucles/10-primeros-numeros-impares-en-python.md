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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645O33BHB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIQDjfh9MwI5EEkZ5UoJG14Yr09P5kmkWNqqFOrERD%2BO1LgIfLPtHGqWZTXFLH7jb0N%2F6jPPlNtg6xhEH3SpBAYETJir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMhyH6mGwcnFCUJPR1KtwDDZeEjXlzeWH5fPFBQyVNMAG7WdIaXXcCkkxBfqLN1GJZ1436CLM6U675%2FF4PEVK5079MFSsQc%2BiP2JiCzjqq8bFT7h7DAo99uhz8MLBmJZBCMRP1lgkdcnpEulkihYCVim8RSjyfACvyK%2BPKlb5LActLbt58qSSWMM%2BE8qfO1cmklWkS32XyuXdwYZK0Bb3Hsv5UlISsP1jXo1j8O6oENRMbvTtI8OYNyluIx%2B3Ozn3xOcE0RJ2%2ByLj8u2Hu2qDHbn0uzygiodcb3XaH0sZY92JwpP%2FqWcSp5XH79o8nOTllHVFGFTZVoV%2B0XvLKjYBJwW5GF2oZGQypgZEjAICZ1BeHEwGyvHr3z520eZW2G3FBDSL%2FufsIuPvSKKLUKE9al%2FSrgtat3h5drCE1yl418a6vf0f6v%2FS3WUOhQOtE6Eex1xRKcfN3bIH40kBkhQfMz6886A3UzCOPzgpdCWEKJfcRDlw4tQZyz%2BcG6qLXGLykNxNFSsYSPsxz7VebIOF44pyeG7U%2BlbCeS%2FBcjRArHTvqd5UwBtNL4qSxbVRF47ZT6jbxOK%2FT%2B2IIIpHWVX%2B4tNih6zH8B8L5GiLqWDxM7hPZLVq4otVgy0ug%2BrfegmIhf9foYNUM1SS1nTEwyqrFyQY6pgGmfy%2Fq%2FqDFSXgWuKFYLCX4mNYiuSC5R%2BTi0A8UWlO3XspKIWwPJ60Lrjnxio%2BW22B87s5jj7cNhcPWtXNHCU%2Fjrx3DEBeN0CPItqByN7O3imiEPWxOioMpTYmopHOrIp12wLAi1w21Uyy1c0FjqsxEnoc3ixz3XBqWn8sEGp%2BdheUbJyLrR0rOBhJIvEjIB%2FurHmLbdLnUXJGRU%2BjvoDhU4Y%2FXZZ6V&X-Amz-Signature=941b07d2a75374964df59c526c3090c0530b6786815153799fc2e08011b26c20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

