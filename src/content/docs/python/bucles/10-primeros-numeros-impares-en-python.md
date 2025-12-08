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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWVG7H6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T210326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPsWmQCxrrZmJdpFajzIb7rI0Cccv%2BSMufxsv7bf3dvgIhAJQmhfrnqOyj4x%2FSxszH%2F7kfCu%2BQ1%2B8UQo8H7nEqyXlpKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypwdcYLTvvX8pRSHIq3AOLUKv2OftV8qGStjcU%2BDYuxndzbGrliAxz%2FDcMS5smG6y7h0mhlR3ErK2aEXlPbg9bDL86AOFzU%2F5Zda4KcJ2qswV5c5NpiSwgNgVg2RM%2FhM%2Fmuq%2Fj0gAmvgEsBlic7lAkzU%2FY41I5OEf5LoRzMkrG4KNwfCRuCpVhjhzcX0cnuO43vzcoBUpRDPA3OVL7o3iKgt9D9oOKOhaBP%2Fd%2Brdz8pmcuP5eLJ%2FtUHJdCzAgbpxFuF%2BeqptpxHTISv1ORTVqRm8ioXW05CqyC8KT7FXlV6m2UdYDj%2BkfM7dkwB2VTeHpXJ4Q7r4eHbt4wmuiq3VgfC2J7bue0cP4lJtgt25v5EZa5HgylRrGX4uD1d0m42ARz4ec8ExDU42MMePh310kKmYQ6W3%2FTGiF%2BRsy%2Bv7IAHwdW4EnXno%2BAwJNygWqhsxvnhjPTkEK8Get9bZSq%2BtVZyFbdV%2Fye8O9OcHexExbMlSwD82zuLn2tAsOeDma%2FNP%2FfLQR2FWM4BwcpRBPCYlQ2T49TalbN1xKKdlCITFzRlbAeBLdLykKYhniAdep4t2Bqq1GXRq0%2FAB7119097zf7b%2BxLQN3hWcgJYWFd8YIpCiZG9R6PDBrBoGY3fJHOLKRMUo%2FvLEuI%2FEAzazC03NzJBjqkAaTBCtcZUMLLK3tdeyPcrJNUCGRQrEQ42HYtihqpPoESYDm2XUZca3wLexlVRKZ02x05JxrkN2%2B5lx8Sh6Bxc6DiSAiskz%2FqukUVRy3ja32VHpSqEQd6OvlfMVBPLXjHyzG1aqX1%2B66N9cXftHRSt7jnKGQYf0Ve19mPMQfVaaOas9RI567vw0xRcHLL1lXMqCcW3OfsZ%2FZMaeS%2F9Co7p6s%2B%2FzyG&X-Amz-Signature=3d5ed09eb6913726940ce5be7b42db0a361210941fea3c875c2c765f3ec91857&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

