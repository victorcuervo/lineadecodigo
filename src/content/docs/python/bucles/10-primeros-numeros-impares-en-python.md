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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPAK7PQS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIB6c6nNiPopO0YtzUintVUcY15ysXF5H2%2BPNai7BEmyuAiBLwhvNL90fyfxNDT9UjXkEXLrsQVRy0eqob9shKDrhxir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMrSiFUzvbsfT5%2B7bgKtwDWvQAgTNUvcurA8JSek%2B2mw637ke3%2BEJtL2gq07%2FIXujDH9MpFYTFoLbLYI6ihmyJspp6anWOnctUDMOZ8mmjULMdUJ7GUvS%2F83%2BHp2CH8LBEIioLoWPN2R675KpVlRjy6crLxV3GBlHovz5cfTn9D4IdWqO%2F%2B23Vg%2F%2BWEk3XkVLPXDH5u59Z4Qe%2FiEhHy0JEI8FeB3Ei4b4jQMR5AETHrzGnNLd0FWMWrV3X4dKfJhgQmb5Sf4U5xeXrmNkzRuCE7opOQCODTs3dy2F4MTzSuTOt8caed2iJyR8h7e7DyybMYL1D83hQjyeLaA2wUtq1OISbJaXffGBsMnM%2FACcgnFtW%2B8HE0yfyHvC3tmqL7XWL5%2BZS78r9emS0EOw6hP3sIT95qsKSXlCSiXsDYqCm4jRbcfCk%2BXekLgoxKWAitpmrjHHj2d5SZf9FEthsf5%2BxFo3yY4Vv%2FfMjWh6cb%2B47moaHvGWe1nACNPoFv64MHsaFPZLNNxpHyLBSNqR7VPWWzfqQlPp%2FqA7vgGXRiJVHVGZDdvN0iUSOOUSOrJkFawK0rpd7u2wr1Z%2BQoqDeDw%2BTpKLbwwSi0%2BFWgxIYkHBpywwc0rUJFwm0aB7JbScj9uKiE05Q0PZdZC3RoFQwm%2FjCyQY6pgF8y38YYQmlU2KOUscHeSrPhKI1RL9W7rbqtwJul5qy%2BkyC2cjHWdWAisucaSV77i5voEWoxgckSWBrMHkC0geODaTmucToeiLyp0kS8yZlTN1IMBQO7wJAMuhU1GKJ55rZoyNa7GF6bMAUvxLgGm6V5F3g09aqaHa9u1Jq1P0qKmPaB%2BDE3QkMGZMb4M%2BsoA1qkISXkET%2BlLlbiPg7VD9KwMY1Yatb&X-Amz-Signature=d50a37c6845932aa00bd217e2c8d5f7142a8f4b8bb220f667721485d0dcaa044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

