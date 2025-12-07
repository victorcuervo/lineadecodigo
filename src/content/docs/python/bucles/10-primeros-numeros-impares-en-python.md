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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V64JBJ7T%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T084920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQ5iRPyhRPUq27cSPSr%2FZo8BWdZoOKDfvYRlosPgMrOAiEAhjMTG%2FTQnQgFrpvj30QYZLQ9xeIb3u8V63P0ZrqR3fMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2BVwJydxwxzOkbq8yrcA4ZioEydw2NmWxNRL%2BFP9SrK4RDLsVR9gdmBnOXUm%2BrZNA1OLI2kTqwwbzKg1ZZCoKLfuoftFadtyP4%2BRGV2RmWT2B3hlnkfPw5KI7rB5Z%2FUN3PvaPVMgMSWXz%2BP5xL2aXWwCrdaUcPGGIyQ4uu0MbPM7TIPr9uIFNZeTnU4RjYrGwPOJyKBYpV0QlZFtMsHQZXkwhHEGvsSB8JWZDb1K1yo%2B%2BZ0g7hxh2ej9Jsg1BRtiHNEIapfgGawePxX3ESslOpnQI72o87k4gHKraltBTFF3zMLWWVLl%2Fu2DhgMdnHckBfLtP6hU7LiXJ0VutO8sFuNGmRtk3ZOTpQTjX5kmCjBkHYyYAjqCwGWccWq4u9T3YqXhSYfV8pZIi%2FmeWWuqDXw2HGFlfDEnL2Xddtlf7FP7N1EyHlsQ3fgGXFyzp%2Ffj%2B8V%2BWEqWKNQ8USGFKISpb5ALevpvZAKKNS6pZhmftCiDE96A8uC6T93Z9xpV6MjGYTcw2TnCujL7TYBuWeqwS3a7IdwM2bShtni%2FZe5fGIdeVx34bsZb3rYwc9WFDB5AkSb7%2F0zRs%2BJbclV%2FdUwguLHxSe0GtqocFy%2FcPYGalQKKPzZsxc7zVriXPej0DFqHGdy4r%2B5umqiydmnMJGd1MkGOqUBvdsI4cEcnON0J79p5zxlZVZFGqGLWgEC0Cm%2BnAH8C5uXq8U%2FQxfR6Oh%2Fc%2F5%2FgAWOr38TlcONH8mjlxQK%2F%2FjdvGc8KCFpxj5x5taBqF%2B5sQlp7%2FbK6X%2Fn5yvePSdKdadyc5PF9YAj1RKCY3Zpu42U9k4EJXhYd%2BXlArisRjSbo1%2FLNKMfTmUKG88Kphfu3fu%2FiG%2Frf9dmwuS8e8xDKA5fI5uR1aWn&X-Amz-Signature=17dd4182d21ebe77893bc35045c867490389465b90c5dd269cf6ece4a6f4af50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

