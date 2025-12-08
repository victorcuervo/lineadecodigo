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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEIB3BXX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7sLIJ49NCzW%2BzpfDoWa9cdMfy8wl6hVjd9hHAvy27qAiEA7%2B3dVLFQakS7ezHaSyzbcs2dzcr9GxEWpAIZ04RFZWkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJc8fmZqiNcHbWMtgCrcA%2BkFh1qoYclyGlmPxC0xwpq6pczuG%2BCxcZzdhu5hrSTM5wpnO7mhFkj%2Fiyhw9WRSj8o0lxYRMXheVkr2eowkkc1fKipfg1NZ3sgsvOGgmSPnPXEdWlpMNe6%2BJLNxYoa7C%2FqWes5V8qbfMZL4qe4ZRT3V1toOC58nXBfb9gPCkOo3e2bzvaWVChzNdJjIe74xRBoSIXayTbO7jUPKU6mrZKlABsqA1mG%2FQ6otpS3HxokosGRz5tbZnoEcibtcQtEf39HxjLLLjq7ToBY2rio0PJlmnxfNj%2FdpXtKMc561r%2Fd1%2BDprIW3WEHTHVhL6J6fa6BEkq7wTzUjPrx4jWW2gGr0LmesVPDad6wli1cDnACe346tBzzb6V0iW9C7eieEt4MJmkjEmriM5MKak%2FpfpAe2Bwsbsz0zJBa5gRAGO859FeiG8ihKZTYTXXdMDINIDcszTOfiDizZjli478t3xcxfEaxUNRtqJ2FRLLmL08CZ2bwpOpSIG%2BRiOzZIX1yLRP2F7%2BEuJFVe%2FjCII2vsIuK4qTOLl5DohZAomPeRGiPBncfL7zgSg%2Fsg%2FTQgmVmKrTEDdJKgM%2F81q8YqbsL4Jczs4LLc3fJ5dNwrr9rITceOhYeoN0897Xbqodw7lMPGh2MkGOqUBeMU4FJMagog0%2F3QDbMWh0KUWZCLFrrq3cLmkaGLhv2B772XNYTiJc0RWzCV934rxM7GWot2Z%2FT3bxzQ6id3zCGv9qEB7cz69yjA7wqwZqgMfr8Vof1%2FEML9WVysad3CAgQ5WVzSJnhRjrpuC0SAo2J2%2FG01QficHLAYAGbPhMZSqxErvLcJD%2BU6etbQBHnCmNQ7jH3a0H4t3ehokvR4uUbpmGJOA&X-Amz-Signature=140feb7830c9cf94fc6b68f87f9254dd1701c9ce06aff825912b234ede75a04a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

