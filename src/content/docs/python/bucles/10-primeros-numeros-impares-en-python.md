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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634PF7Q5A%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T004624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FbWeh99iqsHVpb9n4zP6HSz7VEPB7P37ucW%2BGxJBKcAiBODOz7nWuU3JGvh3XS6t2%2Fx3%2FWZlCoZD3UFntSlxaBdCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMesLIGKd1bpZPv7sSKtwDLSjw9Y4FeUgOJHH%2FGguAjJmeCyqg4QBGqmVnTogKgy1o50SCBUOO07slCnwIN9t%2B6whlUn1jsv%2FbTRdAzprona7qS72QcY06TA%2F6ovKMDX7pYw3AE4UJUjrNALZgURoY8Qskd4wwQNJOgs7CYPcHH3AJO0Z%2F7trRhW70qcMpeUaZ8EIJsHvhu51KBfLcFpiCUJ5mMUB0uaONuqs0A40X5KJESdRQ5ir6GFh4Q9P5ZYMw9UTidwGxB4MvBkXasbCN3kDa22oPO9FQyGBlIlSOmcLVcDVC1UB4Odz%2BWsrmWAMp2T3g3cnUXdD%2BlFU%2Bw6QXifr5h9%2FavsJ5879RiusFPW8ArLPcOfSfEKbwuU%2FED%2BKEPcvAgvrFfZwOeMbwsEnmDX69sDDLqxu2KviBukorSQjj6QC%2B4srRm3%2FjspTQJ2WDoaz3LKqNuDxgn5iMlBlPC%2Fq%2FNwPOj3pzvjx5LajYLbBPuA8Ia9E0q0riHAqu4bUXR3FrTm%2Bx%2BeNTyWVDJpaiDhK5Mls2ZvgOvBYIJUhm0KxLJcleHTpRLcSTFPbRoI%2BUOZBeIQCxPGGMqD9%2Faw%2BE9Sj%2BEqlCAmeVtTTSWpTOAuRriwIvxoJh0KErqXpNFAtzqIWhzSeNZAmnnfIwsaLYyQY6pgENgj1OdjfB%2Bc1sSwpS2V4SFWi69YZUkkeYHfnmgbrsh5Lp5afunb55WYqlHrEPwxXrbJzFd1zXqLWHQQXYYXY1RDccm2dm%2FybEgZh%2BzKoUrlcNZRkqAIXQyLT8YC2NTfzewOwfOS661VIl9GbHWNwDM44PLy5nrzUdXGD6XqzbTI8ZCe431SFE0pps85u64uG39hnY6aL%2BBLQiKb%2BV%2B5ogIdU6AMLI&X-Amz-Signature=417b1dd4123781b39f35b371a5119fba064e2428d241b8a3c38b3e3a54f87c98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

