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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM6SPLDS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T081820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCRGSnULucdj61eW6EL0iQ5qd0dNfIApzMxCst77q%2FTKwIhALQ5%2FJQjL7ElsM%2BSl5Mkxfw%2BxHsFKcD8M93V26B1O5QFKv8DCCkQABoMNjM3NDIzMTgzODA1IgyML3K9An0vZmRHQe8q3AOP33BK1xm3NfruvqhWPK%2FcZKoMvYjQFTqRqw5NLi0wnfzphRDDnjExjeu9jSocAq0cNM7aNxK%2BNHQr%2FS9unDNdCR9OzpH2AagQgoLqfGKrwG%2BuTZphi6PpX48gTcnjZ9TqzVzqP1y83uBq16W3mzVDq2e10H%2FGgIYFCtU8GA3Gi%2FN0lif3%2FbAe9%2FPeMy2x5HZBHU4M2NmtAdtlgwAmdmFinHSCEtBYTlZPvUSgoEmfaxfMqmNVkh7mBKUEf0q53hpelGZLxkXPfs5Ts5QLXhtGHdkgAg9RZGbhDDzzxmCWO6tVrzN22LbW8cbUzxA0CG6ZP0D%2Bcmiu7FB9kLKXlPLDWd8v62%2Faq9x%2BxIhSDCat%2FB4TOcnhgW5Qvyk%2FRDhstuKwaAcvpPlHU%2B9VguLpNY0OGjE%2BKx8VIOP3ePPVuy5mL9ErT%2FEzT63sCErqkHrL1xoDlS1zXz3zM%2BtFVWNDr2XMeNyfKZbS1%2FsCcB8B63RUf7NksBNszJdwEWeq6oTdBnLnkFnrI6fPkgjq6zxXXFOFhF%2Bc4JLOEzu4b2IHuJWS8d6BqjcJaiY2XnVeH09Pm9hHFJ%2FJLxmPEvnF3OyJkksJxHfwlnpWAFjQhZjr61vr9%2BjaeQrf8fBUI0xIjzD%2B1L%2FJBjqkAat4lvLZF5TfkJ1JQ4yJ5kHehG9%2B1rBzM7erXvWLxugYpHtHInx5dRyvzKfZwFvhX1i02q5DFIe18jR4GhhnkA6Is%2Bi%2FI9JiHxvNxZ2hnBxmcxJAOVBCOItexKFMq0m6hfsY6%2FfYhHFyDgDFvCB0TZDSkGzU316Al60v7T6tCUkLd67I2rQ36O3OTTZymfPGUnrWWuesN9EhyYofEiAT1yYH%2Ft5E&X-Amz-Signature=da5c28794eb3f7654efdb333a895730cc697e971988254ddaf64e378241549c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

