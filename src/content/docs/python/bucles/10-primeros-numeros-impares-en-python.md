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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SD7SHLV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCHykcWwAyfmwY0xi41WdH%2Bp9Kwfo0t8n1Z0H65dMCn3ECIQD7LMsik3DnyqRhrzzd4tVcJ5Z9l3w%2BiybX4c2OvOgGdCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMMDS%2BoGT7sFH%2Bk61dKtwDFc%2FE%2Bp%2FpKBvubuHnrc1zO2Fh66G%2FCgoNb0KwH9vPpbw%2Fw%2BhAaJLojHNdlc3gLnAihwm3vmsraTDZRcWJz9fEPtBHVEdEvY%2Fpk5mEK%2F8IYWe7jNz47aav15HddlK%2BoaT6NCw%2BgaL6qc0IIXpl47pEaYPBexAmEnqgnf73nrHyUff16OOQOj4BFX4NG%2FSkTGJkAS3Uq4G4eoKfL6QYUMfsXUzvtknMy0ti6k4KiXCx3%2Bns8nuX5lwmRKss6i8%2BnK8uTnEwqgYnxzeKkIsXtrmemcH3u3vLc7rGU%2BtWmimGG4Wxg2gjgFDbidPWANbJD4Y0Z9mXL3SPXLZuxjThjK3gL%2BHdx9v%2FQmqRMzG%2BxomaU%2BFKWlLi%2Bc%2BdIdSJJo48GrJFaISQaG8zPH%2Fuq80kwyvzHnsNopsHs5phosPD9nvWNx%2BFYG1KzoXg3bQTvpmw7Ff97E6tepJCqqOwb1sH6qSXkcj8RMvNxWoo%2FQ0tOqa7W3eoU4jqqt578obwUqAGJEtZ%2BHu4G2m8VEOf%2FiLMRHBMz%2BIYTW3QZLfa0WTKJJR17aXpYwdaG5vH4qHwrBemsBWG6vavukiLYGSecxkRpNL3C90RslupBNOyKTdGSzksPElj9DxB0Km5QmhLZg0w7oTFyQY6pgHtQCO7AodIxk1QwE42MYOpu%2F6BZAJl3mNrO0G4MLlvBF8pnhiBuLOCeUjuGuDXASguKPk0pPoDweUJI7cZRo%2FZdzAnXx99qVox22uhvEcBKWQKQaC2X1R2YYpH0FaM%2B8Nk1bTpOON0%2B34G8hbinsnb%2BXrHCdfvceb0fr%2BBp%2F4oNNSDm2qyrisbcgX4%2FsMu6qILNp0emuPzD22kcJ9BHtzNVNWv9tyG&X-Amz-Signature=c648fa2f320da23cef55fcfb70c89dc223b8dc5a07153bd3fcdd73f9ad686879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

