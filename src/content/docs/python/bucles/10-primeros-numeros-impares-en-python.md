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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWHRPUOX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCs8d8NTGHJlxRRmEmjtDlkVWe3HoOR%2FX1ietRLsPxCtAIhAMHlRIqdo0C3IB0J1qVAjNFYyVkSa8JGdBb4yFxp%2FHpOKv8DCEEQABoMNjM3NDIzMTgzODA1IgzP1v6nb2X3FY5wKvQq3ANw3HEcEp7%2F%2Fq14t6noHc0UAXMySYgJGMMNXrVany1R9mEwgJWRe84%2F1Emq%2Fq6DZx%2BurdCTvNdH0lIBmaFN749sOk0ZenRWifFTiemnlXkao9EK7s4DkMyNtuuzEuEq6GgyGGVDpPTzy2JAfz1Lq92qfxlgwAm92rxJV2QbW13TAMQnTgzoBNuxksuwYSUQsTeOTVyIzXlqtmKdfxE86p4GTNkAQkMYL%2BhCUyRoYYRkWw%2BlEzFl4cKr14Zn%2F9F08fmwKyToorwnPDCqSNaVod4Kxb0jHlaoYu1hVS9fdkrhpUCt3n4cnPJXHMjT1f60Xn3M0gz4RR%2BNPxhzOK3s%2BGWGPajsgqS8lPj3HFy9JCyZo9%2FYZsujrgwdNOxfEOAAkofNR1AdR5lt%2BH6VfrxL69xLA3vqzWBi3yabxJOcMAvy7hGDJu6Iu0mO8qCuWwEV9%2FYLKL67E2e%2BMrHSRgEI91hcSQM66t%2FQ9qKt%2BbAsSUSsUvMq5TO8%2BEc3sxmTWRY9HKRZA9iXYc439dZnrDP7rFNmKevbNQZyrSLnmwrmjgoT7PIxmorHCPA4xWAjuUtiOOwwnt7laFKEmPIgwKkCFF1HylMd0BwFkf73ozj8GocDOzJx6u5nOgDDhQMKNjDjhcXJBjqkAXM4EFvr7uoY4i%2FNE1sIu57tSWik0bVntCVv%2B3gupuscyubFYJMQ3Smbu6bSFa42ioMF4IBEzEvq0xCXNXutpkNX%2B1B3qbaBNv0kzXL5eIhWqAAn%2FWRLBMZX9xASjuJYdUEmm%2Ff411k4nQNaJUUv6NUadMD7kPtWsR7YRddqb8LhS%2BOtxmMiFbzYIgfyp3BBZ%2Fjtge67Jl9yiL7czGpSHM4IjDPp&X-Amz-Signature=1e089a35c4ed33470f2444d7d8999d3566d3efabf66fdea61ef1b0c22c550e0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

