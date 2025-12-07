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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCFYMRWH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T061642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCisTNiTzVhr3QZpMj3%2BCpbtKsmweZXlW%2FD0RvWI6iS2AIhAOQ7OPLJdtQY62oSXyP2Tw44mWjPleMWP1qjS%2BR06xixKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6t%2FiQsK%2B0YQz%2FDmcq3AOJXnNVn3b%2BYgutz%2B0ZHK4RWqsEF7q36ywm0hUDWYEXQtrPU3WgMnflXMs%2BFIKp2deDBKmAohN7Bsvm%2FnNWgmC%2FDbiPT4XjkJkuGXQUCv0LEIKee%2F1eLvzP0gHDC%2FJCYQJpw04SUi5HYf6ZF%2BJO2XHSoGV16CLuxzw9rnAe%2Bgnrg5jVOt87EfqlPJjLTgKSyPTmBz%2F0aArQLQKNRgReci8787d80tnJ2YHRDeVljMPR27UZaClg%2Bmpg8AHuzUx34EFnAg767TqbT1ywIgxfoQ8KFwp%2FB7Nv33pIj%2BbXk7zcaICvfH6mpmS4Kw3yljKaozuwz442kCgks%2BhKcS0xmYA9TccBoYFprZI1AZ9D0M15OYPC4c0AnQNlx2p7qED1y%2BAKL5CKxjUN5fJXqbHeZvHOL75pqLnAIOWw0GDLHs9%2Bwt0hQOZI31lfQOO4jOB%2BWQcPVxujglaVjhYivbT244ezqyu8akz8LSZKUXrBDPffl9Z8uoekK23iDsayaDE5%2BWIG8lOlhYsPoyBHmda06U%2FRB%2B4zfzxCP%2FuWkHT3FVZIUVZPFyWy%2FN%2BHfrDySC0JcgLwXJJDSRpXrB49rkXbkoN988W9h6A%2BOOTfFqPkv8faOcaS0Eaft%2Fha%2F3T4ujCrndTJBjqkAbkbdp%2FHOVN73jnUbqLX4JkMcs4CWb7Pl6yZLbqecBQFs1TZO9bSVTFYQWKxnUUbhItlmYmNiXqWn2dFDkMoHgPWHAy6QE7Tm0Mq4Q0zCOTRD61Z7Z%2BKFQl%2Bpp8RaCH7nFUTEgAhJS5rtFrwWiz2H%2FOjHg%2B2e%2BeJR2Yu8UoAWVbUsrduJ5L2VMFPVWBO7oQkKQ6q3oJ77Pf7tBlV8PZuHPpKRb07&X-Amz-Signature=923128f1373296a28e7d128d191adc996b7afc30688ddb26521146342457bde5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

