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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643HUV26S%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T051902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgBLcomKGHn1n7bygWt9HG48COhQtZ%2Flb7KqL%2Bwi%2FrBQIgdeB3jEX4H0MLB2QANaYgo%2BBdSCuGL%2BLqM1iBwCqdoYcqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHSaQ0JLUDl79kK4OSrcA%2BSwWbjj%2FQKrTf4wmF2L660YqP5eC9vkcLaU%2BJx7ciNMXlIdGGm0CfKwgucjtKKjSK3%2BeXOWC7kiWr7ZEMIqg4Kw4AVCxsJQ52QH%2FegEDI%2BDea5IseDUy99ObHk0IX2oSzXzBP80IOSR9dx6vaX%2FnsvWm9uw9Kjejy7VSv2uk5PMe4jH2q4qZnTzXjOMnSMjjnlK7FPyCZRbGzmioaxGb6XM%2F4mvEo%2BprYpJxO9xkydR%2FhV%2FsD6O9a8c6%2FXsUeNkPyxbk48%2FBbFrhK%2BL7LRSWrKvWbTf%2BYGE1PdhoIV9Jv3xlpz13jYm%2BSZDXTBW%2FikjFrljAcRbGlmrT7jr01sHQd7VO1ZUWZiOVoPnPKEtLcE7l2BjL0ObeDzH8AjhkLbKNEhtRDaN8QRXwqexHyOhGoMyoQI1VFN1VMYgwaUCrosmP3T%2FdQJs4PYeCij%2F%2BdXts%2B10T6Epqi23IiQm8vHyGRIgf9gs8RnLYDSTJYUGH%2FMliseykm2BABrdtY7kgUh2tx3Y6X4SyGVzIEx1FWPrSjD60skIddHGytoqXB6rzIl9yG2865fGxKRAgQcdUpCtuEuJfa%2F5mMjt6B%2BF5EbZ9tXs21xElnu6mNoP7nPzs%2BrPEWHAOE7t4U1bkCmfMIa02ckGOqUBTReRkVHW2NL8YpY%2Ba0h%2FgzkftoWAfBDl%2B2z8oGRmnU1L9KP0VQMj%2BqSW3cNXoIfF%2ByqQhQsNPqWbVFnyDoM6FVbVbZOIDPfViKuHg3DjcR077xkh0SV67rF0POqkA1VjS15Mc7vd7B1UMrBPwBawqz%2BdqXZUlmWrXy0pAp64hfIKIqd9xqxKk5p3ECIC6tvbYH50DWcdCyi%2BopnBlWHChqm0Rw3O&X-Amz-Signature=3e0bac33b6f6eabd4742bd753c62e68530e6be2499399d7b90d20392df4693bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

