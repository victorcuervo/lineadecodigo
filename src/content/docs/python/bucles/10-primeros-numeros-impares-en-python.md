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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645FL4GMV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BMbbeISVmPc9mLdYGCuxTR7NQ2qTrTvAJkFAxFAtanwIhANSd%2BzqZT%2F4IhF%2F6saT4%2F%2ByXj7mZjATgd2b2t1Aau%2F%2BPKv8DCE8QABoMNjM3NDIzMTgzODA1Igy5snJYFJL%2BjMJEWLkq3API7S0mV6ECSFzRA8J%2FrAJHzY1nJYYyVG4NuqOQgSWOGMnQliqp0p3Kl%2F4mfXbnLfKSZY3PeKwTpXFvJefpEv1HcwsJvDq1mMnDSKEatjs%2BGqX%2F5%2BKq3NHxplkVICqxZcz%2FHzVWYxHogeUJ9u1baBFIy7ZabLY7AFH95Mwdf%2Byy9W7ZgEwKu7D3n8g9M9GI95xy2G60jE82IajcBvR7aXhk6UrZpM%2BeqWiZctEUeBKx1vp1V0IQJ2JXWH%2Fb78hlR9QyZfZv2dw79NBTaBeZd7SubA6TUD6IiCnbOnLzdThlVn%2BIMB94Qt9aBnY1mOrAheInOAQdUPnzUwm40f9VPcKgCsuWVkY1N%2F3VfJZkKXLS8JNBi3q%2F8Bmafr4GVu%2FWyAR9cRhHwHGaH2ajOGm94ZwMMXOZnqMFy128pgACmzAkoC6xNaTjBUa4UCYbSLrKC8wJT8%2B8Saf9l6hxc1n9dPRIPbm9hQimmwXGCgArZVJ%2BVPuJkvUo%2BjpkeaH2bNgv%2FpLi09rFr3wevrB0996wTu5CrJ0yJz%2FREdXepIKB8MF1wlHs2OOrBQ8tO1r3x23REPfpfKzvamPJk0Bw8JzT3TB6sOMMTj0%2BU7cwNjG%2BLxBcwoFHmazKd0AJ74d8NDDWjMjJBjqkAVcaubzS5gXsqPfjc8EYvwcV0YyYb65ccaAvrh%2FMEb%2FQlixxUMuyls2cL60Djuu3%2FcH9x3ISn08ZKW2NOQMOX6PHpL%2BTYcRf%2FHp10dFYYruone0LkJafWORjbDyggCs2Wtcikc57blJXY8ycpOSMG8MnKqwrXc2M8N2EtbG2rcJczJdiEyqwc0Y2OsLK6eEBbdIdcn6zDx54CqwWhqPlaIdJyt8J&X-Amz-Signature=c5214d7e05a95c9debf08ec30031556b6cc15c402d672681605bc91ae6ae0174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

