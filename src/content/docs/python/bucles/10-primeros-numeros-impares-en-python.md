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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJKTCZG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCThP1bP%2FIbuJBcothXGudYyRUC8AgiOyLJiw7wz23ZqwIhAIlVyi9n8YWLtf5baX0Q0CfpAyeTyy97S1V4%2BaFdkWi8Kv8DCG8QABoMNjM3NDIzMTgzODA1IgxpHCxH%2FdLLezTh5Hgq3AP%2BNBYdlyvvibcno%2BCLZTgCZQDqg4Jb43880lI03JX8AlYhy8I%2FQREf482xSB0euGq1fZqqVvrnWWRasrNE3FlOTJSpnCbTw0tSESY32%2FcZBuxUdSREdA0UmuNkPCIVtpVTIqp%2FybWBPTltlVu2BQXG%2B2%2F1STTtNs9rUxFT01HfK3EJRsEvA%2BxjJN0rw6o%2FsyXcYgJrTobxzvId2ZE6%2B9LSvc8HQpLxzzgipoS9TAq%2FmG9V7W1wOpqPozySY5b7My9YLJpIZV%2F0eY6ToKrfzesaK4%2BXt%2BTMTCgrYxI4liDugsZB176mXRw9gc6OMEYBGvdD97PF2GZR2kDNG35DjSAVrD%2Fx5hi5skleg3E%2BP5tewgCyYqzDKEV78QYsMgxyeoGR5K01kjElMU2ComhDpq6Zqfwpbw3Nysix3dxOSPZjdB0PqVhbRKjyeB%2Bhjk4N%2FkpXCLOrCFK8VuH9Eei%2BzKvUblRGcB4V8U%2FLn%2B7sWIMqtfP4FZMUBLLTAQJYbrwkotQ%2B73%2F2euQzEvwO73Dlz6Ru1UrTejL00v%2BtxIWfBHbZd8LYzjTag9v54iQ0wfrYaxZ0VZAx7fRM2RixoMaRyqd%2F2fcZOnVefc%2B4LZtRkE%2Ft49v%2BlnfMaokrKf0LOTDz%2FM7JBjqkAczQKPVrdTrczk%2BagH8A4witgDq9RS7AshgyY8hztHp9HcG4gAPfUQN%2BtpjwZdWPl7UUN2GMXso5Lfjsi6TSOcNFXcEDv%2BK2oOyDa7GnRk7OoJtlko%2B81%2F2q5GjlVh9UdVi%2F2fqotWyzkni7mpWP1ZJD2hhcEMACTbUEIasGbDBqAfsy%2FnRU92GGDbQsx1T3tO5XiiKQIr0mKCdrfPFerqfA5%2FDP&X-Amz-Signature=2d00cad7fdc516ba3a7ab9fe26942995f2055b03c97cdbe4a66ad01899d5e845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

