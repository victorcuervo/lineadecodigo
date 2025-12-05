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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJGCOF3Z%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwObOxW%2FaP%2FUoVm6vuBbHi4G%2FS4Lqj2YAZ7A3CT%2F%2BF0AiEAqrlvXdgRdSp8dTYBxRSHPVtCHf32ZSzDRPjjmqKYffMq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMCywqLIv3LWKIkKwircA02Ds5xP%2BNEvdxJPw5IDIJTdM%2BSCWsWRK1G0Zk3HMTAeGKK6EewdxgaJMmvJjx3qcKIo2ZhrhNh0yCuaiPnbkn6EB4A%2B8AlXh%2B2AckMFxbjWXbrmDVQvJ8RuRwsRXlvitRnIj0CHZMp5LMid8j%2FvMpi3tRxOlU0M51DQkUTRvMohlLcWA2rbB%2FEeWiEY7dskh4miKZEYNtFqmlHE2duuS22I7ZblLIJwojVzzkgMrmBQw6zliuJEcPe8wPtlKeIyxXWw%2FX0fonwbUV%2FblZdZi%2Bhlisrn44SO5RJ9H0OlJdkdrpaD0dHGVRXyc817mmsJAaZj5hgYH9ssVOwD2FeY1xahyQSqeInKavEIkT2w7%2BM6vPpiNJfS26CWJR6a1Y6JtGW2c7VpcPNSgb1wfUFYW9osCuE1rHoM2HBqZn9VUMENPSE5VqzWpyJK1c3pZDZqDwkcy5%2BM8CholDX8qV04fRLGwB%2F9pB152dtfhAhn4F83j8jtjztJ05LGk%2Bd8OaHwhO2O8Tva1yis51CF2FZzL%2FWO8mLqiYfT3hoAnUu5TkdsVmR4dyOMEZ9mzc9ZPf1EnoJ9bFxAA6W26NpoZTiVucGd2WQAndVj7%2F3Hy9ze3TljhIgItaKpaMuoLnd%2FMJWMyMkGOqUB9uUa%2FFkD0Qgu4h3JkL1r0FqtpTkYXn0jSXeDYGPUNsgnGdchIbELLUEpv3598Doom4XAVL4WfOxp4%2FnQUscydyiIW5Hxp%2BtXTwr9OgvFWWpoAmJiqdpus6BGXzzowaT%2BP0OExXgR0F0FfI4FiaDQK71MqmKo8ZOwPk0Hf7GSUEW0GXaqNVpajYUndHAgO8VTo8ZLfI6LUwu7LtXsPYKmVPTNElg8&X-Amz-Signature=5a289210285ea2d50585cb378b84a22fe741653a311333c2ff58c122f68288d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

