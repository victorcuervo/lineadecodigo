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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YAHNPT2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCU7ZG9%2Brmp9q0toFPLr6UfAmVIvl%2FLK4UF%2BH6v2YZhuAIhAPYdfPge37tRvjjceV4FdPJ82o2OZv%2B8yzjjWdZ76DKRKv8DCDoQABoMNjM3NDIzMTgzODA1Igy8eCu8ZOwIVBH4u3Mq3ANwcMVWMeR%2FCCCr9u4XZtQGoPBGsFbZbXkYCg2aLHDt0w7kcseoji34DgOskCBmsGSw0ACtojnSy1apUc9Egp7eh%2FMA5X2LN0djcfZNiYxjImlKK3KigiVT2r1dKMzgJHmh4miuLHHucGLpi1%2BsjAdoGMRq77TtYNWeu1XMLLUUdNoblhV3cZ%2FtJRi443fHUtjX0cF3j%2BcL5Rgsc4DDAAmcV5qT91eqWGPWdcLY4TNVgNJuebQ7j3uNfrnq%2FNR3VJVx3RZRuyKQgg6CO94KhuNnzIfEPjIJ%2BZruXEJF9W%2BUxcKDCAHB52ohY8Md2xyXPYQ%2FP5c0jsHEEHl0TkyqObNBTr%2BxwW49F4lDnkP2ZxKsP6nNPWkeFqGlLgoSETqFDjSPcaz%2FUEr5c6tntVspc40zxLSOJpc%2FItBWy6JjzZG9Xo5%2BuzrNGIRMhT1qH%2B789qwIXyXPwUUFBG%2Fl0G43i3x8KMhuWiDpWsqbk%2FjZyP9MNTsgsJqhPG6eWnFe%2FP9BYBR%2F8VNDB2TrzO1R2tHmPLuMZ8xmQZQ%2F6ISmJjkqYrS3aqyHPiDYO9%2BPqdprWMFidsJQtdz67G%2F%2BQbJyRLFxZykC9cYkLCUaEV9M4n%2BvmsTsxXPBFHFCqaB5Ped0ijC%2FtMPJBjqkARBqrTVjnohgJhBTi0yiYAUDzTdKrv70kn%2BTLcUIy5YMqdLEU0pGJg9IN3TP8Qi6k37YreMryTx9XMQHEoAjemL%2BXfXAHufpaieWLX8dGP7ZxQQtuNO1fhxxu0Ym2JXvtmSmQANrHEkvLxkh8gJdA9atbtGFEB%2BPdCScyls29OFmgPDwrx6%2BpmTHDPCopNGfbIa3RJdqruRlp5y4p0%2FeCRBF%2FPJH&X-Amz-Signature=aa69fe32863b5397d9610a08425e461912cea11a55975a30d2d3308b98419618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

