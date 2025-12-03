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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC7GOIKU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T010452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICqgFoD%2BiPvTLKlzcog9GHHyCHzTHI8habwbqDeYegsKAiEAp6y0iKJ%2BD3Wyr2AdSTzeOV7zRjcm0Qf5v698zcZAnRgq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDPm93uDrCtw61tA12yrcAwhfGP7CCMtlviXlT7N7hx%2BqsqW9ub6i1AQ%2BaKeCYS9j51OsJm47urgn4iQ4vrUeGMnXpjC2Zp9T5QikTeiRtkHIScjrprZqSdhJdB5blN%2FSTyTPep4hSy86P9Y7PZhrQCZXq78M9DW0Hl4PJzlr0DWZHQJFnNLcvkQfdkYsZNvB5SOwjAH7YGiTtrlkbqFVrfOkctPGrgKzyRJuemurQB1OQv2jDfVufqPH3LV4UGcxVTnu5iVrfrx4%2BXJjkvCc9dC45wibqY1juE3hrVdv%2BxjzQNuzGqSe6T4rvJY2wqVAp8x0okz7EpDg%2BAxcXr89x4%2FD2zAVgB5jDgdXzrNE3AqyodsUF49Q3zqnZ9dD6CrV4nuBVeDSRBsm1JUpYEbz4pgd5nPox992k6eqNQxLTy1V8IRdmXuIlVBB8NwhdvSKk7rdLoBAQmJce6jtzu7%2FBeDuzeRpRQCiFQi9d2A7OIDTl%2BKR2j%2FzWgQZl1Dckc1ipgtVdSweelqLbxs6MURGyPjPUs2PTWWMxHTtVQMyhLxgKWOe1MJnSgiDZk%2F6I%2BbGBLBjsN9w%2F%2BU%2Bics0dX5HZe71ti%2FrH7vKBii1%2B%2BKKwB%2FRHV1msrX9Q81%2B%2FwbtjdVD%2FpIEjTVpO6wUNkQdMJeWvskGOqUBzVlVYpncdwAjAKaPjBDPvASFUbADYPYV3e%2B%2FXwoOA%2FWyQPE0CfXXlopCYtliYKz6ayWimdVHxMJ7fUjkPjXwcBKg4jZCZ6UjrPqEDzPM58ooaXVveZvlfG1wxWWJkxZkrZIBED6ZHAdlCcI0u70HTB3zX3XGAFl3aeOxHlSZFtWPTUf4XiYcZEaRlOTcScZ8UEEKWKOjKN%2B8nBjhfpL6xzNtxUfi&X-Amz-Signature=b79b750ceaf0536d651bdbe0375cd86f0bdaf91d7e7c2bc1ea9946255ae0ad47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

