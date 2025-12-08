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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VMS3BAR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T154720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRXdG%2F10svPOBWj0Mbs6QlNbRshYbROoCvcbsfBN5E%2FAiAaaJ%2BrKzDujEPl93Xfgwztbt8K9cqDbynxmKWtEeQjMSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkkEiP76vOEkziapNKtwDEBXP%2BJMZjd%2BKFCvh0g8XQcookCj%2BeFix7IGh1YGH2UUV%2BYTP3nNjJpQFrSn0UMtnI3%2FLX20wGXV4IkQvyDhQr25EZWtfTZYfDWftAB6zvnXjEBMcrcQAoJMEo9kKOxtUxMdDzl5qlamC2iTJI3baa71hHDicQ0zWoMMOdfbsJ%2FTni5tKCamTdFlwWXLWS1UCU9WAu%2B224ODLK0Ga1xc5YSN8Dg%2Flt%2Br9lwfC97Wfn2dKl7ThVO2LGY83BFUF0jKffxqZWRVHQn590nTnSFU4ul1maarooZgkaAr9nV0051JASNMMnGq8ZdMJwvaIc8AZK%2BCHC213mJnCdN9XW6987%2BcrgQTfd68q8GWNnTGCEp47wp1LcHUP5pBVEt3bA5yK7Cr7kdWtmm1cX2z97%2FWEcVUxSsBjdydWlbkDt67MhBCIX9Z%2BoR2Hs0XP%2Br9Jc6p%2B%2FauNtlDo0qPFXPItnZPLK1hEiKrOf2sNBg4k20nZTlyCrOkfQzFj2rUO0m3d8xuYsFwDAHB0jpU3bGWFdvz4bxy920Gjqw1njrrkGrN6z2Q3lwScoKShhguy3TokwNQG62McBceegJdQzvitMCZOI1PJOB0VPh3z%2BQ8%2Bv%2BNfrq3DwRyqF0e2URClRGwwusLbyQY6pgHJYgti9Lg9F1gf4eP1s%2FCMd%2BuVhCmwpx4ESxQ9g45yC7bEuuDvpzJiJQeO9yf8rnfbrW76rL6tqyU%2F5Oq9ABBLoNJHoN4GSzq6klD4wIPw3XlSP710zmEcVBKiVwlVgT0ubzf8GOm6oG10M9Hzl9ifx4NUEv4FBLO5ZwsqBhrq7yp9heuUp%2F9wrjU3ly2dSpGlMyuEtqZxVDL1QYmmL0j1lyFKkTYU&X-Amz-Signature=243c3cd086a7d67ed82832965dbb4b0d0bb0fb3ed3f6d580e1342517bbfeb302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

