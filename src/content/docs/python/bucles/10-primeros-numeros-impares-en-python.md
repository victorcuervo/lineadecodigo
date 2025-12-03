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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJHEDGT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC9hXXhufKNN%2BTsaghMNj3j9Rh2MSPpauUa8yos1ovDQAIhAM%2FOj5GTsafZrA%2FkNVUicr8BMuliaOVXIWviA1IPIUdmKv8DCDYQABoMNjM3NDIzMTgzODA1Igzeq%2BdZEWhpE6Wt46Qq3AM7GFZFpRRYJcV8WU%2BM5NSXmv53XzPz4c3NH%2B1yMOO8ps%2FoAy8UDZfwv6NwhXHCKhVwUKY5con4vQlhr7owruiqtZdXPVMdk93ZeupuGfbA2TVLfUBeKU3gyahYj%2Bq7jNms%2Frlsg3ygmj0oeVlndEeGem%2FyEaiuJWgbNvu2MIm%2BBx%2BnxnWzXwiaCtOWyF0ll24ppV6sp%2FAcOxoQVRYzFhwhV0lWG6d0XwiEAba3%2FI%2BMDNLAsbRvLT75QWqERh3HZrvuEKrMgmNxaebduT%2FYTFOBxY2Fc9YPviAEzhasB5PepCzp4zeyIPrslUqL3jItRwDR%2FrwXLqMVcj%2F5n5mVjTdWFN27zK59tfbYCov4m9uE7ndESNxoGyUue%2F%2FxqUYGk7KstXZYsDRl5FqXvQ%2FELJA2tFJ%2FHl2A7Kmz6X3INb1ELWRHxZAKCZHOOc1bs77SGdpP%2FNEGmNitsppOuS1UVmCrDehfR1I2VuStP3lGc2bDP1kZJLDMibPTDVBVMtQVzLU7fyhOwX8VJRjVKFigImtaC45sD%2FwkTvZ4ynHgktbtsAHsmMJOcmPOdFnknALajr3fppJBiU%2BFDi6M%2BrBICEnFQ9Ao%2BoOdlE15DxYZmzq%2FLNtCMnYlc4Qd1XXHozCjvcLJBjqkAaOtaHvs28KGNtuQ%2FQPKjirbzCiJ4dmTU90q5BQeBu2AFXv%2BC877Do54bSiJkx0Gomu4CXX0%2Fu1Db%2B%2FdkTfd9fS4%2Bumaia2fKuc0gzreT2FX2FT3YsPlHVj7lGrv%2BAUnOVLeU3GhBs7kl6A9oH2b0Q4P7UVut4%2Fr%2BXcQtFzCMMrVtg2gQ6F0TPLIAH3oO4bztq06zX6zJnumHE%2F%2B1y77Hq92BpsH&X-Amz-Signature=964701b0712edfc445bfafe9721b6d06ae167f0ca734e6bc00df411363a4bf4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

