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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OMWUS5P%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDm3doxrO8wQkCT%2BUPztSKjBnDuQg7oup5qrC6W0U4axQIgY3UOYEsAuCw5Yh40Py33sjgDz9ToS0BggnwRARDPgp0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJNHjN7gvPBGSXXoZyrcAwNcbp7bm%2BEw%2ByBOdPt%2FYcazeo5l3F4vUUM7dOlVMC6xYUXePGaj3bjS%2BaiPgTJEXLd5bm3zbs2uMXNwh5aO%2F67MMoUMNwXErKODx2B%2BPbMdErjJCuvZKJMI9Yb4EI3gRQwCkO8C8hdJgF2m6iacWpA7ehemLTR3cNkIU%2BvXgB5plHcbsuhYPdMwK%2FeZQvEZwQUn596jTWYD2QcJRUNp15pg0EgbvQeJ6YczG7GJXN8tB1xtr15C0FDfBoOtb9bZmOn9gZcgRRCG1KVJDt2LkNTBjwg%2B%2FCuZ7bQ99FM9fhrzVV1Fb%2FrYspSZPQxXjg10JB17Xd1p5ms%2FfsVragWZHKuP4HZqkgIhWqenaeG58K2J2tKrgzUf89a1VLj5YhcLWrn8NEH63jCAhtcnpuY9xv6HL%2Br2%2FKCnmn3TNyWcs5QjfPCriAqsfhZXtODJ2yxeRLjAEnL4ajHA3cwuF8qJbM09o41LP6Bw5DwCq0ZjTrQSpmbr4RbUqy9tOeGySp3nfyd5seHYIE06wJdJWt9ra%2BiPuMlDm9%2F8VmdIP8%2B7UhEpCatIMrBpgmQaA5IcqmNMt3mlw1hihG7fJHtaa%2FiloN5T1hwr3X9v1XwCIu9BsUJAqllUPN5EihOVX9u2MIyqxckGOqUBZL75%2FiTv03lrxWXCbAgOh%2BLS2axbGDb%2F3iysrQ6Oa3vjCkl4E4sWZPZM5xkVgaF6pqNyB1OPyL7lM0k7W4uBh0YKxSaP%2BAsp1FWodqs1oVs0RjnummiToyPYciRjw2izRjkfemb0AXvrmZduYhlOwZvkosBwcXdM5U4MueiY4016BC3itsc4hGCFwR5O0EP9lBv0eGddh3%2B6LT9XoU3iywrmMF%2BJ&X-Amz-Signature=624264ed8aa41cafb16ae2cfda75f49b7cbe6b5d5fcc6549d5149a461cee9ea1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

