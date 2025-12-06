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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QKRYNX4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T033109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8cY3vwaq%2BVFI3zcvlacCSoUkr9DhmyLkeFB319QE5%2FwIgSpX8F5bPiIS78vNx%2FPN1qzguLDsAlhY8y4591ynCD0wq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDH%2FfJgAEMvQSqDGHbSrcA%2BTM6J59dJu31cPye44ORhdeK1pYnozEr4TzU58z5qyT9yngLQqGxrTvP727BkthvnWAFEc4kfRQKZMRl5QMKHk888a7n6RyIxlVCKdaRmKg3EHSekWi0%2BFnaXO%2BqEofHXdeIb0K2hblbP5038YtA4nqXRdKqRkEP2eZuEOWqxk%2Bk0J%2FRjEu2FGgnN92ZaMHnMf0qLd0eIe1zxkNtaWvsalIuWuAbe9AACLwOS4wmeSaYo4cVp7OMeflsaOg%2Bq7BHWhdihU%2BX7y4WRxe51HBjMBA3VWrMwmgVPQj3hkseIVb80RfX2HkxlfipCPi6UNWibdpFiD1SsaJfTkjrv664uG5oP%2FrgfNQ2ZBEP%2BI%2FIrwNghzsyu3RZ4mGdis0S4Ad6%2F5XKJsgTz6MiZJ10YRoQaTZ3mhgelCkjmacWd6RScJ%2B8%2B9BulI%2FcneqyHwIuaYvy5G2gH%2BW7L5T4P3dDXaNMm5VQlgAhAbmeGsaQt6ndkxxUZumEAD6ZKdAJgZVIgWQrzvXF%2F4r6A9ljA7QVXUiPCvuD%2BqsJulnmSzZkHcem9egiqoBd8mYySU0HYiPttGTOzy7x21ZpF5sAqKZMPK2M%2Fx9GlijW5G8AFCkaqonJ03zXBFWRBwky9raKyjpMO7DzskGOqUBjF9HnALtwQ%2BiqWQ5BW3haeAMoBdwChR5LkixfJ5NXui4mL5hyPN6I9ZzLt2gK5avlnLK3y6YjNPbmmQx8ITQDqSlxCOaOCooem0oscRcw2sFobKp3hW8GLKR%2FaMnnqGZ9ZnWN%2Fv33OFOoEUwsHk4eAQfh8U%2B2uozVUu1g6WefxkyR8SeuPouYbs0uWeTbImFPav0BIeV4o%2FyLk9gh6D%2B8ToPxEp9&X-Amz-Signature=a5c5944dd61b57805491ed711b1aef70a2c10f482ff149360e6ff7331221a77a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

