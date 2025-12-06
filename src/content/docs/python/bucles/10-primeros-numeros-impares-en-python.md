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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DUPMIMI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T062459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Bf79Y0tMhyCigIhbAsIcdEubbteJAg5CJSvII2b1q3gIhAJHUm0%2BsV3QzM%2BJZ34gSE3D4aNkfu%2BzjtzTeUIYF4QwtKv8DCG8QABoMNjM3NDIzMTgzODA1IgwNRAqKHhUsEl5DQ%2BUq3APAxG8GkxlluSolhn8oDQqrwYjAecd0cC1p1jpckVvNJDoLf6%2BSkfYYnvVnNp0ayr84fl3JjB6rgLlLitkqi8hV%2FHJqhDJdzzIRF9%2F6RxZQappclWLbE%2FT7L4RlaknWJBtXWEzRXMvvK7ePZL9hfXhyigSOxF9sPcMKa6maeXBouHwnC%2BRbBBr39fCx2SmysQpAcoU6ZqVjcwSOdtrDF89CcFsWzMjZZjIrGFdagV0NGnkWICj6FW5TPowMiMb3Np4fRWhkyMTel%2BvwWz6%2FryYgiazkcJxGzJrCXoHupqVVcA7W8VdjRv88FSafg5TSZSTwBQBzVNdM9ihx%2F7Kf8fU6iX2vZPZbI7pKC2I%2FZvqq6vzLJR%2BuWQ%2BqsMEhLxP1MZIMRErPCrBhW2qGXgFrkth8GTajXO1y0S12JOHt9dZnSaiwsSnx%2F1TVWJvDNMui2AFFvYCrcebLmA0Xb6XgvPKOPLDvFM2UCjLGcxCHRj6AUn7%2FM1Jzs4U4OZiJB8wn4RK65q4Vh9Up9yhuEaPNEWrUvmv5dx7UUf%2Buj0jt8VtfXIASakweYQehOc3D9eZ9un%2BOhzJKBWUvUPBcE4svC2DAE7y3aWdC1TnCmOftbvYg91WLL0ocdHcqMuoagDCe%2Fc7JBjqkAWrYwSxz1nJ0sZItSX%2FOa5qgYkyFXlWiVvkosib3ZpSgMqMQNbSZRp6rAMbDn0wHHbW3NDstwreROjcQTaHtEIcWNBBhoR5kYjyG%2F0ZzM5eQaO9nQd4Q6b02594J8iDIszXsVjJ7IhAI3Q169bTa%2BUxmZgG1yt%2BY9N%2FJvcoHUmrEPNtod9JtbOyD90EBRo%2FtNbNAG6mYBQDblfn9sulxjnitbQ3o&X-Amz-Signature=38e32e88de5ee159439abea2453a70848f10b1cbcb6b656aa0b0fc7da8a88d54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

