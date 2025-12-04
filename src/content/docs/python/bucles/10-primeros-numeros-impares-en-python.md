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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KEI5I7E%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaTi%2F4rZTdUdBPS7QsoCibKR1%2BzNqkZG8orZMYyqOUNgIhALrcm5B79bGN4avXqJFEnAgPZqITpB8ytKB1a1HP2qZVKv8DCEkQABoMNjM3NDIzMTgzODA1Igw2RErU57%2FvGLAd9pEq3AM%2FoWYRsY12BhROBFelwzPUatSNKpNphlUvNMkX4c%2BVvbxBAmFKS2O%2F9HMItMbQj%2FBYWMCte99LjQKXhTsnbAlO1EJJOMTDRy72iEWT8j%2B4%2FBCWdspAyZQaZF0EhlKe3X6RPwxTzL9Tw1GSzBFf3cinSPB4ZP37tC1imoRtZWyTOAg4ZRrTJuWz%2BjLtRn%2FRj%2FAhVwTi%2FsVegLnbTYC3SQ7VDgO7leHw9Md1ISjrgHO0KLDM1TDQN%2FbQlgEx5NL0X5bSXSdbFgY%2Bk0h3VQqspqlODrzZmycL5Zk%2FU2wOlD3rb0T%2BirtVw%2FGBeY3tXYr48%2BlJNENco9Zfi5YanEFbzYawuuupgo9kX241RMJtm2IHB7AU3xrZNDW45FU4kdykzTQ9fyeZjj8n1VK1OFkj2u9AFby0FWrx3RP8ljSb7E3iYcoh72Gw1Hg3N02hywqrooe6bwZeQRzSu81sf3LqZJP88bQ2ZTelLl9fkMp8jhoE3JE%2B0KqDceL8zTflgwPCNzk865j7hH1xn30U5MLADss7H5%2BR5E9Y4SEbepRFqCBnbpdXTtMrYYhJhMkMSWAeAK05vFz7RZBTX4uL2pp7tXqNSd3Ok8W5pngc0zT83CL%2BGGXuu2c3Mg9YMx%2BEojDn3MbJBjqkARYJOTLimXF3TCntatKJYXyW5fYs0cDpsokvvB3uMjJVWIUTTj4AdytzAkYI%2FH%2Fow2AKAZ1qstGMsXB1Ga%2B56dvSqiWepBr2ZVo%2FQbx%2F6GE2pvfDYLeKL86GzmHPlT1DV8uDvant%2BbhnM8%2Flm3axNIvdcy036mMr9Kiuh7igptBRs91wsUTSFRxfkDI7nBuc5vWfIYJ7BfWhQFCnvJtQX%2BrHNQM2&X-Amz-Signature=2654cba5cd482baa94ecbc7e47a0d71a2fa68405de0fdbadc10f6fdcce0ee066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

