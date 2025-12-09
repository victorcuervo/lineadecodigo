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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MG7FYQK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPnKc%2BSXtPG5iQsSrkO%2FsnzmC4BB4tuax7EDCpg1q6%2FAiBzBD%2BsJier3J10oOkBzB%2BBL3UW%2FmF4SSWvjkHTXXwXPiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuvENj2ShxVNeJLJsKtwD9bWu7byiTCIj986GRwKQZBzcmi1Zu%2FB4VICWf5hx%2BkoA%2F5eFTMyvNvfBGYq8e3AhJGMcyA5gRdOUpZeAlC%2BV1FGglIoGzLmq8U3Id%2BZY5yif9h2nqAOLVwU77aCmK5%2F2m%2BqM7NTZUBYqHhK0sZlayirLRQb6IcJ6sk57D5I%2BCkbVRDpHfK9x0xbZnY2TU%2FFfVYwwYAsxNfwArPPT6BUFTYP2SV4ElnelAEBBj1rhP2XVWHtxddTtK1yjhcEQLAFAnii4e4KNR5BmNxgkE58ytA%2BV6bbgBiR5FHPHZwpHd9s7t4426EaZTC%2F12CHNV2U6gi0BxfU7If%2Fsf79jUuS%2BbEbaGCiO5%2BPWhOSkswk4myCOKJuQTjy%2FP1%2FEKML%2F%2FkeE0IyXKkT%2FuT5ud%2FmbwjMuNjprS2MOoXtfbjwtHNDc9nC%2BvJQhLDKABlUzo4jrFSjJu%2BROHpZLx8uQciBQlwLkWw1%2BYAbtpXmQvIzHs1GLRN0HFH6pB0QEBSErfmuSqUSV9D6WW1w2CWtEwYMcuuSVf97oRoDAwzwi7K1SWwv0SU%2BvRoh3vXf2F%2FgKZuXcCb42QdP0giQFqSFoUexVG3xK6zoxU9Y35r3CCAMom66lJZ5cLNcl7AnlYTkPl8YwnqTfyQY6pgElgvvVM507WQO1dX3a8H2gRhBxmka3n6jpT%2Bt5xA9BpOWgZpQmaIwUXQ4CtOsLTvbsR7GtokL28aJ3X54eLkdn9qk6VC3DzfMI6PUBlHByKCSqIzl73R6rEprQqTKk5WBJqyXcJiXd9D9enD1DHUzJ14KFeGrEEY5ST%2FOUBfQSCQArw5fGwiY5pZdIE4fI2vmOUxVnvFL3%2BthmlKcHetfPYxa1IU3w&X-Amz-Signature=b5777a03d13be6364fb4646df0452ddb547aaf80a4a7c70ae85258c6c7a7e56a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

