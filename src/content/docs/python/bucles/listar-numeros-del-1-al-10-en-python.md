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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P7ZEXSI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T205052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICj%2FSiPPV%2FuZPXAZ5fM8q1ANOTLhWazD40huUVkBUDK1AiBFA7nkECd%2Fh7fiIt7GAHOvgwVk160GYodZo%2FvQo2IQUCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvbIXgkpFiGm9mNFQKtwDF%2FT1mwmx%2BgCqJw9ak2xwf%2FuqhlnYPN3Pctyokoo2VQKRytpJ3JUCm0i%2Bt8gTv7csR2Hp3ugOerVW9ojRPfo8fviTdK%2BbtAoMhHz%2FYdXj4NztwnVAZ%2FqCZnZeuFwt3JA3jMkruer9PIJWwfogsu4qMjUrKTldep5de7yTS3q35UnzZWpoRnR2U4I2UW6rySaDgklsN04jlEZqf%2Fx1a40%2Ff0pFVKywr4PuKVNTPSFuPKcWpFqDuyOBmyjmATVKPlgDO387afxEh8NJ%2Fcl8i3Dq%2FwckMy4CyyiaoUBhsENtKWUTcYQwEHhdqxwxKROcqDp%2FZHKxulsyEiMW0tUaMirTVaqKynBG71qF7WeWlg3IubhOd1AYtj7J%2B6p68%2FxRr1n0YjEcrFBRnDVLIOuL7hDwVXyeZ%2BUuwHrxb8994h%2BrOS95sQecVtL5l8%2BW2MSccZ1N7e4ZoB%2Bh9p%2FTRMP00Sj1ob10rd8KDuC6kXdRmOVjSUk%2BZWJqkHCb3qQlElYG38iLFt35Vdvq01N4dfdLOhtT31j6Td8D94sadNcifllhaYgw8GOWEKL896UUXZQNnh05YEU38YHVeAXDOc%2Fx%2FcIcjRhhvPQcqBxi7X7Ru8JXyPT7ENm7L5bdnUIdEO4w%2BMfXyQY6pgFR6Bw%2F15ziBCbItiOJi%2FgB7P4JeOHRb%2Bu%2FX2GEkrZnG1BR7gQffC%2BFXlGelMkwKbgSCBC8GtXzWLvOZjwXG9xUzw0t3oDkTtpDxQxmxpy9yO%2F92zw59NTpkcR%2BPt4XJPyVhF5IkRMY9aYFY86soaUObzkUrarGWtE%2BJCqXKOvhY6LcLbyGS3biVhZ0cAaiJrHvuEbQ7Q6wxEEvIl13fwoy45UgJpqo&X-Amz-Signature=466ca2bfbe5aee0c183f4e6b67d7f56fb61dcc2a5af659e7d630db7bf1c59b12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

