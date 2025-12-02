---
layout: post
title: 10 primeros números impares en Python
excerpt: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
categories: Python
tags: [python básicos,python bucles]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FT6FHYT%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T235503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDrCP1FM%2FR%2Bppt4xl9ARwqeEDRQj2THNSWWJyxp5xLp2gIhAKLeunEvi00UB32PFcBft21DCgtl3Wbr06PlGv%2BGSs2aKv8DCCAQABoMNjM3NDIzMTgzODA1IgzoWI4w82NnlF%2B%2F0i0q3APVIlPVNTxrm4bE7HlUgoIxKPsFdoGMvXJkCmhQ75zdEXWEotv87MV2G%2Ba7Yo2Hc1J34dbDIF5V5OdoPgkWqXXu8LESwpPhD4pNnwvUG5HAzzh7e197qYE6ETw%2BNpwtJKByD531tREITgHRFg2Jys%2F8SGkxhQTmh4eDO%2FemUfPvebVeab6qHqBu8QjU0DL4qtwFppdZucHa7RYYLisgiaVKsPhvU2ef%2FN7hWnBEF30KxfBefjbAVzmh1XjRrZziW1EfIxPkiI1xumv8KjAjS2fdjoiInUS5cIe2AtksTKI7pxE8FxIMxPh0qaGo5GzrKt4Nlh0hsrIkE5DDcMtGylZfj68yUzzkSqdVGbDJ8i%2FcX9ld%2BqEs7Ca4eARgsNa4WsmUvjPwDGPCf6Uv%2Bt37ILg3r0spHtZORUcyjot3HgreVv%2Fw3ZKjkqN7Sf9AMD4XKVM9B4qWJHh8kMULuuTZtcOZYGu5hdZ5IEgRbq6pLxo3jCsK5OF0sqmNLQ0MAhO1igQrHVLESF9TawJmhnASeLX44SAZwGBa%2FpJ2eddA3knhlExbzYu3LHccbTkTHkMQ6Ll15S7ACsPT%2F7a8gDpQzFSt5tXODz8elrIM7HYT9gY8RsxlB6rZ7UKqDxfT5zC05b3JBjqkAU%2FkJ8PG0%2FbRlvTitrkWVyKalTKTPYfVkEAeatvadAi%2B2jWMqsu3tGg1e3R3DFLbafZTxJ%2F%2FgXpNUR0pQeqbR5E2yyjPS5Iy8BebOLIaZjIkjrFFsBgipipna01t3MA535Z5B8kXgEgRmEo4wSf8I2dP0K5Ud%2FZMQpNja1jXV1lf13v2x%2F1uRo6HslGZrC4M%2BzbE9ekyxTfKQlXr8VQt2%2FmDNgPa&X-Amz-Signature=72de2bbd6314df26e298280b9caffb54a7071eaf00192e5f2f79c78ff415df45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

