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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFRVIYFC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIE8TJJ4es1LZ2J6nSNID07z8pXe7rlBsjEpf7t9%2B2GffAiEAnFEqfP1Tyc8VQTul4JeHIvTROeTfrOcqcUpQU0d0cSAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDJyR7Qa0cyF3Bt1pVyrcA9U4jD9%2B9A3KMBlLKv1f40iBIttMw9zDg6IC%2BN0zjCis8rp8%2BaIwKY8NrSYk9EPiRmxd4BnW70YR64RNe5kN0ztn0x5dqtcAeqBlFSBE5XuWKZ%2F4FL2WAer4TB%2B4pD6Zr65i0ZmnTrXBuvIzPQYfbWqMNNWr%2BcOmYaoWO%2BbmVTQda%2BCyHhSzgRZ2a0dYLE7zt1fp8sU0pZVl3TcluF3JucP3OBBREGNHfgtP8Yu48HY8OTHvC6Uqwkal%2Ft2BhnqyOUDV6mWdY8HXubmVeSfuOEcvlIcYUV%2FfJEr%2Bt1RF%2Fr7qWwqMcuM5gG1l1njXaVNFvq06WjUCBmpdHko9%2BfX5YXCqLtLICRaUuVSDqlmbxjjAK43cP%2F%2FvjqZKfC68cz0GxVgKelBRxjxesouu04waLHZ0UO1BL6LNl3V7eq%2FjeaoT0hTFhMnaukFuNTnS1qr17XAQ7j5N%2FacSGndPRR%2BnnGzR5Ip5f8Uip9Ha0%2FczFeQK9UQ%2BEP58eA6fMb3xDkb6plEAzOfQCsA0g5oP8F3lnYcqUOeVowZIaLOoHmgj%2BONk6BY2Izz32GTqwg%2FljF6kU0X5%2FjBAvFeZ6bPS3rnbdvSh0jY1PShDC6QcRsRI6BLxpcNsB%2Fmz2pfN%2FZAuMJeQxMkGOqUBH6vBnenBXz%2Fveob8qHDc7u7fVVE0FAICB4hFZRMcplnGPrmrexghabbwzUgZooKGRBm91tIVPXklcxtaY9RrP3eBsGs9%2BZS7E9DqHAUy2lTR0Y0Nby1Hctw45RvXyV2uCchgmydIZ94cZnPwBEyG7yEBOkRK%2FVikljDytbMkB88WnmdAW3Gjp3Fgqm21ZNPMHlrxVliZThTJIk3Bk7ME52v4edH7&X-Amz-Signature=c2254728bd056e2563de2591b02df18f6539c2a9d5a78f3b5e08728c109cfd6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

