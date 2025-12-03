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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEVIVERN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T153043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIHJWJq3iIgMLOECFjeT9iq8nqxRvNCMGw5MQJSeAdajnAiAgTbAmUlA9Sb85hejKlq9e6dRGGtXprqi5j8DP5CiAair%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMD50jW04lWrPpjqKyKtwDIhWIUM%2F0HnuRTJAD0Ttg0PDHLZ%2Bc7wRbengGmEgbpLdJVYPyzZ0dQ0UsLr%2BjkB1jYU7gQHaD8RyLSmj1Xt4OXMawD8SbvV2IlawcdtMjvxkHfbNr3HHrkfU8gx3QZvVMZSPrDsI1Nvk%2BH4hjzVy6BxE6j9UVhUe5WKHvkPTzw9rSyjZO8RtktSNQxo7lXDYwL4kEMNeg46W7yhl9KeudUE%2BgAvsnhUHYOvrzf8Gx%2B7DDhtsjI%2F3McfakQjz9UhreBW0Lo5YQLvuB67%2BvBcETLFhQik0C6Y35ftC4jGnTCADqukUDGzKbTd8s21yF8tbDU6%2BXpRfNLgSlU0sU0iy0mYwjbrM3r4Z3KXa32QgSp6yMDo8hcLUUqu%2Fo6%2BkaxpcoQuvk4NqHhnpmY8Gx4RkCSx6L7XDFTyUmWKgWhpNUsEObOog40ayRkq6kVqeFm2qRKjwqf%2BjozZrU3014NP34OuGGrjL81xxMAfWwpkJGIvSwRghvmQ8VeVoouINM%2BDrvZ3%2BYZZKL5iC6hFEDC43vBGvQP357zmxIs6r5WmQ%2F%2BpTAvQZAvFwii6L36YT6cESPEzV%2BaqO8KRvEMnTkl4G1JfjqKjT1dm3Ea%2B60MNKaWI8T7JqScIRTjm3OuV0wxKXByQY6pgEmOmE07t%2BgEc78X08zUtMOTfk178bi4FSMq8tkqAAKMG4JedXWCnx0%2B6q6p7NArO72XrtwXyXMClys43uZTPJjjqqTU%2Fwv70BHKLYU0cC3njaKq6WfSGMnDc5eTxVzm3rqWjYG%2BNot3%2B1bgfpgH3e%2BQxEsC2vKsTW8c2Y2a2QjcTK2yXBWcVYjYaZQO5s4F%2FtdJJ%2FYLljt%2BXM0bc5gNVDDCIAfQEUK&X-Amz-Signature=efdd48686d5a7464457444cfc15ba2632e274eddf438aa2ece8a15ebbbfb7282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

