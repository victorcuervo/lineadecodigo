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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE7NN2HE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T120155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWjT5TjVzBnIHCug6N%2BgN53Uop0qY3mB7YKZwVoH4urAiB5mF3v7iui7VoSNqzkjeyaMkHidSVHAgHOVgMgEC8DkyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsbp%2B0V0M%2BoQuMGboKtwDC2j8SV32F%2Bcr%2FBVrlbohFrUCe35lIjFfqxhowcRi7dUYGxMFXX2oUj%2B64Togc4GX4lXv4NEd%2F8MhcCRIo8xzXvIlA7oMrxHtHiWVMp40T4mXkUr997EizdOuwhZ679BbpWZbwyrJvGvl%2Bej6t9w0jCSILNypNwhu1dJ9%2FEVwuDElfb6rocB5NLNnZJOIP1h4X5cd4N6zpsLEVTyOI6uSigDZDOWpvoMTbrHHywT5O6Z0vZ7Z0C5tbUTjJFDnXQaNTE5PO8VJHzQ6GY23NwCppWUDHnB%2FJeggkWReRO5KI18U%2Bz9hparXAvjgNbwn5ptp3RxBiu1Nx%2FuL7%2Fi6QS3y0VeCTdAhmxoY0SJs3sdZjbDsny3xH8rA65YPRucGjq6XGn7vLJw5MICzHj9kD5l2raAyf16lD1zgpu0EVXxZer33m%2BQBSMGpVJUK6p80SlaC0rTo7o2IUoiUdT1NAvG4HqXvRYxo7thrtNwuEtP81C%2BVQNh1AKGFt5%2Fotfv5qvte8hQK1sN9JBQ6DeV5fl%2Bl59u9922aMs%2Fwn%2FwiNTSHG851BWuUNa3ZNG8AF%2B7UEL24%2BE9EXRVgYU%2FqkhDW2gXZUjCF25SA9Z1vvPlk7LCMbnwOmVB8umRZ9uuv%2BbswlZrVyQY6pgHnct5puyBtGg%2BeDH0mLI1PM0%2BUjoh9zWjVX6BSx7nzXeB8ob7IluyzZY6UHcavbWDpacd52BDMS08%2FgvBtUYPDfEHmTIW7%2F7CWqhOr1NJEV0V4ncuB1Ww8IEZ3EKdrEqtcDHGCCC89noOhyAmfHbSSnqgIvbDULlbCi2Z%2BGUgHkwTMfrjh4ZxnEQo4uNI9FHteYSdIVeqvQye0cJnbAf%2BtviNg9wJQ&X-Amz-Signature=62df7870fa9de59aa762bc8e01067950c11e56a1e2c22380c3e59f6cc787184d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

