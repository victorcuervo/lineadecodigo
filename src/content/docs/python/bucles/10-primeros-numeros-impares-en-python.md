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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466577UKBMT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPhTXs%2Bfor%2FkSIXhAX9MgzSJv85YNBWDZotvaKomLW0AiEAuJCCbBq7BtLTpSzyZnmGmDl4aYgevTlhYcR0q3v%2B90Iq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDAPJ%2BF8X6wVndWEvTCrcAwAvUAYDDSJ2zUBiuAoNuxBFOXIrU0yytQHyIRTuspuL%2Fn2dZ32rIYcnz9E1oTzSpOVpoc%2F5hjtt9MBQlyFgun7iBSF5Qsp6EHfftGWZ9NTDAQy8y6V0tDeAWH%2Bxj9BVHTlGofIYaaiWYGpmdms2dJgf63EhoIJ0QJMmWsWhJ%2BEq7yflKBZmcIkEMAUAWrBdSLoSQgkcty1FYaF8st7gu1Lda4MqaGWTKuoNe5CEGUhoxGfJ8xD1ztOdq%2FiuRWDgi4iUbQl2yophYnUhcf32kQzQZ4%2Bcr3ec57UxamjPFA343bWF1PLmHUMEOWldw1qBynJN5AKR6xJ%2BCNqWIIN88bwM1US%2BLrukCmlqM4D0Vf9ZYCEUykXUdaAAyaghSnsnNKJ1kK6hAICRGEkW9unUZgihhCvkDmU%2BM9s9C7GXCH6JXuVjCbX121HFD1xcOez%2BItLNZe3cSBEKqgEPjNbIj37HyHON46NQQSzbOOgNJdjLQbzOuatrbynl72dtsVqOK3GLuca8iYbMgcgDmIg8eFLcGeUOCnlUW2hqbI2ilx4IBKDXcsFCVyEqlAZhggjVOKaBqhnsqp%2BK1zL7sTY5lxFOQl6SVOhu5%2FfTIyl9ATlAELB%2B3wlDyi%2BHyUNUMJXT0skGOqUBb%2FHTdXCG4G%2Fo7%2FFZB41591WlheBrB9v5X9VAorjGA5yxWcIVnX%2FPFtxJYAulTRg2qo2rXwTeiJyfXPFHKn0Q6KHHk79TQ3iO7FeQtIW11pKR7zpSu8dbYAJFVjH2rDWXY0Bs5VLrRXlbM0ob9cQLOB%2FNoXWi%2Fw7a8pyDhSGP938OSzjpokhv339ZYRBM0FCBdmzBC9xxu2AIEfIZkLwg5IvKyNoY&X-Amz-Signature=36d67d7a6698df51721b2a2d42035eb7a3dddfa7412e63f4850ee917cf11c6b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

