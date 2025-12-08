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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJUQTNII%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T192710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERYwm9TI%2FZBYwSywywvQMvir5T9cXKnEbDfHlmyAZl8AiEAo%2BCK2E3Qnq1ImT7YO2NDvliubp6%2BjwW1%2BlUyDyehcPYqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInrtZzP%2F5Q0yfo9VircA0oF2ouDDZhAK3FXrgzt60zrlaAyy9b0FBpNelqBWeDmP9V8NFn3WK5AYuSroBZt0zj0J2v0kq5H%2Bfeyk0ic5Dpjhwko25UpZvyYOdSTuCczXLJ8kwgxcDtjYsqpaSh%2FKDidNCYCJIOJKY7npvBXxTwxZuxySgpVhUn8PVQ42HqwgGK1PrbaVc3T5TSYUgggChbH2x8woLhqz0m7QHEqDwOQlXy6bwXLZhVvq8R3i916ua11CruceGMACWoQ4ZUjD%2BZRopfOsfcWHzB9aD9mo9%2BS9EAjBZieEm4aNxDS2SU9crnoHwSklWjybJfAk6O47DDu2tTaxFzWwQ%2BLsP98dBATb04wpLTMNc4T9H1YIElXRmv9qn8xkU6h3oXZWiZ%2BsMnhaOlO%2BsOjGhndPn%2FhQ8kQTW%2FaN7q4s35Yr0PytGCU0zBLLb1Q%2F97Qu6uMT8%2FZFuH0Y17BGHQ%2Fm9qUqPAWYF9fBQNA9ovYlqso0%2B3lal6qkS63k%2F4dW5Nyn7aESnjddaxPPbD%2FPQ%2FhhrEdf7dXHgleUP2C%2FcoJOqrzL7e6WiAO1wWAB43%2BR9DCHwNTeKYzVsZiO5Mw%2Fz%2FGqAtsBvg1CZbtpNH9HOeM0rmIEQWhQBQtZ9RJM8Ol1ZF4LmiIMKK03MkGOqUBuTjKpyxAfDCLqsNQuLON8gTlJks2eGa61tOxfozVEJ7LCioR2VADwhNMgmrrTFy8IG9QtOnSi5t3xwYtcwSyVnvbm6potsVzAgR7vcCC5qatmM6E1Q9QL7phfRFUI5e2WFM21uygx80r8qNUL4Y67xDyOljqL%2BiCVXvNt8iUOcCBdI8za%2FNimd%2FczmtBlVWiaDSedqchCxYmvuNKiOYyqRhnnbJi&X-Amz-Signature=3fbee02a286c4f8f5ad066c82bc4616ff3f7ea4fa544544855a30467ec5b63f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

