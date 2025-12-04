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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZHXMGMH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCchKiqpsX7oNzt7U5pjr3CIZRhPYIYLnbhKgnu4KxUVwIgZS2l5sQK8i59P1ETdfYdEDGfvKR6xeEkRUAFqAP1TUgq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDAyq9QiBSObFkgpN8SrcA%2BoCcNyw8nMjhps7ViZrsqusDwPA%2B70NqcwQwjgsMGCscbGHA1oNejXSgedpV5qI6KewE3%2BJiOF8mhyS6Polf9B48zDdqbXRdv2yp1Jrp0wJje5y9RDooJ5PuMjAUca6yf64mobY%2BcEuGeq9%2F8ZGWAcFGZ5aAlVFhCwguGeOzZmdJ7jsfJtilyjtWMCIx9eCmNziAmQxARq%2BdmJc4B4SRK0vrngvMYInePnzpzeLp6zMf98f1uFHO9Qls2nR%2Bo6KyuwUp0d6wIA7SsKfQvdqab5LFc%2Bt8WSx7sXzw4mAGIjfDE4lyV%2F4E%2F86EaGWjEUmGjErofWWAU%2BpbhMLgiiv8oNAouKU8pCORyDhhsFlZ4yb8X1I3%2F%2BFcBoZqcgVyDmEggArMCYILjoRZenTgL7kSSWziSTWsEFvBaZlVctLaz%2BlizZX%2FhpEwDU2LUGP6DY0NuCK7ePgEsPH6g22aZrR%2FVNdP3pS7AtVbPIv%2FFStf1HlQeIOiDnoj39deLYxBqWCyEVCmVC2vLQdNo61SUM2rym0LWbQ4%2BSShBY8KH%2B0IALavaetnNv7hiJoahJVcZuJIGuPxV5gc6grfZ2M7x48QqOz7%2FGsSC6WL1yYlhWq%2B1jCbfTVkcQZF%2B6uyZApMIy%2FxskGOqUBcJduoH15DmP00WoqArCkLUHSzyDSHrrg3yRc2Y7B2Pn2q8CPGNt66PeNrO%2F3xTG3Nt7BM9aWs99lBWwEB7t0UzePhDot1%2FFxNMy0XyWQC4H11%2B16Uriau8BRHpXfEdnuQecpTY4ih3MGwcWyfkt%2B7TXX7lAEsm2sDvB5Vujf6Mo%2BvUkoaqEs0s%2FgMn%2Fxmf4ORgwfjv%2BA3oPsPRfnL%2FDM07oSsbqV&X-Amz-Signature=287f1d8d51889b025e6563a60a68dcfc5995b243b1a383588f921a049da7d2ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

