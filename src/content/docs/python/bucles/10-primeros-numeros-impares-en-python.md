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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3GBTCRJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T081710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgKI6VzvuSRligNxDwR%2BcJM%2F4mNqHhuiDLL4NXimHGpQIhANW5mw%2B4cz%2Bixpd83pqf4so7XM1%2FRRIoB8r%2BpS3kfdpjKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqqpHitJb7x1hiHusq3APBdoz7BTnnY58Q5EfFIlLVFDt9bpGX9%2B2lrB5k4QOPugLXDxV9hVZwWWY6kZqvjLP%2FIlk2OACI9073pwwpDrwmsERTJFvvrxPQ4oWz1F10cSG8%2B1iK8LOFQ%2FvH6ug%2F9GJ%2B7he%2Bz8kyUUlrcZJlHdwkwlIJapI8hMaGKFGvYxrQ%2BGOl1kFzMx7a%2FpYrR1gmh3loYGHRYcohY5tlGmiaXb%2F8iAWwPfJgBcfImMLFfUO23RlUoy0bl0lRAvSodNPnf4lr19u7FXVMw1Wrf36BWbljKtuF1aa7Tso02dwd3BbhX6QoZaoSZE%2Bjjp4d6o6h6kqps6rAWS18K96TQTcddjqWme7Nbg8uprQQJmOprV%2BxxEdI6JyupQnL3%2FsX6c8qjP%2BcRosCzxuVoyTKow1UhYnmoq1GXTeR6VcyDeuW26RpM02GRCVp1IAWTBliN6VEJhxXBB3B2l72Zz57K%2BSyyoNs57sH2sv5vhHiiXhP8PxjRR4b0Jf5zqorf9MSjTjvxMFBLL86eDa5GA0I0DXyqXp9NWmoT16L2uB73f8%2Fu9WFwXRpHuCZFoE8riYZM9l%2F%2FSB%2FCXt%2BsUX%2FmI5URjHRX6V2ASLByS2dGkYzbe%2B%2Fkz%2FCj5ozACQ6PYm%2Buh2MZDDbmtTJBjqkAXxDKtFLNh%2BKg6ocjusv4WenC%2FEmerc64WzRTeAXB%2B4eETvtDKHGE1u0Vmq4EVRiSfA8nq2fkiPlvBHpx8st8nGnFOgQ4IDTgTeSfTNSTTGzOzq3hXLM42iQ2w89y6rUrGR8P5aA44BAXaOPguuNQuQt5XA4kUrJZkL0Q8%2Bx9vNZ0MFx8r9cwfeqLn8urwg7TvzijCyovSyqhGgVJVzwYtKZBgHZ&X-Amz-Signature=cb5987284b3b57e74e238897bb1e07c3e28318d18918480ee73e3d26015324e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

