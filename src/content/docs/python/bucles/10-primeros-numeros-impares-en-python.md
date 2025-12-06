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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG64GZHD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T113504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJY6IGenwPl9HFp3E3KehHy6axEWdkLqRCaCYNL3yq8AiB%2FpOIKrSUt6QhPVP48cBvR9k3u%2FhMRPguAZ3ePHMImyyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMypafVoKX1Uaw7v%2BmKtwD6qZkIAueR2iPgRmxbXUDRN48m0WhryXFq6dJG7SnwNX%2Bmes1reQRN%2BGMWZbBpw5PR2umKfn%2Bf3UxgP4xk6PzGmPC88uN3ZiLFSrPXeNtWNLWkbh3PDmlAOcy7Y8j6oEHrfblLC6YzoEGInPe2dX8hVKvAsrTu03WlCn5rSvN%2F23tJcQfDGUF1Tz5OwSFLSF83wJKY5SsSWSys0PyDdLbqUYS0CVlEnnZwkLcpX%2FtGOYLJw7Dw8ZxQ37Q5StHmHa3vZC55VuWqUOUXA2gT4BI7rOYq37Nc%2BNzOkl%2Feih3FG9%2BW%2BcENc4oCbW4QsM9wmIrhnNdMBH5w3c1qFoO3YLfW1e7I32%2F0H2ZRCUSKd9k%2BdvTeXz%2BIZSXoJXRpSit7pNUATDouhCXRqo32JvZVEqCFCiHWMJ%2FpLm2Vf5eRe4iZ7mtSep3gtYGxyLcHRUXdtK7Qmq1170EGnpQiFKHyrN4XpEIx8fwspK%2FEgsnJfp3%2FxVZXjdnWHgHfh%2Bg%2BZRR8LTdMWMGyLMKkH3VKrXNAoue1sDxV%2FcxZXQLmGhi183qrLB%2F5FE4IZO5c7eDJsxpvBMaHiHloC9bGXLN3luTfsWn7srZjLbb%2BaMX5L3noeJr3djmUSEkSbJm4m9mlPIwsabQyQY6pgEM6XYCnD50TiZZjB%2BxPiKmsTiozNYamDsrdt2MTG7fuNO7WubUftgJJNvVnZjYe3NAUD6GH8inzIF03gmG3F%2FqMQq23LWp96cBZ8Z4X%2Bt2bq4tGuwX%2FUwI7oSDzDQrYRoLnvR6qFExVaMdOV8TZQPrC3F%2F8dwgC9o6jm1o69uopO2FBpu%2BxnXIKJH%2B%2FslYsRoAG2Yr4o6o%2BZe5hiy9zKUq3kZaTCWS&X-Amz-Signature=f1b8d23799a43030a895dccf6946e288f1960757eb7e60ff64c5179476aa41cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

