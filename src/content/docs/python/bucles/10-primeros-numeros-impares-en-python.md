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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637QXIHTJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T124206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID33pTyhJA2826u3dpLZlBf2KVmW2rWCsFMTRy1Au6U8AiEAx1xD%2BtWyIDsv%2Bu0mVg6%2F6SLMgk5v56MEp8nGtcPv2BEqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPni%2B3w1x%2BXYlmD4CrcAxEhx26HN%2BvtUr5YA5zAJms9%2F74kDFZdHr7JzhCR0%2FbFxBq7tghZkJ1Proos2gT4xLE9NV2NHzVvQsL3qEE8DA%2F1hDP5ZNhUX%2Ft%2BvxGw%2FrN4IGB4asabA0W1sis6%2FxVQMACQ3RYurKpIrtVeh6l9jlPY%2BJVdqWgG47R%2BNRy%2BSyJEdoUFL79cEJpbQ8YUB1yxVBmLd2lK0k%2FX3vHc3KBSrHpKci%2F1Ofn3%2FuxODE7QcTc8jQaQK6jz62ULtg3XL8XPky7VMNh0HBLJ3%2BFth2jBWrv6vG1hOeXmHTzQ7OlMWDlu%2BQ3rwNQnOfwBKJYw8EZwA%2F4TqMif%2FGhVYo6i7E5D%2FurrCSzU6zjSdnhEneOTHHEIgTBZ4w0E4icLdHITR4ZQyqsGGtGS%2BA562PQAQLZ8UB0KjcM7VeT9qB3ETCTFZwcSeI8tdSOnEz24C%2FBHrJkss%2FUQhhjKTk4SDQIOGL5YCVgD5b4TWkPSyzO4tKDMLCRo4Iee6F9IkUxFDl6Y0RrMpT5AgVRqw0h2D2JJgewR6E8O0WUIJP6pXGeLMP3ywyCZo5s5ef8Xk%2FDXiM4Am%2B07rLOyp6C6ouNjMNGhf0B9B1DnhEbzYwuBC5%2BpP9uLcSVjhIEA1XRbn6qo8rDbMLKa1ckGOqUBHD4qVDNbz2tj%2B2bUNpBYi4xKiZnKlN%2FhQb%2B6XMXMEO89xX54LHKM%2BCvxeeWOwBmeQvzEhu5X7cUE3LF6qW0MwOIsfJDOlBC%2BhPsYRsl9AsLhUDXlceJL5BulsXS%2BM69QUJQIoVfn0YTRZYD8m6PX9kyokxM2cP7usgHTjxAkZ7i4cMWWRJ65ZsZBCJm74ZVhw8T2qvKzGWxXpzfTcMKBTwkpjtz6&X-Amz-Signature=d79df6f967a95f3d39c0d816f304c1f26e92ce118ce4b1c56ca0d98fd62ac070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

