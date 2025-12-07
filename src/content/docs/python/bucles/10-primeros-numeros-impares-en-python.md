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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ76V7X3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T062935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx1hU4Krb9BjsshJnSlrXhUaaM6v%2F39bl22NaS1NzrgQIgSD7ZHWyKGFxyQqD6CAwiZyrN%2Bem8Z1wwzvkCWgEdOr8qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlgaGQgzPWi63mj%2BircA5LeIo4o%2BU7s53sqIz5FJSb6mZBK2mXTGLjO7ZQ6PNKYmoSmoTzQycufNaZVpEjTQEDY5MnEVujeOgJC%2F120OyC9edi7zt7n9WTARcPhzivGi%2FurBPHuKAdF3Yy0ar75KARdDY4KCCc%2FLyOAVm%2B71%2Bh2QHG%2B4DhkSVp36Z%2Fsvx%2FiFXPo6UFJyRH8k5Ro7J8ZOSBJwDMBh9UQkKjvn%2BffHtyiSq%2BvmdlwZtpgzHiTMFOZ0stgTLPyU1WTl73ScogmaXsSb3J83pAF9%2FxXdX9CZ%2FGuoJUP33VRFnFBa16kd54%2FRlNACMWqh57nhpeHPoTwHZpa9Fz6lsyCNw4l8Og0DuUeHysQZGLZJoYTsZv3N94E%2BcVtBQ%2B5Q1AeweaGMD6qOKtZS6%2BBslyyIopmhbmMg3073lwFobUGmYhGNQR4DcPQ2wiNQ4iLzD0stDDs%2FhcD2okn6uQCGcO4t%2FlUMfdC4oNaocsz7Wxwwf4j6f7VPuldxfHtt7CuuwQAp7jnEB%2FWwcFWZuqsWIcAUvq0MGyjy53ADA7SM0m7Jes1KTuWxyhOemutbePhLvGOLxxhYQnQJ7bSbTQuyYjcKX1FhBwKdb7HhVRjqJm2V6chLbiIHQ9V5QQsAy%2F1ClkEaSIFMKWZ1MkGOqUB1eTC3bYo03P1bNtJi%2FLOmAIekdRzA4OsU8nT8l5KX5aEtvelJAykHsKq1WNdBXkPdL6K66tovVzDXKmdZ4uP7unrb3DQhB%2BDzg8THRk7cZTMYReNk2BKsVqG%2BOSzKoSh5Mz%2BEbcuY8pD04f6LvcgkBdR%2FRdJs6KjLTxFD%2FH0eHF6DRime00khE0PEe7umARC6T3%2FTPuAtBEaAaLB%2FAvOp2otsVDi&X-Amz-Signature=f8f46d7f14eedf95d5074b4ae73fa3afa772ccc72e5214255a3e86bd00396aa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

