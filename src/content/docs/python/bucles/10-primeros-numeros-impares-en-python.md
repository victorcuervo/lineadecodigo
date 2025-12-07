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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX3FB4W2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T151842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnRmUjGXmKrGSsfLpJ7WMGhTXGSy79xxspUdaeF9aRdAiBFXp%2BY2NoZf4RK20vk7MMPl8sL9VYrWVuW47nqNztiyCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYJXqPjYY%2BMfpsKbTKtwDVJ3TJBGPjJ5HuqM%2FijWHzu3GvbF7E%2F8UhrFaKUJBSz3kjys6EIMy4GR3qA%2BkshLmycGTBaTRbwc1a4OKUUQG8v3Vo9HzhXpBXyoB3iaI2AqnYgvbmfe39XXJBRH8aKtA6rP%2BaBlVf9BkprjcOx1xN6MeMbVWhaJ7XccWgZ%2BQNOmVuLeeGaM5QUyV3YrGCiTjGK8erR8ahxuyM5QixJ%2FM0U9PwowP3BTKeQ1uvOWI1Na%2FXPCQEW1Br42vES1r%2FW5OxBAUwYvdN7csm5u%2FaYkpWuB2h2ntdFevNgjlANUL5m7oecaTVN20AtMDEQc33LY4LHHoplWIamBdOe%2FFPYaS%2F54kd8fMX8SR6413f4ALzuJtt1ltLPF%2FWvtK%2FY0Pz35uD7lb9grksVocjmzZHJ%2BekEnMi8mqTBfkPekUMPCRHKpj%2BXn2PxsJsmibxbJY0TR36u%2BgUYkqnWqYmPu2Dd8cktKn0bDybrKQvjOpXWGAMtU1%2FmhQBXdo75VsQfK9%2BQ9coxG00NPS7sHOWvHey%2FNjMOeSCpBEnhyZyLujaqjfAUPI4%2BSLtR9R%2F3K9gfaVGSg9dkdp4da7bM99mA2d8G5UU3I8%2Bk9KxoVO09rVfK5tVBBTzeVMRJgciig9yXswqJnVyQY6pgEfT1lbi1F209IVq2nwn1klV%2F%2F5CS%2BtPl4bTn9CyK7uhbupVMc5Z7Rv5oT3eUo%2BdTZNyK7NBJ1cP0uOH6Q2O5DZH29wFxwfs8D1SjXTPbKsaALUxJiThdC8pUaGUsFJ0zdjx2kOC4RTFzxMMjVFy%2BFSxts5l6TytJrOeqHSfR3Vr3gNcESljJgi9j9L8XfoI8nueFYc8HSoB7DoOsaKHDxkB4600ki0&X-Amz-Signature=839f85dda830f82bbc2aead815fe8b7713a2eb07267d8cf65ceb0ac75e1b160a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

