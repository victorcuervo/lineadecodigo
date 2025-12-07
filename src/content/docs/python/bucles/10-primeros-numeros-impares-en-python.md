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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U27SZ7V6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T203258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7xNOoMt2atGcDmIstmyAkMYLsYzlBHtIz4zVuCbVu5AiA9NgpYvThjdDEDhbkzRURlvEdJiujj6U%2FbcM51ZYNXJyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIny%2BpVo5pbKORMGCKtwDGa8kR1bDeMXmvyfGHWX1VX%2F%2BtqIWskig%2BLgRa0NkvAmq%2BHYBUeeP8wk%2BllwbVxmuNxOtr6N%2B1jQXXPZWn2rBFni3LR6X3%2FAr%2F84preBNCFEoRD51QIqHAGGTEOPT7YhNyLEafb4T9V6ESSzeso573NLXUYX2RUQSft%2Bs9dOrYUL49WV96rMxmdHWCz0l2E1KwNPC6vkXEu623dh7S0IJOClI5gKbGs5aV0gKCzCEd%2FMzyyQRJ%2BFzpF%2F3do6ZJX0wT6c%2FPsDDe3lsNtHy4I49Cyon4l%2FcSrzK4XhWQdOorFp9fHyLtJR%2BD96ShIiOWpoytWPOw81MqYPe3XAz8xa%2BBzWCmaAtgOUTAoG3HiBeASk5gMmv63Gpmtbv%2BtflUHO9Z4233R3QH1vS1TDj3TTzG%2Bp52qAflOLi9z%2BJSJkDcihJOYJSHc%2Bv%2FQz7gbxnnmHxYALxabWz1SSVUi66o5Q3zbOGb29c0KX39KQhACJmtYnZ3eDz7471XJh%2FiAjcCBZhRw3HBiL6rY5gUJDJminpD3%2F%2B7Z9Vhzi49g93X4fj%2F2kBCUX88ECU2Mss%2BPXlhrOdinryh9KmxcXsvJDCRTVDbMyKzdWIFKE1EM%2BkAm2IuxNVMXDp4hRhws%2FcwwAwx8fXyQY6pgG0TK1S%2FRCrnStQIgdNCQ8hur46txPs79frJVsMZcOW15XZRN6v1qZr0lylYnT7V4BtdfcRV2hiSWmkrTMNcoKmgWpK1Qm6r8TIISD92xbkqY4w3pTiUK6MSibTUz6PbdnhlHVOBzD2pRKr8gaVyaIqRt2mTzEtlfEeYY9%2B9onomWDRjjViBaSKz9l9Ec9lc02ASbyGA06DzHFZsYjVAzjCkFYrWkk6&X-Amz-Signature=f2a1a2528670325536fa05ae21f5b6ab14094098ee21155f9ccfc30d87b67e33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

