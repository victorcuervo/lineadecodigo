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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOHQMFYU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T002900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCgwyfmRZvDkQa%2Bb7ibhfPAAGNUF2u4GJ%2FrQndifpokkQIhAM7nPBc7iX0DnLDJPm1vcMQrne7uBowXX6H02Ogud%2Fx3Kv8DCCEQABoMNjM3NDIzMTgzODA1Igz%2BmQclysvqa2imJXgq3AMGoWbcMGxU%2FZ7dv4AgFbzNVvJERRw0Kju3YcJYMovfx73tcCp%2ByCamLV1bkxZ7AEXplAc072BLZ%2BmchtBykV0ccdMr12qMOtZ0ZHN1N75vL2XmUyXxUSimVN3aho72%2Ba91hQV0NnpurgmQbX36Y7MwQdSCAY7L9aI5lwjh6goag77qXz2Ncb4uSwVbCXRzNklNyfVIeJdHtyfEKcfgsl8xM7tBfl1N0muC%2BLwqXTvH4XYHWBe8%2FpVF3wrwntpsrTbPyMUTvg2Q7wK%2FmbLIdPvc2LirbeBsRWoRiqyFJv90%2Ba7QWQ6j9dlHjgI2vQS8QryLXqk0%2FFKSq2ZYzbk3mMZozWZIJiFjIeeBw7xXYW9Cw4l%2BT5D8P3TG%2BX58UDH9omx9db6nalb1DWCaITZHoprK%2FzpTFhTSVvW%2Bqwv9egdnXDHTv%2BrFbuS3PwGtpN0L4Qt0p0v%2B6PVQmzWymhZN8nD8I93LjepS3vxc%2B%2ByZl5VXYtNgcrOiFFOW9aEs5f6i0SVg6%2B17%2B6zZBYAhrrLs5sw5Fpo0GZ7rDkcn8wL4bs2Qo%2BcdU%2BRxqeKVnLH5Vcz9bZri7v1TEOA6jjstV217er8SErIJg9ffieXt2kwkwOSycyH351%2FeB5EKcG3P8DCU%2F73JBjqkAeBG%2F5M6kvp6sruiU46%2FIcmJn0a3yZ%2BOAJKAep%2B1niAvyUbaCETi2LsYKPgMUJF9iUjc5GQXvCMsA1BPnOD6k16oUBVnJiOUNWXeX%2F1WuTNf1a7FqSqQ4WcU9zNtiVqFw4uNXsZ88bPT4EGY8%2BldZXt36%2FSNxZeXVLNt9Tr069tK8gNGx6SEvjU7oQ0wINfk1VTbEEEg0UfeQT40%2FxyLtgDrF62C&X-Amz-Signature=430134b077767b0d85c8db270e47932554b90632915e98b6ba03f33c58ce1a97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

