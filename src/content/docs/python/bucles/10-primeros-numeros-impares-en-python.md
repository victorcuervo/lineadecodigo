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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWKMNDAA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDx8%2FcoY66CI%2FPdg9%2BWzZuDB%2FenDtB4U2KWpgQi9JJ0HgIgPpSRSLeCgM%2FufUqCwUyF8Mu2Vf9qKo1657vTZidJ6H8q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMljZo5gGc%2BJWXiICircA%2BIga%2BFmRIWvRBVZD4%2Fd%2B091eNC%2Bf06l1l1coUQjmf2Ssh57uymLag3sy1M%2Bk3etDUi6cjvfC9vMqG2Z8gFZHnlZwT%2FTIln%2BbZxk9xo3FgSU6c0TWKnzVY7mK4B%2F4Jt4gOT3TU%2BuC7vUugABdPma%2BULHxT9NFVIhOR43xbVGT%2FtXRkFqT1gd%2F06dWSO7TkqQn580Z%2BDJeZkCJXSs%2F9TcrjS0t4cbnxm6jZ7ASp0h%2BN0GpdNu4eZDm10jJan%2BAV2RhJfBEakkVVaB3qHm6shiCY8jsgyZqWU%2F50lWNmMnbQYeIr1yUZMj5hn7HOjDTzpqnXL7M%2Fb%2BmZCaOoTF1zQqZ02rUI8tjKuvlXKAWYJK8FWkpZs2H6qREaNCFxpHAg4yOKM66Zp401v3WW2x9M0O09LmVowL5Y2AznnBuqk4erYtHsgTH03kPwxJ%2BJIkCpZXGJh9YHRIdG0DOqIrn4vwy842lS7cNUGbDya5EEJZEQC4dkxPIzMg1%2B9dH%2B66TgNCiv9Cs6QMa8DyR%2BRfwVY%2FjYTZYaQzWuxZg1Xsc1eJ%2BhCtLjTt70DLJmcJ5p330bRxaGdVrfFsv1FtntC7nTF3TiPzqRXF0wkIvEOyGS%2FqQIvcMsolu%2FDP9dTrqs6GMOmhxskGOqUB%2BG%2Fcx%2BmEuMaOYWj22dtXCwZWgKdQ%2BjrVbu3v3A0v%2BTJvtCb1lKqdlEnXxwnQmw5NYOFxCVZfUKJOCrdeHux%2FBikxJfjEebA01UNy2XJqczWRNmrVd%2FzAAlL1lBfa4QOGIQuVzJe1dH1rIkJiRYYzQYzf0OHyXGfRiLU71uvvWCk%2FVosbULoXufL7zS1Checsa1fdGVHPG4wBVFbUHMywUOP%2FliPH&X-Amz-Signature=3f7a9e6c6ce96ceaaf023c3aa7e1a949847f34866b1637ff1b512abb45bceca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

