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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZJW72KP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClWoxX8Ti0YeP4qO0wFx3VFaDwxoFyxKDPUmDN0Ju9qAiA1cOqC9WtPWaiqaN4U3h9vN6ssumYLVJeZoKTK78mq5CqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkSeZXm3yQzZYKhu%2BKtwDcHJkSLjDPM0S6f1dECFDhc7GLCVD4FnNrRAyGf%2FYe4cp%2FvWmtULACiCVXtbvTVMeowybiZln2O1AC4zh8Tn6EBR8LfQOV4ESNuixJp8SFR5ZHSiTenJvDVYEmEdPpuFpd9DePB19AfIRjmwMtvUjxLvVRWpj1IQr5vEuZy2qI1uAHIOQlqr2dRBrOa78NQgwCBfOaOx50GV8fHT%2Bw0p4uzvuCPrr%2Fiy%2BfcyGZZ%2FtbQXkhmiRj9nCHkyb%2ByFjIccVHDZTfya%2BHyL%2FeLCfmc2sv9DL68Z1yIJf2Xy2H8B%2FZWxPcSry%2Bf0a9Ms57%2FVcXoOyZMO%2B9JL%2FOPQUUWZXdAxFrwLYY4SA67rMsn28Hk4EaEh4seC2bmZww0pFhd0W%2FpRTc%2BygfNpgg8Y52HGfZp8Z5PuXsen%2F9DlnfSr9nTP8U3HhgLWE9IkZpz9VoxSSL3RxigvYUOrjnNy8ubCznhpsdqa%2BpqtSGLmmvxGykjLejB2w%2BzPq36mhdpyCH1WmSFdquXYOoGmWw7tquWfTQyDNRT256%2B61jLgv3nnFm6%2FEYpP0Wp%2FRPV43HeP947m%2B99mUrZGrnFeIVwdQhPl3frRJ1LPeDXrxX1ja0WdzzI8bhAoDeLiR%2By8Fve3WhzwwhPDYyQY6pgHEFwdHsIGgEcyrccxjsc302wUOXDSRaPsOw83hC4STUkvVK2m9BXIlTu4uT2h9Qw0cs2rU3rECb3BFIp6UsX430REt%2BsTx8ul4HrubC%2Fz3cknPqousexohEQp5HKfPQ9B4ZTMKVl9TVbt82J3LXwKfvFGrxMhuoO4HxokjHjqyp50oKkTQqLnZkxjZy3AIaqIY2C07mY4cnDjDhmclp0p3eM11HbWt&X-Amz-Signature=c51ed801aa948402eb9b033bc19ff3e50ade3eb2ce1164d455a677aa4c53ff7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

