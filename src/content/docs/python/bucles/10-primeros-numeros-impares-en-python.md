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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG3BN6JQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T044516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXDhN%2FQPynz3DchJYq4IgxdlekdJFC742HFsjue7LbDwIhAPn3RwusCijgYkJ%2FcUR76zkYSfRhrh3Cw7GeXiToPOD0KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJ0C4AK8Rxya6a4F0q3AP%2Fz80AUVC7CZq3J6mZgZrZAzUKAKSn4d%2B7yReAzbvWb%2BqHA8H7gCgVRvpcF26H4t7IorLcWSvDxrS%2F7pZ6eP9BNqTGW3vQqjuokkd2X2zt%2Bthv%2Fi20E74ReKaOjXMMdIShQc3cNM7%2BdVYAmr%2BOVH2DowrsY9VLt41w7y8fhnbRP7oeiY3CmTqTeyZQmOaLOo4pdQs6yJfeUFqoOmq0iarM86HrZ7FCX5WuMktK8OqjcGXTriCaZn%2BZ0zNAk4QQdaXZ4%2BJyGuaVINpMR8Hr5%2BeMqzILRtUz2C%2BeU3rsQ%2F9hxsCru%2Fz7TbqfqeM1CqVsuTiqz6b8Y7Auk3o5vpB9LlPfkgtcrpr%2FssZ0Pc7k9Ycw%2FB135rMf%2BvBgF9VEJ2R6nc3HRUYJshZYh1n0erp3%2FugNKEEzwjuLQ%2BX%2BpbRLdec0oAS6IuyK6YJCDCNJGZsV9TJqUikRTcRyy6LVeNwVuvMPw0Jg5nR4Xhe7tttdjbo0I%2Fs9tVxTtpfTYpszF8I%2FjdFPyfFGA65GJrrbvpcfOLyGjXVS544BHBEcXtNp6wEOrqc6DS1YpCVabyAVZmqDLiPweuCUPde%2FkDeQw6WlXWEG%2ByiIVEetstkMKh2j2lmOL%2BMdAhEm7TU93ubdOjCu%2FtLJBjqkARCHu4Oc8IY%2FMxZTWH8fe1cLWkwf%2Fc%2BiHFHLgC6l1DHZj3%2BCxGWSc2W9xVGK%2FQeWk7hUzWkD3yFYa1vMnL3%2FPsmgW4uKxLENN8b1ctnMhcrnC0jpWz%2BB%2FrB0D6HegkZSseQo2ZVCNN4%2BmR6htmqIPG2dZR1EcaUvweTDBcSlMZhvdsMngTJykJlNlVXbhgiR%2BwO%2FjA%2Baow9HO1%2FKXpFWcIVqsSWP&X-Amz-Signature=35fe97cf29be8caa772a0a60dff827c0eaf1554173929def83cbd0ca6ea7e396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

