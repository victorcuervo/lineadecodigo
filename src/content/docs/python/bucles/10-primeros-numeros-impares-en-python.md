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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQTG27B4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T220340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNV8f%2BnzbPV4PRM3qu%2F7YkRmajD3sb4UD8fntvVVH2yAiAnFIVSkQmN%2F%2F5YIohqfJt%2BdL7GFNwdfB1mWFHFaIutuCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPIsPn0C1FQBCtnxyKtwDcHABwtVXKxRpAAqi3X2RoXE8XbkRz2E6Pp6mW9Llm9JevvytSfII4TmHBaSfmY9wTR6Yksph685APjE0GPR7p5sHWW6hv6Dy0a%2BlX108kzu0Pu6eG7%2BortL7zvzrx%2Bl6F3sgQs3XCJvnpyU4O0%2FgG3xz70XuAKVdd9eiqkJSVJxRBycc28lECWjZSRCc3dCelC3z9SgIK56piHjqbXgxkDaZh5P0XuM%2BlKe9POprt9BS8n2K13cnbpJvzafYIpDVo7o2NkAEML56VRJus3Bmv6K4gxTnweEdxrIPvERIltLK76cAeQJF8f3y8sXOxia3mQ85DfrD2gxn7IxQrNM%2Bez0uyr4K2XqvD49eywpBfBY9djPWfKF%2BKcCyHGuDl6BhvpH8w3m6S71kNFw5fjCzEf%2F3av3Z8cBPwJ3xO%2B3tPYDhwQoad123an8Xcbn9SAdtoeRZvKOb7tEoU9i5xuQMEZxFp6XwF%2FqubPlxAL4MmgELUzfp%2B7m2M1WpvG5qq06DSqhQI4doFCMpUklYqCPD3slGDEKkS7wyLRkPRZT%2FJ4TfwFLHkIgY%2FcYraIYOdTysbjFrgQ1DUZGrm9USgCS4d7gs4Voae05hRL6zmc%2BBzYHdlbiX%2FdHUlRqdQuMwmIDdyQY6pgH85w9aab2t3B5%2Fuq2UIifjTnHmsIr8y15bCDrHsq1DR4wiE8vHafiil4%2BB%2FVYpenBWQ3pSE994N2%2BwImskflBPp9H7GGJvA0Ji%2FADMMa%2BbL15aW%2FER4NL1%2FG2XEGmIOMrLCrflX5bj3DR5%2F0CTo99tK67o4V5RdkBhJsyPgJbpF5whmzb5fXgwZolyY2jQ6i3ZUFdU3XoZ51AjNKIar27ye7PCxf5y&X-Amz-Signature=2131f5d7a0e10b5b60746922fd7053b110483c9a3048fc40d9423cdda44beff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

