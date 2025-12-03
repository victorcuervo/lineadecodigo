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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HVRFVKP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIAjdOc9tpjmlv56xtdvRyphWwzcjpusQrq7y3YfYVPAIAiEAjloV0z9m0qM8R3Q9AVzP788HhRTtASffp1WBtnNq9sYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGT9850hr%2BdknE8nfCrcAxs1i63SGPwRQ53jUKj81I8Q%2F%2BVbBnoc7OohPFgQt%2FMBi3spH5t6kZGUddHsasHj0iX5wPYdlp0ZOwO139elEymO%2BJISg8vGlmGOx5YDfQPb%2FBBVrSwDjg4npZRuwm%2FclOZdY3afmH%2BZZ3ACCiuTlgNkbLQH6rer7VfvpBQbuHdgt5ol72yoPlUzXsPUP1%2FzPJ5yVOxAgPiS5t76bZKXsREIT0JNA5%2B2VBUj%2BnlMOodg3Cxl91rUy4j4ZOw%2Fef7DtVBNehr8QD%2FqPFV%2Ffke7B4BnhGUgT7uSoAIIzQvr%2FJS6Z%2F7ay43FL%2FAPBzaEZx2lhtZaXUjSKP4R7IRvDLojyF0oOtPHwV2ZYnFfnbf1gTakgN6QT6RhGiul7n93rLMiZaFr8pba4PCglVj2GclqZqVtSi0Z11iOzDqlcO4RJJfGRhKcR1YbG3SqtM6qBkGSsiYe0pp4u1SKt3uVZmuR43W0QjDemiplmm5GLhoZgxTmPFeqrRuDVFhoZiw3HExFVH1JT2vmy0KRxJ%2Bvb6LNszNGUhP3P1bYC011LVDUWRfZgCh6uSSM9sXrz7VJNaOblD1eHX7zqoNkzN9dNNSNH%2BQhE9kTCqUMzYKn4abzmwTTMBgqiPEvaNcPkvw2MJyRwskGOqUBoHQaaKs0PlN1E4xbpQz65DXoqWC0U4%2B03v1tNZbY9T1wfKHtLZhMTqaBXcpsi80Mb0s%2BV0JLeENMLG2MbIW2PgmcwYedn7WmtkBju34Xf1LDdW4bMjXInZKFC6OqAsTJAMBbp3PklOQQmH3q9ElQKFYK7lg%2FjiYyMUMWvm9Rrvin%2FF%2Fkm3N7%2BNXPuLL%2Fnomvcigw4Zmq7d5heo6G8jDeCqk%2BuNC4&X-Amz-Signature=c742d6665d8b1b5b9f1d599798caad22772f25b533a65af1f80800806c1dc27f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

