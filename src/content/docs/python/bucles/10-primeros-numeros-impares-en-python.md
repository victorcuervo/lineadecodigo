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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGMTDSS7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDr4Xww9GBy76eMEzLFiyTDKl8wMIYJBVvUfR148KXXvwIhAP749MR4KV3tpcQgKRJy%2BhUNFGf0iuw9NdM49bJlLCJoKv8DCEEQABoMNjM3NDIzMTgzODA1IgyukqHDgkMhq%2Feyfhcq3AOKumXTsRndJZhXp03hfTkXtLLExwEYBc7coe%2Bqk3gxjyqJflFYHMM4dmnkm3YGznGcy62HAUqVFU6X180eEVuAUQ9KgY6BgHWHpL8u58ofMfY%2FrCbu3rzycy1DrQkBPC11bPQbw8VVSwYPzdw6OYbWpgjmU8achKGTREhGvQD%2FlywT0B2JH4FbqMzCQu%2FWZd13w32AtPE0dL2BKLW3M1StpDhUA%2BmAmTGqYNfrI3XbA22InPRP7zwT9jYR74jjdhSEnjuWgBvjnxQBlUGyiHbs7%2BlmPXG1Axmhfm656K9rzBUXigI8pUm2W2gWdNOc640KAJQmVmTF1LAbGOaJGgqPlf%2BAdBtl6PObKCQu3gbU9aQEkESYysSGo3%2Be%2Bf0VwlcRnoArdI9mTut7wj%2F7SRaHpWr6E3Tu2yNy6juBV1%2FveygKFwzHgC9CHF862ngz8CMHoRqn2DSwwnfEberNAAn%2FkJnIsCDUiiQk%2FW%2F%2B1KauLVhwvCzPDDGrfDw26Jt7%2F13m2AaTowuU16KByHQ3wLp9x37VElrDrqTiISHsVxlNgAYNOoXD5FlGROGLQeRD%2BtFRjak61aeWeYpo93X%2FuFZ%2Fg54p13vBXzJ4JjAElnraILkS%2B2zhaB8xqXxYFjC7hcXJBjqkAYhGRsn2e7cUgXKKSWMW2yg0LH%2FGS8cYtecC4sd%2FiyDP5hGxJPDfG8dQJw8v%2B051HOXIiX7mCgRnva%2Bd8kiRojLPlC8G1PBADk1aZhU5YisIzgUE2011Z0CCSTDiXeU%2FrZRUPsd7o%2FnxU2CTNCVMbczgG36qyn8ZtRMmr29jEVtDi0fI969C2dMkGdx%2Fqri%2FVR7VN4hnu7xK3FbxcIO2PaX0IUFb&X-Amz-Signature=1d2b889fd4d0724e1f1c09e49ea6b436bc951d3a62aa7608971901d990514a69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

