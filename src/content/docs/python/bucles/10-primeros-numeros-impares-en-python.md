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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674WWZQZR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9CbiNfvJxohWzlC%2FIUbjOpfMHzMSMOaONahuNnhNQGAIgPEujAcg4Ty7Hce%2F8J8RM1dzMYxwXzgNUhxIWPiyydY4q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDFkI0g0dYFRRvQAdJyrcA5PeZuk%2FRRWRU%2BH%2B86yVOo3X%2BQJaaPE1aoIN6MimghO50V4jqSRMW%2Fua6LmVRBs%2FjxrfLNny6wbDoxkvrZctC7MDFta2%2FltAm9Dz%2BB83k6fEfd15BNDAOQoZ2jrzUAJUIg6svy6GcYx5l9tDj%2BYFRzoPBkTQ5lGtK6fP1Gw1U5uSrKrGb3Ck5aGJP1ysGmvn4sf0wy9poHJo4285LLBt2EuealZomdmuHhasQsA89mShKZbv5CQjXVe93AyiA8%2Futu9g4rYlu4iForPymijAJxCzCFJza0mSA%2FfrGNW7OL7uOHbJk4%2FmceBZByj7SbE5tOwroRCzkhBPCBVdquiOo4X7%2B1LiXu4OGLzBYEVFbqOiX9sCTnTpLJOhEFwKyH8KpqLeXP9iWsF%2BGYf%2FDXDpa1tSOy2N8SyftXsCUCNmxxBPsmzK6dSB%2BZu%2F8n4ZKWEFXQ3msO7C7%2FA2bhQbztO2ET4CXGDGx%2FedOta9hoaSgg8xpg4ZqGRCVrGJ8PfvxZojF690871ZT0AjI4ZPJxlBQOlRmPiCO2C7tnCakdsbQKZVoaAYTUorZ7FMA0029qtbDf%2FeQOrwTsUz9rH%2F2wCntJYznCzLYCVvEOmytKoNLQZ9NHow3Gw7YV%2Bv9MzGMOTbxskGOqUBT%2BcJQJgx4tIP4a9%2Bz2Q8tMW3JeorOzq8HqW%2Fmk%2B319rTApVAFR5rM3J24topQ3Siddtuo9I7AnwPorXIO%2Be2ex%2FKspWUNC%2BZct4kJIo%2FrbUd4JELuHjIT74JAR%2B6sCTLXO%2FjKGM7L0BGN%2BDLYTVwbOXPJB6VDbZipI1k0TY4l1QemZBN%2BN9NiNyDOLqRbC9n6p5CxtYmrkce3zP%2BN%2B0pOx8WUDK3&X-Amz-Signature=1f0f6e796f91013b9cbb33ab60df4cb1906127a49f5a9e55e34672bf31ecd2e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

