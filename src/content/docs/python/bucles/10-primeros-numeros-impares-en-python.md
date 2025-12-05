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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEW3IDP6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy1%2B2Owz3nDqFuw4dz41ixUX3GPq1xEY76GGXpGJmXXgIhAItqRLLC1xOkJ8ByyVX%2BoaaprYVdrsEL4cb2F%2F6fEwdfKv8DCFoQABoMNjM3NDIzMTgzODA1IgzVXuZ5K6BIzN6PtDQq3AN7nqLjXNz6pdFYfaI8%2FpExcqLfLVRA%2BSy1GEJ8HANp2m7IR9rW8UsXIQS9bAIwTVgDSKQmK3QreHg5WcReAWQRwdQE5Ii93xuZTt%2BRKZDBa%2BWcaMKIqPTyhKD9fFaLcvAjuIpU0cnRJJb7qe6%2BM01BIDlodRBHgE8K2ImJNbbnb8oYhVp5QVd%2Fv7pluEWdj1c6SvMtT5NZrnEoDJT3L%2FYB8eOIuXMTxA5wLMGZpcdJmVzowqBMuw5lCI7Fv7VQWKKv0vOGNdP3kKutEnzXJrMZR2SvVFRmcmt%2FeGIKEnNGrKdn7oFqcEeA0n5Qi33ZLMntM%2FmTsRwEwdxXGHX2ktWoHbx0trJ30nPVVIv%2BTagdHOTYN%2FXJU%2BXUStjuxMvGD5%2BZJh%2BP66%2BflyG8f1jzIOmIIuMRyYGKb9Ku9AMFF%2BSbaqbKE1zwbv8PRG%2Fj7bB3AJwsyxPfX0OzYfliYmmK4vSAUuAt8ERGk2MblFqBnLJd1IlBQwQ481qM6mVs6xm44%2FWF0pinW3dx1T3SkKpwLzF7J%2Fwjgw6cjnXJPutI%2BtU5MuS6G6HffJUPIp54c2YWuVBkIpWfZDm08kmvmtVflTbHVNnUxqdxi942FU%2B5CMDrEe4qA3OeaZ44C3gCBzDpxsrJBjqkAU4O0LKOmV6%2BKHmC5lOfIZEwHevvCelGZLtK%2BMaBL330dRf9Jr4jKv5jYyDi1io%2FzOKVLO8W0KWszYMXVIn3jBKrR06pwYRO%2FE2E2j0bOpf%2F46soaSaHwVSJuHpu1yONj1dm0GJJe%2BVstpdhwS%2F6CZwcJMVzQYETLO5NJ4pA7jS0N3J74arHuMsl%2ByzK4tNCs6kJzrkBjh9oJw8f2hcVlcuXoJuQ&X-Amz-Signature=bcf4993058448ea7fbdebd36f57a4e44840d2fb11cb5a3cdbca54037e348e397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

