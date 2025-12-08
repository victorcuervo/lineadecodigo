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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUTUBSL6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOZLiqNGalIeDv7AyZjzgQoCrKrYEecD8mf4TzvHjOIQIhAMeHoW17o8VppGPvzciVYAQaSfRsWjXpjUovWshIxYkOKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHEFwOf0g8wm1r6UYq3AOY1szUDDh8d0tykexXWBLVvE8XW%2FgvNa9xiIuvOdo25CqbQ9LfE8nGBXrCgn2w7CQ21Ua1Hoc0t4gt5Px4nE42S5uY1%2FC%2BWy6meTrunJFL26aCmtsIaPNx8NRfzsspDo%2BFhvkHNUzAsrGdJ84bwCwCfmIOp6zKK7W19Vv%2Ba%2BYFfhpzXIQbsh%2BIwDOkhN0g5%2BgHZ%2B4hMCpO33N90K3tp6CYgBQ9rvrK6xOHvqjOL8FDaqKGele62ram8YQBUSqsZUzfQkeVbwCdDPov%2FZMUJH93zAekv4lF48RDH5enp5%2BiA3G%2BdFpYhqGWutD1JK2SVhOpIcmLls%2F1gDFSEDMrjokDYstxsmtEmsURCN%2FL%2FN1JC8lJRL5nFJUjY%2FP4vhgK2YiOnRduc2RBis%2BrzkN4VO9S37DDj92rtlCI9tMFe36gtCQ3vTltsaI3MWWrIwvtMkk9o38nYQ5UU%2F8ZUT03WT5fk6QJ0C6Bq749%2F6tCGpQ%2BlsYZOE%2Fu32A3Je8ow8C8VcAkT6aRBp8R9HjuawFBmtSqDtyOvNz4YViSrwWTgTjGfbpbTiXnfyZYlPfXZSDezGZ%2FFSHjfwIFRpoxkMTn4rPyiKbToJz0bS%2FdnwDwZwPljTJbG3LrZAe9hVnTkDDllNnJBjqkAZAS1pvONsmMSPU7zKDAPHol0vE0ieKBlxyoIDqMOFsZgAgX8WGYbcZ0W%2BIjYLmCYbt94dOkkqc4hr4QTgOihWshTT8Xq%2BKkNyPGFtfO2bVF%2FaYaWCZz7aQbrC7NEK%2F3ln3tpyFRNCQx2qRsWf%2BbkxbdKqPrc1wkKovIioLyJkBg1aN0kVbynbIhGDAfIi7t6lbcsSs12K%2FIw5lXOnLlCMfI2xW%2F&X-Amz-Signature=13aca8b285249452b14735954a644c98c87a5e572b7b3cd82a7a310e80030cb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

