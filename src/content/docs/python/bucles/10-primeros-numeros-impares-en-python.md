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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBTGKFGY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T152912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfXV6%2ByEfcwQI3miHIbR3d5sug6jNM7v5xw6gctXuC%2FAiBjTSkt9aHyDxr%2FH6pllx2zd1liMvIQtlCH1WdRoDezfyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXHZ%2BdUaP4qqISXkwKtwDMaO%2BhM5pCd7xrCUlQ3KFUvfUZ2PZFYmeudDJpraMN1RwRPISfWeJei1Q9BuP1YlA8YUdy3Xqz9gY7IPf4mW6Iv11BJd2LdOzbyNB6tNONSdmjBzioNWXtBDVwl%2F2dqIUzEshedTCQJ5A3nlY4wg7q4QTuJeFcMbizS%2F9MuFNMVghITAzNOxH1oopemXOjF1ObwrXcrS507JgSgYmwP7tLdXQt2Qc7w8vOS96TI8s0S3qrncjPNtoRD9n0tbOwU3BdTikq2BNVIKTgowN2Zngmo4cWpCKVLvrncF%2FyPeVpJDY8hRJQlHjjMdAaiKcwh%2BFGLpuL2%2BgT6ljPu8G6oArDc7FVemJNWCMUl2ZP%2FEDTVpFhkmdI9MOlYXFGGYMdmnN93yCPRNfTfy4EczoWHhTNT8odffDOEttXXZdNsBEZGp2Vrov0lbK9E5E05RrpX7QG2oRVpKw3sNenVRRY8vuKt4qzRuYJbtsfbjtbhCB0fRfxaO7a6HDytfctSYm8u9jTG8Nv71Rm02rPRDy2rxye5wSwGjKmaAqATDJCwSnwqriBH3TJ63NzQqoGj18cbH%2F2q1BsOrvFPdrSAzdExzqPc0IhYogI8H5KSeMg6Iv3V6%2FCaOJw8fWl0xYrs0whcHbyQY6pgEiSc%2FI%2BpyjPCi4UMYlzQv8xQdofgKRSvj4h09XDD7otKZV3DX7hIAF9vxaE6igtXl14yUyjx7N4KF3nLZ7ELwJsbbDx%2FmsTY8ySyDSRjIDX252Uh2oSbOJiNxVYt4xcz7PS9FpPNnZxCzf%2FJmFjdALOb8F2%2FRCOHWvpU9%2BqwDuM%2F0i2dQ644ebyBHyBoh7xdvgqbBdUZBvkc%2Bzxewc%2FMYsuc1W%2F1xC&X-Amz-Signature=2b4100578be6f3bc8168394f9b0cad4ab20f616d82263199d5c189c05a0a47eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

