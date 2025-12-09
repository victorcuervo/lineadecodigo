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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EAFZ3V5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMydEWjm7FYjmw%2BAp%2B1v7%2F3DHizN1THECvbBcqvAOxSgIhANBolZA9094Uf8Z7AWUoNbFp51Va3cTMR3dwC9%2B%2B6h3XKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIMcLHj8zauw93qI8q3APsvQV8NokRz2dWuteFOcTpauRnmxgL6HkcS8EGjn1By%2FYCKlDLkukNJmJkdpjOEMv7ozyUljv7EA4KfEDfDYXlIX5JYbpbTjwGTAAvXP9O3YlocbDzptriMSl0ll7XS2V2wcsZTc6j%2FtiptWZu6wBrXEHbV%2BMzkj5ax7ZSCWVBp2j9gy0740NbR%2Fohj2wZPy9%2Fi5YoqsdUSpTWlVMWNwOJjxYyraL%2F5AgkQebV4hEF9mVFxBqB%2B7oTBinh5mx6Z6qi8DqRhEp6A52tNLGxqR7KQVliLUeNI2K0vPy2SKn2lo2%2F2I8YUl4mLjtl7BUtnk3du%2FvD%2B0mVZA7%2FIxIO%2B9Qt0BpbTysqCtH7ocodAbArxki0r6eBCgkmZZjjRF6BJiD4tDwf5TlVCuGoeQ%2BG2vvekPLoGqzumRuevug5YCamYA6cUvc%2F3Mzb%2BQW%2B7rZAW%2BQfSN01VtZiXH%2F5rGYebp4Sq%2Bs%2BVgdUBa3huSpqsOXWSeVtzQgb0UIGuQiwWtypT%2Bf7McN5GljQnfHZrscDp4RVbuArOCHA7OnLvUbHVvkZZ5o78wp83De0IMQALBNIxFKkifFml%2BkpIzg92yN9QVc%2FLk7K%2F0tugAhiSFSWT%2FilsiUtQ7%2BSTGDYoXQmqzDH6d3JBjqkAcl7VrzENEO%2F7ugLat2UINSRiSeKyYt8QzwivkK%2FMdVD1YgxxInYOQOk8gmMEgK1hVpaliKeHq%2B2pF2GqL9fbvbj%2Fm8qRIz3gfaXiladJPiZ7KXJu%2FZ0jko4bzI2%2Bgyx2cyqfFJONEVn1PzCVh2NzuVkh%2BUevjdwlxNtTJxy5NAmyzcFRZZfdbRDA1N8kzeyeoCtm9Z%2BKpCz3JEtUtRCiieCrpQH&X-Amz-Signature=852c31bbee179874aab2410c4ee254d748c69dd69427187af6ebd8eaf7dfaefa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

