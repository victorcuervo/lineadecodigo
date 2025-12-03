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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEW644UR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIF8O3zNz3RoJGXEwem6efwYN7xxN9dzwspHt%2FXRSY5DnAiBon8j4d6EsMlqevMmh5AuqzQ%2F1ldgKUWTJhhCAqcjW5ir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMDBV1RPi2q2KqsqyuKtwD4KGwmE6zvWwGa64y2LLXMi%2Be7Lz7NnoedUanhKS4UTm5rrsZ9UBZpefAWJ7fkn91pKsMYxZlTkk6N%2Fbi41avevqqbCYJlkQumderWqQE%2FDKplagaf%2FtGeSoVh1%2FiIvRjxcdbF4RKArr4RKr1ok6WmxAr%2Bk3h4NzAs947uL1w80OfYzN%2FAryB12bpOlQTUkvpCcyWUq11nwtZOB7wHa7jt9Y%2Fhir7X5jwfekKDrCjw9wCO7Py51Iv3Wv0%2B5uWjiBfh9cm4doco5pauyt30Gv%2FPQpE34q%2FAGI5AHtcEDfwPMGTSNs5pG9F59rIFuS16N0MGQ6bGdgvoqUbtSQPZAMt6RRwMl5lty%2Bkx38r3aYziZKd1bhaY9Rj%2BM%2BfvVKuiAZ0ZVHQj925YkJNGvtAW1ao5BCp9NRpfdPYcs%2FGSqh3f87WoiTv5n5pK9Hh6xO60DIP9LTXIsDC397g%2BLddIr1ZVZX3JCi7U3%2F1srprReVXBJtvvv69YCj5Ks4i6BVgPGLDdJGSQxT07cFnjc6fekPvn3Jx9NUtLjTQ2Pp6N0SKkmRydPyEzZoujWrUv%2BHMa2f7gttLEdQdjXpe9D2zkPJfcEHl3JGDV9G4t2nLU3pU1bt8DbhlktUmgyO6tqQwwr3CyQY6pgExTFnvFcxhAG3w0yKdux30lSiI%2Fqh%2F1aAAeoiavqG8xodQcLFFA%2FQg6sE0y9N25hjYh3dMAZ3Hfj8EzPezPRbkExSGv2zhe6eSFTPitHqjzGraYOa8z4%2FMVGqpriF9eC0ulequ0qRJsgmID9N4gjEnG8F10KJm5NIBK7AiQdIsaOzBjd%2BiT5PkEesYIONYA1Cuk47qoR6MKkVqdY7oB4PZXfs5ifus&X-Amz-Signature=999a32ebeed7b2a3e7ec4c3ccfa26b2614f282513fc4d546d30ed6830afd98c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

