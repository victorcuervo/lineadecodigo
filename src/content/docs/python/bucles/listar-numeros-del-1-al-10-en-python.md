---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KRTWU5X%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDRwuccYEgLnj0aHHtOlnszBzewT9XfrBmRg%2B2lfISDkAIgHg7VwV6a%2BlzXSA1oyiAebm%2Fhfikdv0Hn8ztGn0jpqZAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDCSiIKZ7R44%2FPVsJ6SrcA%2B56gceDcKKskya%2F8SMGxI%2FRpbBFwE9%2BtkraUeIWQCugtrxuUfLlIUe57To%2BN825Kegbq%2BIx0k42bYuscydfEI1atzRCnxIcuGbBGsWN59lWVhtnGQcdrCOxtdXSjHIfBD8i3Ynjfyl%2FRyOs11avJHhWu4zm%2FVBfhBaq4nizkp8BiwWnvov5QYZM3TnmwLLprkKHdPO%2Fc1aTmu5RuDquPqixUBWQOELel5bz6w32fY%2BJwD%2Fe7JlXaL7bttiLMfIXjSitRRLgnv8wRckhptgxFkIVwMWrZoG%2BRUF2%2Bb9H7cQjDUgBvd5p247fNrnjvL2I4yT1W9zasTJPBWQ6fIQxM2x6tz7WzFMMZpUPkX7hjqOTquRsRdr9jEedlBosezKVCkW5k52bCjQH20NanDXH0XnKYw2MckGGxRXKSD%2BdLPSBngEYQfh%2BxqBtyJCCK%2FLrfryFhhm9nbB%2BReYOZpAeytbPy2DseWptsFsd5kyJLCVr0fP8PQ%2BjonbxpSfIG%2FPBvEDLdlSBM6iM3fZIyI%2BZ%2BbTZEue0u2gqZBtML5iDfpLmU08Exv1T1snNb1YVyQntYGGjihDRrjeCzEZY1SAnwFIrkmsMb1vjl%2B9prRF8m3mHcnmmcIFpR5zH6Gt5MKu9wskGOqUBpykcaymo5tcJRaHgAlW2hIjEoPRajDv8UTmN2pI9SSMI8xEDSJuZJMvhJWNFttODFECnE99xogAvv0Lxex%2Brqf8FWzqQ3900j9xIBbJT%2BS%2Bi4ecrn39ydV7Sn6D%2BZEfLY4nPOH1qRENhiUecO0JgQtHY8ukdmZIkmO0xKIJ3xw6febRyL03cMCvYYb9og8MhqX%2FM60lmc41POIOKldHArIjRAU%2Fh&X-Amz-Signature=6c610d591ddf0f4e453a69090b87ca5328afefd7cc8edbaeaf71d78b2fd58be1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

