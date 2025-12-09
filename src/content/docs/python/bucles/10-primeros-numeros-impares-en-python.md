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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGOZU4NG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T042028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXCVOnodv87Th7tEmuIx%2BZnlDt8jdCt2rNEnz%2BnHshjAiAUA6uBLCWqrJ4bnmjEZor5GNgXlj6ojdB34ALpBRjZRSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM19u2dEBWzT%2BQ2aT9KtwDQbhmMa4r%2FxXREwDGqYerrRXQ0qp8mYLXglbDL%2FwEOMJQ2T7UqfNjZ6mDVAM1CIqHTYjVr%2BCPKgwNWpTDbuO0GCu6an3GO3Kp68zVnSvhJzULTOxaDwiJqhMQi5%2BZIvytGQy3PQV%2BaPeIEz1dLMIagCtMqGMS3PSp5ZwCqpykC5qA2KWf7L%2Byc1cLrCnQ8F6PuLWyg%2BapQaFh%2BkvQGzV%2F6XDiITsyeKvgJ%2BvH5KVYXkmBFNnECdPennj6pXj1vmWrACDmm7tgUPCo6mklbGdtEHoggP95ruvZlRBPyk2KXP%2FkI4Dnay9JT8nZLlqphvaBuNj%2BxDsDe%2F9jp1%2BQoeUZXRBBNMNL4eCdFAVjl6nRJefrpGhGH1o84tOVkcasN9bbqt4varlXU%2BCTTPUWu2USuASncIhkcCV5Bk60V8eXkf09nk2Y77E9ZA1A%2F%2BEG0u%2BP5B54N0LI4W0zvXWAe%2Fk22zd1qsEYrpkw64IK21lxGJ9bFcZubs2rPtFqX8LCRr0udv8LsMb6h1qYSFIdqxJ%2F7iHvUUjdEud3PQjrt9lzjaBO%2FTcssY8PPoSZK2VhmfMBV%2B6pB7IuiqBSKN%2B53e%2FeavIXZynPlYemv60pJRlPD7k05qpNu0oqh6gOpoEw1K3eyQY6pgGQ2qp98OfTCK3%2BsEgVh9zA8F%2FsfxUBQk9F9KkiZK4%2FqewXyoMP6zw1gem7qnW%2B3q93qtZATtlo1b1wGSWqmzwR4q184wUGS20R09Ub3QdVJT2dDw4au71HNs2OdUAg1jvdYCdIYoFE8%2BKqSFsGOP%2BudGRt0w4Cj374wxE3ix2HpUrMejPkXRT0qKzZ1lWCBjYSZDH0TCLkLNLaXcEHN9Z0nf%2Bmv9e3&X-Amz-Signature=1f6201112b0bf830421286b19b1239b7dbb11596870b2d9d4a5f983cd116533c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

