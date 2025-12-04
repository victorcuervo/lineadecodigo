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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH3X6JD3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIFQ2Z56bMN7s1gBOMN1eGYalftgTFB2Gxcl5qFG5VZSnAiB4v74LyMxYm2XCr9zwcGfaadLCVdWBHksSdkGLl9RcAir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMy8V%2FD9gkVZOcwYIMKtwDv2QLY5Z1vu05QIX%2BgQbu%2FaLdqUswXKiXzr8O%2FtnyRU7%2FQEwesdsErxz4xDBUDdqtq5gxePUGub%2Foesh7hnxTN%2BiLYP9b9p1zPCURkUAAgY9WAXCfmaNAay%2F8agkh9kRsCPYxHU13fzE03eMsj%2FcwoC2PYaFtm8u8Lh46%2B4ox4w5LRWlGo%2BBeiLS44xPL1cdREdu3ME04%2FKPQXEiDfMaoJWk%2BoZwBo7RKzzLEloJFc0Np3HAHELumRdlRoxuwifEktSG%2BCG1BY7WxhxnIkpxyYIBrGkfxTXuzYBYXs402Oafo3WZbiZ4f9HteQwV0SVSn2hUpCg19h4%2FjqMxV7swYrtbUpArxMeS1uBWm1I%2BtO%2FHH3C%2Fn0XuI1toRemN3lVoW%2B6NODGISyqIoXEgSSh%2F0iCkwoI2bOfrUAHJKQWXK16vpF17nUJWTDCduWyZGCfxXJ9gV4Qc%2FAsC8cr79g5XsIooK5ZHOEm6c6HXI3xzWDwomggHyR3Ztq1sVlE1KDJvVRzxY8GnQbZkQYwkcGACq9PDZ%2FJLW48n2sflu%2BN%2FPSgGwsUMxpyPJDzgGHak71CZgYNuKYequ8avZ5Z6to8C1uOe%2F1a%2BUYXxgoRUxOvgoO7rfTYDeLAtqlcIz8Sswr4PGyQY6pgG6e8KlgsQl9OY7Ek%2BcRqcrGXaFB7hyQkRkJUG6hhOL6F43M0CwSyGwIMmg7UzT2cmiUgxwBDwCsJY2DPZsr2pEs%2FVVMlshGnzSeTJr0otWO0CaNT%2Fe%2FiB%2BGhx6RrpeUAzpsvyef4HDISIkZ%2B9Jjrn7ZR85styHEKAzSeIFKEO2cEGYC5Gp9bx1MR89UL1QeOnPWW5UTWa5z63xR7zV84r7JF3b8TJr&X-Amz-Signature=9c58a396a6b844817204d3fd165e4a4c35de495db9941fb1bef306c213b137f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

