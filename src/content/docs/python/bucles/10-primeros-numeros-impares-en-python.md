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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PSHTR5V%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T133552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe%2BkV3V6%2BwRLk9WyWe%2FtfyGFTvw1v4RfVmJNwhIVGfJAiB9pHeVowLorieD7O%2FJUGr4YvDzsAmuK3Et8%2BBmqqzmlSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMlwEH0aMD2Wb%2BRKKoKtwDxeZix3liV%2B%2FA48413YfRMTCFNVat3fFB2yWfB0jZh99A0uuvo1%2BNgpJdvou%2BYwBOidSsIwukTk%2FEeOOdjf281lX6VE%2B%2Bj4DR%2FckLrm%2F72T7321HgM%2BQ5sF8RJItKlXkLK%2BZt3raKCdt07sjCCLCS4EFhRRIH819W%2BLjYLj5KdgL0lXNC%2BIKbrBe%2BW3Q6%2F%2Fo%2F5UkA09%2B%2BlCwkunPJ%2F%2FReg9%2FTXb8rC7qmu3%2BD4qslLZWX3DKUzFX9Aulah7czZyt%2F4ldLhWRknfMRZlYUU7DvWZwa%2BUmN2XPCu1YpksAUdTwiOli4bSR5AEIqkPIOLh0k7O0Wbm%2B7CDrva6zvKCZIIRnu2cnhlu%2BA8aO0ahS7lNLwsIPG06jyQWildAfmAWwwIwoVgZBUD6sq5gimuRQhVmeMW7V0HPRiW0Z9ArO5ChZ2mRsjjv2EgS1gBqDmayR%2FrHMPArgGe%2BzCOHQaLx35JYDEiF6gWc9y9iZ3SyRSgD8MqH3QuLdL8ZXYbYVhUj9tvtDVEwH8q%2BGyC%2FIkT1xF9xlAn0HaPKJ4K6BNCugq%2B5r%2BSmM32WtsI5sxOp26T9V8KHww8E5%2F02PyVg53abm0nNZQZ3FtxFGSQfIiGSDHleeTb5OOl4SPbWgtbZ4wps7KyQY6pgGrJAP5uwHJJ%2BA%2BKvEHiwRjil3y8Yu3iO9mekWf9OONE19v3I1imugMBMceBXJQZ8y95%2BGbo2rCCAmM8I7ibuGSwsgbrNDtoVW9Ev720jW2%2FmNR3sf%2Fw2Bm9umxsNjVrsVwhAqjmlMxWZxnf8WEmP2R7Hzf5QBLNmbw6l%2F0LgMm0vuGRJ29hpS%2FfQlvKCD%2BYOvrW%2FPGQqcS8Dkno%2BBWpicq%2FC%2BA19KN&X-Amz-Signature=45719f938e08cccd654445f5cca204a240c01c69a87ddf93a4875ad84132780b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

