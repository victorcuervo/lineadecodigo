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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNF5LS6C%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T174743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIAGC6Ir5KNFnYfnOGCAo1XQl8DNqFcVy5sQoP3K4%2FJW5AiBnegR%2B6Bq7M4rfHTUKLw8zEahyglauCSCAiMu%2FuLrrESr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMQ8tX25mQdB30t1NoKtwDtmV8YnwQ3oEvg53eQC%2FDeyCs9R5JEgw9%2BuD%2BLBJZnXg50LB9zsrUam2UvYXtf5I1n%2BGpRo%2BpevqRGWNDbYwaRA5fjEm0Jr1ca6WAIJMGJ2nZ7R1FckcL%2Bu%2F4kl7agqZBrN2VY2Tb7zJYRJ9q9fP8C99caEWyoKBp3EwGeR4SsyTj0Rw04aokrtR%2FiY5459aQeiq1lx76m2FveG9umGTpTN6gTJFGH9lYqETERTSbNfcBt9IGT324WLMg74pwM6UCPqvGfq1FX5rYmOi0AdDnR79opO1UtDPJNCDq3S2ud89zHWCJxTBcL5kX63NZn9yi6A4OBKyNsvryEQYcQrGhElZuWRyeYnrrMlPSnljK1Bg9Sj%2FrKrR9Q0%2FWeW3RnW%2F88NHgCEkw1%2F42E1%2B4VvOcobaScMrJRDwDOKGWpn2OawVkbPG3ScBNFEiDwlevXVC9WFKKgVcHqcSX5T4j7GT8J24B9p1SO6dPX%2FYsCLH8zsWPRJ48t279MpsZ4ZSopGJYpzc7zMPjQIfkJvH8H47%2FKD%2BkwXw8U0DIXTxYjsVXJtrMSjNQ3UQGMbOyCJY3uP9nXhshteTMCE8pWTCzrmzdHE7cUBvLrnZ%2FdpU%2FVCQ1OWWsYkZJUQasTatAWrAwqNrByQY6pgEVgZto3%2BsIH7RCfZAsCjPHwur0JzwijXZPNKQn3WNLHd8k2KuatKxqrlgjB0a9oh1eH3jfHt3n4ph1NqUd22QzJenouZHlvfVq4KC5ZmeYcuFdzEqS3K4SqemUUpoYlG4VerHQfezSqxQUnpQAH5%2BD%2FmERilnY1KV7z0DPmxBAjhagmS0fdeV8Tb1oIFWs4XPXkYH8M0ZfNa9pYAnG0fohLjrzoEA8&X-Amz-Signature=9b8aa197d3c00699c9f4c66560719ef851e655f1fdabedaea4ae4c6e584956a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

