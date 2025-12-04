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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2UDNBL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD9lXbrSwvi8iTCZSJqvSye4HMGYmoL41IkehzjUZrfVAIgVo00y7FG3IxaF4cCyHQhzts8RuV%2BKR35T%2BnBCQF9y8Iq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOReJdlpqobXvdGLVCrcAxhhZ%2F7VSBDdRi%2BiJCE6SNBjFYPisn%2Blw4Ut78RdaNF0%2BgP9rtXr2xEssE%2F5oZ1b6SEpD4YCvj%2F%2BzqjS2mUx%2F7SaW%2B1oBHg9bPUn5iJhS%2F3%2FSI9zYumcBTkwh87lP%2FWXxwc8T2MMVuujHEMfTcAzv%2BEvbtB0nahRQJNcco2So9DxyIuk%2Fyzb5Oye6vGgQPDB%2B7rjeA8yFgZiKUeL8VMmefnpFEJkq4D%2BCLwepx7Ywp7NlL2rdzOSgy9r2lgWGLgEF2hiGHaQeVc9YANX4BwEAzwabLcs07v9a9Ej0bkeFyRmZkEv1AFxPuVkNz64yduUgMNFiHBWm9%2BCDSXBmG5OQ%2B7ae4N2UCnjrlmObUmle3hywHIK4UgYDayI3WIgHr5J1MO6PuLiIy1eONtN6lCd1Q76zAPcREPu1h7XCded0pz3mMV%2BBIPIs3wn2Ee0mB2ypDq4MZi%2F5He2Pmg41XA7wzkusTfZ3VY8iMN%2BiMWk1Pn3%2BgNjuRDk2h08KtdiB1xrO7A%2BmgaVQy%2B3B62JHdIGOjSuuPW3UydzFuNgFsup6lU8HlGAd8eYXvpEoYjBGy%2FL2gKr9mZRpcH6ZNN4bijN1gjSsnD1SaRchmZKw3j2upc0nvQqM8Yco%2Fq0qYx3MOCVw8kGOqUBXXKA%2BOOQudw9Jjb30hE3z1ERIdKiw4uNjYyfVh0ef%2F6RekkG3iE3bLVoa5QG3maMX%2FFI3ktjsKkE8GeqGoo5nOFUDZwBQv3nLmjHfdSfu007qG0muvGdZZPNa0TDmXrY53wHQ1j4vI0314kwF0G8PNjdNxVj5iIQcF09afN9Bqnk9%2BbL61JbtHWTldyNpr4peINCY8X6iMv355%2FS5LLvqC%2BlpDZt&X-Amz-Signature=88e94f97de219c99b406acd61456da90ce0e63608bfa20194ddbeebe4cb05a5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

