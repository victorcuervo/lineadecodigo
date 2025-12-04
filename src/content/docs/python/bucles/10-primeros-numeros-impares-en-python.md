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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J7CDNYJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIGx8cpn7pf5KH1Jr1PXbwTh06jf37hBMg1J4s%2FFAyBzbAiEAlEwPYpWN%2BQsFUPH7OmgWs5PywJMzOEGWBMmK6DFNH4Iq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDKQGWgkKyEb1%2FA%2FPGCrcA39KksoP%2BmliSq31OWqgq5NFFNPtl8s8R1PX5ULefKsZK%2B%2BJOekbGNSQylniNwaKrIt3LpGHFK6bO9eoDvZkaxUqd6jp2ITr1pCO1d1M0Vvyg%2FZBWq4jUMCnjWFfXBTaqaxrDd0qdZmIPPtt2czR6q1Bs5kDxI4cCS3uNhRbLByovxuK8RkSCF%2F55DDEIhNF54e45HB71mf5YCJrnY3p5O3bOEH6aqYUtZ9tDf9cWx3nPdOyYY%2FlHBF2fV7GgeaEUte0MLCJVIOueTi%2F4EJrLlq9Z8qa6RAPbUtZ1G8ZvmJWr5L9rU9u9b2XjGkJP9N4Yuyy0B%2BnLfqwqHMEweSMaQajG9yRlLzMKZ4hau4IepZ7fPLK%2F14PQIk0OU6zm40%2F90aZi8wFa54xghhUoW3CAPmfgDHiYil8nemRQRvwrsty3eunuA00uriBuv%2FNqumz1wsK6TKd5yn4YdSkrcpUxHCr3Inl9xrI%2F495MAWGtSXRysHTnYmY%2Fh39Gd8pvFIzvs%2BoM1%2B5%2FXSMc8loSQcCm3RSWq6IwUMwJeyL3knfAQiOzccz%2FPSo3OpdgIt3S2%2FhqkOpoGzzYaJFPhFZvdUzcq9RXLneQEjdAS9CcpwyzVlx7UC7gBBrRBeAlxeQMKyuxMkGOqUBm%2FXD5DDAhWRNL%2FX5Sjg%2BM%2FVIy0M6zZg1oJ70ekA6OoVTWonp9KJItIb3vOnaP0fWOFQFrY%2FeOGnRgNRXQUvl0qrGc%2BEvYmDoKBnlhWy2fQnpTLHVu%2FXHrSV%2BKeUG0w07rJfmM4SoOsH2CxBLqWZjgH1eVL5X0Ti2vlHjDYplD44RxCaTf5yoRXU%2BzSQgX%2FIY24sR7d54EzRrvWyovqO1aZ7XH2Vu&X-Amz-Signature=fad92755625efa570499845fa60c6c4815ff1187d41feedbfea3c1969903b4f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

