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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PAUXEEI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgifsnO2uccIeEhz%2BKvgm6lNGf2j4mS6xbFxKWQsW1yQIgfDtTCkYpzMcdYh9Yjr8n9XwyGtVvY%2FbVc%2FreXL3lKQcq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDEpuILjc0QxJnvOFNSrcA%2FEOQ%2FkongvTPwd9VV8VXxmxtagUDmaHzmCakprQCwRzZBOKnnn13lRu8IcSdyM2EGZg3mDxCXpPw8SCIFtsykaqd%2BpaWOZVDghInPb0b2kMCPgPbWk1eDV%2FLVAs%2BghH%2B40otEaj7%2BL6w%2BXm%2BWdVS009QWW1%2B6rWk%2F642qoppAU53JvWcKzaH48%2BWrql2hBz%2BMD2rM1XNLvUUOXlWfmYqEAplD%2FH0DBF8MrL%2Bo0pSgFVqgP7bxlHMuFpGPTl94RFvbTu6R4tLsWKqzgEH%2B832Dv2S0Y9etXBRiW07txXf%2BnG%2Bw3diuYwml1rCcr8hMKaUTJq7PM2CwDArDNcMQmAvI2janDSE0FJCDzLxGMokF9G3DmoLaLGYD2ucuehwHz8clG6ArK3fEdrQMQNfcDZVPq8iWxM84cQ4qH3w2NPbOomH1vbiLVZBf7P96FCOzkqHEkiXnzRfSn5WOPBB4PILeO1QdUZqdEJda3OkH3R0NKmwHYP8ACgBEkOBJkB3C7iQvKd7NHlrF5kn2V51P3C4d0zBbOU1NfbWmE%2BBnQLRGIeUFpDr1dpVsdgtB608PrLWgngtQjKa3CrfQCFJL18lXNuSHlwjdrw4EJsq6jCVXXcJ4JoFowzfCcWT3VZMKKJ0MkGOqUBIlt7Wn3sGca72SqDmHzdkMPsftG4SSKkvc1pCZZxjlAVS5zszQXk826AEFt5JemwJnAId%2FXezMuXsVoBlEuQG4T2Piq1DwQzybYhiVTjY6olrz3c0lC1JMBSj3MvI4T3MGhaYhAgpJs8JojgSz%2BEwQDrJ30pA8AdRKhKQ%2FUJUWsGUHVhiNjbvWhsjDCIDPikROt5ZWcqoYWxdfh3tPUWAG0ff%2FzH&X-Amz-Signature=3fda064734c4b607f645dedea499fa2c3f368ff86c59605ad024d367d6669fdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

