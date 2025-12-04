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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZO4MK77%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIHyR0tcIgbqpNAK0v%2F4nj%2BEWHRiOaQojNWGlpvktP7NFAiA77a0elqXANgABWC1aAX8jS8%2Bb41dQcyP0zGugtqMiGir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMKl%2BUnf%2B%2FD5qEm8QqKtwDsIct1Cb4fsk1v%2FSYZuSwbAAs0p4yh2TiQ5W%2FoSREvtNpUAdxtvb%2FMI%2FX8rip7TQadhIRA%2F3gfX2gJ%2FjQnxyAlnp1BpOelt9d3eMleEpkdHMa%2Fj9sXIFsvoN9tWjIgyTwXRsTP9BObAhlY4ZuBPAaE4i630Pb8WyQQgrcWpPg%2FEp1nDwQwKfKiqPh5cWPG1n8y4Bo%2BdduFA2V6xkYXDELtnt3cBigo2T124nmb1eowbUOv%2FdhpjEOmEqiZq2mJ5yJUInc5A7%2FsjeV%2BVSqtWFvCgdAcjHua0KllbFfVzK%2FWEv8GRLbmt0mOvRUkBXLHB4JvAt%2F%2FGgILFA3Fp5%2FGfvOn9lWmAjxkCsjC2cNivKSNmcfNWMtRTr3Ls%2F99cu3%2B3R1pqVYSmrG8GEJefiauY2ZqhL1l2Sefv1wRXeG4I3X1L1HVKSGoToLe2Xn6b1okzQtgXIMvxKY%2Fend81OXsNH%2BhGDZaqCvmks81n2%2BXFX%2FAxeaaIZ1wBTCM4cE1qMVT9v0T7nLiYGsGwf9jzaEh69YHvOgrROjVysjxwQ7w3ovgvkby%2FKjrECIHuzMYpEXP7xzRDm%2FrgCnthb9w8VscY%2BDyvmqEGNCksg%2F7tHCP79yjiLhVK7UWUmM0%2BM4%2FHYwmoXFyQY6pgE%2F9HswmFxeBri6owjIlGWIKKqJZm0q6g2Ho%2BGGnyuka%2Bn%2Fe%2FgPYzUvWy5MvJp%2BCsec0QWeMjspWkpJHZgHvsM0xAWclPAnAq4QcwWxkTa0upF7VJbQFC3CuAzFT0GTNVB2%2B3X1yXoR1fjoo%2BMAYcZ9Yzh1HwaIBkrBptyQRtEGmNQOd0Ikpe79DzBcUtbLue92KPvWb%2FHCZ3Tn5Xy5JtzT6kbVdINZ&X-Amz-Signature=9a622650e87297ec75f23ff5eb9b8379b11110557d63b9944931256c5fcb1215&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

