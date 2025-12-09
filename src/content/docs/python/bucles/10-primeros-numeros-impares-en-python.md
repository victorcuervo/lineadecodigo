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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VMDASKB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXSd%2Bt%2BjBBOj4JGEeKs7TiyWKs95dmCKTYQUhd%2BaScGwIgfEA%2FUVpz4L2E6cFgrt%2BthJyMgvZvRjJlVhhNzCqk2YYqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDmIlkOCA1gT%2FH4RNCrcAyERD1Xnueowkt6IleOY2vBQAL%2Fko7GOkX1gDwj8V%2BAY2h6CrvlNRxhJmqoUtxHesxYl6%2F1uteXmVPf%2FNnjJbHGssmWmlZUoRPrLYQqwqW0%2BEtnQ0WGXpOjwBkLHf%2FR584uJP%2B%2FWQfjWBvePWZvg82GL3EaRHxJSXJ2L4%2BA8m5H80%2BxvMp0LZSQtmk1lM6jX3JGNTyCUDcwAd2LBLXKMGjAIytophlxu%2FdxvPVhW7zFGlL41%2BcInJAF2IxuezqdLINuOBZpEMOxDNXJp4CRz7eFOXP34cXP9DVyfoskO0I25S1xS1cxThv3ZuHrsaKXMDclPXR1QznhoZ%2BPgZ6iMPPHTWirFmBTaCjBlN%2BI%2BOEWwZYHFvzfZulmVjE7OZRnSOrSOEx53IQSSk17K3ucsbWOh4yWBVdoOWPSS6P67E8ivJ5k%2BNtnM8POReOw0sglACadsAXlGBYfpAD9%2BVC%2FJVhmc4Y6C31NQZR5KKalBUnvQHdNe3tjCazbuWv5dQOP28V4mu5T9Qon9wPhFfu8fKJ5wPy%2Fq5H5U4yzOnZSqK9kFUiEJ7i0FwOA7SA2%2BBosNgpcM%2B7bKHvLxXm%2BGE4%2BYtpzUi4bREvFzOehyRCTHCM8Aw%2B5RwLkSYB%2FId74aMPOt3skGOqUBkHS7tKtnTy8RUBpyo5AqSVxV%2Fev0qGRFpgXqVGERu6KQejyE9X5Q5C1vdVkJnUeisXWBOmsk0XSQ4I7tMnOXMqm4%2BA76%2F%2BCmoBynOOEdAKzDpt%2BWCpPz4QwLF4OToljJcAE3jxtNK1g9GXDN9hc25jgh9Vrj95puyb%2FIbQEFoeXk1DLUwCNEBpqzjC2mdhgpeJ4MrrgzkeVLb86TCkcz75DL8Qh5&X-Amz-Signature=4162f2273467ef8cb114d1e6a8d904d7e1fa92a28034154c2f182b6b8b646a50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

