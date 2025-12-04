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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR4HY4RH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIB8ChcDSe7K2bkW2GF%2FHcb%2FnAVnQNiqMND4U3VTkAFlaAiBkxndO2cP5EJ3ZPIbEwFWnpO%2FCwFK5H8B4CInR4ljQhyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMhVclJJTk929z%2FMvVKtwDmEvpMujQlUgaIl673bvsBghWTwkhXlERLr57l3Y5cJWzRAaq4BQG2QAxnLJ0L53hUX9ClKc8HoyyXcCcsA84Gu0yMC7BDGOyrzscnPBBCZsNTAR6IKFBV%2FbEMU2ciHRmDAY1F3g8IlkctLLdz8u%2FZ%2FCEv1nF6n7ucw3XM%2Far5EcV2hUF%2FQDRpoPBwMvmTkFRByl4IpZkBCLA0WnjEpFtMSnET9QqWdia3ZM4bsdcBRzcHxhjHXndZ2qxDBG2jpw3Lr4uHyhwKaKBX6Ba5l00zNEYLsmUs6R%2Ffm5Wxgutwn%2FH2smEaIvCRAuWzrLpWTCBfKmPI9yuLoXuI7lGuG1oYph1HmJ1EzZOAeVf7U1IaEmAj4mz4PS3KUarSCGa2QTob0jVedlHolhiP8N31TLkeNAf8AsECMLXl%2Bgo0y4ClFWftLSPSODCSZ%2BPegGqok%2FdwQseVHizRU94j5aeIulv6X66o%2BPPAaJ8qBrqfCMZM42JW0WlwL1Iscw76gVcZaCA85FWoE4tVBLShTt3bIOU3OMn39Hl3uyFAPo85jQAPMiAXfEuOzyxLUiGol9SkokmDoXHdVuMt2jakD4tdLtIKi%2FrmFrdo9jth13w47p2C%2FNgqhwrD7Y%2BzrBxXm8wpMvEyQY6pgFdtS2z5eYL3luU6nWLCv5XX04lKET3KvtntYube4uVeAfuZgstGfWrFpoYZ0pqeS5bQRuJXpLozaVezkFF6Yd4pit%2BPB3OGiIoQSJLcsp1T88yo1FLZ0c0CCTPHQ%2Bn7kUDMb65QYXshAQA3hjwn73Eh8eN6nG%2B%2FYSVs8aQ3uK3IHjmjWa%2FUrR%2BWWqNZqrn%2BoKAJ3U0E%2Fr1VP6V0BYgPJEkLzpgB%2FSR&X-Amz-Signature=c4bea4bd7d5f44cf5bf3e449f48d7dc403585ca830fa490d53106ddebb94e7aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

