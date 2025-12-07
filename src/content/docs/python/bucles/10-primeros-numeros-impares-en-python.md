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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NHA2GYC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T084353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWdLysZ3ps5ejfI7iwiJD7WzYW3gt2Tor8PhQ21OI5%2FQIhAMLSUiCCfc2nzqsIh2gLuPzm%2FrWIA0a4%2B2G6ovxwiskOKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIuYcJ6CjFtzg0Rf4q3APdCvss5F2z64uOuvt7bJ%2BAFsaT3ixCe7EIILQk91eMmtWm6xT8Fww4NkGtvm%2Fjqn9pcvfCC8mw4gF9qu4J4257oWRaeJufrIufaKu0G3OQUqGd%2BAQMHby7nBeqDrqTGu%2BW7zfL77X8bAgxFiZgP9PULE3RNHu08Yqq8uh%2Bj%2FsGOkMblEInnlDiNCDqkzvBtCwZqEacPBBblj2sBmR7LsoNzJgson1VgphxMTdCql3qPHM2TUS525PNMrJ8JrPvRwUSmWq3kBvKrY%2FWYFtQmsMI%2Fs%2Fm92MnLc2ci9%2BmpS7X%2BY4aHn9YJW%2BitxUIeQx4wfczhbVWC2fsVDmHQ5Oh8WkGjCKzu1qR8d98TU0fU%2FvnNXsE6PUnmjCiF0olD77h6B9X8vsfuT6amuPG5J8mpIGffiQ%2F4Ta1P8kgBjUemyLoTEktVenFmWIqxV0lxXAyz6ddkbyuVB5aPrSqgjOoQPTS8oiYEpwdfkwyqpp0tjKYpYzp0r%2B4ZEtoo%2BjkAew4S%2FhWr4YtQPUzaKGGkVRGhtzsjhuPyw7L%2BSqTXL4lBb%2BvOBr%2FyKGsq%2BfnvzBfc648Fg3EpIJdCzjadm9ExhCqxXkApzOSJ2SgqyG6cE25QHSfSMEBsQWdqNvzlU5maDDPmtTJBjqkAVq1ifPb5hxtfjyW2USxVPifwnNK3Fzf9mYkf26PZI7kIRpeZsJmhyMhwh%2BbJAidvG%2BWsvf53K6KzfO4IeE4nwU%2BcCBb9Yg%2BS5kZeQevMHOVVPk2R2%2FX4fccp%2BzYt95mRkGqXALONwYHC2APEbEWH3TnJh8BGak1BA5V12SYwRlsphOrO53Cvh2O6lcqhlHS%2FDABl1ut8hU4mtRVNuA5G4IejP7h&X-Amz-Signature=d63fa5ef7a33e895c6911a3bfc5bc60a78712071f5d858c658eea80314efe662&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

