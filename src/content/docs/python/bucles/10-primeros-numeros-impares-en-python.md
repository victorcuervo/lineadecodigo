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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJXQLC53%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEs8nG6%2BJHfC6366uxY1g7ClBQpuTLzRKRiqucFPdB9wAiBzV%2F4B9hbxpvgjgc%2FBgSJ5fNPKT5MdBuNdGiUaZEEepyr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMY%2FBV4yEZqoj5yN8NKtwD3HJvZCkTh1%2BotAvmX6Ec0QniPOEITz3AfOh%2BIoSXFs6nsqzRhtjygaoP6LPN2CIXfDPUMcEP7vZgWeAqYthmkOOZHyeR70JiWwGtcvclY7N%2FX7WJNTdcQCm%2BcYB13iqS4G01ZkhNVpklv3KmiyJbPL3Gw7YuIQSFqSNOQ1b06atZRnuKYuh7WKZPEHx%2Bhm0%2BL55lq7%2BKp6u%2F9x%2BLpTymDTXYPXvMMGXe%2BDSW1SqFXR33aj%2BJXQD05dZpRZR%2BxuAquTRtrq4FErvxtp%2Fh%2BX3nGFiQgB31M1qp23O3Cj6J%2BYHEzxs670LgEq%2Bq7730EDLNXfJ%2F%2BdocAc%2BhDTgsJzeX9BCZubwGtZ14QQDEXMehc%2Fyhfw6U8QwwTfJUZ70dZ68PePZJ8lUxoH9%2FU7EEuMg9Og5up6YAPqbS9nRnJeulNWnB2tpocPVW4LiJQbGuglkyilK1AfQHK3IWbkfMkJbaTA39UmktCy7C%2Bjs9Ck19AzcK4jSIbWG53EGk%2Bqe3hOSiIFBPs9L539bwF2dcdrXV%2B4g0uI9J9epSFWJKAFu%2F8dkfM6M4puNbVDUyB4cBofWNye3%2BqA0Fp%2F6thJXuxeH44WRo0P2xI%2B%2FAz7Y0UDrRafY9YmKSc2wCgGHTIU0wt%2F3OyQY6pgH8aVff76ix8G0HCeSzslXFs3%2FZz%2BzuEU5UyuLlMOt%2BAAFEf%2F%2F%2BV0WGmHU8RZ3bNcO52iO2G5FDpNnKsC%2B9XS2Es1UiTmLtZLfBpiSZaNhe4bXsVYe%2BlYnSo6NFRZhq8xWZoo%2FRAkDLmhYl9%2FPSjl%2BOSr%2FQKuf0Old7D0LmMHl9UTlEG5zEDdEX5JeLVZR1k3YBh%2FhvoFqJnHLOgkfe2r0Et9PU5ZPt&X-Amz-Signature=72a18210a03c331bd24925ccca90cd9b5b60ac5bda5dd99d1ef8326ca7fbe803&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

