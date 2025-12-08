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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTFMRNFE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T194334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqd9eb%2BB4MmHxJgnpvclvoHTh7vX16heVA1n27e19RAAiA2d5qrGXmPMqzss%2Fx2G4emh1v%2F%2Bc6nAqprQqJvMjxLMiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3c1YsRgvHekSjxLcKtwD27jze6C%2FJ3Po5iyroE14pksAOk0qnXfzSUJWHBg%2Fn99LtNZ8ZyrILU2mnju%2FgJwwy9Mc%2BgmGIKLy%2BRxcOFNb5Iah5zvCaVENXLUfniBpkFhKiNuzxhV4rvvwpxBDVg6dzgPW41FaJTsEPixrFk2v9F5j9AjgQJvUp05Rkgu3cz6ZdWS7LIQl3tXk9WETAdzoufBNBk92e5s2rLXmbvEI8CDWdlvAezgFN9rCUQQWzQx%2BJ2fu9dLHCaeux3hzJDui%2FrZXm4RRsHHmX5Py6Xg%2BYnGVjA3Vpn7NFkMNAHhIULyNK%2BBpphMMqbbULcsHNulwbWtXfmMgbGq3ztHMi4CxoFY3JR8O8aEthp4E%2BFdaxy8Zc14cY4ct0WAWN4kp6%2BMuxLiqD7GIMNBNfMZnuCVWgq0m9IByvYT%2BppuR22cHQuZDsOM1tPEN68qZ9K0lMywruFUdZK%2F3tev0cOERVy2cSVjVPoqDqadbbYcdVpb2smXh29dM4PnG0BAZYHxyuy4AAyUZA6tJmXB0l2gRlQ%2FGS9C65I%2FikoWJE5tMGIcMWVvhAo0Pif9VFvUbiUsWqwgLalPSxniSkDPmdG1bsV7gXD2obY4xpxLLRyPnRTOb2SMm3tFEvGJezqqDFiUw1bPcyQY6pgHn0vZIzdFENGvnLECpYx%2B%2FS%2FVPHhqNrzkQ17UYS0%2BS1vhgSKeM5DD2WqE1aPe%2FG6XdRa74sI7GLQsCnxhO5I0yVXsikMps165LXuqUdJ4z65a5P1DXMD1LqO3b4hv0Iy25fIJ%2BAEGd5GoFcXhDBx8yH9lhITq%2FQxiLYcU7qsSegxq5j8h89m1LzTKXNd7Q6pWnfJ%2FTUBvOUTIvZuu3SzYI3txx1Kc9&X-Amz-Signature=ef2f2b15e4bef227ccacb2e1a8aaaa42d17afe6be81dd2d42b1478a6a10070ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

