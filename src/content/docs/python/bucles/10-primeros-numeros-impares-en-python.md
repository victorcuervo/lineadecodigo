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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLDRUBPM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T110539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBB1yB7weCdl%2FeyBoajy35PZgBpv9pY90ErHhf8qZY6wAiEA2xHnLA2S7LUyVA6v%2FGUlmDA7VPYz%2FubImaCs8ViSyDwq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDLRInmiAZwfJYhUGGCrcA59uFgzsZvGqCU0pnczuYW74SKsuljvX44HWsQ7xAL%2FDf5c96g1%2FJ45Te2McNrMiPuWWhAr813O8X%2FxuEM4AcXvHfcCPQI%2B3157Jb9qTlOywz8MaXnk40eQqoeOyWRgb7Pi5UDH1skjaHR33lkk3BTSCHuMn3G1Q9nyw%2BFT73CV19SL%2FNub3nttase2Fwixcelcq2PSKtlVlwrc9VewTV4r9uowghpE8es7r9xj3mp6%2B7jPTbHnioURHBmcezcvoOYMqFvw2AQFMbzpymyGNbskxSWokrGbfcA67O%2BLlA1abPbBqUyssY7JS%2FLwR4o4RQQ0t20Ku3wo7M5D0PlPDmBky7XoJCYzN%2B%2BTJS3biiR%2Fg8WY4uxQj9BwMWcVq3mAEz2%2F42lGlE%2B32azvcyL%2B%2BBSLacR2XY9D5djD0FKRnqfP2yzPMlu6FzW9oJ6xEBqm0ZgHbL%2BdOeMlLDycA3Eqjnl8ImjCXFh%2Ft0spB%2FT5bHRbq9K7c%2BPIvxorhitw69iCX0PihvTZxR5WhV15f%2FoD%2BDCLIdwcsIHRUm0Pymp%2FjOpUuXN3HB20Cn%2FiilCyj9Vq6bSET4DO%2FE%2FXgE7KhcmUyIhFmTxDpERXQAZ%2FfAsMaqQiWBV2G8uiYtlZ7sfAqMIfJyskGOqUB1sy2iSlcJOtQZk%2F8YbaU%2Fv78%2FlOASJkpLYBl7P%2BAlKGWM1BAHNlp9p9Jx45thl%2FuTqruQYd4BbOak0DonfvyUCAE1GT3fWsMuBb6AKUpl2lm3GlAeadcpBSxXdsDECnky%2FpM209FRDOZsG8zAt5p32Voylf%2Bk5wxkzrrH3WU0CG4GxFBchFvcSzXg2iT8r6K%2Bkz%2BtUToO7OzV4AfdfJ71u%2ByqsQK&X-Amz-Signature=71a4b94a6c2aec886d7251161f8f2366c42100363b1d4b71a974bd6ff477964b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

