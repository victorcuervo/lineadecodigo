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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJP7NMWZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC97pvE3fvbv%2F1ZZ4E7rG%2BOnpt9GgA7UAMaYH5yn5hAWgIgF4OAmXIg8PLTLnPPg5dmi0%2FGzumQCek1krrrpQ4g4icqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkrs5ZKJO%2F1H8nq9ircA22kS81cfvNVg3xUGaNYFIb6LfEI3w9CjLtmrElBMj04US8ZIxKzMl4XYdaAKhq%2FAbIsVdVo7uHSuLzh4tqQt%2BvN%2BA3F9UhE96cbMOTJyQ6F5QDrgsw%2FhV67Yq7Y2KSjm9qsqVBELeAx3F9p2dRt7WNmxxZl6TMpvvvlcHNtIlMKqpkAVaxQDQLGr2ReJlOXwPFM21PATs7fvX9%2B%2BeHEnm575NTtAzFDDEBbZgNe3aLRN2XvxiaEwBfwC2c2Q7GskAW5EK1qFnaYix5q2bejbC%2BOl2pPoLLqoxK5i5shiz6O5lJmu8HOWrneApQvq%2F1X%2FvPX4zbW5bVnkl0WDHGOcU2bPdm7LJqTcV4rYPbN74bo7vVwtaLkx3pknQ36Tfe2IVfwrMffRysG%2BAYWcWwrQLKc2fUWOh96Bs7wpqD2HDAyhArQj4Dfp7F2n7P1dTvfsoJfgEzlRRGloq%2Fu4xNJ5LwL%2FOuZa3ycIGnDgHsjEVzmiMnoy4A5Vys%2BqZNJ9obRab0UOySxqLf41xGEAqMM9ozAaMxitSLiDq7bWykMt1Qyj9y%2BV4RPBfz51NCeCiOnngZKGlC3oaBc6Zj2D6Yt1idVpjHoeEvoKHOIcj5VOj4welpcl%2FmC5Y4anZf%2BMLPD3ckGOqUBa7VYBpNf0HUl0c1L0zcEGnD4TULNXphKIXc97q3pJsW2HSeiy9ItlFGv6pLwtqFMaz26U7nEbo%2FvrboIuBJIShXoQCSMY0RmZe4WTXL9bJCbVDaGYhUJ6sgkUvrCdvqM91zm48BZknENaMvMVgTX6Wl2UJibqC8PBthlIUHFDlmodSS1vFYlFzFvukpQG74w%2Bjh4LfUqUavfbzbnhioOZVOa4wT1&X-Amz-Signature=18f13bf54de807f9992f30a68205282d7ef9896a0eed6645b32d2d0d53ccf395&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

