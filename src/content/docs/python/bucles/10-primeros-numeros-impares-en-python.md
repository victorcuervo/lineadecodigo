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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLI4MP62%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDnDveUcgRIY5HM3%2FeXwtRN8FIq6QWGM7EYh1aWD1Qb0wIhAMTTWzDF9pC4lf%2FCfTHb%2FeNzIoyAe4UZ1TOJJpgPsvfIKv8DCEUQABoMNjM3NDIzMTgzODA1IgyxPHkIdfGCuLbFgzsq3ANOy78pw%2BYahd%2Burbk9rQaaWFt2mJiLAgRk6GiB3LvBdfEa7GDuvOxfB%2B%2F%2B4qePB6D1PLtgXS0napUNHunl%2FL9bsXyGtTE%2BoGEL%2BzVmHl1QzOuPictXdZKABmJ5yjdWIq%2FPTM7rOiNxq%2FE%2F1bL3qYaY3Q8oJ7iZAoWG8t0kAgLKGWtvMuccG%2FGeWPxArWo4bmNqW9gYC9ell85h4CFp%2BG3w%2FT06KLbrg0GKSv3TGWYPZuzrk9oEvYWcCT1kpccaAzf4ca%2F%2FhVOBHketDkN2PPN2C%2BaSUwA19rnOTIIyuKGsTABWA0dA5%2BgYAlx%2B%2Bg8CYHYJGyeP7iSkBUf2f7BVp2y9Cfs%2FrfpPfJA69q2rOjR9o4SQsSXjPZsVHx3RnppVd3IwrG%2FNSdWZRAcmVPHej2i4NG1n09K2SzFH2g%2BIRa5Qhn80J44AZkK2VF02L5sG2AtnoLVDpJQ3Q0m%2FjaYciwLmn4fDF89tQIz5alZspsA%2BA2Xfgp5WL5cFn7mhzbHHR38GXpXyaMwSaPmPuAxZiYywG25iKfcM3PEE83Er766%2BPoj8zLrCK8Z9yyYQkO1LjlrdSfOnzJc27vtK13pnzD74vqSi1f9C09M4IE3rxqJEt2mH%2BSx0xeLrkiKG4zCo58XJBjqkAeqnjRXcKZZax9KFkAdVPGR6YxQeEd03bzM81SPCyzGGU7om0xcXaE6LPDjObIbMd%2Fa%2F5NH4w65Hjy1BhQh5AzIl%2FD3c74pEH8hmn%2F4ScPDrMwR%2F78YqRJsReRByJAkb4RmI9q2sBKJVJdwwxGCpF8XyTYaeFvP%2F1HvPzg11rrHLOHwbrWSVjyUSUcEuhzf21y5yn9ME4G3q00wAa%2FrEWCndAbMC&X-Amz-Signature=afefbf87fbce4ae8aca00e1033886257f4672daa34a1fc7e0ca64c2a407d00e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

