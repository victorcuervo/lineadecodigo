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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAOSWAE3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T091838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNKnuxP6xXj2D9nN%2BDKZzTQnd5bHvw494ldxjqhrCYgAIhAMu%2FZpB%2FThgrwwlwAFxFfOBQO%2F%2FBfLnq4yqP7Lb%2B7jrqKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BtcF5Ow1LVaNEfKUq3AMrRfxcsWgE2NIxpDFnQ4EO%2FyCKOqVldZbid7rpyV6PmJEgVnaf%2FJbMl3kTUpv0ee2Fnzr3c26JoG1mmiBAbOJu2MuZOspGFwM%2FfsFb4HMmIB6274HkopfVPHk5xjc4ywscr%2FCpzLHK8%2FqwCV9NE4ihXNCgreQg6zOW%2F2VBm4uqZ1uf6o%2BdFP9MnqDNqKJL%2BzxJieZAqIQpMm%2FFTNsUB8zl4NDN6y220UGZ%2FS1eytockjN1h3LkJfc4I5JauVDU8RY%2B9qKmpWXRE0JLHjJPtypaTL5ae9m5BDavPyA0s63TpppwdLtk2ki2S1C1l4dB%2BKI5Rxlu8z3iuw3MTdOcQO9ypt1dzFpVCoD3lC%2BqzqEUFiz1ZOXqPTv2d%2F7iP4HJH8UFy%2FFiubuty81s5r5qew4v51bFSbFqF4vt3cdOKNMpf6L2xztcRWYD7icdpMt4uS6zr0eAFwt%2Fhi3qiguCjX1BEKzeS47XmczBl7ZmMtzrocRzMf37xSU906ILU9BxC1O4VCztLWB41IhlHXbtyQ4K85OwsXyXvyOT%2Bvr0PqztcLSnnemC%2FjoMhvLd7rEdVm%2FFq%2BBJ45CzmdhtVvY%2FIsaxG95pHWaQCqh%2FF6ydRf4Js%2FC%2B13YYl3MsnJeuMDDco9TJBjqkAXD%2FpikJj%2By6buebo%2FFH%2Fh9%2BQ2sQuGTvnliEXz6LptrPpZqAE2TlKhCLHBS79B16mO0mncfouVh40jdLaoduu3tgHrGpWF9KConTf%2BdStlPwq9c7BAnr9Moj%2BgWASiMxxlBaQ%2FaUgHl6X46DM%2FyQOEBU00cH36WTYTnfRdfYwNvzM2A3%2FX%2BYoSY2JOW6%2FvJh%2BN2tufqGg5DKPmN4psEXwzqbLcgr&X-Amz-Signature=8a3bea367c6b2a7f8259acc6d92cda9f6358d88c73df6583a6729273bba8b64f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

