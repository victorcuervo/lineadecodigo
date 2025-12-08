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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HB5YA3L%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk%2F4cBk7XlyyXwzA1fcvEKnIf91%2BSRJZLnJGJEG4FApwIhAK8CH08O954VwscjLR%2BYnDknkoOQPO4FGbQ5wAb4fy3VKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3J0v5kO27L8kh7ZYq3APf5fZXgXkQH2yxIi0ZgXOObIc7iaMLNvPuF7xlfwSpUFXkNaRsKmINTrc1t0JVV06xuAkqO4FBrpLhio9iklcDqw8lHz5qHwDX5z2d4ibuAwuqc7wtuhcpAsi4MZNyHGZC7b4D61xshVIR6ZeAzkQYRz9EJKFoR2m%2BCyBKTH3nhKy3kClrMM5GrNlk6XRCkvgjRFn5rZY2yYf831HRaAo7P5fhWhy1Pz9FHDDzQu67%2FgfaqkM0jvYV%2Bji8AGxtL7zFOHj78cA7v3%2B7VEnOOLbkNrKf2UPHssKBSMQCVOtQj7iUU5uXJzmEk8iGivd81JiJNGqQqIESRm3WAJxCqwOZZIxMKIO%2FNAKExmb3cg4cxLVdrHGBZezA0wSqeCoAsbI8Y0iAKdOp2NLTixt1XKx%2FdrUj6sWHIVxRRbcM5Gkb%2BAmriP3KOPtYYY37Bn40NpytXRv8SlnVJxCVvFtl6qpPGbeRG0zVMpzN9BtJW%2FWe%2BLLWHRMKEnrFCkmNz521Sj9CPG4QK%2FtzihqALSuzKHQRCV5Rz%2BtcIeYRxPHMtQi5Kj32CIUOXnqjwrb5Gg7LVVSmqMDGsopdhzzCZPxPYdXoU7JQ%2FTld1ORVss534jGxfSBPiOkNOZdlMYg5yzCW79jJBjqkAVDDuHxj7LpNA%2FxHtR8ItnhT%2Fpf70nmb6T8ZS0H5gL2JG1%2F3o5%2FTlBB8bUmhCyQN5ZwZ%2FqLSxguWSXrvWfexMzDn38w6zXEA0aZXLe%2FDfDwFMX%2BmJx7mqPydaNnmek0Y4o3kR5QXIeg8ZVoy8bJ%2FXAylLXc0hta3GQtJPLR9vaPSJTQfXvhsx5GZByTlzl0YdPDcIcs3VJDy5QvZmfe5I3E7x3c%2B&X-Amz-Signature=9b69a766932f178c536619ca26896ac64f726911165864bb6dcb919d87a1fed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

