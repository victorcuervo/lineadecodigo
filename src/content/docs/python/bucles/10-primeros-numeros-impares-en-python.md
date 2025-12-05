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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4O7CBWT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T193840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDS%2FFlifCRSzU0vE6HRVTpWP%2BoGgjGYmLo5aIj3ELG1oAiEAkw9nNqBkqjEevbQsKeAN5WUdT5JCujq8gqjj3zurGYcq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDNtJkuX7mmHxUitJxircA4cPB%2B7qkbU14KxhaOL7adinz%2Bp1vTc%2BkjTwjrwAhKzcXER0K7Wq0qS0Z7tZYwb8c4MMntaL6RAuDcmxzZtIY%2BEnCPB4yXP7JsaVBEoMeF4HVhJqGW86hbTr%2B5TWg1wp46caJsMm%2BVZI58dubLk7tvCZf13Jb1DvjBql4%2BID9fYQ8CHjAGUlF2sfi4CejikY2mFuLB35ftfzPSm5r3pcizsur7LsrcQZeTN6dK9UlSJCD3k6mCDN3vh5%2B4tcVStm7PZFUxSV3GE3tvdxLk4DcItn0dy8LadRb6US5MKHig%2FtHowIBtv1Y37InITLRHWN%2FAdUOzVDYGcu%2FfDH2uuI%2FtVGFNSM94OVfmrgv8w2H%2F123Ac0XSxVAjjold2f6xHdJS35cdRbUMSNkfpnfShVrtl30uJHszKcmeBkEyV4VPEEiGkfYsXkNGblush64GLn7Rs717GMlyWdqcr5IOIPY393Wyr6iZGvg8FDNVW9gSs7khwFVy6jwISSiDl5UynC%2FtvGmJ3SL3eZMWg%2FHiuyTw48J%2Fv6UnYXiNU3rotNEdHGSLmRE5Sl%2BCtBbS%2B0FMronn%2Bh69RY6N9vT0xqh20Z8WdYrCdk%2BpDXuppPqGjGYaNIk359aNsUrJFpF42ZMI7xy8kGOqUB4mv%2BGZp222p2D%2B%2F7YA7C%2FCKtLOMGw3c6PSywVKFtVfnKJOH80Fx0rtNO%2Blca5mikGQXXuD6A14R9QQQtvzEfl1oPfGeY5i7Jx05h9ZcpKByY0dZbkgiXz6wZeguQKu%2FkqR3HBWVFh%2Bw3re2hBM%2Fjo63%2FqXBVillsU32lA5FrkWYtFgN0qplzMdI44jGyKTHzKxYMVNSfc6kJgDvB1%2FqVH%2Fet91HK&X-Amz-Signature=3828402bc64f51dd7258a940dd22bade65cacef55637c5ecffb2b76a8ef176c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

