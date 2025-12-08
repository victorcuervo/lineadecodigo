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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAPEEQVF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T184436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpHCOKAo5TSWRVz9YPsKJPnVqQg%2BQa1cRG7Ond7ulIvAIgJe%2F6DfYjpE6m1TXWXrxjI4IZxMmu2ELOWIrcDENyVOoqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2LwNkmcl6v7F1UfyrcA49OWmNxlQLhCFpjOj%2BSx8OkTaTHi%2Fv592Px0Gz3tckf%2F7ap3lVXK43m6aM%2FyWw5ihNVT7W1xQ9hnKElivLDhwl1gaTeAEuB0K1scrQloNWSdgzqzD2cKoiUNxrGGxOA1dVzHHxcaTf2YV8nm4BL5m748ZmfGnxdqUjZoPtUvp1car2cbmr5zqFSFZK%2Fo06q0aix00qegXvL5To%2FnyCu7gdfI%2BzXjhi9WI%2FPL6NGVoH6dbM9Lg0Zpx4q78Dn3FVFFG4w8jsnCeTcENoyGvHfYKk3%2BRyc0JaxCoS%2BtKu13bWzJwqju6F7xM%2F6fn%2FRT0hwl57ZiAFS170sMZ5sNgM6KF7WxKY1YGFCYpebvQ%2BVnkXyOTRAZa1IjcqN8bK9zwWaIPfmURf0ktIX4GSXscuiolYvaF0oxj%2FyAl4nku2%2B3KRIWBmQzva2TnbSIwBTtdoNDjGI48lUfpqgK%2FglqxYB9nQ4iHPvZyY%2Ff7KGOv%2BPRvFjK2kCCyGpiIplWLtkSGn%2FfVyjQz9hKl2%2B2HU85TIxDugvSDmeG5hHD%2FfW2rqV%2FS42T7Nl5HwzXttaYPDJNmdWNO5yDh2ebS7%2BTqJUHIGoUtc9vLLpXMm8wnB9GM1YXsRXXUWeiwc8rTUQaO41MLm03MkGOqUBgGa%2BIHw8Ny235rGjRjNjkI0LvHpU%2FKqvNxLLpuSe6%2B1lYNv1hvKFvs5UkaEI7bue2KwqCVNjaiCVpsTF1t98xFkIQPC7hyHWNS7LhbZZHe2yvJMlv4l7FJG5Kdj8ZwQeYsFM38KMoZFWYgJiMiI5FaQzs8tNFQsdRWlRYU5Fi%2FoCRx%2B%2FexHPzvu08tvH18MkcJt9ohE5xqauXW2xMe%2BUbiH0lU4n&X-Amz-Signature=d5761985a2c3e73f7f40085b373259053d93b986597be8046e0cc6595d83ab35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

