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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRMR2JSP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T100905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcH0qpsZzPSOQc8qyQm45sG%2B323ahJZaekuWy1STJlEQIhAPm0pBOQJxFKhF3OqFU298G7225ebOfMOugd1YaqKDVMKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyrknbk5%2FYY6kPxRn4q3AM9xQp6vqTCcAqJ571jGa3fdghoo8pfeRsj8UODfbKOgC%2By5RO4wqeU3Pk7ekJe%2BstzkYuMBaE1P3hFacQ09l46LVRCvyV3pt05IDV4rfCOXLKelblUQ3I92CDG%2F%2F5xgyH3p7SoBvZ9rzCekPa3t2VZLRWfOXEkLhYPwy4zs5qWt9FjORlkFOd9aybv%2F2B9n6D0FK%2BPKeqmvIywCQaddH448SuTY83DNEGEiFURdTATPBDOqPDhCZ2NRdhXVuUjuT6f5%2FPeuXlzw20I%2F%2Biso7g5XWpGa9vTW3vWcJKKRjfrjHVRJ3ewNyXAtj7pBef7oAapGsR2zuq6d7pLTh165IidqdfozBscdw01CBPU2jbYPBYIcQF1MYSKdkhQKIx8KSxKHQJMh8dROM05F0%2F7yPPdIKQDXyn%2Fuzkbm0P9y2x7O0MnMXf%2FW9vXH28SisGI24p%2Fj8SmXl3n%2FQjDjy6xbB7l4zYOcDYD0ogqZobNgbwtmNUpwyxwSi9QGUeU5CR6wvVHcILYQ7SMev8t9YPi1XKHQZXdDNVqDD9RRq5b%2BYSlubJX2lqLvJ8YjUn6kCiz3MqHkBAdturAEClRyp3y0QICRobWEnnPiDCzEcyfk777XskdrnuUzCIb%2Bj7ZvjCImtXJBjqkARmdWQJfuiNjngbo7TonPI5vnKiQWXKWmCdswTAljAxinYxgNOBOa%2FFtq%2FLSVQldkTDzs4u418Hf5OhWbXqGjYQui%2By7%2BXP%2BTnPQqOJW9REGrNQKAHzUP1kHOrsKPHlvYIFXkarEgdbkT2Tfqfp2GlCbW30L9z3jGwYkKLVo1uvHX5sb7ySLuija4xHo6EwNwv%2FPMILjC5uOY2i%2Be%2B4ovCW3%2BU5w&X-Amz-Signature=a89357aef02dec2b9b59a70deb974ef624e89daf4b6f9c7a78016c829e0c4805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

