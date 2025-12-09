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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIVW3W4I%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T042500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFY2gfn85o9VCSuucbFSUA4XqavDfXhb4d%2FhjKrVMWoKAiEAxSr%2Bg8td5gvGDz1cOps0i12PSImHIKW9%2Bfga6PtNVI4qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPx8Q4bphlPxaWDIYSrcA%2B0KYLldyBv%2FKXa%2FotzDRmwPXTiAyYZWRLld7Sik5%2BAkTRZzE6nI1QhoJ28YmlifzefD7SpVkpz6Ihg%2Ffl%2BooI4Fvf7abyxXLYSHiwfgwihepXrqv%2FKYg5pEB3RFNEXSuS1TXBtsH0EBui%2Bzmu3a66VEBZ4Ozv4qBm0vy74ANng0c2jhHuxJkgBWQT1N0qW%2BtwjeZ2fa7m%2FfSBQfBzKfVEkv0wyeEv%2BZjQwhWmNxIPsHui0haIZZhsZJtH%2FwrapZt8ANmBqIZ2VJ1qnJgHtpvDRxSoPAXZ1202s%2BbN8lTJsoXWIf7ofpKiIbS8EXQDH8plPOApEmwazeFnsMM4L8omkeyKJbD2h9RVf4mI42crx2KGUijPpVhWk%2BmaXfAz5smu6HSy9r9ss3PydII8kIGJtd%2BGpFsoSd%2BgjLjkg8l0T9deZDxRif%2FHQVQ0pzloLwqrY40E67C9E21zfzVjf9d1WKO%2BmfllSG8ku2YQQ5Tw3IwjBMfFnWxDFSEv1qMGrMLh8Xh1Iw00d%2BJUOSVbjQe5%2FzfGcjoLmo95oHqAi7t24qLta7boNse%2B4mULMPOcCtdfdqFjMuyYiwNr9pRVjzwufctYzjohldgoRejulC2%2BG1JTMKjRhZm0oYQ%2Fd5MJCu3skGOqUBuOjMsPPTVRxwURtccpkfqtI%2F8U4xLAEX9G7HBR7gY5pzy4fC2286lXwiiSkkEkSPmcsvRMoOG3fZphLWRbDksKMVWO9CyfB7SfpiK70afqMhlrjqSnpaum33S3TtrckkbB0TdpK%2FczTpjib%2BBjQSVCFbwRfstley9dRQUzwzDwaY39mXHyqPq2laTD%2BbOvlMmhjVMUQ4BDU3ABaL05012%2B1RhcK0&X-Amz-Signature=29c07f072593a914420f3e7aad6485121dd30229bdc68b33f35dc97acd5aa691&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

