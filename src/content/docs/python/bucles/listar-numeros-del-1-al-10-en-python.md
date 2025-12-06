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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NDKDTNC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T110634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvZbe8XOsFQWPHzFpD0AnJp%2BXojpXESCIPOIFHPHECrAiEA6LDGOjWLAjzqUYmieS8jJ4ubs5y8HciIDuffGuARiLcq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDLf4haPVm%2B3q6n%2FFOircA3ynz5iN1FzFjAGmyX70ldNRVIPf5fe78C1gcQNjI1PgwzuXcNQT6ZTiFr2xNpadADoKHwkYbltM5NQC14GuzWf%2BDPuShrbLb0APZfoKzoZLrvmZoamVP7c%2BClrihMFif32eRULEtsOWpbcwDZdqmvEKrZucM%2BnXvu5C6DIkR0Uf0P9ZWrxiR6UmyS5mbNItAEpeZlxd2GUM9Zw2INEih9l2%2B7pWtddY9nOl26r1ehEl94jOhCjvrMpNvirP2qse7QX94m12Mz3tJ3%2BsAD9%2B5dat%2FhKzjvemImx5qUh3m%2FnxXOvtln1Sys7A04IEDTkdzWG81O08Gi7YNL%2B%2Fa0dNQA%2BIXhq%2BJVoElxvWnhTGr8BLijJtu9iLtkZ1O9PEgZggjKRt%2BJBfM4fp4hxZaXga6Q4j4HjhdmxTmKOOIGaNpdTnPzLjZ6GPWuuMEQvrbxN%2FM1gPthHrlgD7eKUanv33MXyyUgAXeeAukXj%2F35LAOccAVlqvDycL0P7KdJhl2CDGiuW774G1rXqrtg1NPjR5Ogrj60kzm59drZrBMSeiKwPZsnJkhI9HBRtrT6UVbGLa1HlRRWvHR74c%2Fasue64xNWaUUzABiw4HBksakKPT84wAY8ZKsNfks4gxHwWbMPuJ0MkGOqUBxGm8au02W%2BSIL%2FpCq4xEtgr9KtqJj34hH9acvthcNu3RLaCrF3MtdC0pmGccTMRS2A2G35Y6TCbI6WTPec%2BzSKhKDdFsbNbOEN6xlArMoJD0I7QdhQxWQyoVqBdx99grnzMgxkdhyvpvmTUqZQaKPuAiqKa6blW9GuZl2t%2BK%2F%2F7oMHFRVUkYALIlYO3glWTDJxC4hZTInaU4LUUu2T27w1NsIaKo&X-Amz-Signature=5a34273f63f0725df707060cce9f916aaf4265bef1197ff514cf7f24286f317d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

