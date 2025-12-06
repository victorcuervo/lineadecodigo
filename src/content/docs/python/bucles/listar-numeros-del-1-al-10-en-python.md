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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KLNI72D%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T171712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQP1FEUPvbfH2lf9rbhyLfKMmZ7WlGXSEc6eLhJhgHbQIgB3MEgzAuQbsonL4PCD%2F%2F%2FbnvO4JIRmioNxjU1MWyJooq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLqeK%2Fyjy%2FBY%2F6dhdCrcA5NKr3UC42fkFkV70IqhFmJmhrQu4FaiBxwtu7LE1QqXSRFTHSs7j8K0K3vtVfFrJOF8KDsIHAOBvkxl7NrkLCODnNJlX%2Fn5E7gbWhRJkR9eJr8qqtHDmra3KzUb%2BPzyU9X%2BKzM0s9mngZ%2FDyGOcEo%2ByRyrCyZjPrPmJgpqtUyOP84y%2Fc1kS4036vOUNFuiGDEBkRqiAeXRyAUVhwL6k1bD67t0C%2BYswzjETplZ%2Frbq6c1RbZnDd%2FM%2BWOhDwCA2KtM3r%2BAM3yynnFLsIOqOua7m1R9JZwNPr%2BESbJJdRSYPN4Rc6AItti6lEmmFuWVorZyLeW0yoYFcWCZCKdhQUlymU4b8NgRPQzYqndFSJ8umOAKzd6UQKMTu%2F6Dwoj6j%2Fk4dWmk4L7%2FTMjcw51b2kRaxRjMVXV0E%2FeHyWTZqHy%2Bq595IycDprKItdKcsaapS0jCdIbx2E8RgIFHJRtbNWLCxKDXe1ugGoypChveGW28E%2BtIOnI8TdqhJ%2BdfV3YTm6%2BVKdaDeXaNK9DbIhh3U5P6f4yv6iKux3uvi3H7UAcV0CI4bAdHsJPI%2FsYCN3G2VnE%2FcZSPpMJe3qzK5rMwlDDUPPEmLbY0j5JaXZS6%2B%2FYHgEz%2FpOdlWqrU4nynyqMMOm0MkGOqUBBkE2oGVMKC6x6LmgQ4TtzjvzbdS%2B4PtSuwCT64s7JExPq8SibuBrCaU6y9jTu1nV099fuMaYD6H9a2%2BfQ6TmnxI31pgKheS%2F%2FmH%2BEQ%2FVv0ZFVaYGyZsicb9bDWq50sUzDPnR%2Ba7azDiC%2FzQAlAE%2FUpjNq%2FXv1NEFP0hjIkOyePXrVXNFLF27%2B%2B7uGS305mGouJWR5ri0ICoYMFNIMcFRt%2BUhFKHR&X-Amz-Signature=d054c7401aff0c3a82f6780ca783400a564e0cab9996fb7818be203f58bcb336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

