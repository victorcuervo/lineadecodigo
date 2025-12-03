---
layout: post
title: 10 primeros números impares en Python
excerpt: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
categories: Python
tags: [python básicos,python bucles]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQRJ65CX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T035443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCXBM7VutCr36jqLxqwFkYdcAoVKQb4GOk2%2FbKBsQexZQIhAO340gIHLyMnyFZ%2FKXVjmi1INkX%2BWlzBApOWgV3Zl%2F7LKv8DCCIQABoMNjM3NDIzMTgzODA1IgzjaWnm4LGwXEVnD%2B8q3AP%2FRYVI%2BmTpmVBEp4OmfqQDUF4rL1BQzAqepGxbgRWoB9ai7h%2FbfIcdCy8i1Ux3y4CKKn3iZcD%2FkTfsYxrLWtf75XyeWHIZp4iuvzyAfC7%2FhDHIUhWCVLA7SvVioCpEq8Ke8C%2FzX4nKaECptuJzFRZutlzNFPCsS8OT3DOH2%2Fn2FVKX46OizoIsoBTHgOyoAEDW%2BEnBENe%2FgAkyHfxiImNiUX3dCkv1s6NYKYkcJVpp3tKeGOs%2FEeFFopLoEtWrdz9wTlmfhPSbfKqY68se8X7NrvydMK%2BfFSzVqDzIU33vrun6Xt8Axrar2n3osRdj83PqP6T4vhV5x7b8JGyTaSAgKpgHvHkqrC%2FlkR0W0PYoPqlWhYH4XSjGUe%2Fj0sW5tnqqoQeQtgS1wMYuQWZ048eP6rzhlAAfYhqMUIZOK15VCdm5hAT8ahC2nzFa2mwk47b%2BH6lLXCIp4oIQlE7oL71wwbarKeNGz8yPJJRsMux9xePxwJu%2FPfScFKvmKwCRP%2BjIZXtN1ibITIrnqweAyEFWyJ9DzIKSOO1U7qTAF2MRi%2BFKn5Rrs9ifQt%2F7xpws%2F47owH2Y7e8SLz5TrV1oD7rel1qT97G%2B6UevVsSiX7r5IlWApHos8%2FO%2BxMVYxzCelr7JBjqkARM72E09VJN94TZe7JM8CvUN5Chnjj%2F67JhGGQwxO7iNtazxvmytCIXzHYVVNSuRk7JCSWbcg%2B4vuzkxP0%2BwbVNJVDsRJfVRZ1%2FZY2sv%2BSDUBkuG%2FgsQP3GWRw3M2JMLSPmMQh2YR%2BgANKPa3my9V%2B%2Fm3OqScqd4ezCIf2WWxYbOg0PWkvbXQXtxGH0j%2Fr93MkMjM6YhVcRHNJaeO26Met%2BYQHnB&X-Amz-Signature=50774e5d47febdb77a4b6ebf96743a870851a52c774f402d030cdc680899fbb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

