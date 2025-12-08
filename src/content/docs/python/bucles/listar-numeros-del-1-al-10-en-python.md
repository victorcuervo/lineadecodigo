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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2YRAIDR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T194507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi%2FWU%2BONmFRh24mwO5GdzO7PnSeQKCv2VMsIAoyZRFMAIhAJFgpAKLFeDL%2BK4lWKQza7rJb5u33zgG8%2BucYUgy81PWKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo741%2BUL0os2orGF4q3ANQJCtccMNncF0HsecrbojMoIK0kUaX3NI6dgieaKjVaeaCbIjllIiU8bTntd8D5zQvGnIXqBXq1pTmYJQhtXZtTh2VFPQH%2F1b%2B9kFSkWGk6Gsi7yOjdrU3xpwDJD5mNetoXJdlkbyFmm%2BeH5L8SFftazZ9ymAo8jS2Hgc%2BtVelV6qDAuB44DKk0EZzPsHnyjus8hpj7446rF16gdwSX6NPYPO6%2Fs7UOoKJwCxlZ%2Fr4aC4zGeZC6Gc9CexO0hNXBin17Id8tZ3kMZw3f3ZBk3saeTVOGXLw0Cn%2FoXRwzU7TtINieloZi%2FFPulwMo9ixH2tLwK7zM9f7nw7%2B2SP7VYSjH%2F61cQI%2FArhyFIvCv3%2FYWJlbRTXJNPcn%2B7ad%2BGWVsZ8J5Ltm3Yvq3iGicNIU%2B0t%2BV%2FlcBryfNFER2yaeUZKXT92tBNVCrkBk2KZslgzzKgV6WfjSA8nLMXTgui%2B7Q%2FTHOfTRRjOr44yq0%2FTToJshlngQZ%2FvYuAzr5sOdqMGsTkJHtYyCR5Wz7A7nMaiX8jsw%2ByeTbY7wGWQT8j4KGYYgg3IE9gOTYekk7i9rHqkbD6FwJwl8rQNdPzpK2LLAvxc1N9zU9hdDxr34dff%2BkTYH8m6inKIIHsxRlmpG%2BzDWs9zJBjqkAf3Ag4PI2IYampAOoJwvT8aTiBwNcVXMuLvJA2nUZlv86NlrZl9kPeLgpuUcME1I9I9rU9%2Bh6gMiy3Y%2BJG22XGpAcBQqUmlZJVWQ8v4DRrDQRlImkyd1IP1o2h9H3EpTJ%2FspWUECv3Ma58MuTjHV4%2BeQRPk6dlrMKrT1F9Hm2q2Q5kU90VgSrdOSRo1nnr45EskuGoGx1UwLGoCvM2AOJBz0VbK%2B&X-Amz-Signature=89d3cf0e6de17252519d6c7a2fb415a869446f988a9ca7dc857138bc6f4ad6c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

