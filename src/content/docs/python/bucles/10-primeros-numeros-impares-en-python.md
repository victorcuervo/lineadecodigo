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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6PLCJVO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T232401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6VCMKhB3D3%2FX5lYIqcb6uG67Vi6FZCHI9aIqTbtNcjAiAlUtYWW9fozuurFCy9zuPeZdDblqLNt3R4uc%2F4%2FUJWxSqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM2hNLN%2FMP3fLuXJmKtwDkjj2J6Dte9j8dwTcW%2FxnRsGOqnDWPS98AIzVgxcxU8L2%2FO6HKZPosrP9LVlpSqp%2BXs7mho6c9ibiJI03D4Xq5zC46oaOLP2xIUzkRwyOWs8yWcxJMH0GQ5EXVsaZIEavCxsEHvA0fAWvmAthuSu0DNCrX%2BMxndzLJknP4d1foKQREvGtu93fLgP5hJZn64Us9AicaU5vjdWMwLEBW9dlm5gFKdR085PfqunmGkWe54auslMy8kR2OwBaX1%2Bv49uCqNCBhziuVtfXEMWNlM6VI1QR616E45GtOsWtCe25wM60T%2BharDYusO6vFSKgE2y01MRckFcr1C2VWiMGTeV9Ex43igA1nIXYNqfVmd927ylIj%2BWiEuWeICSTWRvA7YJ2vXlJnexdRz349kekGpqDmXZiDni%2BEwFJ15ia6Cws6Lv8azqFmxUQpF6mKW2IubqsAThW0Q26VWqNgY9emchC8BIGFQxdbX709t%2FYwbH8I6%2Fi7y3FWOz9OZZ8TA0P6qExvFyyz9Dd2u8nnohV63zA%2FV18GlktLg1gF1Le1x9zhWwMsvLsfrYCPAvtlTqnlhYXxCnNVZ8wgTviicbL26b75zR4H%2BQpjfLYm4%2FzsrZip4FkjLoJov0xzoWoeiow44TYyQY6pgFPVY%2FtMj7glMS%2FOcDGwdzekSVVBOONz6HfJ5kP%2FJwhoThigP5pC0Pjef8uLuigYYQNF0sgE2MbIusnqetCTAFfJWTFsxJBS8gzkcyNP%2F685%2FdkSTZazL9%2F77wc8S2rGExv8vI9cn6Jkk5kxO%2BAcVfO9pEurnPvv0%2Fl5bT7LxrcMHQernNT9oGn8LKC%2FpADUEyCxLuxAuEdW4%2FsMZ4bN5rnck%2BaFzj%2F&X-Amz-Signature=1d0b09a64eeb892ea028f8f506a53ce9302c00abca6de92500f736abe76b38b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

