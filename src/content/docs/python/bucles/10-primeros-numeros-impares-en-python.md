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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636HOXW3W%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BdNSSQhpT2YnrXNNnVO2x37g4I8zBPjz%2FcFIzEa4NhAiAQgHj%2Fl62KCvsBgH0HfpRtrbVfcgrsrQBye93aWzx4pir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMlCoTeY%2FOnDUP3dKkKtwDWSUf9hmCehAehdrNq%2BNYmpZ%2FtUrBE1X2SSjDB%2BnQ%2FHh9g%2FMS498ut5QJIPHH14akY4FSBfbN3l3Zq6K93AS9cvTmpuYZl4Nh%2FEudRnqf7IZ%2FNkp%2BabIpj4FUJrnyWVT%2BPMkkJ0HiYYKB2Sp6yHSDhc7sI6y7uL0TKjVzDZ3xebNUzZwbXwQue02tt%2BrZo3IC7obK%2BLv52HyEvy1ffj839r%2FEZKG4fEL94YD0lRVKS1Km3q0cxzF3NfmqQdeupPciI3zN%2B4nnisNv71eYFwTRtb5iq0yMno5%2BVcGxiUVxwDd5TPJ7HA3%2FQ1ksyOt7gtFvmV4Eo3V2FcMwYLRrjqrCwQvB9IMg6mWayrPX6EZEhrOL7aUsnqK%2FBLYtmfl8y2UIYKXU4Rd4%2F4RfhaHIN2q8PnslGWrxk%2FK6k1bwTNVrhoV%2B0GB%2BZqO6CeUJreGv8lzpnEG9mOyYJ%2BjAVbyQKR0o9X8pSvYRHodVbvD3%2FHdRbyz7RkOGDC2dxJH5HsXL68ekI8PfS5dqD5D%2FpiM1zQ0qSiODgwxmUtUpfRB5toD2lok6SdzdyhbdCEeddzxN3N%2FVZCNT6Vdl2ku2ZVFWFQflss9bVG4G33QWfnO1vTJJ0uBlk3T6076bziofMyswvsPOyQY6pgFdzP3lj%2Bh%2BFqDLuhNd98AHQ7CpQG6LaBZB0jSgrsWjIBsrTT%2Fja5DkLIBThiX8ohe9PB7JW8ILBRo1u%2BruJIGGoYtdRcZNnxCfxnUgSd9Nh3IZtR8%2BWfTLIQrgFrayXhwxtZ4GCjN4YewLy8fNL88WmxvfZB8mjaXkR%2F7FAa2zq7nsmj39CjILAkB3SvRojL8XVW6jVtFffro2X9dUvBoISAtrig82&X-Amz-Signature=42943decc6ec1e14b003fd63f1aab3d64a17710882114d4debfafbf5f46a92b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

