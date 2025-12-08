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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AQISGU2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwXC4MCap9QYmulSUOrLYG4oPk%2F3s1E9NzRcJQRQkAmQIhAP2q9Yde12RKYTizt00QturOOh%2FCA56why74YMjkWzIBKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfjDIHhOt2xPVvoG8q3AP1Rm4AEYrL0WkbTSm75%2FnXHQL%2BL5zBTimUOQ2isIMeDi20TvHBAmav0agFN3Ey4tAu3G%2F%2Fa4ESg4Ne1ZRDItYNqslSaf2MwCz4qs2SjdpXLkZ3AJMl4vUVd0g6nrqFuNym168bVVlKfzEqiUUJLX1QlNsCfvPShp8ulM%2FVGfd4R3K%2Fj5fTty2c0xpX%2Frf3R6TfGXAjJLjBXrpsKi5P42gfFVJ%2BJ9dJaxxd2VZqeH7kE6vgG1u9080WU72JS%2BT0u2eW86xVAFD4qLsuZJU4ld%2Bo9BnqZgqFEQ0HAJCCIRRbCZs3A1d2SfBbXbTeRVrmnlNpcBtY%2B7y3GxbG1pzQn5%2FdNC5MAlNfdYoyOR5Qe%2F1RzvAkP5%2FX6XJi4X6SqS54i%2BNa14u%2FDI4JLrGK4yN3LVOS%2F2LtaSUd3nGrPNi1DB90EbCYu4eHV1OmTpThZVUtpd7%2FpNxBr1ooK73AJ1jA8%2BqMy9Kiv%2BSxVOOc5n3kSg79Y9s5EXtnRc8hlFxd%2Fw%2FbHF7PacQM%2FAu7iZ85g6uo7urVD2e5SHU6M3GZXC5drvypqeysGScu7r%2FTTUNQplLcQIhutzKw6nJXrN4INP4%2BAajzzrpaDjuy%2FwdtGzDTYOvwSvvLEJYVizqUGqfyAjDS0djJBjqkAWAfOKoBRaPNzqTdvbkiIWMu43ojG6wttf8%2BXr%2B0avG%2FmrFbhFOG8LeZv9mFWWvtjqC0RxeE6Yc5v7f6KSKOw7I4aS1uuRGS0Lf93dJfXZ3TCzWZlHgoGgq5c92Yfut2rAmnh%2FF6Seu6I%2BJS5HjPOcBZHqNKo8%2FQqB33fWXrdYFSbtK%2Fr2%2F5mgXaMkua46GirCtTvoO%2FyXEEkI12A5iz4XBxZOON&X-Amz-Signature=9b16db394e0651fa9fcbef8c4cf5fe0eff04ff313376d1178267d40dbbe2d712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

