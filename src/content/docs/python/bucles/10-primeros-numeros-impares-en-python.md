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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6R4ZBPN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T010409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSQHVfC7WaIHXIYQUg%2BUHnSJaaZRYRyqxa%2FPtld2vz%2FAIgBUeVXqoy1EqdGJ7RNkM%2FySkFJjdbgkUmlrUStXGIc6Eq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNCVm8Se5H2%2BuKOvPyrcA%2BFc4kfDMr0M7LkFjPwWAY9piTBVtmR0eTgZOOSiu8AW3deblnaOB28%2BmswPWdGQXN7PmRSAmVE4INqhPEzo%2BWo%2FWHyAYooRiZSuQJEWX7Py4TQDiANvS%2BRqqpf7teTCgPvqcYwPW%2Bv0A4jcdbzuQjY3Uh80UAcpEXMl2acvJBl%2BmyRFEZaRoAEXFHjUvmAFt4yofyhZPT4MHN9MdaKU0UcDsfGM430gblWzj%2FEy4UbpFVteloHtCEslLsSaHgUlG1JOEBvsYTKcnJnWvrqcGvarykQANXbqHiO7EyvD1mtZa8vqTpDITrlXvrd72CeD8dy9tLXMDwNdX5in1EwzNPshUNuy5%2B3xGql9hUBJnAMtO0XTaS6Smk7do6kQYwfk4e%2BXf0qJ5eTWNOo9IeymbQzF1IgA1CwW6sd7%2FaIdF2pfnXz1eMaptmwo0CA3DTUnnbhZ1YLHPy4d%2FjyhFaCnD8bFWiWIkA4udNEzE7gFGooIVhmDhXmzKIldvVZcHzdSDF55FMqzvEOA9fv2OAkiX823B0UNCVUFezj9TtoYskEMYORKg8hdnIZ6lNW2cyX0UiC00DyGh3AwmV79g1QhivJkEMt6BooStG1ONyFH2bnwFYcgD5x6a7BFAWZfMMKMyMkGOqUBlB0Tl0Ayf%2Bj1I4GOLghlG3SFS7YVUn6iasl%2FKWJB8QsrYHAD3ZyQixQk0w%2FxLWXykPHDYnFoOfiYgMY7ox5FNvLMPCVai1w6ETRQs9A%2FAOJ%2BposOyQqGmIkr18mpL%2Bfvy96hqQpISYCX10O57mMr3iSmpNkIIZXZFbI8%2FAZKJ851lOZrSfWRvFVWZ87Z%2FOHpLB6LU%2B5bVbMf2aOZSNxFN2TuTk30&X-Amz-Signature=19a3942c96c6a9ec7a3514fa43769b2416e20d600dc0101ee52064e80769300e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

