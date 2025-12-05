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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJRWUZUH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2Cevfv4ZPh2C1Nz%2Fq8Oa9IrTj3eXq5HGSWpnZ4zmNGQIhAN3awbCzyJr3IVYuXTOkYNgYc%2Btdy8F4uELPcYGxSQC%2BKv8DCFsQABoMNjM3NDIzMTgzODA1Igx%2BB5k6mJPMfTRTfJ8q3AMBuycEc%2FzAtLYqeGOXuApw9LcGZ20%2BD0UaO5vPsH%2FvdK4t7jLC0oqhk9BNLsKPBaejF3Z%2BvjIwBSO43D6avVCDMjbzUfZUfjBUJ1MbreQDBaK%2FmK31Kac8bvaWb4QJv5iAkaQUgLRsOBUzlYTNuYQVMqdj0edMY57vzA%2FtvRVlIsUR%2BWJ6owOocEXgE4WICkuoPNCcCHrKc3wAph2CKoT0G%2F722LeqNHr2FEbIXLgc%2B%2F4543%2FKyiUqjDlfIuIkMu6%2F4i2xFkc2Q9lQUMIZE8rcBSrEhnUGv4d1ZInYZmaJW77Jg2%2BqqOqDEnLD4%2B1CgKpqza3Zj6PneG%2F7jmQ8vL2mNmGNcuPX63hseQ27mjNqhdlAcykuWgcjMLr%2BSs6tpG%2B3y7VM7s3zew0icNJzNcMD3wuIs%2B2VOvCidTeFfTdfU2K9n8Rwx8t%2BUZAGRhJRYug6z6I1KG6jNUWLaaXyCcDlysD7qBq%2FDdODdSuIoSAH7tfDfWQDmAq%2BnKH6omNH5cbNsz7agYA1sdWC%2F%2BGVo2bPJAceQ6TZSRJqGw34rJFDS42cZz%2BffTPCOrgCi8R%2B0bllnEdzdeesXIQZmL15lUdEsQBRRkkfF2JPmhZcK%2FesdGD%2BtGwA5Il8iE7N%2FjCe1MrJBjqkAUlG8yfOgJcGKVqoi7aXxWwyDM1Lx3ZUGoPGtRs0nWZf8m0alHgJofwtxZDId5OPxo%2FoMmsDe3qFNF4G%2F9czxnNNDRWDB5m5W1r0FwjXfhG%2BYrsG7NAK%2FLa9w0l9w8CXCsUhuY%2FqRCVYVmrD3UCTmkIGpU2PehjjOV9jEA59b14%2FkdWnAfwOZ0ly99qialvlgJeBBVRO4sSarQUQd0MKRjsZoNHM&X-Amz-Signature=6468449ffa0b19a91fd292dfaaf78283bc86c982d76e9cb322755984d369cd11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

