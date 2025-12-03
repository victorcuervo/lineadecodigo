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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVL3C3YM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIAJkbupd6%2BfgisaKxhfJkDF%2F9fCrUzkrOLb9Ho3I%2BJrhAiApuv2fVBcNdQOzKITQI2NzVXeTbz1WAuiCh3L0qW0A5yr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMl65Mnfx%2BXySFuCl9KtwD2Xgy06g9b%2BqVj6Hs1CERhLp%2Fvwm%2Fa5DVmiKEVhBP6CSwvLEgMiMy%2BLBYqKmVM%2BaTP7oKJ4sXMwD1AdNYyXspw1pl25E%2FR5mm5B6gCalQ6NFaiSUzgsTLynJWe3sP91ZDWbG7%2Bo9z8LdmX2M2sR%2FoAU0Ak156v3%2Bn12Ud5DBG%2FT4dSlNWSzkmM532IvVr8xB1dMGgWFaUth6VMD4b7IwWzKxspj%2BUennQG3aTyD0IvdMkqgy%2B%2BvakY%2Bk1jMxEVKzF334GYGIU70I3Z%2Be6SUpzKitANjNtZ%2BBXtjG9AclxSOr64ngz%2BFBBgZwoWLlnbbj1fZz2eRVth7htRd%2BFVg%2BQmOoZtWoN1T41U8a8Bq8jWlAEwM6UbsnewWh6RkQlI5VDRNIqbGvABgkXOxx%2FAV3PnCcP1IS3aSlL3QrfgI4cQBYt%2FE6TNfz5krx0JN%2BmU%2F8q76jtZU7qjFc4C%2BaYa92MXor7xgAnSGt1lotXo123dguCB2phvXAPVNo69HtzuLAfICpFPTxKhpKl6dA7UFYK7qHLK67kiLoUnvPhf%2BTxeGi91hf6BpWTWuok4tS481eqf%2FfMgAoKRjxL%2Fh3BYEeLZgeGC8hyNsKoq9%2F4NwMZe0VTGJaY1a%2B8PuICwmgw4ffCyQY6pgEvvb8s%2FaG57DJgY4xObPEtw%2FBcUZtmy0oopFjkZpOFcguuN76WeogS2GMM1oNF63AqXfZfZ29mxcexSiZy%2BlaIOcbJIhheyrcyv53%2FcwJccM7OSWcqjWALLIRA87YzbuuKstVm44Th30Vy6HEmrEHsIWCpF2cIIyBkQ0ULGcMxR%2FLjMuz9Fsqqu4tFVG77q%2FAYEpvOrUGy7c1W2%2Bu4UTEqJeSQpE7l&X-Amz-Signature=4135fe22ae415fa9663e7d72a87f3e37b787df3d56ea1d3ec3da246683b1de94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

