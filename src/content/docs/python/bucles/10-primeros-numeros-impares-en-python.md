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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVRYHNXH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLUNqOqo%2Fl1l4tABJsC7wAfF08LpKRTtPbvBCu7Bew1wIhAKhbRaX9M3eVbXHFbAIRDmxHCm8Z8NFAldZ40c43jJmMKv8DCHoQABoMNjM3NDIzMTgzODA1IgxgJNgtYPCB%2FayE0%2FUq3AMQ4GCmFo8srJwdKfdgQ1o%2BCbGTehNf5sNWRXnBJGQVT6OBdlaBG3abim2Ls%2BSn9ISglOh2oT9EKNlJd6Fd61ch57lKGaXTr2kr89jAwtrSYKnS4307e3e%2BvC9KvkDoNA6pHpmVpbClxx3Ksad1TQRtIW72kvf3nWkD5crdhnjeCTh2HwydML9%2Fgfc3cixKOkwj237TtjsC3LzGN3dS4FJ5ztGl9kXHnMyRpmuibFMLIYdOi%2FPj0bAtnhk2JgUUML%2FglHSvHjRfWg%2B0slAOHjvg0FwHDw%2F4l7Gmtb%2FndT4n%2FNvWCd7VnwAkar1oArW%2FAArrYKdc6UoKfQ%2B6tZU1v%2BVMl0wLo9k%2FnyBGyRDH%2FQYfOxZjiMFqxNBQvr1hhcWXbzielhqyY59nkZq3DlJ%2F6KnI9c4uQh8%2FQauNLNJXggZaZuh%2F%2FXAcw0AMIWb%2Bqcgl7fkUuKGOF5fld%2BsrZZMC%2FhWD%2B76F1%2FpnP%2FMWtAtgjss3Oi54y6oLhE0Zxwb5GiAHZx%2BX417ybM%2F2d26jCYmhHXmqI4hs8j5neEYnT8w56k2vs5bSWKL1PudZ5Q4kcoT0QwhSSIXzU%2F6kVBwM0uLrtb2qYdoysN2l1zSvC7eJZ5%2B2JdqxuIw5m4gIBf4H3zCww9HJBjqkAc9j657GFi%2FSbc2D1PK%2FzmZKDnRoj0nzoSrZn02vrQ5rcEGfeGrD01pkQH23bdDwJl9sFoHwm6P1ALwCJwk%2FTTo7ilo0kyjm%2FwJD1F5rzZt0YPz1b2ZZHgMMU%2FfIICYXIm6tS98NhYHo9fh4MqLkpUoihMPOOd1sUponOnjmgMOy93Uywl0HprKa8zWfjdl4d1bHnIZdw4nG5sq8C0MxcThj8zmR&X-Amz-Signature=3f61cfba0ce90bab52e4bae7cc4ca86f4b8ace04d9c183d1432ac6f871deb5aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

