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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PKVX5MO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIFi8HvqU2ILUp%2FVJSyTZW2WXqPFvxci4VQ0siJF%2FpOfMAiEAtxUFRaYDKbPNA0ikDay3UcxIrHQluodWfhWGkCHZmgYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFf5jqWc%2BNgh6VsnPyrcA5fmcFrzyQ0%2FXV%2Bfn9ZpVv3fF3KPd8G%2F1xAy3HdnIhpqmy%2BX7aQu14U9SDLwGcLurBTByvX1kfQQjfAT1VqWsrKIlyUPLZYdkKNzXnMWLD6aNJCz0Vo6loniy3eS%2BIHrds0NSk5dw0jBj5YicnS55CN8wFts3nG3iSTzf2xhosuDQo6RJr%2FpO30LD24URSE05RtuAZbo0dNYPj6JLGJAsrJMMyckC1eAjvlojOZEdhvLLdBSuBFvOBVc2I4f7bAglTIdNtXxkRGf1PGHmh7JCgQvmzPF%2FVWwmN9GASdQRlO10tlj4%2By40Wh7%2Fldw638YjbsaM11scBBYEY3yGyTx7iQmjyeLtUI5kEnyzQ4PPrI510V0x5OvxJwqjDbRWo3cx5K6khQDrW5opnss8BdOYUbaIK1ljIxpPV5O2r9Laub58psczBahWrYqKvCwLyQH1JnGyMohUjrUFbmPNeHBKWnltxUkYkJW2JRGwvBGe%2B7WHQwUV3irL41EvelKWTtlTq79lFfbb2n93vbOz%2FaFR64W%2Br5oqnrTDoDpr62mvTfEqcNqNOfY75LE5H01HXie7%2FQt6y1pzRWUVntdCQOoLMKOfzHSccJrw94e%2Fxl5AYMD%2F3pXPyynATisgWU5MLOGxckGOqUBefZSSDiqKwiIXdiphMxpg8RSDHhByaQM2z2iiyJYl7SgwzOLBO5ixbEQoShOu%2B4QXmQCYU89ASjjiNOFrhPWEhB7R4On4KF4L7efo%2FiCRBsb9UE6bGpcpryO1qReZ0b%2Bm%2BsKI8t5wuhII996vtM5NTpQJKM1GyccBKLnc5%2BpbxRVnmYm6FDsV35nXTKhdAVuKcQ0jgOyUWZGlr8VlAI10kqJcCDa&X-Amz-Signature=91e3a90ae8771adf0bbcad1e64eb05435af9f4ff238bd84a3d0787659736d610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

