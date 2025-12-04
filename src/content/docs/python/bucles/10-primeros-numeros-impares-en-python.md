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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ6NMP2D%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIANqKzR0ZqRj2P0j4W1byb24W%2BjBOULjcJS%2BEUTT%2F0OZAiEA29koMI%2Bzoq2i7dX%2Fe58FA8e%2B8xga5zZhtSwmCVP3HpIq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDMrd%2Fc38AxWmosd37SrcA1ljvxOKLFpF1euIHEl5XEgtzB2t3LzRn%2Ft%2FQpcbDNVKQIU7zhr0paWOcWoTVG2qO9gyS%2FtO5sRZlIV%2BYxWgz3KB8RLbMjFwUfQt5nIfuiCF82Zs1Bo%2BDEEKkSkVrONm8IpZB7D7HHoJvmMXXTXpDtyClJTuV2T8edHK%2BUi0N5qH0nXnlZQH2QQTQPx1rOquQX%2BRhLaMVQ4K2i3e9n3P6%2F9qwO%2FoM2fGgMsIXKlHLVxKIIE7HIEgd17MIUSQZb61bmFJ9AhBQpnMDINXvUiHnYU3QM1kIOHf77USynHzyEXmowCIeOKAxvnY%2FBXA0KxZ5HmGObw9gtwcUWz54%2BLRVOsZYHzFBi0a7k7ump0%2BFXF%2FJ7n5W%2FX1bp8IYl6%2Fe7kEaigvQKzoZV3B7UsHPlIaG5a6AAc2Jrj9edcXmsa8g4eCfTnamGHnV2IkdlfI4wcQleUd9Zo5z4uVRL8dPMvPPI5VpjNpblBCDzDi2J4%2BHS3Ee%2FJo0QwGc%2BV%2FfFI1uARuOI%2F3L1kIgpgbeHUcbyWaJo5X2U7q%2FOEt7QnbGHCI0IcfNCX5K96HdilNooALUMpPKe5WxkVq3zHptF4xhFfdPFJQbBZDEOgp0TeLE10jwCDvs9zBoXt%2BTRBH3K8NMN%2FKxMkGOqUByKB%2FydDf1d8iyQcGq9fdq6LP2%2FsrgaJEallCOV%2F%2FNPOfOcr%2FFXtIkXNw7CHdz%2FW6axUfwKcXdCrkv6cHly96yn7WKtVlu2gd60REWCzUjT%2FI9u%2FWAFOI4fTYcPvwOSO9q%2B9TlVd%2BvejCG2%2BwGKdjv22mUAxL9cvIkOPCuTSKTYx3Tx8cTOymPt%2FeleFPj1m6CQV%2F%2F16lYT%2FCvVjjRQiXoAzJkOGs&X-Amz-Signature=d1741c5de156cdb9fc62784beed97fe49e49f7aedabba41ef9dd5c1b751da48d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

