---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFXLZAVO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCPmhYc2QJ0gKbkpJUTc0Np1o2UggCS2SO39nMH6UcnUAIhAP5GbXCfpAX291reBJVjewaoj%2FL9mS0vrZhs2VxNItz2Kv8DCDYQABoMNjM3NDIzMTgzODA1IgyDr4fXVb0eXIVIRHIq3APj%2FeVyUPYBaMdEUApkiwo%2F5OW6cKQ6Q2B6EG6SRH5rfC1BzcGdYo%2Bj%2BKlONX7D7ZxvD8AQmGpPJvSJdhQDxs6p481MW6ChDxBCAEDqxvjnK7xPWWVLXCOnFaxoQPFVSDcOgvtCgEMf0X2m3PTMWqq4IK06uU1sj%2BVSwOBY2RJaBTP%2F2liZgG7r45R1tdU776lZefrM6XDsBR3Rm35FQ6qg7H9UK2L1f7Gdi%2BoTU4M1WJ80xH2dG5KQn0fQPD9eIrS5Op%2BoKJK%2Bufzcg94ie4bJGrbjjLVmkm5ZPZKka2QRg59e7ZZVHehHWeaHp47R47lvRNIZKyJF6Q51H01nVoaJ3ergrOtJqCcf7bSAgqwgLR7Q5KevXrX%2FFTdbxf29pdRzP4B4AAOfCbGM83nVegfvrYnEiw4BoesiF5E0eLALMWh%2FrQqkNpKi20pHL%2F7HT5wB1bVBhdutyDIVHi9%2B7H0YP%2BYblaZCpvtApXf%2FJEe%2FGP1G4QlN0DPS6%2FLcGpKSazvvJlSnJ4GrNIUlr8A6xmwFJh4aqSxtfc3jmPrY7uNDoA0KxE7hwHYkkWrFFuhaH09Glsgen0a6xQnQej%2Fh2kR977W5w0lAsUcfYWGv7Z7APuDQr94KAwslD34vIzCVvcLJBjqkAR6bGaSpjx0yfqLfBMffKp0yXbsl7EGn5%2BozGf5712I%2FzxKLJFIggFnA3bquAlBjkF9nbBYY4RISsAR1nbLB6YvtbjD%2B6mm%2F9epo1PtYku7OF%2FbBB%2B3V1wD90SnLMfOzudwQLMSqJ7ChVK3IKUJHqSqCvXWpkaeuUUmthCdYzMhqruTtLuhILsJjXb%2FuC4AcOQrmk5LUJLjsfP1vxl5joeKiBHOx&X-Amz-Signature=cc919ea3050a5ff7f17b82221da8425d665468050a6054fc8706ee353c07a4d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

