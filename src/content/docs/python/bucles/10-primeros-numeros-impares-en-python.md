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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JW6JAXU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8IKBLSEGUDYchUQh8I9D1YTbmhb048oAz5T%2FS6MHYIAiAxHvO8ztGXQ9Kakn%2BvMsgfXSEu4ZYsrn7mzR%2FzZ4S8Mir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMGRxUzDAyzewLw%2F%2FNKtwD5mVH6uOFHckmHGW2XTF3%2F3NxIv5E9C8ALQdqtVd8Wpba8%2BBPmZD0ZbJNCHr7FsprQKxlFTpgydI%2FCw5g22jLxdJ5Gjje8YWmIt76R3joPay3JdK1pEB4VrqLDxBm8FL0D5DRD77aKWBcFS683GCdGslMBLaxWC6w%2FQil%2BA2lIw1D1jHmuHyfcU%2FO34XYA585Kbxnd4KztT51GnOzTgMgp7OJAfNomz9y9QiNG8KxUHfYbYrKknkHgQ4R6ljThbMei4TpXlGkot2FRV5OulVpBfno4Wl3XG4YfKq9Pqv5HBYwkIgOH7uj1FMtpI5ifUpI8%2Fo95qS2ab9%2FWNfX4dXjnSjFbDUPqffwlYOcU29cB5id6t9D1AVnwvfsS0iw9cc8bQCa%2Bh9TxS29Q4pAR7n4uIgwO4RI8%2BTQpBESG8%2FaCnA2Goge1RkoKqUt%2BS%2FGKmGo5pCbapkFycdEimPyWEEmDHOp7YzvSQBOzP9j%2BOEd5pnURtxfGX3PQN7YBN2sMQxT4Q0UaZFgbFWuYFltH9Dr3%2Bb9rukq0OwmhPAfaJjZAQLFeDz8xczciaqW%2F%2BnR8DWjWgkVvwlTVOHODbsCe4z10GFtcEiSGuX544ZEL6jIyT1XQ4oXp7gIEXbP2nUw9OvPyQY6pgHbv%2B16GLEew8m5Vo1FD%2BcelDAwV%2F%2BzA33iOedSARJ%2FW4jW1tcDhqzU2os1vFqws97VPxcGLHdPO6K%2FfletgJ58ArYLPi7QHRXSMQDL891%2B%2B7D8ZwZKjBoIUo70BqW8NxsEP5VIE8kLTfOuoGtUQ21CoI%2Fxj8IWOZ1atWwsxucVwaq7XqgICmAWggG3Rc4Wvt94edrjl1zGM5wrLmYROIaXStESJif5&X-Amz-Signature=c18760aebf16dd6e9ac3660649f9a3afea78abab2d1c86fbf789f421a746eb8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

