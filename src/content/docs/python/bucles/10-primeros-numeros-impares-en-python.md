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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFSQIE43%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T063230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZs%2FWJTIbX1Ez4LuyYmWBFKIYLucK67c5Wdo1uyzAZ1AiA32kAfRngRrKUO%2F6G%2Bcw37EdBLwH4AMXwMDvjOTQS36SqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwPEuAMsp1bdCZj5SKtwDHVQlgaNC8jC9Ld8zAtBv6voaAgVgCYQjRpNKfV8a8ByQ9OIxOXdnXWmffVYA6wlgzDPGbo4pZrLiZpyNBdVJNRTG6Li7l8Myj6nqZochPxDl35%2B%2FoEAsA5Qs3SbbaenEUNzKmxskfSbClX5rFGmSiFzJXxgj1DHuS3M3pkvH0by0NcCGq24GG%2FBzYSazbvk%2FcboIUkXIZVE6pe1w%2BxDgpdumoqSaIYCvhvSXqTLchqUddHIEFKs%2BywDI27w6HtfAqGFgHK1xHfM0nU5pO6D%2BPISkHlSFg9%2FQKhAeBtrKy0EEVjhdoB0Q5SKse7CCPZCu%2FSrgdci8wvONOWIdu3TmLdukQKJ3e7qrx1Z0vt3x96%2F3oUwP9xG0Xn57dXm69fVPNrOp42bGuGh9ARBrrhLq5a1jr6qKyDPU9X%2F0pPQ6Uhtc7%2BK5A9n2juK2L6KUdHqlSs9P0mVu5Dtxzhvo3ABy6uMgLKcqn9R5J6YxvPzBVf0xQH4V3kUTRJUpvWwpL3wiivybKs2mzvWa7De9aQYitFrPANKFaCJC%2Fc3sOnUPlulQF6wvE1ggWiFdtaeYMA9NLePXHsdPQCTvWH%2BzPs9f7K3ZdVpb9%2FAzMv8%2B7kvBfNPtQ8xRd3qn4uzvbJEw5OXeyQY6pgH13Ke7hyDuOsecgvMY5f44k5lOPNny4PxsBhVe3KYOGOgbg7tNHx2UjZl2S39w%2BHHDSP5rz%2FfIM4d3e05K%2B5K4bpsBCpE0gXxG69HK1hU4y6CEiaXeajmU0dGgJnh4svpSxrZoViepGlXM4aJ4fcvz45%2F1J2Eks%2BXz0CyZyJNYt3lqu%2FdJ6Go%2BuJy4Tn2w83iT0pau%2F4Ipc%2FY1cgKjjRQ0CxD5g8EB&X-Amz-Signature=709f4747acbbd41dd45eb30543c6e5b6d65cd04919ce45519b83e7f066911e6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

