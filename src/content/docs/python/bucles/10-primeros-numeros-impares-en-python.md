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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RZGW34S%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T064411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFD1bThGq1qR1tyK8YLRbYXUGhm6v8xfgHo3jkLH5tj%2BAiB9KFaCbubZGR77xpyTUfZpoo0J5tSB3yuDBlan3nw24CqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMvWkt12NLEkDinDPKtwD3zHvz%2BDOy7oy7TrCHh%2FyBcMpWniqDfvg1g4q64nwgZNeft4qXi%2FUUtesuPBm1TjI1toDoTO%2BZpesbLi471eUNGiCw9tJjPHWY%2BTseBoDGv9O%2FVk67%2B3Nc6BdipHMD3Ob%2BOCNEB2dKLBJ5G56WX18wuL14ERqRVHpWcMqC4FYAgEc1KvOKTnBwbNjgFEijuFlu38aCbupUzGfs%2Fpz2gxz2I%2B5j%2B8ESy2m5hCl5TKmNJi3eSJYFDvPjoraaxZ6Lkh1eDh9ktuyJJG%2Fj4So%2FbhY7oZ8yladfWCDIALfVUbcqpCzohgIIMGDvvGI7emMjgEiI2olT0ZJUEOrSvafv7cdzkSRHFDTHeyPzGWpW3ieHryAQc%2Ff53B4hg%2FvEHvz44OGW8Pwuw8CRoreXpBnWho5rlyOhTN2ttodoQ2yo3yLE9y%2BEwqNmRX5QZzVNs%2Fh6ycizI5JTe2%2FfCRaHSOjJIT0C%2BXps2KJ7NAKoF0H76JbVTBiBZrr2FK%2BHZXM80mePK%2BhDBAqVRoxoQXHG71mg2ny9A5Ed3jM7nsDtTrcPvfj5ZvY5gnWbW69b4a%2BJ7%2BG9IKl3Tb3n2KKfOJZhdkkhJGHk5LkicZ%2FxGGYPJdg%2Bb1NWdQbPZuBu3aLWjHsPRswxJnUyQY6pgEuPqTphuNCD7SA0VoFGw%2FAqk%2F7s8PDL%2F7l%2ByV2GWhXlQTNKEAKFI5xACfE5bvSyP5%2FEZINUG1ZPivaBEMi%2BaM37GVFWjlSV9Zck3s5O09amkTPWFK7H48K5SORAT47dLOZedsqxHOKqVykDe7xjLISAIn%2FskvFNpuBz6vgF9yQdJjt2lPps%2F63viXvs6YgqQuKZ3bTX5%2BcywYWWx%2FBhFyIEUWT2r3%2F&X-Amz-Signature=2a18660549609367c85f5aab3f4b61e9fdee4b4b39b4f101790ec4cd05a9f324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

