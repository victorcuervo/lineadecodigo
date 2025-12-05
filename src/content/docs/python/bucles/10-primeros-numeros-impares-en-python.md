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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7NUHZ5B%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T052314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgeL8H%2B%2BqCP6MAS%2FSnk%2BImXr2xHNWfIZTZoKqyc4X42QIhAPcD9K8X8Ze1DG3HotngMFZqKUdB%2BpgAdYlFd0xuzemBKv8DCFUQABoMNjM3NDIzMTgzODA1IgyD%2B2a17Go%2Fro4EKokq3AMvx1inVYdZ9OsXBy6xBsie%2F7Pvkxf7ruA2K5IIowgAOJuZ5z7YQlGjX1xJ8mU%2BQM7kH2DnSEp%2BZEzVcQEQqnnpJhQ1YQY1P5MlVsjhLMbL5x%2BKIdSKNf4MXpjnVi%2BL1924LueDEKLiRVlNlEfFJdH1T%2FXiE5arFQJ%2FgtKaNUJmAcbs9IzOBOsiAo1XrMrP3Moq%2Fn2pGwU7ux6o0ULHuw87fgsNbDPcRy3WVF2D%2FcOwNazbt4N0SXfQggDJQn2WAaJf0BZH0W%2Bhusl7w44h28ZmkCfV3TKp3hoa45fLrpeXdX6R1nFAMbSRG5eySNvONoTDQuT1PZWqV6HzDPP8PbwXGp3BQuC86YZ1FsjrcaiVmxpIJmAQRE4dU0Z%2BweVLt3kyD8Yj4ZAVZso7XaTUSyVEbwlJIn8dOL%2FpX3Si8TVpFOuyKgbNeZ4KzONCUYBkZI2DTizJpTcN1xOjDb6WhU4B5sAjIbCN8KNPQ81trKAr5Xf9Vk01uL%2FSfULlVDHCkevBg0kdXivSSGAHIIvRqdJA1d7lha8XEGF%2FnBDXvn6HjB5Od92i8Lznzlt%2FY%2F6aQALjANoYiALypnqap8MjBY0rhz6sIpYzNe6yulmDTGmic5iW3A0IiFbcZ7Mz7jDWsMnJBjqkARjxvriNsvEtGbl2oMohvahBPb7hHW2dEUmTuWK7WcFnz%2FQSabeji2qsPvgzHBKrilAIF42G4gw2Cz6q8e7wpHOSDQsTjvGr3GgOtZkF6n4qeoHP5E0EKxf9v73ZZ925dT4Yjb3hFp8wT7Lq%2B%2BDLhMZygma1HlM602XT1CAJd6g1YzgLeCOtOlGcyKVBo5wR2%2B%2FKtyI8bh0Isodh3MB1DXEY2fYX&X-Amz-Signature=ee81a173d8eb2db829c5ed23286478fa27da6ff9933b8306295ffa549d6d1a39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

