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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRYHVDI4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3mo70wiqZTNS5RENrjO17se3dHwyZ4PtpkNJeXJX3tQIhALS0Pu%2FuhZ848iBzQEK1sKWqMiwe9B1s%2BbXQ%2BX6vBCKkKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUVsOT0%2BrH5Yy%2BZ2wq3APCIs0gqvFYouciWCwXpZ83%2FCgWN%2B0geKDX%2Bzu3tWcWcrcjWA%2BWUWv5G41DGtLKO9hLugqpbwuZJYqfEC6o52%2FU%2B8H%2B7m7HO45hq2WzQnvglBxmAVp9afjk%2FeiVsRR95m1hiPjIVyKc%2FdnUXFP5vC%2FVxaZnwVWGNde1lS5PSi3SCrBIsjOl6URjq6C%2BMt19Dhy%2F388F%2F2Ah68iNroZ5v%2FFjGqm0dj%2BqjVRBz4ZXtaVa2jjhqNGqHx2d5x3OM578LhFvkMvaSZO8HLrTFm8f1LFf26%2BeedpXgJHbtStVlmZmjTRqjeUl3xHEPUoJhOehMZo2%2F577IlWQf2XO7FEKTyTc1b3K2FHFxPp%2BRypVwUYnC5YfkbbwyCllJFImscksUPmPGuu%2B6JHxnMOiSVayJo9H1kRKCanXVdUtVeRRzSiyrdufqkiVwq2pv0IKG%2FhA%2Bj4P2fARci0hjNDXYbHmn%2BYbYfUsBjH0qtAYqQFyaFUv1537%2BoGwSfI3pvf5vKCx7YqjA%2B1bVMydrJhvNyQBzntrSVY2Rgugfeg5TglH43r6jruvdsgmn%2BpbOORB3aMrSp93zEL3Rv70qvju66wEL%2FUiPE0dFym2qU1coy%2BY%2Bny1DKVOzo17ZTbTUTpBZjD%2F%2FdLJBjqkAc7BVC9AFp7FGWJvMhpbdSTCk2qZYy5zEWORgqh8IAQVgbU841LQJs9sQAeXtWLvd7Il32izquQZpC%2BH%2BYHHRI%2F21sTtXo4eX0%2FVXlG7PeoeGjI0KT%2FnU2NcGIiRE5%2FS5rgVFgfmLVd4200JDpU8dbx66w5WB%2BTkFf0CnOXKErq9CV%2BokRSjQYx%2F5YiU0lV1QlVH7Z%2FjLe8ZNBwAwQozYcL8seS3&X-Amz-Signature=cc08800d069a60f8c81df8b2b141af62b1824d7a7c0977477971c076f4e4eac7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

