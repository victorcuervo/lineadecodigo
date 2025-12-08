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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JZKZUCL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T074349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfFxCk66AovkekAZEO3VFYRJFruiFYmj%2B3CjUulLlI2AiBST6qMqzu0qnAln8w2MNa5JP2rg4NafbE2ESTmmp6EsSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsFh4z3djAi%2BkGEL3KtwD9yTcVnSFyjhUpb6DltU0%2FWR9O4H22kqEJ4w3VqbbBKdTUCOS%2FFskzPYkrWKkb3WorisKMhh6blvydAvIqJax17rT1U9v3eEokWe%2FPPjhwwbBWjBC6Ft2BRnw3e4VUSSryrSegl7DIPS1SGcfL2NjbRVnoHMJFnixWPCxSKGfTuJ27HzTrLxcG1cr1DXaEb9X0qdGpHq%2BNm%2FRFzk4Z8Aj%2B2HZQKy2aYCIpIs45h2WW59mAB6Ia1khkUpjLwwOwLJXYMfBmNCRVQqAk71h3ADMoaHmLxhmDrZih7URE9DJ5LUU438uPz58DFDct6bFTaa0sTgnEDKXghnKZiYP43Df6GriGp6YtuhEtbP%2Fkv2gpoI5gLcQkUeTExB2Yi0kN7OYxYiQsPnm0XVqYc9nwaO275%2BeYC0Wz%2FT8RUoNLoqJHvwlZEhRiKO%2FKDoCkfh%2FAt0cHY0wL7b80dlgNhMnYASlPqp8AuS9apKYry84C%2FA%2Fck8bzclWOv7ZZtujNnfE%2FKV5JdWewVrb9oU7MIvHq1lALxxMH9lHPktkIOWxPvWcKG6vzqt0DWE0aq1%2F6rvnzZ41m%2FhyKR88DgShSYcqnvEeUdh%2BRAbdLi5O0QR%2BNCR1IvUIvNTNC%2BaebqR7m54wwu3ZyQY6pgHQsL0d48KeDFAemksMcPzcXxxzXBUSuSpORlkuBrthVhi0fnKcxFJFRNz9DFh6i36D%2B5BlQZV3GmpuqD9TwhQHLZx9EnsVA%2B4s8TRzKzvcpOq4tPaSLs7qOkxcrgHOmRO1PPKKHIIr%2BMKCKRHgVfMDnSYJxotMb8VFFa6FpWV%2BLO6y5Ab6c0q91pmoKT0r8cpL1ToGVgvt%2BTT8ElKKfKGZEEar9jzh&X-Amz-Signature=09075a7ed32eab20c4a265ef91795d867d44e95acb499839412e5bf500bb466b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

