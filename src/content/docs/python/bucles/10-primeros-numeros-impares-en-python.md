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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDJMUYQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrj2XCEym8RYWcPnJKdhYeWy%2BQ8OHRBDinH10rUUeznAiBAbuWz%2FFkE1fdRWtm8zljgKhwWUaswJI10oMW1tytDayr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMK8TZm9I16P6OawqpKtwDovPC3AZbn4vi%2BQUQFa6%2FlhAJWEBT6dt%2Fi0ga60uibS%2FE%2BG5hpGzCbTQJtjS5WQK4sIDl06wRbiy610fZLzASSZJxVX6pqVp59H23fE0Qnzrgg83Xxfg14EMxXeBxaVImDpbezO3SFMRm88x2Y1411IRRnzj57QVdc0ma2WjVWs3cqyYM0VdRJZFlDdgBzWGPeEX8E4R8gXJ0aDVxHK8z%2B82i98NZmV9IVSKHewRqPEe8vshE5g%2BwOMGmvaWjSti0QsWIjLLUjAzLV%2Fpjx6enpoPIk%2B3Gve%2BsyejusFihGejguhnw2g6roDwTTrT%2FeTAN%2BY0lzeB0HCZqGoYKJ6j6%2B8vpC3xssDyh8jgOhdNtgkjbHC8jUyjSyl96Z9I0jX%2FUFSEpQyFsqs0uV1qvlZDCQlxkmFm7oZNorEEjEEi0T4Bh78Q7I8Pr7fgkcvs%2BvKoXLjOlPpD7wnNIG05NRJRXWM2PW5DbHicvVjqHibDv%2FvH3buQXZq3aqgtOJ%2Br6t%2BUbaL7zcyKGAWOyv80cI8BuddObyw4NJ01VIkVd2lRiUAuhpfTkohJMsDanNdEne1Er2AfyYnhE5ARA2SB8UTqL4tKnRpq9e5vE3nTlVxJU4ACOtXpGc%2FKaZff8HqYwnsPOyQY6pgH23qyssu2%2BZmOSm069dr7%2FTRmkebZpP9awXR4onJu2LvA1WaTug3l%2BcuatnhDQ58FPpXsXBlGLJ2QcuR7tXfMar3gXO4c7LiBPIdCYB9gPzVPNfHAoq%2FCTf%2BUi4pB5AV7023%2B5a%2FcdSNY%2FsWQ8lF4HiGq8W3tzUQE%2F66V%2Bq7FIaIEiNKj2IMmX5%2FVlQkT1NlYXjoFSIbDCH2QrjpVsdEpzlkYIpQkT&X-Amz-Signature=82390fb1c63dd5c83faa862b4fdbd164a0c92859bc29a3be1fb28e5500d61541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

