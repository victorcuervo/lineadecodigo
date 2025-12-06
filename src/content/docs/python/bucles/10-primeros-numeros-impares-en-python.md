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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYRXYJUL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmuh8kqYcfNq7580PTRnuPC6u0C4GOuY6qcQu11VI6pAiEAmd5mHrgF887%2BX%2Fr24sE9zCwwh7kJJAaoLIk%2B6hxluIYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLNXi%2FSO6kM6v89FeCrcAxhvSRn%2FXoveQIti3RAz3tHr3L4sYViPTW8K%2B9S2CpK4%2FeI7a72PeO8%2BmnMYlBkFA2EW2f8t4WZRcpSZ%2FlsZ96eXqIquJ433haLBItzJVuONDGhwxJyi4lEryHdhspJqs9bB7P8SMJMh4%2FCkFVjxoLPOWbLQMyIUpZzb%2F28GzqGRiCBpvKbqV2ly0pmid2OQkYvQAv1Jxs%2FekjuQgZ8aEloXVzqeVtvoFhAeZVJQ2NNu2JYVfkmakSCyfdi1BjH1sO77AUmnIp1QJEyIogCmRfhmk3gV%2FxmetC1jzTva0i6IvsgvzrCZWjuGicXha%2BB2rx8SKn2SRHqeBe0%2BWQQEhT5q41VsoxIeG7S3vU8zyErx2tjgFZ3EfRMDLcdz5fZF3xfotFw5NIh4%2FG8Co6SsU5XDb1T7wtAVzNFkF5y%2BB1Ju%2FKKvWxnWD1Pem79PcCnClEyCVtGvsYOUUj5G51v%2F3ALL4bKA1LtD3sSR3z6NKLxbqwgj%2FeHXEm4TOj4%2FkPgPMfX8BMdiHbij%2BmPeeXRfMIkzHVlQwLVJR%2BhR%2FNLpDLBVOBnExAzDqdF5bm3C66WWDngA3J0wQM1oOYkmm1RSbIN0SLCNTyC59dwjNtDKe1o0zgSEMykT2fw%2FH2zRMPe8z8kGOqUBPPKbZrqMKXP%2BfDOv2fLkzTOMFFMoDOMFwZSc70LUvyQvQQtC2KVFK7hSvVgbXlOx560%2F%2B0xAvldoVsrmKykPZeNgTKgNlwmMp0kE79Wnzsd7AtGti0%2Fv1MnCww4nBdmrAH5nYY%2BuY3pLW8POE4Rt1BuOCJbwP1Tim5%2Fs9An5TL8iGlIe7W9k27mnrGD2%2FDxebAi%2BLU4EBrD4UqJico72UnxDb9Hb&X-Amz-Signature=7f8ce56d1a248992c2dd958ca30468af98a7c53a4a50feab68fc6937aab2de65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

