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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N4EHAEJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCICH5tFh3W8di%2Fhghp%2FTw6KziRqr8XsEUkY9UAXKVemQ9AiBN6tVfXsj4mqhtWTMnuFLI60YBTRTUi0rpQoRmmK2PmSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMaydToPm%2F0VdviESWKtwD60cB4FGPlVsTUYln3ZHlDjBk%2FymsABv1jOmXKV7xqj2JZWQXMWDBm6MCeehMULkOu23O3uoCjCU24IjwLZpauoF4z0qBYaHsvn%2BRNFWRw15Z04epy7MHVAlL3Mw%2F%2F6YfV6MBC8TeSo5yTcFQmTS9WnwGE%2BIa1qrADQJZUeaR2o3bkV%2FQD3mDKGKPRCtmKMd3y7ywvTuK%2BC7cLIz4SjL%2BTN6qVxXVyUDB%2B%2FLHvChP96BdjYg8LWPkRG5Na5D7n%2BnTv6WPupJtO4%2BRy5MpeuQ9mPbU2QEnFG3TCi3mQdZamZCpAiK2AGVONPqL74SY%2FC1r78kplcelSFO0O3VC33Y5AFnoamPjD62hPhcs1BrNY0E8BJW%2BlN1Er57Y5CjV2Qd4gYOJNE3caRK%2BHwmcgstOW1u334VQQJEv4pNu8knfkJnrIJ4IlRoXfuJMm%2BYBfVsOWbUL6zs5RHj566aNMlvcgrYeGRizWiTtuskdxtQwnax7WD1gFgOrGEe8U4Zq7fAaYkFZpmLuy%2FzWGa5C81%2B84%2BoT1ceAgNcc07kopfoaFOzSj%2BSycyXhZVyr69c5lRZJTZQ9BQtKrCWxayr58ac7R2h7qW7elKnMn4RaC4eVDxbu9YV8jZ6awBfn0RAwrMrEyQY6pgGvEpPAxTwJIoavVYDI5UckChTYVnAlEOk2svpc3Fd3RoS1OZ2%2BtT%2BFQaNJ9p%2BO4uCLzc4WwkPebzmwl6a4EvUG2OTLufhqFpxdDSkf%2FiJ5N1f6LupLkmopYsTeTbwvtqtQGuNVqilIwA28TpUopoLFvN2HpUzVpOs8rFwan6F%2BXm0ddwJivUhwpdik40syS3sSQyqSC%2FtEceB9xYTl9lE8nLvHPzBU&X-Amz-Signature=d6fd1aab03c185285703443f434ef762de861fb4eaabc36186d34bed1f89f305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

