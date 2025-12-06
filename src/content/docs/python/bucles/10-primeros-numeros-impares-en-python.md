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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UNOCHC4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T141933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDO%2FyXNdbk6HgauDWVIEu4OD1%2Fka%2FHo2VmixIfJpVbdWQIhALWbdi1M85sWBq3gsuLPPjP%2BoJFL9MxMDvCbEhefQn5jKv8DCHUQABoMNjM3NDIzMTgzODA1IgxseuvW76JZRc5oUbIq3AMvWiQZ6VgcXHyVBuQBerCLHNoKFuLIYlshoWqzAd7s4wjjjujq1xzEg%2BOcJD4XHnLnyRCIVmakdcV9l6PhR5tAbMMI%2BqNwuWk0AD9UqDg9oHLZJt83hUk%2BCF0xUUyGuFklli5Ml4KqHvMDUea1EEq6ILrt3hSEPV5zOdo0zb9YiZ6iVpXxpmqsRNKbVGvWAzdxONfzey2DAjw0PyVmoC5WLwwMFhN7LaYRCYLb7gCxsT6GTCaAa3Znc7klBvHBmYLQlzhST0MNcxZQF2ZkBPE2A7i3SNOg60mi151xQrGshez38nGBedtVzeAh3w4mc1KdeGYZT9SbDARpsrui4twi8U1CGI8n%2B0FZ%2B4eXnuM3Gj1PC914cbdKSRjLvn0hh1s%2FIHJQBxp1%2FoBy1rXYGLHb6iaLy1KHBpVUkcfXj4VmmwBbahygbPvhGsW2eT6w9xziDFsekkiTtfi0erXL5zNeqKPgmzzanGe68by0qryQA8fJAGJ0LGezbGkYSRb5rK6uvG6DqAGXqQqdV%2FuNwuW29LYzzLhxGCUzu1VRP%2F1AfqyYoD%2B5yRyRcM6GaiRDGJ5vD90ZluP3wdPQ40WbgKRmG%2FSrA3bWL553l9xGsl%2BXDcpAI5%2FKsqjJJssDbjC3ptDJBjqkAe1rPJtWnU8e0MeZ1t1o84gVXXyyhEbrMxrenzSo68kgUxhJMoJqj7WC5yKCaI4Vj1F2p49lGH8937QUwHJkWVSAzIUPzWi9P8Z1d61ZJ%2BOThm5SPChuDwUU5Q%2BHKnZbQrP7FniklGLQboME%2BaOPB7SnZIOC7U2p%2B5HU%2B876ftX%2B8IIEwDwyEkXjCTQ0mv2uw%2BS7ST4iwZKPBZaFQHRtUyhiqUnG&X-Amz-Signature=951f29de71e3aad3c81c7e2f96b265ca49b714ad7b2902e6f36c1ab5bd1fdae3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

