---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRMAJDE5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T222133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCiwaBBWGl%2FqkL4jvhJMyNwuxD%2FBr%2ByH1NNpyua%2FCNWqQIhAPRkf8QbrIE%2FO%2FfKsE1ehYqhI3j%2F8iO8Q2Rf%2FUaPY1ldKv8DCDcQABoMNjM3NDIzMTgzODA1IgwRxiomGGLqPwdic%2FMq3AP%2FAQoeefAoWDmolMru6vpdZ7opclTCgQJGws4yw3Sllqh9N7S0rTJtiNoUJ%2FSHk9PJdQdwS4URMBhHFZv4nyr2Dv2Jig6%2FcAa1kFfUIaZBLDWbAmWaMON9aNf4nyH%2FYu6cYLrmzYc1hBrbaCN5ql7hNPCnzDI%2BoYLpOkt7GhMM71N6bP7H3KvOs2rxQ5n%2FkaYSghjkjV9oM2KJe6ACt%2BiiSe1P8XMI3XHFXtbd9OujNsIsYSBsIVnc4PU%2F7bTqpUVCkXyBQD1dqF6rydyWvJvQ5fslE%2Fbs3poYvcgSZaYpxNPrpS2zj28f7JYfZJfOvTuDkNHf2MrV0KRJWRB7oRlGER2eakqJ6MLB%2FOrqh0reA6TV%2B%2FdZxd3Ixk3xuys6rlehp2FWeQsobWpLOY6Z6niMHytwy6CCB7kO5twF7LLRE7hDg9Vn6fqsGb3l1Kqj9VqgbeBeNvx2S5kA6APUOQk9QcPUUH61hQdlE6vNfL82pmgIRfGONenN6wqu9mB%2BLkbYf6MeV3KJp6QeMec75KPwVtfIwdOyzKg3CUV5%2FlKjJO4rtEU8jeKI7fVJrd1%2BlliTRx3NSVRN6ZIBYk%2BK2U5gAviFLSXLlTc6uAE0iOeXyYFkprWVAG%2BFKRkPQTCj3MLJBjqkAWS5kp6oVTcRsmCFnIuUswfD%2FxnZBnsKAeNV9Yb%2BMnxTwpbXbUmyIN78HDmDSgtYgYbVdQDlHSIRnurzAPr0GrBhAScWSDgXrNjMAuTCl5vZj%2Fhi62h%2BGFZBumqfxhRZo9Jn%2BlL14m%2BFYT4kdBnAOy8ga90eK%2B4gD7aZIJ3RpqUkPB3%2FsTnsIR8lpPp3lli2WCPinFulU2nK6koRdyE6hq1nZZDM&X-Amz-Signature=bc331c3c0205877baa398cc7f5b7e3111d55d82a701917391c47ac08db9ea4bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

