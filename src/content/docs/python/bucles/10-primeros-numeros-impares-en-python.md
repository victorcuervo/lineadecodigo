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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627QOLXWW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T135714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1t4R7EkRymitcoZQw0IzPwb%2B2aCEy3UKHrsat94BhNgIgIMX7S%2FrX01rY3sOzlLMXT%2FOe6QTZKNtDWv6EXtxu7Fwq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDMH3SBO%2FZFSSs7CtmyrcA0hjFVjh6Y6yqWS09lH5EToXE%2FoA%2BnfvYYL3nHWo1dfHhUKlblJlAMMkQZ38fMQ5m9NXXSrZodKHyOJjwko1LI3tJN11irnNFQQ5LTIKkn9RXtf%2F4dit%2FU0dqfmpndpdu3RfU%2BNMfJJKPnm8GuSDsyDp5K2LkfTgtDNGqzeg%2BcFgaEv4FdZvn6G4Z93pEDgTYJkBsLVphr5lbO0s2c8OUw%2BjqZvindowplHi4wV4l9bYpHWuRIv5fL43f%2B4kDR8J78b0mV4GV12jetFeYy9nWhqVQ4syhTDtb8RspW9I4AqtOv%2F43lJInRkZ4eH1lf4DjAXSg5W6yMph4KNUgMOv4AcqGcIqwpsMOnqbVQMJj78xZaA%2FuIJgZyFXBlUn1BoSwdEd4%2FQj03Rth%2BhgVH%2FCZ6Fpd1%2BPmD0K63a4DwqnWTmvMXamPebxkqzll6GV8uc9FJl31ctpgq6k6ym8AL03osyrmeIKXOeQvr7kkno0vCdK05PVgNpaUrXuxtElRqg2IBZ1gNDBIYgZ%2BgSMROmsFfAyBk1xoh5hkVhulbLILzvlOjZYgw8bE3xxw9BmCPLTtqZDOga5zOffFZRxQWP%2FOnXH02rUKeSMjxVI%2FTe8qyTWMZ%2BhvTliy4OXr0gNMPzWyskGOqUBEkVUyPhmLRI31Hywa13En8oaqoFFAgqJY1mj2ROEnFccC8qZska4xtHDbjNLC5B5l0IB%2BzoxhCZJaaCvMpRuNTsW02GeqZ2mJ4dMFkifOoszuEkDFTpfH2trQPsOn2eGu3e1BXQJpboQu%2F9DDJFkBCbv0I5Fs0FlzGdjetm3Cj1wgpWt6L0z8Z6XYFxKW0ox4ihGADaYX2WmItgg8PlpaTr%2F%2BQT3&X-Amz-Signature=443c3ad229dc1a61cdd7aac0a2672a0e360f1a33ccf52815ebd3b73204a7d376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

