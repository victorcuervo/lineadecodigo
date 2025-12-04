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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RS43JTO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCl2WebXLd0XWcX54Hq94FrVoXI0gj%2BN2MgVT3%2BfkJQqQIhAMn8ebNr9oo8aFK5%2FKcOcKKkNTZYBq3PZ8Di04%2F673luKv8DCD0QABoMNjM3NDIzMTgzODA1IgyZbD1Kk9JU3q0nMVEq3AORgLi%2FOjTn2GDLVRx%2Fav2N0by2MZoQaVul6SLqYl9t3V0Rg0mqpFpySPl2MUPqI625gQELM50uc7pK8l6CWajsRK%2Fq8bsTsOibFrMsLv9h4nucaJv1eD3tRZyLfWdCWxOTMC5LBOrs08fv6Je9StV70ClFYSXiCou77s%2BbK9bQ2OHwJPSGWI4oMYODs8r%2FX4JqckH45m4xKFooMmLxw34GEL97elL2rd6S7Li27dqycTZM%2FxzG3OviO22NpuG6N%2FFqa51vzgluT5Ia4cCmyjlaVLZKkH%2BLr%2F5U8lO%2FsB21RmBZr1MhrUgUbR5Jugh8tS5RMb3WRua%2F5rqMw%2F79OqmQqbU%2BUahzgNkWMQ8Tx%2B9Hto6VcL7p7Y0vUbolroydpJsZfEFFg2jh4Ih%2Bhr0Bq%2B13gtWiIxYjoatFk44QmvRYMwhgmaISMoTr0lAeMXjvorc0IgmGo1i%2FK3etILvBrV5FXKqMoos14ziFh4dSR2QPkSKxIOg2EK2%2BT4pD7d1B%2FIsQjNT9SWQqyo0aSlLrJrEIAsGrw%2Fu6P5maG4jSbNNHmfgfCXAXCktp5uKBzG%2FuyDiGZcfb4H2BymeTUlrwbUq958IrfI5NglbwjBkgu%2FWX0TxtE3WYI0vGxALKPDCwkMTJBjqkATPMl4iDE792qp7ScZ%2BVybcpHIN31%2FFLS1X2HihyPf9AMyr2uBX2hXOPzrGlgtbHECHzk0lT3niIMNLQEtbmCnOCOWS5MgpY%2F5jOTbKI9A%2BuEKU9Z5dQFtpEtNtU2cIkKYbJiTjog3YbGTHFUg0NbJV6SGt5Os8S%2BDtHdT6rSb9oVZDjdcbkUr8ab9pM30f2T8kuotzYoq5tm%2Bmf4onuPmTs2%2F8t&X-Amz-Signature=86909fbe9842530d7a634b99e2ece2d7e02a54f5d79a2522fdb2b778137de313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

