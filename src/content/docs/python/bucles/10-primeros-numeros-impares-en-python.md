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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQMDEF4A%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2B4o%2FEAgb%2BhGqFeWcekKru3dB4vrW2%2BGZWbS3EbLaJ1AiEA50e0QDUyVYxkpS9ImSYnKywo2R7EiucwjJ4Znj%2Bqtm0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJ%2B24gWftq%2FMUyEbVircA7kQnUg%2B2zJhfukD%2FhU2kBxoZ1BHZ8VZjjIO9ePCJb7tY637RmsKgorVM%2Ft%2FyWwGAbf3mpRuYB7G%2FEBzo7VWyFvPXf%2BN2RJNkWBKJxWvYV4cAQm77Su%2F8K9I4b6Fu2H7ZaztStFc9USkC1dPx4eCFsRxUDfE0C1I8%2FaEtBSjpVIe7qvqqjLleAk1Ntoz%2BiKZrFzhf3kZYwoS9D56z0hVyW8AVcvaEOZ4753yxMH28EPKSMYaWmuxAu8HisHNy6RYOmdgxoSMn0%2FaZ6lnhAPoLBr7BZLUdjtgUJvLs4he0lWVc0HY683SwfDfzGRpcWJheHu1QPoyLTh0o%2Ft2qRtBoelMpqIQOMUeGQA1ToFkW2aVNrF2TR%2FlJPMv22%2FKNmBmZah1BsyyWHTZF%2Ffa35UClukkm9oBzqyzK%2B9CUWH5voL62dqgvzg3qIPq8iBS6Hq6FEw5wzqsd%2B86AlnzyaM8DEcmNOoKrts9vR2UOimAg0VTy0eU23xP1vxV7SsJgV4q7hHRSHoUuQMuYv61l7WthQIr3k80OoqS811ZiS1mb8uwmjY1O0ItSnKrheAYGEaLjtDxOA4zKcrjBObehYd491%2BSGzvCpdmU7hdVklTBttV7KR%2BtMiI6k23%2F7vJCMNDrz8kGOqUBCHk3PENHx8vMzTqXwmE2PWdQ2n882vCH3e6QZpA5dGd5EVE2BmG%2BXFg%2FsTD7CpX%2FOeAdfzRg2t6N453QBS4wCUmGw6OaNezO0P7%2F%2BJPOh%2Fm94XD%2FkElzES2GPTaMNFi4Uo0ELDHzuq36wlii5OIECyB6eJlRW3bzFqKne4HT4EhGuR1blkhg%2BuCK8b%2BRtu%2BCi36NEvkBwpHG%2BLuz7RI7zpvgvyQC&X-Amz-Signature=7b50ef9e0220aca487c9e3b79dcb85f8c6c3bb6dcca576799a8c646636dd1c12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

