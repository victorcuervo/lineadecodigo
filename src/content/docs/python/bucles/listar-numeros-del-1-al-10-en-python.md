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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVM6DY72%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T064106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzC7x5HxaZZHFS5z83kBDGC7Sk6noK5zaShKYglnFzkgIgc58Yr3tLy5nO3%2BUT8j6t4%2FsU1eD06Zyg9TZJsiJ34J0qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2F7hW9%2B%2BNNHcUq86ircAxZWYtPZwli6wuYunil2%2B6KUU09DbSxjnnc9WzQP3Ueh59YZ5Kr%2Bacp0h%2FwBp9dcyG9gIX9PWT7MYL3po8sgA1KF5yBVdhkHXTcWq218DvzQBsIhqb5fhPNvR14fNu%2F5ofW4HlBnaMtjNr6lq97zPgOm%2BlaqgxTE%2F4YiSr0nZ6c%2B5ENycto9hVhiobfDg9K4qJSDrK59oqvE8hjKyXWsvxlOpEeX%2B5IutCxbwo1EntnasZPkRaeeWQSEJBYk9qJnPR6Fym3sQxHRorJ4dv2u4idz1UGAa19Jvi8zQOg7ghhdq9l1gndY2toW2guIN4syxnWIhd2PQTCNum7R5JmEZoiNosI%2FwP84HN%2FLSGwqS9xqILW097GY6KOmL%2F5J3%2FlEarfMKoGrygYIWIp%2FERy2GD9YbUWjy%2FZ3hNeO71uDiSu9p%2FUxjexasyp4AOB%2Bunfz614gxMv%2Boqk1eQFqWCO07NZjE1xRresMg6Bprwcrqw07tlbAQswMSmu564QLIGRWT0NTuQ6nukJMKSQsQdymUkbT5wesKxrMklju0XQPsGdWfmN21wYtP1m%2FIFstTJZ792del0FST40rtSIoRzBmZBzDLKUxdU1cz4Mnsvz88iDKqgHmxhunscBJNGONMOif1MkGOqUBTHzSe25Igqv%2BLJGdApYqunjSZmRgHM88GIGXHZYn8riGU4fSrTQ2F5o0wDEYyCZZICOEL8yubvwIY5nzRzCBO03zE38BbP9cd2l7G21ZyuJ5XGcn3QbzXxujHNmb51yFwc95taoX%2F8bwX1zl%2BMwQLN%2FgAraudYv2dzzWML9XmkYTXUbC0I03rMJkVmYGIqtDknjssN1oTpeM5g0FpvgSg9iSY%2BVb&X-Amz-Signature=0a56e8e23f50112b0be98d058a221162aae4aeddd7f7e81f1e5ca19fe0e77946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

