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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCGAWSW6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIAKRVQAJw6VgSPPR%2BEzqRbMXUG0W3LYza4lb65g3kisGAiBAxr9XF5xR7kmc5PC9oSZxGVmKzCV0TJlhqOSqvD4hbir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMAxoWg2fnRo1rho4jKtwDaxSpAYRPPAeg6ev0JM%2FqtY2OZNMPkozT%2B2sKZ0AJAOAq9%2BaITNOpt%2FDJdWZo4N2KMyuONIyZ%2B2Cke3B3JGTEcm1AJmDigzicAFqEVBcpAqPZ%2BMJGRbvDydXA34oq5z%2FlFS8jA67S0%2FfHK7ei5exKKGkgrfMuaQa92G%2BTER2lYBPOddBiz0U3I9JQrmJNlTrDlLRuhZkfQtp2CXR2Ju7JsXbhMgYqtW9kQgOieu6XENkW8ivqwaZaLjuz6tEtb9KFIkY6GucSJitzp%2B3a1JFY8esqgyM9%2BHTLlteG8vC8gffItrRcgmi3D6ko8HehwEiSemT31jV4KAVtpTfOGhQsV13li3hEmsnenvZSiRT9bZJHC0G0%2BluNakcVMuJ1vWTffuhvHMqyb8EFQUS5GBbxXoUAVPmCR4FnzGkPIwwgWnNumQmZwodv62KIIzvNx2%2FhAXqZGQ3FfOPg5b2yBza3ZQfuI9tb2pHlf1jPFvx6v6TfaCRdcPslxq25FXdPh%2Fntur26xIlTZgf8zM56F2Fs3sxDLGtGnHoKodyka66f14qXDK%2BYkixzgjLEzY3S3WFIcrqwwGLZQNAYpsRRoTrBabdE01v%2BSJ%2FoUQp8xDmjooDK%2FzCnHw%2B9mLRVp3ow1oPGyQY6pgFFJEqrMYB5g9KrN8TFp%2BC%2FaoolawEG5CiLe45m%2FHQueVb7ORsINk9OYhYH3Ae4Jtt21PFbVgorF8f3hxG%2BgFvlYVuqvmUaGPg%2FiV2ubn1p6lKpHyO5u4jZwxDC3Y5NSoRy4PBlt5Dp5KDNlnqMUkBSMYhNIL5BOrcwk6xWUgE555JUlluN39JtxFfIyqjSiw7mkmnryblRvXeQuRqUyXmi%2Bi%2Bda1HA&X-Amz-Signature=5b4e0e868790d0a7ddb5b7d7d36a8c77b455094baf14e570d31dbeba128b63cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

