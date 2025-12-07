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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5X2DTO2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T140407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxs6Ipbq5rmsWlA1Ln1dJEZIOQKPNjgO6Q48eTnPjE2AiEAwvHHs48j03kxDZV5Ar7D5klE47JR9WMv3FeFZQvpHvoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwv%2BfsKWBHzVZAGIircA%2FlN%2BvC2nfhT7GZGgXkDvV53sS1482evYT7Ku0F1DPPfqGuCQmXQ57IdFYCsbbXOt1Qujc55Au6ClDF7PqlhHlXYfTAEcVeZa7yNdlmewgpVgQICgQeRfslDGqbHboxrfxC54zgSpwhHh%2FYTPYxHJsA2LPfO68Y4eoQ8T%2FR9Mb0trVRF9aMUOoniLifyvJgO9erlPjlPa6emlkyi1jyGctp7XonJY5qPvkxzO7ck7moVANY1nzR%2FonAV8ttJ0uEJ%2BgDvYg7r7bxskYszQqRlXBqydFX9J0vsw1W6iL8EQPCdH6Wn4Sz1qZC5DVJo8a7uXQjRO6U1ZOrGvBwLYQ4TFR64A%2FFMkr0xSMHa3NstNeZ4SAZSI1imhnkBmkqCozuNVOIMBV8xi8WgjCdHlWGebq%2FMxxtuoM4UEBb7bJvY4FxE51WabQq0OWgN9AmoshwDW5NscWnbO85FZYO%2FfaaagOzAGHC7KfXIg%2FYjGlDj2tR8rNhWwgQArk%2FHLyIcL2cU%2BnwAp2JL05lcQ6A38Wg8Bvx1m5%2BDL%2B0zly5AceD%2FEtTTQMvgMtPyrysc48wIT3gCuj6ViMaw2SWkK9RQq2lUOizjhKjR0BmgdZhnYpruT2xD9dOJ6Yc4EB22fDJBMMmZ1ckGOqUB532VkkMQ93vkrYjlcacoHZDHF2PtGc%2BFBgPvBXLiW%2BXN0xCpE4B0T%2BrN4LQVVvmtWffagbZtlHg31rkS8ak49gBoPo%2BAW87iGIWaHF84cZzaMqRjUhjA9IcQNOiMfMdcUPff6yq%2FW%2BKmRO4g83fnxh5%2BunywavHkjspyMZZzWB0Pp7MXWH11gM%2B3DVeWjbMKJj%2BS0IygzCwQTMA%2BL7TokKty%2FDXg&X-Amz-Signature=42efb807aa688a2299fa6e8c2eabe6e7d806283ac1dd24ba02e9d30ea286e025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

