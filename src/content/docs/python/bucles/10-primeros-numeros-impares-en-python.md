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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GSOXPZN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T004049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFTtHEUNt8goBwyusgc6k%2FKRHD2nifKzRUT22LHPFZNQIhAPRriqDqEH2l7Ly1rsy7ISUrqr1F%2FTeCGjLe1g4lYBzwKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwr76gO4zOnfrn%2B1M0q3APvERK3YXf6WNil2%2FVG1hQfuACPRC5gxh7mnkC6tTkRlPfXmOWD7sKKEZd5iJq%2BNECAs8g2awmsQI07zJF41I%2F205WvBc54xlG1AGaphMakEiVY3Ak5TFtuDQ784zmKGTyqBQbdCPJHuJRbqDtIKGRD6MAxTlRajaE691g1w0SKUgkVIpv3Um0I6NKDuRFEsWDGUH9HjqWsdOwgS93q3REkDzHCQ%2FNpFGJGU9wmgXIEaHWN7NRVMUctanHU5HtmgyVtjqYS286ZxcUdHPjEYh8gn1%2BJnqEKcElrGoYRhhZNlAoE1lAMd85Gh7ByaGWzDNCz7eRcI2KVagV8rbdNzMLSmAK5XokbFazC%2FDvIttvXgDHg6hNye6igWuGGYMA4FdlliBFglh790uJ0gqVNdqZfE2E8oxMPxIZe5Zk6e24MfHuiMjTdRKdz%2B5jbMOurAc5YZ%2B5SYheGwhXiOWHT0zGH%2BOHGUR5kBxZxkqiLnzGObD%2B%2FhQPxCsq2TW3na0O0LPwLvz9mYWkFqachn0OA1NtsGhXHr07UjKrJdgIAUjuuvqmF3Und3ykHsc5iR4KqnwWj3uibQiXDoMBzBLnn%2FSCjZvY7%2Fa3pPsWDZe2fMVbTKiq1CKERqWxOxh7%2FbDCk%2FdLJBjqkAfedeMTxUXZ3oU0XZeCDcMepHSAV%2Fd6xSJh2SIgogoQ8KdbjNQqg7nWT4r4bsfo90NfTWpWFYk5ESXzZpwVMNSOfhuq8QAnu59ljpRVfF6tyaPozBF8Th02m9pAbMeoiYSSBWd4yViYU8%2B%2BfCZ2Q1m2QohBtnZwv5XNzO%2FpttSmgnGsfqkJoomUE4Tk3PZOSk3uKvqwblvFAEIUStjFqlI37Z6dM&X-Amz-Signature=b70b98a78cfb5223d662cd7905df2da3858dac72a75f4319f7bc2f702a1deaf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

