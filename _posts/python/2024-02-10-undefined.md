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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O435XXT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T124921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIH5%2FPFYTy%2BCRmcUArE9rNTe3ROugi%2BYFkFkLSgth6l3PAiBAdze9H8Aw5eNERRAwgBztzg17vqUEyasokAkG%2B2lK1Sr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMDap2ghni%2FcGT9E1zKtwDqKViTYZ9AWFB7iI9BDW8Exmr36mxxWXZyCoxzDKDu0h2kA7Ea4F9vvH%2BAc3f35hSeDbnlGIHMlr97Aos080Bv5wRm7w2av2HPKCZq3DOf4dGViadv2K8JbzFgOTza9qVfTRK2XKJdkn5PQHDFHN0%2BwSg1UTpInH3GFCB2pdcTYzqFsdUYvfYmy2sBS1DpEWidjcAUnrJdtmwoUbwQ55P0%2FOJU%2ByGLlp8JVPl03P2CqUHwvaE9BIGitfEltuwYhBvNrlLGk2gf8Sx6opgUwRl4jV6WPMzF3UqpsNcAYCirQMVotTd8L0tyiRt99bvxqQj6p5x7CBrxNK1PUFnShHLWD6jNsfBISXv8RINfxTRNpD%2F%2BxCQRvo0DAG15sElIeB%2B%2Ffbkz1KW1gKje2W%2FldWtcfSmDcLGhVmc8WwKdM%2F1u40qoYH5EJ%2FBq5XUt8Zy7uL6rEIx0xvvp9nSisb3MVkcDB5cL3mzv4ajpcKS8BgA0y3dvGwULSJyr%2BcNTAtISWAJW%2FprlgpC%2FEkPFqpLGOIEYAOJgozUI1GqBsxgrdVwkupsiNDILkYD235pOlLbw8xqb358TVfw5qEj48W1JfTs3afnY1f481EIQOz6pIqnhDIka4DCj8sLs3IJXjMw98zAyQY6pgF21VboR5t6Z7knsF4TFRh0RhNcsJ5VlN0FbYguuOPBf58YyQLSytizB3TeROAEeIf81nLr9TbszpWF8HHfI3sDlNS4u20mSo7iXTX71MIDcah42HZJPpD1IZGA90zX2IBrPCywNsXP32udKS%2F7wlz%2Bx9p3vpfRlL9WKhA3Xn4AR8TExjRH3cnoOlq%2FA1KSuBAmLLRu0VXNmLWTt%2FiVlTD70jP9aCe1&X-Amz-Signature=226a301e73383475844bf9486dca9cc42ac9640b5589d8f4e93fe06d27597b25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

