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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z74A6GSF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T191859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUPFJL2QIu53eGVpG2CxZf51b83GKb9tKMktF55Pb1wAiAic4zXhVxFEugfgTs6md6uspy2xIRKxbYnKAZbb8W0SyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCa1vvbkRU89k3YRhKtwDTcerGa2Fj%2FGo8p6GFi2J%2FZuGE9hvWv%2F%2BRhL8D5mxG0bgxM6B3dpZDw4eoXBz%2FRWsHeSaYMbKQ5T8%2BwaPvYQ8Ip0crR85OhbaufGGeGz4exYba7wpxQtypnW0rSwyCy%2BtAPZQGJKuQDrGhyK54xkqhG5Nny1HmmJJwFJJpd0t1OTa%2FQ8Zec653yYZKdgYFHO5SQmRef8C4pM5BERxnQWLHwJJ9KxTbecaibGHC%2B9eiiI4bKa8cPy2714xZNHGxKBYqIm5mzsKaEubN9hpIwbTp6B7E0o%2FM2aNJ5jmNuKwCd4wfKTgj0qlTAKOoeVR%2Bhy9mWxNSfP1gjRv1TaTjuGt%2FnjaGqCIo1mwAYfNEOxPhsDXvHm9xv00RODaxWqh8MTS14CJMtrBmbTK8FKiGo9PJ6%2FqYnH5dAMy7uYmhV8S09WBJkua7lRLLHNoKYrigxwHJEl2%2Be348craOEsM8td04oCCHHMwG%2BhUim5cQAuKaTwneksNJAlTGi5N9nJxlWirjTj4hhWx%2BtjSBx6pHkI6hBQmw3pktiJDVwEFwHXIUrObTd5BT1Vu5kmpm596qZG3lg8JQC7XlferS1GNtpV1ui5LE12wK5vEhY5sfli4xnzEsjsNqqjMJ0zP85Ewkb%2FWyQY6pgEvmZVdvib6TQRtgdPYz6bMge2r9c8vQ2w62QvHdTFPBhJ2PQap5QRVfOWNbdI4QGFDA5na%2BxaIxD2acMk5DUdXnBIsAiWKciGFHv2u6sTY%2BmdfSourqRfRPo4cyKNo7yfXTfWg3JyjsBiwI9EksjIFuMWRCHiHOPGQa%2Bc3ZQtebjdUeD0P9qVNhRDLeJuWT3LImgESEpJUlWKkd29yxSna1PwkgPzQ&X-Amz-Signature=cb018397c40c68d976842e19635f34822f6ed6692920fc38e5bcf2f9d36a0bd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

