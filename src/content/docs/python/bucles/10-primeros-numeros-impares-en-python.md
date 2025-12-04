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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMABFEDU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDdX8KlpRF7%2BDe033wYgNbWiO78%2BjM5iO1W%2F2VtmprcqwIgGKUl0SgbdKaNUjksueowqP8I8n8BEmRjTjBXrYB%2F36Uq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDGpDZZtNtQGl1jsjjyrcA7OrHmqudMdXko2PdsRs8L3mdhvT%2BYTw8L1YJMxfKjFWauyPE%2BDWRsdw7m9OWaRHGy%2BnODlzolk%2BNoOgLMzLfCIaHN9wDk5Jb0VR9l1GXF61zrMdV8E9%2BLYQuspO7nS2s3UTSYvai45OKbPCq5TiSsM2F0BC57D914iSStaJz3e75wid7JbQGYEeuJT9Kgc7aE27ctOr7gK19bUdZpu4r%2FsBW9estFvmdv8r5lfPZ0xRhYdlVy9TdHIPwEIp6ZJnCQKuJs7nPPYcDMbNgEUHzwpd%2B9veCrHlP6YU88Znw3E6NIs6FhGDRI%2BYfdSnAC00tXY3zvoulX1S%2BpOOFvawVG3fk1tKZy6cF98nmZ6D98xgzcOAd%2B6r7qOOgYhq2E1JurfL3Od6upi8PyuPCv9xj6UmLBbBUBYxaxU3UO7taej2ZU965%2F%2FIk6abEMJdNFyyGDZgSUDRmlwmhLHr0PChtYS7Vv3ip%2F%2BMv2X5dpAAJUE17mTh3aT3ua3rmpYDgED6We2tmI4%2BB8%2FVoDDU2rnatGDOFKwGiPe%2B0KScIhZhk%2FWjrL1qwbXhQmqn0lKdz7vgxPQiFWmiFonxnWeMw2A4%2BxDh0361a9QXpqGsn%2BEDCVamuJNoSKiNhlrqEKCFMIroxMkGOqUBDal264yrZwVG8vtJBW%2F2KKRmcZ0A28381LDn5BpalQF%2FGYrhroSCwKxl3KX%2B1cqzDFANO0%2BCEL2MwaVotiOnYZCJWBTG2ix3dpZNJmQV3unF3i8X%2FtKLSi7Ry42g4y4IfS25Vpd74AuEpKnWRMsMVcX42L3dmi%2BnkCoeYb05xdvAYGxQTHpGh8IzQ1ENnJVVB1EWI%2BgmV6FKIGwvc5gIFoo9EUJN&X-Amz-Signature=f9a9caa19ce54e9cbe483a0c4e17af2e8f1d1b6d510536fab4f8100fd1377cd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

