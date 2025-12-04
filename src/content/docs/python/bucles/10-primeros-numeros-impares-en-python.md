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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNCRZJH5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIF9D7Lo3KPQ%2FZFlqvy2V%2B4RSGyx8J%2FTECO8iZf0aceGvAiEAwfOYdZECBYUKXzFoW6FMB92Sk6XlottXjLO7QqCr13kq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLD9w7PXR4CycKhj2SrcA8mANJApOW8lUSe4yCicJ3AECS8WQWYg99m5f0wmwUOri4qJG8E7p7Kf9xTzHDqPS3paMIyH9zhUKa55NSm14rS%2BAzV0i0L0pIQq9RIe%2BHQbFA6u8%2F6RoUXSG0X%2B%2BizxOy0%2F5BKrvp3aGExbn0wRuNn6WChKmDr%2Bge3QihQXcz%2BZ2WCqYse8F6PTy4EDp1KR1Daa2oQvmVLRn5NG94H%2BszByTMeJeFTIWP0HR7X64kBgRhf6tqakKYrAsL%2FaT3K4n4fElEOcJTNULSy5ecmc9hxDozkEsCLtxsVWYVzao5K8WvLTxo1bIc63Uy3R8Yz38v9HlOgXUimbFWJiJwyQf5I0jDPMJtBFvrKsR9CPLXp%2BijMoNlmcDTmARh9t8XpltL6s96QGXSRIAs3hOi6EDLik7JCIEbHDMkl1p7cso2mlK9Ps0qWVlEvr5pD2AFi1I34EDy2%2Fl0FVEGqhVw7UX9mXqTgUqPB3DCPbL%2F7%2FvVPASteZGov41UubPWj5qRglla28gU7xMCNpkSeEvRe6cZA7KSNzsjFEzv1AtEtVL6bOZoCln0tGyBenf53PBCClQwKotbXJTCOKUXIKdapKJyQtelVPKhx4NvsPF0Tb0kxDzxCA%2F4qsYnOZvTQpMKLKxMkGOqUBhcob%2BYsP6FRNoxbebd29MmSlYTibD7pzp%2FpT6AVsypY%2FPAu0LIDFBW9gxhC7VD4NKUbNDYPwAf0C8MhVgFlJYEdHIB3O28Pq4X%2Fxt6eGFPoA1GhidIHIB36nj6dVN5JfYUco0tJjT0u5y1WZF9JF%2BJXVdnR%2FfgOZSEoP843WhrejwRSPxBYSTrnHIzA5dZIHhIP475rnMUS34UPjMh%2FofpBNDnN2&X-Amz-Signature=54edeebf41fd7f2f050976512db1589f09053dc76fc8f9c624e2703e943c6fb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

