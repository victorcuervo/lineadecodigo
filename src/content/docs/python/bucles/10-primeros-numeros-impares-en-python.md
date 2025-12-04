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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXHSW7JN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T101106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAUfALqe7egA%2BlC%2FdsxZVlGzhC%2BRkmEzldFzw1nIP31HAiAceCzYbLzWI50IRL0M6Ug9Pgn0CtalZx3E3cyx%2BeyWaCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM4vAk7yfStbIvIgwCKtwDMILFNVkwGjkF3jgNgW%2FzjGv4VW8pDxz52F%2FGShC5%2BzI%2BcTf%2BRNWkrl08iF5jrEROWHvJKem3vPjSsYdE5KDGL99tvFUbjqorh8IsR%2FxgwD0KOUkelnO2Fb4Pj8Sp8BesULlhYw%2Fgf10w4gfZYmvlP0vrOOaIiuBptp3fz%2FoUkGubd3SeeKrzEgMgy%2B2CYAYyfP%2Bm4iAS0stHZwcwFrJTq%2BiRHO6s%2ByrxC6KYs%2F9HCDqZzsZ9F4vlHSLb0eAhsAZA%2BT2qpySjiibjg2Q5hksE%2BRL2NOVrafOH0ImxLZDhDH8AtSbx1FKEeFpYgKuVsKd78KavccfQ7Ehrg5oIAC6o8TnUtEQp5oqp6sSQuUle%2BhVoCZCWSzobwyhPMI2b3l72vCXiAu9g5993TZoPZVwP9RctgZduB2KqgsiB%2Fz9xUPGClgcrGD2NUiXYX0oyuWI%2Bf1vkr6VOTwU4rC661Rx41hU9ZeNuHB%2F5Fk%2FWmNjFVyB3diwi3AAN9dlZtsbGSiiGis7PHIYzEVq6Guah%2F1K%2Fl5W5W4r3I2EoFRrALFpXgHn3GL2a7DRhcQUuxNcDUfrLH41qpqA8xPeQcqYv7EixHJN8FBSt6vFfn%2FBjVsPYUoKJQHpgM62abrfM0qkwuavFyQY6pgHq1TmES7yNf%2BOWMpaMrN7IGIwSja066GAuMgpt73tyIeyAZ5XdRqyjMQAwe3s7gYw1gD3qyuEWFJJZlJPlr2c6BRu8KD6ayO5nuORlxdGak68AwsmV7tsTv7uR3nvmXicwhFQJx3DFbtvNjY5vxKdH4Lgc6P8XDrF2%2FkMteQ4FnrUxJSVP0QyGLiqnkjoLz%2FtvAJjzqUTFq%2FUIc0Olz9XbJvBKeqEM&X-Amz-Signature=ef92608dbd7b3f94278f59878b7b5f15e3cb3f0b0b1276dd48566bf50295059c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

