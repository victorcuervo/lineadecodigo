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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675KL2NQL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T024103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDeGlOT220xOzb%2FVVPhLH3MNNKqbTnS%2B0AOyVn%2FtL7JRAiAtCEBEvf69vvwIrYqp3T2%2FOfc42Nx4mYKRDriK%2F%2B4UqSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMQ5nMHklTFAbA1JM7KtwDHyUDsa8O8ZH4%2B6NLVOiGn%2BZF6yADROSjIbNojbkVCcjCPMcRocZ61mfWDvl3El8J9vzS1VFHlRD0xiLhEXyYhsi1xLYYpFVNjowmkn5i8RRSf4Rtqz5o9aHpOs8QK6kHut7y5r%2F9sowBscyUhjyrqdvRK6pQf6Jtfg%2BEnSDN7U4SVFXSDybsN%2BC%2Fm9yhXWGOolDcfZcYLzXyJYCoFxw5Adg71%2BGEoCopAx%2BrS7VDhk8IOb%2FDQTSccSsiK6r4AGJOKPUrvxJQ%2BACzt4GIad3i6Obr2nH%2Bb1rOc5FfDq2Jbr1to0tajn7oBlly21oV02%2FsLugunFBQ6ekeY6kl4uBkzsGGKkBehaR8K9NPgulEvlDChhfqv7MoarXDgzma%2BFv7ocNHud9hRmDmoAKLPyvnignGX4JMI%2F%2FYnCAIYV%2FA7eu28gHrksznPi0UQb3wsANKGoNnlc3MQKI6%2FJnRmzMXTKTXGHuKgPIM7Gp%2B9cuUEOaA1%2BnzXXtae0wYfroMiVjKAEjTzco8Yb5yVF8PfYGq4Aj1xWkIj5TH0mcFZoU7mApb2OMVqayfSdDRhLnhhoK95TmzrYOJD0Km3WEjnxn%2FAz4t%2FyjdgW3Y6kHTf5tb8rpOnBopCfVgUAx7%2F54w%2FZS%2ByQY6pgESW9h%2FRa6mNfNbEhoW8UhEyS9jARIjk3UPrCxZTtSe8dhSGRpKunWbQ0r2M69BlHVs0DmCsGmwO2J55epfjEw48P6q80CLrArKK3U0MrvrHph%2BbUyPVeT0Wy9UnstFZXINZRU6gUQRGxTsgq3OP9PFRYispMckf%2B6svky9zah5TsxwzSdHN71LR5Ezewcg3Pwh5EAg0zEIGSnrO7jDboLlun3JMmwQ&X-Amz-Signature=fdb621457d86cb3cc5dfd104268b1c535feac830aebf278b0f58c534e47feb9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

