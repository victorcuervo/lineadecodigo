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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT4DPVEK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClbOcZKFOBPmPI9%2BE986XB0amDjPQoOdO58ACIXdFnYAiEAwXjTJLBQMNqSMNy26rurwB2VpyoXC3%2B4tVGn1EraSd4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3BwOn9VIm0IsPH9ircAwcVGwKGSQ9zlSy%2Bi%2FdWaQ3IKEkB%2FtoxM%2BVXGe4INnw9gGQeNPrp5Bp70lWUb1XhmK8seMw0MqBV2cbMt55I5cNFBWI0S1RLEj%2BOShUQUri8DRo9c%2BsarmdBaK5Q4%2FmlIskCPa%2FKgLUbeBgTwWPHTV4tygW%2BLizBPprwF%2B1BLcYO6OyNXyaiwML5CzUWh9OYZv9uL62oNCX4FttNqFN7CafEQ0pldX0KHlHGCYf0o4sVKO8Wg8d8xHCRM55agUxoysL9ILc6wSEATd6pvD7vBu5teMBnklxiMjPevFEyCv97JxEQnPJk2H6vpyvNpnW%2FZQDgqsqdROWxoLH7XIvRwidE0JlJMI0%2FROQWF1OqOz%2Bv06diUpSOPQkQFhLqTa9hyNf%2Fi9l0gwEaX5SlTEWao02xRMHmcaU6NP1XL90Hg%2BYtjNMU4IkotTsNpD4SryMZijEpOSQBcM5gzux4oENv7ThZMgukK7Kkyc4EWcGmTB%2BymKjz55LG1UZLA4sIkswzFtaDXsxiNrFFoXVrpRFBK6G3JgcGvD%2FhePUFBvCznpJ9BREURdcfxJoYbMyzZw3%2FUw99aPAoCR%2Fe22dz6zIN2r7PVFJVk2GEbfbJVKnE%2FGvj65tN5ikiUSF2ku%2BJMJ7S2MkGOqUBcp7tJc%2FPG1x86QO2NX5DkxWPyn%2B3XchT0TYg4zlrZoQi4SQW3L%2BJBsfIsYAzkqSLizD%2FbsD7VBcBTs5duTA625SSKbv4tYiSNQOJd6bcwp3CXSmhhdOd5nUAO4rzADLuUP1UHlODm6lOdWd0a4sahcz%2B8IeYY378Dw2tHTnS%2FkQhq4e1MFE8YMTxhy3dx2zushFA%2FaAO3Haq29MpgU7kA2ZJChoN&X-Amz-Signature=e0f8c205709080aa8998ddf217316028ece7205a70f63e8961810a23a1c49742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

