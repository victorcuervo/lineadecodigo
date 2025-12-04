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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672YEPCBQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEih3BVO%2FL85x5YLPXtqiH%2BgmWclRC0soUJ4m63hCehYAiEA%2F2HoUKMm2ySKb4Kpq0v4IuGOdPbFoQJ51dwioqNC77wq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDKzIQXArgUtHnUVO1CrcA522Y6UbhcXLVN%2F%2FEsZIjBp9jbcIlxd2zTNY5XmptogV4SgU23Z121PPKfPHQbzIRroKR3XoFTdC0fGHEPsB7dDkriuVcJrnijNi6OumqOJUhUUmbsFvUE8A%2BjNe0dNPoptLEJLjSSCGb%2FbAXWBXTe%2Fm%2B8j0QxwatdnsJn0vRiz9tEzst5Jhvt5SPKswvk61p7dEcKDe8qxSFJ4pbJHMxGRwWJpfn6Y3IAhdlg9V08hLWq0CIYmG89D%2FCWHGQqfF21SV1s7rWXjOObwavRllWXSp4T6MDzT%2BY%2Bcz5WoRbZY2vfDEXrZtG2HYRK5%2FL9nao%2FuK%2FzcUirwz8ZML5FOOKywpIjU8JFT%2FE%2BRmjVQ0zdAnEmyxI14FsYo2dLZooJknYvy2TnKMh%2BPl6WBptahs%2FtZP7XET%2BHGmlgC7fAq2lL32%2FNcwp9sERH1GOime4RKAN8H59vv1d21lr%2Fqb5gVw59Ci7NmgQCdj4hPjYcQII%2FDJApXA3uqbYfCCCf%2F5eloHiR3LQthg2kAbKv%2FuwLP%2Bg%2F9p65GejQFn%2BJotwY8xmyp0cR54IESS7YQWfw1DPws2vTE7CZ9E9lo3uwWIeLGVNBPmpV0OhEz7Nj%2BPQuaJxtzAuhuD0nUEeY%2F1tkOvMKCMyMkGOqUBKay0rgCnaaRVWB%2B4Ih8ImtyQAr%2BJ%2BYbnidX8OGv4k9QxzUqZ8EYU1FwB3Xv%2BmgpphrMSrMCi%2Ff%2FJy2PYC7OrYrE1rq%2FiyT2nD268pxsOsJZwaZ74VuOKHqhJHI91jhqPOzuL6NDRCClakl8TSCNU6cy0peEBs3G9fyhFPKjWwqERqnmRe4tEzEVWTW2huI356UwRXWLHgeKf7LDgVaBKVDqI70sg&X-Amz-Signature=cc21e5d9cce60056edd434b5deb719d5eb181094b7d6fc7a106a9203228c9f6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

