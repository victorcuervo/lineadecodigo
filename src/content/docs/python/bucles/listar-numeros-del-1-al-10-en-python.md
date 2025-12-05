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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBYPBCX5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T215529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHjI4Pr%2F3O%2FNtULjAF%2FSQWbZ%2FTC7l9cj0QtiuZGOEvGyAiBpbYY3Ppx%2Fu46gl%2FoWYI4NwxNWW1GiFy3H9pOWExBGdCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMwLXd%2BgPCacNIOZw%2FKtwDKj3fiOlI%2F%2Bod4vxTt6PHvo202x1CGYBt8cMbTQiTa0ASffUW18sgRAxq%2BMNQTsxi7fRuDYL5HxCfn27ABme8WBoiZKP4dCZEeFOT1fQvG6f6hD4aSEZSIbG9FR%2BKOXLxbq6hrLGY9eQrjfMnYCDVwYH0Vl69ZMyceqQ%2BilZGzZ%2FGdmU5XMbn5D4DOhb9I9J5XFCD%2B0fD1%2BnEo%2F4DbdZMWYZsNEjIo%2F4v6qUhJa1LhuYKfqFR6yfrjQLUBM8dIta9Dl7nPFn2nXgw%2BsYR50Ilo46yVn57%2FXaFmT3Dsbmg6N4Ch7513cOY0a%2BaB0SK1GUOfH3rcX0XzHcqhtx%2BvE%2Bp61JMLpSAcdWPjvLf%2B44iWNSP6E4dDYbDkGuggDRr%2FWIL0oMMGhZkdKxwLNfRhDKgjPHvYcN%2FCTDXZl3j%2BsW6SpVh9nQAcyxrwzCqXuayINhIFVW6vvRiOQw%2BhVPX1CiWC6tLcOWXfZmsfOoadmCUddE9A7bJR3YkMw7g39COG2%2Fz5h49kqz4wlO7EQx30%2FEvvHlJtsKAgVRb93qIgDCcvwadLqL6nehiTq82rJoLCK17KWkN0EvtVSg2obxi1UrOY7EALky6MlSiBVotyrlrGdnk%2F2aQfAhZYatVpEgwkqHNyQY6pgFqrlmQnnQP1NX6QDk%2FTkIdFr%2BpfrZIS66fpA4PnzwLHnsPGmTzRDLCALJXot5MRhcy68dr2cy4rMs%2F4G%2Fv4kIZN956GUW%2BbuCFu3oKiTkoQ%2BukqrPelXK%2FHLJAOlhuBLNVV6CKENy0%2FDqKZQkS2k1ZAol1mEOClE7u8%2FbBYzq9I%2F2OdU6zJ6mvcwGJNPBFZX6TUipSi7TPSScnLuv8edrMjW52am%2Fk&X-Amz-Signature=bfa8e386745a87ee143cb2876b1f9ffb2bb3afbf0f2900b940dbf1dc77c64728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

