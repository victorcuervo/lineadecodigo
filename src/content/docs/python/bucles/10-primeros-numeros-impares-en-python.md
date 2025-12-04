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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CQ6EYXD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEp2mW9568QBOx7%2BxOhF%2Bdo3Xl7jRCzRMFSqQrF4rKSzAiEA6j41mzTA38T5cut0QoacLEZsqhWoD%2Br8cI8UtVj33g8q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFkUZFqq6jVcVZja0ircAyzo3bSL0aGF8BMIoNe%2FV%2BUR42sg3845e0QWgZdKVRJiTPof%2FTi%2FVkxLjqIv8K7AqcJ7a7UeFgD9vX0EZkGepMryHnJE0QRA2D%2BHor0f8GV8%2FUGM6kj4WgcCaLAfWI5upur99M%2BzqlzT0JWlpn3UQN0eyhcxnP0%2F6AXrPMFSqZUZxkC1j3IXw%2B7nj0uX7IwWUZe9%2F6wteuBL08AT6BfFtE24WVr5UG%2F%2B48jy63Akez5M2DQxFHxeOEh4Fa%2BDegSKHftPqYGtM39nzm74YGfhCFuX6hpkCd8MAt%2BSje9o9cBub2sGdTT4WEwrLzJjbtrdjol8tQNAETt98YMtD6U8qpEIy6OVQ%2Bz%2B9AVELyJ3HrovCBKCxJktUawfuf9A6B2XREfKoFpu%2FMhRLJksXlWArXmim6%2F7dWyZkvP9SF0R6OBELQUM0edOHhGSBrxwYaAra5SHNq8Y2Mpk2%2BRHjqvni8ZM1%2FKSTUWql2FYBFz0CMSdcW26PoGXVjZxh0CyBYkWUlyU%2BFcuBh9I6J4HUoEtXVi0f%2BLNObTNhJv%2FGWhJpOEX8GpK5lS%2F9BEEBLC%2FwEm6n4UeEKP%2BwxbYSdct0DSeTTK9IXbczZV1WoHX12YNh5YzlXqk%2B0SYlczZuiHOMOToxMkGOqUBZRt6kEYThooCG89ebyDxCAgL9JV%2Fnmns72U%2BaCwLK5k0qSVUsUzI4dAV2S84WXmAJ4rOjmBA3OOzlcMrN9BOywPNqx%2BR%2BXDhu2sDMqhOpgh5kkHvOrvFIJ7PtRwp6I4btGvgr64w3Uvb%2FnoRNL%2B0bIp6ORfv6WCRglkTazQqmOVye%2Fh5y%2B%2FrVw%2FHTb%2FH3xHU2Nx1FDFoPZc999i%2FhIZJiD%2B58Mui&X-Amz-Signature=30d2cd4f33d43c7deb54e0e5e8048476515ac8f8c0f86ef2dd4ba0bd82d007a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

