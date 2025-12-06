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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN6G2R5P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T063931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH%2BUNzGtJRPjxv32och142bFWc%2FSnbxb29ThB%2B5%2F6N6QIgdHdqX6rwgsRfk7ted505Mc0UQCZYO1QcfVgqYXIC7h4q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDOj%2F4SQ5JndcsTmWQCrcA1vm4P1p1shUTs7op6t93l7NMHDyA5BzEmfqxwWUkAvY9g6mIkR4Us4GIOgPEX2yezPPjM4zBoZF0KmhQfADWkqlzFYxmvnBizfTs8pmydifPBl8iEpgO2lerZjur6XVjOrwJbj833xsFhQG7v29VmQrY%2B848r5Z4aWQIYpLjrrv%2BDxDxW7qYLUDYKI0AoOgwl7x5EVZOqGhCdaFpY8gJCAUAPEfbdXNvtJy8zRdV9wiIw%2FiS%2BQF%2BJmT9BH9fFON7%2FcDMuWZX1LUH%2BTp7DQ1YzXEai4S6ZHOG0gkDXoJL%2Bz03CSnyjksHeeqKui8N6lTuXwg1gXL67XBxdL7yUR17ZtXjnEkcozS09Jy0UU3mpGNeb1EhjijATy3m78w4RQV02Tdvb18V6jl1R4O%2Bwr78b6%2F8zs0lYaeQUJVgGwDwgj9QgOYxlDybndx79oQNaQVhOB1jDagSHGnhcP2kt0gDRYUOMorvf4ZOfqq7AsUvWeTTrCdgMa6DakZBznBAnzaGh6THT%2B9A5ENdcwL6F4NeKW7jbPKetwI7%2F3b3%2Bj4QRmp646qkKrKtn04qTcNMkVptCU9HGgUwyUutkZw4NQGjteUmPrbMEZULMbShl6jnScwt63OWBxXB7y%2BMNwYMJeez8kGOqUBLIQrJGvhhdEAGaWkinFO2%2FX64fvmPhH5RLWeJyXXmEEBPDfqlK%2FTHMsFT167BW8hDQCnS1n%2BV10VbFHJJm6EENkSnTIyW3umSFUmfSkuwurcbk0%2F1L0mziIXO%2BYtvCA%2Fs1S8ZvzXIwc0S4skqNXEfKiodAMhTKQMJhwoMMUz1EL3F5O4Ny6K7ZUOOIQZVM27%2B5O%2FpIjnF0MRlIcWihkAgQfuKN2X&X-Amz-Signature=4227aa4adf051f1e6c170760677f8aa627b2d17290e08919bcd20428a4e05754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

