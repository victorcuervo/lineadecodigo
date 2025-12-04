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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZR3KBEJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICMHs0JNnVMphbtTFnib2tGii3SzYybFDwlIWV8yxLDCAiEAnY3f9QraPAgf%2BfKXfnfL8Ng55tgl%2Bh7kEWq%2FS%2BIo%2FMQq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDAGGG%2BLp1Up03bp%2FoSrcA2ThZvojXMvPXhn%2FCCdLB%2BdsyqP9O8R4WOLb9ETpW5tWwxo8DTtNiVt%2FA3HfJYgWOpAt2KOxd4Ej7lbRFOfpdBVurQuXvYt1GiohOz%2FDG77JidwTfT2CNkpztMFNCLl%2BWkf4MZSk1QPv5pbMHA5pjxnT5e%2BgYav5afTgmP%2BNleJS%2BFNz7%2FAx%2B%2FZTAtNm4%2FKaSBbtT8zJcDgbFNny4DJMNaKPNDzUjmQjEiDj2H6uhy8ibJqbUEWuYG8Uj5ZICX%2BKCjE4R9ISVnGsrltEFyTNjVY010ckY9hefylqjizYVA%2B1DX8SrFT4U2xdwnRTJlNXy7r6hDp3oUAkE9OQGiQ%2B%2BE%2FdV1%2FvwVylcPjcO6COqdRglgNTNr2eA9Sh9dZq4qnTW5Hmqap4ejdrU2brQeNjDwriJoKkiN5JCvL5raeEEk667YsdjGRrSCkFG7%2BHfGOeAm5wyXLjuijbkQ61GXySW61uQxrcnDBYL4n5bNp4XT0g%2Bk2vDZg5h132N1XEhIFs%2Bk8JpMX5eck7i5IPGfqIhO1xar0XCu%2F2KGtTlVswurMVavr9a4IjxrC4wj8zkA5fiHvl9%2F%2B8%2Fq9bpfBK%2BGXkRxuLm4Rh7c7AaH21DR51NeFWftgCXZEe%2Bj41ZnclMLzJxckGOqUBnYL6t%2F3F8qC8WW8yKmcqCzwODq3LHJPrEeqAKOjIrn6pQbQf%2FkTMHMmY%2B957HsulCtX0tGwZ5SG%2FgX7f1reRtuwJamrqfBj8EEofyPuYcbVRt4OgHiLsynLuwMuC71w3sJDB9lFL7w4aNz0yfjFNhqn5t7nTRsDkiv6c2FoznKm8JopcGlOmXIACwCDqlFhQd8qWK2EVLbNOLl94Hu5Acnf3YjrL&X-Amz-Signature=f9df0c4f58861f039d5b06e8206606d2ba57adb7a1fcaa4a0afd5ab4084e89c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

