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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IKE3FX3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAK2YBBRKUmCt%2FcWURXNL6NYHvB4T6c%2FeMrhN1Ux9c%2FDAiEAtPKPG8egvl%2BN%2BTXkBXYao3Ej4cO8ELiI6AQpq%2F1dRA8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrJ8VD8FQAOegnJzircA00T6kof%2FA5lzhmTapJpOl2EaYdLwUP744IPiesNeK9dfKEx0je%2FpTUlUw%2F2rCVZNXu7mzoE8iRDpgHN6xf95VhgFQcJG1I6bBpqYWoOURGFAjyyd0%2FNBzWNroE4sjgx4eR2YPz5xxp7%2FLlQF74muVrSArLTeh%2BERiUR3xpAMa9t8%2FU311X%2BCcRkiEzeJ4XXuuDEomTKfY76dCfaGALcFVdQsYk7rRYqR1dWYNzY%2FtG7Ftl1L3M%2FOQHxj61VOGF8S%2BtR7HIlBt%2BF53OLc08et%2B7Uzwn2nzDg%2BYwS9ef%2Ft0OWkKrq%2ByCu4mfO3ORPtsQGF99Oyc0qg%2BNYFhgGkLxq31q2ALQPKvXH6NhQmAQHqum8laCckdb9KXbplpLcMGXMYKaztp9mVGS4I8Zf97hcj0UWO%2B9rWbmHyE%2F3jycaze3GY23XK10cHD8s4eiwFczbh2gApYaYqXcXZEFGLWJLn7HLuZMLowglvZNcWQrojth4EHVgScbIlHf48WlQlXDLlxMyYjQNKn7gaQQ8EcGg69SiCHWpiECUXS%2FwdY%2ByVO5Klw4q0AmSm7h3HADg%2F79YGtVrpP10nVo0sisIEOHkMN1c5R3G2kDtXxT9VzBpOsEp3PsJaOug8gHRA2E%2FMOD90skGOqUBVYyK1D%2B9IhZOeO0ftuEug6rKrqd2v7Gn9iFwr%2BzxvQZwAbqFXrtRlT%2Bd3tf0HdOJMs6Be4ae3809qhmlwMjDx4KHt5VbYIPoStUaMGz8V2p1nlprNV55r9u%2FmQDlxBoMv31MARnuvJjPreOMj7KonZtG5K5v%2F%2B0c25FYxA0rzWQnmFbI7VhLrGh32RsQniAqfQCBl9iTpeIz7%2BDODHC6g5VLLQG8&X-Amz-Signature=12dbfe9d441e016f108c00c3a9f8d491f1b29a54f45c178d7e596a880cb1dde7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

