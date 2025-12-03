---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UYEQ4MT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIDt%2FqEsD4X9ELgC7oGzRK%2FRBODsdf2JiibdwMP3Yr14yAiB6alL2YeXYTbQqLOBC4rh6is3fX6G3lLaNGBLYTjY%2FlCr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMil6JFUgKnENf0DwDKtwDqbX%2FqbSwIFGgh4DVE1bDkkpyq2UVEg32j9zPhmczp%2Fz%2FNtXT8YZdaRDgiA6npebR%2FZEzFJYwE80vCSATwFYl5IczQydLkJqCTU1K3S5K68oVSCpvEnSLmikSHmTPmpEwcOtGrETMbDDY2Lo4KatgbU9uC9bUrpnkzI1Oh%2B9OdYfP5zWaxD6uTGs81MGMyJKD1gtx4OZOoGK0F0MlvBLBZUzgcEU4duwlat1MA5T3g%2FpAU7rHzme3e1zDr8dva84PBLQMcJTogwkY6CfU10HOlwDJkCISZfWLnxXfRYQEIjdVpIIWet0hgKfgAZ3%2B8etxYxE%2Fm8aUkzq6vUKtk%2BSgLPVkQotgmIdvtxFnrLP7hV3D%2FKqNb8ZRkmNDkct6aCGJJhEWRjQdxokTn%2BjaQOp9CpzlFqo2iJLL6PcLMlm89a8aVWt8s8e3iiZsPYG57rXah%2BBX8mv8OO4oUoTcU1qwiQ7zVur%2BdjvJmTPRfAx2IZ0VUxIlJNn9cnfxpIQZZ1W7kVVt3h%2FZpwBRqCS8MoEbDQYla3DEMv3Jtah6OgHugP%2BDPpf6zFgfNuMDYhvfRzwcg1J2jBkJ%2FlC9uYHWVkVTI1Pckn8nJjxnKx3wtvpc6vIDiCO%2FzB6TCYYyVCgwrb3CyQY6pgGhzxXZHfzAGubrPc%2FiMIimyEhEfA3ReOH66dsrWhk55Xn4Iw54Yv4BRavIpQS3Pq7pfO4vRunebzzUul6erRLuIWyvZZwMLnSfJ70xQn1S5xYUkWQwxXUuOF%2FastHVsBnYGa9LC%2Fccy%2FJ6OSZOuOdeTRbKVinotq1NtKENJfm9bLEvmcB7PTALpUMKO3jiRa%2Bk1LhR977gaCTxjEndNlgVIO4His21&X-Amz-Signature=c09aa999facfa08692d0a648536dd2e2d1bd2e7ebd056fd6137202d495cbf3cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

