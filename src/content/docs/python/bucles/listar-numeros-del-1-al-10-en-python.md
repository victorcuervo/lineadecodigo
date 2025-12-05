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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJ5M3U5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDilQ6vUmREFRjovQef%2Fo3uxezwbgqchJJ%2BAKWDEjquAIhANR5cM8TbqdJRK2kg5Qfop7zLHpyDC4cp5xTqNwOCM5uKv8DCE8QABoMNjM3NDIzMTgzODA1IgwfpWT73OOMYB0rXq4q3APsrFizOaY0mfijkSg%2FkJI8ALknA%2FwzYAd1KONv16hc5JgSAiYNtT5khTAuICFIR57jV0zag79UJ6Zfd3CmfLX2yKd7dB%2FjhWhWC5pisqUSRW45RdzlXv1tn8iWMRfG55d9HKlsDWC3eA8hXMDdZG3DWLnfhQJmOwkLqClIkHHF8S3coNXu6b0N7%2FIDa1S93m9uYFRbRapVSnUeb3S9IwdumXjpYhrTPwUfH0%2Bpo%2F1xa5X9DDrQTBKepxYO4jRD0%2B8jxDd%2BZryvD3w1Wlww3y5mnKr99VNPEnbe16JWNz63Z4iBmiwCo2%2F3UJIP1kLRTHJrKpPAcZZHr9or%2FmixqbyArM%2FlbiGzXVm5o1vQ8VsI%2FWi%2F3skUdhbK9%2BA5ZkiQLcDH6XCvOPstEP0TwVdZRLWmH34ZwnodsMjTIv0%2B4KeZ04p2OlAY6eX2faxf8TgfO1ou%2BN%2FiF52mlpl7bhyUKlxws%2F2sHETZHmwimIkHShASa%2Btk%2B5b86uQ%2B2QrFmf0LwRXGA0x%2BK%2FfdkbthS97hQbO%2BLu1Ws83uE6uAMgutB0GQ3duIDr%2Bn5NlRZuc9%2BWdsh3mjFIEWpynmCMj53nTO%2B43TNzgJzxiCpfrAGM4e%2FAXHhgoqwb%2BMi1iFG%2BhhlDCMjMjJBjqkAQyGF3wmKr%2BPJEVh8uRXf4NNN3my22H%2BB%2Bxw8jww6NLfmMM3ZCE%2FcXsQKlqsDEc9qyntgsfQJAJQzILvwx0ApWBp1yDrGlAxT76pqvAscTgRBqbS2dE6ptfBOwigywpfpIGvQEe0I2JQkEzMO7ngid9sYoPkEwUgi93cuZndKBOntDuzV2wf1ZJ3i7kiNqp6enLDfbIp5QNQ%2FGcKOy5Usu7kIft3&X-Amz-Signature=e517f6f442b222ff55f2ff506ad188ac8dd96b65e330935513fb1efc7f5a3c37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

