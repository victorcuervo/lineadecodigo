---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YERSKLKD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQC7rYO4lHxYVgiGg34ldeVKQq%2BzSGY7wUvvJk%2B2fTDy3gIgVOID3Lx9AtM6t7gzjtlyO9trksTqrcG%2FY7ShEACs%2BHIq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDM0eMivYGVSJXwc55SrcA0ELPjkY6J%2BoBVGWP83jzQwC6WuygAe0GqxpwQOypA2nY%2FiQk6fdty37a%2FNGAxWfYXm%2FTfEAcYpPfCghXbMeQs1F1s68yf6C5ADRRlYJRDS0MVliKsMKW4WXfJ%2BmrKxaR2hJX9coYPXBggyEEeITqG1Y%2Bn9MWJ0JZwKLbt%2F%2Br6jnys82wFsE%2FP51LEbczPEHZBoSha0Yg%2Byii7zI9CcKZho0qjoDHc4jrZoMAf51tRY5Y7x4%2FMb2%2B2upmqi7uV9gCr6vxF9exMR0JjdlOR%2FHU0CdZ6DIOpP7h1dVUuXEITtNqE2314c4TPj7ZjELCRkIxqTabYH88X%2BG9hncsPcbPwp8hJtCX0uJL1V%2BWcBiGR15sThwA%2Fy4vFArqvQ7TDSMZAOP7x2hqXjzmBVnAXTlFl%2FEijCkOcOTPff5NzVqGYImHQ51hH8eAsW%2FF%2FA%2B7ic96uwf1yNyLjsUZXslwJXM%2FYrvCT7htwgpR7jOjT1DXPo%2Fg8QefXBVbAX1C8a3R97LAkEhFqa5IFcsPlp6uShGHDCZYk7ZHkq2vvQiIrGL2%2FwOBNJIG2l7rFL2SUJ1WyWqrJ6vqM%2BmziqRfFCMs%2Febsn51Ogi9qwkrkYHDP0Gvd0c7sFhffcYxf8MdMMekMIu1w8kGOqUBh0yuEoj4gIL43Xe%2FFugTt9Ul53m3f0HNv23T5hRs4K7biG7312Qc5u4RA0ou53McXPLxOG8TLIK7TL0fgA%2FfsKbpD14Fdov9Gj20S9m8mMPzGThEaa5DjemTVvdNLwYlRqL%2F%2F0epIL%2FiitDVH68fI%2B4RyZ%2FTdCljARUR6NVsv%2FRgmg8539gR7F4ul%2BBVwc%2FQqrZBKCAHYBbGh1o5GRe3Z2no%2FNVr&X-Amz-Signature=e6c1a1bc2c9c29d962c5d7cb7b97786658de215beab1f177a87d19a226802673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

