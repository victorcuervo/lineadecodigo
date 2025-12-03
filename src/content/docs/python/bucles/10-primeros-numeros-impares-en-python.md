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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEUKTZNJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIDQzFwY9F6S58%2B%2Bxo1TQoDDOMkfe7%2FbJhdnzjs3%2BPBMaAiBv2DVnT1SCZHvbI44tVR29nkjpq9Ya%2BpBsHf3CulMfDyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMJXqPZA9J5HtwqU6eKtwDOt%2BGQZzmS4a824rMEgS4g5ZQ2bciEdaRYW8W0%2B15x4Bw3tFjCwt%2FESNPkYnsjsz85or5VoGrRgW23Jx5YDLlJYjPLWrwcc9aS7LD8JnkLlstotme2w8NloPsqR6Exx%2FS1guEI7aJbUKfOmPiA7yEUfdZ3ou1h1Wn2xHlt%2FbfAcr34OO9vdbik1mnzCvRBDYOwjqLW64jo4hedhwCbj%2Fg4imQ9SI4kbq1snMP2d1d6OczNkLE4zGW%2BR%2FrgyVjqisFgJo2k1cbvwcDAfEcMK1iHMEOn2OEt8Hn8lt9F8SZsEnR4TfeOxPdmtZVYdiH9uHLWmClIv0x2gd7Nt7StvwfhCtjMIsgnYlw4dq4I5DKAn8W%2BpMGoHrUv1ucxfok9lJo7M2iMYv3BtZn99xosi9nT8Tmp9MjySRtWeEVXoGggfBxVXmVi%2FfjszMeG8m2prK2l5FnqOztiNCmZFiW8dvXi7qOszEiwUvYPuAaoc3J5pYaty5q1gnkNO8S3o16tDhFAlrPGItJVu2JDz6e8dIT9GIcbpHLrJbe6nWXPLBvp0ltOBbePk8K%2FWDugBPRpx8K0Av%2FMZE099tpDgQZIoHCfGMpmiZnEnu9L3OMXL8NRsEp6l2wNHob%2F%2FPUeFAww77CyQY6pgG0hg54gr%2BigK9exZfOBA8NwoEjJfmPbHDoNG2WM%2FLiMSow120Nt1eywYaTpdM0moI%2BT4TtZNpWedF320APj2uYxy73TTnpppM5kGggIPpwGcr7pafFy6yHTNrVOYDcw%2BNJ3tVrFmJzv4TsqgyhnkOAu0aDTftqSLkIB3lcpuFuZxcaxBRrpKxDkMWibbiBkeV3FOHsWWR%2FPVwj6oP5RUfguOye7aiO&X-Amz-Signature=18959df99f90129011f56039d238ad6f2ecde3f43b5f1ce9e16786b50f2cf395&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

