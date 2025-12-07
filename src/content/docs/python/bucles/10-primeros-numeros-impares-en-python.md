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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2KF7D7A%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T173833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCL6%2BBUe1GhJ6k4iyrkgtH4fjSUlKc9laRWryz0QIJBDQIgFHyLtUuikB%2BliUmFsPv49MAMoM3Ld0rKAWIuarVZ7wAqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK08dQClOGRUq9vkECrcA8IJk5L63Jhbl7DyFCTpvPTaJiSh5Fbs5z%2Fm%2FNQOBY%2BYQT7OeyCzYROwO0ylVGnEtMO8b8K98R1JjbxBDt%2FP9APbE6aRQlEYgMCSTbpNMBAi8g%2FinYfQAVyd2c51PpT0pS9MVggLjRcdmVrDQ%2BuJm1SRJP8NYvOvQ2w%2BLdXqb5Ibes5dKa6xEtQCIIoeK6cjFnhIQltDSdxHJQ63RItbMZia3%2FQiIhCm5idCF%2BENNy%2F9EW4NAs93aivdxYJQIp6QV7XYZPdH6yg0xTQOIOgOokaXMEJ7xt29nKsPpKbD7Ea4cp9gBGuS%2FJUBYT3q2PL9Og2%2Fm3vdTPFam0Qi2nltI%2BEqNeA90zXgI5jPXklngH2rzmwp7ORsdeMhvPvmrrKby6XckIvyd2Im%2F4a0P0TaHbOk6Zf1gIPnIJBPFCqk1pX%2BsrF9sE5npms294%2BHCeaI5FPJ8lvfdOkzDn%2BlSQBz7YiK71%2BKpoXN%2F%2FMVI7NVY2m3QKMh8VLRia1yG3%2FnaZjSM9kvYXju5A6o7eC%2BLONhaAO%2B77%2BdVIBMpKxCh8HyfY0suvQghaKE4B7ULDfdHGnqjR%2BgihZ1gdb4Yl8BRvs6y2PIQozKv3Hxa5%2FgwhlbZt2TMCafJ2GtQy9xky40MMS41skGOqUBC6%2BEBKCQjrZghQNy3p7l1gLDGwA5RiIHDdb73PsxmJHUuyyx8bDymOYZoD9TR3pWrIhg4YiRImh9dmFvBsdP2bqv735DuwcdhNFQuUtixjUseQZMuXJjk7t8Ve8u0EuMZr8RZEd2wi2FolSTDZK99jRMDwh0Cq3ThXsyN%2FA%2BCRCnC7ew3Jg0uN8yelnwZp5XvUUTqnEphOhBlRs18rhjXcBiDJ8v&X-Amz-Signature=316e7d274c36eb2073d67d1564f72684d7529c2e64b7b17e1e69cb1822c6ed04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

