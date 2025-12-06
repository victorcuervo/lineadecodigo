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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U47VTSLD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T145003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFjwYeWvPEkTJ%2FfJYpWX9XIRrCgi4gHxQRX6qVa9eh4AiEAgKH8K3YYgjqvnRn3%2Byytv2hvwniO0mKddcA8bz6LR24q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLZspfAxO6Pp0644nircA%2FLNoPUM%2Fxu24D4nlZOiWoYa%2B2EKRJwx6Zmf1%2BFThU66Mqy%2FlxZLe08M2kA1gSxYW%2FsJnZ4NrDHKAfBaK5dPtiRr2hKuwj5yMGSacjHX96x4JF%2FN2cBgJsJVeRUOxdcVeIGfRdKqWAX79u9y8PfevFXfe%2BhNLDMcf%2FOMd3sqFapRquTQZ6mw49tG%2FtyWQU9nh1AUIg7P0NncIg1K4TTY0Ica%2F5qyNLZXaORoldpYWJyFErjaKk8G6mrsxDeytqtqI3XVtVXFNmWkMtBxc17dMLIvx%2B%2FniXveqCTkMbZyKCvnC6nGxo2pOhW%2FXFlq33asuqwyuLFngriPkZKXYTwySSrEYASHxwynK4E3%2FoTCAfKUs%2BNXbFIhSzIf2PX49rV82y1nWOFjv0Ak4nIvBBC56XAp2D7V7u98uBvaShcilGY6pPU58xYIeZ%2BfAPiMLW7KZD7OBp78u9RcxZznzHcTEFmEDeUYuAubWyWj0MVqeT2Mv7p93h8XFpsaIPKX2L8Y0w4WIOiC6KFygU%2FylFHnKZV3LTJS0J9lYTV2k0xRFq8QANtYXBPSmxYjZX%2BGWLK8Us4S3sW3UXZYLiZLdD2Hre%2B4IaJq0n3T66b%2B7gBm7bR9UlKYfPWEA%2Bye9S1mMPem0MkGOqUB5rxkf5NoOYEuRhaPY9CgaWQcW5vCO%2FPma2R98wDy3%2FZxclCesuYahUriz1Vtsx5FsvAuv9Cr6qcXK3wWFXEBDN8RXdv2zhRwEZy9Sn%2B9t1XqDvUWBclkTIeCpnqFfTsP5IZPvvjSQptZEnGh%2BYHrYsKX1nK8QRjNRaAurTwNxg20uSvc2VmWOzTGN0Oa90y5ezuSGiY9sPjm6DBC%2FcsU9x1vmKiu&X-Amz-Signature=7de7626b9a2c91e0e2be8e034fb2978538d3551982f32045d25cd63d0bd42ca5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

