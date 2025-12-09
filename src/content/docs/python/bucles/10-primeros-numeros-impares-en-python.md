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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EG77LZI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T080224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZSLeb3yMGbIh%2BvXZt6xqouQ6YYJfiHRS3CiYnKa8nigIhAJe7qcBkokT50Y4D%2BvJc2VrLYV9tYkD9QYL2RNtnG2t8KogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx58dYiugFyxFik%2Ba4q3AM%2F90XyUm8MFrtxdBv%2BjXc%2BOJ2JDP2CjImIWJoyxBd7PJ3fdA2qw3GVk%2Fp0wbRy3NlaGORvAl0rgi8Z63ZpMGHBvP8jaFHUC4L5SiDqQprS30H%2B6O%2F60WpYyf6bafoTucyKhD0PdURrMjZ52Tu%2B2IXBBYgMNLIOuEUtnBLe%2BKwrYu3qbKB1UI6ncfGsylOkU9%2FqeX45ri6o%2BdO7JmEp7ABJughxHVz8tITuh1Ji7KNmyTp3N2EI1vaSIU0gQSLjQ379qLN%2Fu08GbSunHJn6jyR%2FF9vgaWagdvdzfDqO4wuwCZLOxFTvYO2XJMZwhiJdQNq0JcdSMMEvRIYX%2BMNaw2dQtdW1pMbdS%2BowMpSIQfWSwYSCDy9IcjgqgItQ9s2pzo2RNkuyBCliTSaa9MxjEWFebm0VzwCRC1W38OCGCAnpXvVbsK0jvnhS%2BLhopo%2BZR1zBGq%2B81pOAy8tElWeFWt8F8f6N2J64G%2F%2BswFaVvxsKY2I8LT1ZCAjEbr%2BlzdrHVd1N8RhxhWu98Q2AGR9OH3XZ19DXrJ2owiP5QV%2BasIyUs%2B7kRBvrhnZPUMtC2wvWyB2%2FIgnTHiKRtSptGXIrH7OYyV19OErs0b3Rqv3JnHRlsXDC2wX2amO1VlcrjjD7pN%2FJBjqkAY5fq6teXOo9MAZ5D8evqQlqK30aDDG9joUsbDoA%2Bqp4Y3kjUvGovwbMg9JnIoAlvMg%2BOar3fuKwD9JVrvILXbkulLNNKKFlhyNgTID0Qidm%2FpA%2FZJ8UPCYG9JPNUONo%2BCjhRhJZPGwCSzC0cEBnSum1dTYZJGpwx153STcLN7AVo7%2FEQUeLnacJbnVBxHY5Na9EXvzMdTt%2BeHohx%2BsJfo5%2FnPTA&X-Amz-Signature=ed94da277631c2361cd90498cfc068b9ebe3009c448791d4b8f2284f9e555b23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

