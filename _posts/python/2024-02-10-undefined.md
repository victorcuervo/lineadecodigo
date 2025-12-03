---
layout: post
title: 10 primeros números impares en Python
excerpt: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
categories: Python
tags: [python básicos,python bucles]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USZFDBZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T050701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDpGPFsDgCe8P5mWGJ4eHXgzX36FoOxHoYhXBY2hXuMdwIhAOsaj5e57gksOGk4l4dC2OOzYkcE7aGI3wwX2zltrwKmKv8DCCIQABoMNjM3NDIzMTgzODA1IgxS5X1onqbJPq4pqKYq3APgFcrqp5D7H7TGwXUWai7BAp0Pkj68kcpvjwpL%2FG%2BjksgRpiDgDET8fiaUSwz7bgo4hxyCdkdo%2BpXfwVkf3SOt8rcXBQdAdTYx0TenucfSC3XY0lL9Xx2p2aS%2BAliQTDcuoCSyXm7%2BhjyiKa8Y0A%2BSNfaKO4WMDOBm7iPN2rGzm%2FHSRXcCsaF7YES%2FT%2FjaBlLqUzkrAkN4QQ2S9YD%2FebAY61iPhVLsMv7sDI5s4k%2FVPOE8X23r6EGQ%2B8zI4kG8WCbtY%2BAp5f35JND3kyC6QrvKeYwrB0gUIx5%2BvQ9HK8nFhGKQnEDX8Ert54YqHVYi1hIkN1m92O%2F%2FDCZUQ%2Bc030l2oCJ0gLsrTUn%2Bm8Rt9I72xdbB1ZucpVUCa6LMfi%2BDTNb9%2BERcfgOerEOq90ynuI3j8ZZyBfNzvg3Nou%2FXeObDSlslhvv3KQBe92BttNPkpNV7cIJGvSjn3JqFHAgACDCeWcRXP6L%2BbfVWEqJ3rek%2FPFOBffpOEC5wLYIx224SVbkBNmYc5GkGa7fDxjXD8DpnjWKtFVt5m1gJBia1SxGXM1SAS9tIYiSy7dN0cKLQ4JWdGKCOXmKp0gRaJ83trpb9LUR4JBF%2Bk%2BfJvXUWowQR3A6U%2F%2Fan1QaHi2SYsjDjlr7JBjqkARrXFU6XROBxMs5fITQh1qrnXIIGP7Hhk670fl5sCEfn%2BBIk41JA0RRHkowFK1ykyJIZcucAYURlYcxNNHiutJWUskcL%2Fa1s74O2pusbMZd7GSkilPrj3%2FZzqltHPbJDig3P1nJFMSpX0D2%2FEZnFL66LO%2BXmupUXxorp3caUGEn6ncU5bt8LdHGmWClWMxU%2Bvx84N9RC4ZidyG59TxvAqyezla9p&X-Amz-Signature=c34bdc684647e54d7c16c9829c6368b9c38360593ab0d86966ee7c8cee1d40a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

