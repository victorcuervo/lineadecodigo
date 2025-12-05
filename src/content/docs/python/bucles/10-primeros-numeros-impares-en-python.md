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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT7PCDIM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T034322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFezq2uWq6XTZmADmd4wiZbmb%2Bwntw8%2F3o95aOBMSqDAiBG%2F55g2LUuFuJmJ%2BJo97AmqbwUWknNh6gu9lUskZxesCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM1VmOVvK%2FNsp3YlH%2FKtwDjehdFF4bL4Uh7JbrqLBmc2MthnsE%2FbA1USSQ7rZcrUw%2B05dYYpIpRXQidyIbb0DMpxbNgB%2B1a2qBccA9gMQO%2B3uffzixPenKQR6SIVwXinc%2BVj5ZE1EwLDnIvNnSrlMTth5kLhGahN0tJL%2FWmb7H2VIa4%2BK5R%2BPzvCNyTFxWlpA%2FL4dfNiFI%2BuOgIhM0xjubZnB9HK%2BYHy9FtegGhRxnSjgHf97UjJyUCM5d1XKFPfOMPqIuDRraXU3fRHmwsud9LM%2B7RrtouqR2CKLcN9EPSt9QV%2BlB4ff5RQtedzBQ6d4bVMT%2B2kaFtPPvUvDr0gZzwSq8hEga7%2F6o48Sw7Mk41Yp0ao8rHHIEAYL34M5fZGuD6hHW%2B6ZrUg6Hgma54M60U5EnD3aAIwX1YcZkkXyDiR6Hwvl26CkpqPRFV4Nvtve33oPhr70bT%2FrwYeZqVyidHX4twabQpA8fMYr0%2B8SizrkuB%2Bf9d60XBJqBqs8osQZQViRM6Ru0uT3n9W8f%2FX4P0pqMbfU7N3WjQQAHbdjeCYXFbQRpeFnj5VG6NyWlTpgz7B3T1M9TeObxtOUUwCw6eLPXdYYnZ8Hm6UxrKNKGUSVMSg7Nm6ALeSvoW7lJDvQNSNF1PNknpJOeptEw94vIyQY6pgG%2FfB6vyKeYLxZra4dtG3NZM45mMXgHnX%2FoKxdlKFA8UBjMfdHY0wKFVog%2BaPFEp%2FekfH5bzxEYzj%2F4g%2Bav5y8olEUsMDZx0tlzYanVJNfXL1rwzYV5oD3EC2emSRPdbTtgsIf8C4OgEUrVVVVKoiLF5ctPbfmFU82sSCJQ%2FzsX%2FHJt%2Fq1FAABnGG1qQ5gyiUftGtaMLLAJXjaPaPvc13CXELv3F6T4&X-Amz-Signature=f923328ed5dac55f95b8c2ff1b5b2ed307cb4f8a408893ed6527b5b5b415e91f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

