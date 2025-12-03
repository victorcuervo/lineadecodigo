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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6AP2HYH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIALS%2Bd55GQJUzg%2BzRFJjAChjH6L2D%2BdNsuk1LZpUfBxOAiBqZfWRse7DleH0MvD2ElLF%2B%2FyZYiW%2BDbPL5biReefv3ir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMCg%2BCKONjhpzax%2FCdKtwDOeBXVm5P1MaegOi35pG7u7rnrl0GiCxvtcWsW6bsjuuVN3ijUtC0yW2L7Ri1ohPAmvPClGD2DZS%2F5EqxLh6SJkpMxl8hJud%2FnMcAsy%2Bpede0LtH2ynjUEk8knb%2FoPxERPeDw%2BcZb%2B5V4nxrRpGqvVqYo%2FqxCRTMRrBF2DgxlX7Bf22SvaEw%2FNUM1UCKawQK7ii6stHHND2pI5ictcDSBJYwc7gQu9XgiwcNriQrgsX6f4OYHXG2EKg2jr9b%2FZl3mj8yPj9zheKo8QSKzxIVSSmARBphjfpJXBdYKiEoM9exV2BNUcjrEQHgb6GgXVztC%2BzRbRCz12aP0fkr5y3n%2BCRQGk7XNnwSvyd0hgS9QcjlPC3MMeDlgtkk5zEkhQAuJR9%2FIAvwiuST2nchro4RYhOaEg1XF1h9cnsS%2B%2FMbOSVyPJbrjkB3fkFQwkY%2BuiAN321bPixmxVKAipU3sgUrSGiguE4f5kGL1QKJWJ%2BVTvAJlSml6mbvEBEWqXjl74zAtfNFcCGdPVLBVT2PpnCn1Xw2Xai0C%2FujdWQ80BHX%2Fqtg0rTBcCFeQ1qReTJfP24zLeog2V8neltGmG7w6453oYEo%2FWkO1NRcq%2F1D4AEiBhr3UIkJ5UnpCT%2BGevfkwgPjCyQY6pgHmWQbdFyjnAffwvZAvZEyKmPUnOc3ZlROty%2FlElEYnjHVzPvt1YR1WTofiKja0XVYc0f8%2FSMWpCjBIeGZhIf8A8usWb%2F24pdrq4u5JtigiLmhiLgCDGqFuSGNfcGvstQTtI4r15kBeZWjco3ipa5X%2FvKLADecPqowzk9LKygHnehFGpSbQ7slAp9lL0FkikJN2XKzH5t85H5ZpoPXuTaw5qt5%2BDt%2Br&X-Amz-Signature=82aa34b80df910ed81f91024593ee1621a2a666df289d7dc0e153f28c5f37641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

