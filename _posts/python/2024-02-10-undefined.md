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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PK24L3F%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T062039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIGPDTwkUd6tdS8p8J2%2FK19D%2BNBhi1VSlyxFfjUUH8Z36AiBA8QEfFaNfHn3fh46Ibi%2FgN%2BJWE5mNl3vL4ZyehUZhhyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMptG7XepfrY8ea5MHKtwD%2FZr88QaxDhav64wRWuK8leeGJJK%2FJhzgs6AIx5wqVrrCoAl6a2koBNl7P7eViPOAouj4FqD%2FsihnKgRB4PjDk1X8GjQuuoJIcY9kxafNCPO0pUNU85BpxTWnRRvSIdhrTbFARIR5O4vDSsEMFPuKJU8NM3MH4V900J9GyHiSpNWHGdL%2BL0%2B%2BMW3%2BgctYRaE3Ta2dRwFx2R2%2BW5LQPM34SXsJ6cGool2V30f8FhJ0aEErPoqef2eeJtzbNJCxn2Wu%2BTNiIFtf750AxdShHxPMNXdel1uUQZWTvDbb0zpZDCX7WXPw2%2B01kXxahIj6gBZ5MsJAKo%2BXz9RMI0P9T%2BluPghtMtdPTmJ1LSzH3Z8EsccgSfyeUb3PZTeGD1gKn0MPKZfxQJXq4AgdI%2BzCKEE9v8npKRDoucmKzCMJAsilTUh5RjWqkAsi7%2BMB0W7Ry33XzEyzsqAFmio2qoGAU%2FCi9YkjEfsAwNO3R6ozhK1E%2FuI%2BGY4PPryqv20%2B%2FU0PPaFn3XpqnV%2Bv0CO1KUNcNQddKiZkIP1SpoqtcqgGIUOpdtAyhXnY3QD84bk9DZ%2BiaS%2BeCQz3q0ha18CKCuTRwsiuA5pcQfVGSRS49NLGQss9C6XBWEkdX6xXfPvjOp8w3Jq%2FyQY6pgHlpCmSwalDTuabDEMpSRgcX5Jp2%2FxuXjIJuowUlW%2FOFCF%2BQUd%2Fa826IVAPS0TrsNwkG7a7RHRiRxF%2FQ9uVtDUlX5Gx5UcEfXezFE7QEB%2FtPb%2B1GGGP8TApe3obDpY%2Fdj31Uw1xXjg%2F1qHooTXzTieGdUvfY2RWebiA1X5pAJm%2FVWMhNPnbWQ0uEdOoyqiJTwHlBx8QIbpfIRqLaOcrkMcZN7FtuDIE&X-Amz-Signature=ec28a255b54f85f8b0efca202156ede4ef2f770994aee3953832be481522b139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

