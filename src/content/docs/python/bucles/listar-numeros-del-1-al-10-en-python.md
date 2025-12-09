---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
slug: /python/listar-numeros-del-1-al-10-en-python/
author: victor_cuervo
---

Hoy vamos a revisar un ejemplo sencillo a dar cuando empecemos a [aprender a desarrollar en Python](https://lineadecodigo.com/categoria/python/) y es cómo listar números del 1 al 10 en [Python](https://www.manualweb.net/python/).


Para ello vamos a revisar qué tipos de bucles tenemos en [Python](https://www.manualweb.net/python/) y cómo utilizaremos el bucle for para poder generar la lista de números. Además, aprenderemos un poco más sobre la clase [`range()`](https://www.w3api.com/Python/range/) y qué papel juega dentro del uso del bucle.


### Bucles en Python


Lo primero que tenemos que saber para poder listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) es que tenemos que utilizar un bucle en [Python](https://www.manualweb.net/python/) que nos permita recorrer los números. Dentro de los bucles en [Python](https://www.manualweb.net/python/) encontramos de dos tipos:

- **Bucle while** - Es un bucle que se ejecuta mientras se cumpla una condición
- **Bucle for** - Es un bucle que nos permite iterar sobre una secuencia de elementos

En nuestro caso vamos a utilizar el bucle for ya que es el más adecuado para recorrer una secuencia de números.


Así que miraremos la sintaxis de los bucles for en [Python](https://www.manualweb.net/python/):


```python
for variable in secuencia:
    # código a ejecutar
```


Dónde la variable irá tomando cada uno de los valores de la secuencia en cada iteración del bucle.


Si vienes de[ otros lenguajes de programación](https://manualweb.net/tutoriales/) quizás eches en falta el control de límite de bucle for o el incremento de variables. Y esto se parece más, por ejemplo, a un [bucle for-each de Java](https://lineadecodigo.com/java/bucle-for-each-en-java/).


De esta forma, si queremos listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) tendremos que tener una secuencia con los 10 números. Y si queremos representar una secuencia, lo que tendremos que representar será una lista de números.


Por lo tanto podríamos decir que para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) podemos utilizar el siguiente código:


```javascript
lista = [1,2,3,4,5,6,7,8,9,10]
for numero in lista:
  print(numero)
```


Podemos observar que hemos creado una lista del 1 al 10 con los números y mediante nuestro bucle for recorremos dicha lista para acabar mostrándolos por pantalla mediante la función [`print()`](https://www.w3api.com/Python/print/).


### Elemento range


Pero la verdad que es un poco tedioso crear la lista de números, y quizás sea algo realmente complicado si en vez de querer listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) nos proponemos listar, ¿2000 números? En este caso generar una lista sería algo poco viable.


Es por ello que vamos a acudir a la clase [`range()`](https://www.w3api.com/Python/range/). La clase [`range()`](https://www.w3api.com/Python/range/) nos permite generar una lista con una secuencia inmutable de números. Por lo que si vemos la sintaxis de su constructor podemos observar lo siguiente:


```javascript
class range(stop)
class range(start, stop[, step])
```


Mediante el valor `start` y `stop` podemos indicar desde qué número queremos empezar hasta cual queremos terminar. Ojo, que la parte de `stop` no incluye el número que indiquemos como parámetro.


Además podemos conseguir que sean incrementales de más de un valor a la vez mediante el atributo `step`.


Por lo tanto, si queremos generar una lista de 10 elementos deberemos de utilizar la clase [`range()`](https://www.w3api.com/Python/range/) de la siguiente forma.


```python
range(1,11)
```


### Bucle para poder listar números del 1 al 10 en Python.


Ya solo nos quedará utilizar la estructura [`range()`](https://www.w3api.com/Python/range/) dentro de nuestro bucle for en [Python](https://www.manualweb.net/python/). En este caso la secuencia es la clase [`range()`](https://www.w3api.com/Python/range/) con los valores del 1 al 11.


El código definitivo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) nos quedará de la siguiente manera:


```python
for numero in range(1,11):
  print(numero)
```


La estructura de nuestro código quedará tal y como muestra la imagen:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLKKVHMZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq2NGml64PVb7arTWemXFXZcAwd8AEllJYHBw3WP3BdQIgG4zXc7DicYYwLEqlp%2Be4BTeePBSJ81vYLZpCZwiGLLsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCej6NRMWHjyxLjwgircA0J6qq%2Ff91m%2B4A3MPa%2FMwAY8pQJ59xMSlODK6eGX%2BRstkbGmBdGt%2BEtLGAjZpwIiryAhyRei%2BN1nvZ5FwW0K2qtTYXfLgN6BvkGUKsb30At0I2v%2FQsA%2BCfAOSGAGFPaKa%2F9tTDUHi5H6IEaTWeeKl0rHQgdBBsC0mGUYRPIad20TsrmDkXb0psKVfXjOcxhxrFim0T6%2FQkq%2F7Dic7mVq0UOaKiuMXI1SD%2BA6zlZ3i2F2kzVblPj%2BynVMZnglXL%2BfFYI39nNuYJjjVQMMNFJyGG6%2FrHIc%2BKYRFrEc6zObSawtxTl%2Fc0o326ZDVBxCod6kocXhko%2FINSjfknrngmF%2FrXCxWfDd%2FzwAtxbEQhL1b9brFD76S%2FGW2572hG%2F1noKYimF5f6UU7xSX1g4z5iM1jvsE3c15t%2FRcq0JR1dcgi67Wh2dqMTyQxwlbIoavUxE%2B3K7ZsPfrn9Rs6meyWNw1IOlAOts%2Bbl3t2M7%2FYJW%2FjkDhA638HuVE7D8pC8OwyPFcqWtDVzOpz472fzJtFvXtgoxY0YLhFNOA%2Fa0FtV9ACqdx4E%2BdU6vMlB2EvLfFpm7KZB5tUbMGVJHwTPFChYv5%2BoOXqO0ZW0UMLREd1%2Bx1Lu%2FocZYWqkifsAsPARCHMJbl3skGOqUBI0KWfYSUyq%2FTba2l2GZ%2F5AZ2jH4YijLiZ3FX3eXgMYRxfYrCZhBgUP%2F3OwGK6hMCKU7qWXk9ud47GYb1d41MxUVtcoaYzKkK%2Bj2A%2FI3%2Bmk%2B500%2B2%2FNBt0N2ipnTe9ODgbsiiWj7PI8jKJHbg%2BFEC3JArcmkwqI1T7NKSuVL2M%2BZdVOnqAif6LK9xsNXF%2B4poFs%2FucrXVBgBrq14OOOp%2F5xwyjFTX&X-Amz-Signature=a3a2112daea877036d43cb0658b6d835595e25ae5940e303e9a0710ea79e00b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

