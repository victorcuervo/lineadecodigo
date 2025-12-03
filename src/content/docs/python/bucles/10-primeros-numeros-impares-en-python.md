---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664URCH7JL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIEfOY%2Bkc0L4n3YZQRtUAmAvNYM1R0U7LO4UO9dBGY2w9AiAo1vGKCdq0TOPTT0ntYWNN9r1pHexYg8iZA%2FZbvwKPOCr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMwhjSo7xTyFoi%2FjSKKtwDrj5twnuTy69amHlyjersKZA8aWz9y9%2Brg1%2B36kt0t19xSyS93BH8WjFjSenyzKTNlEkiRs9QlDqYjVvrJdhJY67vLt4GTjvaJdtuxtglvyjAzYJ3IJhPRpG6%2FFXlmh23TOn5fWwLKJCCC%2FoPobYzWRGmaNwOorPDj71r3l2XS5xu8NX9ZOEJWEU8k2HEHp%2FQwx6lZre0Ae5dkTssAfMUIbSnD0cDaw1oBHkToaNT3XhAeMyKwmrXxAW4Ik60x3K6lmnp4MB2Xk%2FPUog%2BGUQtqVvTjQuZ3vhW8cEjRzsnN5gv7%2FS3EOWtPHurX244OZFA0towjryDucPNEX%2FctPo80CuZ%2BZSERXwepJwptUK7T%2FozlNEvzX%2Bu%2B42ZcE18OxjUcZAKUgaWiTGgqioCMXupmaxeGR1SPa3JAf4AVetpQZZJhwkVZOF3jTS%2BC2FCmP5N%2BHPyxO%2B5VNB6HBhYS05Y5lYLBKGdSTVVctcaZn1SzVLs4feo%2FZR9L4V9lB63Q7r9CCEIYiYs3xfzKqWYdMuQ3z%2BkWjNq6Ez0RLZSPQ%2BxhOm9bkiU3hw4pxEgXNuBF51UU3El7tpSMFf4G9xcbZU2LX6cAQAgfp5fG6veKsDl7PQgUN2Nx6ZGbJbmTY0wsr7CyQY6pgH3fOMRSoPq%2BOERhnLlfpFLuLHllzdfavaUMsczXCoCBWyedJcZB4AbUPhc0a5%2BxSkSlOWnr0U7smPTX3xtCkMHBe1Yik0SCu8F6hLMu%2BdaTFoxa5Loiz9nUuWJPK6kxj2HFhYmPTBTrvMqHdK5NRiKE3v6A%2BF3f373Tfg%2FLp2yF%2BUA8ZDAZcFZNm9ZP%2FKekip7fymxTgsmUXyNiFTZA1l9A7L0AdhW&X-Amz-Signature=acaa2b4c9b431cc280434e401934d54f1c77092218c57de5d092111bba8c212c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

