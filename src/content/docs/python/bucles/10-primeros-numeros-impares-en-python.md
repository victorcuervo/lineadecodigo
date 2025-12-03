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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y7SDBVM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDWfily45W8OZSTWxWTfpPVcQS6MNs%2BEJETkdC7u%2BKxxAIhAIHsFSIoLJWbNcQPNOf%2B6%2BMiuRRobNA4udchSdo6DVvLKv8DCDgQABoMNjM3NDIzMTgzODA1IgxfRpC%2FlJpUbY81Xcwq3AMhG%2FtrqqmhZeCw9%2Fd9%2Fk%2F5U8ojr1IQawPf0yMEkAqfzwc%2BeGGjF80wXZg67UmStot9zFfLjVuNBRMJtXWlDeqj5LRi6n7A6dMuZgDLGq9PVNU03uSZLTzqBlXOSA8HBvdmlLT1XYnDTSpLMxLtfJFb9OqgU5Q68lwoAI4OCGSpa965YK%2BhCey97G1PPIQFMrVhyM6vQb2SY3T5XD7vkMVI34i0UjsQwtgImKYQpr4cE3rf7uhL%2BKHzTSAVdn8hQ%2Ft7B2hlnKgwuQd4vVc3ZGumM6I287mrDYOghstMnlEzPioy7NOa6POSNGvJlHCRbZZNpBU1vo9o8RdhDvUdLzl4zYPtU1RexJ9dzm3uqR8dRIU1xG2TJzpoBdB8ytZzjW6ztQm7LTu1F8XeBsmnwXOWDZfr8yZTH3K%2FOkli2XbcCHiJwf7Xbvom1UN455RQFqj2EvnEpJJvVuPF8a3TdXAkBvwebh5HYvMYyJzx4sZaxkJAdvDw2Kn2etXngeiNuSDmhxodASZ2f%2BI8Ot7cXcCYBNO4v35%2FELG2XmLNFVSYlMZmeHokHlOcUrMCp5yVQ%2BV2wQrz6ApcCOBPkB1TSFMwBM%2F7KnZN%2FVx5bLB8C4Q6DMrs08WLgbQ0gASouzCn%2BMLJBjqkAcEYIhwcYVcs0attynBRs5B%2Bd3T%2FPB%2BKgAMH5V%2BMYXAX%2FjP8Bzni2wujghwKfpeJKDy2dvfwg%2Fa%2B%2BxunAwu6hanRyMXwTmZDMInC8sD%2Fn1sJ6CCwQhFEWNQI4fS8xyJ%2F7QFGvCSGqZNInnHYKEZ%2FU2g%2FkKJsXZOFrKE0v%2Flc6zLyO4v64x9LQAuJe9lVc8s7hV0NQbIK9I0DcyfHJTGmKTnpt27l&X-Amz-Signature=7b5e3b74be83156f7ece79da628bec14670e77b484acdc546cbe1c12c0173fe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

