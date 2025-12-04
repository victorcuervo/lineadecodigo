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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZNSP6WS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIFXcV2xK9xD3T2R4zMn2iyS6hwSgFVZELLQikqUKF4nHAiBWtZgyNeBa3eI3PYUMa0O74Q9X4gvDqxBeAOj5H00K0ir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMqwtNoDtfDDmeifHsKtwD06hDekEQhWV8kIghmo92TRgN2XbL%2FkbsxZK5wVKcgtR2FOpIkaLaKgOLfV%2BFMI9KV2%2BItPZbSLrV9qTwUKh4U33VrTQSn6Jcf%2FmYNqFpq6cpB5iT1cjmd89AclAQucIk5hWF55saKVIWPvLKWDB%2BZBssOrNxX350pTsrI92js%2FIrzyrkoi02tPQXf9WmGSDikCi9iJFaRjmJoD9wEAyJ0num9L6wBKZksLo2e9KcJjlr%2BTUIxAxGZ%2Fy%2FxsDO4TrBTHMlIzKt%2FIpXWgpqydUyqNLvGNc4yeqWbKNO5tqD%2Fi5w%2FmRqapAl6ZzcTpxW7m0yBeiRvq0fNYpEsvg8eCANZHn1E%2FIEIacNXAZ3nH7iwnoaT8pmlnN4c6j7%2F9p1IjJ3nipQhsLuYg3jwBt0GLSMXlkoh6ZlmixNzf%2FkkVbNgQtIFJCQhnhQ0k%2FsmhqjuNqXVNH%2F8M2Q8%2FV92pxz96ElJm5NNl60mViH3eMZmUtURhktkoCiH3uUm8x0%2Fu7wY0%2F8eFeO1uzjpnsGImW3KU%2Fx2IpjXBPqcciewjh%2FgbY9ggJFp2%2BXMeHvFPd6NSj3bNHKf20YaXiqxNAY9NpgukCubr2QsSIKJaYqAsusyPHOMLPgTdtpTKwL4BWdfb8w4ZDEyQY6pgGd5QyLLyDc%2FRmvjaveVvP5uOjb9ocFgc3Y7u39R%2BAlK7XZ8hbwJSnGNKXIfSz4fxCT7M%2Ffd24wkS01uWhC9EK6mCskNUKIRe6g269pBSqNgEgKhdagkGfoSMePf9hY9N8pCri0uTQEJwnQ2Yb6pidpXJjnSGnjwSVhKEusSgBXYZ1gL%2F5HyWSwFIRbwGAk2G7cWxwQryy36RyuPZz2Mk8kwiM%2BZ1SF&X-Amz-Signature=1f8fb9c06b4df60e7c3797fd170334c68291c50adf1562c8554d69d830a5bd01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

