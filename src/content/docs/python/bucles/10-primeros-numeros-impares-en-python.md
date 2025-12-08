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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJPKFCZ7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T170233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJrO5pKluP4X%2BaVfFnkm86z%2FOvAG8vKZwFkBKv%2Fe5%2BAwIhAInxo7mlfXe3WHAGNMpKHThLEsa%2BRm4m0AjGF8u%2BSuLwKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMFQTA5MrRRqZSkLkq3AOe5lYa%2FpRfYLxEJq5I0I%2BnSPXg0dI79VCYIXgNAMOQTlBAkApxFe9tOq5LdK9rah0D7q64PHBQC4%2BqJuosl1MY2G0SYg9Y0pcIx33dv9%2BVIMUF%2Fp1vOe6OYZ2kG5Kx3lYatLqRtajCZg5KE40nbOeqG1RaMFdCYmKxoURIzEOq8JvkAfG8%2BuSI4oEaKArD2tsY73ni%2B%2F9nPrgqH6ZpJJiwk31mU2z11joi8zh%2FHNFmPIspPM2svgKV4KFbF9ujo9JTsdz8dsq%2BsmKjih%2BWQQfQSzo%2BXpMZaoETH4mMoT5wRo5gT4q03MuY8a%2F%2F3WQIoqUh1uvt7iCrAtgX3iicry4Dd2p%2BjaaKn8ylcciobTmZHOR%2B%2FXloHQ7ZrR0GW9OJlMOVTc20FG70FZL9%2BWCuLq5YlIdspPq3velBEFOoUyvkpyv78uwhaGp5Z67JILPGcwP9QDuY4CEysrfL%2BmNfUbDq%2F8NG63tbHQp%2FUCRHXF0MoLmnjiY97%2BMFxGVhx0HBjBzenZsvPOkkY2k89I19gRiI%2BhPeih1Zi0lD0tSqP8HPHgxOR1shdlnw9UaRAotn%2Bn0%2F7cA5ygDBhRue4ijruB5ztjYE6E90SScIzT7b%2BS%2Bb4ihHj356WA1aXTttzzDdhtzJBjqkAdiE1AlTjCbtdYcCKPjnwvJmZyI7NRh5flEQA2W%2B1RJgm5UMA6Ejo0yXX%2FEWN5irXp0DV%2BE6wYxw%2Bsxih5mPkOpEQUWg%2F4AUwATue7gPW9JpW0FJsQEIufrrc2ZVaGvoGyWKCqP3k91DuljOWdU5AUDvcIPLvAU51O8pp5x2dGAh%2Bzs9ijhRGFguTkfVN3MqerPdO433v%2FWbfOZmgLMWZ%2F05z88v&X-Amz-Signature=1c858788eef3e667de32201907b3c702e6d28014cf6c1998bf943b102a7163a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

