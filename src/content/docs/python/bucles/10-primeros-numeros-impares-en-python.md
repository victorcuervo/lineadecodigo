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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MIVO5WJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T153808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGumzZKg3s0%2F0blaqAqPNRcKqoVTUuFfH2he2SP9V5NAiEAzXa7Xt8CctrgnkP%2B0y4EZZAOD7Q1StKQQrjyuyBzTYoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHOIs5o95xS1whsf6SrcA%2FvSKZFWVBX6gVuorFCcdDx6ifnNmwj7H1yXqCtmiWTEwUvq107Wws1M0pzT6dr5xeW7DHq5kr8C1GtmkzC630CKXS1OckfK%2F5TTPvHliYQ1iLJYEPyWf721lM6N%2BYrKBRWZE6BedUCsRXL6dHpKXnZxD0QTjGQHEoTXp%2FbhrHGXVTU47G8I6oBDXaVkCiakot%2FliSfPEl%2BlOCdtfArDxOvWHkjO69f1KpJmfEmr9HR%2Ff6VDMfHFx4pJ60x019wIaUPCa%2BCyFi7w%2F49rB8hb4Q9awgMTWT9BAjV6Tu%2BBsvzB3SXyiqXGX58ISE4qdwcCWmvj4ZJMeAPhGYND2x90k46r9RrSUBvKlGgY2oWqLEQSvoLQ2VN%2BJe9GEjVI14AJyjS9gJ9ztIWUw3i3dFda84%2Fzw7xDjiJY5lv0TCIRsjL1uv0SxGmhznJakbYQc7Iw%2Bak7TSuGYYlM8Rqq6QhNufsqm%2FVc9dvoFj0I0E6Xw3bO1I8pqZafd%2F0Y6jUSxgKIYclBDC451htIOBjOtz%2BxfF6ARnBpue3TSYwqfO9LKLVSqO8Vur0kNuZAQw8J7kT6lvqCAU8IhQ0m%2FF8Z0n0N0S92wNzq4kYmtl0Ah4A5SX1ickEsOnF80IvHGg7uMOOm0MkGOqUBdpheunDULrrdANL2fgj8J%2FjTzw8qLX1%2B3smjyIHU3rFadeLqIudTXs8%2BJVtqKpBYhXcLq4CcFUi1KnkxFNDR4LM1wsJhITd8UOXUYGO8oKOEQGsBOgdcPzIC13dxBbys6MXTxIG2VbBIJo7SdZdHZpvWDc%2B%2FGnT5zYBVjwJ4bkHT3pmr5cJe3bXf1xS5EXiXcu9nv5M5z1GbhVgZqLqZfYPbVTBb&X-Amz-Signature=c8d0e81f48bd5725a3fb81f187af3b3afe3e9de663cc42adb9ac4d339dd228f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

