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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SY74A5W%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T054546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqbvAyxmC%2F2OZo5sJS9b1o%2B6a0sZZ8%2BcSdWnQozIig1gIgYddMnsqJb1%2FiAWyevwwTVCMdNKm39nByqp%2FMP3mS91UqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHld%2Bs1jipzrOugfSrcA0RCIAB%2B8fl%2FwDfdGSC4r3D1LYYvLLkpi3TFQ73bK3goUPmYgcvj4zkOSUzDvVjoJT55%2Ff3v23inbYJNILSBemJgsUAYhfeNaFP5d89M8AeTBK5OkQeAB9ItA1JoqR7%2BYOjL3ayPyvWmIwGshqRp%2F%2BFd%2Bwsgj0dodCznh8r%2BWcK%2FsJiUX5S8W5jzvQ%2Biq1skS4u9nh%2FI%2B66lOmMfoOyP%2FhRPJcuvURhJQaoMdih0ldFHzUqNWw0pn1KHKpyosly4Y4NpwOk%2B23NdqYe7TP8DdXIAf3pb1cNH5HWKUuqGY2CGcYQ3q0aH8yYe8piftJsUGYpGy4wa96RNgEM%2Bzj26QcD6nmEOaEXQnbW6jnr%2FYc6AXJSJ5kUXb3fTsfAXI%2FL%2BNvnAWnjdEDAfs1gPnohah7fdS5rGoNucELkx4FEjMvL75oeemI8TJqJbdBw40MbKzaQPVQg35mEEzkrQ8G3r9Fq7%2F5VevfHpR91Iv8eiMT0hep0Mzzz6cVtTWci5QHKUvgkAS%2B1vtOdRb%2BvSFeA%2FW1cpJ0a4YN%2FTIE5qN3uexCNgigXglWx6WSh1zRv7bU7H533yHIayugEnfEUZG6v7Xolg39gLgQpyK8o6Wb%2FVojGjLWpjYVdldzdVvMqaMIS02ckGOqUB1ucYkDquvjS24xVwlEZhDnwkutYAOK7AQCoj8txpIWS1APLp904%2F18PAnXNhKa76cWu20JeeXt127v4Z3HkaTEGfWU%2Bncw%2BKLV4t8CwaJfmxvelzW4uSsilK9HJ%2BVjxzfwer6ATMJgvrWoxczWGKCY4bijU%2FaSPXMK2zGIVmz4mn35fyl%2FVe56qS4hhlUpKQBIf44sLq2%2BLrh8r4VTnTaEcFt%2Bhn&X-Amz-Signature=1d850f9254483dae6b8caf6da51b9071189c9ce657143227d3cc3879f9ac070b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

