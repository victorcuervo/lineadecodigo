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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RCRFNGM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtA0YPxJJmXiB5g6zCai14oZmR5PR0KXG5SVCeKo6JtwIgEA9oncEHxNN6%2FVL%2F0AkMURVpAyfDhAB44uVmsk5w4DUq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDFQ0SQqUPh6uvgVwqyrcA4WElc4nDQcuQU6LhMtw%2FpByvzSBeIgp%2FOweE%2BLzLIXjbLVOoydNx7kvTo9ehTcMU%2FAp1IE5ThB1JX6Lh8Fk5aDtFm0QgZWjmaomNjJnDRKKEN4jVeLD0Z46jFnVS2mLetQAc2w2AXoyUSvwpdWyU2m7PtMz%2BVPxoN5YVQNkjJdTDfRw2QIGrU6Anc74%2FU2r2Wxr2kFDBNTe3tpWiKtdPkm7u7Jtx2yGXEyROBdW%2FyF%2FBCCyTudYfb0qN6JgIrX07uWVc9kFuE3RW59ctRyyo6S9mfOGy9LwnhM%2F%2FP0otKQWNN6j4uJu%2BAAbglVIyKvkjYVv8YhwwRG15GpZVkFDXwnvHjj6%2BqqDAZA6%2BFZdF5hd4aomUXfHp73ohFDJBZSu4eDTblMpMIJ2z7B0wnOkKGNa6oUKbdMHpWXhnIjeg6d4gg4lcMcP9A8VPGSccHD603H8yK1x0EkQLWKbpYtYDF1Kpc8X6MPyx8qllrteWpZ2gu17mYf5yltDPuPxTQ2etqlvHKkr%2BcLH4fthf0BQt5%2FA8%2FK2tFEhKHu1njAcQPi2bsw%2Fk26GJgwA%2Bsghszvm0qSyjQKOIHNN4h%2FggeZ1fe8NYcY7VIvV2KockNQXvvWOZSeNyYtI%2B%2FL8FtwnMJH0y8kGOqUBGPw%2BKzROLmhsLB%2BP%2BTgz4bk6KJK85zghfveHDmJP%2F%2FB%2F4SLKMroPFwYoL%2FZ%2Fk9FcyaLFSM%2BeA3DYju2qtcbCpfIPYu%2FukQri%2BWP6xu5Gq76X8bmubPqC4ZD%2Fh6fdpYEE%2Fy7gZ1Gd6zwJCibeyOUYsuKHxPHBandKVp0sybNv7Xz08JaaReJ%2Ba1GlwktcPTDfhXrwj3j47zcCtLOVrJN%2FOWLkA2tR&X-Amz-Signature=85b5ce434fe752c07823848dedf790f561c9de264b28a4d8253622bf5db93cb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

