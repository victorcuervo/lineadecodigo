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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674KHHYSM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T195000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJCHZB5t9dfZ43VkiXk2VAnj%2FF%2BvKMfyg6znA0PXDJEgIgUo5nMGFZ1duAoGUrCSHvgaepyZspKjZFbDOudDUvQKkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FTdnzimcA5E8dKwCrcAxdts7EO9JWRkAdbloXRfdekCLZPgj7rZzx%2FXSPGy9Zkv%2B0b7eaMr8ClHpf1WodHPFtAWQxyDzMEN%2BSmGQXPR0%2B8jbnoxK94SBKPTtTyzdPMcEN5S24vQBGt7PHoVN2KknH8Ui2N%2F7A0UT4OZ9n8Hcv%2Bm8KausT9hJwxPSW58XE6I0%2B7VgoLuntc4CXd5sG41yABAvQzBEqYZHPSJaxPiMwKx9Hg3Wmo3%2BwiZjU96Smd0Wun4JOytNz91Ww%2BjqdideO1gYrjZga4Tb95SVBcQnvTek7%2FcpnW90vG5m4MYhDewHAn3DC4SXO8%2B1Oz46cc9mPmG%2F9AN%2FPDpwU39DkzJJxXV07JRuQckohrpZKIMU00q0zXizrWDAR9K2VlDNrzZZu2Kj1TyPoDFp6GCtX%2Fy%2Bd52FhbEJZKOWsPk3pD7jQyG9PMgdYproTmnkE3PiPAFoeYBamVqHMkBZbhy%2ByPwdb8K9o9CKcUpjClgtCHhJYKFVnTuevqmQ%2FROw7vVAFkRKNIs9DH2uIEc7g1v68TKrtRGt%2BEsE6MLwbF%2BLm5%2BUYhp1LMq%2BWQAy%2BR5AWrJYGO0KMlR3wK5I2XTHYFGBidLd7cfzvdW9yLFE4dIrrEI637lCHoptd%2Fiy2YmisLMOyo18kGOqUBiAiLO%2B2%2Bp3jT2Qccg6wA5tLMQVhcuSUXezUPPg854QwGnf0uvlqNqI%2BKwTBHnj%2BYkIH4wW3SaAJsvjlWsVI9SYJ19sMJEAWSRpdeQ74ohlfWIpcfKqZyqS64l%2BM2tq8p2kuMTVhNw9jo7j1ftH5Ja8DkbkEnzsJw2JcbwWSn2lQnjg7r9Ed8MdeD9wYlVa5PkXXyoJnUHGSHy0h2rKL5J3ahPxiC&X-Amz-Signature=8e180afc3676f214f5bf22c446916b0ef266fbf975fcadd1b2bff7be2579d31e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

