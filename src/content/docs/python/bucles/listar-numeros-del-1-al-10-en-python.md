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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXYGJOZ4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAutJLRNiGQE4BB2M%2FAastGV%2Fj0VpRza9LnPGHz8FEF7AiBRTt%2FRWJgJpvan7hngltuObZbNbJW0FZMNk143oDm9QSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMLC0F%2BB6MAYcn2qOfKtwD9CaSlWWG45kWpbk9gXDyki%2Fjs29j77E3l7sPaNJWCRMK9hmwy67fGxQN1aYC1%2BvrkC0nYdyqnyfsXLEaTk8tWkFML0ZpvZ3uJx%2ByT5wUgBJLDRRpVqlvxSqzB4O2LHD%2B4cjTN%2BOVbcb27SlJu8snaeuGH%2F1AZS%2Fjdg6axDqh%2FvRdQlc0h4mtlsfr5%2Bvy48NvRxRD4Lev3v16evarylb4KzsuVuWOAfn46GTWUG%2BP1oEc9favScKvy0u0JHWFo49rdgOR3CJ9H%2FoRl3awiP2siUlbnf%2FlsD2BA%2BOQ7pCGmBL8n3jQ0otvocL2BbR1HcrJrz%2FSiP9FLjQPAmvYGwt3s6iOWKl0dj%2FQtayZPdlM8ygconjztsfMa9qukq74aV%2FntQPA7LyT8WAXLwY%2FJSE%2FJGVG5yx1agRmNjXVO7B7023fm2FsBxamdfMWjIMaRmqP%2BmGVWa1DSwVyE7kYf7lDmPSgr4d2FNvf6zkPaqu4aqM16q3JOtwva2Ej%2BmJzISAaAG4RtQknwedUD0G8msnvKli%2BJnHDFLJUifHOdq7vureUB3c%2BlLVJMYGjTbMdIhio7rUbg6gCpCFpdjBPMlfsqw%2BTldMnYGICNpGlMBJkfzcJvK5qeo7Tal7EM2MwssbNyQY6pgEbgNM3lslYnrDOmkTWcu8ZY6MPA33EMdteKI27Da5lxVbx%2BIcFgXjvyEtCdg8jKVt851rqH89VzSzSZ3q042QVn6T1hC%2B5joR2ZyrRw2N5%2Bx7LNbCy66d45DACUjdRFmwx%2Fqj9ZoNt9yEBVaa6GHyLnpy8Ii69rh04K1BmEqX8QFjAWk1lsAEU72STu3z8Fcj1kdUwBZUW66b6sEQHww3yQASNex7Z&X-Amz-Signature=c175568bcb00a14764ee4297a622edc2d30378b2814c81ddcfaa9ba4c34929f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

