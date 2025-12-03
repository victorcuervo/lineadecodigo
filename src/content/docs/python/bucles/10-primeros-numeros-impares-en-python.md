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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDW63HLF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIFn%2BxPZMb4l6YjT%2FkBk7hPDTFyLSX4UZHC%2BcURXUiXhxAiEAqEUnnL0szd8nxVYKUG6zt2kb2JpyAqT7gWUPZr7VCD0q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDKDnDLdAbZ%2BrBRFkTyrcA71JEY71NO74uHU%2FYocx7RsCedfzs9wkiW5%2FWchtB9BaoS9%2F1%2FH4LCKFqoSBkgKi%2FLieOiRiTC9JNa4gdzA14RTTGhi8G5eu4oxOHtC2ChQ20M6iRfWqQ57CLf65PpPgyOHb8rwhSONduQukhfWe4QThqvhrcHpVUy%2B5HbKboOlC2W1jR6%2FiIFeuAhteVz1w51Fb%2FFUzpKCJESz9Ms5UZ4ODPLi3sH3KBWkWbXnN1L8L7d2r3BkDD4ym8OU0jHd%2Fe4jdauoDsftj3p3datdB%2F8qX1IGA9BRttS4SBwZWS2r7aMFVLeaLd8fNouYRvWxnZbKlbPZ7aaisRQ3dwshAesin9Jv%2BE9SwpbOIMvDLc0ZRaHJQ9nkH73I2J%2BOntetRQX7RZbOP3%2FhUwQbesjTVa%2BhfX%2BDwdRJ3xh6G%2Fcy20Fnrb6c%2FZNNcKG%2BWKCIe8ImSYRqwV2HhWmdKcyTS9jHdp4p%2B8MiyEkhp9ZgHstWdpKrJa%2Fp16l6RLw9vqQgDJXrn0xUoTsXThcos3GjacRuz3C8tYnKjLn3GvqXo9o2uoP97GHxsaUALgFv4RP1f0cF%2F82%2BPTQqGh64G5Dfmol0YjTIDZ1efiBMZs6Lqc7ZiJKdvShhJ7kdlo93AKUToMNv3wskGOqUBM0UCon2T%2F7tx9wO%2B5yi2YcrjIkcAB2QlWEzG3q%2FlSrYRfsAEPdn1GzKSC7rQVDR93eRUcpWuSoB9v8n0wor6GgB8%2BHtrkVq9GfycC65Fa7sGNCHGbnUqeYO2bws7F2bq03ehY6bx0v8dIyOtNPJshpvMrXN2SEJRTqXqKiCBX5OV3QmgIAObLxe87wGGBUiB2RrbN9B5RmBESSdmogJKpnvswGEW&X-Amz-Signature=57682d8e783af973de46e70003f60a3e00b6ae12405ecda2063025783da48894&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

