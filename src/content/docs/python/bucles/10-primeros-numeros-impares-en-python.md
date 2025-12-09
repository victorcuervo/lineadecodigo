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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNKR5QQW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICl9UoXOgSOWZFU3MPqyAjo%2FBd%2BvD3D6K5kZ9kvXWMZtAiAoy7n58aXThk9%2F4iUq7QX8wQLzZzpW9nxQTg%2B7YVyulCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxV4cr%2FKGLhrewpKcKtwD72fsHEPLc%2Be8sf1o6tSAa2w338Cg%2Fy49%2Fn%2BilVgqXXJkZCdHLTpzlK4INVaMENzxQ44RRWulW2vfIKd1qxiXU8KVPtYQRJrqHRgA6ycoRw3u3ajx%2BiC11rvJnMlLIXXCNSRoLMoRoYM6jK%2FzxkeqVmqH%2F5%2Fr%2By8nD1xKK42jFAPAMDD%2BRXAx9A6W1wyKgczVkvB%2B2hedK12VUs767vxJmmRjyTrGeB3muZ3pPdE74YU2fKMmcfBnPkM9ZGJMYYUU%2BE7g2Yv7ORfdus2ymuys3peVh%2ByGA%2FBrMUUs4zPkm5ORs4LjyaHtHY72VhmWJmkmZAs15iY0tTW2xTvr%2FuS0oQm%2Fi%2FH73i8mqHzAEEpt5%2BwRnbON494ioYftZTrBU%2FL7NOSHmQoWDtOrwBnLYwSh9zuZHN8KmLG44n2%2FMc22Mh9isc3%2BGY7hr47wDTHBMPjSFsZ%2FZgur6oi3mNuouVipw9%2BbnzXgFPjXwxrsc6qXCT0X%2BhjLF1icO7E5RMLlG2cLY3Zi3F%2F8DfuSohz0bWnK%2F6aGZYmB1MtfkqmIRVHOeORpIQHF%2BS2IpgCMA5BDNXn%2FKC4clq%2BjJpltJij09UWtXj0ZnQ4O7GS1baMZGU80h%2F4%2BAtT%2B8%2BlWk7pdlMsww5DeyQY6pgHdo5OWl4hY16NSRLJaGp64vJF%2BCAZNSxPr5ze0eBAvrr5ahc1f%2B5Ba802LBpJdBgko%2FE8y0jZC2ppX3ZE%2B%2B8ct8kzGdyGj7g0IFmn6ZWaJVWY9swW9vuQTUHbHQj9m%2BD14axKl0H9fv%2FbFJFn%2B4KEgDsTREC1BW%2FuhueV3YFhnpThqqex7pW%2FJ%2FcIDLBTuOM%2FIKjxDDaJ6KGc%2FoUytYvFFthrt6I2%2F&X-Amz-Signature=ec7d9c1d6fa3ff53c393ad2e737e75ebbf26cf1938259663c359f8f74db892d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

