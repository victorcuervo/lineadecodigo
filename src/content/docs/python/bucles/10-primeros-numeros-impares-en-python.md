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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A26JQXQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T001310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrkc5U0YE%2F%2BPrBw5jCpta37ahc739W85CPt21ejug%2FcgIhAMPGVZ32baQbenbP1R9KPKGnSHV2uPh34B3Jjbue00yYKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxowgd3Z2csxKsc6scq3AP4jDUXtb%2Bg26twQQZpGeIxWatzyiROoF5WiWqzd084KWo%2FKtxYuuWl73qtUKQpAI5twqHeyZ6BWBx6vEHokfKs9tm47id8NybBjHonkqoC7BDAyOmZ52N%2B52v%2FP1Hx%2BE8o2PyM0bQcGhkJYKozPQEwcIOpN6CQ7r4g6nCA2bqHzItIJUy5sYEVMdNxjaLcodrPGppAWBAHioN3MXUJVsXdACfcoSDuHtQzAYI6p%2FegTzVmz9e0qaVbL29t%2BUy%2FhwZAkK%2FYtnxuknzNGDDrG8ZawEeM61QX9QYS7p2SVL6HVwVlY6f%2FKvg%2FDLNqyf14zb%2F8VlyhqlGsvf6z9mStOYw12PZ8zCrAU5kx1XvOb2F6wD7sbGs7gupj3NQ4LdbWFjJA%2BqfIe27UZss7CkKUkSpRE4r2q4cY4%2BReW%2B5nrNNWHtUP94Vhex8is9Fr5WY3TJ9rMlR5LvJX%2B4dxvRZ0e%2BWvwh0CuWYaPmmvyJskDj3EiTjv7vS9lpUELsm%2B364%2FgptzQBpFLbB2AhPACwpUTpeKYwH013iBjUxnQAJ%2FjzssZ27YQgXxDTYW8zqbaueu%2B6iXHpPLeENMHZkM837iMWQpThzKwP0WuMH77w2%2BgTmdTIX%2BS%2FON%2BhEC8jukvzDPodjJBjqkAciWe31Ad266wuGHb6sdt%2FUWJz3qfmiwg0wgj%2FLGFwufluMeDu8IDL%2FvsGkxH2ZONTChjKHKtld1LXb9l%2BLkddYETQEh%2ByzjScjNHK9%2FZgZrRdt%2FzmfECRoBPP0yAm3wBQ85NnS%2BDUGuiIf%2Fjg6vYKKEZAT7sKw9e5v%2FskmVlEteXDLeclzRwIH%2Bglwe3U%2FsNvqtUHSAGXfdOP95MfE4Z1QaJfBu&X-Amz-Signature=7bd8beb12377c8558f87f50b775bd7705849a66302365c1bec438cd99921c685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

