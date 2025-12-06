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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTROWKDQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMJG%2BOT4nSFPNISD85iksnF0bTH0rJIbPxtsmhR5u5jgIgJ159kzWGamQBFr1uT9U8YRtib1y2P0F%2B4dl07cfcHkMq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDOCtEO3RpTnOqzE2rSrcA2k%2BKe76zSEa95kBHmXNVpm852%2BBWoZOPhyOu356ttc59%2BeaopYWqxuOnchi%2BGs51ze1peyIUemAFNfcmAcWsaF8i2VECq%2BuXn2JlfFDswDj7EEon2D4qFYuA9Mr1Ruk2DK58qWSoEwYA5NQOwJdo53zJe%2BgwLkpBGx%2Fa%2FVAGK50S3vX69fg2U91A%2FSS1e%2Blsd5y835zpj7xlm0YzFjoO0b8NMhlK7aMvdhTKfcn49FsM6ICXp7ozi4%2F2L4sJNu%2FrTw3zb%2FpntC776tsUVHCRVyCW9571cbYylhIS2Wn%2Bosj9Pe7IgPcnHaj%2BnlOW1rOPm0TkgaEUZnIN51cyep0o9s1SKidILLqrL7dGXNHeg32wr8fXJcaqEpoFqOmxWh2dlcpsPtMgt0UKCne8rtHRcOVb6MZfm9d4uQtLcxTmF%2FWN3%2FL1dxVhvTRwFGePeNTzRfszdgaPfiRYBkfRZiuNI%2BD15eoNj4Ok30JE3cGAv0HLoi%2FZNg%2FaxavYoyOpggm1Yc685ye22MMD0vHXSV6bHzrQZXH2Mxzim60Noq6q7bX0vfEw7RYg8vwg4OWiQmtNnAfVWeijGI8m9SN787OtX2%2By5%2FzfdiBmJrCIX%2BZOyOuhkr1wMgaApuaT3OGMI%2BJ0MkGOqUB%2BilSzUGUA5dhJ6il2H6W6z7DQ8T8DUigiYgOlARYpXLJq4%2B4J3PNna8CvFY7vw4utFmxwTSrO1IEMK%2Fho%2F0P6nROvNwVdmyoR51gt%2BHTEtq16oEp6PDCEe6lGQqdUNuSSh89%2FDt%2Fl%2FnUrg9TJcVg0Yj%2FkEcmuBJsjZGtcx7vS4sjgs%2BNqt36g%2BCsv1conAPn5LBl25th4FmRGmAc2pnGUC8QKxYn&X-Amz-Signature=60eab76132f515259c135e84aa03603acd06c58f873269d1a3e8500b84ec340d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

