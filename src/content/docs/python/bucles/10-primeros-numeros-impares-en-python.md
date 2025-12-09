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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V3F3XQZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T000443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcFXbBPZUTYBvEYti%2BE%2B0Xwnks0wZxq39TNsD%2BNjX1XQIhAIYGB04CrJkim0ZxcTy1SOnY%2BtDvSRO%2Bg%2FRTxl0kj%2FfgKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BDxqI7WHokej0sTQq3AMnD2MIvpLbeY4DFGmbM%2FPLDQ%2BgJWEL0DHL0opmYRWNoJVFz3k9eoK261DBT%2F367VisvrrK5v2Uqx4DZPbCvAWFFjVMWYb7fl%2Fdp4bpk9P%2B9VlflxylCMedbudqVJep5yS7mCXaSLhnpgHNtGKp%2F6R9fc8lf69sFdlgMzubhFBTAtbNCFFwud0%2BnnxGED6eoz18GRkICzfpptvZOYX8V14y%2B7nO48I24B6yhd93l8z%2BF3qZzzVNRFhorf4cv8iXrjsZG51N5ncQZrNJUbM%2BiJKfPEIHeMNESfb48eojdu1sgWirCt9hdUL2PnLhfKO%2F35WqpEeLggOHr4kWyagKq7HUGH7BFYGBovep369yZiqdpl3CI2GcbnbuhUUMWLJSEcLu%2FfetVlnBAAy8Zlvv2OAzQbJGV0tZamHT9X5LCBdgc%2FcGFzNw7D4wUg2il9d%2FSpmxpHxlXTte0XDI0PsJZpKj6OpnO4%2FqkbkyzvPCJzN1iBOa00a80zHXLD5PjrBW6fXHDDMob8u1I%2BP18eCy0P8jtYmco6R8%2FxI7PlUXWTz24JuSIJkYvfmLshcGHyA1L8WNR567%2BesqoDwsY%2FanQHA2dXjqVbkpQzeWyvszUjVvHaQDE97ryRB%2BIcfnvDCJw93JBjqkAZ3MYN%2FgLaNOgdUo7D%2Fa1VrplnJ6qoQ6yrbIKBxodMIojLwobyfdy%2FWNGlVUScuUs970pxVINCLkmQUJU3XES1y8XsE6HuKh%2Bjkhy1mCp7pOM%2Bg6MoYJ6rhmLYQjIHw2ellojaCzPGFF64LT25IhRy9zRSR1cmkO8yk8ZZKj9BJDt8Dnm5fKaY8xsu4zStWKk64OXLWhFpDYsf8cqokBsL%2BbgqwJ&X-Amz-Signature=61a5e64c75775ff379d595d7e8c3faa932feef6ae17731b3ebcc119fcbeff757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

