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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWIKJQOE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T032919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCisgy7fS6fmm6KIY1E9kITnhXH3YxRS0EGJQnB%2FgVFPQIhAKMKwin4AHPzto9dULoZBWmd6OIBm5bR3oG3z2NMPvwPKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzC1sQBiTF8TM10cdUq3ANo2y6EkYcYTOMR8h3XluBhuNfebGvO5PCBJeVjSqgkaR8q%2Bjzk7Xc6stsHNDUA%2BT1id%2F8pJxmkqsnSiUWnfFHTwF9nQ5sLqad6E937v5okR9GHLLoma1%2BQX0bcFQHf13rsGhsM5AoyXRQup5nWwFzau2sTBGAphuP4BvQTHqjap%2BqPH%2FOtB0nu%2B%2B8N2g81KhO%2BbCypL6eRkNlsAoSnMlXslqSklMBepGUtPlbVx5hjkJ6U5vo6NyJAGhBVeo%2BRiY1wnVQ%2F6eckAWfNczC7wvOqpkhv3uNbBwUkCTDMNcZOrg%2BVkrCWzxKWZyMVQlJj9pnm3qdjzaKRyjfOIa7UWSJOcf3NN1TPf8FZIAIqYD%2B40H6CPW0IzsqBBQ8WI72oLTC7dDsSDfCTArFg%2BcS0Pl1j%2Fif8VeZ6YchSCrkqVqrdAX0%2BQfoPfRIUJLlALPUFi3RAjUFkd11SuOtQ2teD7mQzz8WQezZGNgjGEM7SQ8yBfowAGpBQKFJ8DRB%2FRvlhovqVyG4bfEPrS0%2FF00s1qrlpq9ZxeiMzz5Rw0mlKn1iJj8sxY%2FFoJfL%2BZiPUiLbGQvded%2F4ducouP%2BNT15qc142%2B%2FCkXz3ScJ3WHO%2BdnwMv7SdFSMMz02BkINiT4sTCtrt7JBjqkAbOEXBmKZ5%2FsdY0S814EpHPeeEtGLuPN49vvBInqZuToCsur3sribayWak%2B5AAuXL7YUwnr9meArKSvQPFyIe6i0bnXPTGtFUCF7pZWULPSjLEg0XfQoB7ExPFZX8nid%2B%2BPVbHdp2%2BcLpGIpAou1KpFED6l0zVSHktM%2BocPypGAlj86XK9xNz6HMyrPQIrzpTpHJmqK9HcCztXMm1akpp3rQYDhw&X-Amz-Signature=2d9e3353bc56f9aac303c3425d35d81eacdbc10cb1a81f0f0ed0d948408f252b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

