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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2ZT7QEW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T135601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ98WJ0G%2Bk77JE%2Fh7ZBaUARMs%2BV7dht5d2Nvf0w5MqQwIgOqPcKvtdqEHVLZaxdgHH0XIGsBeS%2FHUw3MqhOpUUO%2Fkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDMLg3ZksYHoi%2Bg5uTSrcA8MqWmnUMDH7IfBRwcbIbuv%2Bq0R0rCRNWOJipU6Ypv%2FEhcLMH%2FjTYZGLFTzNqUH85dsMMtjoZ7q6qDW6Ei2ytNahBPkFHjeu%2Bkp8UVdgFHXeBaBiBX%2FlBBFrBKE4MlndKL6LwtlmHaRxwCpkFrix6OdRGYNMDCDd5LUzcJ%2BuQcNKRO4cMm6Tc8IXJ2lHvRve0fQZDLDzLl4XbU2F8wWbYWFLVF3ZPZiWb3KWunv%2FwypBsLSzOEN8C6UqiVrdx9dKF5MAJ3w7XuDadvTc%2FtMxwuspG3SSdTLAF9qh0xPUbwaO%2FL8IO4e%2BvvgXiDMbEkpqOeMygX64vQQIWFEtPx8H7zTOtd9sn%2BVUqhZM%2BbB1MbVQvsfLGEPCD4BBHbSZ33o5l3BTRsEsJM6qlIsJMTjDezgvEMXOUuqRlsPen%2FcCxP1Mu71c0JLzpvW8EdgQoxVLPQIKN4vZMV5bDXmpUYsB3KBNOVNEiuWNX1UsFO85Ev3qu5BQ1Y%2FTWC75gfVi4syHe7K33wORbidcyDUJPmZjY9IP7omD4l9qIdBEZQUOVlcYrpMeJ18qYqCX9gyDqrw5EDPLkn2JHzkvZhPjh271NfoarZguZbKNgyV7n5o9151%2F3uFxGmhGpa7mtmx9MKLRyskGOqUBF8Lzk0HN94ax6p48cFbEiQsk%2FM6PNqkUe9lh%2FMppjbBIb1mrg%2FC1ZWYUmRoFkdu%2FOk4YydYL0HjdFQD8wlLJAJ1%2FKgeYMYR46hA27otaUNBE2lazI3Hkbnp4TK3KnKUaxsHHaxi44Z6iiulDkoa%2FkSf1t5SFMzHFtPNGwNTS1tDm2smx%2BvvPbe962c42rrHCJFZoEEXDAL1jEcPs71te2FBbfe7h&X-Amz-Signature=92cb34363e93c7c7e50be0c76e274ede19a28d8d0e2299845384e1d4c2908436&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

