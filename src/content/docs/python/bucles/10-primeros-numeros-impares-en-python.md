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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RERZMV5Z%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T155013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDbSnb%2FursE1vQi2DWspg5uhFeTESfBscYy%2Fvp4lQRkgIhAJAN%2F02fiI0cPOjXufYWbsnI8KhmhzyeqKd3RN8utVxZKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHVc%2Bo6vY5GR5lr3Yq3AM0eu0OO8QUlADrx8M2ML0rTt6CEaOKVTYC12C2U7NmaO5vHuJRWO8KUL4EaYNw%2FkKYaWXWcLm%2BfkjnvHtdg0SFzOIhaR%2BeaprjaAyzAWvgmA990Q%2Fuoz2OOIQHUhb3B8k3ux97x7u7F70WTgUPprZHMrCZkPdTYttn3C%2FoynA5fg3QeylJUOAhLbwmi76xCN8cA8APcQoSkdw1j%2BVZsqO8DIpEoJ3%2BxLuvh9ndQInvj0t2vUTm%2FvRETHbsmsjzaqxu9rysJnvrjWFkBKQypaEoHgoIrdTtrU4L8qKyaBPa%2Bb%2BrK7ul3x1LTR745FgHGRwzpQGuxCH5LX8ldrgAFwveR4RLqgs37GHmsPvzoqh7bKmd82Qq1TpB2u5qH7mSaBV%2Buu51bnmQm7xtvPX76qCXJ0uSwdbec6nuU3VwOIuVlhbeg5atHsf9ILJFdByYZc%2F2ERnqUD9YW8Uv0Fv2MOwS%2BZx9moAnYlV%2FbY%2BIPMxhvdOWCIYJ7FtQvhHDAcH7%2Fz19DRIUSqYdnnBLrF%2BAlcXnV2fejEPLG2z697TNXH%2BcJ3xegDjksly6q%2FSoxnNWZRtPvWRrYOY6fUVJbs8XYkMXY014iYo%2BE9WLop5Fq%2BSIuBNpaJtYaNwvK%2B%2FgIzCu5NvJBjqkAbKRZRHmMcPDPoR94ePtnuyxkB1fiFld0LH8nnrKuv8EZZ7wAIVx8e58XXeQ6u2tfWpiACFNeu5B0YVPoHnFcYD84y%2FsAdsUOV7cVZ5OIIK0XHJZNVmFgakKFDT30lS0zqeNp0%2Fh9o5M7B0btrI6Zbm5J1PVW7jUV3OHgdmk5N%2BOEqXGdLnRAXtnLr%2BUe64f7euPWrHSnYVtVxP9%2BAi6hq5BNGO%2B&X-Amz-Signature=8784838b766633e8a90eb54ee1586f1c232de6d7eaabeebedf4f6695fe00c6e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

