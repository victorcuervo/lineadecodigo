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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HOGORGW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T080525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTsOZQa1EC07C%2B%2FB9yn7HA0EwokGKF8PoNUKx%2FdnbFmgIgWLi0oEUfGNt4esGFgKCxSa%2FCPF7OEGFOP26lVatBns0qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGX7zvfCW2F%2F3l%2BBircA1%2FrmbkrpTM6aTzeVKS7nYRWd7iqCQNU8XYZec8%2F9V0%2B9U4DMokksIidLh9zDwUEsWNAcaj%2Bqo6GpW%2FeY8JQoFtK6pvzafCcDh8Lk3wfAglxVjrjhBr38K%2BRpLvV8hULcih7cO%2FMt4fVHznzsoVZpfdRRib%2BTmInjk0OeyAtpk%2Fi%2Ba%2F5uxCvrLOhSPhyvxlfxsvP1n2zIzD%2FDp6Nyb31jawCQIB3PZG9duFB4%2FdkAdWmluyoevYcZKb5ZYxZFAdAE779eaDI5i3sbxWY0DiSl%2BA8yRRxk4bL4yAMKMKrSP8mJ92sa6wCYo%2F5MmrbyhHw7QLCnixRwgQ9VWK0QeQgD7sB8v1YvfYMv6KN3tFI2Z8vL1DAarKk05rUwnMgdvVeg6BS04wBeYTEt8zUA%2F81kc%2BaUE2RBUPGCBiPaDrlIYUlqDda75vRoRZjwX0xVZitgGaYyoAKxg6MiKGfIO9cPJzv1IPys%2BQcKKt%2BFS8Zum4hE4EEe9Lp7cRg1NKk6SRRQFNNrbkbxksLE8wbAhyLMHbjV0oPXIc8Yz404BIk1ovkkqtbZtBEoIfcbpxyvOkzCJt2LXwI2PhyaKmwd%2B1khmA1qJ%2FzW5FZsMyPlP6Left3cN2zDLGOkBr%2Fl3LLMKOh1MkGOqUBFVNRKrYCUH2kLxedv8UjRsbhlhoZO4fF%2B9Ke5z6iw4dqcjXHMIPVvRzF9kPJf5F%2BNiVfbqogep1LKNh6l6pUuxTNMM4OVkv%2BG265IyMsVb%2BJ8tf5tyETGG1bFJKM9vqcmIQmaQ%2FMFwVeRRfgENkV4EDMR0fWV5ZhrqfnGaHVmO9TFeaLfBjFDCmx9uo2CtDFqNBnPPTzyehQNJDgyGla4OKjX9%2BA&X-Amz-Signature=4db9db11cda99b5d821a5bf8294ab991df4bf95f4c9ec16b71089151863ee0df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

