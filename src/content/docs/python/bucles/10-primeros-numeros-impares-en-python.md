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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UBC4B7X%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T052634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6g9rBcW6XsroYJYlfeyZym%2FRe4%2FNmkBxJWSHxGMsX6wIgQkUxSFn6dTGCCQZIw0MArjYf2OIDIH3VImZ6NGsUreMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrhO9AxC7SDJkJnYircA9zc3Sp6%2BUN3FBcFWgj5%2FVc58buZGXizSB%2BqW6DXog9tpmucSlMriF%2F8mIB16M0ox6MZn7%2FecQUUOUzl4sPXcsXbVwRBSUnw1du10J4RL6xI3%2F%2F9VKfimVJVgskypIWi1KIphJsGg6Xtk0XK3o1DMUyCVS%2F8xdH0bV7JGjm44dSoENgMd3kpYwcaUtW82e2WMEQmE%2F1Y9pcntqevpUvvHazWxO1cnb0JM2hZ7QHhANtI5W5f8VsKkRg4bZCnjUtv%2BVGh5AZI9ZoSSM8X5Q7jsgDXg3KEJ1QloeLXGAHg%2F7BWhlXPOclI9hG%2B5BhQDKT6eafUJ5eqEcfhzjYsN4vywrkTyWQFs1pEJ1ISCIfCJmu19Kav0q%2Bqytj9amMJW8%2Bk8rWV7%2F2HkJz7pF3jwtDGAsQPez6hPoNxRVQ9td9U6gmMQUuOKUXvhmZpQzPODZmIwi4DtU8CtwyS0AhUHLNVQp02gDUhrBBYv1Y6L1TxkwJE66z3B5dzCJtz%2Fd0fiE%2BwW5QKGwbnxf%2BogU1iYCHyq3ZBM54fxd1kaUoQFjhgPa7q0ChR9%2B4b%2BLuis%2FypDmdTczfrAOplN14fNpRVSZ1GId6CiFuoEt%2BQ9HzxHRZSvyWWTXEA2QkGH%2BzGhcwbML602ckGOqUBStiRdnRwKn98wVURVBau8JJTK1MfF1KT4aiKsSqYGCPmUJ0Bk4WlIMlgPP68lhFOBVSZm2fUp%2BnW7KIjamtyhJ3RQZJH7nOpbexpkysz6LitVZ%2BGm4Wdy9ll5AJW%2B7uPmAg%2FNUf3j01P%2BaNkmvRGee7FfJTY75IkCNjAn7fwjzHi%2Bo8wfEpZcQ%2BMerHD6kJ%2BcrR0zqSLYE3kw3KgsjHhP2MjsW9c&X-Amz-Signature=09278d74a64cfa9ce4a144817c42c1c0d88bf814378a39f85c7a32ce39d9a84a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

