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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LI2I4EB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT38sHHmpWjUIDjIfZS8GJvUTjmHW6EQz0qlwPQD98aAIgG%2FsUxgQFKMxf64oidoyEzPOdouLzFRPTX1WZSuD3Q0oq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDPl4dkNyrteYLnP5HSrcA24%2F1XckvmYnvgKAqkM9VjGM609jmAWiqXeHR2NLGAH9BI6wTydMBFEPb5PT9FdlbGul%2Ffc8P4UQmyNspyA4IRKmWPyLzxjaf%2BPivMF2B89bdb5PrGNwcjfo%2FegW5%2Bw45E7hDuZtbQz6VPOKJ4o25frBigQ1xV37hQkYvjxDbFPNt%2B2YaQBcQ%2BZilNvxzHtRx6EUgw%2Fk1B529Av%2BINd7U%2BuOS3HeuFCUSxvoo31Asc169QNH7xqzfCZ5%2B9tKjFLQgen0EG%2FJRcP3NxvpT04o114lS2hn2c3lJBR6rbnamrmUhoMJLcsxbtdNcX2zPpy%2Bkna%2FOlg0OZoBFC4TI7qCwXCuc3dmD4W5iDRObKxihGvXwSnpqtZ2m485OPB8L2%2F0pi8RXAs%2ByYDZzz2yR%2B%2B9wtiQpksWfBlgScGu4rrQlFypEmI8x2ZVeA3VDztYC6Cokh3wrwmApcnzARXD7IqoTq72dTZGw4JoIIXh8Mn4iO7y3iQP03j9FqPjyeg7M%2FB8euaXzKPJ08Asah64jnLNLB%2FnohpeE5omOEgW%2Bybznog2jvmLjRdQLIO97yNF48NksqvXho0w%2FbFlAuc1db%2BtLCE5Kbjv7sHfZhb97f8pL4eV5pK3PSZwAcPF6GiOMKOm0MkGOqUBIKpa2blyWE%2BLPsZ1%2Bqiqknecnx5lJ%2F3axEjjwcfzwT8E%2Fmzyb8ojXrFcn86qmFlo4b3bojdmS2J0w017b1vVPiLu14Poj3EB8ZgHLCx82fRF6b9%2FzGTm4TzLE79wSS%2Ba4pRmwS80ZbTV8guAsb5xmevIZjBFJI0nnLFNCwzs8YngcSSUmZAth%2FsBL20YsSoiDjyOuvmXK57ls%2FuqZq7thUNL6Rkv&X-Amz-Signature=cf64c1379e884a3b6dcb09c365441b21ad5cbbb47691400cc5e71de366b9e5a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

