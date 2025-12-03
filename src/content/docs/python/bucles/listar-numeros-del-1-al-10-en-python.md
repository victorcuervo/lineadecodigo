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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVP6COMF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCFP%2FGcCInLHetZBQ%2FrEb3w%2BLjEFJO9fL%2Bm%2BaYm1gpqsAIhANmH%2BQ1DjIz1dwySWPny%2FoAVGk5G61XIffZh5eL25bbYKv8DCDgQABoMNjM3NDIzMTgzODA1IgwywPvYC5SUQFdsNNkq3AOoXT6cVy5ZOIXEsEOd9gZ15PvR2PbwEqf3No8Ios95ICyC3RatDMbiWGRQbb7RiaRFmHC1GOOU9DRiGEwL6GGJKiMT0UD8Jy63C8CqtWTZtDVOgi9n%2FyOI0CiRgDorL9iBMUnbgcoz4tLoOxqMUnsWCsFgUkU5frpMku2AFLO88qPJnFZBtDfJXauvVdV3Nzw8gtpcK043a79WMogU230vQYb8a%2B4LFIytYytfP0P4idS103AbPHxUtFXkOPqKxvo0mbE7xYXWl79EslA8Ob%2BDG0Vn1DDdzmQuVa%2FFwWEjH3a1iDVGr0zi4YJkzpvefNVu30ZYwi1GJawBekv8%2BBExAvBk0tZsyJHmvLFoCm3BSrRegFDT5tkcLo0hK1n6rFE1FDKtdSbW6%2F5FGvZFHuFXd3zseNRaE90z9O0uGM%2FLE8m9T07%2BNVAHeFI%2B%2B99Jy6F9B3hxOKq18LGUgerTzZFLsHv88WMhcunZ50on4qzk9w1cZhjIGrG%2B1hHj5fRnscVKqYyYTwU1PYnt1YP9un41yQFHqEvOLxs1QEtGVZaUSlMN%2B2pOS%2BxfYeMNe%2FvS1%2Bil9FG4h%2FejvO7pTcAHVri2J6de0WAAhQ46nhD7oWWLoDj6tC1wRrKBMVy1SDDj98LJBjqkAS7MiwG7bSkuPWKD84Merdtf2nnqpsoIptC%2F3ZoBVLODmT8guxU76NjHBeAIs8ALqQzw%2BZJtNEyJUQwTAtElmw%2Bo8T4gfuQtCLzTPtTXICjp%2FPR1gkIafYoos2CMtJXpTFMYzhX60ae7G1ODMnnosL16BroRplQYqG9yGoVUmB6NfQLeKVqFOMLZX7TFwLaiP9kiWh7hsYXfK89zbAih3QTrJ9cn&X-Amz-Signature=19039cb7a42f2ad1ceb0d557e877d40a334e1784536e9d4086c7016673d3c24d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

