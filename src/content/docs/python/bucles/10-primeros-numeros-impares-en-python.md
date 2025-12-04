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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W6SO2JH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCvQtG2%2BGAPNtXLzRQYGiFp58vm%2FCsrZrKEN8f4or0gFgIgOKFdODhR6a2eRfwOirs8UxjTn6poNz4FtR6bgjIBeYcq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDF8Jwdr6%2Bpc7Tyej0CrcA6bHFfbIfz9GAq%2BMi4GQIVR3fyVhkUZnS7ptRkWhOR7xvPV6sTebA8YkgmeRJtc%2B4h9AvR9QjI%2Fmx9tgafGK%2BU07hhIBctpHxXMAcoR8%2Bk1qAebF%2BJi65PZXq5cIGwjrSYnbsxwVHgBNV9K0Xi47wGhVD%2FpGcxLLZrGtYEdFRjg17oHZo7OJJQOlG1YwCzdzceY9nTTr7U069cCCjszWHBHowW0pIjXchPx5Et1rpZsN4Tfzdf%2FFbYBamtA5v9IkogdCz3qaSZSLE3l09I3jyYT1zsGz9UrgI9zzmVnS4GMGgDARp3a9YMd3oaArka0899en91VA10ViWYFU8XhpGhd61j4%2B7wmJ%2BK9N4MW2NSDfUUBdYyhripx1WRbgf7EnOueVkYfNcXvWy2%2Fxy4Ux%2BZSFIYZmA4pPENiuWhnjpw1bPvXIc6mmb30BMBTELV60vlyasovpchdKwMWOm%2BT7WQxUG%2FB4B%2Bai2zmil2O2Alh%2FMDTHzmyt4fSNmTGFn5xL7pa1nQ8LNvGzNMsftkZXjHj0zDJPew1n5m%2Fgyy4TJpZROy%2F5Gj3XyPWvjCgOiAg73YvnRvWIG8ZLVo1OW5yQbOTJJB1PnV16ou4zFkmHEwD%2B3LUxA8gVBPYtAyY7MNnoxMkGOqUBARRLpjvB6yQv%2BWd1VdsjOtfOm7t2x74cv1PLwDAzDFYYJYiz475szDd8j88ZJRwZh5SueTUrifmWAoJosnKQh0ng2NQMX6MqZo6Cxz6i6jrpDxGz0zqThWn%2BF2TQ58y4M4NLiHjEtZYgcCr0HtsPg1MJOnaV30VbIP5UgAxa5pUJKB2S7sFCONY9qpJ8uvP%2FFtgUgzC3HeSanPVYwzBVuV0c8jTv&X-Amz-Signature=ab2fe3c9aecde1384f906503d40b7b7730114e53c23e2957def54b516ce2d166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

