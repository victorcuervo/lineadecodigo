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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W47SD5LF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T073349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIExv5k27X9agSyL5cnzh%2FoQ9neaq1uI2yJPRrnGPYRetAiAVfCZ1ROku5hUi1SYD0pHSpAZalHbNcX23w1z4BM%2FpCir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMD6uRFvcz6lmalAG9KtwDLyC30i6m3au%2BeZmuNiq15J4aWzOHmPZ1Le8%2FySi50DgqnWYN%2FqwsvevzdkkaZbOZCnxAwHWntSWSiO7ItM7z%2BjM1LrgUxMs2hBM5Fg9%2F%2FhVBW%2BXGeeaJC0CN3DSsGtC7oXtYwNDFxQ9fCBFSHSbNq1bImG8JIgl8f5yXRn0nr3Q9Ce0dsfSvF5eO%2FdOS7toDH8B5gsVn8EsgbzROHhWEWLMoBN6CO4SAatAsFZjLNG%2B063Cjh%2FEDQgCuAm405VtruPQLgHJD8Cjzh8mBElhN60JlHud9CQkg4XEq%2BeXcF1DocK9weWc0mZWXqWNn927IbvCK1lcHImEvwo4MawAYfemuOIBxlx4KFvGAvInz9Mie0FrA55zAMinYvqciEDKq9hrbYy2tr2y2jZyLoUyc6I9O0AzY9M3P4VGhdRqaRyo9CSeUq76aiZAK8xl0zeRdOWjJXmYqnkHZNfJkjLId33EGS8GE7Cb7FJqVPVj%2FEfoMyDzN2BQ0RZ5kEpQxL5PFTqvtbQeWjx%2BjCn0goVM4i1pogXXtYP6WyTnE6FUIegsMgTpweZV8XFTSx%2BGHn6wdUOISOBVYMwaQxx99epZgRb8keEbOFxbNXFa01zoVg1Kmcb%2BPgOidvPmXbuMwvKvJyQY6pgEertLpCmFaaudlmNPguxoSY3q9lY8HdODLzCGqqmE4X5GG8sgKulL%2F5MBBZQRx8azqm%2BJynBU6fWKnf7A48uuEKAh1UDjHXBdnJYmNkfTnRdVmx3TCzSOw%2BVUvZmpW496x1MHb3jmSThSMFol4DVEvSND%2BYVYZEIdiKl2kjQ0F6eCW%2FrjqvLJnSCP9Z%2FhaSoJ87Jwr75Pq1ATt9V1Zi5hYcggrJslh&X-Amz-Signature=4a18d61df42b4d3aba18f38836b323c8edb8575926948c55f8f40c1795aaf78f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

