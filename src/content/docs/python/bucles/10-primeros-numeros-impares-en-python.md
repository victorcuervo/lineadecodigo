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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QATWIQ4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDXWdVSfEDLfNQZdiIUFC167oXefOeUz7Lgx%2BEcyljINgIgWxF4jSipy1aP2gV7RuOvUaakcWQdIdmy1a4HMbG1l48q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDFurxoyPcQVZ9J6AICrcA5v0xBhxM5mp7cZV6SY7V%2FlrEVlBdx%2BpurIF31vQie75ZVRoUbsrfN5ffEDYwf1RHRo37AIb7qc0XxiNFEBaAHrt4LMDoJW6DQCC5rbG7CslH%2BRzT%2By%2F8WwvgMpDDyaOKKh2OoFItAQZ2ZgLC3N8ylJ8CujPxQ0SpKv13JYGTvs%2FwfLmGvYIS3v2Fq75d%2BE2rKIcQNchfLdU28c%2BtlptC%2FeOpTBcPPgnaT1PS8vTNZFuSLEYZuPWSFRl19mJkQsQNMrowKtIMQiJTfiJPvSMBOQc65teU2vTBfFiy%2BxrdOhAWGRHWjzQ%2Fsn%2FNL01tIx8uind93Lec8cMEPB1QLkKnPTwTIIPsZOTV5RxsGK65KUa4w4EMHZTroCkbDNl4pfGsk5Fv8smnNizAlgaWmleOOHfKTf4Umm0wblmdZQc3H15CyFLpU7P38gcEGHjgbEawSgizFMiXroUL81R5OprYZSMKsIqf4prWcoFWD1LG8HrdBYBy%2Bc1DGwB9AI6B0r1lMRIRu3PUxk7c8m%2Bd7AxnJiG3G7RrA2Dl4occUd57DcSfpGf3En4jtY1TRxhAa1GAFLqeF7ZY6IbDiQ0dBSKScjZti3oOsAntAlak0odoNg9TXQuZfB8kIlIcAEXMOStxMkGOqUB5E88qm3u3JzaNSKx5oK0DgcBf2OnVv274QeSl02VHWDdFYoUnQqqxOuqorKOkczn5RHesl2iWzydbyQJNR5Lj8fsVQmbS5Tbvb3pJHMJKBgd5saWdUTn9yKeVESxh%2FwoDufyBlKzItyNG1S2vRKB3ruNORtZRsWAuHIupdbrFfTkREV54jZL44EYxrfyVAnVSVlJFSrqcaHBUZ0E5Zd8ggFULvLM&X-Amz-Signature=7a15f00ad99aa7302c0985d2521f29789e73272b0415cd273ea58c849cc31fc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

