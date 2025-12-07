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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDML4VQQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T051725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmg9cjRKUn8GLSQSHnFVwEhPOBM%2FHtWxV6dywsQFESPgIhAKvik663Xc9YgXH7o82NLieBc54jMrxsLSY%2FgBwyqvPJKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkyF5G1yqITTfeYdoq3AP%2FM7eV6qTXIxtduPIKOaS%2B%2FngPm6GWKv5TA5Am%2BSsUJ8ApsWraxct4aUAViHZjKP8wTyUoH4LLEYYL3SB3NMC91OrY39pishrezIwm%2BBv6MGPzVVkpVFP%2BQfYEynOUrgA9FSXFYh%2FxTdJanxXV8tW%2Fl87AlyUK7NIKOK0Y9%2BwZi8RQxtAJF%2BTAnzg2VyNuPsZxw4iq3oQ396yz%2BIC38V0zUiM5avDMbRoA2ONUDH11NSrCj9AcEuSIK3SOVAkpoPM%2FDT6%2FHIbp2iJtEXo2v%2F8L47RwDCt6x%2BZxvr4BLtaHo0avppKdlw6Tv4ToOORatvC%2FL7U0isxMTBExWtep3E%2Fzetp2zqQRCiE36sPiD1k%2BA14vj%2FfwICscE%2BzPD1Qw97v%2FJXyi2XGTVcygXgcCOw6%2Bz%2FGg%2Bb6jhE9ExqEZw9PN9O3Z91Yk%2FJcXBYMU2C%2FzPgkYgNfe0ksk9Pmk4bA0UPnhSBsM4ipiyRUNfTI464n8Uf%2FIk8UalhLlGZPf9SzbF3a2OmFsxEe8h3Umg2QJd48opClRVMEToIyrTZDRb4bo4TSN%2B2TBE00nArgc%2FSiYTg7WYgUOeNOY%2BwG4C3WvW0WFcYwWZfKk5y378m4YAkOSRLZRheQP7ubOULElGzCi%2FdLJBjqkAZxFlqCcfUUUDfLDvS9bpo8GjN9J7u%2FHPyYzg6il4vFmdUa87dIS35Evyt5q%2FO0oWGnjOUedo0v3OjsI3nqpCul0nu%2FRexOkZG6ogMhX5O4P%2ByTNuxjYafwfxo6EoEC4VlkCOASQ5skMsjde3HBnfq8xM1qbljsjo2kkwmrNLxsNuFB29mf17Hqf2KsLqvxgvmoi3ZrGh8HDbSRtatJQDJPbnH9%2F&X-Amz-Signature=ddc8d3b121310ef7d1656927e333b5babaf1aeffb3dd767d0d86d226bb509595&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

