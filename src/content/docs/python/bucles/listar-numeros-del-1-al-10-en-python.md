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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTHX6RNB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIGCEiLQsOZqLFAcO2wKWsRdUHzRZiH0oq5w%2Fc5pwiaz%2FAiEAxa1FZFLcYIMip13to4kSj6pp6wwyfXNb1rYJl2gi6FMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFtNC9FhZz7u%2FOdE3CrcA1RnGZPt7WUT7tlkm4y4YRFJV6SVxcpshE8JTseEkOHDXf4t1GHoRXl2%2BVQNcXuK8LDa%2Bq%2F2Z7f7ti4fRJ9Ueyvn5WLX18gNLgxj8KFhastCTnOPK0a2PbX9Iy6O42zLE8BjwkNuC1h3Ax0Iyd132vK5Dy%2B%2B71jYamPR%2BPlwo8CEc8QLaJ8IQ5w5Sv5fmsUixVABPRaN3EYc9URs%2F1yLs%2BMnqq72wdIvSuZ8BSX3u4%2BbwavI5g3JfFFqrzN2S%2BVO71CNeWCVYzcGiK5k19N7H9i0aGQyCXlqW%2B2qdys3Zsg0fx%2BY5P0liHgRJZEVyb9qtFOeUpkwsK0pt3xAxGJtXYVX1oW5Z6yk2HynPm1uj8gv34k179JvpDOdSwqCCf9wUTpxjGR2g%2BCEoTboDIFk91IZy8ln%2BM1mo3kZ%2BEb%2B8nsqZBIHKPBdTBEPrfe8dnSb0nUh5Ai%2B955x4Z5CnXQz0xfaawvxdE7UQ2%2FTEv3d0yK65nWrnzFoyB7Ep%2F1l%2FyZgbJITDzo6aRqAhUEEvQTY7EDbrOpdY1Z3lUIyDd55uhLo%2BwtyfuOtTrDhNkALrC4AvfgTvyYAXkZocsfplHJ%2Bsas9vx%2FpMEtdXXXQqvpegwowUcnvmI4sg0MRDl1iMIroxMkGOqUBK3CqWZeV9NCdGtLXAV1XeRQwcUtjU7scVAknIh3AmzB6xuid696%2B8V0Xtc7GUq8%2BhvIW4gQM68ngRbOFqflu8TF0p15%2FK4QLkbY807KijN%2FvugQnBjftOCDB6zMO9Xx%2B23dzqDw6SLKvRH7QCP%2Fsm94DOc%2Fkms2PMSDp0qCvNOhCr%2Bfqa98x88Tk21iGf36AtWCSmC6WJTQEOoIYDclj2gwUemHs&X-Amz-Signature=88a310df5f63862a8fb29b8150264d452e43c62f15644ff6439757d968bab416&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

