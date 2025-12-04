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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BATM4NU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDpxKWdcAFCd5hfFwBsDX3P%2FJbM63M0Zap4iEBXXZeQ%2FQIhAPzpjKI%2BfC%2FAogp2WMq087H2Ozkdx%2Fis%2FkxaCDG10ACIKv8DCDkQABoMNjM3NDIzMTgzODA1Igzl4RiBltT8D%2FGNUe8q3AOUANawg%2BDtbOmazHjz9NQUBk%2FSzT15J1pRptRgsBHuDOTZFOltX33gcbU6ycV60jMCeCtOhct2u8HvxpPKgp5JeCHb4ojf%2BaDpEztMp1cr9ZuRlfr0uewrlyuEdctRQdmO2GBoJ41wHlF3VKNUnzKNBiNVNmpOL5mneG1fEqcXw1bRkPrRrALx7gJniUeS5ks8Tbo357kMA5UzdAuQNWbOSQBU1V9eOK4Yivj1D2trfL4iyAhgyz1nqPzsvAAIiRgnLORpksqWw0oB3sYVLOu5e6zGkC8WAufCrzblzSrsK6TGeIraGOMAVnzyX8F1PFLGYXPPFUlnho8T9zcrgzmoYYmnyLo6P9DnGDD7jqYdqK%2F2x76amkJ3xCOEFnvl1dR8MeUii9pmS0Lk7j2M7M0Fkr%2Bxrsqip6toaQHHij7xjKtzzrH%2BO5hOO1ydXcZp1yYGaKt%2F%2Fb14dmyAGeEFbJrIeyRXFi3RIKbjyNaGD9VH%2FLtb8%2B%2FD4QDZ0SsCHCvxN0MHVpyoyCgnK4S5OlSaRYshtaKV4KV1pCMLJcRKfdfFCUtAhO082sU3RlFi%2Bmw0YztJa2vlLAZbUJMAGVAKtJ4Wq1Ix5amLw7XogDESbaLxzffUkP3hzwb6UyYQZjD%2BlMPJBjqkAYUXjqD8t8Z9qSSFlU82o4wGic%2BNFxZ6ZB2XGbOZ2h3Qu%2FBiD34dA8TPyZHl0nhNXz6Tri0sBqB8G5kkusoQZL82ozosFL6MVdDvOrwVH8xCQX5XqVkQQwLF7E%2FLhWNuLTAF%2BpPSMfkHrlcsHq0AX0nbs7MzH53WUhXMBW1MFu4FqIaxPFp75ADnWuXsI%2B9muvA2zb9JrDH0r5DmX%2Budc2j2UPZk&X-Amz-Signature=cefb1dd7cb6f183b2931a22f3145651cd5a5b2daa651aeaea70f52fa838203c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

