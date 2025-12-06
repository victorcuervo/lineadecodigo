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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWJMPB5R%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNSKjfaMPxgGU3lFvmo62cKTsHMExpcG4LBYYIxfEaVAIhANICSCmJFWCVlWk4dn9RZm9p5iCI977%2FSyN0d5ILzycCKv8DCG0QABoMNjM3NDIzMTgzODA1Igy3SDbmq3K7EjLD8dkq3AP9WNtu8HK%2B8SU%2B%2FvBdUkGKA1u2diwabQvx8phMJjyBfOamrSVVxfszAK7Rka2Km9Y8A87Ow%2BpChG4glZGS9cPKE5772MwYnDRtQyL%2FbOWhjK3Gsi20VlTOcmoCV8tB9gXZmZG4hgbCl9nyGWl4e0lseTed4d5IlHWZveU%2FQ2M2T78Bkp75MzXbOUHu8IoHsM0DPH%2BITvEXtE94bFN78PoVsEC9f%2FATBqXMvEkCyTMW1nGdW9q5i80umADyjmLW1fGLMj2b27RUg9Suzf1hLSa1gmdyJMrGrOMuzwSGo3b7hi3SbkKv0JXXZlFI8DlzvXxuOPvVJPGlqqa0DYit0fttpDCF87%2FbQKa5jhpBQruRydU07St4hwYjeSekPTsHpiTVqtxHhsAka9hf4aUjXGTQ0oYw2XKgQIpHzqUpkWqiLUiiCl8ZRRvEp9igiqdRhmdQy0KKGBmscJ2MZDZo2XVpRkCPUamIT6PsI6Hg31VHWMbR4k3yJvNidlNcZ%2F2qpWNLacwcfP3qbH%2FNO3V70wt%2FH1J4QrmcAXAZETGjqZwFrBzCwecOBrhVst2X8mV0AZgqe04eaHFIuF3MwB20jCqk7gbbOvBlTD4LG6TgV7d3hQ2HOoLYQmh6aMNULjDz3c7JBjqkARJtAFAFLi1VJPmnUwlndNqQjioeBmR4PnrSRp6oqe%2F%2FyD5fW3Js6rLCbS1RmQK1dXB34t5tD3751F4ieelVVJ53QBj%2F9cjDn55tBWGx7cVr4ZYhyju222HJBt8EMJrxRtJhB1wt5MP0C2xrIbaV6txal5gq1RhGyk22i%2Btj5Pf5VycmMAwGuBszGMHip3H%2FLoj%2FJ7b4UrPirlvGGfEd75HDUYzP&X-Amz-Signature=e9ac77f965e72b7d3fb17f51f5aea63ae3d7f02650d9bc8dd4c3a85ddd33de54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

