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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TROT3WNT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIBKz7vdQnhVnj3Q1gpn%2BQLqkSANXo%2BEvSxcfiZbG97%2BFAiA2gAnuClYHOvO7f6NH7j4sQa1GALjdS%2FRmLW%2F2bhLnmyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMZab9L1PTkgCFKoXhKtwDmYlYUyQTnBuDE17WXQDNGTOGgx%2FeytgTIIbODHpnpQFZEM6IGT%2BW55oiN4yTWZWD%2FmBRXYQXicpQ5U63gYF1oL0P8mrgwo61xztKvWxMAx0yLGMcWy8F5CAN%2B7zJeVl%2FUUbMG9uAaTCBhgrd%2FGw9%2FynthMuQZ4O7hBU5VbHsJviqL8LSLaaRUghhyjEvMVC5A5LdipOEzrSGNfb3fIBMCg3Xn9BCoQXfCo01Eg4CUxPmYkHC5id7ADv6wmPk5d4SBRz90Fcr8WdIkmJ7BbX0JGeIzlgVKcNL7iGLbDZ4lLKn4mI%2BuihBR7fUH2s6f9aTQP%2Bb2U43hOtnoT90oJcEezLAMzMFskc57TAAM9z9XXtZFPXNg0m2pubrVVGF%2FYU8zre%2BzLZWSFd18EHp55y3gieeF%2Fbf4IeGFhmGmQ%2FVP9VS1twTgN6w4OOBsS1laGi2z0WSgYngIZM%2BmfYxu3XlvZwLuezjmmguX0lUtdUmIZq93fufouoKCapxBaC1CDvwmpm2202EU4EBfe%2BHLjqKNRL8XiUgrVsYNgtX4fYwhou2VZ%2BWjdisKuJdbUVp0uORYC90fp0FmKWJxU6JLzxeg58m1iaaxHTt2Jz63%2BQ0uagBSCGxJt6KA%2BiKKL0wtefEyQY6pgFxmJVy4MQJ%2FLdzFLAUaF7mjwKqGo2K7UKPLx%2F%2B52n4s52y7wMgsUOVA339VqERpaKMhmTeCvlT18C63zYamodf2QLOAB7HKecqzxHIM%2BhVecWmnFPEHlAOj6bTM1un%2Bg6YXIgqmX31oU4ETr%2F6o4scAjS4H%2FYO9y%2Bx010ieVuhlPRYFVVEvSKiPjr%2FcG1UnG0wIbP8zSmg28zdj8sONahVnU9N6c%2BU&X-Amz-Signature=d456948bee8b744b847c80e2360892eb54f3d6582083d2438b6a846e36cb33b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

