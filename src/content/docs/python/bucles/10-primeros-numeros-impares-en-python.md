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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4G5H57A%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsHIgFcJKvWu1CY0L8r4QX%2FHTC1SreFcjD11hsXyAlrAiASIftc812r5L%2B1OVpNizTPDUQ%2BTeabju2gIlH7V0UE5iqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy%2BTwJJXGtlwsdq7VKtwDYoklp04Kl8idiy%2BwX6hdK9XJqqSIXAyhMgKGVR51Twa0%2B0biaGw6KsBtpk1h7EUBuy7keQapvbEgEDUJpV7%2BPWAp3oCmu9UzKqNraUBWvE%2BArweEcJvkg3KD8NrsPLsCsh%2FCiS9iPbUUl96mzvNAScJa%2FnHab3AeN0me%2Frh4sQ7TlMlo0gOWOhvclk2V3gQbcdARoLPBx91Rcjb4Z6Nq%2BZfP%2FXP5dASevUQpyCAOq1m3IhSvyo56Dsy1mzsHkzdIaT1sZTWvOmyLPCJI5hHGr5HFL9oc65zcLZrZ8BeS5BpYOFwqobIBBGhFrjAag1csC7wnCbmRjQcTUzYTAh2oAh2n3OA6MuogFTiXUn6Ydg%2F6dw0j9%2BR3%2Btkpav0uy%2BhC0cLyOOcocK%2BGuwUb%2B1Ak2xyNsRN0ZR7WY2%2FjYc175P6LdIuSWbgqdztxremt%2FcKbbaohgkOkOL98f38Gflwrm2%2BCLkccBQtoO%2FMojvKRQmQ41a%2BtH4%2FboQoYTMEMMFK6xlsPVEVKsZAcNVW0xrWT2oDw0QwXzs%2FZaJvGYWgkq97XlUrS1Mf7O%2FntqkmlQHivit08h%2Fgh1H0NUNrHFFXKcx9vsev1Y8X9D2Tq0280pl1PhKkSBImPQ4pA6iwwxcfXyQY6pgH2VrseWTz0bQwxHCxbAD7WY%2BztLyJi%2FcepBbDGEOfcs3oGAlI6vJs4a8zavnP9e442CoDYdP6pZzm9iKX7uSv7AkshPUwmSpSknk2bl5ZrvOkm6S01BdPte0K6vtBch4EouaEgLiccb7neGhUT6w9WCKn%2FaEVBWqhCrazwIcefOvzH1G8yq6%2B1UlsjuBH2YB4tA9TYvP55Q8toSFOBD6g6%2FQjl9tsM&X-Amz-Signature=c37363e02b3bd53e601ebc7ac5942df13f999b1d59fe9e31e5fcde552bc261e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

