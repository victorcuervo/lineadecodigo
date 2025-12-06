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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVBSR67N%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBZ7wmjy4L3D0NoSAmbQAeSFbhGXfeX1E%2FfBhZJhtmrAiBr0vXHzquqw5g5r%2Bo1Q0M0GiWhzqVERYZM2jlgAMA%2BtSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMwuFmOo8h4aXoceZmKtwDOCPtN5xhbmM08CJWgd5JYTyXS%2FR2XV9ffB%2FB1wLB%2Ba2%2FiiNGhUFjs7K5%2BuZakzMSk%2Bg1mwx2%2F2GnieiQ%2FmFeflgxef7%2FTq4lYsd5ce07mGWS5yrFibZUbOa1tRsQi%2FCrv4RHUauXwxJv2owutipfAwehqRkAyNPOq3vakNKe4IAh58GNiIFREuwarPzMtWaK4ACY3jJx0hCiRIKpGkEqx%2BDO8JKbjxkzP6zI6y5Z8AKGV5Q%2Fzhbbkb5aUmy2e%2FXMSAc29sY0pHx29a9vfuzz19rT%2BiO0%2FQfgb4PbVkbI%2BevUejEYtB96VjtiBxDuWLdqg7ZiZ3VeiVLDkbkZn5X1RM7clknYZhc%2FWPn%2BgU0Mtthp%2B2WobaXOLrUDTk5oZIS0w86UgOFoAS75Eea9T1m3R87ysYmhjuH5X0ZW6QZopQs2bYYOV%2BlA3JvAV1ilDAIiyH16oqACNhHjeCFKel4P9Ww%2FZM23z2FVORlNHk62f5MzCfjiGCEYuRpuAwmV%2FdCy%2FTe5aTZwYwt%2F19isPKrX3Zmp1boKFN%2BD3YF1rY6GKABYZs%2B0VxBFvLi5feJ4ckACM9jDNZ39UAl0bo8a4eKjUZJRvnbbLWVhTU89VDmnY2QbdGvkHWOR3c%2FAbL4wvYnQyQY6pgEq1on5DTZqqnkeuMsOg5dXxl%2B6yxMKIK7UItZ6nvqNCCPR3QJ2K4NNbAl7d%2BOBWGfJjOeMdK09rrkYfj%2BOb09iC8XQOopM9FO7lVG7M85%2BYDCgvzhKS%2Bw9%2FKjv5iHXdLdSJ14%2FvPMKyywpWmB%2FESgq7nuCYOzzZKXjj3EbOkB9DdbNZnQvM%2Bxp0X3G1c8pIBaxLc1LZx6jLu3LNIMd2gv9jEIXvDdz&X-Amz-Signature=0618e9176bec68d9c66a746ec574db07695c17c729e19c6b20a9e0c4740319bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

