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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIGHGBX2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICs8YNSSIF%2Ff8rDx0qL3G0Sy2U6Q75TumVcF%2FZnuGj%2BxAiAKugi%2BS3RsBXTVElWbaOL2f6Tm%2BiY77qTGzIzfAlbd5CqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ8%2B%2FUZm0JPQWGP3ZKtwDkFxxV95gglS8z59FYBesprQPIDxPJ9lE5zkqdyiF2uVf4zrI72YGVvTYLQrFstw%2BpSg3%2F9iyW8ZJSY20CfPhCV0ec2qsVs3ujcO9i%2FxUzWUJOcqvNXiC%2F8c6NMNTw0NAVbkbgCEczmSI3kopaae%2FH2t2hC5MK84MVG090RAcYrVEi6wKajh34omDYbKCscRdsf5Jk8GvPJFVaBlNr7iVGi7St5k7ozc8l%2B%2Fuk0ZHnNoTffLkDg2ysXXLj%2FslaYFkub78yAT7Q6rARBPs5wrzxC4DmRkOtdbQNQUKVlsL3fDuOchZDGXuAcBGeZZ9J9wGNdEqjE2rWuaZdnHIdo0cl1Td7OTmMKKVzL%2FZ9jL4rsrS%2FU6fwAEImy4RzWDLaYKkuYTiGb857T7KNrA6nAtjXedwKHJpZ1FZw4yZLTDZ5wUfJsIu6F23Ibzh0LVNHQM6W9SNKtAe1cyY%2BBdAaCJVL%2BlM98spC0645ghV5Kk3Pc5KhYcnhg4EzYxIH6va6KgEcNvIut6O2DTB%2BUYym8%2Fwz7uK0fDNiKIIt8Fb13dgM%2BfHBqRKF0w%2Bx%2Bm4PPalIst1jQGKuHMAtiSnhu8Ta8KP3rwxb1Zm4R3taBcZ9T2SU6p%2Fw6Ed7bwLGPTzpJkwi43eyQY6pgG9ulkVmPmqdBzjOBwA%2F3%2FRHrPgPnX5LsbxKDtIO7WLVFMg%2BNPBrDgYr4mnTiPrXPAJetlW8siUcaCttiWK8DZz21vpLTsUv6Vy1C5T2acb9msAAABa60jwO9I49NtZdw3AKdValn4OK7Na3IXvNdpdmO0NxDpUWAy7R3CWRiG%2FeeswVaHbRKMuVsMmJcYjKWysjOyxNVqrKh2jxW%2BxYivbhWHfnZU0&X-Amz-Signature=6231641fa47240c89abe9678485fd1afa44f7befa7af9be40d7c861a1315bd75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

