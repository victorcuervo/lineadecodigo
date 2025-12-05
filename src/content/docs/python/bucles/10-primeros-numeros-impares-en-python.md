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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PWC67Y4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T152341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9uI1GojsFJMUktWU0fShON2d16Ish19yd%2FgZO41UN4AiEA3Zbbw0NtkDT4gB6VGKqR8wUQ6Iq8Sp0h7gvyYd%2Bgceoq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDIb4dECid0Efk0EKOircA1bDmUnVeOZe%2BDbiJUJy7XKAIVzoW62CS5UPW3BOAnXCya%2FVR%2Fr0bgrLm%2BLJxfGOK1m1BT%2F2BsJ4RxlUuS6tqB2WuBwBmokQg0QN2Oakh0c8UFyODiSrUH%2FDn7LWJUPu0o1qa5kriJAMaQj3aOAqVfrRIBgPxRCrNoA7sDxauTpvTq4OVmdJzmk%2FxImrH7DLpmp%2BHi2M39W8xgvZp%2BJ4edXBQann%2FidOnrsd4VpQubwTmSQsfceF3512dhlaitxZ8AyIJ%2BsY45XqwGu92A9YqT0LT1AQgblT9Qds%2FrjfUQY9NXR5ROu158jTq6re0HWIZjuJbfoVD0F%2BgY5UHOqiKaYWNqBqi8phgAUxNL6LEAoxs6mesVcvyHmxhuSfRJ41rBYUrUAPLlgI5kMUrZI3Bca%2B141QZ%2BLZqB5RUrm5oAgYMvX4n%2FwXW5DpFcj5j4TFUA6kda%2FZAv0myWeGIJstiFSwru8PIp2sifYUTW9jfOipqz%2BvsZS6KxxpUbaw5b4IoMmD06BOKldXkNLbD4Wab4Ew6mSWg5uCNEoz8SARy2nPy25OgOASs8EzvyHVTkwpMghlhA6D0rdRvIzHXvBZdCSUwf6D0AAUJtAWCZ65fpON5PZUqE343jejzc8FMKrey8kGOqUBwFugu3v2OxoxxGAQ9pp7iV4M3XWIervu1XS5z0FNefJHzCqybZisaZS2whZZYdoVK7uljGuCvnfYpff62fsjM%2FOKJhXLZfYk9XMjqhhHYu4TNGWc7OMkUrBdAgwIjen9Ij8k1RHkKxr7VzfOhgs3U205QvxMiOTlnJ0ix8r%2Bjy8phcF8qegpIByKSjjbpsMP5ehLPJUGXrLowl1WW3Uu726uFL5x&X-Amz-Signature=e74a3018871c60faa675046d4c1260a98f242b6645d3849dc0c70e212d697f37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

