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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXPNUY53%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe1a7DKJmfPJ1njjb9%2BdNevcjmiCQRXIoHXEX7S0Ab9QIgARXZvDIn%2Fe2u3fap9elAyHClJO9zM%2Fa8PXcUNMTdlmgq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDKzTtV%2Bl8ePIHnlhqSrcA0NnH%2BGjL71rF7vaugsi6YW5Z2Gay32QUzBdQFO%2FxvVpSgYWAT7T%2B6BNrUxIDJxDup2GU06FLEo44wObx6CvVzdI039l0X%2BXwgbYKKDrhrir1TWAtxB%2F%2BHYtR6j9WsJeojYrPSeU1q6iV4Ff0AK2SUGBEZDBXrjyrnUxWgOMUFpbN7xnKGWcUhf%2FkrvyNfkuL1b0DOx3ah1P3Kr3LaWfEncA5%2FAZQbgdAwpy%2BefE6CfE29y9JMm3j%2Be6rMwkSE3KpvrqzBCsW%2FSPgDw0sVM%2BhtrhyLc5%2Bz78m1WhpaOHbCC7LnRFv1sUgcf%2Fe%2F4m1gpMgw4DstHDwGnWb9tVRAfGLBrbRW26rCQOXjOLg13ymsA%2FPtKItjuN4nJbQwpdgfbReh7Ybclm7XkRExaE7hcVGCq3wwpjNLWzrsAB9W2e2%2F%2BjZoB2ElazIftuf4DdPl6G9llo0n89zDLSqr55g3ykilLUmvC8C%2BfmfxJJsaPZmU7f1zyfSqRLellpcuaR5Kn70cycloKSZ2rUv4nOTuFpSxgLvOWrHIUZWvDcObaxo5EA20BnAMgWbMelYIEcIcJp6Q%2BbPcSgNFd7nyuXe4yNnvcd%2Ba6F0R8HNfyjwKrfiZ6JWIKfKSOhYS0CI%2BuSMPSez8kGOqUBtuV6LWXB91C66rGc3tmFwUO3xTPkoKmLuumJe%2FfiOk0gYrDsk66IfP7YxQltCEYnMU7kTKlhneiuuOiHz7CJKJguRlemOzZrfMmNHMMT%2F7PXkWGqqc0Wn0Cmw6jjI77zFtRek2JGpKWz5dcQzSXWL2VK2PPTy99FZ3utQ5KoaGlqt7JdA8PAAbkXkTNrvCbrIfKNmQSo%2FFwh5L4jMOrc2pftnc%2BO&X-Amz-Signature=65d6b2ae98802a04f3baae283791644bff18c1e3bc6e26b83b104b718cae8de6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

