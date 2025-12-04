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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665444HMXN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlv4%2BOcy08OuH4sNskWmMBB1nonFh94LLqQD%2F4kZWe9AiBmYI9c4aPZ%2FUBsQwNjwySYJm0nQjLrxghjpQoAjJRdcCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM6KjbghCHTrCA%2FhWHKtwDi3wkGyNkqiCjR73SPLLp3zC%2FJhzuiECTuXmUIci8pgz9AP16F4V%2FwbKmf7xMdKoU2COBTgrZrAx7A%2F1V9Fw4dvYH6diiMCSGvirVDCf6bwlArg08nra2AgoQKqsXfZXEN9ONN7vD8jtYL2d29h%2BONypPh2LBp4eh5W8kTjcDmhXqp%2FaTR%2BNbqSv7us8URb5qTBr8Xwit1KIAVD%2BichYzNam4BP%2F%2Fq0J9qF7oz8m6BVlmj74IV8A9SfjUJ4RedtC%2FQmqnl4JiXG5vSljTJ%2F9RBZyPlxB%2BJtm%2BeGxgpde4dfiwXSWRYYyBqfUS3JKvVEtP2CvOylmizXl7NYUlrSUiyVNdg%2FIvQxf3njsuSuCEkweI8R%2BExUR7%2B8vT4A%2BrAHAZ5%2B1DYcV6VE7UJXwlYB1SAiGcSQJWm1ZA4TnhZrNbnX5%2FAhG7KFCH%2FocZr5W3%2FJNHUwMau7bzTtBPW9eHnut9qKhafkJ%2BxpfF6u0kiKVc3mosaJ9qZqAkOudvGQCA12wzYxeljb%2F%2B9qCeM9XyZuL0BW2BFgasngAAQnGcQnrBQJIBlGmN8RVqJo9sWLHgy8W%2FCaK26f1kvol3ENrrLrp1ERTcPcvZ19xppLDIo8NAyFgqnQc2f%2FVlBXPDn9Qw1YzIyQY6pgEDShk2gJ3lk5fHkbo%2Fqovf1jCS9R1NIpI4PIXJCKO2RoJyPO9dhU0viApdhDRo6mTz03c4FKa1AZSdeuWR6ENXtRncnobsdqJyxBgHXGutW37vxSYr3f9VOYKLn0LESWn7kX55OeQsh4s5w7FYflBpfVZnjerd2zlGh2cZqR3t95vWrb3DsKoGg7Y2JksAj1keLjtNK%2BKqkeewg5Sfk9gz3IZRh09Q&X-Amz-Signature=b056bf81b303b4473f68c087d8dd32a08decf5b8d9a75fa8e5671873f75633bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

