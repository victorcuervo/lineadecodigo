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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O7BNMPJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T022746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIWyGLvX9u9%2F4XBJ0V17AXMqYwYHCcURZhQPPyO7F%2BxwIhAKQvHae9%2FJDn2WNAgwivsZqopTQRwU6UBSM%2FSQAB2MKdKv8DCE8QABoMNjM3NDIzMTgzODA1Igza%2FbMlOStRxnGbA4gq3ANTQiCoyBtCjB39%2BMSY2j9VWb5GofiVYGXjd4M81OhK6Msdy8Sl57pJoo8CO8YRIvKYmcyVPEsSQGyjSOis7RFQjIRz3VM6UMRA8wIJTE2C3Z8f5TBCUmkCwmNyYOMYNn3bsWhhwVehtsdJT0arVdb0imS6PO9qi9ISwa4q1U23ZrQhift4oR6h2lvg33MYp7ob2T4Ny8IFs1P3AVMx9kgwjTlpHyPq%2BgNG1KHeStWrGWrjeUbN5O8hrqzXlcVe2mxCXU6pugcwn3RbWkvXWENNOk6NtnTVR3YJ%2B3apxzHi6elSnoKXib%2BKnkMXJyD0r%2FG27wXovftxaNWP79kjhDdyIotdSUNzg%2FOTx3TJt1GnpQbwAc%2Bz4W8uGeF8o4UGZhG9vsVbCHZ%2Fy6LWoPEHz66h3Lm8D5A7%2BLmUtmXtgngBayMya%2BXsXKB3we%2BHJKbsmadcpZYslBvPLlCiIhvMqp7p5t1SMMfKFIciKkWIGPwMyEgfZFSyJ6EHo8XX7TPuPlQDc9OFzpHTCd%2FnBFA9TeKmANWZiLIj4UPj7dOzeJgHvRphtWrM44aHG4r0QdW9Aoj9o6%2FQUdSbmlc5F1Kp6lrtBTd9U%2FuxqHgH4enxY0j%2FEF0cnHSxsIUX0wWh6TC0jMjJBjqkAQRBrc1MIpSA3gyWbCck4px6t5zRsxQi4jwZ758k0b7WDG10rHy2zcilWrKk7eG7UrN73cRlBqpgoLnoAcGlogL%2FQ6%2FB7JWTvcGTIXQT7%2BTAz62c%2BVnEYNbNru6szdKQYdu0A03B%2BYLhvSNz5IWwJAHERSTzqDFcfBgn7Zyl1%2BH124%2FDIRYsaBxssoyDxPHjB0tzAi6ZV0PtF7t5SXCx6cai%2Fvtk&X-Amz-Signature=9b67b81c891f82bf52d7b015a0fdbbd0a41592a8050d4812fd6423bb5dab9ef0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

