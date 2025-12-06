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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQABJPR6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFx7uVwo1njxSfFzqeP6XaZkEPMbgIr5HKp%2Bv99F9ucPAiEApm8OQSFYSCiIhPO36VIDecK2u9HS2FFmXezp3UvZ6Pkq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDMYEtqGqEPlu67RkRircA8f0%2F0dSx9WXPKxJ4SuD5yIGPSYmUq0biqjJVntRf1I4PWj2%2BkDRf6S%2BtwXbg39LKralx20H%2BZep%2BJZtQPV5y54rR2aYud%2Ff2b5Zd3iCjzaIklGWIc7%2FlqcAz4p2IEToWA7OC%2BsCDfgqgYAcHmiIKnflHIgTxV71Bj6Gi1NroFQTGBwiMFrih36FSyt%2FTXhBEwxZjIP6EJlRQCF7vjPsxJANZzX9Yrg6DjpaQlLmPzANg5xexvCxJRjSl%2BvPc8bnywyQuE4BRwx9Dgis2xUA300Nx3q%2BL9e5q2kCwKyA6I1zj%2B1UqtR0A6DJ539q5PF6L5kRu2ssk3mXEim7rurnT%2BPzmp5%2Fve2xJWRwbgKtWur7xzoUrHXsLtiuWXZ%2FConavaX35brctVPQ4%2FQTd137K8KYhO2EIvCgMH6MoGbbKvSe8cAnDsxYU%2FLvdalE8fuT3MjZu3zAqJqrcVk7js6Z4jYq3ZFpl8G8SF5x9ev1Mz7vNyT68ZdDdD1XRyEtPxKuqNAbcD3%2Bubg1mjhi4ofXK1435%2BqByipuyz8ENG%2BZOTPqV4ndf28PAd%2BBEo4jUy7xrt%2BTYAkTNBfOrVgBHFGmk2B%2B0je%2BYp4F9EqcYDCOJbjOvYO8Puff4O0sk8jsMLfN0ckGOqUBfkO12uAmmHH%2FS2ut5RNbzraiLLbeD4LUOC%2B9r6Fd%2BuXtorvVC31pks1LUbPgSmAYl78hZZE%2FnpwUvsy6Wx51qqaXVxiDq%2F56sWgv079hfyuSHqmplFteRqVSG2KdquxHTVUW%2BkV0Ryl22DHCEGR1ygamh1mKdqdfiu%2FjdjK6n4h80ct8TdZyLAmymo8SSWwTTLn7sai4No6BYtXIcBbNt8WceApB&X-Amz-Signature=9e19ae0c94c93ebd020e8f9fbc3eaea8da3500ecb3142bcf6f6841b172f70fd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

