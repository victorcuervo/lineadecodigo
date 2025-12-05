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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WD56ZVI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T162408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChtKBulMz4roAjbBk0oIq8xqBhbDKtIED5hBnv0NI33QIhAOVY5zMledmQeaGHY0bY5fscfiDFBqC9qRTTEE4htu5wKv8DCGEQABoMNjM3NDIzMTgzODA1IgzhUk8XDyN8jhkMukUq3AOaM7XcROk6do9wRDGsimFLwqMPBkuWWF%2BYt4Ap7KRfvjp4vQLBu7C8fxan8exjUegl%2BBsWBHPaTOAQ7H%2F8%2BbRK1BJkqMCJ%2FhG%2Bv8e0aPTu1SoAJEu2WN2XSci83dDPMe5RMQm7hlOmo1d7odpOtoYckIvNoWgHkPqJ9snS%2FkaYngcQogCFDj6o88K5uC%2Fgq5z9BiQq3v52QJbqC2ke4AIv%2Beqxq1D0HUx1y%2FbA6OpUhYYQqr8W%2BRa3bG4niHpnwRzOoRBbPNhEoit%2FCMhKz9z%2FnSUtvYLU5zgHKW5287jd4j2WPSHJ3%2F7SKAt3QeBmeXz3eh0xr6X7MYkiRhJvRwqfEmoiBu2usMA3jzkMRhxK%2BlKP9N78mg6vgdcuT90Wti5ISzPSv%2FeowsonM8LhD996%2BEMG0y0fvE5lNQQBVbZQ1LMi89QzAii6HLiUKEwOfFFBXR5sN7ZGgRBmQot2kHXhi0kVTVw3hxvRvmhr5%2Bd3mwN%2Fw4ZNj%2FhwhKkIlFZnu1PSAswj4Ze6AyTeWaEPYTevL6nxTQcoMluXS3CRMIvXF95xz1ABQ8ArC2VOkUuZ6RPCB25B4AnoV5nCG6XxzH6ocMhTMXh9fCzN%2FF%2FwzCq9f1b7EY2NtJsaFoSOXjCu%2BMvJBjqkAfQSpJ2KDBOWfuwRZa%2FiROOLhZuUNljbGYHRmOXAwmrVm7NqrGY3dZYYfShaTMBu%2Fd9N3DUAs%2FQKt1vSyvc7ARUPf0bB7NsGySrQqcs%2Bk58MIXhhTy%2BenI2oFexalD9OLJEVT32EYyPQGU9R%2Fx95rIMItB2QQ3QPl5rLWTRo3MWLVsI7wqRDtn7kQ17k0v2j%2BxZrJwD8mwuotMR0trJFM23BEqmF&X-Amz-Signature=2397ca92ba74dca0925e9bda5ba69dd752149f6f4ce052e784e708e17d03ea81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

