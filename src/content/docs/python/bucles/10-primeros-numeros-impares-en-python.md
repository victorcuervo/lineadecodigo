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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T76TMCR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcHzpdN%2BeHI3MzK4fN%2Bv3rDBSILH2F6L4iJFO%2Bv5W4IAIgWvINWflNor%2BPCdmY%2BBh8Pt2JfMh6Ar01BhutMwAU%2Bdkq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEDtHOso7F%2BlT2tKjSrcAznH3sTF%2BqPA0Pcf4Z4ZBb5J6XQ05hRcoNzNh%2BavYQQgHLzsNFPPlnOZ02%2Bl3g3OGEncewIzJMsZx7q%2Bk%2Bd%2BBffr7%2Bc17j3bE1qfOmLG56ApNnH4vI7LRfR72aamrHrLKIQAxwMK%2FHyXKkc9%2FQTSPp7ByX37HkbkBHskNke%2BAbnJPmdVXJ5%2Fm6k233X71DmOVJxhYBBV%2FtPSMXaSnNh3Ttfz6ucoAuNRifm4L7DeL%2BAsG3xXrDoEpF%2B2tiXw9EVN1dCCGeyWdCH38%2B1Ie%2Bc7OycI7%2BDX3ks7S%2B%2FoF0osssIiEnovIBagcu8U9Ae2vv4tuytMQWGfYcOi%2FWIdlj3N03Yc8ROQ7n%2BtZHWlA8SbRO5jhajIvtWC4ABqxUv2pV%2BNv39ZOFC%2FgjvD%2BDhslW6DF1vBGiAwESMVEk6we71JbMUpFvOviX34jR9Yd2%2FN%2FdRpxCKi8RChc15VQ9m2T8Ee7pnExUWFBbP8NhNxWXcuq%2FUyPMbBeOIOdRLG3i3H4fuUAqRrHDjImp6xfuOlrB%2BNjeS4zKy2pARYxKG2fvK9eGZORd9748g86G8mJlRD51Dgc3izaxqMf2QvstC4zGE7qBHVjg%2BAFYhCIYe%2FU%2BCZCj1FEjevFU03h8RGv2izMLP5xskGOqUB9SCO3ryyufV5ElxXBTZgQPNcHxD5jY%2FS42uj3p3VqxWvAWznKMATbm4Kvq3SRH8quGGxgzlMkp5HNaXgPWPXGbjoFtIg%2FtbdJx2XcaxYGNBqZbbWiHbPO4J6%2F2BB%2FXhqicbGjWLGn3veZ5h6tFUkzFYnZW8BA8fR2T4jVrUzmZCMl3jiixEpbWKqym813dKeuXWb8Qa55KJmdw1kQol8L0dWWfTS&X-Amz-Signature=157f4ced6b0f8bfaa91e51984cc946a0c0e14602038e1822bb34e9365bf91772&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

