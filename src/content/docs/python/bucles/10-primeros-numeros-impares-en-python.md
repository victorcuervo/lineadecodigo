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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VTZP66W%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T184110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7O0Xo1Z90kMNc%2Bc2Gz2VDOFN2WLWaF3ukv9WXOkmqcAiEAp3LCdu%2Fsum0b4tmbfNegG37vV8%2BQA9oY5kx4RiRiqJsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNVoV8gHMWrxhbrxfircAxEyI%2Fc8QoDGLA88ew9b%2BHUI%2B7Yz1FfKwiP19GFbLXN58P9h50Wa358tB3qXg2%2B0nbGji6PPLS8EtScCDITUWy%2B3kLa2kAWDnC%2BL4n854WT3FBJBziX6hxjP3cHIeqmVM9yYPLoVdBTNX6bxJdFNvy3Px3U5t7jIPWAL44UiX6UofIwI9tTj17o9SATN88vNLOsgbZHM8fwfU%2FltOdRMmqF%2BKfQVfPGqa7yFA6yXhJdVzuQrvNnQwrwDrfiz6Qvx%2Fbmhd6otFBER8renpYK%2F5pi2j6kVC730zPv8xjaJj2ee7KuD0PeGsHZgKwCqJCMFuG48fqYeZP4NlEhsilDCzf5l2DRNj7ont4jjsCvcyeC81EOT3Fa%2BLsQsHKq0IMGaH9rgjzGsq%2BKRCMPTn4mJS2mrt62vHoJK1r6K6pO%2FLyIBz4YVuCxY78lOGAxXP1qT1w86DD0iL3lFT4v682FrH%2B42CNh0b8eNzIiblYJnebFgjoI3ARIxTf1m9iPfx6c9n9SGYFkLjcVyx75pYZOt0hwljt4zpy00MqGhtk%2BchCUMaqYcgVdroEuk%2BFip8m%2BEg6er3it2XmfHIyN847Ow53qTPBk89MoH0K3cCNS%2B0v%2BhQTk%2BPKcSTZxy6quqMLmz3MkGOqUBMwXAWDRryudhn27%2BatM4TllklocXAu6evM14laYFLpgqliBncTFcvUY52E%2FU1NYlHkGYSfV%2FckFTSkxvNjDaua3l5unZkz3yb9pMjFk0VnLo5cTjVRAWkPKbAUl%2F2S41d5Png3GZdyDDAaQZxcRi8icxlNDvsxfMjyW2BqiFUhsTSiXTsL%2FScMWC3z4x%2BAkmKosa193F6Sr7sAi1v4F5O2nuTkfq&X-Amz-Signature=0969b825003b7204b3ae46dad7b54c5640d222d5e44ef4f003c91fe3cbedb2b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

