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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEM376FT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFT7V1Td2IsJP1q8bwAk5vH3Noq7iL50tFSWW2lEaAsaAiEA80aes8%2Fit5%2Bm0y2Zn7d5khyY6hxpjr2h8sleQl241lcq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMO3e%2Fody2nN%2B9GshyrcA7HOq9YLu2qIswOriKZ3LZGUx19cFB1%2FIdr9nARsjmdQwLINZWtXDWl2KOlgUZxbQ5voqBQ9q4K0tD6APt3FO%2FRI4erlA2wIE14m2JRglftzQcAy1VBCviBLtDppdNtwUvKbEvvgOSubkatAwmYlOLKGOKDHxX%2BS80%2FqR%2B0pQblJVoJl1UqfMuZRxRnduHEC4sF41wW175n%2FfBG7Zp%2B3%2Fm%2FpRfklV21u8WV6jtfd5YHnSjR5S4wmWF1mJR4pKAQMU%2FaVSnpdxfjB0lAj3yh%2F7ym32XPgbhe5tC95kcXihYnHh5V%2BdZPvcAGFk5UB3qtcxTHQNEZD%2FbVDp9rj%2Fe4gDjM1aoyVo5Kx3F27VrjSaEyb6NphUni6TBoMA90%2BJdTeB0WbcheHvmgvSPoGGIB7SNgSObF%2Fw0r2Bmfz88G7vGet0W%2B8611GcOM%2FrIfWBiIH%2FvruAVht4Vq0OdBSJO9d7hHQjPmTbgqOvLI%2F20vuZKHkfVlT2cL7RKUn4SlbTs8iNguZy91rmLWb%2FAHuxm%2Fld3Ih%2Bhlc6OGiCGpcqsOD0T%2BnYPRwzr6WEGmO3ViyFDoSUOk2ZADfQRat0tZ5cAHq7Z3UoJmd8xP7PsIqq8XO6nKn9KL71RDLpUIwnlIkMJ3ezskGOqUBesdeVO23zLnV4%2FnF9wVlxs3SITOFWLXGaKHKm98qMyCsfKVEtsRfYyIHAxNDNxZ7GeD0P16ygWDok4w0Lx6pJ49LYV4THPQRrPhUzu4XVpZcskAB%2BDOv3YJxbAFWmTkKQtL6tXrBvohMKWhn6exA1Ohz%2BpT9DCEnkIEjPgfbsxHskRZHzf1xeEgU2ecmE9v2Aa8pG%2BY5JzTq91MbQHe19%2BQseOE%2F&X-Amz-Signature=2b1e1756ed2cbb1bb8b46250668c1b29d814227cf5d9c81cae422b0f4cdc29dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

