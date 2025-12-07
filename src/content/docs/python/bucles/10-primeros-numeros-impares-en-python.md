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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YRVJ6EW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T143412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBYFKIDq0jYeRnCmhrEFYIxfuSHovawBSk8b%2BPIcHfxgIgWXQ34zKZ7hkay1ZUZtKyN1vbZtVui5epZMJZ28tHbmMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPQFJ6Au0dydQwzvircA%2BeoghDk%2FIgFTn4OUtUnCoFy15FZSsQWDAL8iASSf9uXjznLynDdPsyGBfxTf5ktLy%2BSQbf8ESbk73fJMbAy4%2FcaOZmYDaGDNO3axHiSwJkjU0jz6j2ooBwhatBWlTXZ6iiSMRjECl%2By6Em0duKNgj4jewOopruFU5HQYl1rsKQA4NpYVH5x1bAkYQjEMhRoBsU0RaSGjh5l%2F0qd1aFmF7Z5QXBGAJtnpVKvb57jRnobuzTk79V0OvrlI8Gk%2BnGaWK0mItEg0V%2Ft2WqmWMvvmAKdDnW0yJutxmssvJBjDyNfpnKvRI6QKcqvvj7hNfuMT7vcsXapQ9qLxHt%2ByYMdX0JD2vntnoFbsdgLSOlKZDVWEYVvF5ea%2FxSEZPndToI5XVlN9s9Q09aFz7BFsBUnHCdeFVtkh7qjFpPH2FHqH1kkxnWMnTNClr7whI6CC%2FNtcJpChaQ0t5Xs6hBvrbEZnLomMaXe%2FcDyLD0e%2BErO%2FHqoyCxQ1a7TlkWPQiMCU6ne0ewYn4T7Fv%2FsPtXCCMmBUMmhag%2Fdul5qx33TifMqvnqEVzdF86WKk3l63uKQh6hY8d5Hq3xNCBQevMrXUoD%2BLc1sGqdYqFH04wpdIX5yN1xnGKSHYCQbqMVfRgNTMK2Z1ckGOqUBKOxiUk7y89TaAQnEozukFTc392YzCr4gYgVkPT3emH0ZB%2BquswAbuG%2FhKR1QZxkdhe7LvlBua0NrT%2BIceqht10FCeJqRxhk%2BzuhErIiiVeVjPVn1poqYE7lVfO7Lhc1F9xs9hbCYuMpRfuuoQ8f2IMblfqIjZWNp8ZqWB707fAws8dHg1mLPkAp5O%2B%2BpWIb%2FQQvdB3VfMtEMPQ96PKHH%2Fgw9%2BVEX&X-Amz-Signature=0783d96a8fe869ff0cb87530840634e0cf51c707a78f5a2526c2fe7bd22be00d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

