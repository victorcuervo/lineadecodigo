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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5BYQYBE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhXeyCwb%2BFUrv244GJT37B3KSXbuZCWSp5bPwCK9i0BwIgWZV0Mi%2F8pLRCaBW5bkzkN61y70yY3aZmHu4FDj0LqQUq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEf%2F9uzgZ68oVAac5SrcA99vcXa%2FEB0rolfECus7CAPWEotOL%2BH5GJnQ%2BWu912h9OI4QY60W6g%2BY37Hp2yLptZ07d%2FCdezpmWhLfV1RoswfTSOxuY%2FNponPy6PNKjcNPbdm7z%2BPLX7GxmhQRrOfFNTbpolDqJzyy6bsVC4lo1x63kwqxDP%2F0aBhSRnUb1GOwVQm%2BtGoPt1j5KsBMrfHZfoS0CgGPbaQxWghsDBurYm8UO3vQB902wRpJXweSYlPAhoYIFzucXw7uUYEbo294nUpqVJTDiNWVdWcaGG1rj48y3sJIO9FocIUZjePlJuxAI7gzctzlG7AJoaOCkfaxP28CalaNS%2Fas%2FdQMDRnoGp%2BCZoYosYHC3YGgDZZg86E2d37zDO5SkMDgLQvRBlE2o0Nw1rRqji%2BA5yrpQe5yUdHenD4aC%2BCa0Fzv9e7JpEoh9og3pynd4XlTgdCUADk073XUpjZlfjDX3bCUfky1iKyddU2NoDVdqRaC0F%2BnIeJyDom%2Flf7xHn%2Fa580UynhNpnr6bSG1J4ifB35bv2ycA0tKu6Bx%2Bep5fNbKG0pS6sO5t2oxNxBd3Hv0woMdNjr5jebfKyDpyaYMzyAh5Bn%2F4xh79Mv0eG%2BKTpSM6ZmlYU9XjQ8l%2F8aj8rlDhRB8MJzry8kGOqUBmmMTR7eIUMiCWdd0rWCQkw%2B3C7d7fK4f5DDI5sR05DR5Yjo29O4DJ6VtyxsUw6YKrCI%2FaepXRWhP3h1aOxig6X3TNDWegdSF9OQ5kIrlVE1dgYMRT%2Fd5umbaQ8XZx2mLWbtSmG0vWpRKppuK2hVfUFAjxeU0kmGgIdDMo7LqJ0R%2BFzUvGoyGgOMuPvzH7YIszcj1s8Offy8M5%2BvlkBncHfdirQtk&X-Amz-Signature=d869d7f5eff3c6c5e715978fb9946e64e0284b8e83cf53820ef0d0d7c3faee93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

