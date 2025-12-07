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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QEJHYQE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T005100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaymJt94%2FD3nW7U3zR%2Bngj86m6MsHY2hW7vcS8WVYDxAIhALaYEOjKa8Gs6RT3t1hM5Xg3WvLhxQg9HSA7EkntgsJVKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw34k3xqe7LREiOD2Uq3AOG27%2BjcvpZa3FvdRB3VWM3%2BGKHGUx%2BiUB5c%2FdemBDEnE3T%2Bger2Neg27rae1VqANoTTEcsa3EMfoDIxbLKJBR5zY0RaDzb4k2kJEC19zUAZEE3Wc6G%2Ba5sBq9AaCmTQSBz3af0Q44%2FawI3neY2TDUPVS%2BcjKZVxaYQH8Tp9VjKa0Zshvh00d%2FG1nXnEYX476dOBAdiTMbKaV1BPI0wfzwqu0N0qn5KQXJmck3AmMf2sokQ%2B7qGq7DuSOB%2BRqyDO1pfbi7bns8V8LLRGXp4XquhR0aGeStj98o2M2SoePjMYJF6ojSTDBx17iAvNX2e6lTNkV2nkcbbUEgldbzyWc4Ay60asT4b5Tw7Wq%2BGX4T68BjDZpqZotEf3UE2uBOVvddPAKbBJSaITmfzHy7mONhBO1NM0bhjwP5PMpXX7LkTV4mv9%2B4rx2%2F8KYIpTcSfosm%2BUfMyeh74IfP%2FxMefSab3UOhkXqb%2FeIqFh2iaScV%2BxjEphlSKCGy7OP1dJDSWv9Roaii0vSkpHvXlUa2eEms3YnCjftwSLne90i3ztCJaAJ1FYr5LBqt3XOLvBaTIEtg9c6DVcdkwa96N6ojw0ml1HWRGk6vaYTxuhFfK2Ajyt%2BsJMtl9HrKq%2FzymzjC5%2FdLJBjqkAcgcRVCi0QGXXI%2F4eLa0TqHRE8iqUnnfoVu8CfDGkCtSYba3eaKiH8WI8Viiesx%2B8nT0nfKCDLvYWQ0fanr4v41Fddd7F%2FXDxCahZc9Shu9LbGEUqL1jWiKVC%2B3ExQBe3SlaV5l%2F3E%2FClHQNpmRE2qSxeRp0ZUF4fZTev6DqeK4Vri09lzteDWQsxdsAylIJYK%2FmwuQ2uJ4fSJT%2F4iGo5sFowut6&X-Amz-Signature=ea92ec12c782f646c6628584be2330b9b28a529a66f9d1f9c3d29ffbed73c4ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

