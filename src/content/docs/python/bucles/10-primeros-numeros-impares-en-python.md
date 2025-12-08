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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466665MIDRK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T122718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFB%2BEwf0u2BT4hovAUeYQKop7NQDXFNTWb4jgCAW2uE0AiANZEjIXugTSiT%2B%2FHbXM8ppvgCvBL0lSpdKIcaHiS5h%2BCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzFOMER3VvXjpbcbqKtwDn1BPWBtGxsH0E%2B%2FJ2xvJAT5EttvBV1R8QH77n2Dpuxeu4RahvTsBJvADwCVkNdtCnpF7ZPR3IjJuQuYtcfeC4VG%2BNVxhgm7f6W2zB8nqRevbd9TYgeAGA%2Fn5kcW2NQw%2FikU977D7ljepDmPtZDR7K0oQSuFV1yr4Ycn6LRN%2F8K1DcqI3e02bOnnzuHham6290AJ3Ojf%2FuMoXNCLD5%2BIhq774YEvA3p9Tm%2FwUJ%2FEpSZ%2FIEouDGdntxt4Q7oAzLLt%2Fi2qZ4C6mpXrygnCq%2BDPXf%2BniXArcf8jZNFqorPnKELGtT%2BBY0x%2FCSY8SynZOOuleQ3sLcWI7mUZOJTqB7Zwt%2Fwv1o0ptstp%2BUlJ5yd8O3u6VZoCo8VU0vMG8yVlROPdrdxU5lFsUdGQX3TM8ZK6mQgU65o3vg87L5dxf9qb2JWoMMi2SiUdN%2BqPcnzkADUBn%2FUrQRHSjt2xhUOEltH6FIi5flCeUA2iw6xG1rtzlO%2FwDvhYXWcIes8ANfc9RKrVwAAlK4aN67knrog1UnSOWAyQDE%2FB4o0Ix1am0KMRsCeEZYtT%2BZihIgZ%2BtjeIjMfstLEoaIXHtZfvXx%2FtPyxxXdhgp8tg%2FpE3PNwVcOYuLelvxFoAOf6wYkLTeDHowm%2FTayQY6pgGCyXhoVNFj%2B0mE9CdqYaliUm2Gq2zmgz6cM9HIFsgIO%2Bo7UZPKvHYaLx0JOA9L5n39olVPmSD3hphenvZyiLBnywskfmQIz4iYVvRsFBb0GNJowR18CY5XRTDnZF772Wp76r%2BlafA8XnF%2BQm3NAJkxHy0SVID3dP%2BpgaHSF2rR0nkAc8uwD%2BkqbMB5HOFptbLoBc949zjv4Zn%2BhmN2dgz52f8f3ccJ&X-Amz-Signature=e4d8b8642da5b3f7950caddfd565176d859d0a2b7878d68f4710dfa21d79d35c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

