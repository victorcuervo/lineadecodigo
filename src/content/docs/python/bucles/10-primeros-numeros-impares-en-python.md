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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUG3IB6N%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFeuvFNPfjWRgWR1wdm3zNK0H5mB5mg%2FobYFERynwQOfAiBJK2UB86VACzK%2Fwfc7FrBK6mg1S5b%2BOV%2FMF5tNP9G%2BqyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbfFWwp4VHN6%2BWRoSKtwDNsm%2Fj2gjjWsJ9Ynzrr0i5hVSc2d%2Bi8X1DCnPK31SkfgSEPfb%2FfIEGrrIs5bopBLnAwsEIcAH9bF3dUwKFT%2F6%2Bp8crsVkDsOEEN%2FuOLOkFCBF1mtmKQ17e2OG068CvlU0VU2tsPL4E9N9s3tsdyap2fl%2B4pNB3BQELl%2Fe7Y0j%2FfSaZc0kYyH5ZNszoYvdw22p7qXPLZ5w5RhbG0jR%2BH8Wg%2BSkHwbzokXc7sw8PdDYVeztgZ3agCfaOUbc7pYlxa7BvS4vue7N0T7rfX1y2GWoX4NKPnx8kIlg1R6BG%2BAbWCQpPaRLoEuwZ57dlYBOdkY5mjbljLHuj1Ef36ys8P6HuDEQxYStFljtcJnwjbaGTAULKDDmAqJPblBZ17CYh5HSaE3Tl9x8vTT3N3pF5PbRJ2fTNmH6wWSfa%2FetFRZGThus0TTVn0u4SjF8%2BTtOJ%2Bu5%2FYwG%2BZT2M6xAGbZPHQ1rPz6tqgm2f03Id%2BXR0e7HH4Ye%2BZteV6LBxgjzdOtl6HmrK4wCHeRHMEWMz5aOQKG0c1uH%2B1LjFsZdRCR%2FOWZdxFfNaWTZKDKsBOMe62PoITFSdH%2BR%2F%2FmHYxG%2FgEP0lKKqGsyHsFbK3xyQQxiy0vZxZa5vFT0eO8bId9HXcWEw953UyQY6pgG%2F23Fma3TSTbCncShq6l9KGoX5C4baEF7UbGktTAdDLgB9HGTkkv5eLhW9iQqrhpUcipOcmzifLOBShnWXNzQ2C0pdIH7AIObnzxSc%2FYcKdep%2Bg87dqrQQeX8Np9dZK%2FJytwKoL6gW0B4kgNgW4IQns2Er05cOe1xzwflMvndNX4H8R8GfX7uYtiHt%2FL6Ax2kMiyCqwrFtDUYEMqP5w6irqgfdJ3UM&X-Amz-Signature=acfac3c566416a71b64188dd0696b69ec81c58138aa2f9b63e99e148bee2cf32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

