---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q2UOCHC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEuxAZzcBfCo16%2FQIuJkd4FScKYra2rcx8iGwz3ZGga4AiEA%2BU5o9Eo1hj2zqJgjwY3QLJEV8zIrLvcZ3wCq6tHkhloq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAq%2FTUkY5PpURo6%2BdSrcAzN0rIx%2FByAlLKUUXgh24Y6EIwKGNM0KDHZsDUEp6d%2BYiBETDNy3y7SaqC1ccfXQdZHX%2BB%2BjZf%2FQx%2BtO2eo4eIpnI2eoIaWIWV14Bu97BcwUrKI4AraSIre%2BExvjSGr4VMjHBF2npYbGaovYAlsuKJZV7ZhEAkQgHML7v2XXM3G68M2jKAtDBkHf8RUdUi5fbfNY%2FZmbYor96hR9hUuBjKtWESEygFzF7m9gVP1sl1qF1wqn1ni7LBgw1nM1kVeKyLRuWUFhZjvX4rxjenOX4xH%2FnZ54gAxgHrV00gXFjlCgkoImuGH2kcPOt15LRwiuBh2JKJSdAaGUcEo2BDA70mtSLP6PUjbnRqSgTwXqQjPj6MdT%2FzTW%2FSHORjkCO5ZsbnBgM37z8aQaTH0Efjp47V%2FHvyBbM5Dm%2B6VrcoObQPt5D40yHoxP3RO71LPSwawdhprM9kU3zCJhUZ2db%2Fn%2FKlroh5rd4Vt6tEJd%2BtRhFab4nsF97izvvrxwIdlZd980IOLovzh9cNybbTGzVhMphG0D37sfvkxdZYnr5H%2BiG1%2F51yU9riq4JWvoc3%2BnlTV%2F00%2BPYKfZXetIHACBdQsWinnF1YrxAFhR2b8cG3zEIq5I3WpRTQTjMiCjPwhRMMLnxMkGOqUBtmnCUpXxE%2FdGibzjT2QEe7HDZV7q5B6oK9IjnuWGA4sjLbi4yu8GKkIGhmoIdwi6ehDkUw82p7NgqT3pDwZcUQgCn3Ut8gYS9EoMfR1V4msR1SQwxRvgoK1zx%2Fn5EbYRAe8rr4PcjnutKaM%2Fq9C%2F0q8SFUYMps6ejZF1QtgPYkJPBYlQXEpBm86WJYVtCGMQjIR7783j%2BXrVdEeY%2FRKwWDB9%2BIVZ&X-Amz-Signature=ce68deebee457f34c0156dbc5eb5e1b3ca220dda51f467e3ecd8986abbfe9d20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

