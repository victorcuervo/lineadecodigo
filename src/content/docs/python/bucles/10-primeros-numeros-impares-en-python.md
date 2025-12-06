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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SHUDQK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAeKlHcZmrmBWS%2FbM2ATmeIgU6NhO%2F%2BdZ1qHyo7W2yhbAiEA0iUszst6V%2F75Lt%2B0FqDJihUD1%2F39iCgarwAVBnVlAzsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPIX5y8h6FOVUhf%2BiCrcA1DEPXAMTzMOE%2BiHJMaWI42SCtsQ8mzc%2FKllggNZFrjKnykb1WQH3%2BLv9F7iKyEV%2FBnnROy%2B746nkVPcJ7Z%2BQfzlHrKIShG%2F7MYL44xWTBlliBpsAmjmy%2FX8V8ihYZbP63lDTSt3xvR5dhN3eV3q2rz7UGASp6ozdFcfozNwUQR2KCv%2FpzwoEKsjUI9kGOiIylIHwvBHmIVNu%2BHAoSB08dWccd%2FDDyLY4KRxduHjdkDKCLH%2FEx%2FLubM2HEGpSwZs1p1ja40oRja0KIzcOkGN6fuRDsjQbO2ad7zEIR1wQ97cTmZvxDNWFiBm3ceGNEpbIh0PlaBs5rG%2BVZ9aoHbxy3yCKxrGNuepREXOnnGZ5BB3hSnIHwYQoBlbeNC1dAzIgToKpH1EuR3pGmaWcyt%2B1yJ9oQO5tLt%2FZhSX%2Fe4ObI6z9s7jD7taI02fHlkGu5Vc7Y5MMsk%2FKfH5zPjGP5mqxhd%2BzLAPVQoJV1ue0Dh%2Br8cq3kOitDsyl3cjh4%2BFV8EqyypowBqGsSRKIjfDYH81DihDasqbAsZh%2Bi%2FRkdBocRFsoBfC75qCiEmJ9tV3Ro%2FrF6Le94b3hnideN76SUI0y3ShOdfnpJgllpNHBNeo2w1HVWW2srZqTpnBV3N3MI7H0ckGOqUBNq%2FI09PIXJuUwaf8oDiT0szaS21xhWMxh6BHRmZAj4CkoXVeoQN1W5UWD1meFpeDEA%2F32zz2MCwxigXmm0pZyWN%2BwdGta%2Bzok8a6HMjicOiqSoYt9wOn9r8l3t%2FS31peLoliS64DFRGhRd%2FKZzeWZi3l%2F0g11tcd%2FYwBr8TgsfwoA7o55aYpsITD4hPGV0TWAXwaMxw1sbny3MOQEKdacIq4AALR&X-Amz-Signature=9180de8b5c0f738d750fc5234ecd7026048d519a4d9385eacbba760e74c3660b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

