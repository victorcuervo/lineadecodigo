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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI6IEKBY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCgtPc0t%2Fx9p1OSb9bsmfildZkpvo3WWYBFWh3XKvNitwIgPga55GQXKm49PHUmCXxygQ3SEVKuvwjWhpbqDVGkmYcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDB1ywN5eOWWPpXC3QSrcA88ESsyuJuJ%2F2UUOAecdzLuUZRYyir%2BKn9esNu2Po4iHzQ%2BhMNLXNyBLofNiJ06Wr2Fmtxlc%2F7Cf8%2B6naymD7hPA%2BqcsoGt7%2FxHu%2BZ%2B44LPn9Stm7qVqvenv9jXFxreUzkjn5am%2Be48jQLRds7d6OY1i9afaglfyMFHjjmp4sLDK0CASkL6O9Ys2ufljnyP0NU1AWJQ7HfOq3ACgUnHYvps8x8NwpP8ZmH8bomyjM0fKJetYvQMNMJX%2BIe8GK6fo%2FVIj5nyMnTL7hQN22OCAnqP1KlSfHQfABQea0%2F6y7%2FE1rkx9KQfA0CAdYCVF2NQp7Sum5s5Vu3V7Hh0bnh9x4yWoV4YemkezutENGDDg0dT1Dk1t71XDjk%2BFOQ06gfP6T9XgR4jUwOPXh58%2FRLToi4fE%2BG2tkksVrsMJPZ%2FE7uiAVQ4YtZKLxDqFmkcN983tyo0q4mx%2B6Ynw33K%2Fy3DxAzjNfz8ANimX28tvGxjF6r%2BiLQllIH84mxl0iq%2FpxehmvZ3uttEDWxry7vhST2R60XetYZs4SHk17%2BmqKupyj9Y2p6wF1jekkjqbfFcOdunm7EvrzEgYmyISKzXb%2B1uycpEWvxcjMX%2BPdgpoyaTa016j7yJFGz6jfVExt0kJMO3Uw8kGOqUB289lfYyrUlnXLpY3XtCN2cu4P9Z3Ebwct4YDRfQNH4mxCyMWdNBqPWTs6QscxwLcURg70YzlfEOXOpY01qS5%2Fzg6dsELJzg0X152pdiEm9WsVHUdAlVF5ECrifNu5pRPpJpqBjvaDPDa%2B8mhUXbRv%2Bf2TgzCZURGLNtcs6No6rC1FRv9DDV1Es%2F%2FqC%2FBmFrWWCp15KdK4YZJ%2FIK3x16U1tlnYXVS&X-Amz-Signature=8671666115f4e02fef386c10d4215ceffd5c654bbe81dcd1f4cd3fc15556c7e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

