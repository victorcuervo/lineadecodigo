---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OTHLVNX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDBrNSmZvQ4n3rcd98Huk4cM%2B5QHAngHOJ0rSEcuvzNMQIhAPhjhs3LyeI1JPE1b4x6Rm6%2B6EW4jfNLsiyHrcJg4e1EKv8DCDsQABoMNjM3NDIzMTgzODA1Igz0P3jo0ioJ0PA4DEEq3AODBSgXXzd0kF2gzRdoM7OQqckqrCLFD3OThJ2j0C0B%2FcX8%2Fw3tRJG294Kgfjx6Mhuvzabe3EAFtkIAJRZmPRwDDtCrrhfCrsUELJGQdLvE7J1CZvtosUFrASR3NvQW4%2FLjhj96QdBXdp6ow5wj57E%2BwPyY0rPbvDO7Iq4w7WjwJn7yH72pvUVQSEzOsGYreKhD4L77ofH0G9DDdcsXLcYUuMokMx88RHvNkp7vu0d0Id5BXe12tHleLDYtxNxnqJbRbQNZaOD65foGyBiyil03QlKttc4bsmVoGqSQH4HNC5QJdTAdixMPPCIfeH909FDnicn%2FC7t2R9nEyHLd488d%2BDB15B7eRcPR8HpFAPFj4OTt%2BF4R3rRQgvC92L2leG6OXN4US2HP%2BjiGvK%2FDCyWWk1j9TllMI12%2F0GPeK96ZfPX1sj5jmB9Hh1A5b4Bz%2FBxbeg7DAaIMEqiLATpWXSgppfsX%2BLtRIlMiSjWyt6hgvIQQ3psH4KLUXpw%2BPu9gsME5Y%2FAgNq0jYWG%2B0MFjwhLz2gksoDmOXaZxUTIgi5N7Jc9DeGuZOcogdgiZW94zj5aqxnuuR40ogYoCHeNNPsmW4p3Fh2nuFe%2B4YJvhFhxPBoVl%2FJopj3pE6dhTizDB1MPJBjqkAfP%2F%2FrPdJIvQzCmKJvTL5SUBxw0kHazJFCSaHxUwSkMRrmXTZYGqp%2FTXT2ANPT7JBKnOkVabdZP7qCqWROkkL04qsXqlwnkQ354VtBAdXqIW3prZ4ZrYtjkFboShShn%2BQBhafJ4ut3lAVCpmmmPrdQwJHMPu4WO8GbQVCeyJ%2FnGe3pH0vbCcWpyVDFVR6A75n7JCiW4QcOkrIviku%2BHM%2BT%2B%2FjH38&X-Amz-Signature=7d3d5fe2ce78fa599880e51e11ea34f046dca8f504c0c64cf461b97da608c165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

