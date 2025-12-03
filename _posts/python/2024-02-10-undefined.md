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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXBBIU3I%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T121226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCCow2wJo9sqiQt8%2FTHCYaF7OE8wUoWErl9tbnBg0izDAIhAMX5AD%2FapjCA5Akk1RJBFqC3C5mAQySkJ%2FZr3rBDH4ilKv8DCC0QABoMNjM3NDIzMTgzODA1IgwtDbPSK2RlWeKkNeoq3AOcG7bm8JbYP0iQFDDHlBDl1hxNK2J45NA9%2F8nzoDEjXJrAUsU3hM9k7xLffQmHVJleXNM5EboIdXDN7z87tO3XQ6qbl8ulC9%2Fs1aLfGQj0o%2BWHo52eWIIvv6lZ7aI4overbF1BAJa6iPSkl0N08fNUp7U9vRHfHEOtcON9p5Hyl7OWDTsA5Xjdaup8PdIPwNPJ580H%2FKVrHOMYH6V9R%2BI7ITMX0ZlLgiXFSACYPYdDxJhfuo9OT5Q%2FY6pYvUUfABZir98rNrHQKWQ4Snx5FX4QiQ%2F0Y1sgU5FpLT5eeiZaYv79VI7ZKuPBPE73nIj3QJt66sPZAZpr4s%2B8gdmAWrcMuisYPmDTPBwaKNYJwn%2B1jLMzzwbo7yRMpD%2FPgtSTE30zAZMtKQmWcExhsjHOnDFQBGNgVEqUmWfDWtHZrtaXEChh8TIVKG3BOTOp5VSB4ETbemZxPmxZJtLsWnOuBRr0KAtGPNRgc9BRbr1TX%2F1N0F0W35wFB7SNdFc535hxagnoi3DkIZ8tYp1J%2BLUjshIuuE14IhmW5NJwq1vt%2BeVm%2B8bXlFI6YPTOkaQSUVsJ1Cj7hYm4KnYibwBC65fj6fzPvx50Xkc8rk50CnMzJ3ixcEgyy%2FQF2Nw9f7uYyjDnzMDJBjqkASZs15Tgl3jGcjWO5qiwvDswWy3XH7KjowgpsR6zX47ZHqDpvTw%2FmFrJKusddHVYp5sZ490G6dzgLkVuNSFiynT8VtjctxSKMK5JbEYND23U7CsMFvb%2FuQES2m0H1vOPmYvSMMxnfivyBmQQK0O%2F1sz9qjrwXsVf7ZMTz1k2LUM9h0aadeeR9SDUyY65IAHjafQ8s2vBeOyoxdn1oYOLO8M3XEjg&X-Amz-Signature=2f130390ed783605632940178427100c9c052e6c2981c58dda8e7a60c541a3a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

