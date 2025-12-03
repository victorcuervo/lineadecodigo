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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466553N43Z6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T100722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCFxy6DnODwCfv%2BJqwkGfxby9kLEmTwCZq%2BZlzsWxmMkwIgf3X54a%2BQt4jWs8H9enLFaN022Nyem%2F%2F7N8RHhv19IQIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDDvhOT3asqBym9BofircAw2xRPQGcn5iJrb4WQAWoQ80yIDQsHKUTMfgPb%2FHg%2BC3NfqLqZWBIgupE4N9V9lb2eQ2z292sBqKrDW4EI36tcXSRo7PaQSXIeUFk%2FFfTW7M0QBN2ls25nVrTMm3lF2Fqyml7XMvkayBI4Ce7EMB0EGv7bu2TxYiGylPEeiW0qbnTrGmkfre5herT6ogs5BnRJ5bLG%2BO4gTEGVWDszst4OD0IC7vEYC2ne7InFWKk2ayn%2Ba79l23X12bW%2BJEfMveLI4OTHuriMF0f2INzZ9S3SKmw3eA7T77%2Bt5Dsd9iU9NeHz60qyBxDhcHDdLxqKQZ8ir1bszFZx9z2Pfw3yzhNz%2Fo6fgKr7%2BP7Actue2wM8PDza5iCeR0ZEM%2BFdKgdUd%2FpGnjPCB6%2FeDGebTZ4xYoqlyi%2BqKqthKGrM4qd0JhKfNaPlH8rrCqNp9N%2Fj%2Fb6kpqLHwxDD%2FIU8KX2U1G7vFXgm9juEce935Wj0vIGJbGIaIK4C%2B%2FFjMfu5KOpg2r8Xuzf0GC27cuZM7RmHoksKxyCGx9acS8D%2BaoJhkdOGRPOZwVELi1uwGv%2BCOxkcSvthGX8Y213QMtM3RR7jy7xYyOqS7NoObVTvCrqtejwagGflJjbIKNvQNJi%2FzgsNnbMJiTwMkGOqUBi49q1Arpt%2BYWSde%2ByXBxt4%2FnjAdct5Fs3VvRpO1fznbx8eI%2B2fgnYt8pDJ5y7cWTvl%2FlIfQDGYo0vlGFEcf1JEayFW%2BdmE4RXpMMwI9jAMosfwoZtV8R3WxaDm6wJz4faQYtyZKxZIz4RizG9GIQ68FLT9LWX89D0pHfQzdRnlCZOkwhI4Ou9wLvHHsLz4cWe7TpJs3t%2BTRl6xkDKCXEDMdYqD5p&X-Amz-Signature=20002d72dbdcafa2502bfead93d3bf17e0c52f37e96a6aa4c8ba278dd8bc4dda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

