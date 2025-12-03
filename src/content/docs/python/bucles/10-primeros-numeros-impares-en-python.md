---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DOCY5W5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCKreJQptpR8Hlb2NQoUwGx5FirA1ono5TBaWfPwY20ngIhAKMOCBiKRe1ra50ZUFEN3t0sOeKYMrkTIyVhOaqicC3gKv8DCDYQABoMNjM3NDIzMTgzODA1IgyhQEzxl5UOAAzstUwq3AP9ASKKfViKpWMuOerIwDZd7Gf4lC1qbebyvJ0MOp7DorpEp2Tt5mX%2F6OsdGXWpSJ5e1rroyDsZehOyqzWni1wJXCWdhe9nId%2FDKpFRz60wwiA0YYtywtZ%2F4jrWWlYezF6H%2Bus%2BRjqSKkE89eEgPI7dETrYTgIFNDTn64aEtDXFFbjI3QUhdE211q3aNI57vXJA2cS6CxDv0K2trytD%2FWP3oJTtGVz%2B32eC%2Fg722GWVv04iBh4w7rA85Km786lbibldFufjOXeWrhNsrZsFJC9jsWGloPhGDy%2FMr279db%2B8hrxMVXZhAz6oa9%2Fpl2HPJaj4WeQwBvNrU3X4Wlfsm56vFQ4cA8I8TROn5219NJCCUpr6sstNC9Zq%2FMvf9w9PDGszOptkZ%2B9jM7lKNcu%2BjYbwbmy2IrAK4uvu%2FvPCBGHuwKmPgJQLkOzCD5lpGapR%2B7kmZEhJrRehAxwZdT7VXiA%2FSKK%2BcBCPuTzFXk%2FjAXoBg3HIprX%2BKC84Yxw%2Fk3Kn17OnR5%2BE62xSDJhc8cWon5CsbAWRtPjhr3FbDsxJZ3wW8GHG1ZS7nP8waALhDtxlMTQOJqanKDyn1EINN0Bxa8QqSCnkh%2BBmZgT2iNnkW1EQNgq6rbC%2F2ktnNPlgWDDNvcLJBjqkAaYvEvwWeTOLOZ7Qenny%2Bz6d16I%2FkjZ5P0o9wSbArgYmRMfNrnTY%2FVE0aDYP94JePsfAzQuSjcNHeLc33FGzlop0glDdm94Ejn4TDsuUe5s6hzaiIjAEeCDaMpFmqcz%2FawmQbVkHSubEB8uflF2qbE2fOworufUUj%2Finw7ijY8ZvBUX3RXKaDGapVYBQMSgcJ29RFUP8As3HaZqil5E%2FhaJdy2ds&X-Amz-Signature=4dddf1b69e3b16c869fc614e1f5e02cb09da0c83bfba15395502edd37daaadfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

