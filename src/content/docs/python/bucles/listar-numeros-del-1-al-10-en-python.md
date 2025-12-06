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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667USFDYAE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBX4o22MnBeOKMbP7uMAjO7Ea2KJ0gtIrhxjT184F5ixAiEA8UMO49%2B2AejSD%2B%2FDj%2F%2BT3c2etELODQlYqBKBxEKFks8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDHJBts71o4MD5LabeircA7sM0FLYR03%2F%2B5%2BggOwdvQ4t%2FSAemINZOxgL2OQ2dpvNMaJMnfjl%2B2fcjdFT7j1L40kgYzr9cDk0WpsroiXtqJ747eORNr%2B7b2dLvkwU4Mfg3LlYwUiz1Np7GXDlKziAs6jTocpzeLUkTNgdHz2GjcbtspN67HkJ0fRiN4qBy5Usk5feCarHLFJYPRDl3gEAdmUo4YNwcsMGKO33fjocpVfwSYFPQVNI9NeShmV0e9P%2FWPKuS952iWUp%2Flmb%2FzSupGn%2Fy%2FOEOVkjxGkOpu12HjzbuVKpGUsyzIZAfWvO93wyLLpxUcdtOJSNB7y9lhbGS%2F5M8uQQ2f6095iydT%2B1x98U21oD4RlgJ8WuJzUW9NpXW6TNonBpYpxLX%2BS1nD7lHkBxMkDtgmcYVtrPMSTuHRJwzvhWsQ5hZ5HcSuCrx2qzD4GLWd7Z9BTrLR8d%2FWUGn%2BTtQIax%2B4e5Ap47J%2B9vVpZOdZm9UZbX%2FbGI%2FWyfs8AhdWuvbuw51w29jXd8HGerihvEU%2F2sht6FuwZ2ohzcSsa4a1s6RBadOyQIYStjjivKv%2FHvfDl%2FjA2m4ErS3jGuB3ixBpS9CrPco5h9Z0a4FLUb9he%2FmavmS4QZz7UEt1U6D203eqFDxTZ49RYhMLfN0ckGOqUBPHVnAGq2xB6FhacoLVPrIb4z%2B8VXNp28%2BA8MScswhz7BmJ%2FU5igtxlvCL6oeORmr49bFRjlSFkFnuYTDwX5cRkjdMycaqp%2FvCFqhaRsKo%2BInK0HgK6z3u6Nbe2NmQ11UAZMPUI5GbnwaQcyM%2Bd69NvX4hH9%2BNudEQIB59bO4ZmpKXcgjEdIqarZ92pyNZz0fgoSHa6iVwEG1uUcS5yXyP8%2BXw7wL&X-Amz-Signature=34a4a2e5929f00924054a5df7a219f01fb79fe9ce8f7b3f700fa2373da9f2662&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

