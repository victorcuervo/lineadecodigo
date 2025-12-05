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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNLLV7Z7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T185905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGB3PmYe2Mwxc%2F2DZ%2FsDOlWYoO%2F27VMlssygcE4Mz75MAiEAoZc5BywIBXoiCsaa%2Bo1RP5WcfQiO7ZpfkIIOjWjXGnAq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDF3kR7DQcOKQ5iEbUyrcA0essBoHP615RiNmWRIezO2VMymdk6d15yvR8lm5ssOoD8HT%2BSCURD%2FoSF323icB0F8IyJIDhcHfUrj4tn7hiRKgoWGMoTPmLS055xPoY1g3XgkTMOzOCmmyeZzITZEFfd3mJcf0spr5Hg2c4UwAi9K0Jj5WxXkS3FjxgCq0Bi0OjYGgXeSdB%2FV44XrI3Fq3e%2FO7om2ncl5NaFWqtclUiicCQHfNbA1YziLSezMKFnEHOIAqldh9Ifa5znH3EDTNJIJYnwCCUzHDGnwxryGhMXjCnAibzw1ki1GSlCbnh%2B4ox0qjxeWNu2nsz1%2BDUsDZ2J9CN9FaqJjV%2FPeS%2BFUjRoVDGmZaIsptsDJ0PJOCULTPjal%2F4b9259il%2B2k0YZ3vftYDRGz%2F9oDvznZddmDwJOmYeOqFuKCbeJvkdY1IcQt9%2Fq4jt5Nw8OWV5pQwtXXLwHJ4ukwQ95UNUmzwMmi0%2Bnj2C597akGpe5ddBit94hgttfjPWMDFFIKeruwEx5y%2BD38nJjfRW4MPPwRdNFfiFLi%2Bj49WOhg4dgk100SdZ1nkpHXKe5W8R1Xuk63QqAY0H%2FKT0sHDzSH%2BWNul4c2DD4%2FED40Lmdgm0Boqs0fSnuN4k5B7x0KEGdH0rxBLMJXxy8kGOqUBGKufFj9R3oXU6dCQN3ca0lxXHElY4UU8G1IvUmQg2nqG%2BzsuWSIIaFElLwdYkw8SZIREek1e1OjB7Z%2FP1ZDqw4w%2FvQP8YLSFlXY7Vt7NMJcWU1H4yeUgbaH4k1kmyn7FRUHX1kadaYFeWv4RTj0280FAMj3tEmK2rq1t4WHi0fb88Py38DrhqGl%2BRj41GHOvIDf3%2BQQbSkS6gGepFESPqakjKFPb&X-Amz-Signature=4d305f9b45c693797affaeeff6189ac45c8444e925f42de1b557118bf8634288&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

