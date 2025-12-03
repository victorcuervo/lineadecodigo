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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKT2YUGZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIAsxaMlTVyRqkvgtCCm%2FeBw%2FzxTP%2FaYpPhgC0W%2BEzhtCAiEAtzjLP%2FhRMLFuXkYPHdXE8jI65PI%2BzK9fNOpu82IAAd0q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDJYKz5uELvMzwkESYSrcA3AMrkHsZMh8mIb3YKsIkrBPmiN3DPe6bUSFcZZf5z8OIdwnaIgaW8H2l9QzXKz1cFgAXjqfWnIDiyuER%2FTr64%2FrokCUY2um%2F5PjnxAgnScEDa31k1LLtHeaKnT3kMqQ7svaod%2FWfoOc%2Feg5thTtGVybEpiB7RwOA53DanqMKUOwC5Es9BwFz%2FD6TynWxkgcqXjxzPc3zgUn7wIc8fIxVhc9shud%2FQ9QMDb9Za1Wz5FDMiQX07FtEXM%2BXiRWWX2dCjk84p0bo5H9xNgSxwtKs4p1W5oCA82qo9zMIZaSScYst8V0mwKLM%2BR0i32vOnxJ8mbTIJ2O%2B6Nbnp2VMN1cO8RQKE1C07JphN0Vu7nhYmZVep9Us647S%2Fs4SxEHzOQ3ALB109ljcsCje5Q5U5ecCuvSm7ff0ahzKCWRWXkjEH1EqMSWabkBVixudctNTQPzRUIiGSttdAnrqi1bGYpeKs06J3chCYQGvxCKT%2F%2ByLqyWbudLrD5wIp2s4GNLFEOk7ETYEC0NJGjCQTpJ9nyJPjuqF9KHId5JteuSW8aIwCN1gsOCOaGtOJOno95h5OZh%2Fpm8rbXCXJeguwgD4XQWD7CG8dZ%2BJgjtwMOgakRQs2RICmjbfutHhYP71GeoMNb4wskGOqUBGNlvscG%2FSQS2ubZL2G2iT6r97yT4TicoPufpVYML5Hcw%2FfAoz5lYlfkK46KCuAx9%2BtvgHG0IQAhSJgTSYUFfQgdR2oHV2GJmpo05S24fD96FOw2hla8Z9i02GVcX0pXPZ3dVLWe3M7taqDKnamHl4O3VLpaaS9OzCoSkoeJhy7oPOBbguVtDWz5hqWXDAZ132cFsBLtOLiu7EpLWp7aGlNtS9EQa&X-Amz-Signature=5284c70678bb1d4954cf003a18681cb00475471b7b41c57afdc5965dc315206c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

