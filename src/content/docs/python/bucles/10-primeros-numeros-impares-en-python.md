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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIO6LGGB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T093738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6dd7bg7g4GjX8L1WPuc%2FxhpAJpD9W%2F%2Bugyhny1niMMwIhAIGCkLTkrWUdp1fjza%2BXlizc4uNvH2%2BTj2%2F6yhbCk57FKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFxePZF35Kk1bHekwq3APkzWDKANO29b6ISXo30fWUi9K8U0H%2BQ0gskQPdiifxyaS64x9lhui%2FYqsHuO1tRjQFyzf0F3UZefN2eoU2WdrskDOaDM91qevZf94xDs2GpVHESrT0YisYPcBb832nARsEoMMfKX%2BEs2ctsxBnZAM8A3BncY5YgEjhx%2BWo%2BBRQG6ep0YmMgNt3SIed51oQGEzlt3HqL2w3B5R%2F7jxOxsD%2BLC90vJvF1s16BW61gfFEDyL01e2IfmWHBhJ6Zlb6vOCWZ6Rzln6FioMPXXUTWh%2FZXkGjhCg4rOsUVCmMyeGTQ7U5NEFbvzvzMdR7Q5dMxJMZFa8rasXuRH3DFlHZhioeIvRRgFri2osH%2BYJKN9L01nP%2FaZ8OXA9xg4LqvbuN7By6LIHMhjY%2Bjnu2qeLggmDk7zwwrlkiBXnYABsYTlhauzq9gwdo5uxAuI%2Ffsil8H9athRu4zsUHfnFiZFRAQsF7dzD%2Fh1L5wOVFrpZgIn%2BtQcPyz3eTxp8H356bAy8uRJYNAATPNTO4cPgc%2FwLqNLO8v7gKdjIOi%2F%2BLAZnyQMuEYPKHybjjbxfMzPzGjtBadMDLth%2BTqM6QssPblidlRfKll2qSqczvs24dtJ5pSpl26hM1pJSh%2Bm0IGIA3%2BDDSxN%2FJBjqkAdXZy5f9L5MpeZOBGICt%2B5U0NF2XAGhV2Gj4y0G04%2F7VBwibxzRVnB282FvuOLrahV4xksxEcMoatxqmbvZs1%2BiELMX7Giac2Sfluyzav3AttRkHQ4II8kvFAf%2BcqdZ4wTcu753smVqFpBg9xo1OvVne9VdkN5Fq0Z%2BtaZnXqk2woHb7aIBqNbRt47DDtpBxxBh9fXzB%2B2ERpam0WyH6OeDMtiQD&X-Amz-Signature=c805649e4442761e2cd2dcdca8fc62af63776841ebf43149a772a44edf6a9d83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

