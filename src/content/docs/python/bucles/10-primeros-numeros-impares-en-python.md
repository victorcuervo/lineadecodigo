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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TINGJSSB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDhbWwFt%2BsynxVEBYNZAL1MLGVjRaq2bRPqutkrDu1x%2BAIgVKZ2c8aVD6m1nayiKrdzFMjbjuQ6f7UallMaiE4LNXsq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFp%2B6OP%2BIJHap9ii3CrcAwcuo%2Bl%2BH2B3P%2BO5Rr%2BaMmE8wLzj%2Bz2w8OstqDSrWY9R9rXN2dgVw%2Bi8tL0pi%2FzSnceewoS4CmIyGzs5qVY7zq5j5m8kAJqZBw0r137soBC%2FVGR0b%2F3I4%2BTucNPEPhx4oI6T3HMw5nPk0tMzXRCv8LgJ7xrh9Djgan2mq738l1%2FE0in0SBP6HnRJbgRietRvhwaXsLa86vRqJSgm3kKanPh38ROX0kZTXVRAHYw5WUUt%2BwcjUSHvMiAUB7k%2BdZIWI5445Y2IXAxeeEtSZqDfIxz26jYIIvyw18f%2FX%2FFngqPhuDUPRNoyOgMzNDwPdMMLz9B7nnQ818vegFsGSGVL%2BV1ETm7OYIvvTY32Pp2COQEO2yj2zfMOpX8vBf2L2CkGgOQDQQnwa3NO4ooL8o44%2FZjmZ6QRIJZZ9UErS4YkQAUf3PMoU%2BhUAgXHrWglM7tTM%2BtkADR84%2BH291k2OIo7uYVVplyVIHaPl%2BN1n01yLhcF3FP8EXzHE8lsk7h6%2Fdliqfbc%2FrIqKUUuCegC1LVawFDYgBBLZBE69wqkKzof0R%2B2yrRw4R0mKACD2ZqHJcVF82e4Ng0sk2RgFzxlXp2LiCHNc4ZO4YqAy5D6tR8YgydvoIxfCBBeDptoHQseMKi%2FxskGOqUBp%2BcnGVLuy3fap%2B4rTnLmqXiI5qi5Uya%2F9uZ6mWMFck3ghYBLw2WuWY53RaGFQadj%2B1hjh6vaYeUdm1kHhXy2vFMsD17mL6dWkhBYf3TWWFa%2BxhvUgNOamx9HT2ihSo05CH04eYQV0fcgtD9K5Sr4%2BXMa9krsyjEK9iU%2BjRPZzjIa7yGz3HFMssKcEJxfsTOiPp8wYWZbXvMydWG%2FCZUyDrOse0u%2F&X-Amz-Signature=812c8960716693397f5fe9d254a8d74711be79babe3845a4f5ba09c3c76bb289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

