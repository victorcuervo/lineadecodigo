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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KCMA667%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T125048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDRqMGFDE0PpgC7SLvFLqBoV81h0Vq1tolcUPKLKDOw2gIgA9ecGkq1J10gEbL0jUWpBgnknA%2B1l9s6u6UApPxL6acq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDM%2Bp6Yv9c2t0p6KB%2ByrcA8XYZfEspNBBXr0yx4%2B%2BGhf95dR5NVV1v0FvfD96Qlhx3KFiaB8yfU%2Bgm4a6mTNCwAGDJtU42%2FqhIH7bxLoD4tO0DVk1j9NOQuitAvV8Cuy3wBoMYopv7TE4zT2DrAD%2BCXnWi34lJyuLaFIUbkViKNS4Puw6XdPrgSAU7usZvLor8juaWeoiz9Grm0Pl%2BgMCO8zlepklk90ZXPLKaoZSVE35Uex5GImli8CMqSl3VfK%2FUyehs2tuU%2B8U4NJqbL24BSdo7Ttw5%2FWFbW5b%2B%2FGj%2B%2FwabwjV4z%2F7NcofjEClSG4ag2dibxiJXXMoQRde80pLcBUxtvseMrFDKOVIoQ2OxM3GPZ%2FM1Fecg7fiuUJRYideASX7iH15ykKk7IClIo26LZ8bwfYFZmV3ygx2OtaEX%2FI6SfmXqjo8GRvVL0koYhZtz64OTB%2BpKqJThUHhgRsvd9FbJXrnx0QUbYOkZPJa0DwHEMrhXFJwKIOYKYY8xuzXHhZGl87DsTejx%2FbpfeYrO7q0eFtGu%2FOkpX726AasyGZaNiD7ppsMRLexRrrh2fZExS9v8fUxCSW5sJdPOy%2FkoU4oFTH1V9msg52bsX0WsOCyETMY1ZyEx8XOoPdGOkwelUbJhWglg3NUlGMUMOnMwMkGOqUB8v0QJLSRhWbMZWzlc1jKUYsOikoDYlT1NHyenDu%2BNCtEVkzhplLYY3m5BhIwMdmM5n2CmeAr9AuNfbrpt675ojLjYjBTDrQilvyzxPra6qyM8D4pDGnHS6jrRtycK9MaEqaUwmMF2EfUsUvh7savqLshDO0%2F%2BLSObIJaLj2ddSSyyljxhSV17ukXF5jD0PKdhc%2Bjz9KUpDo9hDGhAj%2FoOy7JG6Vc&X-Amz-Signature=791df12b911458dde2c7c6e8eea9ee2e93b1e9575b3443690f8e3c649991bac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

