---
layout: post
title: 10 primeros números impares en Python
excerpt: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
categories: Python
tags: [python básicos,python bucles]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GM27PVN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T150031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIE%2B0pjN4LNVUlg85kPbD3M0PhlwJXaubz8pZF7%2Fdpd9vAiAEFq25rjYj73vst7zBYLxgUAVNa7fR6uFy7rkHgGamUir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMIcxsvckJo4aF6aYhKtwDtsjOMPDA9hA0zYpqs5GlHOPeXvghTX6V%2Ff9joE4DtByIthPlBbXWg%2BwFt6Kn6bZhMCHY9s64vDx%2F9yrCZsp7YbV4aDkv6RDRz7ZA3%2B4hhlR6gbXolGydPo2wBbqWvQbdm6sLMeZUYMFP%2FV%2BgKHVsMtGpcUHDR%2FEMxCjUg%2BWOHMMCidaNEbMQABuzKaZw0%2BwADVIxWrWuKuKPowFa1nxIzs%2Ft%2FD4aXC6iY%2BPojydXoD0OOjk7cELM9pV4qHizGi0t5yGu1uzT%2B7KZjjx85BpRooP2EioeSnRztWpu09FYufLnrJhdDo83vwHG3KF2ZbHYWvLegcjt8pZ4nlIZsNMX74Ez9FW%2BCh84wxjsSUBgUU4b4kHmDWHVtcKMoPlbwxv2hKWt6cWjJLKszSUUaMP%2FeVYocWvsSW9nHS9SEjgHGdJYydXoeDLSY0%2BDuNL9AFqB8SKkn8CHyIeqBdrlSLItigQ4EtpNi4mFP8Zk5u%2Fa01RQ3YYfojw4bZVUsKB2REP%2FbHpO6SMhXUsNqau84%2F83laLBtlRPuxFG9%2FDDEJaQIg10F65xv5sdUx0vmF6jBiImdiw615oGYUbXtWFv%2BAnhuy%2BDnwqPsu4nVsvTXDl8k5lqZDdlgyy6krqMSngw%2BIjByQY6pgHHEwnBMFjk965WPnwM07e9N4lkHGjSgLKv%2F%2B3Fw%2FT6pW8WG9n0mHUdO2Ajoq6oHbQvw%2FQTK8pjg4XSROq%2BjcCRJ%2Bs9m%2F3Dwe%2BVpdDrR9AZ4EP87BAtpK0ETvsYZSUEhMhEYALJhy6Qn4m4qGCABAKVkVX7WwaBL631QS20xcpKc2rPvZEbaYx12P4tyWSxTH18iq%2BT8ns3XhfPISKHJUBGQb69yNkn&X-Amz-Signature=8e0731e1df0e37c53f48f879b8e1578e063dd2da9de652bd485b902d655de4ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

