---
layout: post
title: 10 primeros números impares en Python
excerpt: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
categories: Python
tags: [python básicos,python bucles]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLN54VLI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCSVyZQP1aP55F18xbIKLQp%2FySqXm1NyX1KNnKliSdWmwIhAJQDXYQ5j6e9fgfBWBoaSAf6bzhIeh1%2Fgu90Yu2eN3dGKv8DCDEQABoMNjM3NDIzMTgzODA1Igy5tr4FTjl4Ux1RdJYq3AP48yYs1fxv7BDlF0NHtjhuxdzGc2XJcOrDu%2F1T%2F%2FWSUbOGb1rLBqUG%2F968uhnjhrhskAC%2B1ENXmHjBwZQfjP4lmzpooXpxHlj0wNs2FH9q259FmiMya3ChcmcCB23q66aMCuyUb4FOKbSuy1DuaI07Ncp7DZiSxQjiHP65AfkyaG2F42lhIwQQolUL6DtAD5ztWfZyG1DcbaHsGHBFkiNuGWD1xMn2Wp5MHu9hWGBEP9kLIvs5bhm%2FW0qrdnrWUtqlBCjYI0NhrrFdiOQdV85LCjS0VOl8vUp3lWOwhIT8ABEbf3wDXX9EkmLJ5jIltd2wzyUEcGNP7n3DQEACpAKD2HLggJtjdxmbB1MKRjANvJRK5AtBEMY9U4eExBA09JGb1JJM0DOVv8BVrn61RXwrMgJ2cni74gwZgOPItk9JqIEQtWqZP1UXj8OaMDjDKtUwBc%2BTlnlH0lG9LQfcXHEtpOXlcBNI8pe1VbW935YzUSyN%2B%2BGzfurz6PToB8pmfi8WkPI%2FDYkDM0hbEvVqIgrop82wMF7F3x0%2BmMMjaZ27EoG91zlBhOD6PN8cXayC7pCk6irL8zulHiJDzkpjoplzsxM5%2Bd1gQOc87q%2BT9yV6vP1VEBYL888vVBnXMDDhwcHJBjqkAT6rlJcC9tRxUYySyw3sNJhIQZAbwAcSrMeQdYVBH0TFY5qR6h0PnegBLqsu04Ig%2BJkicudAZiCuk3RgTLgH1zEgU2E7pmnv2FyVLqk23cUwd5X6QKZSSHqKtZnpUgu8p8FbHqEjRz104Q%2BL2ApOek3x8LcyK9uHI1tibxy6JSV3%2FMSnRaDhCH6gtbfAaZ9F%2Bi2F5azWl4J1lu6AU2pZ7rhjZmQe&X-Amz-Signature=1df5254dbc0e4bc56e5781e63c744db6901c9df81a521e389fa43d3959741470&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

