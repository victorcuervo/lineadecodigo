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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTLWP633%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIGB0zMV%2F4aGsQnSJcTddn91vn7k3nrcQHWksQb8QAUnhAiEAylVu6StOHPu5ndoESWe1WlADiNsuV7UckiymcwT3Xecq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDLdUKyYYcUX7hp663yrcA5j9XwX%2BSpfZPP4n5Kgb%2F01YFjGBbTaS62Z9sRVA%2FOtvIgIYm2iAd26WgtnVISCLGfuZUf4Cw3hgkQX2d6LjBfZh%2BdFHlpsPYgQTvdfLu7U2%2FdM9znDB5U8KsIWe8iy3UeM4DQY%2BlF3f6AdybS9U2Fk1JXuMFYn9SaxaF1H0jiF7aJW5bricFLyH5pjI%2FG6kEZQ%2B4om2GF%2FvtmsY%2FC4rp1V6HWtfUBdCMM9WD8o4MZ3sFUxQ2JfsfcCC1JPV8axBkLVTYuOXn3EfFADIP991HX0moSLfzpLDARAg9xAOJeilnTXJn0I4Zu22%2B6DxiXeuoezSbthVusQt3Z9Qz490AhpICZja2rit6zRAbwwYP3GmBS7M2y6UtpAyKWAA90hI12%2B%2F%2BHohlBZg7FAT%2BeKYauXpA9a3KHC3393dMiCGTvo3GTusKgGqUqVUX2CUNFF3OgUj24B4m%2FlLzv46BmQDZTdb%2BKU0W3JkzD0ShYfFmzAQF%2B3Cm0yAQh4JMkmkPmyy8Irfa%2BMCOwiReM3qq8FX2KtA1vA5e0pO41enSImT9hI0r0Y59GWVHOmE1NV5s6eP8iUPJUX80PipcDc2t08jKxE9MOICLca9bWrx8g4U5Yyov8qyU8T0Fwugoj2NMNaUw8kGOqUBsBViMGk9BW0eW92UhQBazq7wuhXpEanJAV3Bovx6ewkMY0I03bI5Zzviqd80iIDlFgaXZy%2B6eoCCEuTFkrhxgxaV6e0Pt596u9Gjipg9wH5QKWnMSXRo5lBkwR4NvRqBgKkJ6ksM7j712g1CiIbPH6IW9G3mlhJYbHBLyZCPBIfIAdPJDyml7OkV07FEWtDkIub4cvNBfvee2Z45TZFK5FdjqWLh&X-Amz-Signature=b8b44592d62b5fc8edc6c691b7f65ad0c92398b04f6d7dbde79e68fd34eb94b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

