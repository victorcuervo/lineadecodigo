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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USBXIV5A%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T041215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4VAC7TzVq%2FD2Sh%2BV%2FazqoCsuO0VYPp5oi46dRpc4wDAiBrolB3NzgvFRvRZZgQhNGTimmas%2FqaCpcsBn0Pr32m%2BCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMLoynHk9GmnDKToLDKtwDxG8lTat3kQbum6p6LGryTnb%2FzfVHxf22uYAQCWZDGC9nI0SKXi0DPrsEkaKp9HzXcy0RXXjlDFV0jxnjrHK7waPVmz%2F16VoBeS52qy01i1LyiiOZoHmV5JSlJhfBQKC1eW0Dy5cC25D3iVkD%2F3ybXZByxfCa3HMwz%2FIyI9hK72wsy5zqMoxNnP%2FPyMrErSxH0sZcQzHCwyCVV2nZMvIu%2Fopgav%2FmG524cFFHRP8UIMb915vKCmMIgOgZFJ5JUMHtc8HkRTwqVtsfDaJXNHy65xso6u3Lpfts02Lwp3TQ5TJkkmwp63VvnnW%2F07pAp8cy0s%2FuxOU6mtPoUAs7sO42aO83pEAOgsA2Yu8AOweHW30ArEk10ZHLPwnLbt01oUUJrr5YKGnzJ0k3QnFePoCYtn66aedjOUNvy7KhPlJSRQDe1phY%2FV2h4eAtX5bhfJ2g45d9XXOfIPFeRYQjEVYoVDZApyuyzi5gaFOcllWEfunFg0SzVrLRXPmc4TSrtZ%2B5DP7GIpXi%2B0eRgz%2BrYp3GnQUPpCFmIJOSKO6g3BnUmjQjK4bIeUHJkpKcX5%2FP8Rfy8AOo9fNalNubPUxRSHJTj3%2FAEQP%2Fmc77dKxEnR67yBFswtnjbIMWjyc5c9Qw68POyQY6pgGUQHU%2BK3hwJdCe6YK1d6whftRIsFCrPjGJHxHA5iDoI69kU90Llhb%2FE5U22wUk9ttCt7T4hBpFSuTHmWET9lwI51xAJyyVs7ASXOU3dyktMcTXHF27VL1QMamzJWRknqmVqFBeSzZMyg2US6sTUNuFF36IMMHhAdm4OZr%2FSdWHQQbw0M8RUGPdGm2lpISpD02RSwSKCB5OYYd5%2BK8ththV7xGE9aLc&X-Amz-Signature=9b5df35d6eeb307ee74f8dfcc4706b8811d2fa2298036d7d99d84346e5ed1bfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

