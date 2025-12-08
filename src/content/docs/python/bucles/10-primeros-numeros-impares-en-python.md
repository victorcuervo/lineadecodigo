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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNETEOTR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T000033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHD5b4x7aNXedg6Xf0bxAt62tzeCWjEtkFNYZEEH9x42AiEA8ZHhVVy04fyixyJnUmkZizfcHFhSSk8Yvvu%2BidYdyMMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0IYxV1jNKEd%2BbVDyrcA6yf%2B4Max60dYf2oOi6MBi74g7TXdovNoyp55n8gITuGhCJ%2F5JM7DhQWSHv%2FPP87Uls1siSF5zN9caDnFn%2Fl89%2FmraCWe6%2FlE6A1E%2B1Ua1GzN9%2FuBuc1omNxxSnR8AjtULN5G87vQan%2FMJESDDyd2v%2BKjoR%2B%2FadscTPEvkrhcHCH3zXn%2FD86gJnfQCUESvL9zNUhEicVZnv%2FL%2BRpYqSdjyMap3515NK546JWXwp99o9lQ2pcb5JtgLk39SWhGys2%2BKiZRZ%2Bk6ZUTUe1z8zmj13HkMTgmE9%2Fytqq4SoHM2M1%2BcANl8kgP6zVcov3xzOPYduou7QZhe1SGvoFZTD77i5DWMJH98LBpHS1isBL8dMms82I48FjKzVcJnDfiAF%2FK3Cu%2FqX33Djtljbd9Vnb%2FRbbbCVA%2B4U%2BHNqN3%2FzIWjP%2FpLpNQ2eFOkaMYj0s6bwO47A7Q2FggL1b7UAvoZevawYNkAfIkCurm%2FANDWkWuFcnpezbV4wHTc0hAKLMAvu1i36HGAoIlFkxd8ZYViNdUekcWlaaWcdS5IUvod8p4EEHvDSxX6V7jR4O%2BsISaXiSewX5TfmGGhWhgR%2BbVuQjB3LGXiD7Q05iPBg7X3XjYvqj%2FuQxXiTmYqwYdT25NMJ6h2MkGOqUBHN%2FkB2ETNTXZ%2BtYGYLlDe54AwkWG%2F84wDjhFRWK8Be5JSjeMiSCngeSjcEEWfnbZBIwpGE9bG%2FiDHUNRTnbvos2Y1EyDYf334S1kDBfnT6TsNlBxKsZ46Sj2oQ0I3WnwioFuDkeslmH2Xe0I9zFREeu7vUMBDqmWF7BjUO15yJLq0HTzc0f7FQZOCfbM%2FR7hgab2Jq%2F3gSzbfa1wsEmuvT6zaWXR&X-Amz-Signature=f09ab5833b0696ba34bb3568a21ae1485c826a19c58c63354bfc2125104e1072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

