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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAYD3CVH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T174125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQU36%2FdFueiVolfYpLMTtdsnIGPmVjOAg6ZzvrwQ%2FbEwIhANq4iOpFV1vXxQM86b9CeuOY3AzgfWUVNcU2QwXYLODbKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzF%2FvVYwNq0EXs3Gc4q3AOAFGZk8Cz72GOQOxc0BRcaSnt1HuZDP2Yi7FNBaNl%2BIQdiiZcrd67xmXUUAuYpR2MhdiI3pteK7KDBlQuZpuy%2FlivJkEK86FbnYAOqDP%2BcdbSx0LrS66w1pKC7Li%2F2CtDKHEEwLaraEYV0emSfJCyCj%2FK5OcBkEJDYwx9AYUWM%2F8oWzIib4l4lhKqUYg%2FItQ9hIjLiyJuO3ZHOYQ%2Bm23Tyak1QEqPuYt3kZZUnWq0oFr23Mn9ISRt6kr4F%2BHnnjngVQbxlH9DJNs%2FycaWNHpi09CqU66j2VFLXugm9dyn6dbM8KYYt1t2NZMoZt1tiIc4h0pC4SR5lUq6iGLGfpnTurkYBkvjdpPNLe%2Bs1j9ihjeeU5Pwrh5NqZzHtaNOzWUG9UdtpGlN%2FdGDbiKCUQj4ZvnpzpofgyiY2A0K3%2FRMnasA5Owh7d0KqtvDt7JyYRS6aoiKymKPbtvNwNRJx7nKweKhut8CC42tEmYbsnrBNnU1o%2B%2FwqL02Jwoe2gIl3wMFu0qjAI1VeBX%2BgiKaebQOHuO0e4SDe4k%2BBo83qKCGwDNtMjvnpiQQAuN7VS%2BciT4zLBAnu4m50Iw%2FhKn5lFwDPy6a0ZAHWpSn4%2FPOZB8sHYVQsxr2d9VqriQfvTjDovtbJBjqkAZ8%2BwqZDH%2Bu8T%2B%2FKzBM%2FqzTQnmAM26lOnU2m6fDzGIqzzquOyS6LGdzFBFM4gc%2F%2Fkm5CntJDfrQWU93MYoRn%2ByuEcRi9FP1DHNL78LZfRqs0XzttlgyVe9bTCW3lqJizq0Rj9811DmTdF9NhAOJ02fpDxaE6pO%2FF%2BLkbuIi6f%2Fi6pGRLW29LSbJOP%2BqpmrIFQutkZVfAso1a0iQFrxTEmM0r%2Ft1V&X-Amz-Signature=1c0a111dff4908b182a987f87dc6b47235e0163618fbd4a4ccf2bd88e73867d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

