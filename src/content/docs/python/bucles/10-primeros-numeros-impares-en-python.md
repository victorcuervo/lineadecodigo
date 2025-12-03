---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFASC5KK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIGbInr0PtX0xArQIyP6ra%2BbnRatWw%2BTJ1v3XX%2BXou1AJAiEAwcmTRYmrNZt2COdfu4LtSws82FZU%2FOpLypuATRhIRN4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDDUaOk5JEx%2Btel3GcCrcA1rRy7t061CDcw0%2FnVpOPS7%2Fivh94tbiLzHr3iX8VO%2FrDgbu7vmMb9mzKzPno9lBUKDOC839oJZr4ysp7d%2BvxftamYNoZTqqCGSL0iqk9wd5lzLDx471O%2FovfEaUq4WZDv5%2B029JdwQvn6rID82rSuetoN02VihSmg3vkN4yF0g5GUFYwRBKTwbzXWBYiBPmX%2BrKM5chYAOGrxHW8dj4%2BDOn5hiIw0jwr7eGEr9Vx0Pl8Z73p%2ByiohdBiGzx8WoRjUOp%2Bw4NBmT0z9Ok%2FNOx8sSsMff72pXcBfU4Tm25vGgUE8VE6HBc%2F%2F43AoFD%2B%2FOqZyfa6BnfyXG1eQwOyWmmCU3uR%2Bqw9yrshI3SrvKsO9k0Ht0MrNKtrCfvVDn293lqGb2yGMYF2151ecTGweA5UQaMBe5b4XDEtTZOgQKREtC4%2F0lTD8bXcPfzO5ncsNTZPJ8mV%2FpdLQvGImaqPpZK5Afq1f9%2F9veO4aDrEc%2BgQCWzn670zES6tLAIZk%2BuVKK6FqwIl7t56mfcC8bMBBNysKWYM2iNgFXxl%2Fb0MrPsRZkyfF1rKXKDrPrYtQUEdEHPt0nTkhOi6LsSfg519Myu9kuXKi4xigUx3NDowV0CB5PYsXXdJbmHAnnFSPI%2BMM%2FcwskGOqUBD1qBQ%2FDHoewhWtCOfwDmofEOpV0n61fiaQuKtaEI4NPRjgkEa7oHYH3A3zMRJgvx7rdjtTXTTGaNF8fd1v7Pz0DwsAXIBLlJOxbZIcaMp2LyjhK84GcmBzk5oMuVePKHW4eAryYfvcznYoFZry8N%2BQRdsFh%2BAx1y1TW9cSi60nFkMom2SxuH7%2BgX7%2FE1nIMlgF%2FqzkUeQm9J%2FGz%2BcO3JNLmmqGsQ&X-Amz-Signature=e16b02b08fb9239a73f8bbe338298637ba2fd77e82d44819e4873c3806407430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

