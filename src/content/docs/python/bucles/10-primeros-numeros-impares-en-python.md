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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466223FXMV5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T044648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQ8vvTWPPG6g2Bb0%2BgesY9OhXX%2FQZ57sKvf%2Fq6aLMm3AiBMWU0lZVYoGau3yWX1KjnQ%2BxZ6IWmHb2yuzbqfApJ%2BxSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMBwVehwAs2PGE%2FqTKtwDZC8IiASo8F0BSYNxEyJ%2FRycc%2BeisWUCSuI%2BG3HL4ktowXs4Wt1vUTfncc0wKOTrwNAsEHIz4a1yIshO%2BVe4GaxD39gCD7i6Ez1UnuQ48g%2Bok9Q4NtxdH6gScK62nKx8PTYgWA3p3txWNBzUeQgumCiTkiAs%2F2rGUfdtPaWbO1v9hY4iLT7Rkfie%2BsXvt5qylzzF%2BoQp%2FQR42WDl5O1pnF%2BoIf6o%2B%2FvklMP4r4Tkd%2F2cUjnBHr%2BHNHpbsNCKo%2FO38lk34cWHl4x5tbv1rDiNtnVLnncuZSyYdGny%2F%2F%2FlQXmlMyLng9gX49fIkytYpOF%2BqYJwbpYFEEWketb8kWUmtWAU6pVpGIxHscqGf%2BDd78bC6lkWvRYWpVOa9KRt7ufB3HMFBqc0sive4v9f9r%2Bk392v20udg9Qz9EnmP89cu%2BtBZp7K%2FjNeUKAiHIHMv6%2BGVJWEXMjxz2BVk5RgukDBMn15bLXh4XFWY7IqnB3YJQFcL%2BKmDWfyxgoj%2BMxo1k0UGs%2FAXc4pInT5Rmhjf%2B0RY6LDCjstEh0lNpQgjL1AaXxwqw8yVEH0Xa7yEWn7it9LhzxUwg%2BnjWmcrcu0xb2ticyQroatPU6YpiGqgbaRO3eNRNMJ1Vx53LvnI8OwwncreyQY6pgG%2FrTOcEao6kbfYRBIR4Ej1PJuMNvlE4delqRveATSbc7b9ZzxoQh%2BLdIz%2FkcETAqZMTVlw3rZXIPu4DW7qaGyR0fClImfMcxfY3syET50HpcIievqfzeIAzwysIZEdCfz8gAe%2FxEsnDJTJLK6NjKnSLMO5s1Q5hJm1qMz%2FeE1bAz%2Bp9bRVUg8hVIUvNXNuXPiOv%2Bht5G5IiC4v%2BOl2LFNSJq7Z6HBr&X-Amz-Signature=7622a792cb79d422cf2173d43696bb950e69cc68807c1595b3376f817510215b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

