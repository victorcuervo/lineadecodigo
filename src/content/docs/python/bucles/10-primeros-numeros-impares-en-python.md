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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FIMRE5V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T175334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHs62UW4SR6jtB5sr7o0nHp9HPl2mw%2BhkSfdtjxWpmKMAiBkfFfwTYWo%2BTVgtycskI%2BuHrzd5R23rnb81p4PBr0abSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVcrDnOpTY%2BHvwcoXKtwDJ18xfUI%2FpVlVkpXp44TIGKW%2FNMUfB%2FVtigy3BeXl42PL1hkEPH65g6BEHKTkYRxUQTy95R0%2Fnlw2zgCzVRy1LLrLXZDKvu2m6jjJuBgkppkydsOV9jDMS8aFzMqeF2fY3qNxhxKreYJdbWEGJkeo9IAg6f%2FJ3LIMwjfuIvxwj%2FCzpnmR3vv53p60wxO%2B44dq1Ucxbcl2GfKktwLQwuizGuShjoZ%2F4x1EPHd7ksQasCEO61dSvF%2BUWW8p7cHMa0A%2FKmW4EnCe0wFAFH%2BrjzbyOjcXcalpz6lnETG5drFjGZQPVDOEOWfHYSifyTr4T9OAkoxrYtJj3lpjQvP02N1k1gr9bJN2iq%2Bzx1q%2BRHuhtzXxzJhhshOtHJmTeLL49lFoZEN3oRbrDAdr7QVlSGBrU1nOaiAqngNHjgS8Fl5NQcydcprpfXJBK4Gf16Z%2F3Y1TZL2%2F4uUf%2F%2FuKCo%2B%2Frx%2FTezd12Oze7LAg%2FUAujqHNtE%2F9Dt1o23UDHeG67C8ozu4JR%2FuqiMtY1L6xIigwPDZFNyqCRmaoYz15P%2FDKdbls77i6DiR0vh%2BtdzYlMTxNCCfACSVIkRBpO492LUQgXxKSP9N3Zd5hnuohqrTTb7Qf9kAU7TjSpOLV8L8quaIwq7vWyQY6pgFKtl2kSBDRRzU15yijEfr9UyOKFIYewgcFM3O6W97I0iCcNeMySCvFXq0IbYE%2Fwq%2BFH%2BpBvuS181ttTk%2F0S4ACw0zx1uIsMcuLvihUiw8neVzNStv3Xttvhkey8iM0lFAVLuAS87l5BwTUhzX60b9nfLMCDQmJwODjDqg8B5qBEt70o8A2LcFWDXMPcDlyZ74GMP3s%2BiiiUx5m8vO%2FG0SV1PNOIbwC&X-Amz-Signature=2f51caf5c030574bbdec1de0e887df98a1e162264bba727d8007b4738735419b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

