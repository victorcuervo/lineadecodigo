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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXRABSCM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T124222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVJhPM5T59FlvgIPn8yWwTYGFVijoDMm1%2FgCIGhcBKLgIhAPFv1aY%2FbzbgWHPxLTEMdZBzlyj8bIroV%2Bog0LqjRBL9Kv8DCHUQABoMNjM3NDIzMTgzODA1Igyj7fY7tH7Z0MOZckAq3AN4pbuL8lHE7ry13FMNrI1W%2BnHtKfpUR7FJ4Tgvjk8eJzN8g25tr2Xb6utOrvUonDTI2%2Fpy566unIo5wpShCfws8ZBqET23TIup%2FzhF9CUAsOmSE5orK5i%2FhAN6Df3Gah3fyWpdvsg%2Fd%2BCh8mPMPyKVGlC9t8i63suGVEV2f66UoxouBboKWSnzIQ9is2diIGtgufsQ05Bju%2FJtIw9tcI1qI5t1BH5okbkdPovqmbwWLQ%2B3np9LCAGWZ1TTRWQM%2BHJWF966vO%2FxfIZhJ1TXQuENPHj3xkxAfK6mr9zf44%2BbqbEUda6dCJfRRwyIoMZhpzTO1%2FoE8W7qkMbfP0E%2FIYCpTc%2BpP0HH1fYs1eQEPtaSbEb%2Ft%2BWI9X2LBnu%2FpuRZfTJ%2BM%2F7%2F%2F1fVqh0xTicueyYg7JKOVUiMyLC1noqKEN7%2FZA2VoxzXMmYWbbeQKhhJb5A1FVSugsG7r7I8lhke1fGwW2VkH7gvkv6aZTOjIoMixv7zFYU7IqDncyb7oko9%2FSGcTZvQH3JXURsSNlWGkqXGrfN99ZRBhquYNb2idGLrDIO3KeMa761tH3QxoyMzoG%2BlqF73iHffRBMDr1tZCQdtZUcLRHdR%2F6phabIZErgQ%2FeKRGt%2F7sGGqVw%2Fj0DCDp9DJBjqkAb9%2FRawNid9GFpXYPky%2FbNVyAgqTl7iLuYGZf2HcG6g6yUB1AqezJ6Wx0Oq7tmL6%2Bxa1vqMV8Uq36gg%2BTCBfrlo%2ByqBq3Tz1agAX1IAcLXf9RmOlVd9U8W3YeS1plthfB6ieszTOuuU8uXOHWMYjH0QHlQbWuxdbmhTJsys3tW9twOAyu6XZaYm10Fh5ktUIabYI2gA7zSWU9zWcc8PQekVtdXo%2F&X-Amz-Signature=197852d583703a30d35c5fff1c8718f9f77ffd918a7e81f65abb41e6628bdfea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

