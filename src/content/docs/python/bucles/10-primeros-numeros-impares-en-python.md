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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPCBSHXQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIE330gSpvg1LZ9AWKbzsgy1ZHu%2B9vchM3sJI6hQGKxAwAiAkg3XCVZ9jvDLTuDHAhxk6Lnb98QYWtbVsBXpFqUFKmyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMtjI6PHvFHwYiK9ltKtwDCYTIeQHI99LK7w2sbWCNIGgVDaCVzsLcHZ5QqKNdfza6XKS%2B1Q6hCgWB2O%2FseNxXsa1S9FX03KSPHsctGitkWMD6T%2FsUDT%2B%2BcPz7zUS%2B2KHp4ywF4IE7X62yi%2FIkzt5p4WKMU%2B8lUJmA0ZkubWfOMWGtjH2RO6C1rOBYOvbABwgRWkG3Q7H7zD%2BAcS84PQ0Ny2qbEw%2B%2B9kF0m%2FRCmmlGflQWUwfenSol6etUfCcl%2FpMyk0D5X3Bis8IYx1%2FCXB9pRJGFHsmYsZLK5RXc3P8zH4ycJNrBZbSOPS0r%2FeOAOn8yRaN0TgmQjIIOxMx9WMJLBCsDRsssaLc8TRCCHVn%2Bet8ZERc7ouUFLn4%2B2NvnUXkTI3O3kkdUHgNe1dc6TXY0iEqxYoD2yFBtJkxBma9D4Pt2PzJf87Tcs8%2BUr1QqfCzE%2B1Xd4COrL0Mek5pW%2Bs14Raa6Em72B6z5%2BRS%2F%2BFcldJtm8nw6vQvfup%2Fal0pv9Ee%2FEK0VcuA89qlCSyazHiYFpdDZHTwuXueZXNUKZX7qN9lEfNntn7Hb6l%2Fwsoz6roY8OGWmdX%2BEgg35mFTdYEa8pwrMxWKqx8wRHI7OyQIW9HwU2yf%2Bm2x90%2BwolZZWo2wWPJfpmD6RCrJQ43sw9ubFyQY6pgG%2BwrVhLxEInaatByN2TzpLhx4n%2FliMG1KF9ihhnhLKCrd0bR2kZE0ZpoquQOFU4WK0wfe3N9k56oYqojKqkkq4gxCsHEkqPyGfkj%2BsaET46JF9zaKcvAlpOoR%2BNrpo21rslWCDAuI5Mmd3ePHepp4D%2BcLJcCexfxZSwILx7dKZ3yPZxkeUYVlmb3ZtcoWo86GkAgBvAQpvPxlP1XwTVAYIPhbiucco&X-Amz-Signature=07b12d094f9c08061faa7ae25ff12802b8a95ac6e923d281ffdf02620ac6886e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

