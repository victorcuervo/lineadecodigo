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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ABVIRMH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIAEYrfR6Zp%2FZaBKv%2BkvUfmSn4luZJ4Ru7oMo4pDunGhsAiEA9f3rH9JtY%2BtiwKhLmqdU7LJq6zajBBIG0mVdRfTbBwkq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOkDj4u2eu8G7gSXNCrcA16N6NYEuO2HWBFuqam57%2BFF1vjC9i1LJKBOyn2d6VTz%2FLRvJCmsK2CLiEncn2nOYQPzAIx30Hnd%2FuqrMqfrUcmEbqp%2FPwoit2h99Imm4GhMBXKPNCr7PxqLVaqIbU7Wq%2Fr1KfY5I0ojnIJy03LjYnYbTCeS%2FPxl1F%2BmcB1QwuXGlpncAj265JOfEFW422YHAav4ew2Fjf3m3s817WXs9u14%2BY6QvtmD1zQCHhEAhTAiQ4BNOLiWjoMGZB98Rkc3Ro8RUHyHxO2SU1gHpR4pz0lxMeV5KE4e2B1GWS0s%2BxMUpbay3Y%2FnKZ8ZDLF28sXBGunTPDx25QxEuqqKIGCy4N%2Bn0FUHrgv11sX5X%2BWcQTEyNuE3kA%2Fh%2Bx1vIPUkrvfqNIYWIhD%2BRB%2FvPL3stIpgJywu5jflJy07jcMMHsWge6bhHFYNjzO2IlHSmDxSbye68WZ6wD%2FrI%2FIgFsiHXR0FEtjx%2Biu753IRsc5T3H425jox5BPWvDs1gScGY1SWTv1fC3QNYaJLJdkZhEt%2F%2FsuAVYlHIwvEa7ofF3rWvk3y627SWzGbkCebv4%2FBHqPAZd9xoOsfwlcrewP38sSA8D%2Fiu740rOHSKkpwPkEIRAg66W0IuHj%2BB0Qa86y05suPMNahxskGOqUBezzhbQ2hBGpCyCP1i2H4ZW4GAzhTFNFYTNcmFzwHXcCSVS%2BoPwnPdPl5SXgJlxC8l8irMpTW3pmrnKoGwGtVGpFW5xlYlmfPbOkVoQ80qRdSnPSK0KUn9FeItrV3ytYjXOy5wLWbRkcG0J5d4%2FHlX0WwkYBSpHz8I9Hnqek4XKQxrgSXT7Z1kyrILKSDya6yiiKIU4QxJbQQaZmqxuVcu5ga6yu%2B&X-Amz-Signature=060ce955e0cd614d412806ded821275581a12b47ca00dc742318c0db3a35cc94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

