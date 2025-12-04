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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L42I2K3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIAOK7khJOsZXN1Xx94KNfPHtckF2hl%2BY%2FNFvkgNiOU%2BlAiBO8WZigcZN2pAjn9a9KKUQmjlgRnXlfED%2FTX26eL2yLir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMhe%2BIfaBFU0c3IG6%2BKtwDtFPbnTt8f8WR%2F4jAM5T69BRLbSJ43tB%2B8pint13yf6OyRZdBflbrXT%2FOvno%2FQQjldPwh7UDAqFpo%2BR7xJ%2BLeqw6Kw%2BkGICM4RUjx7XzKdKwpCu2EPzdjcBDPJbtry7RUDGRUEo98CvG0WImpSsojU0870zWDhSWcjglkcLf6NUfzz%2FIh%2Fe9KOYZdICitYXsgeEWsLqD4L3q0FKJcTB95o2gtysBAUKN88xLBHaGs8eSTYzLzFSWCEx8NlQo7BmC9FsukIwR8R%2B%2F8%2Fj%2BiRqPBdswUqgjVb1J9YRctvtufySjruv6Ci1ix37YIOjw96Tpfc7qJSJWqZkiYIHBjrviJWBgsYiwc69HIvKe%2Bz1rMXiMiV%2FlK%2BjE4b06lmkt%2BJ%2BaHQ%2FqyVa7MOWDqMzgOgd5da5VLpZfYb12KARrOBTpPR%2BKmXOR%2B1W7iyZ6TIAM%2FB%2BXBt%2FTy4OLDrzzkwlNpUgsmXlHd5v3X4nHKJ0hh29wZui9zs%2BvdWPAkVp26e4%2BTF0dCXjLY%2FTcdXrzljhkXJ96ERRhImICjf5s63OyGCqgKit7sc7MGRQquYV8%2BxGijHB2ESSQo4Pcx%2BPAh6HthByfsorkGZ32U8vm53AF%2F3vQNIOz26mJI9jXSmc6%2Bk5EwtYbFyQY6pgHEPLrm3wKk09h8%2BQzxTsKPjDdwwu88Dww6cF%2Bk8%2F3Kxx2bzqMULI5nWupGorNiJ%2Fx%2Fd03tScjGu2iqa9E54W6x3sN4Up2uhDAHB%2B8EI6vwmddb%2FwU5OglhuuOBvFueBav0%2FAl9so2IYlFhG7IG1vb%2BvcyrIit5f6jJ6b5Q%2B%2FGVrK1actyfjlD7dVv619%2F8Z10dnheAuQBqBRXuqni%2BhniolUHZwJXT&X-Amz-Signature=62a806a69c4690f8ccd1d8e8818193226c1d855f884fc92db63b0ca282c1dfdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

