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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NVJI6Y4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T220220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEHVTnQyhGv3dU1mM9si0ohbvdOETho%2BzYbFotsb3megIhAL6OSo%2BVzg8%2B3uIu%2FH9oA3qxKT9zrJW%2F%2FaB1gPyRBA5LKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaXharZsml0BAWpy4q3AMVm72l7lS6CW6Ys8uq8VOGXLJm5fvDT9G%2FUD9SwDhV5vtkQPYHD53uAS9PyMn9IGBK6m75lhSlx%2FoGo6n%2FCzURfmzeDIYZOTqvbM1p26fDYcen72swB%2B1io0u0ezlgUIhTKleEv7ibG9QiUXl3derzITzg3miYp2G2zz%2BcBhORpOmkjLy8%2FiEV8W9z4k6MRtR94Wbm6g7jrqiXbNXQPPtjtAEIKrN4tqUjBkrUUJ%2F1CALrxM3%2BgAKsfLtd81r7seBhx6skYEl6r%2BDFLK%2FGtfLaNArvo5OJP0pjpCQbIbm%2BoECR6mnpFMpmGgel4JLlG5%2BWcwqXEN3%2FfOObwu0afVR7Re%2Fclvk9DnK5xJaMM3YdGMc0yGyIJm%2BlpXST%2BlWcmzFhKPxFgzh%2Fq%2Bl1BWgnc2T7B9oGbzZ8t6QwYVCcljc%2Bx3%2Fv4PYwVyFJUUBmJ6coWFbGy%2F8jYWgLhnFlvX774NCOtpJxhcIngxN3L6fhJA%2BzIPMTCho1Q4QN6F3C4dlTUd%2BrcqT4XOlMscB620NGXru048Bi3YZ9FOrBmzkN7P7ZODEH0qIXCyv78pBaf3eiiD9fiYxlGNVZjJc7aBIgs9NsK%2FCyfZ5L57gVMYcbrEurVHP7fNsMXQhteeKwsDDGgN3JBjqkAfG4w3uba3MWL1oJ%2FUWS0tJwegkQ4CxbXuOf%2F6cxqI2HMR1Olg91HNDmHlj9M67tCYTC8qyXDEAlWegkFxpUrlVoE1FWPexTiinmQhhiiqjHOaQJLfn2xrnvraEujVcn%2FXuSExawls0MmKVhv1DUTzULBN46g%2BNpEZX2nQ6Y5XsDGmhgZYE1OZvyLZ%2FXzof7pSDGmnvt15be8ryzhv86vp8Mz%2BKK&X-Amz-Signature=19c0cad5350ef22606ea491ebda4e6a57b2d72a66793d6c561140da4592b6ce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

