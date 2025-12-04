---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDU5TZQE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIHrO8A0isfOnu65nHvM1vIHFZKW3AiA7lRECCIjvUWzxAiEA4XRUKTX5lupMLyqlAgWRpscXGCTAqEVKfz5Ev18SNDAq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDG34GiLEZoET6ZgBJircA3bErwD5PXdPhkOGOMcaD5DDKQDB7Ym3uis6ZvO7S9M2BiVrBgMFRJMDiP9qqji5T3bBhRkdBdZdYINjSDhlkTnswThDaM3Xlvi5LstBh95OFobPxkhnQzXAP4lTw2jGdDSKON6j7X1e5HjPgpOcJsk449%2BnYij%2BO%2B8aIg8rr7y363%2Bk6QZOthFD0D0xdGPCf84P5UtMD3WLMtRLjKOyRwkf0iFtkv2jBH28kRL94Hh9xYTrhdQ6lnUzAP30zW6%2BM3AdA3RdkZv%2BmF983pCIWPI5th525vBo3Hp47cVfVUyL3rfiAH%2BaSZndSc7RZNTMHET7aFmOGCe9MNNYd%2BJFqUaGK2UvOJr0883bf0K5V40ZPLvt8ToY5dJawT0xQeJbPKyem744y4PY%2BSRIUVTSKl1Mv7PeHyio0DcQO32mXFZRBn1%2B9I%2FW3nUlvW99%2BjANBY0n%2BCQoaAPZrS91jh3RZf246Lsw6IrRPpfFIcn6zDJUmub9AaQ4ojDoRLg9Kw2Svoz%2BL3fqacWfIaSC6n7hmW91eYYqCZURgGmAdnihwLrqy7AdxInDzOxcYWd78eOBwa6SNSSn%2BMy6KIyH72M7yf2iwZ8n62lE1TD%2B3AlIZ4lIkaAcF6fIPsImUwb%2BMJ6uxMkGOqUBEsZkIm%2BKMvhV98pvd5b00nTbLQdGtmjcg5IUknr1ycdu3q%2BcZWvQi1cTWLl4L%2Bq0R1NCqORusAODJOYYqyZkR5COztUVFOuU6TUmy5IPwJRh1JIIowG65WH8bwfIE33OzWgFtvn%2FtMnEdbBFZM8lZciz8D5sgK86QUy5VK2Xlsb1ko8m59fy08xrDG5Vv1r4oT0%2Fl1Pkvenwsq%2Fhkqn32GZ52NKT&X-Amz-Signature=245d0a134d6fc30a1e6995e479caa57472f158ea3024a61d358faffa0f1e9879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

