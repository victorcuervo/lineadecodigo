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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBYE63IO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T145316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPvRGQY6I1GYsQczAD%2FRwVydHcS%2FxwziPBl2KLuM1IDAIgVaJXE88lLjFdJOSWiM8jSTwm8iBcSnyDW5Gs1qkQz8Aq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMlaMr%2BoYqQ%2F0LEntyrcA%2BCFnP6qvO6CgrK9zq%2BO9dirAqK%2Fh%2F5Dula1gKebf9Ga32Y4LhSqgt%2FmlIxp6Z6F5LxzcTqQ%2BikChgBVlpUQvRXiHqycl4iY85o4LjKrr%2BhaSvqknj5tJEQWeIUDNgleFCboP8WMsGL0YXjfhcOcTc7p0iP0uzjbg4y1g%2BgwuXPP3x6dSnEOAhOq%2BAPsKot6e38ds32tBPzGMZAfJA2xPPWfQNXWi3CKVoKy0a1WbjLm%2BTDIm61TRqfVW4RBjO2oPtR3QbErFzHRf6Ce%2B2WNUPOK3YWEB%2B3g2tcChpcsIDs9nBJVtphudYIV%2FhCKaao%2B%2BtkDuqYkYOfo9B7aKk%2BdJAWXHkL%2FMKMGMq%2F46Djnv1h%2F%2BLNuEthpPj%2BS6xYW2sDR2BBn9XP14yWLMKut4ZF%2BfYXyRYyLJmEMj9sV0Uhh7vb967VlUw3A8pd0jJkILU%2FLy7vRWDGZ38A46sN4Lcnz4mKDMfTBQn3rn%2F%2FKU8D2mr89ZMXNvERDzlVgXrvGsZbOVsD5hF%2BYUqtTbYH2Cl%2Ff1KjgF%2FhDfTguDgWvLW6RlWzd5XSncmJcq8tQUA0wATUqT7kgaLqktIR06ix9nrs%2B4PBTKk2HaJOt6daJY%2Fu7RU5ZPUNvyfCPq8N8vS6lMNCm0MkGOqUBB08BGkxBy9y%2BJ69PlKGF%2BMVNqvgXAQXi7WaY3QZpuiI8XApxVUy09sYU7kdjDPGUZZMDY2ceZxFzg2UQmxDE5%2B182zCpVpNtai6gZhegFivP%2FTrEHTd8L8eoUscGCNFrDlk%2FgNIo5Tsw7VdUM9f1EOyeCTlK1HRRRgZBId1e0l6bqNSDXGedP5rUV0pJm5wiTZlu0w30jmuG%2Bv0a8djYs0fteXpj&X-Amz-Signature=89ec4f1dbc8b1459993b01523e8b884c7e2ecc7e23dd5e56374232d5575a8798&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

